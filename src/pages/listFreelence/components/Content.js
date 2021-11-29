import { Row, Col, Container, Card } from 'react-bootstrap';
import './css/index.css';
import Images from '../../../assets/VideoEditor.png';
import { useQuery } from '@apollo/client';
import { getListFreelence } from '../../../query/query';
import Loader from 'react-loader-spinner';

const Content = () => {
    const { data, loading, error } = useQuery(getListFreelence);
    console.log(loading);

    return (
        <Container className="mt-4">
            {loading ? (
                <Loader
                    type="ThreeDots"
                    color="black"
                    height={100}
                    width={100}
                    className="position-absolute top-50 start-50 translate-middle"
                />
            ) : (
                <div>
                    <div class="freelence-title">
                        <h3>Freelence - List</h3>
                    </div>
                    <Row xs={1} lg={5} className="g-4 mt-2">
                        {data?.DijitalNinja_user.map((item) => (
                            <Col key={item.id} id={item.id}>
                                <Card>
                                    <Card.Img variant="top" src={item.job_images} />
                                    <Card.Body>
                                        <Card.Title className="text-center card-title-custom">{item.job}</Card.Title>
                                        <Card.Text>{item.short_description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default Content;
