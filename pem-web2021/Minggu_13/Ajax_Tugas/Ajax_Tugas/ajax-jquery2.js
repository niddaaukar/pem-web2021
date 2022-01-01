var url = "http://localhost/Minggu_13/Ajax_Tugas/ajax-1-code.json";

var data = {
  name: "Javascript",
  Hobi: "Mendengarkan musik",
};

$.post(url, data, function (data, status) {
  document.getElementById("nameJS").innerHTML = "Data telah terkirim";
});

$.get(url, function (data, status) {
  $("#namaSaya").text(data[0].name);
  $("#hobiSaya").text(data[0].Hobi);
  $("#temanSaya").text(data[1].name);
  $("#temanSaya").text(data[1].Hobi);
  $("#nameJS").text(data[2].name);
});
