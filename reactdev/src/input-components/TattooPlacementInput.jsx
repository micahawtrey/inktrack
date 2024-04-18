import PropTypes from "prop-types"

export default function TattooPlacementInput({ props, inputId }) {
    return (
        <div className="form-floating mb-3">
            <input {...props.register(inputId, { required: true })}
                className={`form-control ${props.errors[inputId] ? "border-danger": ""}`}
                onBlur={(e) => props.handleInputChange(e)}
                type="text" id={inputId} placeholder="Tattoo placement" />
            <label htmlFor={inputId}>Tattoo placement<span className="text-danger">*</span></label>
            {props.errors[inputId] && <span className="text-danger">Please describe your tattoo placement.</span>}
        </div>
    )
}

TattooPlacementInput.propTypes = {
    props: PropTypes.object,
    inputId: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object,
    handleInputChange: PropTypes.func
}
