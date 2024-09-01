function copyText() {
    var text = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(text).then(function() {
        document.getElementById("message").style.display = "block";
        setTimeout(function() {
            document.getElementById("message").style.display = "none";
        }, 2000);
    });
}
