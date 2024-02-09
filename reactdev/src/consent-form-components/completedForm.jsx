export default function CompletedForm({formData, handleBackButton, handleSubmit}) {


    return (
        <div>
            <div>
                <h1 className="text-center">Please Verify Your Information is Correct</h1>
            </div>
            <h2>Client Information</h2>
            <p >Front of Id:</p>
            <img src={ URL.createObjectURL(formData.front_id) } alt=""/>
            <p >Back of Id:</p>
            <img src={ URL.createObjectURL(formData.back_id) } alt=""/>
            <p><span>Name: </span><b>{ formData.first_name } { formData.last_name }</b><br/>
            <span>Preferred pronouns:  </span><b>{formData.preferred_pronouns}</b><br/>
            <span>Age: </span><b>{ formData.age }</b><br/>
            <span>Date of birth: </span><b>{ formData.birth_date }</b><br/>
            <span>Phone number: </span><b>{ formData.phone_number }</b><br/>
            <span>Email address: </span><b>{ formData.email }</b><br/>
            <span>Address: </span><b>
                { formData.address_line_1 + ", "}
                {formData.address_line_2 ? formData.address_line_2 + ", ":null}
                { formData.city + ", "}
                { formData.state_province + " "} { formData.postal_zip_code }
                </b>
            <br/>
            <span>Brief Description of the tattoo: </span><b>{ formData.tattoo_description }</b><br/>
            <span>Placement of tattoo: </span><b>{ formData.tattoo_placement }</b><br/>
            <span>How did you hear about us?: </span><b>{ formData.connection }</b></p>
            <h2>Pre-Prodecure Questionnaire</h2>
            <p><span>Are you under the influence of drugs or alcohol? </span><b>{ formData.under_influence }</b></p>
            {formData.pregnant_or_nursing ?
                <p><span>FEMALE ONLY: Are you pregnant or nursing? </span><b>{ formData.pregnant_or_nursing }</b></p>
                :null
            }
            <p><span>Do you have a communicable disease? </span><b>{ formData.communicable_disease }</b></p>
            <p><span>Do you have any skin conditions? </span><b>{ formData.skin_conditions }</b></p>
            <p >Please tell us about your medical history (e.g. Are you on blood thinners?, Diabetes, Cardiovascular Disease, Epilepsy, Blood-related disease, Hemophilia ,immune compromised, etc.)</p>
            {formData.medical_history ?
                <b>{formData.medical_history}</b>
                :"Client did not declare anything."
            }

            <h1 className="mt-5">Acknowledgment and Waiver</h1>
            <h3>Please check the box and initial under each statement.</h3>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I understand that this procedure is
                a permanent change to my skin and body.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.permanent_init) } alt=""/>
            </p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I allow my tattoo to be photographed and be used for
                Mad Ink by Stripes portfolio. Pictures may be posted on Facebook, instagram, and studio website.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.social_media_perm_init) } alt=""/>
            </p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I acknowledge that Mad Ink by
                Stripes does not offer refunds or free touch ups after 3 months.
                Hands, fingers, feet, and micro tattoos do not get free touch ups at any time.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.refund_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I agree that the studio does not have a
                way of identifying if I am allergic to the elements or ingredients
                that will be used for my tattoo. If I am allergic to anything I
                will let my artist know. That includes pigment, dyes, soaps,
                disinfectant, latex, metal, and food allergies.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.allergen_disclosure_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I understand that I need to take care of the tattoo
                by following the written and verbal aftercare provided.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.aftercare_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I understand that I might get an
                infection if I don't follow the instructions given to me in regards
                to taking care of my tattoo. If I have had issues healing before,
                I will tell my artist before the session.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.infection_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I agree to compensate Mad Ink by Stripes
                for the services provided today by
                paying the agreed-upon price for the session.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.compensation_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I acknowledge it is not reasonably possible
                for an employee of Mad Ink by Stripes to determine
                whether I have an allergic reaction to the pigments or
                processes used in my tattoo and I agreed to accept the risk
                that such a reaction is possible. I will search for medical attention if needed.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.allergen_risk_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I confirm that the information I
                provided in this document is accurate and true.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.accurate_info_init) } alt=""/></p>
            <p><input className="form-check-input opacity-100" type="checkbox" checked disabled/><span> I confirm that I am 18 years or older.</span>
                <br/>Initial: <img src={ URL.createObjectURL(formData.not_minor_init) } alt=""/></p>
            <div>
                <p><span>Signed Date: </span><b>{ formData.signed_date }</b></p>
            </div>


            <div>
            <h3>Client Signature</h3>
                <div className="signature-div">
                    <img src={ URL.createObjectURL(formData.signature) } alt=""/>
                </div>
            </div>
            <div className="mt-5">
                <p>
                    <h1>Mad Ink By Stripes After Care Instructions</h1>
                </p>
            </div>
            <div>
                <p><em>If you have any questions or concerns, Call or Text (719)-428-5728</em></p>
                <p>Remove saniderm 12- 15 hours after tattoo procedure. Wash immediately.
                    <br/>
                    **DO NOT LEAVE ON  LONGER THAN 24 HOURS**
                </p>
                <p>If paper towels or gauze are used to cover a larger tattoo, remove within 2 or 3 hours. Wash immediately.</p>
                <p>After bandage is removed, wash tattoo with warm water and gentle fragrance free soap.
                    <br/>
                    *Blue Dawn or Dial is recommended*
                </p>
                <p>
                    Wash tattoo 2-3 times a day and keep clean
                    <br/>
                    Gently PAT dry with a paper towel
                    <br/>
                    Apply a thin layer of ointment after drying the tattoo
                    <br/>
                    *Aquaphor or Bag Balm is recommended*
                </p>
                <p>
                    If your tattoo is looking dry throughout the day, apply another THIN layer of ointment.
                    DO NOT stay in direct sunlight or use tanning beds until the tattoo is healed. Approx 14 days.
                    After 2 weeks, use at least SPF 25 to protect tattoo from fading.
                </p>
                <p>DO NOT soak in the bathtub, hot tub, sauna, jacuzzi, or swimming pools while your tattoo is healing. Approx. 14 days</p>
                <p>YOU MUST SHOWER to keep your tattoo healthy</p>
                <p>DO NOT scratch or pick at tattoo. It could cause color loss, scarring or infection. Ink and skin flaking off and scabbing is normal.</p>
                <p>Tattoos will cause redness and swelling but if you develop a fever, rash, yellow/green discharge, or constant irritation after 7 days, call your doctor immediately.</p>
            </div>
            <div>
                <h3>Client Signature</h3>
                <p><span>Date: </span><b>{ formData.aftercare_date }</b></p>
                    <div className="signature-div">
                        <img src={ URL.createObjectURL(formData.aftercare_sig) } alt=""/>
                    </div>
            </div>
            <div className="mt-5">
                <h2>Please Type Name, Sign, and Date</h2>
                <div>
                    <label htmlFor="full_name">
                        By signing these forms I acknowledge that
                        I have read and understand all pages of this consent form.
                        I acknowledge that all information is correct. I understand that
                        tattoos are permanent and will change my appearance forever.
                        I ACKNOWLEDGE THAT WRITTEN AND VERBAL AFTERCARE WERE PROVIDED.
                    </label>
                    <p><span>Full Name: </span><b>{ formData.full_name }</b></p>
                </div>
            </div>
            <div>
                <h3>Signature</h3>
                    <div className="signature-div">
                        <img src={ URL.createObjectURL(formData.general_sig) } alt=""/>
                    </div>
            </div>
            <div>
                <p><span>Date: </span><b>{ formData.general_date }</b></p>
            </div>
            <div>
                <h3>Artist Signature</h3>
                <p><span>Date: </span><b>{ formData.artist_date }</b></p>
                    <div className="signature-div">
                        <img src={ URL.createObjectURL(formData.artist_sig) } alt=""/>
                    </div>
            </div>
            <div className="mt-5">
                <h3>FOR TATTOO ARTIST ONLY</h3>
                <div>
                    <div>
                        <p><span>Name of Artist or Representative: </span><b>{ formData.artist_name }</b></p>
                    </div>
                </div>
                <div>
                    <p><span>Signed Date: </span><b>{ formData.artist_date }</b></p>
                </div>
                <div>
                    <p><span>LOT #- EXPIRATION DATE - STERILIZATION DATE -COMPANY/BRAND</span>
                        <br/>
                        <b>{ formData.needle_info }</b>
                    </p>
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button onClick={() => handleBackButton("completedForm", "signaturePage")} className="btn btn-danger me-1">Back</button>
                    <button onClick={(e) => handleSubmit(e)} className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    )
}
