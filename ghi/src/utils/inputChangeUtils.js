import { isAlpha, isEmail } from "./utils"

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
