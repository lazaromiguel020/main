/**
 * Classe que encapsula a regra de negócio do Parquímetro.
 * Regra de exemplo base (ajuste os valores e tempos conforme a tabela exata do seu enunciado):
 * - R$ 1,00 = 30 minutos
 * - R$ 2,00 = 60 minutos
 * - R$ 3,00 = 120 minutos (tempo máximo)
 * - Valores intermediários geram troco com base na tarifa proporcional ou fixa.
 */
class Parquimetro {
    constructor(valorInserido) {
        this.valorInserido = Number(valorInserido);
        this.VALOR_MINIMO = 1.00;
        this.TARIFA_POR_MINUTO = 1 / 30; // Exemplo: R$ 1,00 a cada 30 minutos (R$ 0,033 por minuto)
    }

    processar() {
        if (this.valorInserido < this.VALOR_MINIMO) {
            return {
                sucesso: false,
                mensagem: "Valor insuficiente. O valor mínimo é de R$ 1,00."
            };
        }

        // Lógica de cálculo de tempo e troco (exemplo genérico baseado em faixas/proporcionalidade)
        let tempoMinutos = 0;
        let troco = 0;

        if (this.valorInserido >= 3.00) {
            tempoMinutos = 120;
            troco = this.valorInserido - 3.00;
        } else if (this.valorInserido >= 2.00) {
            tempoMinutos = 60;
            troco = this.valorInserido - 2.00;
        } else {
            tempoMinutos = 30;
            troco = this.valorInserido - 1.00;
        }

        return {
            sucesso: true,
            tempo: tempoMinutos,
            troco: troco
        };
    }
}

// --- Manipulação do DOM ---
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("parquimetro-form");
    const inputValor = document.getElementById("valor-inserido");
    const divResultado = document.getElementById("resultado");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const valor = inputValor.value;
        const parquimetro = new Parquimetro(valor);
        const resultado = parquimetro.processar();

        divResultado.classList.remove("hidden", "erro");

        if (!resultado.sucesso) {
            divResultado.classList.add("erro");
            divResultado.innerHTML = `<p><strong>Atenção:</strong> ${resultado.mensagem}</p>`;
            return;
        }

        divResultado.innerHTML = `
            <p><strong>Tempo de permanência:</strong> ${resultado.tempo} minutos</p>
            <p><strong>Troco:</strong> R$ ${resultado.troco.toFixed(2)}</p>
        `;
    });
});