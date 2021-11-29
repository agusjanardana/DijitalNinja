import PaperBackground from '../../components/PaperBackground/index';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';
import FormFour from './components/FormFour';
import FormFive from './components/FormFive';
import { useState } from 'react';

import { useSelector } from 'react-redux';

const ListingForm = () => {
    let stepDatas = useSelector((state) => state.formStep.formSteps);
    const [viewContent, setContent] = useState(false);
    let component = <p>NULL</p>;
    switch (stepDatas) {
        case 1:
            component = <FormOne />;
            break;
        case 2:
            component = <FormTwo />;
            break;
        case 3:
            component = <FormThree />;
            break;
        case 4:
            component = <FormFour />;
            break;
        case 5:
            component = <FormFive />;
            break;
    }
    return <PaperBackground>{component}</PaperBackground>;
};

export default ListingForm;
