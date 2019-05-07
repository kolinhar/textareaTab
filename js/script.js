const txtA = document.querySelector("#txtA");
txtA.addEventListener("keydown", Tabify);

function Tabify(e){
    if (e.key === "Tab" || e.code === "Tab") {
        e.preventDefault();

        const texte = txtA.value;
        const cursorPos = e.target.selectionStart;
        const texteFinal = texte.substr(0, cursorPos) + "\t" + texte.substr(cursorPos, texte.lenght);

        txtA.value = texteFinal;
        e.target.selectionEnd = cursorPos + 1;

        return false;
    }
}