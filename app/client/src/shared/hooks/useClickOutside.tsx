import { MutableRefObject, useEffect, useState } from "react"

//https://blog.logrocket.com/detect-click-outside-react-component-how-to/
export const useClickOutside = (ref: MutableRefObject<any>) => {
    const [isClickedOutside, setClickedOutside] = useState<number>()
    
    const { addEventListener, removeEventListener } = document
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!!ref.current && !ref.current.contains(event.target)) {
                setClickedOutside(Date.now())
            }
        }
        addEventListener("click", handleClickOutside, true)
        return () => {
            removeEventListener("click", handleClickOutside, true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return {
        isClickedOutside,
    }
}