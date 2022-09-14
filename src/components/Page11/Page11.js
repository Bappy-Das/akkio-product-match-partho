import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page11 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar7"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions">
	        	<p class="larger-font-gray">Question 7</p>
	        	<p class="larger-font">Which clothing colors (besides white and black) do you wear that make you feel the best in your skin?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q7label1">
	        		    <input type="radio" name="question7" id="q7option1" value="q7a" {...register('q7_response', { required: true })} /> Blues, Reds, Purples
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q7label2">
	        		    <input type="radio" name="question7" id="q7option2" value="q7b" {...register('q7_response', { required: true })} /> Oranges, Reds, Peaches
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q7label3">
	        		    <input type="radio" name="question7" id="q7option3" value="q7c" {...register('q7_response', { required: true })} /> Pinks, Berries, Yellows, Blues
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q7label4">
	        		    <input type="radio" name="question7" id="q7option4" value="q7d" {...register('q7_response', { required: true })} /> All the colors in the world
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q7_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button onClick={priviousPage} class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page11;