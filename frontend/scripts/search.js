let input = document.getElementById("search-bar");

function loadResults() {

    let searchKey = input.value;

    console.log(searchKey);

    let div = document.getElementById("result-area");

    // WRITE THE SEARCH

    let res = ["ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao"];

    res.forEach((el) => {
        let toAppend = document.createElement("div");

        let text = document.createElement("p");
        text.innerHTML = el;

        let text1 = document.createElement("p");
        text1.innerHTML = el;

        let text2 = document.createElement("p");
        text2.innerHTML = el;

        toAppend.append(text);
        toAppend.append(text1);
        toAppend.append(text2);

        toAppend.classList.add("result");

        div.append(toAppend);
    });

}

