import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page17 = () => {
	const { register, handleSubmit, errors,onSubmit } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar13"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-mobile">
	        	<p class="larger-font-gray">Question 13</p>
	        	<p class="larger-font">How much would you pay for each curated match from this type of service?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q13label1">
	        		    <input type="radio" name="question13" id="q13option1" value="q13a" {...register('q13_response', { required: true })} /> $1-5
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q13label2">
	        		    <input type="radio" name="question13" id="q13option2" value="q13b" {...register('q13_response', { required: true })}/> $5-10
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)}id="q13label3">
	        		    <input type="radio" name="question13" id="q13option3" value="q13c" {...register('q13_response', { required: true })}/> $10-15
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q13label4">
	        		    <input type="radio" name="question13" id="q13option4" value="q13d" {...register('q13_response', { required: true })}/> $15-20
	        		  </label>
	        		  <label className={selected == 5 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(5)} id="q13label5">
	        		    <input type="radio" name="question13" id="q13option5" value="q13e" {...register('q13_response', { required: true })}/> I would not pay for this service
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q13_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button  class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Done!</button>
	        </div>
        </div>
    );
};

export default Page17;