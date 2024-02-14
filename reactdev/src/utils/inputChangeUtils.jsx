import { isAlpha } from "./utils"
import { dataURItoBlob } from "./WebcamManagement"

export const handleInputChange = (event, data, setData) => {
    const name = event.target.name
    const value = event.target.value

    if (value.length === 0) {
        document.getElementById(name).classList.add("border-danger")
        setData({
            ...data,
            [name]: undefined
            })
    } else if (document.getElementById(name).classList.contains("border-danger")) {
        document.getElementById(name).classList.remove("border-danger")
    }

    setData({
    ...data,
    [name]: value
    })
}

export const handleAlphaInputChange = (event, data, setData) => {
    const name = event.target.name
    const value = event.target.value
    if (value.length === 0) {
        document.getElementById(name).classList.add("border-danger")
        setData({
            ...data,
            [name]: undefined
            })
    } else if (document.getElementById(name).classList.contains("border-danger")) {
        document.getElementById(name).classList.remove("border-danger")
    }
    if (isAlpha(value) || value.length === 0) {
        setData({
        ...data,
        [name]: value
    })
    }
}

export const handlePhoneNumberChange = (dataName, data, setData) => {
    const value = document.getElementById("phone_number").value

    if (value.length <= 2) {
        document.getElementById("phone_number").classList.add("border-danger")
        setData({
            ...data,
            [dataName]: undefined
            })
    } else if (document.getElementById("phone_number").classList.contains("border-danger")) {
        document.getElementById("phone_number").classList.remove("border-danger")
    }

    setData({
        ...data,
        [dataName]: value
    })
}

export const handleOptionalInputChange = (e, data, setData) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}

export const handleRadioButtonChange = (e, data, setData, value) => {
    setData({
    ...data,
    [e.target.name]: value
    })
}

export const handleCheckBoxChange = (e, data, setData) => {
    const name = e.target.name
    const value = e.target.checked

    if (!value) {
        document.getElementById(name).classList.add("border-danger")
        setData({
            ...data,
            [name]: undefined
            })
    } else if (document.getElementById(name).classList.contains("border-danger")) {
        document.getElementById(name).classList.remove("border-danger")
    }

    setData({
    ...data,
    [name]: value
    })
}

export const handleSignatureChange = (refCurrent, userInfo) => {
    const base64 = refCurrent.toDataURL("image/png")
    const blob = dataURItoBlob(base64)
    const file = new File([blob], `${userInfo["first_name"]}_${userInfo["last_name"]}_${refCurrent._canvas.id}_image.png`, {type: 'image/png' })
    return file
}

export const handleSignatureTimeCapture = (data, setData, name) => {
    setData({
        ...data,
        [name]: new Date().toISOString()
    })
}

export const handleClear = (pad) => {
    pad.current.clear()
}
