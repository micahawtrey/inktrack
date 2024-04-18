import PropTypes from "prop-types"

export default function TattooDescriptionInput({ props, inputId }) {
    return (
        <div className="form-floating mb-3">
            <input {...props.register(inputId, { required: true })}
                className={`form-control ${props.errors[inputId] ? "border-danger": ""}`}
                onBlur={(e) => props.handleInputChange(e)}
                type="text" id={inputId} placeholder="Brief Tattoo description"/>
            <label htmlFor={inputId}>Brief Tattoo Description<span className="text-danger">*</span></label>
            {props.errors[inputId] && <span className="text-danger">Please describe your tattoo.</span>}
        </div>
    )
}

TattooDescriptionInput.propTypes = {
    props: PropTypes.object,
    inputId: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object,
    handleInputChange: PropTypes.func
}
