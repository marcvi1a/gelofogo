const startBtn = document.getElementById("start-btn");
const camera = document.getElementById("camera");
const startScreen = document.getElementById("start-screen");

startBtn.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" }
    });

    camera.srcObject = stream;

    // Remove overlay but DO NOT resize camera
    startScreen.style.display = "none";

  } catch (err) {
    alert("Camera permission denied or unavailable.");
    console.error(err);
  }
});
