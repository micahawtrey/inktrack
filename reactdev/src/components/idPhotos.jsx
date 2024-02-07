import { useState } from "react"
import { capturePicture, idPicture } from "../utils/WebcamManagement"

export default function IdPhotos({formData, setFormData, handleValidation}) {
    const [cameras, setCameras] = useState({
        frontCamera: false,
        frontPhoto: false,
        backCamera: false,
        backPhoto: false,
        })

    const [inputData, setInputData] = useState({
        front_id: false,
        back_id: false
        })

    const displayCamera = (event, camera, video, photo) => {
        event.preventDefault()

        const photoTag = document.getElementById(photo)
        photoTag.hidden = true

        setCameras({
            ...cameras,
            [camera]: true,
        })

        idPicture(video)
    }

    return (
        <div>
            <canvas id="canvas" width="320" height="240" hidden></canvas>

            <div className="mb-3" id="front_id">
                <button onClick={(event) => displayCamera(event, "frontCamera", "frontVideo", "frontPhoto")} id="frontIdCameraButton" type="button" className="btn btn-outline-primary">Front of ID</button><span className="text-danger">*</span>
            </div>
            <div className="mb-3">
                <video id="frontVideo" className="form-control mb-3" width="320" height="240" hidden >Video stream not available.</video>
                {cameras.frontCamera ?
                    <button onClick={() => capturePicture("frontVideo", "frontPhoto", "frontIdFile", "frontIdCameraButton", "frontCamera", "front", cameras, setCameras, formData, setFormData, inputData, setInputData)} id="frontCapture" type="button" className="btn btn-outline-primary">Take photo</button>
                    : <></>
                }
                <input id="frontPhoto" onClick={(e) => {e.preventDefault()}} className="" width="320" height="240" alt="your image" type='image' hidden/>
            </div>

            <br/>

            <div className="mb-3" id="back_id">
                <button onClick={(event) => {displayCamera(event, "backCamera", "backVideo", "backPhoto")}} id="backIdCameraButton" type="button" className="btn btn-outline-primary">Back of ID</button><span className="text-danger">*</span>
            </div>
            <div>
                <video id="backVideo" className="form-control mb-3" width="320" height="240" hidden >Video stream not available.</video>
                {cameras.backCamera ?
                <button onClick={() => capturePicture("backVideo", "backPhoto", "backIdFile", "backIdCameraButton", "backCamera", "back", cameras, setCameras, formData, setFormData, inputData, setInputData)} id="backCapture" type="button" className="btn btn-outline-primary">Take photo</button>
                : <></>}
                <input id="backPhoto" onClick={(e) => {e.preventDefault()}}  alt="your image" type='image' hidden/>
            </div>

            <br/>

            <div className="mb-3">
                <span className="text-danger">*</span>
                <input type="file" name="front_id" id="frontIdFile" className="id_file" required=""/>
            </div>
            <div className="mb-3">
                <span className="text-danger">*</span>
                <input type="file" name="back_id" id="backIdFile" className="id_file" required=""/>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={() => handleValidation(inputData, "idPhotos", "clientInfo")} className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
