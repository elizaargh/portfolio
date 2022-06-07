import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import ttt from "./ttt.png"
import cT from "./cT.png"
import sunshine from "./sunshine.png"
import mdGit from "./mdGit.png"
import icon from "./react.png"
import rails from "./rails.png"
import js from "./js.png"
import resume from "./ElizaNichollsResume_.pdf"




function Home() {
    return (
     <>
     
         

     <Container fluid  className="d-flex align-items-center justify-content-center">
     <Row>
     <p  className="softEngine">Projects</p>
             <Col lg> <div className="cube-3"> <span>Tic-Tac-Toe  </span>
             <br/>    <p>A two player game with some charming CSS </p>
             <img src={ttt}  width={330} height={310}/>
             <br/>
             <a href="https://elizaargh.github.io/TicTacToeProject/" target="_blank">Play here!</a>
             <br/>
             <p>  
               <a href="https://github.com/elizaargh/TicTacToeProject" target="_blank"> 
                  <img src={mdGit}/> 
               </a>
               </p>
             <p>Built using: </p>
             <p>JavaScript, CSS, HTML, jQuery</p>
             
             </div>
             
             </Col>
            
             <Col lg> <div className="cube-3"> <span> CannedTunr  </span>
             <br/> <p>A Group project using Spotify's API and OAuth </p>
            
             
             <img src={cT}  width={420} height={310}/>
             <br/>
             <a href="https://canned-tunr.herokuapp.com/" target="_blank">Explore here!</a>
             <br/>
               <p> 
               <a href="https://github.com/rodsejas/cannedTunr" target="_blank">   
               <img src={mdGit}/></a>  
               </p>

             <p>Built using: </p>
             <p>JavaScript, CSS, React, NodeJS, Material UI</p>
             </div></Col>
             <Col lg> <div className="cube-3"> <span>  Community Centre</span> 
             <br/> <p>Book into classes at Sunshine Lane- Cloud Firestore</p>
             
             <img src={sunshine}  width={340} height={310}/>
             <br/>
             <a href="https://final-project-c67bb.web.app/" target="_blank">Book Now!</a>
             <br/>
             <p>  
                  <a href="https://github.com/elizaargh/final_project" target="_blank"> 
                  <img src={mdGit}/> 
                  </a>
                  </p>
             <p>Built using: </p>
             <p>JavaScript, CSS, React, Bootstrap, Firebase</p>
             </div></Col>
        </Row>
     </Container>
     <br/>
          

    <p  className="softEngine">   
          <br/>
          <br/>
          <br/>
          <br/> 
            Skills</p>
     <Container fluid  className="d-flex align-items-center justify-content-center">
    
   
         <Row>   
             <Col sm> <div className="cube-1"> <img src={icon} width={80} height={80}/><br/> React </div></Col>
             <Col sm> <div className="cube-2"> <img src={rails} width={80} height={80}/> <br/>Rails</div></Col>
             <Col sm> <div className="cube-1"><img src={js} width={80} height={80}/>  JavaScript </div></Col>   
        
    
        
             <Col sm> <div className="cube-2">  Vue</div></Col>
             <Col sm> <div className="cube-1"> HTML </div></Col>
             <Col sm> <div className="cube-2">  CSS </div></Col>
       
          
             <Col sm> <div className="cube-1"> Heroku </div></Col>
             <Col sm> <div className="cube-2">  NodeJS </div></Col>
             <Col sm> <div className="cube-1"> Firebase </div></Col>
             <Col sm> <div className="cube-2"> Firebase </div></Col>
      </Row>
    
    
     </Container>
     <p className="softEngine"> <a href="mailto:eliza.nicholls49@gmail.com">Email+</a>
     <a href={resume} target="_blank" className="resumeLink">My Resume</a></p>
    </>
    );
  }
  
  export default Home;