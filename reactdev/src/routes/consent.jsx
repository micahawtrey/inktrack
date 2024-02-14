import { useState } from "react"
import IdPhotos from "../consent-form-components/idPhotos"
import AcknowledgementAndWaiver from "../consent-form-components/acknowledgementAndWaiver"
import ClientInfo from "../consent-form-components/clientInfo"
import AfterCareInstructions from "../consent-form-components/afterCareInstructions"
import PreProcedureQuestionnaire from "../consent-form-components/preProcedureQuestionnaire"
import SignaturePage from "../consent-form-components/signaturePage"
import CompletedForm from "../consent-form-components/completedForm"
import { useForm } from "react-hook-form"
import axios from "axios"

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

    const { register, control, handleSubmit, formState: { errors }, trigger, getValues } = useForm()

    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
    })

    const onSubmit = async (data) => {
        console.log(data)
        const cleanData = {...data}

        delete cleanData.front_id
        delete cleanData.back_id
        delete cleanData.permanent_init
        delete cleanData.social_media_perm_init
        delete cleanData.refund_init
        delete cleanData.allergen_disclosure_init
        delete cleanData.aftercare_init
        delete cleanData.infection_init
        delete cleanData.compensation_init
        delete cleanData.allergen_risk_init
        delete cleanData.accurate_info_init
        delete cleanData.not_minor_init
        delete cleanData.signature
        delete cleanData.aftercare_sig
        delete cleanData.general_sig
        delete cleanData.artist_sig

        await axios.post("http://localhost:8000/api/documents/consent/", cleanData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
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
                            errors={errors}
                            control={control}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}/>
                            :<></>}
                        {components.clientInfo ? <ClientInfo
                            register={register}
                            errors={errors}
                            control={control}
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
                            control={control}
                            userInfo={userInfo}
                            handleInputChange={handleInputChange}
                            handleNextButton={handleNextButton}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                        {components.completedForm ? <CompletedForm
                            getValues={getValues}
                            handleBackButton={handleBackButton}/>
                            :<></>}
                    </form>
                </div>
            </div>
        </div>
    )
}
