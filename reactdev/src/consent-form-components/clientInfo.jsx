import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { statesList } from "../utils/utils"
import { handleAlphaInputChange, handlePhoneNumberChange, handleOptionalInputChange } from "../utils/inputChangeUtils"
import { useRef } from "react"
import { useForm } from "react-hook-form"

export default function ClientInfo({ register, errors, handleInputChange, handleNextButton, handleBackButton }) {
    return (
        <div id="clientInfo" >
            <h2>Client Information</h2>
            <div className=" mb-3">
                <div className="">
                    <div className="row row-cols-2">
                        <div className="col">
                            <div className="form-floating">
                                <input {...register("first_name", {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: "Please only type letters."
                                    }
                                    })}
                                    className={`form-control ${errors.first_name ? "border-danger": ""}`}
                                    onBlur={(e) => handleInputChange(e)}
                                    type="text" placeholder="" id="first_name"/>
                                <label htmlFor="first_name">First name<span className="text-danger">*</span></label>
                                {errors.first_name && <span className="text-danger">Please provide your first name (letters and spaces only)</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating">
                                <input {...register("last_name", {
                                    required: true,
                                    pattern: {
                                        value: /[a-zA-Z\s]/,
                                        message: "Please only type letters."
                                    }
                                    })}
                                    className={`form-control ${errors.last_name ? "border-danger": ""}`}
                                    onBlur={(e) => handleInputChange(e)}
                                    type="text"placeholder="" id="last_name"/>
                                <label htmlFor="last_name">Last name<span className="text-danger">*</span></label>
                                {errors.last_name && <span className="text-danger">Please provide your last name (letters and spaces only)</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3 form-floating">
                <input {...register("email", {required: true})}
                    className={`form-control w-50 ${errors.email ? "border-danger": ""}`}
                    onBlur={(e) => handleInputChange(e)}
                    type="email" id="email" placeholder=""/>
                <label htmlFor="email">Email address<span className='text-danger'>*</span></label>
                {errors.email && <span className="text-danger">Please provide your email address.</span>}
            </div>
            <div className="mb-3 form-floating">
                <input {...register("age", {required: true})}
                    className={`form-control w-25 ${errors.age ? "border-danger": ""}`}
                    onBlur={(e) => handleInputChange(e)}
                    type="number" id="age" placeholder="" />
                <label htmlFor="age">Age<span className="text-danger">*</span></label>
                {errors.age && <span className="text-danger">Please provide your age.</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="phone_number">Phone Number:<span className='text-danger'>*</span></label>
                <PhoneInput {...register("phone_number", {required: true})}
                    country="us" inputProps={{id: "phone_number", }} />
                    {errors.phone_number && <span className="text-danger">Please provide a valid phone number.</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="preferred_pronouns" className="form-label mb-1">Preferred pronouns:<span className='text-danger'>*</span></label>
                <select {...register("preferred_pronouns", {required: true})}
                    className={`form-select w-50 ${errors.preferred_pronouns ? "border-danger": ""}`}
                    onBlur={(e) => handleInputChange(e)}
                    id="preferred_pronouns">
                    <option value="">--Select your pronouns--</option>
                    <option value="he/him">he/him</option>
                    <option value="she/her">she/her</option>
                    <option value="they/them">they/them</option>
                    <option value="other">other</option>
                </select>
                {errors.preferred_pronouns && <span className="text-danger">Please select your preferred pronouns.</span>}
            </div>
            <div className="mb-3">
                <label htmlFor='birth_date' className="mb-1">Date of birth:<span className='text-danger'>*</span></label>
                <input {...register("birth_date", { required: true })}
                    className={`form-control w-50 ${errors.birth_date ? "border-danger": ""}`}
                    onBlur={(e) => handleInputChange(e)}
                    type="date" id="birth_date" placeholder=""/>
                    {errors.birth_date && <span className="text-danger">Please provide your date of birth.</span>}
            </div>

            <div className="mb-1">Address:<span className='text-danger'>*</span></div>
            <div className="row mb-3">
                <div className="col">
                    <div className="form-floating mb-2">
                            <input {...register("address_line_1", { required: true })}
                            className={`form-control ${errors.address_line_1 ? "border-danger": ""}`}
                            onBlur={(e) => handleInputChange(e)}
                            type="text" id="address_line_1" placeholder="Street address" />
                        <label htmlFor="address_line_1">Street address</label>
                        {errors.address_line_1 && <span className="text-danger">Please provide your street address.</span>}
                    </div>
                    <div className="form-floating mb-2">
                        <input {...register("city", { required: true })}
                            className={`form-control ${errors.city ? "border-danger": ""}`}
                            onBlur={(e) => handleInputChange(e)}
                            type="text" id="city" placeholder="City"/>
                        <label htmlFor="city">City</label>
                        {errors.city && <span className="text-danger">Please provide your city name.</span>}
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-2">
                        <input {...register("address_line_2")}
                            className={`form-control ${errors.address_line_2 ? "border-danger": ""}`}
                            onBlur={(e) => handleInputChange(e)}
                            type="text" id="address_line_2" placeholder="Street address line 2" />
                        <label htmlFor="address_line_2">Street address line 2</label>
                    </div>
                    <div className="">
                        <select {...register("state_province", {required: true})}
                            className={`form-select py-3 ${errors.state_province ? "border-danger": ""}`}
                            onBlur={(e) => handleInputChange(e)}
                            id="state_province">
                            <option value="">--Select your state--</option>
                            {statesList.map(state => {return(<option key={state.abbreviation} value={state.abbreviation}>{state.state}</option>)})}
                        </select>
                        {errors.state_province && <span className="text-danger">Please select your state.</span>}
                    </div>
                </div>
                <div>
                    <div className="form-floating mb-2">
                        <input {...register("postal_zip_code", { required: true })}
                            className={`form-control ${errors.postal_zip_code ? "border-danger": ""}`}
                            onBlur={(e) => handleInputChange(e)}
                            type="text" id="postal_zip_code" placeholder="Postal/Zip Code"/>
                        <label htmlFor="postal_zip_code">Postal/Zip Code</label>
                        {errors.postal_zip_code && <span className="text-danger">Please provide your postal/zip code.</span>}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input {...register("tattoo_description", { required: true })}
                        className={`form-control ${errors.tattoo_description ? "border-danger": ""}`}
                        onBlur={(e) => handleInputChange(e)}
                        type="text" id="tattoo_description" placeholder="Tattoo description"/>
                    <label htmlFor="tattoo_description">Brief Tattoo Description<span className="text-danger">*</span></label>
                    {errors.tattoo_description && <span className="text-danger">Please describe your tattoo.</span>}
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input {...register("tattoo_placement", { required: true })}
                        className={`form-control ${errors.tattoo_placement ? "border-danger": ""}`}
                        onBlur={(e) => handleInputChange(e)}
                        type="text" id="tattoo_placement" placeholder="Tattoo placement" />
                    <label htmlFor="tattoo_placement">Tattoo placement<span className="text-danger">*</span></label>
                    {errors.tattoo_placement && <span className="text-danger">Please describe your tattoo placement.</span>}
                </div>
            </div>
            <div className="mb-3">
                <div className="form-floating">
                    <input {...register("connection", { required: true })}
                        className={`form-control ${errors.connection ? "border-danger": ""}`}
                        onBlur={(e) => handleInputChange(e)}
                        type="text" id="connection" placeholder="How did you hear about us?" />
                    <label htmlFor="connection">How did you hear about us?<span className="text-danger">*</span></label>
                    {errors.connection && <span className="text-danger">Please explain how you heard about us.</span>}
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleBackButton("clientInfo", "idPhotos")} className="btn btn-danger me-3">Back</button>
                <button onClick={(event) => {
                    event.preventDefault();
                    handleNextButton("clientInfo", "preProcedureQuestionnaire");
                    }} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
