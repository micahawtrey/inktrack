import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

export default function PhoneNumberInput({ props, inputId }) {
    return (
        <div className="mb-3">
            <label htmlFor={inputId}>Phone Number:<span className='text-danger'>*</span></label>
            <Controller
                control={props.control}
                name={inputId}
                rules={{ required: true }}
                render={( {field: { onChange, onBlur, value } }) => (
                    <PhoneInput
                        country={"us"}
                        value={value}
                        countryCodeEditable={false}
                        preferredCountries={["us"]}
                        onChange={onChange}
                        onBlur={onBlur}
                        inputProps={{id: inputId }} />
                )}
            />
            {props.errors[inputId] && <span className="text-danger">Please provide a valid phone number.</span>}
        </div>
    )
}

PhoneNumberInput.propTypes = {
    props: PropTypes.object,
    control: PropTypes.func,
    errors: PropTypes.object,
    inputId: PropTypes.string
}
