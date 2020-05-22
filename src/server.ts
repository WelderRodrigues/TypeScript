import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ Message: 'Hello TypeScript Configurado' }));
app.listen(3333, () => {
  console.log('Server Start');
});
