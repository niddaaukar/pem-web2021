function loadContentAjax1() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost/Minggu_13/Ajax_Tugas/ajax-1-code.json";
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("hasilAjax1").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
