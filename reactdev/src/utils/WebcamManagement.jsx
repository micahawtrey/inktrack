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

export const handleImageCapture = (imageRef, fileInputId) => {
    const blob = dataURItoBlob(imageRef.current.src)
    const file = new File([blob], `${fileInputId}_image.png`, {type: 'image/png' })
    return file
}

export const capturePicture = (videoRef, photoRef, idButtonRef, camera, cameraState, setCameraState) => {
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext('2d')

    context.drawImage(videoRef.current, 0, 0, 320, 240)
    const data = canvas.toDataURL('image/png')
    photoRef.current.setAttribute('src', data)

    idButtonRef.current.innerHTML = `Retake ID photo`
    videoRef.current.hidden = true
    photoRef.current.hidden = false
    setCameraState({
        ...cameraState,
        [camera]: false
    })
    photoRef.current.click()
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
