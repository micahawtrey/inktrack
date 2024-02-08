import { isAlpha } from "./utils"
import { dataURItoBlob } from "./WebcamManagement"

export const handleInputChange = (event, data, setData, inputData, setInputData) => {
    const name = event.target.name
    const value = event.target.value

    if (value.length === 0) {
        document.getElementById(name).classList.add("border-danger")
        setInputData({
            ...inputData,
            [name]: false
        })
    } else if (document.getElementById(name).classList.contains("border-danger")) {
        document.getElementById(name).classList.remove("border-danger")
    }

    setData({
    ...data,
    [name]: value
    })

    if (value.length > 0) {
        setInputData({
            ...inputData,
            [name]: true
        })
    }
}

export const handleAlphaInputChange = (event, data, setData, inputData, setInputData) => {
    const name = event.target.name
    const value = event.target.value
    if (value.length === 0) {
        document.getElementById(name).classList.add("border-danger")
        setInputData({
            ...inputData,
            [name]: false
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
    if (value.length > 0) {
        setInputData({
            ...inputData,
            [name]: true
        })
    }

}

export const handlePhoneNumberChange = (dataName, data, setData, inputData, setInputData) => {
    const value = document.getElementById("phone_number").value

    if (value.length <= 2) {
        document.getElementById("phone_number").classList.add("border-danger")
        setInputData({
            ...inputData,
            [dataName]: false
        })
    } else if (document.getElementById("phone_number").classList.contains("border-danger")) {
        document.getElementById("phone_number").classList.remove("border-danger")
    }

    setData({
        ...data,
        [dataName]: value
    })

    if (value.length > 2) {
        setInputData({
            ...inputData,
            [dataName]: true
        })
    }
}

export const handleOptionalInputChange = (e, data, setData) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}

export const handleRadioButtonChange = (e, data, setData, inputData, setInputData, value) => {
    setData({
    ...data,
    [e.target.name]: value
    })

    setInputData({
        ...inputData,
        [e.target.name]: true
    })
}

export const handleCheckBoxChange = (e, data, setData, inputData, setInputData) => {
    const name = e.target.name
    const value = e.target.checked

    if (!value) {
        document.getElementById(name).classList.add("border-danger")
        setInputData({
            ...inputData,
            [name]: false
        })
    } else if (document.getElementById(name).classList.contains("border-danger")) {
        document.getElementById(name).classList.remove("border-danger")
    }

    setData({
    ...data,
    [name]: value
    })

    if (value) {
        setInputData({
            ...inputData,
            [name]: true
        })
    }
}

export const handleSignatureChange = (refCurrent, data, setData, inputData, setInputData) => {
    const base64 = refCurrent.toDataURL("image/png")
    const blob = dataURItoBlob(base64)
    const file = new File([blob], `${data["first_name"]}_${data["last_name"]}_${refCurrent._canvas.id}_image.png`, {type: 'image/png' })

    if (file) {
        setData({
        ...data,
        [refCurrent._canvas.id]: file
        })
        setInputData({
            ...inputData,
            [refCurrent._canvas.id]: true
        })
    }
}

export const handleClear = (pad, data, setData, inputData, setInputData) => {
    pad.current.clear()
    setData({
        ...data,
        [pad.current._canvas.id]: ""
    })
    setInputData({
        ...inputData,
        [pad.current._canvas.id]: false
    })
}