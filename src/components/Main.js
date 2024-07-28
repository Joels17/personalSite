import React from 'react';
import Skills from './Skills';
import Project from './Project';
import Experience from'./Experience';
import resume from '../files/Joel_Semeniuk_Resume.pdf';
import imgDanni from '../images/dannimusicstudio.PNG';

export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="intro"> 
                    <p>Hello,</p>
                    <p>My name is <b>Joel Semeniuk</b>. Welcome to my website.</p>
                    <p>I am currently working as a software developer who enjoys closely working with clients from beginning business requirements to feature delivery.</p>
                    <p>I graduated UBCO in 2022 with a 4.33 GPA obtaining my B.Sc. in computer science with a minor in data science.</p>                    
                    <p>In my spare time I enjoy working on side projects with the newest tech, gaming, and spending time with my family and pets.</p>
                    <p>Please take a look around!</p>
                </div>
                <div id="info">
                    <p>Email: <i>joel.semeniuk@gmail.com</i></p>
                    <p>Github: <a href="https://github.com/Joels17">Joels17</a></p>
                    <p>Resume: <a href={resume} download="Semeniuk_Joel_Resume">Download the pdf</a></p>
                </div>
                <h1>Skills</h1>
                <Skills />
                <h1>Work Experience</h1>
                <div id="experience">
                <Experience 
                    title="Equinox Software Design Corporation" 
                    desc="Software Developer, May 2022 - Present" 
                    jobdesc="
                        <p>Deliver features specified by requirements and business rules of large power utilities</p>
                        <ul>
                            <li>Convert client needs into technical specifications</li>
                            <li>Coordinate with clients to ensure optimal satisfaction of new features and enhancements</li>
                            <li>Implement and test requirements within deadlines</li>
                        </ul>
                        <p>Provide maintenance and deployments to servers</p>
                        <p>Implemented features to improve and streamline power outage control room operations</p>
                        <ul>
                            <li>Implemented automated data coordination between two power utilities to reduce manual errors and save operator time for impacted outages</li>
                            <li>Developed jobs to schedule actions and run reports to inform interested parties to enhance monitoring, alerts, and tasks</li>
                            <li>Implemented and designed browsers for users to more accurately query for information improving retrieval abilities and ease of use</li>
                        </ul>
                    "
                    />
                <Experience 
                    title="Reflex Enterprise Solutions Group" 
                    desc="Software Developer, May 2021 - May 2022" 
                    jobdesc="
                        <p>Created a solution for backend report generation communication to the frontend using SignalR</p>
                        <p>Developed a program to upgrade company projects to newer versions of .NET</p>
                        <p>Refactored older projects to take advantage of the repository model</p>
                    "
                    />
                </div>
                <h1>Projects</h1>
                <Project title="Medical Image matching using AI for record linkage"
                    desc="
                        This is a program that was built for my University Capstone Software Engineering Project for BC Cancer.
                        It is done in groups of four and ran for the duration of my 4th year. The program utilized
                        Tensorflow and other open source Python libraries.
                    "
                    func="
                        The program matches medical images using AI. 
                        BC Cancer’s dataset houses many mammograms in which most patients will have multiple images stored to track changes over time (screening), or to better assess suspicious results (diagnostic). 
                        Sometimes, due to manual entry, there will be discrepancies between the same patient’s mammograms. 
                        Through the program , suspected mismatches can be compared using various AI and machine learning methods to output a probability of a match based on the images’ pixel data.
                    "
                    software="
                        Python (Tensorflow, OpenCV, and other open source libraries)
                    "/>
                <Project title="Danni's Music Studio" img={imgDanni} 
                    desc="
                        This is a website that I developed for a local music teacher. I had originally created the entire app in React,
                        but later found some optimization issues and resorted to pure JavaScript to better my understanding of the language.
                        The timeline for the rebuild was tight as the client only had a few weeks of acceptable downtime.
                    "
                    func="
                        This site allows for users to create an account and login, with student creation. It has multi level users as the teacher
                        has different actions than a normal user. The teacher is able to create notes for a specific student, and the 
                        user with that student is able to view the notes created by the teacher. The teacher is also able to edit and delete student notes.
                        Another action that the teacher has is the ability to edit the front page through a WYSIWYG editor.
                    " 
                    software="
                        HTML, CSS, JavaScript, Firebase, Heroku, Git
                    "
                />
                <Project title="Personal Website"
                    desc="
                        I built this site for my personal portfolio to allow for an easier looking experience for those interested.
                        It was developed with a mobile first mindset.
                    "
                    func="
                        This is a fairly simple web site as it doesn't need to be dynamic. But since it runs on React I allowed
                        for a very easy method of updating and adding new projects/experience.
                    " 
                    software="
                        HTML, CSS, JavaScript (React), Digital Ocean, Git
                    "   
                />
            </div>
        )}
}