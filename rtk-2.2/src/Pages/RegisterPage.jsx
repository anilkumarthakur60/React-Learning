import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearError, registerUserAction } from "../redux/slice/userSlice";
import useFormData from "../hooks/useFormData";
import ErrorList from "../form/ErrorList";

function RegisterPage() {


    const dispatch = useDispatch()
    const { form, handleChanges } = useFormData({ initalForm: {}, clearError })

    const { error } = useSelector((state) => state.users)


    const isDisabled = Object.keys(error).length > 0;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        dispatch(registerUserAction(form))

    }

    return (<>
        <pre>
            {JSON.stringify(form, null, 2)}
        </pre>
        <Card className="text-center">
            <Card.Body >

                <Form onSubmit={handleSubmit} className={`text-start`}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={form.name}
                            name={"name"}
                            onChange={handleChanges}
                        />
                    </Form.Group>

                    <ErrorList error={error.name} />


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name={"email"}
                            value={form.email}
                            onChange={handleChanges}
                        />
                    </Form.Group>

                    <ErrorList error={error.email} />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name={"password"}
                            value={form.password}
                            onChange={handleChanges}
                        />
                    </Form.Group>

                    <ErrorList error={error.password} />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password Confirmation"
                            name={"password_confirmation"}
                            value={form.password_confirmation}
                            onChange={handleChanges}
                        />
                    </Form.Group>

                    <ErrorList error={error.password_confirmation} />
                    <div className="d-grid">

                        <Button variant="primary" disabled={isDisabled} className="my-2  justify-content-center align-content-center"
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

export default RegisterPage;