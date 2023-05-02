import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useCallback, useEffect } from "react";
import { clearError, loginUser } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import useFormData from "../hooks/useFormData";
import ErrorList from "../form/ErrorList";


function LoginPage() {
    const { error, loading, formData } = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const { form, handleChanges } = useFormData({
        initalForm: formData, clearError
    })

    // const storeFormData = useSelector(state => state.users.formData);
    // useEffect(() => {
    //     setFormData(storeFormData);
    // }, [storeFormData]);


    // const updateFormData = useCallback((key, value) => {
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [key]: value
    //     }));
    // }, []);

    // const handleInputChange = useCallback((event) => {
    //     const { name, value } = event.target;
    //     updateFormData(name, value);
    // }, [updateFormData]);






    // const isDisabled = Object.keys(error ?? null).length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(form))
    }


    //memorize the formData on change form  update formData from store




    return (<>

        <div className="">
            <pre>
                {JSON.stringify(form, null, 2)}
                <br />
                {JSON.stringify(loading, null, 2)}
                <br />
                {JSON.stringify(error, null, 2)}
            </pre>
        </div>

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

                        {error && <ErrorList error={error.email} />}

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
                        {error && <ErrorList error={error.password} />}

                    </Form.Group>
                    <div className="d-grid">

                        <Button variant="primary" disabled={loading} type="submit">
                            {loading ? (<><Spinner animation="border" size="sm" variant="light" /> <span>Loaing</span> </>) : "Login"}
                        </Button>
                        {/* <Button variant="primary" disabled={loading} type="submit">
                            <Spinner animation="border" size="sm" variant="light" /> <span>Loaing</span>
                        </Button> */}

                    </div>
                </Form>
            </Card.Body>
        </Card>
    </>

    )
}

export default LoginPage;