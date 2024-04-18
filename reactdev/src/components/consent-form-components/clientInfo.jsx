import PropTypes from "prop-types"
import FullNameInput from "../../input-components/FullNameInput"
import EmailInput from "../../input-components/EmailInput"
import AgeInput from "../../input-components/AgeInput"
import PhoneNumberInput from "../../input-components/PhoneNumberInput"
import PronounsInput from "../../input-components/PronounsInput"
import DateOfBirthInput from "../../input-components/DateOfBirthInput"
import AddressInput from "../../input-components/AddressInput"
import TattooDescriptionInput from "../../input-components/TattooDescriptionInput"
import TattooPlacementInput from "../../input-components/TattooPlacementInput"
import ConnectionInput from "../../input-components/ConnectionInput"
import NavigationButtons from "../../input-components/NavigationButtons"

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
            <ConnectionInput props={props} inputId={"connection"} />
            <NavigationButtons
                props={props}
                next={"preProcedureQuestionnaire"}
                back={"idPhotos"}
                current={"clientInfo"}
            />
        </div>
    )
}

ClientInfo.propTypes = {
    props: PropTypes.object
}
