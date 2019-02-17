import React from 'react';
import { Container, Row, Carousel } from 'react-materialize';

function Resume() {
    return (
        <Container className = 'resume'>
             <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Home page' />
            <Carousel options = {{fullWidth: true, indicators: true}}>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 white-text valign-wrapper column-dark'>
                     <img src = '' alt = 'Das MA'/>
                  </div>
                  <div className = 'col s12 m6 lighten-4 column-bright about'>
                     <h4>Das MA</h4>
                     <div style={{fontSize: '1.2rem'}} className = 'position'>Software Developer | Project Manager</div>
                     <p>Born in Lithuania. British.<br/>Currently living in California,<br/>Long Beach.</p>
                     <blockquote>Simplicity is the soul of efficiency.</blockquote>
                     <a>Traditional resume</a>
                  </div>
               </Row>

               <div>
               {/* Desktop view */}
                  <Row className = 'hide-on-small-and-down'>
                     <div className = 'col s12 m6 valign-wrapper column-bright centered'>
                        <h1>EXPE<br/>RIEN<br/>CE</h1>
                        
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

                  {/* Mobile and tablet view */}
                  <Row className = 'show-on-small'>
                     <div className = 'col s12' style = {{background: 'white', padding: '0'}}>
                        <h1 style = {{fontSize: '2rem', margin: '0', padding: '0.5rem 3rem'}}>EXPERIENCE</h1>
                        
                     </div>
                     <div className = 'col s12 column-dark' style = {{paddingTop: '1rem'}}>
                        <div className = 'jobs' style = {{paddingBottom: '1.3rem'}}>
                           <div className = 'date' style = {{fontSize: '1rem'}}>2016 - 2017</div>
                           <div className = 'position' style = {{fontSize: '1rem'}}>Project Manager</div>
                           <div className = 'company' style = {{fontSize: '1rem', marginTop: '0'}}>IT - iTech LLC</div>
                           
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '1.3rem'}}>
                           <div className = 'date' style = {{fontSize: '1rem'}}>2014 - 2016</div>
                           <div className = 'position' style = {{fontSize: '1rem'}}>Professional Development</div>
                           <div className = 'company' style = {{fontSize: '1rem', marginTop: '0'}}>PRINCE2 | PMP | PSM</div>
                           
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '1.3rem'}}>
                           <div className = 'date' style = {{fontSize: '1rem'}}>2011 - 2014</div>
                           <div className = 'position' style = {{fontSize: '1rem'}}>Business Owner</div>
                           <div className = 'company' style = {{fontSize: '1rem', marginTop: '0'}}>Connect World LTD</div>
                           
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '1.3rem'}}>
                           <div className = 'date' style = {{fontSize: '1rem'}}>2005 - 2014</div>
                           <div className = 'position' style = {{fontSize: '1rem'}}>Project Manager | Assistant Manager</div>
                           <div className = 'company' style = {{fontSize: '1rem', marginTop: '0'}}>Blue Boar Group</div>
                           
                        </div>
                     </div>
                  </Row>
               </div>
               
               <div>
               {/* Desktop view */}
                  <Row className = 'resume-row hide-on-small-and-down'>
                     <div className = 'col s12 m6 white-text valign-wrapper column-dark centered'>
                        <h1>EDUC<br/>CATI<br/>ON</h1>
                     </div>
                     <div className = 'col s12 m6 column-bright aligned'>
                        <div className = 'jobs'>
                           <div className = 'date'>2018 - 2019</div>
                           <div className = 'position'>Software Developer</div>
                           <div className = 'school'>Lambda School</div>
                        </div>
                        <div className = 'jobs'>
                           <div className = 'date'>2001 - 2005</div>
                           <div className = 'position'>BS | Sport Coaching </div>
                           <div className = 'school'>LSU</div>
                        </div>
                     </div>
                  </Row>
                  {/* Mobile and tablet view */}
                  <Row className = 'show-on-small'>
                     <div className = 'col s12 white-text' style = {{background: '#141414', padding: '0'}}>
                        <h1 style = {{fontSize: '2rem', margin: '0', padding: '0.5rem 3rem'}}>EDUCATION</h1>
                     </div>
                     <div className = 'col s12 column-bright' style = {{paddingTop: '1rem'}}>
                        <div className = 'jobs'>
                           <div className = 'date'>2018 - 2019</div>
                           <div className = 'position'>Software Developer</div>
                           <div className = 'school'>Lambda School</div>
                        </div>
                        <div className = 'jobs'>
                           <div className = 'date'>2001 - 2005</div>
                           <div className = 'position'>BS | Sport Coaching </div>
                           <div className = 'school'>LSU</div>
                        </div>
                     </div>
                  </Row>
               </div>

               <div>
                  {/* Desktop view */}
                  <Row className = 'resume-row hide-on-small-and-down'>
                     <div className = 'col s12 m6 valign-wrapper column-bright centered'>
                        <h1>SKILLS</h1>
                     </div>
                     <div className = 'col s12 m6 white-text column-dark aligned'>
                        <div className = 'jobs'>
                           <div className = 'techTools'>Front End</div>
                           <div className = 'techToolsList'>CSS3, HTML5, JavaScript, React.js,<br/>Front-end development<br/>Responsive design</div>
                        </div>
                        <div className = 'jobs'>
                           <div className = 'techTools'>Back End</div>
                           <div className = 'techToolsList'>Node.js, Express.js, SQLite, Django, Python,<br/>Back-end development </div>
                        </div>
                        <div className = 'jobs'>
                           <div className = 'techTools'>Industry Knowledge</div>
                           <div className = 'techToolsList'>Agile & Scrum methodologies, PRINCE2,<br/>Requirements gathering, SDLC<br/>Vendor management </div>
                        </div>
                        <div className = 'jobs'>
                           <div className = 'techTools'>Tools</div>
                           <div className = 'techToolsList'>Git, VS Code, Postman,<br/>Microsoft Project, Jira, Linux </div>
                        </div>
                        <div className = 'jobs'>
                           <div className = 'techTools'>Interpersonal Skills</div>
                           <div className = 'techToolsList'>Collaborative, Active Listener,<br/>Diverse, Problem Solver  </div>
                        </div>
                     </div>
                  </Row>

                  {/* Mobile and tablet view */}
                  <Row className = 'show-on-small'>
                     <div className = 'col s12' style = {{background: 'white', padding: '0'}}>
                        <h1 style = {{fontSize: '2rem', margin: '0', padding: '0.5rem 3rem'}}>SKILLS</h1>
                     </div>
                     <div className = 'col s12 column-dark' style = {{paddingTop: '1rem'}}>
                        <div className = 'jobs' style = {{paddingBottom: '0.5rem'}}>
                           <div className = 'techTools' style = {{fontSize: '5vw'}}>Front End</div>
                           <div className = 'techToolsList' style = {{fontSize: '3vw'}} >CSS3, HTML5, JavaScript, React.js, Front-end development, Responsive design</div>
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '0.5rem'}}>
                           <div className = 'techTools' style = {{fontSize: '5vw'}}>Back End</div>
                           <div className = 'techToolsList' style = {{fontSize: '3vw'}}>Node.js, Express.js, SQLite, Django, Python, Back-end development </div>
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '0.5rem'}}>
                           <div className = 'techTools' style = {{fontSize: '5vw'}}>Industry Knowledge</div>
                           <div className = 'techToolsList' style = {{fontSize: '3vw'}}>Agile & Scrum methodologies, PRINCE2, Requirements gathering, SDLC, Vendor management </div>
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '0.5rem'}}>
                           <div className = 'techTools' style = {{fontSize: '5vw'}}>Tools</div>
                           <div className = 'techToolsList' style = {{fontSize: '3vw'}}>Git, VS Code, Postman, Microsoft Project, Jira, Linux </div>
                        </div>
                        <div className = 'jobs' style = {{paddingBottom: '0.5rem'}}>
                           <div className = 'techTools' style = {{fontSize: '5vw'}}>Interpersonal Skills</div>
                           <div className = 'techToolsList' style = {{fontSize: '3vw'}}>Collaborative, Active Listener, Diverse, Problem Solver  </div>
                        </div>
                     </div>
                  </Row>
               </div>
            </Carousel>
        </Container>
    )
}

export default Resume;