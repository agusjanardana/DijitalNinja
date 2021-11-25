import { Card } from 'react-bootstrap';

const Paper = ({ children }) => {
    return (
        <Card className="position-absolute top-50 start-50 translate-middle" style={{ width: '28rem' }}>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};

export default Paper;
