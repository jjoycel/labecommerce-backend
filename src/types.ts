

export type TUser = {
    id: string
    name: string
    email: string
    password: string
    // O método toISOString() é um método do objeto Date em JavaScript que converte a data em uma string no formato "AAAA-MM-DDTHH:mm:ss.sssZ", onde "AAAA" representa o ano com quatro dígitos, "MM" o mês, "DD" o dia, "HH" a hora em formato 24 horas, "mm" os minutos, "ss" os segundos, "sss" os milissegundos e "Z" a representação do fuso horário UTC.

    // Essa representação em formato ISO 8601 é amplamente utilizado para armazenar e transmitir datas em um formato padronizado e independente de fuso horário. O uso de dataAtual.toISOString() permite obter a data atual no formato ISO 8601 para realizar operações como armazenamento em banco de dados, comunicação com APIs ou exibição em interfaces de usuário.
    
    // estava 'any' e tudo bem, vai funcionar, isso porque any aceita qualquer tipo de dado. Porém, para o backend quanto mais tipado, melhor. 
    createdAt: string 
  }

  export type TProduct = {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
  }



