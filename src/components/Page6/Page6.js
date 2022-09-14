import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page6 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar2"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions">
	        	<p class="larger-font-gray">Question 2</p>
	        	<p class="larger-font">What is your skin type?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q2label1">
						<input
							type="radio"
							name="question2"
							id="q2option1"
							value="q2a"
							{...register('q2_response', { required: true })}
						/> Dry
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q2label2">
						<input
							type="radio"
							name="question2"
							id="q2option2"
							value="q2b"
							{...register('q2_response', { required: true })}							
						/> Oily
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q2label3">
						<input
							type="radio"
							name="question2"
							id="q2option3"
							value="q2c"
							{...register('q2_response', { required: true })}
							
						/> Balanced
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q2label4">
						<input
							type="radio"
							name="question2"
							id="q2option4"
							value="q2d"
							{...register('q2_response', { required: true })}
							
						/> Combination
	        		  </label>
	        		</div>
				&nbsp;
				{
					errors.q2_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}

	        	<button onClick={priviousPage}  class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page6;