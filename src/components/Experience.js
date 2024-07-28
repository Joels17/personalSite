import React from 'react';


export default class Main extends React.Component {

    render() {
        return (
            <div>
                <div id="experienceJob">
                    <div id="job">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.desc}</p>
                        <div id="jobdesc" dangerouslySetInnerHTML={{__html: this.props.jobdesc}}/>
                    </div>
                </div>
            </div>
            
        )}
}