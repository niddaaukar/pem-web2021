var paragraph = document.getElementsByClassName("paragraf");
console.log(paragraph);
//perlu diingat walaupun terdapat 3 paragraf namun saat ditulis tetap memulai dari 0 karena ia array.
paragraph[0].style.backgroundColor = "salmon";
paragraph[0].style.color = "#fff";
paragraph[1].style.color = "#fff";
paragraph[1].style.backgroundColor = "teal";
paragraph[2].style.color = "#fff";
paragraph[2].style.backgroundColor = "salmon";
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].style.padding = "10px";
}