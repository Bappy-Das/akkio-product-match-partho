import React, { useContext } from 'react';
import { FromContext } from '../../function';

const Page3 = () => {
		const { register, handleSubmit, errors,onSubmit,getValues } = useContext(FromContext);
    return (
        <div>
	        <div class="vertical-center">


				<h1>Hey there, <span id="userNamePrinted">{getValues("fullName").split(" ", 1)}</span>!</h1>

	        	<center><p class="larger-font"> Thanks for your interest in Akkio! We will ask you for a selfie and then a set of questions. </p></center>

	        	<center><p class="larger-font">Once we match you, we’ll ship you 2-3 samples for free! Since we are in beta testing, it’s really important that you follow up with your feedback on which sample is the right match for you.</p></center>

	        	<center><p class="larger-font">First, what's your email and address so we know where to ship your free samples?</p></center>

				&nbsp;
				{
					errors.emailAddress && <div className="popup">
	        			<span className="popuptext show" id="namePopup">Please enter a valid email</span>
	        		</div>
				}

	        	<div class="get-started-div">
					<input
						type="text"
						id="emailAddress"
						name="emailAddress"
						class="get-started-div-input"
						placeholder="Email"
						{...register('emailAddress', {
							required: true,
							pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Please enter a valid email',
							}})
						}
						
					/>
	        	</div>
				<br />
				{
					errors.streetAddress && <div className="popup">
	        			<span className="popuptext show" id="namePopup">Please enter your address</span>
	        		</div>
				}

	        	<div class="get-started-div">
					<input
						type="text"
						id="streetAddress"
						class="get-started-div-input"
						placeholder="Street Address"
						name="streetAddress"
						{...register('streetAddress', { required: true })}
					/>
	        	</div>

	        	&nbsp;
	        	<button type='submit' id="to_selfie_button"  class="button-style">Let's get started &#x27F6;</button>
	        </div>
        </div>
    );
};

export default Page3;