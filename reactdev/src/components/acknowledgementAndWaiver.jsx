import { useRef, useState } from "react"
import { handleInputChange, handleCheckBoxChange, handleSignatureChange, handleClear } from "../utils/inputChangeUtils"
import SignatureCanvas from 'react-signature-canvas'

export default function AcknowledgementAndWaiver({formData, setFormData, handleValidation, handleBackButton}) {
    const [inputData, setInputData] = useState({
        permanent: false,
        permanent_init: false,
        social_media_perm: false,
        social_media_perm_init: false,
        refund: false,
        refund_init: false,
        allergen_disclosure: false,
        allergen_disclosure_init: false,
        aftercare: false,
        aftercare_init: false,
        infection: false,
        infection_init: false,
        compensation: false,
        compensation_init: false,
        allergen_risk: false,
        allergen_risk_init: false,
        accurate_info: false,
        accurate_info_init: false,
        not_minor: false,
        not_minor_init: false,
        signed_date: false,
        signature: false,
    })

    const permanent_init = useRef(null)
    const social_media_perm_init = useRef(null)
    const refund_init = useRef(null)
    const allergen_disclosure_init = useRef(null)
    const aftercare_init = useRef(null)
    const infection_init = useRef(null)
    const compensation_init = useRef(null)
    const allergen_risk_init = useRef(null)
    const accurate_info_init = useRef(null)
    const not_minor_init = useRef(null)
    const signature = useRef(null)

    return (
        <div id="acknowledgementAndWaiver" >
            <h2>Acknowledgment and Waiver</h2>
            <h4>Please check the box and initial under each statement.</h4>
            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" name="permanent" id="permanent" />
                <label htmlFor="permanent" className="form-check-label">I understand that this procedure is a permanent change to my skin and body.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "permanent_init", id: "permanent_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={permanent_init}
                            onEnd={() => handleSignatureChange(permanent_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(permanent_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="social_media_perm" id="social_media_perm" />
                <label htmlFor="social_media_perm">I allow my tattoo to be photographed and be used for Mad Ink by Stripes portfolio.
                    Pictures may be posted on Facebook, instagram, and studio website.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "social_media_perm_init", id: "social_media_perm_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={social_media_perm_init}
                            onEnd={() => handleSignatureChange(social_media_perm_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(social_media_perm_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="refund" id="refund" />
                <label htmlFor="refund">I acknowledge that Mad Ink by Stripes does not offer refunds or free touch ups after 3 months.
                    Hands, fingers, feet, and micro tattoos do not get free touch ups at any time.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "refund_init", id: "refund_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={refund_init}
                            onEnd={() => handleSignatureChange(refund_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(refund_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="allergen_disclosure" id="allergen_disclosure" />
                <label htmlFor="allergen_disclosure">I agree that the studio does not have a way of identifying if I am
                    allergic to the elements or ingredients that will be used for my tattoo. If I am allergic to anything I will
                    let my artist know. That includes pigment, dyes, soaps, disinfectant ,latex, metal, and food allergies.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "allergen_disclosure_init", id: "allergen_disclosure_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={allergen_disclosure_init}
                            onEnd={() => handleSignatureChange(allergen_disclosure_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(allergen_disclosure_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="aftercare" id="aftercare" />
                <label htmlFor="aftercare">I understand that I need to take care of the tattoo by
                    following the written and verbal aftercare provided.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "aftercare_init", id: "aftercare_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={aftercare_init}
                            onEnd={() => handleSignatureChange(aftercare_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(aftercare_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="infection" id="infection" />
                <label htmlFor="infection">I understand that I might get an infection if I don't follow
                    the instructions given to me in regards of taking care of my tattoo. If I have had issues
                    healing before, I will tell my artist before the session.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "infection_init", id: "infection_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={infection_init}
                            onEnd={() => handleSignatureChange(infection_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(infection_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="compensation" id="compensation" />
                <label htmlFor="compensation">I agree to compensate Mad Ink by Stripes for the
                    services provided today by paying the agreed upon price for the session.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "compensation_init", id: "compensation_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={compensation_init}
                            onEnd={() => handleSignatureChange(compensation_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(compensation_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="allergen_risk" id="allergen_risk" />
                <label htmlFor="allergen_risk">I acknowledge it is not reasonably possible for an
                    employee of Mad Ink by Stripes to determine whether I have an allergic reaction to the
                    pigments or processes used in my tattoo and I agreed to accept the risk that such a
                    reaction is possible. I will search medical attention if needed.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "allergen_risk_init", id: "allergen_risk_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={allergen_risk_init}
                            onEnd={() => handleSignatureChange(allergen_risk_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(allergen_risk_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="accurate_info" id="accurate_info" />
                <label htmlFor="accurate_info">I confirm that the information I provided in this
                    document is accurate and true.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "accurate_info_init", id: "accurate_info_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={accurate_info_init}
                            onEnd={() => handleSignatureChange(accurate_info_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(accurate_info_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input
                    onChange={(e) => handleCheckBoxChange(e, formData, setFormData, inputData, setInputData)}
                    type="checkbox" className="form-check-input" value="" name="not_minor" id="not_minor" />
                <label htmlFor="not_minor">I confirm that I am 18 years or older.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 145, }}>
                    <div>
                        <SignatureCanvas
                            canvasProps={{name: "not_minor_init", id: "not_minor_init", className: "border border-secondary", width: 125, height: 100 }}
                            ref={not_minor_init}
                            onEnd={() => handleSignatureChange(not_minor_init.current, formData, setFormData, inputData, setInputData)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={() => handleClear(not_minor_init, formData, setFormData, inputData, setInputData)}
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="">
                <h4>Client Signature<span className="text-danger">*</span></h4>
            </div>
            <div className=''>
                <div>
                    <div className="col-4 mb-3" style={{ width:127, height: 145, }}>
                        <div>
                            <SignatureCanvas
                                canvasProps={{name: "signature", id: "signature", className: "border border-secondary", width:450, height: 100 }}
                                ref={signature}
                                onEnd={() => handleSignatureChange(signature.current, formData, setFormData, inputData, setInputData)}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                onClick={() => handleClear(signature, formData, setFormData, inputData, setInputData)}
                                className="my-1 btn btn-secondary col-6"
                                >Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mb-3">
                <h4>Signed Date<span className="text-danger">*</span></h4>
                <div className="">
                    <input
                        onChange={(e) => handleInputChange(e, formData, setFormData, inputData, setInputData)}
                        type="date" className="form-control w-50" value={formData.signed_date} name="signed_date" id="signed_date" />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleBackButton("acknowledgementAndWaiver", "preProcedureQuestionnaire")} className="btn btn-danger me-3">Back</button>
                <button onClick={() => handleValidation(inputData, "acknowledgementAndWaiver", "afterCareInstructions")} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
