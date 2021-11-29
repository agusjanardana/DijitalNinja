import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep, handleFormData } from '../../../store/formStepSlice';
import { useState, useEffect } from 'react';

const FormFour = () => {
    const dispatch = useDispatch();
    let formDatas = useSelector((state) => state.formStep.formValue);
    const [input, setInput] = useState({
        what_you_do: '',
        pricing: '',
        ETA: '',
        short_description: '',
    });

    const nextSubmit = (e) => {
        e.preventDefault();
        dispatch(nextStep());
        dispatch(handleFormData(input));
    };

    useEffect(() => {
        if (formDatas != '') {
            setInput({ ...formDatas });
        }
    }, []);

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
                <Form.Group className="mb-3" controlId="formBasicDo">
                    <Form.Label>What will you do?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="what you want to do..."
                        name="what_you_do"
                        value={input.what_you_do}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPricing">
                    <Form.Label>Pricing</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="how much your cost"
                        name="pricing"
                        value={input.pricing}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicETA">
                    <Form.Label>ETA</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="estimated time..."
                        name="ETA"
                        value={input.ETA}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicShort">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="short description about job..."
                        name="short_description"
                        value={input.short_description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div className="d-flex flex-column col-lg-4 mx-auto">
                    <Button onClick={nextSubmit} type="submit">
                        Next
                    </Button>
                    <Button onClick={previousSubmit} className="mt-1" type="submit" disabled>
                        Back
                    </Button>
                </div>
            </Form>
        </Paper>
    );
};

export default FormFour;
