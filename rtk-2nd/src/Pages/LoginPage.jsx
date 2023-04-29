import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";

function LoginPage() {
    const [formData, setFormData] = useState({});

    const handleChanges = ({target}) => {
        const {name, value} = target;
        setFormData((pre) => ({
            ...pre,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return (<>
        <pre>
            {JSON.stringify(formData, null, 2)}
        </pre>
            <Card className="text-center">
                <Card.Body >

                    <Form onSubmit={handleSubmit} className={`text-start`}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={formData.email}
                                name={"email"}
                                onChange={handleChanges}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name={"password"}
                                value={formData.password}
                                onChange={handleChanges}
                            />
                        </Form.Group>
                        <div className="d-grid">

                            <Button variant="primary" className="my-2  justify-content-center align-content-center"
                                    type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>

    )
}

export default LoginPage;