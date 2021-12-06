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
                    <p>I am a 4th year student (graduating April 2022) attending the <i>University of British Columbia Okanagan</i>, majoring in Computer Science and minoring in Data Science.</p>
                    <p>Please take a look around!</p>
                </div>
                <div id="info">
                    <p>Email: <i>joel.semeniuk@gmail.com</i></p>
                    <p>Github: <a href="https://github.com/Joels17">Joels17</a></p>
                    <p>Resume: <a href={resume} download="Semeniuk_Joel_Resume">Download the pdf</a></p>
                </div>
                <h1>Skills</h1>
                <Skills />
                <h1>Experience</h1>
                <div id="experience">
                <Experience 
                    title="Reflex Enterprise Solutions Group" 
                    desc="Software Developer, May 2021 - Present" 
                    jobdesc="
                        Created a solution for backend report generation communication to the frontend using SignalR.
                        Developing a program to upgrade company projects to newer versions of .NET.
                        Refactoring older projects to take advantage of the repository model.
                    "
                    />
                </div>
                <h1>Projects</h1>
                <Project title="Medical Image matching using AI for record linkage"
                    desc="
                        This is a program being built for my University Capstone Software Engineering Project and is being done for BC Cancer.
                        It is done in groups of four and runs for the duration of my 4th year. The program will utilize 
                        Tensorflow and other open source Python libraries.
                    "
                    func="
                        The program to be built will match medical images using AI. 
                        BC Cancer’s dataset houses many mammograms in which most patients will have multiple images stored to track changes over time (screening), or to better assess suspicious results (diagnostic). 
                        Sometimes, due to manual entry, there will be discrepancies between the same patient’s mammograms. 
                        Through the program to be developed, suspected mismatches can be compared using various AI and machine learning methods to output a probability of a match based on the images’ pixel data.
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
                        for a very easy method of updating and adding new projects.
                    " 
                    software="
                        HTML, CSS, JavaScript (React), Digital Ocean, Git
                    "   
                />
            </div>
        )}
}