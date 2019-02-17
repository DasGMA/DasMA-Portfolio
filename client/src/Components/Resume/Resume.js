import React from 'react';
import { Container, Row, Carousel } from 'react-materialize';

function Resume() {
    return (
        <Container className = 'resume'>
             <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Home page' background = '262E2E' />
            <Carousel options = {{fullWidth: true, indicators: true}}>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 white-text valign-wrapper column-dark'>
                     <img src = '' alt = 'Das MA'/>
                  </div>
                  <div className = 'col s12 m6 lighten-4 column-bright'>
                     <h4 style = {{fontWeight: '900'}}>Das MA</h4>
                     <p>Software engineer | Project Manager</p>
                     <p>Born in Lithuania. Lived in <br/>UK & currently living in California,<br/>Long Beach.</p>
                  </div>
               </Row>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 valign-wrapper column-bright centered'>
                     <h1>EXPERIENCE</h1>
                     
                  </div>
                  <div className = 'col s12 m6 white-text column-dark aligned'>
                     <div className = 'jobs'>
                        <div className = 'date'>2016 - 2017</div>
                        <div className = 'position'>Project Manager</div>
                        <div className = 'company'>IT - iTech LLC</div>
                        <div className = 'responsibility'>Business Project Manager | Developed Web Solution</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>Dec. 2014 - Jan. 2016</div>
                        <div className = 'position'>Professional Development</div>
                        <div className = 'company'>PRINCE2 | PMP | PSM</div>
                        <div className = 'responsibility'>Acquired Project Management Certifications</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>2011 - 2014</div>
                        <div className = 'position'>Business Owner</div>
                        <div className = 'company'>Connect World LTD</div>
                        <div className = 'responsibility'>Business Project Manager | Developed Web Solution</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>2005 - 2014</div>
                        <div className = 'position'>Project Manager | Assistant Manager</div>
                        <div className = 'company'>Blue Boar Group</div>
                        <div className = 'responsibility'>Hotel Expansion Project Manager</div>
                     </div>
                  </div>
               </Row>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 white-text valign-wrapper center-align column-dark centered'>
                     <h1>EDUCATION</h1>
                  </div>
                  <div className = 'col s12 m6 column-bright aligned'>
                     <div className = 'jobs'>
                        <div className = 'date'>2018 - 2019</div>
                        <div className = 'position'>Full Stack Software Engineer </div>
                        <div className = 'school'>Lambda School</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>2001 - 2005</div>
                        <div className = 'position'>BS | Sport Coaching </div>
                        <div className = 'school'>Lithuanian Sports University</div>
                     </div>
                  </div>
               </Row>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 valign-wrapper center-align column-bright centered'>
                     <h1>SKILLS</h1>
                  </div>
                  <div className = 'col s12 m6 white-text column-dark aligned'>
                     <div className = 'jobs'>
                        <div className = 'techTools'>Front End Coding</div>
                        <div className = 'techToolsList'>CSS3, HTML5, JavaScript, React.js<br/>Front-end development<br/>Responsive design</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'techTools'>Back End Coding</div>
                        <div className = 'techToolsList'>Node.js, Express.js, SQLite, Django, Python<br/>Back-end development </div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'techTools'>Industry Knowledge</div>
                        <div className = 'techToolsList'>Agile & Scrum methodologies, PRINCE2<br/>Requirements gathering, SDLC<br/>Vendor management </div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'techTools'>Tools</div>
                        <div className = 'techToolsList'>Git, Microsoft Project, Jira, VS Code, Linux </div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'techTools'>Interpersonal Skills</div>
                        <div className = 'techToolsList'>Collaborative, Active listener, Diverse, Problem Solving  </div>
                     </div>
                  </div>
               </Row>
            </Carousel>
        </Container>
    )
}

export default Resume;