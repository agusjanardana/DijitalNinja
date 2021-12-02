import Paper from '../../../components/Paper/index';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import filledStar from '../../../assets/FilledStar.png';
import ZonkStar from '../../../assets/ZonkStar.png';
import { useParams } from 'react-router-dom';
import { postDataReview } from '../../../query/query';
import { useMutation } from '@apollo/client';

import { ToastContainer, toast } from 'react-toastify';

const Content = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inputDataList, { data, loading, error }] = useMutation(postDataReview);
    const [viewError, setError] = useState(false);

    const [input, setInput] = useState({
        user_id: id,
        rating: 0,
        reviewer_name: '',
        review_message: '',
    });

    const nextSubmit = (e) => {
        e.preventDefault();
        if (input.rating === '') {
            setError(true);
            return false;
        }
        if (input.reviewer_name === '') {
            setError(true);
            return false;
        }
        if (input.review_message === '') {
            setError(true);
            return false;
        }
        inputDataList({
            variables: {
                object: {
                    rating: input.rating,
                    review_message: input.review_message,
                    reviewer_name: input.reviewer_name,
                    user_id: input.user_id,
                },
            },
        }).then(() => {
            console.log('success');
            navigate(`/detail/${id}`);
        });
    };

    const previousSubmit = (e) => {
        navigate('/');
    };

    const handleChange = (e) => {
        e.preventDefault();
        var key = e.target.name;
        var value = e.target.value;
        if (value !== '') {
            setError(false);
        }
        setInput({ ...input, [key]: value });
    };

    const startOnChange = (rate) => {
        input.rating = rate;
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
            {viewError ? (
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
                            <Form.Group className="mb-3" controlId="formBasicRating">
                                <Form.Label>Your Rating</Form.Label>
                                <div>
                                    <Rating
                                        fullSymbol={<img src={filledStar} />}
                                        emptySymbol={<img src={ZonkStar} />}
                                        onChange={(rate) => startOnChange(rate)}
                                        initialRating={input.rate}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Drop Your Name...."
                                    name="reviewer_name"
                                    onChange={handleChange}
                                    value={input.reviewer_name}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicReview">
                                <Form.Label>Review</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    type="text"
                                    placeholder="your reviews.."
                                    name="review_message"
                                    onChange={handleChange}
                                    value={input.review_message}
                                />
                            </Form.Group>
                            <div className="d-flex flex-column col-lg-4 mx-auto">
                                <Button onClick={nextSubmit} type="submit">
                                    Submit
                                </Button>
                                <Button onClick={previousSubmit} className="mt-1" type="submit">
                                    Home
                                </Button>
                                <small>{loading ? 'Progress uploading to hashura' : ''}</small>
                            </div>
                        </Form>
                    </Paper>
                </div>
            ) : (
                <Paper className="rounded-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicRating">
                            <Form.Label>Your Rating</Form.Label>
                            <div>
                                <Rating
                                    fullSymbol={<img src={filledStar} />}
                                    emptySymbol={<img src={ZonkStar} />}
                                    onChange={(rate) => startOnChange(rate)}
                                    initialRating={input.rate}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Drop Your Name...."
                                name="reviewer_name"
                                onChange={handleChange}
                                value={input.reviewer_name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicReview">
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={10}
                                type="text"
                                placeholder="your reviews.."
                                name="review_message"
                                onChange={handleChange}
                                value={input.review_message}
                            />
                        </Form.Group>
                        <div className="d-flex flex-column col-lg-4 mx-auto">
                            <Button onClick={nextSubmit} type="submit">
                                Submit
                            </Button>
                            <Button onClick={previousSubmit} className="mt-1" type="submit">
                                Home
                            </Button>
                            <small>{loading ? 'Progress uploading to hashura' : ''}</small>
                        </div>
                    </Form>
                </Paper>
            )}
        </>
    );
};

export default Content;
