import PropTypes from "prop-types";

export default function DateOfBirthInput({ props, inputId }) {
    return (
        <div className="mb-3 me-4">
            <label htmlFor={inputId} className="mb-1">
                Date of birth:<span className='text-danger'>*</span>
            </label>
            <input {...props.register(inputId, { required: true })}
                className={`form-control w-50 ${props.errors[inputId] ? "border-danger": ""}`}
                onBlur={(e) => props.handleInputChange(e)}
                type="date" id="inputId" placeholder=""/>
                {props.errors[inputId] && <span className="text-danger">Please provide your date of birth.</span>}
        </div>
    )
}

DateOfBirthInput.propTypes = {
    props: PropTypes.object,
    register: PropTypes.func,
    handleInputChange: PropTypes.func,
    errors: PropTypes.object,
    inputId: PropTypes.string
}
