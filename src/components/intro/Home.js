import { Container, Row, Col, Figure, Button } from "react-bootstrap"
import { Header } from '../Header/Header';
import { useNavigate } from "react-router-dom"
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'
import icon from "./coding.png"
import logo from './logo.svg'
import readyVideo from './ready.mp4'


export function Home (){
    let navigate = useNavigate();
    return(
        <div className="home-text">  
            <Header /> 
            <div className="topic">
                <Bounce  left cascade>
                <p>Welcome to Brian's github page</p>
                </Bounce >
            </div>
            <Container>
                <Row>
                    <Col>
                        <Figure>
                            <Fade left cascade delay={2200}>
                                <Figure.Image
                                    width={400}
                                    height={400}
                                    alt="171x180"
                                    src={icon}
                                />
                            </Fade>
                            <Fade left cascade delay={2400}>
                                <Figure.Caption>
                                Generation X CLAP@JC Front-end Web Developer Programme
                                </Figure.Caption>
                            </Fade>
                        </Figure>
                    </Col>
                    <Col>
                        <Fade right cascade delay={2400} >
                            <div>
                                <p>I'm ready to join the <code>web developer</code> industry!!!!</p>
                            </div>
                        </Fade>
                        <Zoom right cascade delay={4000}>
                            <video width="800" height="400" src={readyVideo} type="video/mp4" autoPlay muted loop />
                        </Zoom>
                    </Col>
                </Row>
            </Container>
            <Bounce bottom cascade delay={2000}>
                <div>
                    <p className="topic" > This page create by <code>react</code></p>
                </div>
            </Bounce>
            <header className="App-header justify-content-md-center">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <LightSpeed left cascade delay={500}>
                <Row>
                    <Col>
                        <Button variant="outline-info" onClick={() => {navigate("/project");}}  size="lg" className="home-text" > View My Project</Button>
                    </Col>
                    <Col>
                    <Button variant="outline-info" onClick={() => {navigate("/contact");}}  size="lg" className="home-text" > View My Contact</Button>
                    </Col>
                </Row>
            </LightSpeed>

        </div >
    )
}