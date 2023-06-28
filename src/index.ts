import { 
    users, 
    products,
    getAllUsers,
    createUser, 
    createProduct, 
    getAllProducts,
    searchProductsByName 
} from "./database"
console.log("Started App")

console.log(users, products)
createUser("u003", "Joyce", "user@user", "asdf123")

console.table(getAllUsers())

createProduct("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "imagem não disponível")

console.table(getAllProducts())
console.log("busca 1",searchProductsByName("gamer"))
console.log("busca 2",searchProductsByName("monitor"))

