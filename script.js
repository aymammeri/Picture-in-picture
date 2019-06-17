const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promp to select media stream , pass to video element, than play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        alert(error)
    }
}

// Onload
selectMediaStream();