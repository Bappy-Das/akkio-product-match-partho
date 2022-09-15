import React, { useContext } from 'react';
import akkio_title_page from "../../assets/akkio_title_page.jpg"
import akkio_cover from "../../assets/akkio_cover.jpeg"
import { FromContext } from '../../function';


const Page1 = () => {
	    const { register, handleSubmit, errors,onSubmit } = useContext(FromContext);
    return (
        <div> 
            <img className='akkio-header-style' src={akkio_title_page} alt="" srcSet=""/>
	        <h3 style={{marginBottom:'20px'}}>Next Gen Product Matching</h3>

	        <p className="intro-text-style"> We're here to make your life easier by providing you with product recommendations that actually cater to your unique preferences, needs, and skin qualitites. Ready to get started? </p>

	        &nbsp;
			{
				errors.fullName && <div className="popup">
	        	<span className="popuptext show" id="namePopup">Please enter your name</span>
	        	</div>
			}
			<div className="get-started-div">
				<input className="get-started-div-input" placeholder="What's your Full Name?" id="fullName" {...register('fullName', { required: true })} />
				<button id="get_started_button" className="get-started-div-button" type='submit' >&#x27F6;</button>
	        </div>

	       <img className='akkio_cover' src={akkio_cover} alt="" srcSet=""/>
        </div>
    );
};

export default Page1;