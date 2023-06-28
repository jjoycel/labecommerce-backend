"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log("Started App");
console.log(database_1.users, database_1.products);
(0, database_1.createUser)("u003", "Joyce", "user@user", "asdf123");
console.table((0, database_1.getAllUsers)());
(0, database_1.createProduct)("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "imagem não disponível");
console.table((0, database_1.getAllProducts)());
console.log("busca 1", (0, database_1.searchProductsByName)("gamer"));
console.log("busca 2", (0, database_1.searchProductsByName)("monitor"));
//# sourceMappingURL=index.js.map