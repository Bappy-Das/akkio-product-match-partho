import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page15 = () => {
	const { register, handleSubmit, errors,onSubmit } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar11"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions">
	        	<p class="larger-font-gray">Question 11</p>
	        	<p class="larger-font">How do you prefer wearing your foundation, tinted moisturizer, or tinted serum products?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q11label1">
	        		    <input type="radio" name="question11" id="q11option1" value="q11a" {...register('q11_response', { required: true })} onclick="buttonClicked();"/> Lighter than my natural skin tone
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q11label2">
	        		    <input type="radio" name="question11" id="q11option2" value="q11b" {...register('q11_response', { required: true })} onclick="buttonClicked();"/> Same shade as my natural skin tone
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q11label3">
	        		    <input type="radio" name="question11" id="q11option3" value="q11c" {...register('q11_response', { required: true })} onclick="buttonClicked();"/> Darker than my natural skin tone
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q11label4">
	        		    <input type="radio" name="question11" id="q11option4" value="q11d" {...register('q11_response', { required: true })} onclick="buttonClicked();"/> I don't wear these types of products
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q11_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page15;