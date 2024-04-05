export default function EmailInput({ props, inputId }) {
    return (
        <div className="mb-3 form-floating">
            <input {...props.register(inputId, {required: true})}
                className={`form-control w-50 ${props.errors[inputId] ? "border-danger": ""}`}
                onBlur={(e) => props.handleInputChange(e)}
                type="email" id={inputId} placeholder=""/>
            <label htmlFor={inputId}>Email address<span className='text-danger'>*</span></label>
            {props.errors[inputId] && <span className="text-danger">Please provide your email address.</span>}
        </div>
    )
}
