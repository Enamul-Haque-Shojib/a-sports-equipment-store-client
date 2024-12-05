import { useState } from "react"

const useStateHook = (defaultValue = null)=>{
    const [value, setValue] = useState(defaultValue);

    const handleSetValue = (val)=>{
        setValue(val);
    }

    return [value, handleSetValue];
}


export default useStateHook;