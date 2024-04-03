import { useEffect, useState } from "react";



export default function useLocalStorage(key,defaultValue){

    const [values, setValues] = useState(() => {
        let currentValues;
        try {

            currentValues = JSON.parse(localStorage.getItem(key) || String(defaultValue))
            
        } catch (error) {

            console.log(error);
            
            defaultValue = currentValues
            
        }

        return currentValues;
    })


    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(values));
     
    }, [key,values])



    return [values, setValues];
    

}