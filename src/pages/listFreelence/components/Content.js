import { Row, Col, Container, Card } from 'react-bootstrap';
import './css/index.css';
import Images from '../../../assets/VideoEditor.png';

const Content = () => {
    return (
        <Container>
            <div class="freelence-title">
                <h3>Freelence - List</h3>
            </div>
            <Row xs={1} lg={5} className="g-4 mt-2">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Images} />
                            <Card.Body>
                                <Card.Title className="text-center card-title-custom">Video Editor</Card.Title>
                                <Card.Text>I want to display Video</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Content;
