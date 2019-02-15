import React from 'react';
import { Container, Row } from 'react-materialize';

function Resume() {
    return (
        <Container className = 'resume'>
             <img className = 'bg' style = {{background: '#0B0B0B'}} alt = 'Home page' background = '262E2E' />
             
             <input id="dasma" type="radio" name="rad" checked />
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 white-text valign-wrapper column-dark'>
                     Picture
                  </div>
                  <div className = 'col s12 m6 lighten-4 column-bright'>
                     <h4 style = {{fontWeight: '900'}}>Das MA</h4>
                     <p>Software engineer | Project Manager</p>
                     <p>Born in Lithuania. Lived in <br/>UK & currently living in California,<br/>Long Beach.</p>
                  </div>
                     <label for="education"><i className = "fa fa-chevron-left meetme-icon"></i></label>
                     <label for="experience"><i className = "fa fa-chevron-right meetme-icon"></i></label>
               </Row>

             <input id="experience" type="radio" name="rad"/>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 valign-wrapper column-bright centered'>
                     <h1>EXPERIENCE</h1>
                  </div>
                  <div className = 'col s12 m6 white-text column-dark'>
                     <div className = 'jobs'>
                        <div className = 'date'>2016 - 2017</div>
                        <div className = 'position'>Project Manager</div>
                        <div className = 'company'>IT - iTech LLC</div>
                        <div className = 'responsibility'>Project Manager | Developed Web Solution</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>2016 - 2017</div>
                        <div className = 'position'>Project Manager</div>
                        <div className = 'company'>IT - iTech LLC</div>
                        <div className = 'responsibility'>Project Manager | Developed Web Solution</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>2016 - 2017</div>
                        <div className = 'position'>Project Manager</div>
                        <div className = 'company'>IT - iTech LLC</div>
                        <div className = 'responsibility'>Project Manager | Developed Web Solution</div>
                     </div>
                     <div className = 'jobs'>
                        <div className = 'date'>2016 - 2017</div>
                        <div className = 'position'>Project Manager</div>
                        <div className = 'company'>IT - iTech LLC</div>
                        <div className = 'responsibility'>Project Manager | Developed Web Solution</div>
                     </div>
                  </div>
                     <label for = "dasma"><i className = "fa fa-chevron-left meetme-icon"></i></label>
                     <label for = "education"><i className = "fa fa-chevron-right meetme-icon"></i></label>
               </Row>

             <input id="education" type="radio" name="rad"/>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 white-text valign-wrapper center-align column-dark centered'>
                     <h1>EDUCATION</h1>
                  </div>
                  <div className = 'col s12 m6 column-bright'>
                     <span className = 'date'>2018 - 2019</span>
                  </div>
                     <label for="experience"><i className = "fa fa-chevron-left meetme-icon"></i></label>
                     <label for="dasma"><i className = "fa fa-chevron-right meetme-icon"></i></label>
               </Row>

             {/* <input id="skills" type="radio" name="rad"/>
               <Row className = 'resume-row'>
                  <div className = 'col s12 m6 valign-wrapper center-align column-bright centered'>
                     <h1>SKILLS</h1>
                  </div>
                  <div className = 'col s12 m6 white-text column-dark'>
                     Skills list
                  </div>
                     <label for="education"><i className = "fa fa-chevron-left meetme-icon"></i></label>
                     <label for="dasma"><i className = "fa fa-chevron-right meetme-icon"></i></label>
               </Row> */}
        </Container>
    )
}

export default Resume;