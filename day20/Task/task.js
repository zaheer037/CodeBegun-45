//first retrieve data from form when submit button is pressed

function retrieveData(){
    var fName=document.getElementById("firstname").value;
    var lName=document.getElementById("lastname").value;
    var mail=document.getElementById("email").value;
    var hobbies=document.getElementById("hobby1").value;
    var gender=document.getElementById("male").value;
    console.log("First Name: " + fName);
    console.log("Last Name: " + lName);
    console.log("Email: " + mail);
    console.log("Hobbies: " + hobbies);
    console.log("Gender: " + gender);
}

// function output(){
//     var mytable=document.createElement("table");
//     var myTh=document.createElement("th");
//     var mtTr=document.createElement("tr");
//     var myTd=document.createElement("td");

//     var mydiv=document.getElementById("output-div");
//     mydiv.appendChild(mytable);
//     mytable.appendChild(myTh);
//     myTh.innerHTML=fName;
// }
function insertIntoTable(fName, lName, mail, hobbies, gender) {
    var table = document.getElementById("output-table");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = mail;
    cell4.innerHTML = hobbies;
    cell5.innerHTML = gender;
}

function retrieveData() {
    event.preventDefault();
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var mail = document.getElementById("email").value;
    var hobbies = document.getElementById("hobby1").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    insertIntoTable(fName, lName, mail, hobbies, gender);
};