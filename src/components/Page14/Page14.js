import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page14 = () => {
	const { register, handleSubmit, errors,onSubmit } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar10"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions">
	        	<p class="larger-font-gray">Question 10</p>
	        	<p class="larger-font">How stressed have you been over the last couple of months?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q10label1">
	        		    <input type="radio" name="question10" id="q10option1" value="q10a" {...register('q10_response', { required: true })} onclick="buttonClicked();q10_1();"/> So stressed that it's affecting my productivity
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q10label2">
	        		    <input type="radio" name="question10" id="q10option2" value="q10b" {...register('q10_response', { required: true })} onclick="buttonClicked();q10_1();"/> Stressed but able to cope
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q10label3">
	        		    <input type="radio" name="question10" id="q10option3" value="q10c" {...register('q10_response', { required: true })} onclick="buttonClicked();q10_2();"/> A little stressed, but life is pretty great
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q10label4">
	        		    <input type="radio" name="question10" id="q10option4" value="q10d" {...register('q10_response', { required: true })} onclick="buttonClicked();q10_3();"/> Not stressed at all
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q10_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button  class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page14;