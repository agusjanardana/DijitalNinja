import PaperBackgrounds from '../../assets/paperBackground.png';
import './css/paperBackground.css';

const PaperBackground = ({ children }) => {
    return (
        <div className="paper-background-wrapper">
            <div className="paper-background-content">
                {children}
                <img src={PaperBackgrounds} />
            </div>
        </div>
    );
};

export default PaperBackground;
