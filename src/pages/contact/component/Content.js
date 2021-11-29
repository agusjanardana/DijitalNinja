import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, resetForm, handleFormData, resetStep } from '../../../store/formStepSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../query/query';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const dispatch = useDispatch();
    let formDatas = useSelector((state) => state.formStep.formValue);
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, loading, error } = useQuery(getProductById, {
        variables: { id: id },
    });

    // handle for sending email
    const email = data?.DijitalNinja_user[0].email;

    const [input, setInput] = useState({
        from_name: '',
        from_email: '',
        to_email: email,
        message: '',
        reply_to: '',
    });

    useEffect(() => {
        if (input.to_email == undefined) {
            const email = data?.DijitalNinja_user[0].email;
            setInput({ ...input, to_email: email });
        }
    });

    const nextSubmit = (e) => {
        e.preventDefault();
        //handle sending email
        if (input.reply_to == undefined) {
            var reply = input.from_email;
            setInput({ ...input, reply_to: reply });
        }
        emailjs.send('service_dp4tpi5', 'template_3sinyhi', input, 'user_NXoyAAYmM8rsIqSMnfg7M').then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
                console.log('FAILED...', error);
            }
        );
    };

    const previousSubmit = (e) => {
        navigate('/');
    };

    const handleChange = (e) => {
        e.preventDefault();
        var key = e.target.name;
        var value = e.target.value;
        setInput({ ...input, [key]: value });
    };

    console.log(input);

    return (
        <Paper className="rounded-3">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFullname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your full name here..."
                        onChange={handleChange}
                        name="from_name"
                        value={input.from_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Email Here...."
                        name="from_email"
                        onChange={handleChange}
                        value={input.from_email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="drop your message..."
                            name="message"
                            onChange={handleChange}
                            value={input.message}
                        />
                    </Form.Label>
                </Form.Group>
                <div className="d-flex flex-column col-lg-4 mx-auto">
                    <Button onClick={nextSubmit} type="submit">
                        Submit
                    </Button>
                    <Button onClick={previousSubmit} className="mt-1" type="submit">
                        Home
                    </Button>
                </div>
            </Form>
        </Paper>
    );
};

export default ContactMe;
