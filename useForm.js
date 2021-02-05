import {useState,useEffect} from 'react'

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState)


    const reset = ()=>{
        setvalues(initialState)
    }
   
    const handleInputChange = ({target})=>{
        setvalues({
            ...values,
            [target.name]:target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(values);
    }

    useEffect(() => {
        console.log('email cambio');
        
    }, [values.email])

    return[values,{handleInputChange,handleSubmit,reset}]
}
