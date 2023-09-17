//Selecting the elements with the help of DOM

let status1=document.getElementsByClassName("status")[0];
let btn1=document.getElementsByClassName("btn-1") [0];
function statusUpdate() {
    if (status1.textContent=="Not Friend") {
        status1.innerHTML="<i>Friends</i>";
        status1.style.backgroundColor="yellow";
        btn1.textContent="Unfriend";
    }
    else if (status1.textContent=="Friends") {
        status1.innerHTML="Not Friend";
        btn1.textContent="Add As A Friend";

    }

}

console.log(btn1.textContent);
btn1.addEventListener("click",statusUpdate);
