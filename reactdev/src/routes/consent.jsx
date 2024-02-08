import { useState } from "react"
import IdPhotos from "../components/idPhotos"
import AcknowledgementAndWaiver from "../components/acknowledgementAndWaiver"
import ClientInfo from "../components/clientInfo"
import AfterCareInstructions from "../components/afterCareInstructions"
import PreProcedureQuestionnaire from "../components/preProcedureQuestionnaire"
import SignaturePage from "../components/signaturePage"

export default function ConsentForm() {
    const [components, setComponents] = useState({
        idPhotos: false,
        clientInfo: false,
        preProcedureQuestionnaire: false,
        acknowledgementAndWaiver: true,
        afterCareInstructions: false,
        signaturePage: false
    })

    const [completedComponents, setCompletedComponents] = useState({
        idPhotos: false,
        clientInfo: false,
        preProcedureQuestionnaire: false,
        acknowledgementAndWaiver: false,
        afterCareInstructions: false,
        signaturePage: false
    })

    const [formData, setFormData] = useState({
        front_id: "",
        back_id: "",
        first_name: "",
        last_name: "",
        preferred_pronouns: "",
        age: "",
        birth_date: "",
        phone_number: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state_province: "",
        postal_zip_code: "",
        tattoo_description: "",
        tattoo_placement: "",
        connection: "",
        under_influence: "",
        pregnant_or_nursing: "",
        communicable_disease: "",
        skin_conditions: "",
        medical_history: "",
        permanent: "",
        permanent_init: "",
        social_media_perm: "",
        social_media_perm_init: "",
        refund: "",
        refund_init: "",
        allergen_disclosure: "",
        allergen_disclosure_init: "",
        aftercare: "",
        aftercare_init: "",
        infection: "",
        infection_init: "",
        compensation: "",
        compensation_init: "",
        allergen_risk: "",
        allergen_risk_init: "",
        accurate_info: "",
        accurate_info_init: "",
        not_minor: "",
        not_minor_init: "",
        signed_date: "",
        signature: "",
        full_name: "",
        general_date: "",
        general_sig: "",
        aftercare_sig: "",
        aftercare_date: "",
        artist_sig: "",
        artist_date_signed: "",
        artist_name: "",
        artist_date: "",
        needle_info: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const componentDisplay = (activeComponent, nextComponent) => {
        setComponents({
            ...components,
            [activeComponent]: false,
            [nextComponent]: true
        })
    }

    const handleValidation = (validationData, activeComponent, nextComponent) => {
        if (completedComponents[activeComponent]) {
            componentDisplay(activeComponent, nextComponent)
        } else if (Object.values(validationData).includes(false)) {
            for (let [key, value] of Object.entries(validationData)) {
                if (!value) {
                    document.getElementById(key).classList.add("border-danger")
                }
            }
        } else {
            componentDisplay(activeComponent, nextComponent)
            setCompletedComponents({
                ...completedComponents,
                [activeComponent]: true
            })
        }
    }

    const handleBackButton = (activeComponent, backComponent) => {
        componentDisplay(activeComponent, backComponent)
    }

    return (
        <div className="row">
            <div className="offset-1 col-10">
                <div className="shadow p-4 mt-4">
                    <form onSubmit={handleSubmit} className="">
                        {components.idPhotos ? <IdPhotos
                            formData={formData}
                            setFormData={setFormData}
                            handleValidation={handleValidation}/>
                            :<></>}
                        {components.clientInfo ? <ClientInfo
                            formData={formData}
                            setFormData={setFormData}
                            handleValidation={handleValidation}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.preProcedureQuestionnaire ? <PreProcedureQuestionnaire
                            formData={formData}
                            setFormData={setFormData}
                            handleValidation={handleValidation}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.acknowledgementAndWaiver ? <AcknowledgementAndWaiver
                            formData={formData}
                            setFormData={setFormData}
                            handleValidation={handleValidation}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.afterCareInstructions ? <AfterCareInstructions />:<></>}
                        {components.signaturePage ? <SignaturePage />:<></>}
                    </form>
                </div>
            </div>
        </div>
    )
}
