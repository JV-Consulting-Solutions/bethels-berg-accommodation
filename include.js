function loadHTML(id, file) {
  fetch(SITE_ROOT + "/header-footer/" + file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

const SITE_ROOT = "";
loadHTML("header", "header-footer/header.html");
loadHTML("footer", "header-footer/footer.html");