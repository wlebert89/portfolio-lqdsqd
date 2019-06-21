import React from "react";
import { Link } from "react-router-dom";

function ProjectThumbnail(props) {
    return (
        <div className="project-thumbnail">
            <Link to={`/portfolio/project/${props.id}`}>
                <div className={"hovereffect color-" + props.overlayColor}>
                    <img src={`/images/thumbnails/${props.thumbnail}`} alt={props.title} />
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