import { useState } from "react"
import { dataURItoBlob } from "../utils/utils"


export default function IdPhotos({handleImageCapture}) {
    const [cameras, setCameras] = useState({
        frontCamera: false,
        frontPhoto: false,
        backCamera: false,
        backPhoto: false,
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

    const idPicture = (idVideo) => {
        const videoTag = document.getElementById(idVideo)
        videoTag.hidden = false

        navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(
            function(stream) {
            videoTag.srcObject = stream
            videoTag.play()
        }).catch(function(err) {
          console.log("An error occurred: " + err)
        })
    }

    const capturePicture = (video, photo, fileInput, idButton, camera, id) => {
        const videoTag = document.getElementById(video)
        const photoTag = document.getElementById(photo)
        const fileInputTag = document.getElementById(fileInput)
        const idButtonTag = document.getElementById(idButton)
        const canvas = document.getElementById("canvas")
        const context = canvas.getContext('2d')

        context.drawImage(videoTag, 0, 0, 320, 240)

        const data = canvas.toDataURL('image/png')
        photoTag.setAttribute('src', data)

        const blob = dataURItoBlob(data)

        const file = new File([blob], `${fileInputTag.id}_image.png`, {type: 'image/png' })
        handleImageCapture(file)
        // const dataTransfer = new DataTransfer()
        // dataTransfer.items.add(file)
        // fileInputTag.files = dataTransfer.files

        idButtonTag.innerHTML = `Retake ID ${id} photo`
        setCameras({
            ...cameras,
            [camera]: false
        })
        videoTag.hidden = true
        photoTag.hidden = false
    }

    return (
        <div>
            <canvas id="canvas" width="320" height="240" hidden></canvas>

            <div className="mb-3">
                <button onClick={(event) => displayCamera(event, "frontCamera", "frontVideo", "frontPhoto")} id="frontIdCameraButton" type="button" className="btn btn-outline-primary">Front of ID</button><span className="text-danger">*</span>
            </div>
            <div className="mb-3">
                <video id="frontVideo" className="form-control mb-3" width="320" height="240" hidden >Video stream not available.</video>
                {cameras.frontCamera ?
                    <button onClick={() => capturePicture("frontVideo", "frontPhoto", "frontIdFile", "frontIdCameraButton", "frontCamera", "front")} id="frontCapture" type="button" className="btn btn-outline-primary">Take photo</button>
                    : <></>
                }
                <input id="frontPhoto" onClick={(e) => {e.preventDefault()}} className="" width="320" height="240" alt="your image" type='image' hidden/>
            </div>

            <br/>

            <div className="mb-3">
                <button onClick={(event) => {displayCamera(event, "backCamera", "backVideo", "backPhoto")}} id="backIdCameraButton" type="button" className="btn btn-outline-primary">Back of ID</button><span className="text-danger">*</span>
            </div>
            <div>
                <video id="backVideo" className="form-control mb-3" width="320" height="240" hidden >Video stream not available.</video>
                {cameras.backCamera ?
                <button onClick={() => capturePicture("backVideo", "backPhoto", "backIdFile", "backIdCameraButton", "backCamera", "back")} id="backCapture" type="button" className="btn btn-outline-primary">Take photo</button>
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
                <button className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}
