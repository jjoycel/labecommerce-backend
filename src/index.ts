import { 
    users, 
    products,
    getAllUsers,
    createUser, 
    createProduct, 
    getAllProducts,
    searchProductsByName 
} from "./database"
import express, { Request, Response} from 'express'
import cors from 'cors';



const app = express();
//O erro ocorreu porque o corpo da requisição não estava sendo corretamente processado e preenchido com os dados enviados. Ao adicionar o middleware express.json() usando app.use(express.json()), o Express passa a interpretar o corpo (body) da requisição como JSON e preenche o objeto req.body com os dados enviados, permitindo o acesso correto às propriedades da requisição e evitando o erro:
// <pre>TypeError: Cannot read properties of undefined (reading &#39;id&#39;)<br> &nbsp; &nbsp;at 
// ...

app.use(express.json()) // adicionei o comannado

app.use(cors());
 
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

//retire o conteúdo das últimas aulas.

app.get('/ping', (req: Request, res: Response) => {
    res.send('Obrigada, Senhor!')
  });
app.get('/users', (req: Request, res: Response) => {
    res.send(users)
  });
app.get('/products', (req: Request, res: Response) => {
    const name = req.query.name as string
    if (name) {
        const result = searchProductsByName(name)
        res.status(200).send(result)
    }else {
        res.send(products)
    }
  });

app.post('/users', (req: Request, res: Response) => {
    console.log("chegou")
    const id = req.body.id as string
    const name = req.body.name as string
    const email = req.body.email as string
    const password = req.body.password as string               
       
    const result = createUser(
        id,
        name,
        email,
        password
        )
    // observe que agora o valor retornado é ("cadastro realizado com sucesso")
    
    res.status(201).send(result)
    
})
app.post('/products', (req: Request, res: Response) => {
    
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const description = req.body.description as string 
    const imageUrl = req.body.imageUrl as string               
       
    const result = createProduct(
        id,
        name,
        price,
        description,
        imageUrl
    )

    res.status(201).send(result)
    
})
