import { useRef } from "react"
import { handleSignatureChange, handleClear, handleSignatureTimeCapture } from "../../utils/inputChangeUtils"
import SignatureCanvas from 'react-signature-canvas'
import { Controller } from "react-hook-form"

export default function AcknowledgementAndWaiver({ props }) {
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
        <div id="acknowledgementAndWaiver">
            <h2>Acknowledgment and Waiver</h2>
            <h4>Please check the box and initial under each statement.</h4>
            <div className="form-check">
                <input {...props.register("permanent", { required: true })}
                        className={`form-check-input ${props.errors.permanent ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="permanent"/>
                <label htmlFor="permanent" className="form-check-label">I understand that this procedure is a permanent change to my skin and body.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="permanent_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "permanent_init" }}
                                    ref={permanent_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(permanent_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "permanent_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.permanent_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(permanent_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("social_media_perm", { required: true })}
                        className={`form-check-input ${props.errors.social_media_perm ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="social_media_perm"/>
                <label htmlFor="social_media_perm">I allow my tattoo to be photographed and be used for Mad Ink by Stripes portfolio.
                    Pictures may be posted on Facebook, instagram, and studio website.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="social_media_perm_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "social_media_perm_init" }}
                                    ref={social_media_perm_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(social_media_perm_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "social_media_perm_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.social_media_perm_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(social_media_perm_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("refund", { required: true })}
                        className={`form-check-input ${props.errors.refund ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="refund"/>
                <label htmlFor="refund">I acknowledge that Mad Ink by Stripes does not offer refunds or free touch ups after 3 months.
                    Hands, fingers, feet, and micro tattoos do not get free touch ups at any time.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="refund_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "refund_init" }}
                                    ref={refund_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(refund_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "refund_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.refund_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(refund_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("allergen_disclosure", { required: true })}
                        className={`form-check-input ${props.errors.allergen_disclosure ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="allergen_disclosure"/>
                <label htmlFor="allergen_disclosure">I agree that the studio does not have a way of identifying if I am
                    allergic to the elements or ingredients that will be used for my tattoo. If I am allergic to anything I will
                    let my artist know. That includes pigment, dyes, soaps, disinfectant ,latex, metal, and food allergies.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="allergen_disclosure_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "allergen_disclosure_init" }}
                                    ref={allergen_disclosure_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(allergen_disclosure_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "allergen_disclosure_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.allergen_disclosure_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(allergen_disclosure_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("aftercare", { required: true })}
                        className={`form-check-input ${props.errors.aftercare ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="aftercare"/>
                <label htmlFor="aftercare">I understand that I need to take care of the tattoo by
                    following the written and verbal aftercare provided.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="aftercare_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "aftercare_init" }}
                                    ref={aftercare_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(aftercare_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "aftercare_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.aftercare_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(aftercare_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("infection", { required: true })}
                        className={`form-check-input ${props.errors.infection ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="infection"/>
                <label htmlFor="infection">I understand that I might get an infection if I don't follow
                    the instructions given to me in regards of taking care of my tattoo. If I have had issues
                    healing before, I will tell my artist before the session.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="infection_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "infection_init" }}
                                    ref={infection_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(infection_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "infection_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.infection_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(infection_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("compensation", { required: true })}
                        className={`form-check-input ${props.errors.compensation ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="compensation"/>
                <label htmlFor="compensation">I agree to compensate Mad Ink by Stripes for the
                    services provided today by paying the agreed upon price for the session.</label>
            </div>
            <div >
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="compensation_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "compensation_init" }}
                                    ref={compensation_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(compensation_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "compensation_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.compensation_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(compensation_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <input {...props.register("allergen_risk", { required: true })}
                        className={`form-check-input ${props.errors.allergen_risk ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="allergen_risk"/>
                <label htmlFor="allergen_risk">I acknowledge it is not reasonably possible for an
                    employee of Mad Ink by Stripes to determine whether I have an allergic reaction to the
                    pigments or processes used in my tattoo and I agreed to accept the risk that such a
                    reaction is possible. I will search medical attention if needed.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="allergen_risk_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "allergen_risk_init" }}
                                    ref={allergen_risk_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(allergen_risk_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "allergen_risk_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.allergen_risk_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(allergen_risk_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input {...props.register("accurate_info", { required: true })}
                        className={`form-check-input ${props.errors.accurate_info ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="accurate_info"/>
                <label htmlFor="accurate_info">I confirm that the information I provided in this
                    document is accurate and true.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="accurate_info_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "accurate_info_init" }}
                                    ref={accurate_info_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(accurate_info_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "accurate_info_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.accurate_info_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(accurate_info_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div className="form-check">
                <input {...props.register("not_minor", { required: true })}
                        className={`form-check-input ${props.errors.not_minor ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="checkbox" id="not_minor"/>
                <label htmlFor="not_minor">I confirm that I am 18 years or older.</label>
            </div>
            <div>
                Initial:<span className="text-danger">*</span>
                <div className="col-2 mb-3" style={{width: 127, height: 165, }}>
                    <div>
                        <Controller
                            control={props.control}
                            name="not_minor_init"
                            rules={{required: true}}
                            render={({ field: { onChange } }) => (
                                <SignatureCanvas
                                    canvasProps={{ className: "border border-secondary", width:125, height: 100, id: "not_minor_init" }}
                                    ref={not_minor_init}
                                    onEnd={() => {
                                        const file = handleSignatureChange(not_minor_init.current, props.userInfo)
                                        handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "not_minor_init_time_stamp")
                                        onChange(file)
                                    }}/>
                                )}
                        />
                        {props.errors.not_minor_init && <span className="text-danger">Please initial here.</span>}
                    </div>
                    <div className="row justify-content-center">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                handleClear(not_minor_init)}
                            }
                            className="my-1 btn btn-secondary col-6"
                            >Clear</button>
                    </div>
                </div>
            </div>

            <div>
                <h4>Client Signature<span className="text-danger">*</span></h4>
            </div>
            <div className="col-4 mb-3" style={{ width:127, height: 165, }}>
                <div>
                    <Controller
                        control={props.control}
                        name="signature"
                        rules={{required: true}}
                        render={({ field: { onChange } }) => (
                            <SignatureCanvas
                                canvasProps={{ className: "border border-secondary", width:450, height: 100, id: "signature" }}
                                ref={signature}
                                onEnd={() => {
                                    const file = handleSignatureChange(signature.current, props.userInfo)
                                    handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "signature_time_stamp")
                                    onChange(file)
                                }}/>
                            )}
                    />
                    {props.errors.signature && <span className="text-danger">Please sign here.</span>}
                </div>
                <div className="row justify-content-center">
                    <button
                        onClick={(event) => {
                            event.preventDefault()
                            handleClear(signature)}
                        }
                        className="my-1 btn btn-secondary col-6"
                        >Clear</button>
                </div>
            </div>
            <div className="mb-3">
                <h4>Signed Date<span className="text-danger">*</span></h4>
                <div>
                    <input {...props.register("signed_date", { required: true })}
                        className={`form-control w-50 ${props.errors.signed_date ? "border-danger": ""}`}
                        onBlur={(e) => props.handleInputChange(e)}
                        type="date" id="signed_date"/>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={(e) => {
                    e.preventDefault()
                    props.handleBackButton("acknowledgementAndWaiver", "preProcedureQuestionnaire")}} className="btn btn-danger me-3">Back</button>
                <button onClick={(event) => {
                    event.preventDefault()
                    props.handleNextButton("acknowledgementAndWaiver", "afterCareInstructions")
                    }} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
