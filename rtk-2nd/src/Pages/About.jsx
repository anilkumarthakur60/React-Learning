import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

import { setFormData, clearError } from "../redux/slice/postsSlice";
import { useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";

function About() {

    const { formData } = useSelector((state) => state.posts)
    const { handleChange } = useForm({ formData, setFormData, clearError });


    const [show, setShow] = useState(false);
    return (
        <div className={'container-fluid'}>
            <pre>
                {JSON.stringify(formData, null, 2)}
            </pre>

            <form >
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email || ""} onChange={handleChange} />

                <input type="email" id="email" name="phone" value={formData.phone || ""} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" value={formData.password || ""} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>

            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </Col>
            </Row>


        </div>
    )
}

export default About;