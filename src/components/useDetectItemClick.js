import { useState, useEffect, useRef } from "react";

export default function useDetectItemClick(itemModalOn, setItemModalOn) {
    const itemRef = useRef();

    const cardHandler = event => {

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