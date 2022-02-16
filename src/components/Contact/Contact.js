import { Figure } from "react-bootstrap"
import { Header } from '../Header/Header'
import {link} from './link'


export function Contact () {

    return (
        <>  
            <Header />
            <div className="contact">
                {link.map((ele) => (
                    <div>
                        <Figure.Image src={ele.img} width={200} height={100} alt="171x180" className="testb" />
                        <a href={ele.link} target="_blank" className="testa">{ele.title}</a>
                    </div>
                ))}
            </div>
            {/* <h1>How to contact me</h1>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card> */}
        </>
    )
}