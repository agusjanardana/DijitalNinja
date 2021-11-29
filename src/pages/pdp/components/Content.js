import { Container, Col, Row } from 'react-bootstrap';
import './css/index.css';
import Detail from '../../../assets/detail.png';
import Profile from '../../../assets/profile.jpg';
import Rating from 'react-rating';
import filledStar from '../../../assets/FilledStar.png';
import ZonkStar from '../../../assets/ZonkStar.png';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../query/query';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Content = () => {
    const { productId } = useParams();
    const { data, loading, error } = useQuery(getProductById, {
        variables: { id: productId },
    });

    console.log(!data);

    const navigate = useNavigate();

    const contactHandle = (id) => {
        navigate(`/contact/${id}`);
    };

    console.log();
    return (
        <Container>
            <Row>
                <Col>
                    {loading ? (
                        <Loader
                            type="ThreeDots"
                            color="black"
                            height={100}
                            width={100}
                            className="position-absolute top-50 start-50 translate-middle"
                        />
                    ) : !data ? (
                        <p>NOT FOUND</p>
                    ) : (
                        <section className="content-wrapper-pdp">
                            <div className="left-side">
                                <div className="first-content">
                                    <h3 className="detail-title">{data?.DijitalNinja_user[0].job}</h3>
                                    <div class="first-content-image">
                                        <img src={data?.DijitalNinja_user[0].job_images} alt="detail" />
                                    </div>
                                    <div className="userProfile d-flex">
                                        <div className="userProfileImage ">
                                            <img
                                                className="rounded-circle"
                                                src={data?.DijitalNinja_user[0].profile_image}
                                            />
                                        </div>
                                        <div className="userName">
                                            <p>{data?.DijitalNinja_user[0].full_name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="second-content">
                                    <div className="second-content-wrapper">
                                        <div className="first-info-pdp-one justify-content-between d-flex">
                                            <div className="createdAt">
                                                <p>Created At</p>
                                                <strong>{data?.DijitalNinja_user[0].createdAt}</strong>
                                            </div>
                                            <div className="phone">
                                                <p>Phone</p>
                                                <strong>{data?.DijitalNinja_user[0].phone}</strong>
                                            </div>
                                        </div>
                                        <div className="first-info-pdp-two justify-content-between d-flex">
                                            <div className="email">
                                                <p>Email</p>
                                                <strong>b{data?.DijitalNinja_user[0].email}</strong>
                                            </div>
                                            <div className="education">
                                                <p>Education</p>
                                                <strong>{data?.DijitalNinja_user[0].education}</strong>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="second-content-description">
                                            <p>{data?.DijitalNinja_user[0].tell_yourself}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="third-content">
                                    <div className="third-content-wrapper">
                                        <div className="star-review d-flex">
                                            <p>
                                                Reviews
                                                <span className="star-rating">
                                                    <Rating
                                                        fullSymbol={<img src={filledStar} />}
                                                        emptySymbol={<img src={ZonkStar} />}
                                                    />
                                                </span>
                                            </p>
                                        </div>
                                        <div className="review-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci auctor
                                                augue interdum netus proin convallis mattis velit. Condimentum nisl
                                                vitae feugiat volutpat in. Lacus risus malesuada eget tincidunt sagittis
                                                ut. Massa lorem id interdum aliquam faucibus mi.
                                            </p>
                                        </div>
                                        <div className="reviewer-detail d-flex">
                                            <p>
                                                Review By <span>Fisher </span>
                                                <span>19 Jan, 1999</span>
                                            </p>
                                        </div>
                                        <hr />
                                    </div>

                                    <div className="third-action-buttons">
                                        <p>You're Reviewing : </p>
                                        <p>{data?.DijitalNinja_user[0].job}</p>
                                        <button className="button-third">Make a Review</button>
                                    </div>
                                </div>
                            </div>
                            <div className="right-side ">
                                <div className="sticky-top">
                                    <div className="description">
                                        <h3 className="description-title">
                                            {data?.DijitalNinja_user[0].job} -{' '}
                                            <span>{data?.DijitalNinja_user[0].full_name}</span>
                                        </h3>
                                        <p>{data?.DijitalNinja_user[0].short_description}</p>
                                        <p>
                                            START FROM <span>{data?.DijitalNinja_user[0].pricing}</span>
                                        </p>
                                        <p>ETA</p>
                                        <p>
                                            <span>{data?.DijitalNinja_user[0].eta}</span>Days
                                        </p>
                                    </div>
                                    <div className="action-button d-flex flex-column ">
                                        <button onClick={() => contactHandle(data?.DijitalNinja_user[0].id)}>
                                            Contact Me
                                        </button>
                                        <button>Is This post is yours?</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Content;
