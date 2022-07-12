import { useState, useEffect } from 'react'

const prefix = 'codeRide-'
export default function UseLocalStorage(key, initVal) {

    const prefixkey = prefix + key
    const [value,setValue] = useState(()=>{
        const storedValue = localStorage.getItem(prefixkey)

        if (storedValue != null ){
            return JSON.parse(storedValue)
        }

        if (typeof initVal === 'function'){
            return initVal()
        }
        else{
            return initVal
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixkey, JSON.stringify(value))
    }, [prefixkey,value])
    
    return [value , setValue]
}
