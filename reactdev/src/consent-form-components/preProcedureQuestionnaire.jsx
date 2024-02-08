import { handleRadioButtonChange, handleOptionalInputChange } from "../utils/inputChangeUtils"

export default function PreProcedureQuestionnaire({formData, setFormData, optionalData, setOptionalData, handleNextButton, handleBackButton}) {
    return (
        <div id="preProcedureQuestionnaire" >
            <h2>Pre-Prodecure Questionnaire</h2>
            <div className="">
                <label htmlFor="under_influence">Are you under the influence of drugs or alcohol?<span className="text-danger">*</span></label>
                <div>
                    <div className="form-check">
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, formData, setFormData, "Yes")} type="radio" className="form-check-input" name="under_influence" id="under_influence" />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, formData, setFormData, "No")} type="radio" className="form-check-input" name="under_influence" id="under_influence" />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <label htmlFor="pregnant_or_nursing">FEMALE ONLY: Are you pregnant or nursing?<span className="text-danger"></span></label>
                <div>
                    <div className="form-check">
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, optionalData, setOptionalData, "Yes")} type="radio" className="form-check-input" name="pregnant_or_nursing" id="yes" />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, optionalData, setOptionalData, "No")} type="radio" className="form-check-input" name="pregnant_or_nursing" id="no" />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <label htmlFor="communicable_disease">Do you have a communicable disease?<span className="text-danger">*</span></label>
                <div>
                    <div className="form-check">
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, formData, setFormData, "Yes")} type="radio" className="form-check-input" name="communicable_disease" id="yes" />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, formData, setFormData, "No")} type="radio" className="form-check-input" name="communicable_disease" id="no" />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <label htmlFor="skin_conditions">Do you have any skin conditions?<span className="text-danger">*</span></label>
                <div>
                    <div className="form-check">
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, formData, setFormData, "Yes")} type="radio" className="form-check-input" name="skin_conditions" id="yes" />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input onChange={(e) => handleRadioButtonChange(e, formData, setFormData, "No")} type="radio" className="form-check-input" name="skin_conditions" id="no" />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <label htmlFor="medical_history">Please tell us about your medical history (e.g. Are you on blood thinners?, Diabetes, Cardiovascular Disease, Epilepsy, Blood-related disease, Hemophilia ,immune compromised, etc.).</label>
                <textarea onChange={(e) => handleOptionalInputChange(e, optionalData, setOptionalData)} value={formData.medical_history} className="form-control" name="medical_history" id="medical_history" ></textarea>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleBackButton("preProcedureQuestionnaire", "clientInfo")} className="btn btn-danger me-3">Back</button>
                <button onClick={() => handleNextButton(formData, "preProcedureQuestionnaire", "acknowledgementAndWaiver")} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
