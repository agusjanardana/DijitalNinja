import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, resetForm, handleFormData, resetStep } from '../../../store/formStepSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// graphql things
import { EditData, CheckTokenValid } from '../../../query/query';
import { useMutation, useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

const FormEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, token } = useParams();
    const { data, loading, error } = useQuery(CheckTokenValid, { variables: { id: id, token: token } });
    const [inputData, { data: dataMut, loading: loadingMut }] = useMutation(EditData);

    const [input, setInput] = useState({
        jobname: '',
        short_description: '',
        price: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        inputData({
            variables: {
                id: id,
                token: token,
                short_description: input.short_description,
                job: input.jobname,
                pricing: input.price,
            },
        }).then(() => {
            navigate(`/detail/${id}`);
        });
    };

    const previousSubmit = (e) => {};

    const handleChange = (e) => {
        e.preventDefault();
        var key = e.target.name;
        var value = e.target.value;
        setInput({ ...input, [key]: value });
        console.log(input);
    };

    return (
        <div>
            {loading ? (
                <p>Loading</p>
            ) : (
                <div>
                    {data.DijitalNinja_user.length === 0 ? (
                        <p>NOT FOUND</p>
                    ) : (
                        <Paper className="rounded-3">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicFullname">
                                    <Form.Label>Edit Job Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your job name"
                                        onChange={handleChange}
                                        name="jobname"
                                        value={input.jobname}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEducation">
                                    <Form.Label>Edit Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Edit your job price"
                                        name="price"
                                        onChange={handleChange}
                                        value={input.price}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Edit ETA</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your job ETA"
                                        name="short_description"
                                        onChange={handleChange}
                                        value={input.short_description}
                                    />
                                </Form.Group>
                                <div className="d-flex flex-column col-lg-4 mx-auto">
                                    <Button onClick={handleSubmit} type="submit">
                                        Submit
                                    </Button>
                                    <Button onClick={previousSubmit} className="mt-1" type="submit">
                                        Delete Job
                                    </Button>
                                </div>
                            </Form>
                        </Paper>
                    )}
                </div>
            )}
        </div>
    );
};

export default FormEdit;
