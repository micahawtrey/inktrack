
export default function SignaturePage() {
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
                        <input type="text" className="form-control w-50" value="" name="full_name" id="full_name" placeholder="Full name" />
                        <label htmlFor="full_name">Full name<span ></span></label>
                    </div>
                </div>

            <h4>Signature<span className="text-danger">*</span></h4>
            <div className="mb-3">
                {/* <div className="signature-div">
                    {{ form.general_sig }}
                </div> */}
            </div>

            <h5>Date<span className="text-danger">*</span></h5>
            <div className="mb-3">
                <input type="date" className="form-control w-50" value="" name="general_date" id="general_date" />
            </div>

            <h4>Artist Signature<span className="text-danger">*</span></h4>
            <div className="mb-3">
                {/* <div className="signature-div">
                    {{ form.artist_sig }}
                </div> */}
            </div>

            <div className="mb-3">
                <h5>Date<span className="text-danger">*</span></h5>
                <div className="">
                    <input type="date" className="form-control w-50" value="" name="artist_date_signed" id="artist_date_signed" />
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
                <input type="text" className="form-control w-50 mb-3" value="" name="artist_name" id="artist_name" />
            </div>

            <div className="">
                <label htmlFor='artist_date'>Signed Date</label>
                <input type="date" className="form-control w-50 mb-3" value="" name="artist_date" id="artist_date"  />
            </div>

            <div className="">
                <p>LOT #- EXPIRATION DATE - STERILIZATION DATE -COMPANY/BRAND</p>
                <textarea name="needle_info" id="needle_info" className="form-control"></textarea>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-danger me-3">Back</button>
                <button className="btn btn-success">Submit</button>
            </div>
        </div>
    )
}
