import React from "react";
import "./ProjectThumbnail.css";

function ProjectThumbnail(props) {
    return (
        <div className="project-thumbnail">
            <div className="hovereffect color-3">
                <img src={"/images/" + props.thumbnail} alt="" />
                <div className="overlay">
                    <p className="thumbnail-text">
                       {props.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectThumbnail;