import { useState, useRef } from "react"
import { capturePicture, idPicture, handleImageCapture } from "../../utils/WebcamManagement"
import { Controller } from "react-hook-form"

export default function IdPhotos({ props }) {
    const [cameras, setCameras] = useState({
        frontCamera: false,
        frontPhoto: false,
        backCamera: false,
        backPhoto: false,
        })

    const frontCamera = useRef(null)
    const frontVideo = useRef(null)
    const frontPhoto = useRef(null)
    const backCamera = useRef(null)
    const backVideo = useRef(null)
    const backPhoto = useRef(null)

    const displayCamera = (event, camera, video) => {
        event.preventDefault()
        setCameras({
            ...cameras,
            [camera]: true,
        })
        idPicture(video)
    }

    return (
        <form>
            <canvas id="canvas" width="320" height="240" hidden></canvas>

            <div className="mb-3">
                {props.errors.front_id && <><span className="text-danger">
                    Please take a picture of the front of your ID.</span><br/></>}
                <button
                    onClick={(event) => displayCamera(event, "frontCamera", "frontVideo", "frontPhoto")}
                    id="frontIdCameraButton" type="button"
                    className="btn btn-outline-primary" ref={frontCamera}>
                        Front of ID
                </button>
                <span className="text-danger">*</span>
            </div>
            <div className="mb-3">
                <video
                    id="frontVideo" className="form-control mb-3"
                    width="320" height="240" ref={frontVideo} hidden>
                        Video stream not available.
                </video>
                {cameras.frontCamera ?
                    <button
                        onClick={(event) => {
                            event.preventDefault()
                            capturePicture(frontVideo, frontPhoto, frontCamera, "frontCamera", cameras, setCameras)}}
                        id="frontCapture" type="button"
                        className="btn btn-outline-primary">
                            Take photo
                    </button>
                    : <></>
                }
                <Controller
                    control={props.control}
                    name="front_id"
                    rules={{required: true}}
                    render={({ field: { onChange } }) => (
                        <input
                            id="front_id" ref={frontPhoto}
                            onClick={(e) => {
                                e.preventDefault()
                                const file = handleImageCapture(frontPhoto, "front_id")
                                onChange(file)
                                props.handleInputChange(e)
                            }}
                            width="320" height="240" alt="The front of your ID"
                            type='image' hidden/>
                    )}
                />
            </div>
            <br/>
            <div className="mb-3" id="back_id">
                {props.errors.back_id &&
                    <><span className="text-danger">
                        Please take a picture of the back of your ID.
                    </span><br/></>}
                <button
                    onClick={(event) => {displayCamera(event, "backCamera", "backVideo", "backPhoto")}}
                    id="backIdCameraButton" type="button"
                    className="btn btn-outline-primary" ref={backCamera}>
                        Back of ID
                </button>
                <span className="text-danger">*</span>
            </div>
            <div>
                <video
                    id="backVideo" className="form-control mb-3"
                    width="320" height="240" ref={backVideo} hidden>
                        Video stream not available.
                </video>
                {cameras.backCamera ?
                <button
                    onClick={(event) => {
                        event.preventDefault()
                        capturePicture(backVideo, backPhoto, backCamera, "backCamera", cameras, setCameras)}
                    }
                    id="backCapture" type="button"
                    className="btn btn-outline-primary">
                        Take photo
                </button>
                    : <></>
                }
                <Controller
                    control={props.control}
                    name="back_id"
                    rules={{required: true}}
                    render={({ field: { onChange } }) => (
                        <input
                            id="back_id" ref={backPhoto}
                            onClick={(e) => {
                                e.preventDefault()
                                const file = handleImageCapture(backPhoto, "back_id")
                                onChange(file)
                                props.handleInputChange(e)
                            }}
                            width="320" height="240" alt="The back of your ID"
                            type='image' hidden/>
                    )}
                />
            </div>
            <br/>
            <div className="d-flex justify-content-end mt-3">
                <button onClick={(e) => {
                    e.preventDefault()
                    props.handleNextButton("idPhotos", "clientInfo")}}
                    className="btn btn-primary">Next</button>
            </div>
        </form>
    )
}
