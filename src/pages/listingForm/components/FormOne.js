import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, resetForm, handleFormData, resetStep } from '../../../store/formStepSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const FormOne = () => {
    const dispatch = useDispatch();
    let formDatas = useSelector((state) => state.formStep.formValue);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [input, setInput] = useState({
        full_name: '',
        education: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (formDatas != '') {
            setInput({ ...formDatas });
        }
    }, []);

    const nextSubmit = (e) => {
        e.preventDefault();
        if (input.fullname == '') {
            setError(true);
            return false;
        }
        if (input.education == '') {
            setError(true);
            return false;
        }
        if (input.email == '') {
            setError(true);
            return false;
        }
        if (input.phone == '') {
            setError(true);
            return false;
        }
        dispatch(nextStep());
        dispatch(handleFormData(input));
        setError(false);
    };

    const previousSubmit = (e) => {
        dispatch(resetForm());
        dispatch(resetStep());
        navigate('/');
    };

    const handleChange = (e) => {
        e.preventDefault();
        var key = e.target.name;
        var value = e.target.value;
        setInput({ ...input, [key]: value });
    };

    const customId = 'no-duplicate';

    toast.error('Ada field yang kosong', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: customId,
    });

    return (
        <>
            {error ? (
                <div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <Paper className="rounded-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your full name here..."
                                    onChange={handleChange}
                                    name="full_name"
                                    value={input.full_name}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEducation">
                                <Form.Label>Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Education Background...."
                                    name="education"
                                    onChange={handleChange}
                                    value={input.education}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Your E-mail here..."
                                    name="email"
                                    onChange={handleChange}
                                    value={input.email}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEducation">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Phone Number...."
                                    name="phone"
                                    onChange={handleChange}
                                    value={input.phone}
                                />
                            </Form.Group>
                            <div className="d-flex flex-column col-lg-4 mx-auto">
                                <Button onClick={nextSubmit} type="submit">
                                    Next
                                </Button>
                                <Button onClick={previousSubmit} className="mt-1" type="submit">
                                    Home
                                </Button>
                            </div>
                        </Form>
                    </Paper>
                </div>
            ) : (
                <Paper className="rounded-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your full name here..."
                                onChange={handleChange}
                                name="full_name"
                                value={input.full_name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEducation">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Education Background...."
                                name="education"
                                onChange={handleChange}
                                value={input.education}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your E-mail here..."
                                name="email"
                                onChange={handleChange}
                                value={input.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEducation">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number...."
                                name="phone"
                                onChange={handleChange}
                                value={input.phone}
                            />
                        </Form.Group>
                        <div className="d-flex flex-column col-lg-4 mx-auto">
                            <Button onClick={nextSubmit} type="submit">
                                Next
                            </Button>
                            <Button onClick={previousSubmit} className="mt-1" type="submit">
                                Home
                            </Button>
                        </div>
                    </Form>
                </Paper>
            )}
        </>
    );
};

export default FormOne;
