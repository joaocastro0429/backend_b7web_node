import { Router } from 'express';

const routerUser = Router();

// Array de usuários (usando um array para fins de exemplo, mas em produção deveria ser um banco de dados)
let User: any[] = [];

// Rota GET para listar todos os usuários
routerUser.get("/user", (request, response) => {
    response.json({ users: User });
});

// Rota GET para obter um usuário por ID
routerUser.get("/:id", (request, response) => {
    const id = Number(request.params.id);
    const user = User.find(user => user.id === id);

    if (user) {
        response.json(user);
    } else {
        response.status(404).json({ message: "Usuário não encontrado" });
    }
});

// Rota POST para criar um usuário
routerUser.post("/create", (request, response) => {
    const { nome, email } = request.body;

    // Criando o novo usuário com um ID único
    const newUser = {
        id: User.length + 1, // Usando o comprimento do array como ID simples
        nome,
        email,
    };

    User.push(newUser); // Adicionando o novo usuário ao array
    console.log(newUser);
    response.json({ message: "Usuário cadastrado com sucesso" });
});

// Rota PUT para atualizar um usuário
routerUser.put("/users/:id", (request, response) => {
    const id = Number(request.params.id);
    const { nome, email } = request.body;

    const userIndex = User.findIndex(user => user.id === id);

    if (userIndex >=0) {
        // Atualizando o usuário
        User[userIndex].nome = nome;
        User[userIndex].email = email;

        response.json({ message: "Usuário atualizado com sucesso" });
    } else {
        response.status(404).json({ message: "Usuário não encontrado" });
    }
});

// Rota DELETE para excluir um usuário
routerUser.delete("/users/:id", (request, response) => {
    const id = Number(request.params.id);

    const userIndex = User.findIndex(user => user.id === id);

    if (userIndex >=0) {
        // Remover o usuário do array
        User.splice(userIndex, 1);
        response.json({ message: "Usuário deletado com sucesso" });
    } else {
        response.status(404).json({ message: "Usuário não encontrado" });
    }
});

export { routerUser };
