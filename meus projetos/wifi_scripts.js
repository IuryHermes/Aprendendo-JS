// No seu arquivo wifi_scripts.js

// SUBSTITUA 'SEU_IP_LOCAL' PELO SEU ENDEREÇO IP REAL (ex: 192.168.1.100)
const SERVER_ADDRESS = '192.168.100.244'; 


// 1. Seleciona os elementos do formulário
const form = document.getElementById('wifi-form');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const messageElement = document.getElementById('message');


// 2. Evento para envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (!email || !senha) {
        messageElement.textContent = 'Preencha todos os campos.';
        messageElement.style.color = 'red';
        return;
    }

    messageElement.textContent = 'Verificando e conectando...';
    messageElement.style.color = 'orange';

    // Envia os dados para o servidor Node.js
    sendDataToServer(email, senha); 
});


/**
 * Envia os dados para o servidor e trata a resposta.
 */
async function sendDataToServer(email, senha) {
    try {
        const response = await fetch(SERVER_ADDRESS + '/log-access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        });

        if (response.ok) {
            messageElement.textContent = 'Conectado! Seu acesso à rede local foi liberado.';
            messageElement.style.color = 'green';
            // Em um sistema real, você liberaria a navegação aqui.
        } else {
            messageElement.textContent = 'Erro de registro. Tente novamente.';
            messageElement.style.color = 'red';
        }

    } catch (error) {
        // Erro de rede (ocorre se o servidor Node.js não estiver rodando ou o IP estiver errado)
        console.error('Erro de rede ao enviar dados:', error);
        messageElement.textContent = 'O sistema de registro está fora do ar. Contate o suporte.';
        messageElement.style.color = 'red';
    }
}