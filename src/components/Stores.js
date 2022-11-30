import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge } from 'react-bootstrap';

function Stores() {
    return (
        <>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center" }}>Choose your store in *hometown*</h2>
            <Container>
                <Row>
                    <Col>
                        <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                            Store 1
                        </Badge>{' '}
                    </Col>
                    <Col>
                        <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                            Store 2
                        </Badge>{' '}
                    </Col>
                    <Col>
                        <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                            Store 3
                        </Badge>{' '}
                    </Col>
                </Row>
                <Row>
                <Col>
                        <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                            Store 4
                        </Badge>{' '}
                    </Col>
                    <Col>
                        <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                            Store 5
                        </Badge>{' '}
                    </Col>
                    <Col>
                        <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                            <p style={{fontSize:"15px"}}>After careful consideration,</p>
                            <p style={{fontSize:"15px"}}>I've decided I don't like Bootstrap.</p>
                        </Badge>{' '}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Stores