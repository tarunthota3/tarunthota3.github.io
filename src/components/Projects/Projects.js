import React from 'react';
import Slider from "react-slick";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardComponent from './CardComponent/CardComponent';
import ProjectDetails from './projectDetails.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = require.context('../../assets/projects', true);


function Projects(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className="projects">
            <div className="pmText">Projects</div>
                <div className="displayProjects">
                <Slider {...settings}>
                    {ProjectDetails.map((item, key) =>{
                        var img = images('./' + item.image);
                        return (
                            <CardComponent name={item.name} image={img} description={item.description} />
                        )
                    }
                    )}
                </Slider>
                </div>
        </div>
    );
}

export default Projects;