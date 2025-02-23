import { Router } from "express"
import { getContacts,createContact, deleteContact } from "../service/contact"


const router =  Router()

router.post('/contato', async (req, res) => {
    const { name } = req.body;

    if (!name || name.length < 2) {
         res.json({ error: 'Nome precisa ter pelo menos 2 caracteres.' });
    }

    await createContact(name);

    res.status(201).json({ contato: name });
});


router.get('/contatos',async (req,res)=>{
    let list = await getContacts()
    res.json({contatos:list})

})

router.delete('/contato',async (req,res)=>{
    const {name}= req.body

    if (!name) {
         res.json({ error: 'Precisa mandar um nome para excluir.' });
    }

    await deleteContact(name as string);

    res.json({ contato: name });

})

export{router}