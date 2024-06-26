const criaCalculadora = () => {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.diplay.addEventListener('keyup', e => {
                if(e.keyCode == 13) {
                    this.realizaConta()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) //tamanho da string -1
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)
                if(!conta) {
                    alert("Conta invalida")
                    return
                }
                this.diplay.value = String(conta)
            } catch(e) {
                alert('Conta invalida')
                return
            }
        },

        cliqueBotoes() {
            document.addEventListener ('click', function(e) {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay()
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if(el.classList.contains('btn.del')) {
                    this.aparaUm()
                }
                if(el.classList.contain('btn-eq')) {
                    this.realizaConta()
                }
            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()