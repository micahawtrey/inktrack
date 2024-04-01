import { useState } from "react"
import IdPhotos from "../consent-form-components/idPhotos"
import AcknowledgementAndWaiver from "../consent-form-components/acknowledgementAndWaiver"
import ClientInfo from "../consent-form-components/clientInfo"
import AfterCareInstructions from "../consent-form-components/afterCareInstructions"
import PreProcedureQuestionnaire from "../consent-form-components/preProcedureQuestionnaire"
import SignaturePage from "../consent-form-components/signaturePage"
import CompletedForm from "../consent-form-components/completedForm"
import SubmittedLoading from "../consent-form-components/submittedLoading"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function ConsentForm() {
    const [components, setComponents] = useState({
        idPhotos: false,
        clientInfo: true,
        preProcedureQuestionnaire: false,
        acknowledgementAndWaiver: false,
        afterCareInstructions: false,
        signaturePage: false,
        completedForm: false,
        submittedLoading: false
    })

    const [signatureTime, setSignatureTime] = useState({
        permanent_init_time_stamp: undefined,
        social_media_perm_init_time_stamp: undefined,
        refund_init_time_stamp: undefined,
        allergen_disclosure_init_time_stamp: undefined,
        aftercare_init_time_stamp: undefined,
        infection_init_time_stamp: undefined,
        compensation_init_time_stamp: undefined,
        allergen_risk_init_time_stamp: undefined,
        accurate_info_init_time_stamp: undefined,
        not_minor_init_time_stamp: undefined,
        signature_time_stamp: undefined,
        general_sig_time_stamp: undefined,
        aftercare_sig_time_stamp: undefined,
        artist_sig_time_stamp: undefined
    })

    const { register, control, handleSubmit, formState: { errors }, trigger, getValues } = useForm()

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
    })

    const onSubmit = async (data) => {
        const formData = new FormData()
        for (let [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }
        for (let [key, value] of Object.entries(signatureTime)) {
            formData.append(key, value)
        }

        componentDisplay("completedForm", "submittedLoading")

        await axios.post("http://localhost:8000/api/documents/consent/", formData)
        .then(res => navigate("/"))
        .catch(err => componentDisplay("submittedLoading", "completedForm"))
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
                [e.target.id]: e.target.value
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
        <div>
            <div className="row bg-secondary">
                <div className="offset-1 col-10">
                    <div className="shadow p-4 mt-4 bg-white">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {components.idPhotos ? <IdPhotos
                                errors={errors}
                                control={control}
                                handleInputChange={handleInputChange}
                                handleNextButton={handleNextButton}/>
                                :null}
                            {components.clientInfo ? <ClientInfo
                                register={register}
                                errors={errors}
                                control={control}
                                handleInputChange={handleInputChange}
                                handleNextButton={handleNextButton}
                                handleBackButton={handleBackButton}/>
                                :null}
                            {components.preProcedureQuestionnaire ? <PreProcedureQuestionnaire
                                register={register}
                                errors={errors}
                                handleInputChange={handleInputChange}
                                handleNextButton={handleNextButton}
                                handleBackButton={handleBackButton}/>
                                :null}
                            {components.acknowledgementAndWaiver ? <AcknowledgementAndWaiver
                                register={register}
                                errors={errors}
                                control={control}
                                userInfo={userInfo}
                                signatureTime={signatureTime}
                                setSignatureTime={setSignatureTime}
                                handleInputChange={handleInputChange}
                                handleNextButton={handleNextButton}
                                handleBackButton={handleBackButton}/>
                                :null}
                            {components.afterCareInstructions ? <AfterCareInstructions
                                register={register}
                                errors={errors}
                                control={control}
                                userInfo={userInfo}
                                signatureTime={signatureTime}
                                setSignatureTime={setSignatureTime}
                                handleInputChange={handleInputChange}
                                handleNextButton={handleNextButton}
                                handleBackButton={handleBackButton}/>
                                :null}
                            {components.signaturePage ? <SignaturePage
                                register={register}
                                errors={errors}
                                control={control}
                                userInfo={userInfo}
                                signatureTime={signatureTime}
                                setSignatureTime={setSignatureTime}
                                handleInputChange={handleInputChange}
                                handleNextButton={handleNextButton}
                                handleBackButton={handleBackButton}/>
                                :null}
                            {components.completedForm ? <CompletedForm
                                getValues={getValues}
                                handleBackButton={handleBackButton}/>
                                :null}

                        </form>
                    </div>
                </div>
            </div>
            {components.submittedLoading ?
                <div className="row">
                    <div className="offset-2 col-8">
                        <div className="shadow p-4 mt-4 bg-light">
                            <SubmittedLoading/>
                        </div>
                    </div>
                </div>
                :null}
        </div>

    )
}
