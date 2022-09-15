import React, { useContext, useState } from 'react';
import very_light from "../../assets/very_light.jpeg"
import light from "../../assets/light.jpeg"
import light_medium from "../../assets/light_medium.jpeg"
import medium from "../../assets/medium.jpeg"
import medium_tan from "../../assets/medium_tan.jpeg"
import deep from "../../assets/deep.jpeg"
import very_deep from "../../assets/very_deep.jpeg"
import { FromContext } from '../../function';


const Page8 = () => {
const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
    return (
        <div>     
	        &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar4"></div>
	        </div>
	        &nbsp;
	        <div>
	        	<p class="larger-font-gray">Question 4</p>
	        	<p class="larger-font">What’s your skin color?</p>
	        	  <div data-toggle="buttons" style={{marginLeft:'20%',marginRight:'20%'}}>
	        		  <label id="q4label1" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option1"
								value="q4a"
								{...register('q4_response', { required: true })}							
								style={{ height: '0%' }} />
	        		        <img src={very_light} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		  <label id="q4label2" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option2"
								value="q4b"
								{...register('q4_response', { required: true })}							
								style={{ height: '0%' }} />
	        		    <img src={light} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		  <label id="q4label3" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option3"
								value="q4c"
								{...register('q4_response', { required: true })}								
								style={{ height: '0%' }} />
	        		    <img src={light_medium} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		  <label id="q4label4" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option4"
								value="q4d"
								{...register('q4_response', { required: true })}
								style={{ height: '0%' }} />
	        		    <img src={medium} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		  <label id="q4label5" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option5"
								value="q4e"
								{...register('q4_response', { required: true })}
								style={{ height: '0%' }} />
	        		     <img src={medium_tan} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		  <label id="q4label6" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option6"
								value="q4f"
								{...register('q4_response', { required: true })}
								 style={{ height: '0%' }} />
	        		    <img src={deep} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		  <label id="q4label7" class="container-with-img">
	        		    <figure class="skin-tone-pics-style">
							<input
								type="radio"
								name="question4"
								id="q4option7"
								{...register('q4_response', { required: true })}
								value="q4g"
								 style={{ height: '0%' }} />
	        		    <img src={very_deep} alt="Warm" style={{ width: '100%', height: 'auto', border: '1px solid black' }}/>
	        		    </figure>
	        		  </label>
	        		</div>
				&nbsp;
				<div id="q1text" class="responses-div-style">
					{errors.q4_response && <p className='missing-response'>-- Please pick an option --</p>}
				</div>

	        	
	        	<button onClick={priviousPage}  class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page8;