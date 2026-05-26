let count1 = 0;
let count2 = 0;
let count3 = 0;

let text1 = document.querySelector(".text-1");
let text2 = document.querySelector(".text-2");
let text3 = document.querySelector(".text-3");

function giveLike(elemento) {
    if(elemento.className == "btn-1") {
        count1++;
        text1.innerText = count1 + " like(s)";
    } else if(elemento.className == "btn-2") {
        count2++;
        text2.innerText = count2 + " like(s)";
    } else {
        count3++;
        text3.innerText = count3 + " like(s)";
    }
}

