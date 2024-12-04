// one h1 element
// one p element
// one a element 

const myh1Element=document.createElement("h1");

myh1Element.style.color="red";
myh1Element.style.border="1px solid black"
myh1Element.innerHTML="Dom Basics"

//p element
const mypElement=document.createElement("p");
mypElement.innerHTML="Hi, I'm Zaheer"
mypElement.style.color="green";

//a element
const aElement=document.createElement("a");
aElement.innerHTML="Visit this link";
aElement.href="https://www.google.com";

//h3 element
const h3Element=document.createElement("h3");
h3Element.innerHTML="h3 Element";


const mydiv=document.getElementById("mydiv");
mydiv.appendChild(myh1Element)
mydiv.appendChild(mypElement)
mydiv.appendChild(aElement)
document.body.appendChild(h3Element)
function removeElement(){
    setTimeout(function(){
        aElement.remove();
    },2000)
}

//removeElement();

//task
//html
//form - dynamic (fn,ln,email,gender,hobbies,checkbox,submit)
//on submit- table (ln,ln,email,bobbies,...),actions=>edit=>redirect to form,delete