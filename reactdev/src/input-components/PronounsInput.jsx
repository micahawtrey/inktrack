import { useState } from "react"

export default function PronounsInput({ props, inputId }) {
    const [other, setOther] = useState(false)

    return (
        <div className="mb-3 me-4">
            <label htmlFor={inputId} className="form-label mb-1">
                Preferred pronouns:<span className='text-danger'>*</span>
            </label>
            <select {...props.register(inputId, {required: true})}
                className={`form-select w-50 ${props.errors[inputId] ? "border-danger": ""}`}
                onChange={(e) => {
                    setOther(e.target.value === "other")
                    props.setValue(inputId, e.target.value)
                }}
                onBlur={(e) => props.handleInputChange(e)}
                id={inputId}>
                <option value="">--Select your pronouns--</option>
                <option value="he/him">he/him</option>
                <option value="she/her">she/her</option>
                <option value="they/them">they/them</option>
                <option value="other">other</option>
            </select>
            {other && (
                <div className="form-floating mt-3">
                    <input {...props.register("custom_pronouns", {required: true})}
                        type="text" className="form-control w-50"
                        id="custom_pronouns" placeholder=""/>
                    <label htmlFor="custom_pronouns">Please provide your pronouns</label>
                </div>
            )}
            {props.errors["custom_pronouns"] && <span className="text-danger">Please provide your preferred pronouns.</span>}
            {props.errors[inputId] && (
                <span className="text-danger">Please select your preferred pronouns.</span>
            )}
        </div>
    )
}
