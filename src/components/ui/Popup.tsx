import {usePopup} from "zuauth"

export default function Popup() {
    const error = usePopup()

    return <div>{error}</>
}