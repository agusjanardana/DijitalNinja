import PaperBackground from '../../components/PaperBackground/index';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import { useDispatch, useSelector } from 'react-redux';

const ListingForm = () => {
    let stepDatas = useSelector((state) => state.formStep.formSteps);
    let component = <p>NULL</p>;
    switch (stepDatas) {
        case 1:
            component = <FormOne />;
            break;
        case 2:
            component = <FormTwo />;
            break;
        default:
            component = <FormOne />;
    }
    return <PaperBackground>{component}</PaperBackground>;
};

export default ListingForm;
