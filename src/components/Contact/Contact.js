import React, { useState } from 'react';
import {Input, Icon, TextArea, Button, Dimmer, Loader} from 'semantic-ui-react';
import "./Contact.css";
import FooterComponent from '../FooterComponent/FooterComponent';
import { ToastContainer } from "react-toastr";
const fetch = require('node-fetch');
const SERVER_URL = require('../../config/dev.js').SERVER_URL;
let container;


function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [dimmerActive, setDimmerActive] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(re.test(String(email).toLowerCase()));
        
        return re.test(String(email).toLowerCase());
    }
    const handleSubmit = () =>{
        // console.log("inside handle submit function");
        if(name.length === 0){
            // alert("Please enter the name");
            container.warning(
                `Please enter the name`, ``, {
                    timeOut: 2500,
                    extendedTimeOut: 10000,
                    allowHtml: true,
                    closeButton: true,
                });
        }
        else if(email.length === 0){
            // alert("Please enter the email");
            container.warning(
                `Please enter the email`, ``, {
                    timeOut: 2500,
                    extendedTimeOut: 10000,
                    allowHtml: true,
                    closeButton: true,
                });
        }
        else if(!validateEmail(email)){
            // alert("email is not valid");
            container.warning(
                `email is not valid`, ``, {
                    timeOut: 2500,
                    extendedTimeOut: 10000,
                    allowHtml: true,
                    closeButton: true,
                });
        }
        else if(message.length === 0){
            // alert("Please enter a message");
            container.warning(
                `Please enter a message`, ``, {
                    timeOut: 2500,
                    extendedTimeOut: 10000,
                    allowHtml: true,
                    closeButton: true,
                });
        }
        else if(message.length < 8){
            // alert("message can't be less than 8 characters");
            container.warning(
                `Message can't be less than 8 characters`, ``, {
                    timeOut: 2500,
                    extendedTimeOut: 10000,
                    allowHtml: true,
                    closeButton: true,
                });
        }
        else{
            setDimmerActive(true);
            // console.log("validation success");
            const body = {
                name: name,
                email: email,
                message: message
            }
            fetch(SERVER_URL + '/mail', {
                method: 'post',
                body:    JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => {
                return res.json()
           })
           .then((json) => {
            //  console.log(json);
             if(json.statusCode === 200 && json.message === "Message successfully sent"){
                 setName("");
                 setEmail("");
                 setMessage("");
                 setDimmerActive(false);
                container.success(
                    `Message has been successfully sent. You will be notified by the author soon`, ``, {
                      timeOut: 2500,
                      extendedTimeOut: 10000,
                      allowHtml: true,
                      closeButton: true,
                    });
                //  alert("Message has been successfully sent");
             }
           })
           .catch(err => 
            {
                setDimmerActive(false);
                container.warning(
                    `Error in sending the data. Please try again later`, ``, {
                        timeOut: 2500,
                        extendedTimeOut: 10000,
                        allowHtml: true,
                        closeButton: true,
                    });
            //    alert("Error in sending the data")
           })
            
        }
    }

    return (
        <div className="contact">
            <ToastContainer
                ref={ref => container = ref}
                className=" customToastr toast-top-right"
            />
            <Dimmer active={dimmerActive}>
                <Loader></Loader>
            </Dimmer>
            <div className="contactParent">
                <div className="getInTouchBox">
                    <div className="contactText">
                        Get in Touch
                    </div>
                    <div className="getInTouchText">
                        Thank you! You can contact me
                        <br/>
                        by using this form or please
                        <br/>
                        stay connected with me
                        <br/>
                        on the social platforms.
                        <br/>
                        <br/>
                        <a className="link" href="https://www.linkedin.com/in/tarun-thota/" target="_blank" >
                            <Icon size="big" name='linkedin' />
                        </a>
                        <a className="link" href="https://github.com/tarunthota3" target="_blank" >
                            <Icon size="big" name='github' />
                        </a>
                    </div>
                </div>
                <div className="sendMessageBox">
                    <div className="contactText">
                        Send Message
                    </div>
                    <div className="sendMessageDiv">
                        <div className="sendMessageDiv1">
                            <div className="nameDiv">
                                <span >Name</span>
                                <br/>
                                <Input value={name} fluid onChange={e => setName(e.target.value)} className="nameTextBox" type="name" placeholder="John Doe"/>
                            </div>
                            <div className="emptyBox"></div>
                            <div className="emailDiv">
                                <span >Email</span>
                                <br/>
                                <Input value={email} fluid onChange={e => setEmail(e.target.value)} className="emailTextBox" type="email" placeholder="johndoe@gmail.com" />
                            </div>
                        </div>
                        <div className="messageDiv">
                            <span >Message</span>
                            <br/>
                            <TextArea value={message} onChange={e => setMessage(e.target.value)} rows={5} className="messageTextAreaBox" placeholder='Hey...' />
                            <Button className="customButton" primary onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default Contact;