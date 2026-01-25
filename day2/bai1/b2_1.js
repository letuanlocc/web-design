var arr = []
function Save(){
    var a = {
        name:  document.getElementById('name').value,
        id:  document.getElementById('id').value,
        name_pro: document.getElementById('name_pro').value,
        quatity: document.getElementById('quantity').value,
        price : document.getElementById('price').value,
    }
    console.log(a);
    arr.push(a);
}
function Show(){
    var html = "";
    for(i in arr){
        var n = i;
        n ++;
        html += "<tr>";
        html += "<td>" + (n) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>" + arr[i].id + "</td>";
        html += "<td>" + arr[i].name_pro + "</td>";
        html += "<td>" + arr[i].quatity + "</td>";
        html += "<td>" + arr[i].price + "</td>";
        html += "<td>" + 6593.4 + "</td>";
        html += "<td>" + 43956 + "</td>";
        html += "<td>" + parseFloat(arr[i].quatity) * parseFloat(arr[i].price) + "</td>";
        html += "</tr>";
    }
    document.getElementById('tbl').innerHTML = html;
}
function Reset(){
    document.getElementById('name').value = "";
    document.getElementById('id').value = "";
    document.getElementById('name_pro').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('price').value = "";
}