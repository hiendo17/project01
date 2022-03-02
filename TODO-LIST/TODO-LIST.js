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
    textNode1 = document.createTextNode(input.value) //Tạo thẻ <p>
    li.appendChild(textNode1); //Thêm thẻ <p> vào node
    ul.appendChild(li); //Thêm li vào ul
    input.value = ""; //Reset lại khu vực input text

    // Tạo button X để xóa task
    let deleteBtn = document.createElement("button");
    textNode2 = document.createTextNode("X");
    deleteBtn.appendChild(textNode2);
    li.appendChild(deleteBtn);

    function deleteListItem() {
        li.classList.add("delete") //Tạo Class Delete
    }

    deleteBtn.addEventListener("click", deleteListItem);

    //Click để chuyển màu Done
    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);
}

function addListAfterClick() {
    if (inputLength() > 0) { //Không input sẽ không tạo li
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);