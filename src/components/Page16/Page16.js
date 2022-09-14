import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page16 = () => {
	const { register, handleSubmit, errors,onSubmit } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar12"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-mobile">
	        	<p class="larger-font-gray">Question 12</p>
	        	<p class="larger-font">Would you pay for a service that recommends the perfect product for you and also gives you useful information about your skin to make your future purchases easier? If yes, which products would you pay for?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q12label1">
	        		    <input type="radio" name="question12" id="q12option1" value="q12a" {...register('q12_response', { required: true })} /> Foundation and Color matching
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q12label2">
	        		    <input type="radio" name="question12" id="q12option2" value="q12b" {...register('q12_response', { required: true })} /> Skincare
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q12label3">
	        		    <input type="radio" name="question12" id="q12option3" value="q12c" {...register('q12_response', { required: true })} /> Self-care
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q12label4">
	        		    <input type="radio" name="question12" id="q12option4" value="q12d" {...register('q12_response', { required: true })} /> All of them
	        		  </label>
	        		  <label className={selected == 5 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(5)}id="q12label5">
	        		    <input type="radio" name="question12" id="q12option5" value="q12e" {...register('q12_response', { required: true })}/> None of the above
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q12_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button  class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page16;