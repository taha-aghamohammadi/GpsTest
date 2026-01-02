window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(
    (p) => {
      console.log(p);
      document.getElementById("result").innerText =
        ">>>" + p.coords.latitude + " , " + p.coords.longitude;
    },
    (e) => {
      alert("showing Gps Enable");
      document.getElementById("result").innerText = "Failed";
      showGpsEnableInstructions();
    }
  );
});
