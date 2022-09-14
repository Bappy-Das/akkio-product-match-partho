import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page5 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar1"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions">
	        	<p class="larger-font-gray">Question 1</p>
	        	<p class="larger-font">What type of product are you looking for?</p><br/>
	        	  <div data-toggle="buttons">
	        		  <label id="q1label1" className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)}>
						<input
							type="radio"
							name="question1"
							id="q1option1"
							value="q1a"
							{...register('q1_response', { required: true })}
							
						/> Foundation that is light in coverage and buildable
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q1label2">
						<input
							type="radio"
							name="question1"
							id="q1option2"
							value="q1b"
							{...register('q1_response', { required: true })}
							
						/> Foundation that is medium in coverage and buildable
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)} id="q1label3">
						<input
							type="radio"
							name="question1"
							id="q1option3"
							value="q1c"
							{...register('q1_response', { required: true })}
							
						/> Tinted serums and moisturizers with light coverage
	        		  </label>
	        		</div>
				&nbsp;
				{
					errors.q1_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	
	        	<button onClick={priviousPage}  class="button-style">Back</button>&nbsp;<button type='submit'  class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page5;