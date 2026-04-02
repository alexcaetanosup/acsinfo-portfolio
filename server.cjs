require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const Groq = require("groq-sdk");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// ROTA DE IA
app.post("/api/ai", async (req, res) => {
  try {
    const prompt = req.body.prompt || req.body.message;
    if (!prompt) {
      return res.status(400).json({ error: "Mensagem não enviada" });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `Você é um assistente virtual da WebSite da ACSInfo - Consultoria Independente.
                    Responda SEMPRE em português, de forma curta e direta (máximo 5 linhas).
                    Você conhece todas as funcionalidades do sistema:
- Produto: Aplicativos desenvolvidos com tecnologia de ponta para otimizar processos e aumentar a eficiência.
- Consultoria: Análise detalhada dos processos para identificar oportunidades de melhoria e personalização.
- Analise de Dados: Transformação de dados em insights valiosos para decisões estratégicas.
- ASSISTENTE IA: Chat inteligente para tirar dúvidas sobre o sistema.
- WhatsApp: Botão VERDE a ESQUERDA para contato via WhatsApp.
- Suporte Técnico: Botão AZUL a DIREITA para contato técnico.`,

          // Se a pergunta não for sobre o sistema CHM, responda:
          // "Só posso responder perguntas sobre o sistema CHM."`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1024,
    });

    const aiText =
      completion.choices[0]?.message?.content || "Sem resposta da IA";
    res.json({ text: aiText });
  } catch (err) {
    console.error("Erro interno IA:", err);
    res.status(500).json({ error: "Erro interno IA", detalhe: err.message });
  }
});

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// --- INICIALIZAÇÃO ---
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
