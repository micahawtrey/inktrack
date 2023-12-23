(function() {
    // The width and height of the captured photo. We will set the
    // width to the value defined here, but the height will be
    // calculated based on the aspect ratio of the input stream.

    var width = 320;    // We will scale the photo width to this
    var height = 0;     // This will be computed based on the input stream

    // |streaming| indicates whether or not we're currently streaming
    // video from the camera. Obviously, we start at false.

    var streaming = false;

    // The various HTML elements we need to configure or control. These
    // will be set by the startup() function.

    var canvas = null;
    var frontphoto = null;
    var formsrc = null;
    var frontbutton = null;
    var frontcamera = null;
    var frontIdbutton = null;
    var backcamera = null;
    var backIdbutton = null;
    var backphoto = null;
    var backbutton = null;
    var frontFile = null;
    var backFile = null;

    function startup() {
      frontvideo = document.getElementById('frontvideo');
      backvideo = document.getElementById('backvideo');
      canvas = document.getElementById('canvas');
      frontphoto = document.getElementById('frontphoto');
      formsrc = document.getElementById('webimg');
      frontbutton = document.getElementById('frontbutton');
      frontcamera = document.getElementById('frontcamera');
      frontIdbutton = document.getElementById('frontId');
      backcamera = document.getElementById('backcamera');
      backIdbutton = document.getElementById('backId');
      backphoto = document.getElementById('backphoto');
      backbutton = document.getElementById('backbutton');
      frontFile = document.getElementById('frontfile');
      backFile = document.getElementById('backfile');

      frontIdbutton.addEventListener('click', function(ev){
        displaycamera(frontcamera, frontphoto);
        idpicture(frontvideo);
        }, false);

      backIdbutton.addEventListener('click', function(ev){
        displaycamera(backcamera, backphoto);
        idpicture(backvideo);
        }, false);

      frontvideo.addEventListener('canplay', function(ev){
        if (!streaming) {
          width = 320
          height = frontvideo.videoHeight / (frontvideo.videoWidth/width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4/3);
          }

          frontvideo.setAttribute('width', width);
          frontvideo.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);

      backvideo.addEventListener('canplay', function(ev){
        if (!streaming) {
          width = 320
          height = backvideo.videoHeight / (backvideo.videoWidth/width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4/3);
          }

          backvideo.setAttribute('width', width);
          backvideo.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);

      frontbutton.addEventListener('click', function(ev){
        takepicture(frontvideo, frontphoto, frontFile, frontIdbutton, frontcamera);
        ev.preventDefault();
      }, false);

      backbutton.addEventListener('click', function(ev){
        takepicture(frontvideo, backphoto, backFile, backIdbutton, backcamera);
        ev.preventDefault();
      }, false);

      // clearphoto();
    }

    function displaycamera(camera, photo) {
      camera.style.display = 'block';
      photo.style.display = 'block';
    }

    function idpicture(idvideo) {
      navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(function(stream) {
        idvideo.srcObject = stream;
        idvideo.play();
      })
      .catch(function(err) {
        console.log("An error occurred: " + err);
      });
    }

    function postCanvasToFile() {
      // Convert canvas image to Base64
      var img = snap.toDataURL();
      // Convert Base64 image to binary
      var file = dataURItoBlob(img);
      var data = new FormData(document.forms[0]);
      data.append('media[]', file, 'elfie.png');
      }

    function dataURItoBlob(dataURI) {
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
    // Fill the photo with an indication that none has been
    // captured.

    function clearphoto(photo) {
      var context = canvas.getContext('2d');
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);

      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    }

    // Capture a photo by fetching the current contents of the video
    // and drawing it into a canvas, then converting that to a PNG
    // format data URL. By drawing it on an offscreen canvas and then
    // drawing that to the screen, we can change its size and/or apply
    // other changes before drawing it.

    function takepicture(video, photo, fileInput, idbutton, camera) {
      var context = canvas.getContext('2d');
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
        formsrc.setAttribute('value', data);

        var blob = dataURItoBlob(data)

        var file = new File([blob], `${photo}_image.png`, {type: 'image/png' });
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;

        idbutton.innerHTML = "Retake ID photo";
        camera.style.display = "none";
        streaming = false;
      }
      else {
        clearphoto(photo);
      }
    }

    // Set up our event listener to run the startup process
    // once loading is complete.
    window.addEventListener('load', startup, false);
  })();
