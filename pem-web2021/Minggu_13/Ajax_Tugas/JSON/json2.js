var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    data.forEach(function (element) {
      document.getElementById("json2").innerHTML +=
        "NIM: " +
        element.nim +
        "<br>Nama: " +
        element.nama +
        "<br>Alamat: " +
        element.alamat +
        "<br>Jurusan: " +
        element.jurusan +
        "<br>Matkul: <br>" +
        element.matkul[0].mataKuliah +
        ", Dosen: " +
        element.matkul[0].dosenPengampu +
        "<br>" +
        element.matkul[1].mataKuliah +
        ", Dosen: " +
        element.matkul[1].dosenPengampu +
        "<br>" +
        element.matkul[2].dosenPengampu +
        ", Dosen: " +
        element.matkul[2].dosenPengampu +
        "<br><br>";
    });
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
