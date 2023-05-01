import { Button, Card, Form, Spinner } from "react-bootstrap";
import { } from "react";
import { clearError, loginUser } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import useFormData from "../hooks/useFormData";
import ErrorList from "../hooks/ErrorList";


function LoginPage() {

    const dispatch = useDispatch()
    const { form, handleChanges } = useFormData({
        initalForm: {

            email: "admin@gmail.com",
            password: "password",

        }, clearError
    })

    const { error, loading } = useSelector((state) => state.users)


    const isDisabled = Object.keys(error).length > 0;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setTimeout(() => {
            dispatch(loginUser(form))

        }, 1000)

    }

    return (<>
        <pre>
            {JSON.stringify(form, null, 2)}
            {JSON.stringify(loading, null, 2)}
        </pre>
        <Card className="text-center">
            <Card.Body >

                <Form onSubmit={handleSubmit} className={`text-start`}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Email"
                            value={form.email}
                            name={"email"}
                            onChange={handleChanges}
                        />
                        <ErrorList error={error.email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name={"password"}
                            value={form.password}
                            onChange={handleChanges}
                        />

                        <ErrorList error={error.password} />
                    </Form.Group>
                    <div className="d-grid">

                        <Button variant="primary" disabled={loading} type="submit">
                            {loading ? (<><Spinner animation="border" size="sm" variant="light" /> <span>Loaing</span> </>) : "Login"}
                        </Button>

                    </div>
                </Form>
            </Card.Body>
        </Card>
    </>

    )
}

export default LoginPage;