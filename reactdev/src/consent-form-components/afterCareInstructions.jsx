import { useRef } from "react"
import SignatureCanvas from 'react-signature-canvas'
import { handleSignatureChange, handleClear } from "../utils/inputChangeUtils"
import { Controller } from "react-hook-form"

export default function AfterCareInstructions({register, errors, control, userInfo, handleInputChange, handleNextButton, handleBackButton}) {
    const aftercare_sig = useRef(null)

    return (
        <div id="afterCareInstructions" >
            <div>
                    <h3>Mad Ink By Stripes After Care Instructions</h3>
            </div>
            <div>
                <p><em>If you have any questions or concerns, Call or Text (719)-428-5728</em></p>
                <p>
                    Remove saniderm 12-15 hours after tattoo procedure. Wash immediately .
                    <br/>
                    **DO NOT LEAVE ON  LONGER THAN 24 HOURS**
                </p>
                <p>If paper towels or gauze are used to cover a larger tattoo, remove within 2 or 3 hours. Wash immediately.</p>
                <p>
                    After bandage is removed, wash tattoo with warm water and gentle, fragrance-free soap.
                    <br/>
                    *Blue Dawn or Dial is recommended*
                </p>
                <p>
                    Wash tattoo 2-3 times a day and keep clean.
                    <br/>
                    Gently PAT dry with a paper towel.
                    <br/>
                    Apply a thin layer of ointment after drying the tattoo.
                    <br/>
                    *Aquaphor or Bag Balm is recommended*
                </p>
                <p>
                    If your tattoo is looking dry throughout the day, apply another THIN layer of ointment.
                    DO NOT stay in direct sunlight or use tanning beds until the tattoo is healed (approximately 14 days).
                    After 2 weeks, use at least SPF 25 to protect tattoo from fading.
                </p>
                <p>DO NOT soak in the bathtub, hot tub, sauna, jacuzzi, or swimming pools while your tattoo is healing (approximately 14 days).</p>
                <p>YOU MUST SHOWER to keep your tattoo healthy.</p>
                <p>DO NOT scratch or pick at tattoo. It could cause color loss, scarring or infection. Ink and skin flaking off and scabbing is normal.</p>
                <p>Tattoos will cause redness and swelling but if you develop a fever, rash, yellow/green discharge, or constant irritation after 7 days, call your doctor immediately.</p>
            </div>
            <div>
                <h4>Client Signature<span className="text-danger">*</span></h4>
                {errors.aftercare_sig && <span className="text-danger">Please sign here.</span>}
            </div>
            <div className=''>
                <div>
                    <div className="col-4 mb-3" style={{ width:127, height: 145, }}>
                        <div>
                            <Controller
                                control={control}
                                name="aftercare_sig"
                                rules={{required: true}}
                                render={({ field: { onChange } }) => (
                                    <SignatureCanvas
                                        canvasProps={{className: "border border-secondary", width:450, height: 100 }}
                                        ref={aftercare_sig}
                                        onEnd={() => {
                                            const file = handleSignatureChange(aftercare_sig.current, userInfo)
                                            onChange(file)
                                        }}
                                        />
                                    )}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                onClick={() => handleClear(aftercare_sig)}
                                className="my-1 btn btn-secondary col-6"
                                >Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <h4>Date<span className="text-danger">*</span></h4>
                <div className="form-group">
                    <input {...register("aftercare_date", {required: true})}
                        onBlur={(e) => {handleInputChange(e)}}
                        className={`form-control w-50 ${errors.aftercare_date ? "border-danger":null}`}
                        type="date" name="aftercare_date" id="aftercare_date" />
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleBackButton("afterCareInstructions", "acknowledgementAndWaiver")} className="btn btn-danger me-3">Back</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    handleNextButton("afterCareInstructions", "signaturePage")}}
                    className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
