// membuat array minuman
var minuman = ["Air putih", "Es teh", "Jus mangga", "Jus jeruk"];
document.write("<h3>Daftar Minuman:</h3>");
document.write("<ol>");
// menggunakan perulangan untuk mencetak semua isi array
for(let i = 0; i < minuman.length; i++){
document.write(`<li>${ minuman[i] }</li>`);
}
document.write("</ol>");