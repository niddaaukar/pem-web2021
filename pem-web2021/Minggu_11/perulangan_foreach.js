// perulangan foreach dapat disederhanakan dengan operator in
var languages = ["Javascript", "HTML", "CSS", "Typescript"];
for(i in languages){
 document.write(i+". "+ languages[i] + "<br/>");
}