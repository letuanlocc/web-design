function list(){
    for (let i = 0; i < cross.length; i++){
        var demo = '<div class = "card">';//class card
        demo += '<div class = "image">';//class image
        demo += '<img src="'+cross[i].image+'">';
        demo += '</div>'; //class image
        demo += '<div class = "content">';//class content
        demo += '<h3>'+cross[i].name+'</h3>';
        demo += '<p class="price">' +cross[i].price+'</p>';
        demo += '<button class = "button-card">Mua ngay</button>';
        demo += '</div>'; //class content
        document.getElementById('cross').innerHTML += demo;
    }
    for (let i = 0; i < lao.length; i++){
        var demo = '<div class = "card">';//class card
        demo += '<div class = "image">';//class image
        demo += '<img src="'+lao[i].image+'">';
        demo += '</div>'; //class image
        demo += '<div class = "content">';//class content
        demo += '<h3>'+lao[i].name+'</h3>';
        demo += '<p class="price">' +lao[i].price+'</p>';
        demo += '<button class = "button-card">Mua ngay</button>';
        demo += '</div>'; //class content
        document.getElementById('lao').innerHTML += demo;
    }
}
function home() {
    document.getElementById("cross").style.display = "flex";
    document.getElementById("lao").style.display = "flex";
}

function showCross() {
    document.getElementById("cross").style.display = "flex";
    document.getElementById("lao").style.display = "none";
}

function showLao() {
    document.getElementById("cross").style.display = "none";
    document.getElementById("lao").style.display = "flex";
}
var cross = [
{
    id: 1,
    name: "Dép cross trắng",
    price: "32000",
    image: "https://thesneakerhouse.com/wp-content/uploads/2019/12/CROCS-SHOES-01-2.jpg",
},
{
    id: 2,
    name: "Dép cross xanh",
    price: "32000",
    image: "https://cf.shopee.vn/file/vn-11134207-7qukw-lh46yjqw6d6a4d",
},
{
    id: 3,
    name: "Dép cross hồng",
    price: "32000",
    image: "https://cf.shopee.vn/file/vn-11134207-7qukw-lh46yjqw4ylu36",
},
{
    id: 4,
    name: "Dép cross đen",
    price: "32000",
    image: "https://cf.shopee.vn/file/vn-11134207-7qukw-lh46yjqw7rqq85",
},
];
var lao = [
{
    id: 1,
    name: "Dép lào trắng (made in thailand)",
    price: "32000",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2bau2v0rf0491.webp",
},
{
    id: 2,
    name: "Dép lào đen(made in thailand)",
    price: "32000",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2bcm0pg7mb877.webp",
},
{
    id: 3,
    name: "Dép Dior (made in Unites States)",
    price: "32000",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0v1ncdv2dfzb5.webp",
},
{
    id: 4,
    name: "Dép lào caro (made in Viet Nam)",
    price: "32000",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0o805cv4xkd15.webp",
},
];
