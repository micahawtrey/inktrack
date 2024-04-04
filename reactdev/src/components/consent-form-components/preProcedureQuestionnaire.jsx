export default function PreProcedureQuestionnaire({ props }) {
    return (
        <div id="preProcedureQuestionnaire" >
            <h2>Pre-Prodecure Questionnaire</h2>
            <div>
                <label htmlFor="under_influence">Are you under the influence of drugs or alcohol?<span className="text-danger">*</span></label>
                {props.errors.under_influence && <span className="text-danger"> Please select an answer.</span>}
                <div>
                    <div className="form-check">
                        <div>
                            <input {...props.register("under_influence", {required: true})}
                                onBlur={(e) => {props.handleInputChange(e)}}
                                type="radio" className="form-check-input" value="Yes" id="under_influence" />
                            <label htmlFor="under_influence">Yes</label>
                        </div>
                        <div>
                            <input {...props.register("under_influence", {required: true})}
                                onBlur={(e) => {props.handleInputChange(e)}}
                                type="radio" className="form-check-input" value="No" id="under_influence" />
                            <label htmlFor="under_influence">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="pregnant_or_nursing">FEMALE ONLY: Are you pregnant or nursing?<span className="text-danger"></span></label>
                {props.errors.pregnant_or_nursing && <span className="text-danger"> Please select an answer.</span>}
                <div>
                    <div className="form-check">
                        <div>
                            <input {...props.register("pregnant_or_nursing")}
                                type="radio" className="form-check-input" value="Yes" id="pregnant_or_nursing" />
                            <label htmlFor="pregnant_or_nursing">Yes</label>
                        </div>
                        <div>
                            <input {...props.register("pregnant_or_nursing")}
                                type="radio" className="form-check-input" value="No" id="pregnant_or_nursing" />
                            <label htmlFor="pregnant_or_nursing">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="communicable_disease">Do you have a communicable disease?<span className="text-danger">*</span></label>
                {props.errors.communicable_disease && <span className="text-danger"> Please select an answer.</span>}
                <div>
                    <div className="form-check">
                        <div>
                            <input {...props.register("communicable_disease", {required: true})}
                                onBlur={(e) => {props.handleInputChange(e)}}
                                type="radio" className="form-check-input" value="Yes" id="communicable_disease" />
                            <label htmlFor="communicable_disease">Yes</label>
                        </div>
                        <div>
                            <input {...props.register("communicable_disease", {required: true})}
                                onBlur={(e) => {props.handleInputChange(e)}}
                                type="radio" className="form-check-input" value="No" id="communicable_disease" />
                            <label htmlFor="communicable_disease">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="skin_conditions">Do you have any skin conditions?<span className="text-danger">*</span></label>
                {props.errors.skin_conditions && <span className="text-danger"> Please select an answer.</span>}
                <div>
                    <div className="form-check">
                        <div>
                            <input {...props.register("skin_conditions", {required: true})}
                                onBlur={(e) => {props.handleInputChange(e)}}
                                type="radio" className="form-check-input" value="Yes" id="skin_conditions"/>
                            <label htmlFor="skin_conditions">Yes</label>
                        </div>
                        <div>
                            <input {...props.register("skin_conditions", {required: true})}
                                onBlur={(e) => {props.handleInputChange(e)}}
                                type="radio" className="form-check-input" value="No" id="skin_conditions"/>
                                <label htmlFor="skin_conditions">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="medical_history">Please tell us about your medical history
                    (e.g. Are you on blood thinners?, Diabetes, Cardiovascular Disease, Epilepsy,
                    Blood-related disease, Hemophilia ,immune compromised, etc.).</label>
                <textarea {...props.register("medical_history")}
                    className="form-control" id="medical_history" ></textarea>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={(e) => {
                    e.preventDefault()
                    props.handleBackButton("preProcedureQuestionnaire", "acknowledgementAndWaiver")}} className="btn btn-danger me-3">Back</button>
                <button onClick={(event) => {
                    event.preventDefault();
                    props.handleNextButton("preProcedureQuestionnaire", "acknowledgementAndWaiver");
                    }} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
