import PropTypes from "prop-types"

export default function ConnectionInput({ props, inputId }) {
    return (
        <div className="form-floating mb-3">
            <input {...props.register(inputId, { required: true })}
                className={`form-control ${props.errors[inputId] ? "border-danger": ""}`}
                onBlur={(e) => props.handleInputChange(e)}
                type="text" id={inputId} placeholder="How did you hear about us?" />
            <label htmlFor={inputId}>How did you hear about us?<span className="text-danger">*</span></label>
            {props.errors[inputId] && <span className="text-danger">Please explain how you heard about us.</span>}
        </div>
    )
}

ConnectionInput.propTypes = {
    props: PropTypes.object,
    inputId: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object,
    handleInputChange: PropTypes.func
}
