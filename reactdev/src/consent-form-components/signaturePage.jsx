import { useRef } from "react"
import SignatureCanvas from 'react-signature-canvas'
import { handleInputChange, handleSignatureChange, handleClear } from "../utils/inputChangeUtils"

export default function SignaturePage({formData, setFormData, handleNextButton, handleBackButton}) {
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
                    <div className="form-floating">
                        <input
                            onChange={(e) => handleInputChange(e, formData, setFormData)}
                            type="text" className="form-control w-50" value={formData.full_name} name="full_name" id="full_name" placeholder="Full name" />
                        <label htmlFor="full_name">Full name<span ></span></label>
                    </div>
                </div>

            <h4>Signature<span className="text-danger">*</span></h4>
            <div className=''>
                <div>
                    <div className="col-4 mb-3" style={{ width:127, height: 145, }}>
                        <div>
                            <SignatureCanvas
                                canvasProps={{name: "general_sig", id: "general_sig", className: "border border-secondary", width:450, height: 100 }}
                                ref={general_sig}
                                onEnd={() => handleSignatureChange(general_sig.current, formData, setFormData)}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                onClick={() => handleClear(general_sig, formData, setFormData)}
                                className="my-1 btn btn-secondary col-6"
                                >Clear</button>
                        </div>
                    </div>
                </div>
            </div>

            <h5>Date<span className="text-danger">*</span></h5>
            <div className="mb-3">
                <input
                    onChange={(e) => handleInputChange(e, formData, setFormData)}
                    type="date" className="form-control w-50" value={formData.general_date} name="general_date" id="general_date" />
            </div>

            <h4>Artist Signature<span className="text-danger">*</span></h4>
            <div className=''>
                <div>
                    <div className="col-4 mb-3" style={{ width:127, height: 145, }}>
                        <div>
                            <SignatureCanvas
                                canvasProps={{name: "artist_sig", id: "artist_sig", className: "border border-secondary", width:450, height: 100 }}
                                ref={artist_sig}
                                onEnd={() => handleSignatureChange(artist_sig.current, formData, setFormData)}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                onClick={() => handleClear(artist_sig, formData, setFormData)}
                                className="my-1 btn btn-secondary col-6"
                                >Clear</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <h5>Date<span className="text-danger">*</span></h5>
                <div className="">
                    <input
                        onChange={(e) => handleInputChange(e, formData, setFormData)}
                        type="date" className="form-control w-50" value={formData.artist_date_signed} name="artist_date_signed" id="artist_date_signed" />
                </div>
            </div>

            <div className=''>
                <p className="text-center fs-1 text-danger">
                    -----STOP HERE!-----
                </p>
            </div>

            <div className=''>
                <h3>FOR TATTOO ARTIST ONLY</h3>
            </div>

            <div>
                <label htmlFor="artist_name">Name of Artist or Representative</label>
                <input
                    onChange={(e) => handleInputChange(e, formData, setFormData)}
                    type="text" className="form-control w-50 mb-3" value={formData.artist_name} name="artist_name" id="artist_name" />
            </div>

            <div className="">
                <label htmlFor='artist_date'>Signed Date</label>
                <input
                    onChange={(e) => handleInputChange(e, formData, setFormData)}
                    type="date" className="form-control w-50 mb-3" value={formData.artist_date} name="artist_date" id="artist_date"  />
            </div>

            <div className="">
                <p>LOT #- EXPIRATION DATE - STERILIZATION DATE -COMPANY/BRAND</p>
                <textarea
                    onChange={(e) => handleInputChange(e, formData, setFormData)}
                    value={formData.needle_info} name="needle_info" id="needle_info" className="form-control"></textarea>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleBackButton("signaturePage", "afterCareInstructions")} className="btn btn-danger me-3">Back</button>
                <button onClick={(e) => handleNextButton(e, formData, "signaturePage", "completedForm")} className="btn btn-success">Submit</button>
            </div>
        </div>
    )
}
