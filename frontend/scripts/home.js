let friends = ["io", "tu", "egli", "Un nome decisamente più lungo"];

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