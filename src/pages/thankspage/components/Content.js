import { Container } from 'react-bootstrap';
import './css/content.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetStep, resetForm } from '../../../store/formStepSlice';
import { useEffect, useState } from 'react';

const Content = () => {
    const dispatch = useDispatch();
    const [tokenValue, setTokenValue] = useState('');
    let formDatas = useSelector((state) => state.formStep.formValue);

    useEffect(() => {
        dispatch(resetStep());
        setTokenValue(formDatas.token);
        dispatch(resetForm());
    }, []);

    return (
        <Container>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="title-wrapper-thanks col-lg-12 col-md-12 col-sm-12">
                    <h3>Thanks you for submitting</h3>
                    <p>HERE IS YOUR UNIQUE CODE, PLEASE SAVE IT !</p>
                </div>
                <div className="unique-code-thanks">
                    <input placeholder="" value={tokenValue} disabled />
                </div>
                <div className="action-buttom-thank d-flex flex-column col-lg-8 mx-auto mt-4">
                    <button>Home</button>
                    <button className="mt-2">Go To Marketplace</button>
                </div>
            </div>
        </Container>
    );
};

export default Content;
