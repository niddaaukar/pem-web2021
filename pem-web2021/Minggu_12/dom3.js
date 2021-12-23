var paragraph = document.getElementsByClassName("paragraf2");
setInterval(function () {
  paragraph[0].style.color = "#000000";
  paragraph[1].style.color = "#000000";
  paragraph[2].style.color = "#000000";
  paragraph[0].style.backgroundColor = "RosyBrown";
    paragraph[1].style.backgroundColor = "RosyBrown";
    paragraph[2].style.backgroundColor = "RosyBrown";

  setTimeout(function () {
    paragraph[0].style.color = "#fff";
    paragraph[1].style.color = "#fff";
    paragraph[2].style.color = "#fff";
    paragraph[0].style.backgroundColor = "LightSeaGreen";
    paragraph[1].style.backgroundColor = "LightSkyBlue";
    paragraph[2].style.backgroundColor = "LightSlateGray";
  }, 500);
}, 1000);
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].style.padding = "12px";
  paragraph[i].style.color = "#000000";
}