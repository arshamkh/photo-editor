const file = document.getElementById("file");
let up = "";
file.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        up = reader.result;
        document.getElementById("div").style.backgroundImage = `url(${up})`;
        document.getElementById("div").style.backgroundRepeat = "no-repeat";
        document.getElementById("div").style.backgroundPosition = "center";
    });
    reader.readAsDataURL(this.files[0]);
});


let range = document.getElementById("range");
let div = document.getElementById("div");
let range2 = document.getElementById("range2");
let range3 =document.getElementById("range3");
let range4 =document.getElementById("range4");
let range5 =document.getElementById("range5");
let range6 =document.getElementById("range6");
function change(){
    let val = range.value;
    let val2 = range2.value;
    let val3 =range3.value;
    let val4 =range4.value;
    let val5 =range5.value;
    let val6 =range6.value;
    div.style.borderRadius = val + "%";
    div.style.filter = "opacity(" + val2 + "%) blur(" + val3 + "px) brightness(" + val4 + "%) hue-rotate(" + val5 + "deg) grayscale(" + val6 + "%)";
    if(document.getElementById("div").style.backgroundImage ==""){
        alert("choose your photo")
    }



};
