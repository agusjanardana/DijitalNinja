import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep, handleFormData } from '../../../store/formStepSlice';
import { useState, useEffect } from 'react';

const FormTwo = () => {
    const dispatch = useDispatch();
    let formDatas = useSelector((state) => state.formStep.formValue);
    const [input, setInput] = useState({
        tell_your_self: '',
    });

    useEffect(() => {
        if (formDatas != '') {
            setInput({ ...formDatas });
        }
    }, []);

    const nextSubmit = (e) => {
        e.preventDefault();
        dispatch(nextStep());
        dispatch(handleFormData(input));
    };

    const previousSubmit = (e) => {
        e.preventDefault();
        dispatch(previousStep());
    };

    const handleChange = (e) => {
        e.preventDefault();
        var key = e.target.name;
        var value = e.target.value;
        setInput({ ...input, [key]: value });
    };
    return (
        <Paper className="rounded-3">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tell about your self</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="tell about your self..."
                        name="tell_your_self"
                        onChange={handleChange}
                        value={input.tell_your_self}
                    />
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

export default FormTwo;
