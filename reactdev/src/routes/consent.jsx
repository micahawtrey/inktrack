import { useState } from "react"
import IdPhotos from "../consent-form-components/idPhotos"
import AcknowledgementAndWaiver from "../consent-form-components/acknowledgementAndWaiver"
import ClientInfo from "../consent-form-components/clientInfo"
import AfterCareInstructions from "../consent-form-components/afterCareInstructions"
import PreProcedureQuestionnaire from "../consent-form-components/preProcedureQuestionnaire"
import SignaturePage from "../consent-form-components/signaturePage"
import CompletedForm from "../consent-form-components/completedForm"

export default function ConsentForm() {
    const [components, setComponents] = useState({
        idPhotos: true,
        clientInfo: false,
        preProcedureQuestionnaire: false,
        acknowledgementAndWaiver: false,
        afterCareInstructions: false,
        signaturePage: false,
        completedForm: false
    })

    const [completedComponents, setCompletedComponents] = useState({
        idPhotos: false,
        clientInfo: false,
        preProcedureQuestionnaire: false,
        acknowledgementAndWaiver: false,
        afterCareInstructions: false,
        signaturePage: false
    })

    const [idData, setIdData] = useState({
        front_id: undefined,
        back_id: undefined,
    })

    const [clientInfoData, setClientInfoData] = useState({
        first_name: undefined,
        last_name: undefined,
        preferred_pronouns: undefined,
        age: undefined,
        birth_date: undefined,
        phone_number: undefined,
        email: undefined,
        address_line_1: undefined,
        city: undefined,
        state_province: undefined,
        postal_zip_code: undefined,
        tattoo_description: undefined,
        tattoo_placement: undefined,
        connection: undefined,
    })

    const [preProcedureData, setPreProcedureData] = useState({
        under_influence: undefined,
        communicable_disease: undefined,
        skin_conditions: undefined,
    })

    const [acknowledgementData, setAcknowledgementData] = useState({
        permanent: undefined,
        permanent_init: undefined,
        social_media_perm: undefined,
        social_media_perm_init: undefined,
        refund: undefined,
        refund_init: undefined,
        allergen_disclosure: undefined,
        allergen_disclosure_init: undefined,
        aftercare: undefined,
        aftercare_init: undefined,
        infection: undefined,
        infection_init: undefined,
        compensation: undefined,
        compensation_init: undefined,
        allergen_risk: undefined,
        allergen_risk_init: undefined,
        accurate_info: undefined,
        accurate_info_init: undefined,
        not_minor: undefined,
        not_minor_init: undefined,
        signed_date: undefined,
        signature: undefined,
    })

    const [afterCareData, setAfterCareData] = useState({
        aftercare_sig: undefined,
        aftercare_date: undefined,
    })

    const [signaturePageData, setSignaturePageData] = useState({
        full_name: undefined,
        general_date: undefined,
        general_sig: undefined,
        artist_sig: undefined,
        artist_date_signed: undefined,
        artist_name: undefined,
        artist_date: undefined,
        needle_info: undefined
    })

    const [optionalData, setOptionalData] = useState({
        address_line_2: undefined,
        pregnant_or_nursing: undefined,
        medical_history: undefined
    })

    const [formData, setFormData] = useState({
    })

    const handleSubmit = (event, activeComponent, nextComponent) => {
        event.preventDefault()
        setFormData({
            ...idData,
            ...clientInfoData,
            ...preProcedureData,
            ...acknowledgementData,
            ...afterCareData,
            ...signaturePageData,
            ...optionalData
        })
    }

    const componentDisplay = (activeComponent, nextComponent) => {
        setComponents({
            ...components,
            [activeComponent]: false,
            [nextComponent]: true
        })
        window.scrollTo(0, 0)
    }

    const handleNextButton = (event, validationData, activeComponent, nextComponent) => {
        event.preventDefault()
        if (completedComponents[activeComponent]) {
            componentDisplay(activeComponent, nextComponent)
        } else if (Object.values(validationData).includes(undefined)) {
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
        setFormData({
            ...idData,
            ...clientInfoData,
            ...preProcedureData,
            ...acknowledgementData,
            ...afterCareData,
            ...signaturePageData,
            ...optionalData
        })
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
                            formData={idData}
                            setFormData={setIdData}
                            handleNextButton={handleNextButton}/>
                            :<></>}
                        {components.clientInfo ? <ClientInfo
                            formData={clientInfoData}
                            setFormData={setClientInfoData}
                            optionalData={optionalData}
                            setOptionalData={setOptionalData}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.preProcedureQuestionnaire ? <PreProcedureQuestionnaire
                            formData={preProcedureData}
                            setFormData={setPreProcedureData}
                            optionalData={optionalData}
                            setOptionalData={setOptionalData}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.acknowledgementAndWaiver ? <AcknowledgementAndWaiver
                            formData={acknowledgementData}
                            setFormData={setAcknowledgementData}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.afterCareInstructions ? <AfterCareInstructions
                            formData={afterCareData}
                            setFormData={setAfterCareData}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.signaturePage ? <SignaturePage
                            formData={signaturePageData}
                            setFormData={setSignaturePageData}
                            handleSubmit={handleSubmit}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.completedForm ? <CompletedForm
                            formData={formData}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                    </form>
                </div>
            </div>
        </div>
    )
}
