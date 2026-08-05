# Project State

## Dia

3

## Meta

Integrar o frontend do questionário com um backend Express.

## Feito

- Repositório criado e publicado no GitHub
- Estrutura `frontend/` e `backend/` criada
- Frontend com apresentação, questionário e resultado
- 30 perguntas organizadas em JavaScript
- Avanço automático após a seleção
- Respostas guardadas sem duplicação
- Progresso exibido de 1 a 30
- Servidor Express criado
- Rota `GET /health` testada
- `.gitignore` criado para ignorar `node_modules` e `.DS_Store`

## Arquitetura

- `frontend/index.html`
- `frontend/js/script.js`
- `backend/server.js`
- `backend/package.json`

## Rotas

- `GET /health`

## Decisões

- Quantidade de perguntas: 30
- Peso por alternativa: 1 ponto
- Perfis possíveis: D, I, S e C
- Empate: apresentar todos os perfis com a maior pontuação
- Avanço automático após a seleção
- Se uma pergunta for respondida novamente, substituir a resposta anterior
- Frontend envia `questionId` e `selectedOption`
- Backend será responsável pela pontuação
- Fonte das perguntas: projeto anterior, com nova implementação manual

## Testes

- Seleção única entre quatro alternativas
- Renderização de perguntas diferentes
- Limpeza da seleção ao avançar
- Resposta repetida substitui a anterior
- Quantidade de respostas igual à quantidade de perguntas
- `GET /health` devolve JSON com sucesso

## Bloqueio

Nenhum

---

## Próximo MP

Criar o endpoint `POST /api/assessment/calculate` com resposta simulada.
