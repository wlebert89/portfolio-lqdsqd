import React from "react";
import "./Project.css";
import projects from "../../projects.json";

class Project extends React.Component {
    state = {
        projectInfo: []
    }

    componentDidMount() {
        const projectId = parseInt(this.props.match.params.id);

        const projectInfo = projects.find(({ id }) => projectId === id)

        this.setState({ projectInfo });

       window.scrollTo(0, 0) 
    }

    renderContent() {
        return (
            <div className="container">
                <div id="project-right">
                    <div className="video-player">
                        <iframe src={this.state.projectInfo.video} title={this.state.projectInfo.id} allow="autoplay; fullscreen"></iframe>
                    </div>
                </div>
                <div id="project-left">
                    <div className="project-title">
                        {this.state.projectInfo.title}
                    </div>
                    <div className="project-client">
                        {this.state.projectInfo.client}
                    </div>
                    <div className="project-desc">
                        {this.state.projectInfo.description}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.renderContent();
    }
}

export default Project;