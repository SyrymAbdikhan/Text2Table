
const input = document.getElementById("input");
const table = document.getElementById("table");
const raw = document.getElementById("raw");
const btn = document.getElementById("btn");


input.addEventListener('input', function () {
    let new_table = "<table><tbody>";

    let lines = this.value.split(/[\r\n]+/);
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(" ");
        let text = words.slice(1, words.length).join(" ");
        new_table += `<tr><td>${words[0]}</td><td>${text}</td></tr>`;
    }

    new_table += "</tbody></table>";
    table.innerHTML = new_table;
    raw.value = new_table;
});

function copy() {
    raw.select();
    raw.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(raw.value);
    btn.innerText = 'copied';
    setTimeout(function () {
        btn.innerText = 'copy raw';
    }, 1500);
}
