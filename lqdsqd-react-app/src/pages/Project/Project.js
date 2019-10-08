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
            <div>
                <div className="container">
                    <div id="project-media">
                        <div className={"video-player-" + this.state.projectInfo.aspectCode}>
                            <iframe src={this.state.projectInfo.video} title={this.state.projectInfo.id} allow="autoplay; fullscreen"></iframe>
                        </div>
                    </div>
                    <div id="project-text">
                        <div className="project-title">
                            {this.state.projectInfo.title}
                        </div>
                        <div className="project-client">
                            {this.state.projectInfo.client}
                        </div>
                        <div className="project-descriptions">
                            <div className="desc-paragraph">
                                {this.state.projectInfo.description1}
                            </div>
                            <div className="desc-paragraph">
                                {this.state.projectInfo.description2}
                            </div>
                            <div className="desc-paragraph">
                                {this.state.projectInfo.description3}
                            </div>
                        </div>
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