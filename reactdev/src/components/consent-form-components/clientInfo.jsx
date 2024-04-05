import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { statesList } from "../../utils/utils"
import { Controller } from "react-hook-form"
import FullNameInput from "../../input-components/FullNameInput"
import EmailInput from "../../input-components/EmailInput"
import AgeInput from "../../input-components/AgeInput"

export default function ClientInfo({ props }) {
    return (
        <div>
            <h2>Client Information</h2>
            <FullNameInput props={props} first_name={"first_name"} last_name={"last_name"} />
            <EmailInput props={props} inputId={"email"} />
            <AgeInput props={props} inputId={"age"} />
            <div className="mb-3">
                <label htmlFor="phone_number">Phone Number:<span className='text-danger'>*</span></label>
                <Controller
                    control={props.control}
                    name="phone_number"
                    rules={{required: true}}
                    render={( {field: { onChange, onBlur, value } }) => (
                        <PhoneInput
                            country="us"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            inputProps={{id: "phone_number", }} />
                    )}
                />
                {props.errors.phone_number && <span className="text-danger">Please provide a valid phone number.</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="preferred_pronouns" className="form-label mb-1">Preferred pronouns:<span className='text-danger'>*</span></label>
                <select {...props.register("preferred_pronouns", {required: true})}
                    className={`form-select w-50 ${props.errors.preferred_pronouns ? "border-danger": ""}`}
                    onBlur={(e) => props.handleInputChange(e)}
                    id="preferred_pronouns">
                    <option value="">--Select your pronouns--</option>
                    <option value="he/him">he/him</option>
                    <option value="she/her">she/her</option>
                    <option value="they/them">they/them</option>
                    <option value="other">other</option>
                </select>
                {props.errors.preferred_pronouns && <span className="text-danger">Please select your preferred pronouns.</span>}
            </div>
            <div className="mb-3">
                <label htmlFor='birth_date' className="mb-1">Date of birth:<span className='text-danger'>*</span></label>
                <input {...props.register("birth_date", { required: true })}
                    className={`form-control w-50 ${props.errors.birth_date ? "border-danger": ""}`}
                    onBlur={(e) => props.handleInputChange(e)}
                    type="date" id="birth_date" placeholder=""/>
                    {props.errors.birth_date && <span className="text-danger">Please provide your date of birth.</span>}
            </div>

            <div className="mb-1">Address:<span className='text-danger'>*</span></div>
            <div className="row mb-3">
                <div className="col">
                    <div className="form-floating mb-2">
                            <input {...props.register("address_line_1", { required: true })}
                            className={`form-control ${props.errors.address_line_1 ? "border-danger": ""}`}
                            onBlur={(e) => props.handleInputChange(e)}
                            type="text" id="address_line_1" placeholder="Street address" />
                        <label htmlFor="address_line_1">Street address</label>
                        {props.errors.address_line_1 && <span className="text-danger">Please provide your street address.</span>}
                    </div>
                    <div className="form-floating mb-2">
                        <input {...props.register("city", { required: true })}
                            className={`form-control ${props.errors.city ? "border-danger": ""}`}
                            onBlur={(e) => props.handleInputChange(e)}
                            type="text" id="city" placeholder="City"/>
                        <label htmlFor="city">City</label>
                        {props.errors.city && <span className="text-danger">Please provide your city name.</span>}
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-2">
                        <input {...props.register("address_line_2")}
                            className={`form-control ${props.errors.address_line_2 ? "border-danger": ""}`}
                            onBlur={(e) => props.handleInputChange(e)}
                            type="text" id="address_line_2" placeholder="Street address line 2" />
                        <label htmlFor="address_line_2">Street address line 2</label>
                    </div>
                    <div className="">
                        <select {...props.register("state_province", {required: true})}
                            className={`form-select py-3 ${props.errors.state_province ? "border-danger": ""}`}
                            onBlur={(e) => props.handleInputChange(e)}
                            id="state_province">
                            <option value="">--Select your state--</option>
                            {statesList.map(state => {return(<option key={state.abbreviation} value={state.abbreviation}>{state.state}</option>)})}
                        </select>
                        {props.errors.state_province && <span className="text-danger">Please select your state.</span>}
                    </div>
                </div>
                <div>
                    <div className="form-floating mb-2">
                        <input {...props.register("postal_zip_code", { required: true })}
                            className={`form-control ${props.errors.postal_zip_code ? "border-danger": ""}`}
                            onBlur={(e) => props.handleInputChange(e)}
                            type="text" id="postal_zip_code" placeholder="Postal/Zip Code"/>
                        <label htmlFor="postal_zip_code">Postal/Zip Code</label>
                        {props.errors.postal_zip_code && <span className="text-danger">Please provide your postal/zip code.</span>}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input {...props.register("tattoo_description", { required: true })}
                        className={`form-control ${props.errors.tattoo_description ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="text" id="tattoo_description" placeholder="Tattoo description"/>
                    <label htmlFor="tattoo_description">Brief Tattoo Description<span className="text-danger">*</span></label>
                    {props.errors.tattoo_description && <span className="text-danger">Please describe your tattoo.</span>}
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input {...props.register("tattoo_placement", { required: true })}
                        className={`form-control ${props.errors.tattoo_placement ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="text" id="tattoo_placement" placeholder="Tattoo placement" />
                    <label htmlFor="tattoo_placement">Tattoo placement<span className="text-danger">*</span></label>
                    {props.errors.tattoo_placement && <span className="text-danger">Please describe your tattoo placement.</span>}
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input {...props.register("connection", { required: true })}
                        className={`form-control ${props.errors.connection ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="text" id="connection" placeholder="How did you hear about us?" />
                    <label htmlFor="connection">How did you hear about us?<span className="text-danger">*</span></label>
                    {props.errors.connection && <span className="text-danger">Please explain how you heard about us.</span>}
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={(e) => {
                    e.preventDefault()
                    props.handleBackButton("clientInfo", "idPhotos")}} className="btn btn-danger me-3">Back</button>
                <button onClick={(event) => {
                    event.preventDefault();
                    props.handleNextButton("clientInfo", "preProcedureQuestionnaire");
                    }} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
