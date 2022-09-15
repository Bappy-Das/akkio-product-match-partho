import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page7 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
	const [selected, setSelected] = useState(0);
  	const handleClick = (divNum) => () => {
  	  	setSelected(divNum);
  	};
    return (
        <div>
	        &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar3"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-mobile">
	        	<p class="larger-font-gray">Question 3</p>
	        	<p class="larger-font">Pick a skin concern you would like to address</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q3label1">
						<input
							type="radio"
							name="question3"
							id="q3option1"
							value="q3a"
							{...register('q3_response', { required: true })}							
						/> Uneven skin tone and Hyperpigmentation
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q3label2">
						<input
							type="radio"
							name="question3"
							id="q3option2"
							value="q3b"
							{...register('q3_response', { required: true })}
						/> Dryness
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)}id="q3label3">
						<input
							type="radio"
							name="question3"
							id="q3option3"
							value="q3c"
							{...register('q3_response', { required: true })}
						/> Redness or Irritation
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q3label4">
						<input
							type="radio"
							name="question3"
							id="q3option4"
							value="q3d"
							{...register('q3_response', { required: true })}
						/> Fine lines and Wrinkles
	        		  </label>
	        		  <label className={selected == 5 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(5)} id="q3label5">
						<input
							type="radio"
							name="question3"
							id="q3option5"
							value="q3e"
							{...register('q3_response', { required: true })}
						/> None of the above
	        		  </label>
	        		</div>
	        	&nbsp;
	        	<div id="q1text" class="responses-div-style">
					{errors.q3_response && <p className='missing-response'>-- Please pick an option --</p>}
					{selected ==1 && <p className='responses-text'>We've got you Covered</p>}
					{selected ==2 && <p className='responses-text'>We've got you Covered</p>}
					{selected ==3 && <p className='responses-text'>We've got you Covered</p>}
					{selected ==4 && <p className='responses-text'>We've got you Covered</p>}
					{selected ==5 && <p className='responses-text'>Lucky You!</p>}
				</div>

	        	<button onClick={priviousPage} class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page7;