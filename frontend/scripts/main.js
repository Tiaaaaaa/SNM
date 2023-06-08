let playlists = ["ciao", "ciao", "ciao", "ciao", "ciao"];

function loadMyPlayists() {

    let div = document.getElementById("main-menu");

    playlists.forEach(element => {
        let toAppend = document.createElement("div");

        toAppend.innerHTML = element;

        toAppend.classList.add("playlist");

        div.append(toAppend);
    });



}
