// function addAnything(){
//     let input=document.getElementById('input').value;
//     let item=document.createElement('input');
//     let p=document.createElement('span');
//     let br=document.createElement('br');
//     item.type='checkbox';
//     let unorderedlist=document.getElementById('div');
//     unorderedlist.appendChild(item);
//     unorderedlist.appendChild(p).innerHTML=input;
//     unorderedlist.appendChild(br);
//     document.getElementById('input').value="";
// }
let id=1;
let org;
function addAnything() {
    let input = document.getElementById('input').value;
    //console.log(id.toString());
    document.getElementById('div').innerHTML += "<div id=000"+id+"><input type='checkbox' id="+id+" onclick='strikethrough(this.id)'/><span id=0"+id+">"+input+"</span><button padding-left:'10px' id="+id+" onclick='edit(this.id)'>Edit</button><button padding-left:'10px' id="+id+" onclick='deleteElement(this.id)'>delete</button></div>";
    let id1='0'+id;
   // console.log("<input type='checkbox' id="+id+" onclick='strikethrough(this.id)'/><span id='owais'>"+input+"</span><br>");
    org=input;
    document.getElementById('input').value = '';
    id++;  
}
function strikethrough(id){
    console.log(id.toString());
    document.getElementById('0'+id).style.textDecoration="line-through";
}
function edit(id){
    document.getElementById('0'+id).innerHTML="<input type='text' placeholder='test' id=00"+id+"><button onclick='edit1("+id+")'>lattest edit</button>";
}
function edit1(id){
    document.getElementById('0'+id).innerHTML=document.getElementById('00'+id).value;
}
function deleteElement(id){
    document.getElementById('000'+id).innerHTML="";
}