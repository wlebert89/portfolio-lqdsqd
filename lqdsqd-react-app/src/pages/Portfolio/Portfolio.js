import React from "react";
import "./Portfolio.css";
import projects from "../../projects.json";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumnail"

class Portfolio extends React.Component {
    state = {
        projects
    };

    render() {
        return (
            <div id="projects">
                {this.state.projects.map(p => (
                <ProjectThumbnail 
                    id={p.id}
                    key={p.id}
                    title={p.title}
                    thumbnail={p.thumbnail}
                />
                ))}
            </div>
        )
    }
}

export default Portfolio;