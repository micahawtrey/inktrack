import PropTypes from "prop-types";
import { statesList } from "../utils/utils";
import { useEffect, useState } from "react";

export default function AddressInput({ props, inputId }) {
    const [address, setAddress] = useState({})
    const trigger = props.trigger
    const setValue = props.setValue

    props.register(inputId, {required: true})

    useEffect(() => {
        if (address.line_1 &&
            address.city &&
            address.state_province &&
            address.postal_zip_code) {
            setValue(
                inputId,
                `${address.line_1}, ${address.line_2 ? address.line_2 + ", " : ""}${address.city}, ${address.state_province} ${address.postal_zip_code}`
            )
            trigger(inputId)
        }
    }, [setValue, trigger, address, inputId])

    return (
        <div>
            <div className="mb-1">Address:<span className='text-danger'>*</span></div>
            {props.errors[inputId] && <span className="text-danger">Please provide your address.</span>}
            <div className="mb-3">
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-floating">
                            <input required
                                className={`form-control ${props.errors[inputId] && !address["line_1"] ? "border-danger": ""}`}
                                onChange={(e) => {
                                    setAddress({
                                        ...address,
                                        line_1: e.target.value
                                    })
                                }}
                                type="text" id="line_1" placeholder="Street address"
                            />
                            <label htmlFor="line_1">Street address</label>
                            {props.errors[inputId] && !address["line_1"] &&
                                <span className="text-danger">Please provide your street address.</span>
                            }
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating col">
                            <input
                                className="form-control"
                                onChange={(e) => {
                                    setAddress({
                                        ...address,
                                        line_2: e.target.value
                                    })
                                }}
                                type="text" id="line_2" placeholder="Street address line 2"
                            />
                            <label htmlFor="line_2">Street address line 2</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-floating">
                            <input required
                                className={`form-control ${props.errors[inputId] && !address["city"] ? "border-danger": ""}`}
                                onChange={(e) => {
                                    setAddress({
                                        ...address,
                                        city: e.target.value
                                    })
                                }}
                                type="text" id="city" placeholder="City"
                            />
                            <label htmlFor="city">City</label>
                            {props.errors[inputId] && !address["city"] &&
                                <span className="text-danger">Please provide your city name.</span>
                            }
                        </div>
                    </div>
                    <div className="col">
                        <select required
                            className={`form-select py-3 ${props.errors[inputId] && !address["state_province"] ? "border-danger": ""}`}
                            onChange={(e) => {
                                setAddress({
                                    ...address,
                                    state_province: e.target.value
                                })
                            }}
                            id="state_province"
                        >
                            <option value="">--Select your state--</option>
                            {statesList.map(state => {return(<option key={state.abbreviation} value={state.abbreviation}>{state.state}</option>)})}
                        </select>
                        {props.errors[inputId] && !address["state_province"] && <span className="text-danger">Please select your state.</span>}
                    </div>

                </div>
                <div className="form-floating">
                    <input required
                        className={`form-control ${props.errors[inputId] && !address["postal_zip_code"] ? "border-danger": ""}`}
                        onChange={(e) => {
                            setAddress({
                                ...address,
                                postal_zip_code: e.target.value
                            })
                        }}
                        type="text" id="postal_zip_code" placeholder="Postal/Zip Code"/>
                    <label htmlFor="postal_zip_code">Postal/Zip Code</label>
                    {props.errors[inputId] && !address["postal_zip_code"] && <span className="text-danger">Please provide your postal/zip code.</span>}
                </div>
            </div>
        </div>
    )
}

AddressInput.propTypes = {
    props: PropTypes.object,
    errors: PropTypes.object,
    handleInputChange: PropTypes.func,
    register: PropTypes.func,
    inputId: PropTypes.string,
    trigger: PropTypes.func,
    setValue: PropTypes.func
}
