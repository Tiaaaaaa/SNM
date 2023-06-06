let friends = ["io", "tu", "egli", "Un nome decisamente più lungo", "unnomemediounito"];

function loadFriends() {
    let div = document.getElementById("friends");
    let link = "https://mymodernmet.com/wp/wp-content/uploads/2018/10/Mou-Aysha-portrait-photography-3.jpg";

    friends.forEach(name => {
        toAppend = document.createElement("div");

        img = document.createElement("img");
        img.src = link;

        toAppend.append(img);

        text = document.createElement("p");
        text.innerHTML = name;

        toAppend.append(text);

        toAppend.classList.add("friend-tile");
        toAppend.classList.add("body-text-style");

        div.append(toAppend);
    })
}

function loadFollowedActivity() {

    let div = document.getElementById("center");

    friends.forEach(name => {
        toAppend = document.createElement("div");

        toAppend.classList.add("tile");

        toAppend.innerHTML = name;

        div.append(toAppend);

    });

    for (let i = 0; i < 12; i++) {
        toAppend = document.createElement("div");

        toAppend.classList.add("tile");

        toAppend.innerHTML = "name";

        div.append(toAppend);

    }

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