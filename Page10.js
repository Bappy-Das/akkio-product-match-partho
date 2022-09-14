import React, { useState } from 'react';
import yellow_orange from "../../assets/yellow_orange.jpg"
const Page10 = ({ formData, setFormData, setStep }) => {
	const [selected, setSelected] = useState(0);
  		const handleClick = (divNum) => () => {
  	  setSelected(divNum);
  	};
    return (
        <div>
            &nbsp;&nbsp;
	        <div id="myProgress">
  	        	<div id="myBar6"></div>
	        </div>
	        &nbsp;
	        <div class="center-questions-mobile">
	        	<p class="larger-font-gray">Question 6</p>
	        	<p class="larger-font">Now picture yourself in a yellow or orange shirt. Does your face look brighter?</p>
	        	<img style={{width:'20%',height:'auto',paddingTop:'0',marginTop:'0'}} src={yellow_orange} alt="" srcset=""/><br /><br />
	        	  <div data-toggle="buttons">
	        		  <label className={selected == 1 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(1)} id="q6label1">
	        		    <input type="radio" name="question6" id="q6option1" value="q6a" onChange={(e) => setFormData({ ...formData, q6_response: e.target.value })} onclick="buttonClicked();"/> Yes
	        		  </label>
	        		  <label className={selected == 2 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(2)} id="q6label2">
	        		    <input type="radio" name="question6" id="q6option2" value="q6b" onChange={(e) => setFormData({ ...formData, q6_response: e.target.value })} onclick="buttonClicked();"/> No
	        		  </label>
	        		  <label className={selected == 3 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(3)}id="q6label3">
	        		    <input type="radio" name="question6" id="q6option3" value="q6c" onChange={(e) => setFormData({ ...formData, q6_response: e.target.value })} onclick="buttonClicked();"/> Hard to tell
	        		  </label>
	        		  <label className={selected == 4 ? 'mc-checked-style' : 'mc-default-style'} onClick={handleClick(4)} id="q6label4">
	        		    <input type="radio" name="question6" id="q6option4" value="q6d" onChange={(e) => setFormData({ ...formData, q6_response: e.target.value })} onclick="buttonClicked();"/> I would never wear these colors
	        		  </label>
	        		</div>
	        	&nbsp;
	        	<div id="q6text" class="responses-div-style"></div>
	        	<button onClick={() => {setStep(privStep=>privStep - 1)}} class="button-style">Back</button>&nbsp;<button onClick={() => {setStep(privStep=>privStep + 1)}} class="button-style">Next</button>
	        </div>
        </div>
    );
};

export default Page10;