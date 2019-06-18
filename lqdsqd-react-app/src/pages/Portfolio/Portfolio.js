import React from "react";
import "./Portfolio.css";
import Projects from "../../projects.json";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumnail"

class Portfolio extends React.Component {
    state = {
        Projects
    };

    render() {
        return (
            <div id="projects">
                <ProjectThumbnail />
            </div>
        )
    }
}

export default Portfolio;