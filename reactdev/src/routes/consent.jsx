import { useState } from "react"
import IdPhotos from "../consent-form-components/idPhotos"
import AcknowledgementAndWaiver from "../consent-form-components/acknowledgementAndWaiver"
import ClientInfo from "../consent-form-components/clientInfo"
import AfterCareInstructions from "../consent-form-components/afterCareInstructions"
import PreProcedureQuestionnaire from "../consent-form-components/preProcedureQuestionnaire"
import SignaturePage from "../consent-form-components/signaturePage"
import CompletedForm from "../consent-form-components/completedForm"
import { useForm } from "react-hook-form"

export default function ConsentForm() {
    const [components, setComponents] = useState({
        idPhotos: false,
        clientInfo: false,
        preProcedureQuestionnaire: false,
        acknowledgementAndWaiver: false,
        afterCareInstructions: true,
        signaturePage: false,
        completedForm: false
    })

    const { register, control, handleSubmit, formState: { errors }, trigger } = useForm()

    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
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

    const onSubmit = async () => {
        console.log("AHHHHHHHHHHHHH")
        // event.preventDefault()
        // setFormData({
        //     ...idData,
        //     ...clientInfoData,
        //     ...preProcedureData,
        //     ...acknowledgementData,
        //     ...afterCareData,
        //     ...signaturePageData,
        //     ...optionalData
        // })

        // const consentAPIUrl = "http://localhost:8000/api/documents/consent/"
        // const fetchConfig = {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }
        // const response = await fetch(consentAPIUrl, fetchConfig)
        // if (response.ok) {
        //     const data = await response.json()
        //     console.log(data)
        // }
    }

    const componentDisplay = (activeComponent, nextComponent) => {
        setComponents({
            ...components,
            [activeComponent]: false,
            [nextComponent]: true
        })
        window.scrollTo(0, 0)
    }

    const handleInputChange = (e) => {
        if (Object.keys(errors).includes(e.target.id)) {
            trigger(e.target.id)
        }
        if (Object.keys(userInfo).includes(e.target.id)) {
            setUserInfo({
                ...userInfo,
                [e.target.id]: e.target.innerHtml
            })
        }
    }

    const handleNextButton = (activeComponent, nextComponent) => {
        trigger().then((isValid) => {
            if (isValid) {componentDisplay(activeComponent, nextComponent)}})
        }

    const handleBackButton = (activeComponent, backComponent) => {
        componentDisplay(activeComponent, backComponent)
    }

    return (
        <div className="row">
            <div className="offset-1 col-10">
                <div className="shadow p-4 mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {components.idPhotos ? <IdPhotos
                            formData={idData}
                            setFormData={setIdData}
                            handleNextButton={handleNextButton}/>
                            :<></>}
                        {components.clientInfo ? <ClientInfo
                            register={register}
                            errors={errors}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.preProcedureQuestionnaire ? <PreProcedureQuestionnaire
                            register={register}
                            errors={errors}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.acknowledgementAndWaiver ? <AcknowledgementAndWaiver
                            register={register}
                            errors={errors}
                            control={control}
                            userInfo={userInfo}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.afterCareInstructions ? <AfterCareInstructions
                            register={register}
                            errors={errors}
                            control={control}
                            userInfo={userInfo}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.signaturePage ? <SignaturePage
                            register={register}
                            errors={errors}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.completedForm ? <CompletedForm
                            formData={formData}
                            handleBackButton={handleBackButton}
                            handleSubmit={handleSubmit}/>
                            :<></>}
                    </form>
                </div>
            </div>
        </div>
    )
}
