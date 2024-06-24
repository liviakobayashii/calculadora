const criaCalculadora = () => {

    return{
        display: document.querySelector (".display"),

        inicia() {
            this.cliqueBotoes()
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
            })
        }
        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()