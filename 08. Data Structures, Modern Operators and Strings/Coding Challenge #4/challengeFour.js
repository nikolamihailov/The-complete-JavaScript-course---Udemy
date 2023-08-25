const textarea = document.createElement('textarea');
const btn = document.createElement('button');
btn.textContent = "Convert";
document.body.append(textarea, btn);
const success = "✅";

btn.addEventListener("click", convertCase);

function convertCase() {
    const data = textarea.value.split("\n");
    let result = "";
    for (const [idx, word] of data.entries()) {
        const changedWord = word.toLowerCase().trim().split("_").map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join("");
        result += `${changedWord[0].toLowerCase() + changedWord.slice(1)} \n`;
        console.log(`${(changedWord[0].toLowerCase() + changedWord.slice(1)).padEnd(20)} ${success.repeat(idx + 1)}`);
    }
    textarea.value = result;
}


