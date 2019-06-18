import React from "react";
import "./ProjectThumbnail.css";
import { Link } from "react-router-dom";

function ProjectThumbnail(props) {
    return (
        <div className="project-thumbnail">
            <Link to={{
                pathname: '/project', state: {
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    tags: props.tags,
                    video: props.video
                }
            }}>
                <div className={"hovereffect color-" + props.overlayColor}>
                    <img src={"/images/" + props.thumbnail} alt={props.title} />
                    <div className="overlay">
                        <p className="thumbnail-text">
                            {props.title}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectThumbnail;