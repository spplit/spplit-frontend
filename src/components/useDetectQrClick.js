import { useEffect, useState, useRef } from "react";

export default function useDetectQrClick() {
    const qrButtonRef = useRef(null);
    const modalRef = useRef(null);

    const [modalOn, setModalOn] = useState(false);

    const handler = event => {
        if (qrButtonRef.current && qrButtonRef.current.contains(event.target)) {
            return setModalOn(!modalOn)

        }
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            return setModalOn(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })


    return {
        qrButtonRef,
        modalRef,
        modalOn,
        setModalOn
    }
}