import { Row, Col, Card } from "react-bootstrap"
import { Header } from '../Header/Header';
import { data } from "./Data"


export function Project() {
    return (
        <>   
            <Header /> 
            <p className="topic-project" >My Project</p>
            <Row xs={2} md={3} className="g-5">
                {data.map((project) => (
                    <Col>
                        <Card className="card">
                            <div className="card-img" >
                                <Card.Img variant="top" src={project.img} className="img" />
                                <div className="overlay" >
                                    <a className="show-page" href={project.link} target="_blank" >View Page</a>
                                    <a className="show-code" href={project.link} target="_blank" >View Code</a>
                                </div>
                            </div>
                            <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
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