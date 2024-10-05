

document.getElementById("addtaskBtn").onclick = function () {

    const input = document.getElementById("addtaskInput");

    const text = input.value.trim();

    // if (text === '') return;

    if (text !== "") {

        const li = document.createElement("li");

        li.textContent = text;

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.onclick = function () {

            const newText = prompt("Edit your todo:", text);

            if (newText !== null && newText.trim() !== "") {

                li.firstChild.textContent = newText.trim();

            }

        };

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {

            li.remove();

        };

        li.appendChild(editButton);

        li.appendChild(deleteButton);

        document.getElementById("showtaskList").appendChild(li);

        input.value = "";

    } else {

        alert("Add new task");

    }

    // const li = document.createElement('li');

    // li.textContent = text;

    // const deleteButton = document.createElement('button');

    // deleteButton.textContent = 'Delete';

    // deleteButton.className = 'delete';

    // deleteButton.onclick = function() {

    //     li.remove();

    // };

    // li.appendChild(deleteButton);

    // document.getElementById('showtaskList').tappendChild(li);

    // input.value = ''; // Clear input

};
