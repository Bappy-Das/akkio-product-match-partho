import React, { useState } from 'react';
import left_leaf from "../../assets/left_leaf.jpg"
import right_leaf from "../../assets/right_leaf.jpg"
import akkio_logo from "../../assets/akkio_logo.jpg"
import './Home.css'
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page5 from '../Page5/Page5';
import Page6 from '../Page6/Page6';
import Page7 from '../Page7/Page7';
import Page8 from '../Page8/Page8';
import Page9 from '../Page9/Page9';
import Page10 from '../Page10/Page10';
import Page11 from '../Page11/Page11';
import Page12 from '../Page12/Page12';
import Page13 from '../Page13/Page13';
import Page14 from '../Page14/Page14';
import Page15 from '../Page15/Page15';
import Page16 from '../Page16/Page16';
import Page17 from '../Page17/Page17';
import Page18 from '../Page18/Page18';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FromContext } from '../../function';

const Home = () => {
    // const [step, setStep] = useState(1)

    const { register, handleSubmit, errors,onSubmit,step } = useContext(FromContext);

    // const [formData, setFormData] = useState({
    //     fullName: "",
	//     disclaimerChecked: "",
	//     emailAddress: "",
	//     streetAddress: "",
	//     selfieFileName: "",
	//     q1_response: "",
	//     q2_response: "",
	//     q3_response: "",
	//     q4_response: "",
	//     q5_response: "",
	//     q6_response: "",
	//     q7_response: "",
	//     q8_response: "",
	//     q9_response: "",
	//     q10_response: "",
	//     q11_response: "",
	//     q12_response: "",
	//     q13_response: "",
	//     userDataId: "",
	//     createdAt: ""
    // })

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const pages = [
        { stepKey: 1, page: <Page1 />},
        { stepKey: 2, page: <Page2 /> },
        { stepKey: 3, page: <Page3 /> },
        { stepKey: 4, page: <Page4 /> },
        { stepKey: 5, page: <Page5 /> },
        { stepKey: 6, page: <Page6 /> },
        { stepKey: 7, page: <Page7 /> },
        { stepKey: 8, page: <Page8 /> },
        { stepKey: 9, page: <Page9 /> },
        { stepKey: 10, page: <Page10/> },
        { stepKey: 11, page: <Page11/> },
        { stepKey: 12, page: <Page12/> },
        { stepKey: 13, page: <Page13/> },
        { stepKey: 14, page: <Page14/> },
        { stepKey: 15, page: <Page15/> },
        { stepKey: 16, page: <Page16/> },
        { stepKey: 17, page: <Page17/> },
        { stepKey: 18, page: <Page18/> },

    ]
    const currentStep = pages.find(item => item.stepKey === step)
    return (
        <div>
            <div>
                <img className='left_leaf' src={left_leaf} alt="" srcset=""/>
            </div>
            <div>
                <img className='right_leaf' src={right_leaf} alt="" srcset="" />
            </div>
            <div>
                <img className='akkio_logo' src={akkio_logo} alt="" srcset="" />
            </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {currentStep.page}
                    </div>
                </form>
        </div>
    );
};

export default Home;