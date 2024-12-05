function insertIntoTable(fName, lName, mail, hobbies, gender) {
    var table = document.getElementById("output-table");

    if (table.rows.length === 0) {
        var header = table.createTHead();
        var headerRow = header.insertRow(0);
        var headers = ["First Name", "Last Name", "Email", "Hobbies", "Gender", "Actions"];
        headers.forEach(function (headerText) {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode(headerText));
            headerRow.appendChild(th);
        });
    }

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = mail;
    cell4.innerHTML = hobbies;
    cell5.innerHTML = gender;

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
        var cells = row.getElementsByTagName("td");
        document.getElementById("firstname").value = cells[0].innerHTML;
        document.getElementById("lastname").value = cells[1].innerHTML;
        document.getElementById("email").value = cells[2].innerHTML;

        var hobbiesArray = cells[3].innerHTML.split(", ");
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = hobbiesArray.includes(checkbox.value);
        });

        document.querySelectorAll('input[name="gender"]').forEach(radio => {
            radio.checked = (radio.value === cells[4].innerHTML);
        });

        table.deleteRow(row.rowIndex);

        var submitButton = document.getElementById("submit-button");
        submitButton.style.backgroundColor = "orange";
        submitButton.innerHTML = "Update";
    };

    var submitButton = document.getElementById("submit-button");
    submitButton.style.backgroundColor = "rgb(13, 147, 161)";
    submitButton.innerHTML = "submit";

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style.marginLeft = "10px"
    deleteButton.onclick = function () {
        table.deleteRow(row.rowIndex);
    };

    cell6.appendChild(editButton);
    cell6.appendChild(deleteButton);

    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].style.border = "1px solid black";
            table.rows[i].cells[j].style.padding = "8px";
        }
    }
}

function retrieveData() {
    event.preventDefault();
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var mail = document.getElementById("email").value;
    var hobbies = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(", ");
    var gender = document.querySelector('input[name="gender"]:checked').value;

    //table creation
    var output_div = document.getElementById("output-div");
    var table = document.createElement("table");
    table.setAttribute("id", "output-table")
    table.style.margin = "0 auto";
    output_div.appendChild(table)
    insertIntoTable(fName, lName, mail, hobbies, gender);
    document.getElementById("myForm").reset();
}
