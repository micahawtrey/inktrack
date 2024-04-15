import { useState } from "react"
import IdPhotos from "../components/consent-form-components/idPhotos"
import AcknowledgementAndWaiver from "../components/consent-form-components/acknowledgementAndWaiver"
import ClientInfo from "../components/consent-form-components/clientInfo"
import AfterCareInstructions from "../components/consent-form-components/afterCareInstructions"
import PreProcedureQuestionnaire from "../components/consent-form-components/preProcedureQuestionnaire"
import SignaturePage from "../components/consent-form-components/signaturePage"
import CompletedForm from "../components/consent-form-components/completedForm"
import SubmittedLoading from "../components/consent-form-components/submittedLoading"
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

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        trigger,
        getValues } = useForm()

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
        if (formData["custom_pronouns"]) {
            formData["preferred_pronouns"] = formData["custom_pronouns"]
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

    const props = {
        errors,
        control,
        register,
        handleInputChange,
        handleNextButton,
        handleBackButton,
        userInfo,
        signatureTime,
        setSignatureTime,
        getValues
    }

    return (
        <div className="container shadow p-4 my-4 bg-bg rounded">
            <div id="consent-form">
                {components.idPhotos ? <IdPhotos
                    props={props} />
                    :null}
                {components.clientInfo ? <ClientInfo
                    props={props} />
                    :null}
                {components.preProcedureQuestionnaire ? <PreProcedureQuestionnaire
                    props={props} />
                    :null}
                {components.acknowledgementAndWaiver ? <AcknowledgementAndWaiver
                    props={props} />
                    :null}
                {components.afterCareInstructions ? <AfterCareInstructions
                    props={props} />
                    :null}
                {components.signaturePage ? <SignaturePage
                    props={props} />
                    :null}
                {components.completedForm ? <CompletedForm
                    getValues={getValues}
                    handleBackButton={handleBackButton}/>
                    :null}
            </div>
            {components.submittedLoading ? <SubmittedLoading/>
                :null}
        </div>
    )
}
