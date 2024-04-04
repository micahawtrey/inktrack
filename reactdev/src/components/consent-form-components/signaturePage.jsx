import { useRef } from "react"
import SignatureCanvas from 'react-signature-canvas'
import { handleSignatureChange, handleClear, handleSignatureTimeCapture } from "../../utils/inputChangeUtils"
import { Controller } from "react-hook-form"

export default function SignaturePage({ props }) {
    const general_sig = useRef(null)
    const artist_sig = useRef(null)

    return (
        <div id="signaturePage" >
            <h3>Please Type Name, Sign, and Date</h3>
                <div className="mb-3">
                    <p>
                        By signing these forms I acknowledge that
                        I have read and understand all pages of this consent form.
                        I acknowledge that all information is correct. I understand that
                        tattoos are permanent and will change my appearance forever.
                        I ACKNOWLEDGE THAT WRITTEN AND VERBAL AFTERCARE WERE PROVIDED.
                    </p>
                    {props.errors.full_name && <span className="text-danger">Please provide your full name.</span>}
                    <div className="form-floating">
                        <input {...props.register("full_name", {required: true})}
                            onBlur={(e) => props.handleInputChange(e)}
                            className={`form-control w-50 ${props.errors.full_name ? "border-danger":null}`}
                            type="text" id="full_name" placeholder="Full name" />
                        <label htmlFor="full_name">Full name<span ></span></label>
                    </div>
                </div>

            <h4>Signature<span className="text-danger">*</span></h4>
            {props.errors.general_sig && <span className="text-danger">Please sign here.</span>}
            <div className="col-4 mb-3" style={{ width:127, height: 145, }}>
                <div>
                    <Controller
                        control={props.control}
                        name="general_sig"
                        rules={{required: true}}
                        render={({ field: { onChange } }) => (
                        <SignatureCanvas
                            canvasProps={{className: "border border-secondary", width:450, height: 100, id: "general_sig" }}
                            ref={general_sig}
                            onEnd={() => {
                                const file = handleSignatureChange(general_sig.current, props.userInfo)
                                handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "general_sig_time_stamp")
                                onChange(file)
                            }}
                        />)}
                    />
                </div>
                <div className="row justify-content-center">
                    <button
                        onClick={() => handleClear(general_sig)}
                        className="my-1 btn btn-secondary col-6"
                        >Clear</button>
                </div>
            </div>
            <h5>Date<span className="text-danger">*</span></h5>
            <div className="mb-3">
                <input {...props.register("general_date", {required: true})}
                    onBlur={(e) => props.handleInputChange(e)}
                    className={`form-control w-50 ${props.errors.general_date ? "border-danger":null}`}
                    type="date" id="general_date" />
            </div>

            <div>
                <p className="text-center fs-1 text-danger">
                    -----STOP HERE!-----
                </p>
            </div>

            <div>
                <h3>FOR TATTOO ARTIST ONLY</h3>
            </div>

            <h4>Artist Signature<span className="text-danger">*</span></h4>
            {props.errors.general_sig && <span className="text-danger">Artist, please sign here.</span>}
            <div className="col-4 mb-3" style={{ width:127, height: 145, }}>
                <div>
                    <Controller
                        control={props.control}
                        name="artist_sig"
                        rules={{required: true}}
                        render={({ field: { onChange } }) => (
                            <SignatureCanvas
                            canvasProps={{className: "border border-secondary", width:450, height: 100, id: "artist_sig" }}
                            ref={artist_sig}
                            onEnd={() => {
                                const file = handleSignatureChange(artist_sig.current, props.userInfo)
                                handleSignatureTimeCapture(props.signatureTime, props.setSignatureTime, "artist_sig_time_stamp")
                                onChange(file)
                                }}
                        />)}
                    />

                </div>
                <div className="row justify-content-center">
                    <button
                        onClick={() => handleClear(artist_sig)}
                        className="my-1 btn btn-secondary col-6"
                        >Clear</button>
                </div>
            </div>

            <div className="mb-3">
                <h4>Date<span className="text-danger">*</span></h4>
                <div className="">
                    <input {...props.register("artist_date_signed", {required: true})}
                        onBlur={(e) => props.handleInputChange(e)}
                        className={`form-control w-50 ${props.errors.artist_date_signed ? "border-danger":null}`}
                        type="date" id="artist_date_signed"/>
                </div>
            </div>

            <div className="form-floating mb-3">
                <input {...props.register("artist_name", {required: true})}
                    onBlur={(e) => props.handleInputChange(e)}
                    className={`form-control w-50 ${props.errors.artist_name ? "border-danger":null}`}
                    type="text" id="artist_name" placeholder="Name of Artist or Representative" />
                <label htmlFor="artist_name">Name of Artist or Representative<span className="text-danger">*</span></label>
            </div>

            <div className="mb-3">
                <label htmlFor="needle_info">LOT # - EXPIRATION DATE - STERILIZATION DATE - COMPANY/BRAND<span className="text-danger">*</span></label>
                <textarea {...props.register("needle_info", {required: true})}
                    onBlur={(e) => props.handleInputChange(e)}
                    className={`form-control ${props.errors.needle_info ? "border-danger":null}`}
                    id="needle_info"></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor='artist_date'>Signed Date:</label>
                <input {...props.register("artist_date", {required: true})}
                    onBlur={(e) => props.handleInputChange(e)}
                    className={`form-control w-50 ${props.errors.artist_date ? "border-danger":null}`}
                    type="date" id="artist_date"  />
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button onClick={(e) => {
                    e.preventDefault()
                    props.handleBackButton("signaturePage", "afterCareInstructions")}} className="btn btn-danger me-3">Back</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    props.handleNextButton("signaturePage", "completedForm")}}
                    className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
