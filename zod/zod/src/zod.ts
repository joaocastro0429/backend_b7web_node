import express from 'express'          // Importa o módulo express
import { z } from 'zod'                // Importa o módulo zod para validação de dados

 export  const routes = express.Router()        // Cria uma instância do roteador express

routes.post("/user", (req, res) => {   // Define uma rota POST em /user
    // Definição do esquema de validação para os dados do usuário
    const userSchema = z.object({
        name: z.string().min(2),        // Nome deve ser uma string com no mínimo 2 caracteres
        email: z.string().email(),      // Email deve ser uma string e um email válido
        age: z.number().min(18).max(120)// Idade deve ser um número entre 18 e 120
    })

    const result = userSchema.safeParse(req.body) // Valida os dados do corpo da requisição

    if (!result.success) {               // Se a validação falhar
        return res.status(200).json({ message: "dados invalidos" }) // Retorna uma resposta indicando dados inválidos
    }

    console.log("carregando....")        // Loga uma mensagem no console se a validação for bem-sucedida
    return res.status(200).json({ message: "tudo ok" }) // Retorna uma resposta indicando sucesso
})

routes.get("/user", (req, res) => {      // Define uma rota GET em /user
    return res.json({ pong: true })      // Retorna um JSON com { pong: true }
})

