import React from 'react';
import Skills from './Skills';
import Project from './Project';
import resume from '../files/Joel_Semeniuk_Resume.pdf';
import img from '../images/dannimusicstudio.PNG';

export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <p>Hello,</p>
                <p>My name is <b>Joel Semeniuk</b>. Welcome to my website.</p>
                <p>I am a computer science student at the <i>University of British Columbia Okanagan</i>.</p>
                <p>Please take a look around!</p>
                <div id="info">
                    <p>Email: <i>joel.semeniuk@gmail.com</i></p>
                    <p>Github: <a href="https://github.com/Joels17">Joels17</a></p>
                    <p>Resume: <a href={resume} download="Semeniuk_Joel_Resume">Download the pdf</a></p>
                </div>
                <h1>Skills</h1>
                <Skills />
                <h1>Projects</h1>
                <Project title="Danni's Music Studio" img={img} 
                    desc="
                        This is a website that I developed for a local music teacher. I had originally created the entire app in React,
                        but later found some optimization issues and resorted to pure JavaScript to better my understanding of the language.
                        The timeline for the rebuild was tight as the client only had a few weeks of acceptable downtime.
                    "
                    func="
                        This site allows for user to create an account and login, with student creation. It has multi level users as the teacher
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
                        HTML, CSS, JavaScript (React), Digital Ocean, Docker, Git
                    "   
                />
            </div>
        )}
}