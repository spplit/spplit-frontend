import { useState, useEffect, useRef } from "react";

export default function useDetectAddClick(addModalOn, setAddModalOn) {
    const addRef = useRef();

    const cardHandler = event => {

        if (addModalOn && addRef.current && !addRef.current.contains(event.target)) {
            return setAddModalOn(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", cardHandler);

        return () => {
            document.removeEventListener("mousedown", cardHandler)
        }
    })

    return {
        addRef
    }

}