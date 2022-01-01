function loadFetch() {
  var url = "https://jsonplaceholder.typicode.com/posts/";
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      var template = data.map((post) => {
        return `<h4>${post.title}</h4>
              <p>${post.body}</p>
              <hr>`;
      });
      document.getElementById("hasilFetch").innerHTML = template.join("\n");
    })
    .catch(function (e) {
      alert("Gagal Mengambil Data");
    });
}
