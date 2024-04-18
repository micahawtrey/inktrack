import FullNameInput from "../../input-components/FullNameInput"
import EmailInput from "../../input-components/EmailInput"
import AgeInput from "../../input-components/AgeInput"
import PhoneNumberInput from "../../input-components/PhoneNumberInput"
import PronounsInput from "../../input-components/PronounsInput"
import DateOfBirthInput from "../../input-components/DateOfBirthInput"
import AddressInput from "../../input-components/AddressInput"
import TattooDescriptionInput from "../../input-components/TattooDescriptionInput"
import TattooPlacementInput from "../../input-components/TattooPlacementInput"

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
            <AddressInput props={props} inputId={"address"} />
            <TattooDescriptionInput props={props} inputId={"tattoo_description"} />
            <TattooPlacementInput props={props} inputId={"tattoo_placement"} />
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
