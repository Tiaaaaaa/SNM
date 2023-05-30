addEventListener("keypress", (e) => {
    if (e.key == "Enter") {

        if (document.getElementById("acceptance").checked && document.getElementById("password").value.length >= 8) {
            document.getElementById("form").submit();
        } else {
            alert("accetta fra");
        }
    }
});