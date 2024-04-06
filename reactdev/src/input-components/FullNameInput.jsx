import { ErrorMessage } from '@hookform/error-message';

export default function FullNameInput({ props, first_name, last_name }) {
    return (
    <div className="row mb-3">
        <div className="col">
            <div className="form-floating">
                <input {...props.register(first_name, {
                    required: true,
                    pattern: {
                        value: /[a-zA-Z\s]/,
                        message: "Please only type letters."
                    }
                    })}
                    className={`form-control ${props.errors.first_name ? "border-danger": ""}`}
                    onBlur={(e) => props.handleInputChange(e)}
                    type="text" placeholder="" id={first_name}/>
                <label htmlFor={first_name}>First name<span className="text-danger">*</span></label>
                {props.errors.first_name && <span className="text-danger">Please provide your first name (letters and spaces only)</span>}
                <ErrorMessage errors={props.errors} name="first_name" />
            </div>
        </div>
        <div className="col">
            <div className="form-floating">
                <input {...props.register(last_name, {
                    required: true,
                    pattern: {
                        value: /[a-zA-Z\s]/,
                        message: "Please only type letters."
                    }
                    })}
                    className={`form-control ${props.errors.last_name ? "border-danger": ""}`}
                    onBlur={(e) => props.handleInputChange(e)}
                    type="text"placeholder="" id={last_name}/>
                <label htmlFor={last_name}>Last name<span className="text-danger">*</span></label>
                {props.errors.last_name && <span className="text-danger">Please provide your last name (letters and spaces only)</span>}
            </div>
        </div>
    </div>
    )
}
