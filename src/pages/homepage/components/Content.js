import Background from '../../../assets/homepageNinja.png';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Ninja from '../../../assets/NinjaIcon.png';

const Content = () => {
    return (
        <div className="page-wrapper">
            <div className="content-wrapper position-absolute d-flex">
                <div className="left-content">
                    <h1>DijitalNinja</h1>
                    <hr />
                    <div className="content-text">
                        <p>A Marketplace for a lot of professionals freelencer</p>
                    </div>
                    <button>Find One</button>
                </div>
                <div className="right-content">
                    <img src={Ninja} />
                </div>
            </div>
            <div className="background-wrapper">
                <img src={Background} />
            </div>
        </div>
    );
};

export default Content;
