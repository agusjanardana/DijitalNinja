import { Container } from 'react-bootstrap';
import './css/content.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// graphql things
import { CheckTokenValid } from '../../../query/query';
import { useLazyQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

const Content = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [tokenValue, setTokenValue] = useState('');
    const [findData, { data, loading, error }] = useLazyQuery(CheckTokenValid);
    const handleChange = (e) => {
        var value = e.target.value;
        setTokenValue(value);
    };

    useEffect(() => {
        if (data?.DijitalNinja_user.length > 0 && data !== undefined) {
            navigate(`/edit/${data?.DijitalNinja_user[0].id}/${data?.DijitalNinja_user[0].token}`);
        }
    }, [data]);

    const handleSubmit = () => {
        findData({
            variables: {
                id: id,
                token: tokenValue,
            },
        });
    };

    const backHome = () => {
        navigate(`/freelencer`);
    };

    return (
        <Container>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="title-wrapper-thanks col-lg-12 col-md-12 col-sm-12">
                    <h3>Enter Your Token</h3>
                    <p>To edit your job, please provide your token below</p>
                </div>
                <div className="unique-code-thanks">
                    <input value={tokenValue} onChange={handleChange} />
                </div>
                <div className="action-buttom-thank d-flex flex-column col-lg-8 mx-auto mt-4">
                    <button onClick={handleSubmit}>Submit</button>
                    <button className="mt-2" onClick={backHome}>
                        Go To Marketplace
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Content;
