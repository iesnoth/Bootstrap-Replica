import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function MakeNav() {

    return (
        <>
            <Nav>
                <Nav.Item>
                    <img src= "https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
                    alt="logo" />
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-end" style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder"}}>
                <Nav.Item>
                    <Nav.Link style={{color: "#343538"}} href="#LogIn">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="success" style={{ fontSize: "18px" }}>Sign Up</Button>{' '}
                </Nav.Item>
            </Nav>
        </>
    );

}

export default MakeNav