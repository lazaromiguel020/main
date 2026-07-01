// Número secreto entre 1 e 100
        const numeroSecreto = Math.floor(Math.random() * 100) + 1;

        // Número máximo de tentativas
        const maxTentativas = 10;
        let tentativasRestantes = maxTentativas;

        const input = document.getElementById("palpite");
        const botao = document.getElementById("btnChutar");
        const mensagem = document.getElementById("mensagem");
        const tentativas = document.getElementById("tentativas");

        botao.addEventListener("click", function () {

            const palpite = Number(input.value);

            // Validação
            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                mensagem.textContent = "Digite um número válido entre 1 e 100.";
                return;
            }

            // Diminui uma tentativa
            tentativasRestantes--;

            // Verifica o resultado
            if (palpite === numeroSecreto) {
                mensagem.textContent = "🎉 Você acertou!";
                tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;
                input.disabled = true;
                botao.disabled = true;
                return;
            }

            if (tentativasRestantes === 0) {
                mensagem.textContent = "❌ Você perdeu! O número secreto era " + numeroSecreto + ".";
                tentativas.textContent = "Tentativas restantes: 0";
                input.disabled = true;
                botao.disabled = true;
                return;
            }

            if (palpite < numeroSecreto) {
                mensagem.textContent = "O número secreto é maior.";
            } else {
                mensagem.textContent = "O número secreto é menor.";
            }

            tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

            input.value = "";
            input.focus();
        });
