var body = document.getElementById("body");
var head = document.getElementById("head");
var para = document.getElementById("para")
var inp = document.getElementById("inp")
var btnDiv = document.getElementById("divbtn")
let i = true;

function cngHt() {

    if (inp.value != "") {
        head.innerText = inp.value
        inp.value = ""
    }
    else
        alert("Can't add empty Heading")

}

function cngPt() {
    if (inp.value != "") {
        para.innerText = inp.value;
        inp.value = ""
    }
    else {
        alert("can't add empty paragraph")
    }

}


function styleinp() {
    inp.style.margin = "10px"
    inp.style.padding = "5px"
    inp.style.height = "30px"
    inp.style.width = "300px"
    inp.style.border = "none"
    inp.style.borderRadius = "20px"
    inp.style.backgroundColor = "beige"
    inp.style.color = "neavyblue"
}



function addBh() {
    head.style.border = "3px solid red"
    head.style.padding = "10px";
    head.style.margin = "10px"


}

function addBp() {
    para.style.border = "3px solid blue"
    para.style.padding = "10px"
    para.style.margin = "10px"

}

function putBgH() {
    head.style.backgroundColor = "tomato"
}


function putBgP() {
    para.style.backgroundColor = "maroon"
}

function btnStyle() {
    btnDiv.style.display = "flex"
    btnDiv.style.flexDirection = "column"

    var btn = document.getElementsByTagName("button")
    for (ele of btn) {
        ele.style.padding = "5px"
        ele.style.margin = "5px"
        ele.style.border = "none"
        ele.style.borderRadius = "10px"
        ele.style.backgroundColor = "purple"
        ele.style.color = "white"
        ele.style.width = "180px"
    }

}

function addList() {

    if (i === true) {
        var ulist = document.createElement("ul")
        ulist.setAttribute("id", "ulist")
        body.appendChild(ulist)
        document.getElementById("btnul").innerText = "Give input & add items"
        i = false;
        alert("Unordered list created now go and append list items by entering text in input box")
    }
    else {

        var item = document.createElement("li")
        if (inp.value !=""){
            item.innerText = inp.value
            document.getElementById("ulist").appendChild(item)
            inp.value=""
            item.style.backgroundColor="tomato"
            item.style.width="fit-content"
            item.style.padding="5px"
            item.style.margin="5px"

        }
        else alert("Can't add empty list")


    }
}
var j=true;

function addCSS(){
    var cssBtn=document.getElementById("cssBtn")
    var arr=document.getElementsByClassName("cssStyle")
    if(j===true)
{
    styleinp();
    addBh();
    addBp();
    putBgH();
    putBgP();
    btnStyle();
    
    for(ele of arr)
{
    ele.style.display="none"
}

cssBtn.innerText="Remove whole CSS"
j=false;
}

else if(j===false)
{
    function nostyleinp() {
    inp.style.margin = ""
    inp.style.padding = ""
    inp.style.height = ""
    inp.style.width = ""
    inp.style.border = ""
    inp.style.borderRadius = ""
    inp.style.backgroundColor = ""
    inp.style.color = ""
}
    function noaddBh() {
    head.style.border = ""
    head.style.padding = "";
    head.style.margin = ""


}
    function noaddBp() {
    para.style.border = ""
    para.style.padding = ""
    para.style.margin = ""

}
    function noputBgH() {
    head.style.backgroundColor=""
}
    function noputBgP() {
    para.style.backgroundColor = ""
}
    function nobtnStyle() {
    btnDiv.style.display = ""
    btnDiv.style.flexDirection = ""

    var btn = document.getElementsByTagName("button")
    for (ele of btn) {
        ele.style.padding = ""
        ele.style.margin = ""
        ele.style.border = ""
        ele.style.borderRadius = ""
        ele.style.backgroundColor = ""
        ele.style.color = ""
        ele.style.width = ""
    }

}
nostyleinp()
noaddBh()
noaddBp()
noputBgH()
noputBgP()
nobtnStyle()
cssBtn.innerText="Add whole CSS"

for(ele of arr)
{
    ele.style.display="inline"
}
j=true;
}   
}


