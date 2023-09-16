import { MutableRefObject, useEffect, useState } from "react"

//https://blog.logrocket.com/detect-click-outside-react-component-how-to/
export const useHoverOutside = (ref: MutableRefObject<any>) => {
    const [isClickedOutside, setClickedOutside] = useState<number>()
    
    const { addEventListener, removeEventListener } = document
    
    useEffect(() => {
        const handleHoverOutside = (event) => {
            if (!!ref.current && !ref.current.contains(event.target)) {
                setClickedOutside(Date.now())
            }
        }
        addEventListener("mouseover", handleHoverOutside, true)
        return () => {
            removeEventListener("mouseover", handleHoverOutside, true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return {
        isClickedOutside,
    }
}