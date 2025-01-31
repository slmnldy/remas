function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Gagal memuat ${url}:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
});
