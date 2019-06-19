import React from "react";
import "./Project.css";
import projects from "../../projects.json";

class Project extends React.Component {
    state = {
        projectInfo: []
    }

    componentDidMount() {
        const projectId = parseInt(this.props.match.params.id);
        for (let i = 0; i < projects.length; i++) {
            if (projectId === projects[i].id) {
                this.setState({
                    projectInfo: projects[i]
                });
            }
        }
    }

    render() {
        console.log(this.state.projectInfo);
        return (
            <div>
                <iframe className="videoPlayer" src={this.state.projectInfo.video} title={this.state.projectInfo.id} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Project;