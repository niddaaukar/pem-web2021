  // Method filter
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ambil data yang hanya habis dibagi dua 
const filteredArray = angka.filter((item) => item % 2 === 0);
document.write(<p> filteredArray</p> + "<br>");// -> [2, 4, 6, 8]
// Method Includes
var tanaman = ["Padi", "Kacang", "Jagung", "Kedelai"];
var adaKacang = tanaman.includes("Kacang");
document.write(adaKacang + "<br>"); // -> true
// apakah bayam ada?
var adaBayam = tanaman.includes("Bayam");
document.write(adaBayam + "<br>"); // -> false
//Method Short
var alfabet = ['a','f','z','e','r','g'];
document.write(alfabet.sort() + "<br>"); //-> ["a", "e", "f", "g", "r", "z"] mengurutkan alfabet
var angka = [3,1,2,6,8,5];
document.write(angka.sort() + "<br>"); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9] mengurutkan angka