function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    // console.log(timeString)
    document.getElementById("time").innerText = timeString;
}
setInterval(updateTime, 1000); // Update every second