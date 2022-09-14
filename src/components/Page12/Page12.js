import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page12 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar8"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-mobile">
	        	<p class="larger-font-gray">Question 8</p>
	        	<p class="larger-font">Which lipstick colors besides nudes do you tend to wear?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q8label1">
	        		    <input type="radio" name="question8" id="q8option1" value="q8a" {...register('q8_response', { required: true })} onclick="buttonClicked();"/> Blue Reds
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q8label2">
	        		    <input type="radio" name="question8" id="q8option2" value="q8b" {...register('q8_response', { required: true })} onclick="buttonClicked();"/> Orange Reds
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q8label3">
	        		    <input type="radio" name="question8" id="q8option3" value="q8c" {...register('q8_response', { required: true })} onclick="buttonClicked();"/> Pinks
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q8label4">
	        		    <input type="radio" name="question8" id="q8option4" value="q8d" {...register('q8_response', { required: true })} onclick="buttonClicked();"/> Berries
	        		  </label>
	        		  <label className={selected == 5 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(5)} id="q8label5">
	        		    <input type="radio" name="question8" id="q8option5" value="q8e" {...register('q8_response', { required: true })} onclick="buttonClicked();"/> Browns
	        		  </label>
	        		  <label className={selected == 6 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(6)} id="q8label6">
	        		    <input type="radio" name="question8" id="q8option6" value="q8f" {...register('q8_response', { required: true })} onclick="buttonClicked();"/> I don't wear lipsticks
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q8_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button onClick={priviousPage}  class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page12;