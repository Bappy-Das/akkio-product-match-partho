import React, { useContext } from 'react';
import { FromContext } from '../../function';

const Page2 = () => {
	const { register, handleSubmit, errors,onSubmit } = useContext(FromContext);
    return (
        <div>
            <div class="vertical-center" style={{position:'absolute',top:'50%',width:'100%',textAlign:'center'}}>
	        	<h1>Data Protection</h1>

	        	<center><p style={{width:'60%'}}>&#x2765; Akkio Tech will process personal data for the purpose of fulfilling Akkio’s obligations to its clients who desire personalized products that depend on the data provided, which include but are not limited to skin type, skin tone, images, ethnicity, cultural background, preferences, and lifestyle.</p></center>
	        	<br/>
	        	<center><p style={{width:'60%'}}>&#x2765; These records may be maintained by Akkio within the U.S., European Union, and/or other countries.</p></center>
	        	<br/>
	        	<center><p style={{width:'60%'}}>&#x2765; Akkio Tech does not use this data for any published reports by a third party agency, and takes the security of your personal data very seriously.</p></center>
	        	<br/>
	        	<center><p style={{width:'60%'}}>&#x2765; Providing your information is strictly voluntary. Choosing not to provide your information will result in Akkio’s inability to conduct your screening and recommend products.</p></center>
	        	<br/>
				{
					errors.disclaimerChecked && <div className="popup">
	        		<span className="popuptext show" id="disclaimerPopup">Please opt in to continue</span>
	        		</div>
				}

	        	<center><div style={{border:'1px dotted #f06a42',display:'inline-block',paddingBottom:'5px'}}>
					<center><p class="larger-font">Do you opt in to our data protection policy?</p></center>
					<p>
						<input
							type="radio"
							name="disclaimerChecked"
							value="yes"
							id="disclaimer_id" {...register('disclaimerChecked', { required: true })}
						/>
						I agree
					</p>
				</div>
				</center>

	        	<h1>Medical Disclaimer</h1>

	        	<center><p style={{width:'60%'}}>&#x2765; Any disclosure of medical conditions is strictly voluntary. Using this service in no way provides any kind of medical advice.</p></center>

	        	<button type='submit' id="confirm-disclaimer-button" class="button-style">Confirm</button>
	        </div>
        </div>
    );
};

export default Page2;