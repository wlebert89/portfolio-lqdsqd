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
                    client={p.client}
                    description1={p.description1}
                    description2={p.description2}
                    description3={p.description3}
                    tags={p.tags}
                    thumbnail={p.thumbnail}
                    video={p.video}
                    overlayColor={p.overlayColor}
                />
                ))}
            </div>
        )
    }
}

export default Portfolio;