const totalArray = [];
const stringerArray = [];
function readCollection(collection) {
    totalArray.push(collection);
}
const ulAr =`<h2>Collections</h2>`;

function clearCollection(place){
     document.getElementById(place).innerHTML = "";
}

function tabCollection(collection, place){
    
if (totalArray.length === 0) {
let idDym = 'dynamicTable'
let html2 = `<table id=${idDym}>`;
if(collection[0]["type"] == "article-journal"){
    html2+=` <tr class="header">
    <th style="width:5%;">Rok</th>
    <th style="width:7%;">Skr</th>
    <th style="width:5%;">Klas</th>
    <th style="width:15%;">Autor</th>
    <th style="width:53%;">Tytuł</th>
    <th style="width:5%;">Strony</th>
    <th style="width:10%">Klucz</th>
  </tr>`
}

for (let ab of collection) {

let writer =``;
let callNumb =``;
let startInfo = ``;
let flag=0;
let typex= ab["type"];
/* do napisania potem rozroznianie klas */
let klasaJ = "Bez";
try {
    callNumb+= `${ab["call-number"]}`;
} catch(err)
    {callNumb= "No - number" 
        flag=1;
    }
if (ab["type"] == "book") {
    if(callNumb == 'undefined') {
    startInfo = `<td>Magazyn</td>`}
    else {
        startInfo = `<td>Biblioteka</td>`
    }

}
else if (ab["type"] == "article-journal"){
    startInfo = `<td>${ab["issued"]["date-parts"][0]}</td>`
    
}


try {
if ('author' in ab) {
writer = `${ab.author[0].family}, ${ab.author[0].given}`;
}
else {
    if ('editor' in ab) {
        writer = `${ab.editor[0].family}, ${ab.editor[0].given}`;
    }
    else {
        writer = ``;
    }
}
  if (typex =="article-journal"){
    
    html2 += `<tr>${startInfo}<td>${callNumb}</td><td>${klasaJ}</td><td>${writer}</td><td>${ab.title}</td><td>${ab.page}</td><td>${klasaJ}</td></tr>`
  }  else {
  html2 += `<tr>${startInfo}<td>${callNumb}</td><td>${writer}</td><td>${ab.title}</td><td>${ab.year}</td></tr>`}
} catch(err) {
  html2 += `<tr><td><i>${ab.title}</i></td><td>${ab.year}</td></tr>`;
}

}
html2 += `</table>`;
document.getElementById(place).innerHTML = html2;
readCollection(htlm2);
}
else {
    document.getElementById(place).innerHTML = totalArray[0];
}
}

