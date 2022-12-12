function show() {
    const y = document.getElementById("showme");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }

}
function hide() {
    const x = document.getElementById("hideme");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}