import React, { useContext, useState } from 'react';
import { FromContext } from '../../function';

const Page4 = () => {
	const { register, handleSubmit, errors, onSubmit, watch,setValue } = useContext(FromContext);
    return (
        <div>
            <div class="vertical-center">
	        	<center><p class="larger-font">Let's upload a head on selfie (including your face and neck). For higher accuracy, we recommend you take this photo with no or minimal makeup and avoid shadows across your face.</p></center>
				<br />
				&nbsp;
				{
					errors.selfieFileName && <div className="popup">
	        			<span className="popuptext show" id="namePopup">Please upload a photo</span>
	        		</div>
				}


	        	<div class="inputfile-box">
					<input
						type="file"
						id="file"
						class="inputfile"
						onChange={(e) => setValue("selfieFileName", e.target.files[0].name)}
						// {...register('selfieFileName', {
						// 	required: true,
						// })}

					/>
					{/* <span style={{ display: 'none' }}>
						{...register('selfieFileName:', {
							required: true,
						})}
					</span> */}
					<label for="file">
						
					<span id="file-name" class="file-box">{ watch('selfieFileName')}</span>
	        	    <span class="file-button">
	        	      <i class="fa fa-upload" aria-hidden="true"></i>
	        	      Select File
	        	    </span>
	        	  </label>
	        	</div>

	        	<br/><br/>
	        	<p><button type='submit' class="button-style">Questionnaire &#x27F6;</button></p>
	        </div>
        </div>
    );
};

export default Page4;