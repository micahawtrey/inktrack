export function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type:mimeString});
}

export const handleImageCapture = (file, data, setData, inputDataState, setInputDataState) => {
    if (file.name.startsWith("frontIdFile")) {
        setData({
            ...data,
            front_id: file
        })
        setInputDataState({
            ...inputDataState,
            front_id: true
        })
    } else if (file.name.startsWith("backIdFile")) {
        setData({
            ...data,
            back_id: file
        })
        setInputDataState({
            ...inputDataState,
            back_id: true
        })
    }
}

export const capturePicture = (videoId, photoId, fileInputId, idButtonId, camera, id, cameraState, setCameraState, dataState, setDataState, inputDataState, setInputDataState) => {
    const videoTag = document.getElementById(videoId)
    const photoTag = document.getElementById(photoId)
    const fileInputTag = document.getElementById(fileInputId)
    const idButtonTag = document.getElementById(idButtonId)
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext('2d')

    context.drawImage(videoTag, 0, 0, 320, 240)

    const data = canvas.toDataURL('image/png')
    photoTag.setAttribute('src', data)

    const blob = dataURItoBlob(data)

    const file = new File([blob], `${fileInputTag.id}_image.png`, {type: 'image/png' })
    handleImageCapture(file, dataState, setDataState, inputDataState, setInputDataState)
    // const dataTransfer = new DataTransfer()
    // dataTransfer.items.add(file)
    // fileInputTag.files = dataTransfer.files

    idButtonTag.innerHTML = `Retake ID ${id} photo`
    setCameraState({
        ...cameraState,
        [camera]: false
    })
    videoTag.hidden = true
    photoTag.hidden = false
}

export const idPicture = (idVideo) => {
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
