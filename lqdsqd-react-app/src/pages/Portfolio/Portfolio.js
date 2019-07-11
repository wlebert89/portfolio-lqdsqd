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
                    description={p.description}
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