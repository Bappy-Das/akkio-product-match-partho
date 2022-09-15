import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';


export const FromContext = createContext();
const defaultValues= {
        fullName: "",
	    disclaimerChecked: "",
	    emailAddress: "",
	    streetAddress: "",
	    selfieFileName: "",
	    q1_response: "",
	    q2_response: "",
	    q3_response: "",
	    q4_response: "",
	    q5_response: "",
	    q6_response: "",
	    q7_response: "",
	    q8_response: "",
	    q9_response: "",
	    q10_response: "",
	    q11_response: "",
	    q12_response: "",
	    q13_response: "",
	    userDataId: "",
	    createdAt: ""
}

const FromDataProvider = ({ children }) => {
     const [step, setStep] = useState(1)
    const { register, handleSubmit, formState,getValues,watch,setValue  } = useForm({
          mode: 'onChange',
          reValidateMode: 'onChange',
          defaultValues, 
          resolver: undefined,
        });
    const onSubmit = data => {
        setStep(step + 1);
        console.log(data);
    };
    const priviousPage = data => {
        setStep(step - 1);
        console.log(data);
    };
    console.log('aaaaaaaaaaa',getValues())
    return (
        <FromContext.Provider value={
            {
                register,
                handleSubmit,
                getValues,
                errors: formState.errors,
                watch,
                onSubmit,
                priviousPage,
                step,
                setValue 
            }}>
            
            {children}
        </FromContext.Provider>
    );
};

export default FromDataProvider;