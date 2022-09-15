import React, { useContext, useState } from 'react';
import brown_eyes from "../../assets/brown_eyes.jpg"
import gray_eyes from "../../assets/gray_eyes.jpg"
import green_eyes from "../../assets/green_eyes.jpg"
import { FromContext } from '../../function';
const Page13 = () => {
const { register, handleSubmit, errors,onSubmit,priviousPage } = useContext(FromContext);
    return (
		<div>

            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar9"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-web">
	        	<p class="larger-font-gray">Question 9</p>
	        	<p class="larger-font">Which colors do you see in your eyes?</p>
				<div data-toggle="buttons" style={{ marginLeft: '10%', marginRight: '10%',display:'flex', justifyContent:'center',alignItems:'center' }}>
	        		  <label id="q9label1" class="container-with-img" style={{marginLeft:'2%',marginRight:'2%'}}>
	        		    <figure>
	        		    	<input type="radio" name="question9" id="q9option1" value="q9a" {...register('q9_response', { required: true })} style={{height:'0'}}/>
	        		    	<img class="eyes-pics-style" src={brown_eyes} alt="" srcSet=""/>
							<figcaption style={{ marginTop: '5px' }}>Goldens, Browns</figcaption>
						</figure>
	        		  </label>
	        		  <label id="q9label2" class="container-with-img" style={{marginLeft:'2%',marginRight:'2%'}}>
	        		  	<figure>
	        		    	<input type="radio" name="question9" id="q9option2" value="q9b" {...register('q9_response', { required: true })} style={{height:'0'}}/>
	        		    	<img class="eyes-pics-style" src={gray_eyes} alt="" srcSet=""/>
							<figcaption style={{ marginTop: '5px' }}>Blues, Grays</figcaption>
						</figure>
	        		  </label>
	        		  <label id="q9label3" class="container-with-img" style={{marginLeft:'2%',marginRight:'2%'}}>
	        		  	<figure>
	        		    	<input type="radio" name="question9" id="q9option3" value="q9c" {...register('q9_response', { required: true })} style={{height:'0'}}/>
	        		    	<img class="eyes-pics-style" src={green_eyes} alt="" srcSet=""/>
							<figcaption style={{ marginTop: '5px' }}>Green</figcaption>
						</figure>
	        		  </label>
	        		</div>
	        	&nbsp;
					<div id="q1text" class="responses-div-style">
						{errors.q9_response && <p className='missing-response'>-- Please pick an option --</p>}
					</div>
	        	<button onClick={priviousPage} class="button-style">Back</button>&nbsp;<button type='submit' class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page13;