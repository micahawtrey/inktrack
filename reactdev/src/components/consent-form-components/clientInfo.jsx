import 'react-phone-input-2/lib/style.css';
import { statesList } from "../../utils/utils";
import FullNameInput from "../../input-components/FullNameInput";
import EmailInput from "../../input-components/EmailInput";
import AgeInput from "../../input-components/AgeInput";
import PhoneNumberInput from "../../input-components/PhoneNumberInput";
import PronounsInput from '../../input-components/PronounsInput';
import DateOfBirthInput from '../../input-components/DateOfBirthInput';

export default function ClientInfo({ props }) {
    return (
        <div>
            <h2>Client Information</h2>
            <FullNameInput props={props} first_name={"first_name"} last_name={"last_name"} />
            <EmailInput props={props} inputId={"email"} />
            <AgeInput props={props} inputId={"age"} />
            <PhoneNumberInput props={props} inputId={"phone_number"} />
            <PronounsInput props={props} inputId={"preferred_pronouns"} />
            <DateOfBirthInput props={props} inputId={"birth_date"} />
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
