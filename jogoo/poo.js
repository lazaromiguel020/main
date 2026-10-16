class conta {
    constructor() {
        this.#saldo = 0;
    }
depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    }
        temsaldo(valor) {
            return valor<=this.#saldo; 
    }
        get saldo() {
            return this.#saldo;
    }
            }

class caixa{
    constructor(conta) {
        this._conta = conta;
    }
    depositar(){
        const valordeposito=parseFloat(document.getElementById("valordeposito").value)
        this.conta.depositar(valordeposito);
        this.mostrarsaldo(this.conta.saldo);
    }
    saldo(){
        document.getElementById("saldo").innerHTML = `Saldo: R$ ${saldo}`;
    }
    sacar(){
        const valorsaque=parseFloat(document.getElementById("valorsaque").value);
       if(this.conta.temsaldo(valorsaque)){
        this.conta.sacar(valorsaque);
        this.mostrarsaldo(this.conta.saldo);
    }else{
        this.mostrarsaldo("Saldo insuficiente");
    }
}
}
const minhaConta = new conta();
const novocaixa = new caixa(minhaConta);    