import { useState, useEffect, useRef } from "react";

export default function useDetectProfileClick(profileModalOn, setProfileModalOn) {
    const profileRef = useRef();

    const ProfileListHandler = event => {

        if (profileModalOn && profileRef.current && !profileRef.current.contains(event.target)) {
            return setProfileModalOn(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", ProfileListHandler);

        return () => {
            document.removeEventListener("mousedown", ProfileListHandler)
        }
    })

    return {
        profileRef
    };

}


