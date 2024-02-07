import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { statesList } from "../utils/utils"
import { handleAlphaInputChange, handleInputChange, handlePhoneNumberChange, handleOptionalInputChange } from "../utils/inputChangeUtils"

export default function ClientInfo({ formData, setFormData, handleValidation, handleBackButton }) {
    const [inputErrors, setInputErrors] = useState({
        first_name: false,
        last_name: false,
        preferred_pronouns: false,
        age: false,
        birth_date: false,
        phone_number: false,
        email: false,
        address_line_1: false,
        city: false,
        state_province: false,
        postal_zip_code: false,
        tattoo_description: false,
        tattoo_placement: false,
        connection: false,
    })

    return (
        <div id="clientInfo" >
            <h2>Client Information</h2>
            <div className=" mb-3">
                <div className="">
                    <div className="row row-cols-2">
                        <div className="col">
                            <div className="form-floating">
                                <input onChange={(e) => handleAlphaInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.first_name} type="text" name="first_name" maxLength="30" placeholder="" className="form-control" id="first_name" />
                                <label htmlFor="first_name">First name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating">
                                <input onChange={(e) => handleAlphaInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.last_name} type="text" name="last_name" maxLength="30" placeholder="" className="form-control" id="last_name" />
                                <label htmlFor="last_name">Last name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3 form-floating">
                <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.email} type="email" className="form-control w-50" name="email" id="email" placeholder="" />
                <label htmlFor="email">Email address<span className='text-danger'>*</span></label>
            </div>
            <div className="mb-3 form-floating">
                <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.age} type="number" className="form-control w-25" id="age" name="age" placeholder="" />
                <label htmlFor="age">Age<span className="text-danger">*</span></label>
            </div>
            <div className="mb-3">
                <label htmlFor="phone_number">Phone Number:<span className='text-danger'>*</span></label>
                <PhoneInput country="us" onChange={() => handlePhoneNumberChange("phone_number", formData, setFormData, inputErrors, setInputErrors)} value={formData.phone_number} inputProps={{name: "phone_number", id: "phone_number", }} />
            </div>
            <div className="mb-3">
                <label htmlFor="preferred_pronouns" className="form-label mb-1">Preferred pronouns:<span className='text-danger'>*</span></label>
                <select onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.preferred_pronouns} id="preferred_pronouns" name="preferred_pronouns" className="form-select w-50" >
                    <option defaultValue="">--Select your pronouns--</option>
                    <option value="he/him">he/him</option>
                    <option value="she/her">she/her</option>
                    <option value="they/them">they/them</option>
                    <option value="other">other</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor='birth_date' className="mb-1">Date of birth:<span className='text-danger'>*</span></label>
                <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.birth_date} type="date" className="form-control w-50" name="birth_date" id="birth_date" />
            </div>

            <div className="mb-1">Address:<span className='text-danger'>*</span></div>
            <div className="row mb-3">
                <div className="col">
                    <div className="form-floating">
                        <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.address_line_1} type="text" className="form-control mb-2" name="address_line_1" id="address_line_1" placeholder="Street address" />
                        <label htmlFor="address_line_1">Street address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.city} type="text" className="form-control mb-2" name="city" id="city" placeholder="City" />
                        <label htmlFor="city">City</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input onChange={handleOptionalInputChange} value={formData.address_line_2} type="text" className="form-control mb-2" name="address_line_2" id="address_line_2" placeholder="Street address line 2"/>
                        <label htmlFor="address_line_2">Street address line 2</label>
                    </div>
                    <div className="">
                        <select onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.state_province} className="form-select py-3" name="state_province" id="state_province" >
                            <option defaultValue="">--Select your state--</option>
                            {statesList.map(state => {return(<option key={state.abbreviation} value={state.abbreviation}>{state.state}</option>)})}
                        </select>
                    </div>
                </div>
                <div>
                    <div className="form-floating">
                        <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.postal_zip_code} type="text" className="form-control mb-2" name="postal_zip_code" id="postal_zip_code" placeholder="Postal/Zip Code" />
                        <label htmlFor="postal_zip_code">Postal/Zip Code</label>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.tattoo_description} type="text" className="form-control" name="tattoo_description" id="tattoo_description" placeholder="Tattoo description" />
                    <label htmlFor="tattoo_description">Brief Tattoo Description<span className="text-danger">*</span></label>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.tattoo_placement} type="text" className="form-control" name="tattoo_placement" id="tattoo_placement" placeholder="Tattoo placement" />
                    <label htmlFor="tattoo_placement">Tattoo placement<span className="text-danger">*</span></label>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input onChange={(e) => handleInputChange(e, formData, setFormData, inputErrors, setInputErrors)} value={formData.connection} type="text" className="form-control" name="connection" id="connection" placeholder="How did you hear about us?" />
                    <label htmlFor="connection">How did you hear about us?<span className="text-danger">*</span></label>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleBackButton("clientInfo", "idPhotos")} className="btn btn-danger me-3">Back</button>
                <button onClick={() => handleValidation(inputErrors, "clientInfo", "preProcedureQuestionnaire")} className="btn btn-primary">Next</button>
            </div>
        </div>

    )
}
