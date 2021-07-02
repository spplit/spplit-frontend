import { useState, useEffect, useRef } from "react";

export default function useDetectItemClick(itemModalOn, setItemModalOn) {
    // const cardRef = useRef();
    const itemRef = useRef();
    // const [itemModalOn, setItemModalOn] = useState(false);

    const cardHandler = event => {
        // for (let i = 0; i < cardRef.current.length; i++) {
        //     if (cardRef.current[i] && cardRef.current[i].contains(event.target)) {
        //         console.log(cardRef.current[i])
        //         return setItemModalOn(!itemModalOn);
        //     }
        // }

        if (itemModalOn && itemRef.current && !itemRef.current.contains(event.target)) {
            return setItemModalOn(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", cardHandler);

        return () => {
            document.removeEventListener("mousedown", cardHandler)
        }
    })

    return {
        itemRef
    }

}