function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-290px";
    } else {
        sidebar.style.left = "0px";
    }
}