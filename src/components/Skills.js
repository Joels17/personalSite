import React from 'react';


export default class Skills extends React.Component {
    render() {
        return (
            <div id="skills">
                <table id="t">
                    <thead>
                        <tr>
                            <th>Most Experience</th>
                            <th>Some Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Java</td>
                            <td>Python</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>R</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>MatLab</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>PHP</td>
                        </tr>    
                        <tr>
                            <td>SQL</td>
                            <td>Git</td>
                        </tr> 
                        <tr>
                            <td></td>
                            <td>Docker</td>
                        </tr> 
                    </tbody>                                                                            
                </table>
            </div>
        )}
}