import { Row, Col, Card } from "react-bootstrap"
import { data } from "./Data"

export function Project() {
    return (
        <>    
            <h1>My Project</h1>
            <Row xs={1} md={2} className="g-4">
                {data.map((project) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}