const txtA = document.querySelector("#txtA");
txtA.addEventListener("keydown", Tabify);

function Tabify(e) {
    if (e.key === "Tab" || e.code === "Tab") {
        e.preventDefault();

        const texte = txtA.value;
        const cursorPos = e.target.selectionStart;

        if (e.shiftKey === true && (cursorPos - 1) > -1) {
            const precChar = texte.substr(cursorPos - 1, 1)

            if (precChar === "\t" || precChar === " ") {
                //untab
                const texteFinal = texte.substr(0, cursorPos - 1) + texte.substr(cursorPos, texte.lenght)
                txtA.value = texteFinal;
                e.target.selectionEnd = cursorPos - 1;
            }
        }
        else {
            //tab
            const texteFinal = texte.substr(0, cursorPos) + "\t" + texte.substr(cursorPos, texte.lenght);

            txtA.value = texteFinal;
            e.target.selectionEnd = cursorPos + 1;
        }
    }
}