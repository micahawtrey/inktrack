
export default function AcknowledgementAndWaiver() {
    return (
        <div id="acknowledgementAndWaiver" >
            <h2>Acknowledgment and Waiver</h2>
            <h4>Please check the box and initial under each statement.</h4>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="permanent" id="permanent" />
                <label htmlFor="permanent" className="form-check-label">I understand that this procedure is a permanent change to my skin and body.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {% render_field form.permanent_init %}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="social_media_perm" id="social_media_perm" />
                <label htmlFor="social_media_perm">I allow my tattoo to be photographed and be used for Mad Ink by Stripes portfolio. Pictures may be posted on Facebook, instagram, and studio website.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.social_media_perm_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="refund" id="refund" />
                <label htmlFor="refund">I acknowledge that Mad Ink by Stripes does not offer refunds or free touch ups after 3 months. Hands, fingers, feet, and micro tattoos do not get free touch ups at any time.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.refund_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="allergen_disclosure" id="allergen_disclosure" />
                <label htmlFor="input_allergen_disclosure">I agree that the studio does not have a way of identifying if I am allergic to the elements or ingredients that will be used for my tattoo. If I am allergic to anything I will let my artist know. That includes pigment, dyes, soaps, disinfectant ,latex, metal, and food allergies.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.allergen_disclosure_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="aftercare" id="aftercare" />
                <label htmlFor="input_aftercare">I understand that I need to take care of the tattoo by following the written and verbal aftercare provided.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.aftercare_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="infection" id="infection" />
                <label htmlFor="input_infection">I understand that I might get an infection if I don't follow the instructions given to me in regards of taking care of my tattoo. If I have had issues healing before, I will tell my artist before the session.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.infection_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="compensation" id="compensation" />
                <label htmlFor="input_compensation">I agree to compensate Mad Ink by Stripes for the services provided today by paying the agreed upon price for the session.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.compensation_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="allergen_risk" id="allergen_risk" />
                <label htmlFor="input_allergen_risk">I acknowledge it is not reasonably possible for an employee of Mad Ink by Stripes to determine whether I have an allergic reaction to the pigments or processes used in my tattoo and I agreed to accept the risk that such a reaction is possible. I will search medical attention if needed.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.allergen_risk_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="accurate_info" id="accurate_info" />
                <label htmlFor="input_accurate_info">I confirm that the information I provided in this document is accurate and true.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.accurate_info_init }}
            </div> */}

            <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" name="not_minor" id="not_minor" />
                <label htmlFor="input_not_minor">I confirm that I am 18 years or older.</label>
            </div>
            <div className="form-group">Initial:<span className="text-danger">*</span></div>
            {/* <div className="init-div">
                {{ form.not_minor_init }}
            </div> */}

            <div className="form-group">
                <h4>Client Signature<span className="text-danger">*</span></h4>
            </div>
            <div className='form-group'>
                {/* <div className="signature-div">
                        {{ form.signature }}
                </div> */}
            </div>
            <div className="form-group mb-3">
                <h4>Signed Date<span className="text-danger">*</span></h4>
                <div className="form-group">
                    <input type="date" className="form-control w-50" value="" name="signed_date" id="signed_date" />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-danger me-3">Back</button>
                <button className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
