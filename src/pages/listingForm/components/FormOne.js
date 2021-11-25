import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../../../store/formStepSlice';

const FormOne = () => {
    const dispatch = useDispatch();

    const nextSubmit = (e) => {
        e.preventDefault();
        dispatch(nextStep());
    };

    const previousSubmit = (e) => {
        e.preventDefault();
        dispatch(previousStep());
    };
    return (
        <Paper className="rounded-3">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address 11111</Form.Label>
                    <Form.Control type="email" placeholder="Enter emailss" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex flex-column col-lg-4 mx-auto">
                    <Button onClick={nextSubmit} type="submit">
                        Next
                    </Button>
                    <Button onClick={previousSubmit} className="mt-1" type="submit">
                        Back
                    </Button>
                </div>
            </Form>
        </Paper>
    );
};

export default FormOne;
