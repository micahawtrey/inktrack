export default function AgeInput({ props, inputId }) {
    return (
        <div className="mb-3 form-floating">
            <input {...props.register(inputId, {required: true})}
                className={`form-control w-25 ${props.errors[inputId] ? "border-danger": ""}`}
                onBlur={(e) => props.handleInputChange(e)}
                type="number" id={inputId} placeholder="" />
            <label htmlFor={inputId}>Age<span className="text-danger">*</span></label>
            {props.errors[inputId] && <span className="text-danger">Please provide your age.</span>}
        </div>
    )
}
