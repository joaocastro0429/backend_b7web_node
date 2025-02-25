import express from 'express';
import { z } from 'zod';

const routes = express.Router();

routes.post('/user', (req, res) => {
  // validação de dados
  const userSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
  });

  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: 'Dados inválidos', errors: result.error.errors });
  }
  console.log('Carregando...');
  return res.status(200).json({ message: 'Tudo ok' });
});

routes.get('/posts', async (req, res) => {
  const postSchema = z.array(
    z.object({
      userId: z.number(),
      id: z.number(),
      title: z.string(),
      body: z.string(),
    })
  );

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const result = postSchema.safeParse(data);
    if (!result.success) {
      return res.status(500).json({ error: 'Erro interno no servidor',});
    }

    const totalPosts = result.data.length;
    return res.json({ total: totalPosts });
})

export default routes;
