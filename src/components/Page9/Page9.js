import React, { useContext } from 'react';
import undertone_1 from '../../assets/undertone-1.jpeg'
import undertone_2 from '../../assets/undertone-2.jpeg'
import undertone_3 from '../../assets/undertone-3.jpeg'
import undertone_4 from '../../assets/undertone-4.jpeg'
import { FromContext } from '../../function';
const Page9 = () => {
	const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar5"></div>
	        </div>
	        &nbsp;
	        <div>
	        	<p class="larger-font-gray">Question 5</p>
	        	<p class="larger-font">Check out the pictures provided and let us know which best represents your undertone:</p>
	        	  <div data-toggle="buttons">
	        		  <label id="q5label1">
	        		    <input type="radio" name="question5" id="q5option1" value="q5a" {...register('q5_response', { required: true })} onclick="buttonClicked();q5_1();"/>
	        		    <img class="undertone-pics-style" src={undertone_1} alt="Warm" />
	        		  </label>
	        		  <label id="q5label2">
	        		    <input type="radio" name="question5" id="q5option2" value="q5b" {...register('q5_response', { required: true })} onclick="buttonClicked();q5_1();"/>
	        		    <img class="undertone-pics-style" src={undertone_2} alt="Cool" />
	        		  </label>
	        		  <br/>
	        		  <label id="q5label3">
	        		    <input type="radio" name="question5" id="q5option3" value="q5c" {...register('q5_response', { required: true })} onclick="buttonClicked();q5_1();"/>
	        		    <img class="undertone-pics-style" src={undertone_3} alt="Neutral" />
	        		  </label>
	        		  <label id="q5label4">
	        		    <input type="radio" name="question5" id="q5option5" value="q5d" {...register('q5_response', { required: true })} onclick="buttonClicked();q5_2();"/>
	        		    <img class="undertone-pics-style" src={undertone_4} alt="I don't know" />
	        		  </label>
	        		</div>
	        	&nbsp;
	        	{
					errors.q5_response && <div id="q1text" class="responses-div-style">
						<p className='missing-response'>-- Please pick an option --</p>
					</div>
				}
	        	<button  onClick={priviousPage} class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page9;