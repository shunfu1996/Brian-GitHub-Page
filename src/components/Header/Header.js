import { Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
export function Header () {
    let navigate = useNavigate();
    return(
        <>  
            <Nav variant="pills" defaultActiveKey="/home" className='bar'>
                <Nav.Item>
                    <Nav.Link onClick={() => {navigate("/");}} className="test" > Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {navigate("/project");}} className="test" >My project</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {navigate("/contact");}} className="test" >Contact me</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}