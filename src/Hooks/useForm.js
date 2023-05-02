import { useState } from "react";

export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onChangeinput = ({target}) =>{
        const  {name, value } = target
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const resetForm =(  ) => {
        setFormState( initialForm )
    }
  
  
    return {
        ...formState,
        formState,
        onChangeinput,
        resetForm,
  }
}

