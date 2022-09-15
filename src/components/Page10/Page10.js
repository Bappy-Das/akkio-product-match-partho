import React, { useContext, useState } from 'react';
import yellow_orange from "../../assets/yellow_orange.jpg"
import { FromContext } from '../../function';
const Page10 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar6"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-mobile">
	        	<p class="larger-font-gray">Question 6</p>
	        	<p class="larger-font">Now picture yourself in a yellow or orange shirt. Does your face look brighter?</p>
	        	<img style={{width:'20%',height:'auto',paddingTop:'0',marginTop:'0'}} src={yellow_orange} alt="" srcSet=""/><br /><br />
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q6label1">
	        		    <input type="radio" name="question6" id="q6option1" value="q6a" {...register('q6_response', { required: true })} onclick="buttonClicked();"/> Yes
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q6label2">
	        		    <input type="radio" name="question6" id="q6option2" value="q6b" {...register('q6_response', { required: true })} onclick="buttonClicked();"/> No
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)}id="q6label3">
	        		    <input type="radio" name="question6" id="q6option3" value="q6c" {...register('q6_response', { required: true })} onclick="buttonClicked();"/> Hard to tell
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q6label4">
	        		    <input type="radio" name="question6" id="q6option4" value="q6d" {...register('q6_response', { required: true })} onclick="buttonClicked();"/> I would never wear these colors
	        		  </label>
	        		</div>
	        	&nbsp;
					<div id="q1text" class="responses-div-style">
						{errors.q6_response && <p className='missing-response'>-- Please pick an option --</p>}
					</div>
	        	<button onClick={priviousPage} class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page10;