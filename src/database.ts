import { type } from "os";
import { TProduct, TUser } from "./types"
let data = new Date();
let dataAtual = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);



export const users: TUser[] = [
     {
        id : "u001",
        name : "Fulano",
        email : "fulano@email.com",
        password : "fulano123",
        createdAt: dataAtual.toISOString()
      },
    
      {
        id : "u002",
        name : "Beltrana",
        email : "beltrana@email.com",
        password : "beltrana00",
        createdAt : dataAtual.toISOString()
      }
    
    ]

    export const products: TProduct[] = [
      {
        id : "prod001",
        name : "Mouse gamer",
        price : 250,
        description : "Melhor mouse do mercado!",
        imageUrl : "https://picsum.photos/seed/Mouse%20gamer/400"
      },
      {
        id : "prod002",
        name : "Monitor",
        price : 900,
        description : "Monitor LED Full HD 24 polegadas",
        imageUrl : "https://picsum.photos/seed/Monitor/400" 
      }
]

export function createUser(id:string, name:string, email: string, password:string):void{
  const newUser: TUser = { id, name, email, password, createdAt:dataAtual};
  users.push(newUser);
  console.log("Cadastro realizado com sucesso ", newUser)
}

export function getAllUsers(): TUser[]{
  return users
  
}

export function createProduct(id:string, name:string, price:number, description:string, imageUrl:string):void{
  const newProduct: TProduct = {id, name, price, description, imageUrl};
  products.push(newProduct)
  console.log("Produto criado com sucesso")
}
export function getAllProducts(): TProduct[]{
  return products
  
}

export function searchProductsByName(name:string):TProduct[]{
  const result = products.filter((product)=>{
    return product.name.toLowerCase().includes(name)
  })
  return result
}