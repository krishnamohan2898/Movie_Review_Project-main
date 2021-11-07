import  { useState } from 'react'

const useForm = (value) => {

    const [val,setval] = useState(value)
    return  [val,((event)=>{
        setval(
            {  
                ...val,[event.target.name]:event.target.value
        }
        
    )})]
}


export default useForm