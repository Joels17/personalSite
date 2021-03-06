import React from 'react';


export default class Main extends React.Component {

    render() {
        return (
            <div>
                <div id="project">
                    <div id="projectImage">
                        <h2>{this.props.title}</h2>
                        {this.props.img? <img alt="Project" src={this.props.img} width="100%" />: ""}
                        <h4>Utilized Software</h4>
                        <p>{this.props.software}</p>
                    </div>
                    <div id="projectDesc">
                        <h4>Description</h4>
                        <p>{this.props.desc}</p>
                        <h4>Functionalities</h4>
                        <p>{this.props.func}</p>

                    </div>
                    
                </div>
                <hr></hr>
            </div>
            
        )}
}