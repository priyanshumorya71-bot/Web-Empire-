const box = document.getElementById("searchBox");
const suggestions = document.getElementById("suggestions");

box.addEventListener("input", async () => {
    const q = box.value;
    if (q.length < 2) {
        suggestions.innerHTML = "";
        return;
    }

    const res = await fetch(`/search?q=${q}`);
    const data = await res.json();

    suggestions.innerHTML = "";
    data.forEach(item => {
        suggestions.innerHTML += `
          <div class="result">
            <a href="${item.url}" target="_blank">
              ${item.name} (${item.category})
            </a>
          </div>
        `;
    });
});
