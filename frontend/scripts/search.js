


function loadResults() {

    let searchKey = document.getElementById("search-bar").value;

    console.log(searchKey);

    let div = document.getElementById("result-area");

    // WRITE THE SEARCH

    let res = ["ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao"];

    res.forEach((el) => {
        let toAppend = document.createElement("div");
        toAppend.innerHTML = el;

        toAppend.classList.add("result");

        div.append(toAppend);
    });

}

