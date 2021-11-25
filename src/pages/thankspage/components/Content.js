import { Container } from 'react-bootstrap';
import './css/content.css';
const Content = () => {
    return (
        <Container>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="title-wrapper-thanks col-lg-12 col-md-12 col-sm-12">
                    <h3>Thanks you for submitting</h3>
                    <p>HERE IS YOUR UNIQUE CODE, PLEASE SAVE IT !</p>
                </div>
                <div className="unique-code-thanks">
                    <input placeholder="" value="Q2WE23ASDASDADZXCaaaaaaaaaaaaaaaaaa" disabled />
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
