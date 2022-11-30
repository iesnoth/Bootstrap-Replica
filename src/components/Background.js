import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1450px", height: "500px", marginBottom: "50px", backgroundColor: "#DEEED6" }}>
                    <div style={{ top: "auto", width: "1000px", marginLeft: "200px", marginBottom: "50px", marginTop: "45px"}}>
                        <Card.Text style={{ fontSize: "2.5em"}}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control style={{width:"75%"}} size="lg" type="text" placeholder="   Enter your address   " />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{height: "500px", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" />
            </div>
        </div>
    )
}