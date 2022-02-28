let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul"); //Trả về phần tử đầu tiên
let item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    let li = document.createElement("li"); // Tạo element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field


    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH


    // Tạo button X để xóa task
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD CLASS DELETE
}


function addListAfterClick() {
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { //13 là keycode của phím enter
        createListElement();
    }
}


enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);