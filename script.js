var item = [6,9,4]
var sum =0
var ip = document.querySelectorAll('.piece'); // find the <span> element in the DOM
var inc = document.querySelectorAll('.incre'); // find the element with the ID 'increment'
var dcr = document.querySelectorAll('.decre');
var price = document.querySelectorAll('.prix');
var total = document.querySelector('.montant');
var Ptt = document.querySelector('#tot');
var heart = document.querySelectorAll(".fa-heart")
console.log(heart)
for (let i = 0; i< price.length;i++){
price[i].value = 0
}

for (let i = 0; i < inc.length; i++) {
  inc[i].addEventListener("click", function () {
    ip[i].value++;
    price[i].value = parseInt(ip[i].value) * parseInt(item[i])
  
  });
}

for (let i=0; i < dcr.length; i++) {
  dcr[i].addEventListener("click", function () {
    if (parseInt(ip[i].value) > 0) {
      ip[i].value--;
      price[i].value = parseInt(ip[i].value)* parseInt(item[i])
      
    }
  });
}


/*******************************************                                 total */
total.value=0
Ptt.addEventListener('click', function () {
  for(let j=0 ;j < price.length;j++){
  sum+= parseInt(price[j].value)}
  total.value = parseInt(sum)
  sum=0
})


document.getElementById("al").onclick = function () { myFunction() };

function myFunction() {
  confirm("voulez-vous valider la cammande? ");
}
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener('click', function () {
    if (heart[i].style.color == "black")
      heart[i].style.color = "red"
    else heart[i].style.color = "black"
  })
}