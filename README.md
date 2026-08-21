# Perfil Comportamental

Questionário educacional de tendências comportamentais inspirado no modelo DISC.

> Ferramenta educacional. Não substitui avaliação psicológica ou instrumento profissional validado.

## Como funciona

O usuário responde um questionário com 30 perguntas, escolhendo em cada uma a alternativa que mais se aproxima do seu comportamento.

As respostas são enviadas ao backend em JSON.

O backend valida os dados, realiza o cálculo das tendências e retorna:

- percentuais dos perfis D, I, S e C;
- perfil predominante ou combinação de perfis;
- resumo do resultado;
- notas de integração, quando aplicável;
- forças;
- motivadores;
- pensamentos propulsores;
- pensamentos limitantes;
- pontos de desenvolvimento.

O frontend apresenta essas informações ao usuário junto com um gráfico dos percentuais.

## Tecnologias

- HTML
- CSS
- JavaScript
- Node.js
- Express

## Arquitetura

O projeto está separado em:

- `frontend/` — interface, questionário, progresso, loading, erros e apresentação do resultado.
- `backend/` — API, validações, regras de pontuação, cálculo e conteúdo dos perfis.

Fluxo principal:

`perguntas → frontend → API → validação → cálculo → JSON → resultado`

## API

### GET /health

Verifica se o servidor está ativo.

### POST /api/assessment/calculate

Recebe as respostas, valida os dados e calcula o resultado.

Exemplo resumido da requisição:

```json
{
  "answers": [
    {
      "questionId": "Q1",
      "selectedOption": "A"
    }
  ]
}
```

A requisição real deve conter exatamente 30 respostas.

Exemplo resumido de resposta:

```json
{
  "ok": true,
  "data": {
    "percentages": {
      "D": 30,
      "I": 37,
      "S": 23,
      "C": 10
    },
    "profileSummary": {
      "profileName": "Nome do perfil",
      "overview": "Resumo do perfil.",
      "integrationNotes": ["Nota de integração."]
    },
    "profileContent": {
      "D": {
        "strengths": [],
        "motivators": [],
        "supportiveThoughts": [],
        "limitingThoughts": [],
        "developmentPoints": []
      }
    }
  },
  "error": null
}
```

Exemplo de erro:

```json
{
  "ok": false,
  "data": null,
  "error": {
    "code": "INVALID_ANSWERS_COUNT",
    "message": "A quantidade de respostas é inválida."
  }
}
```

## Validações do backend

O backend verifica:

- existência de `answers`;
- se `answers` é um array;
- quantidade exata de 30 respostas;
- formato de cada resposta;
- `questionId` válido;
- `selectedOption` válida;
- respostas duplicadas.

O cálculo é realizado exclusivamente no backend.

## Rodando localmente

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

O backend local roda em:

`http://localhost:3000`

Para abrir o frontend localmente, pode ser usado um servidor local como o Live Server do VS Code.

Para utilizar o backend local, altere temporariamente `apiBaseUrl` em `frontend/js/script.js`.

## Deploy

- Frontend hospedado na HostGator.
- Backend hospedado no Render.
- CORS configurado para desenvolvimento local e para os domínios públicos permitidos.

Ao iniciar o questionário, o frontend envia uma requisição para `/health` para antecipar a ativação da API hospedada no plano gratuito do Render.

## Status

Versão 1 em processo de publicação.
