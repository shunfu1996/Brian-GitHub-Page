import { Row, Col, Card } from "react-bootstrap"
import { Header } from '../Header/Header';
import { data } from "./Data"


export function Project() {
    return (
        <>   
            <Header /> 
            <p className="topic-project" >My Project</p>
            <Row lg={3} md={2} className="g-5 ">
                {data.map((project) => (
                    <Col xs={6} className="tt" >
                        <Card className="card">
                            <div className="card-img" >
                                <Card.Img variant="top" src={project.img} className="img" />
                                <div className="overlay" >
                                    { project.link?<a className="show-page" href={project.link} rel="noreferrer" target="_blank" >View Page</a>:
                                    <a className="show-page disabled" href={project.link} rel="noreferrer" target="_blank" >View Page</a>}
                                    <a className={project.code?"show-code":"show-code disabled"} href={project.code} rel="noreferrer" target="_blank" >View Code</a>
                                </div>
                            </div>
                            <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text className="moblie">
                                {project.text}
                            </Card.Text>
                            <Card.Footer className="card-lan" >{project.language}</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}