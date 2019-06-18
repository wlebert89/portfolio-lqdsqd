import React from "react";
import "./Project.css";

class Project extends React.Component {
    state = {

    };

    render(){
        return (
            <div>
                <iframe className="videoPlayer" src={this.props.location.state.video} title={this.props.location.state.id} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Project;