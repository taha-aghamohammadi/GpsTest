window.addEventListener('load', () => {
    console.log("Waiting 1 second before requesting location...");
    setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
            (p) => {
                document.getElementById("result").innerText = ">>> " + p.coords.latitude + " , " + p.coords.longitude;
            },
            (e) => {
                document.getElementById("result").innerText = "Failed";
                alert("Please enable GPS!!");
                showGpsEnableInstructions();
            }
        );
    }, 1000); // 2000 milliseconds = 2 seconds
});
