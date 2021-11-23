import { Container, Col, Row } from 'react-bootstrap';
import './css/index.css';
import Detail from '../../../assets/detail.png';
import Profile from '../../../assets/profile.jpg';
import Rating from 'react-rating';

const Content = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <section className="content-wrapper-pdp">
                        <div className="left-side">
                            <div className="first-content">
                                <h3 className="detail-title">I'LL MAKE GOOD PAINTING</h3>
                                <div class="first-content-image">
                                    <img src={Detail} alt="detail" />
                                </div>
                                <div className="userProfile d-flex">
                                    <div className="userProfileImage ">
                                        <img className="rounded-circle" src={Profile} />
                                    </div>
                                    <div className="userName">
                                        <p>NINJA ART</p>
                                    </div>
                                </div>
                            </div>
                            <div className="second-content">
                                <div className="second-content-wrapper">
                                    <div className="first-info-pdp-one justify-content-between d-flex">
                                        <div className="createdAt">
                                            <p>Created At</p>
                                            <strong>September 2020</strong>
                                        </div>
                                        <div className="phone">
                                            <p>Phone</p>
                                            <strong>+62823912444</strong>
                                        </div>
                                    </div>
                                    <div className="first-info-pdp-two justify-content-between d-flex">
                                        <div className="createdAt">
                                            <p>Created At</p>
                                            <strong>September 2020</strong>
                                        </div>
                                        <div className="phone ">
                                            <p>Phone</p>
                                            <strong>+62823912444</strong>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="second-content-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae pretium elit
                                            morbi nullam massa tortor amet ultrices. Posuere velit ipsum purus vel
                                            cursus. Ut quisque elementum diam diam aliquet nulla eget ipsum donec. Magna
                                            quis nunc hac venenatis, sed eros, viverra volutpat tristique. Tortor,
                                            volutpat montes, vel vulputate quis bibendum. Erat libero consectetur nisi,
                                            turpis non convallis magna. Ut consectetur auctor turpis est phasellus. Sed
                                            neque elementum vestibulum enim, elementum quisque. Arcu integer felis arcu
                                            imperdiet faucibus sollicitudin amet. Nisl purus consequat elementum eget
                                            semper dolor integer felis ultricies. Dignissim velit in maecenas venenatis
                                            tincidunt eget eget facilisi in. Eros sed ullamcorper interdum{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="third-content">
                                <div className="third-content-wrapper"></div>
                            </div>
                        </div>
                        <div className="right-side ">
                            <div className="sticky-top">
                                <div className="description">
                                    <h3 className="description-title">I'LL MAKE GOOD PAINTING - NINJA ART</h3>
                                    <p>Some painting will make your room more refresing!</p>
                                    <p>
                                        START FROM <span>$15</span>
                                    </p>
                                    <p>ETA</p>
                                    <p>2 Days</p>
                                </div>
                                <div className="action-button d-flex flex-column ">
                                    <button>Contact Me</button>
                                    <button>Is This post is yours?</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default Content;
