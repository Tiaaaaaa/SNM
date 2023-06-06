let playlists = ["ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao"];

function loadPlaylists() {
    let div = document.getElementById("playlists");

    playlists.forEach(element => {
        let toAppend = document.createElement("div");

        toAppend.innerHTML = element;

        toAppend.classList.add("tile");

        div.append(toAppend);
    });
}


function switchToTile() {
    let divList = document.getElementsByClassName("tile");
    console.log(divList);

    for (let i = 0; i < divList.length; i++) {
        const el = divList[i];

        el.classList.remove("list");
    }
}

function switchToList() {
    let divList = document.getElementsByClassName("tile");

    console.log(divList);

    for (let i = 0; i < divList.length; i++) {
        const el = divList[i];

        el.classList.add("list");

    }

}