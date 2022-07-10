# Essa é minha primeira API

Com base em videos tutoriais na internet, desenvolvi minha primeira API 

## Passos realizados para a criação

instalei o NodeJS com NPM
Tive problemas de permissão do windows, porem resolvi com este código = Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
em seguida instalei o Yarn. Usei o comando: yarn init -y
Instalei o Express com: yarn add Express 
1 Chamei o servidor para ser criado
2 Criei o servidor na porta 3000
3 Fiz os resources com os verbos http (bloco de notas do garçom)
4 chamei os dados dos meus clientes em um arquivo JSON
5 Falei pro Express USAR os dados no formato JSON
6 fui no insomnia e dei um GET no http://localhost:3000/clients para ver se estava OK. 200 OK
7 Fui atrás de um cara em especifico pelo ID
8 Se eu colocar um ID que não exite, temos que retornar o aviso 204
9 Depois eu fui mandar o meu nome e email para se tornar um cliente
10 Agora eu quero mudar um dado que esta la no endpoint dos clientes (lembrar de digitar onde você quer atualizar)
11 não gostei, acho que vou deletar este dado dos clientes (mesma coisa com att, cuidado para não selecionar o dado errado.)
### Regras de boas praticas

- Não colocar barra no final do endpoint (clients é um endpoint)
- Use plural ou singular. Ou um ou outro


### HTTP verbos 
- GET: receber um resource
- POST: enviar um resource
- PUT: atualizar um resource
- DELETE: deletar um resource
- Resource: é como se fosse o bloco de notas de um garçom

### Status das respostas do insomnia

- 1xx: Informação
- 2xx: Sucesso
    - 200: OK
    - 201: CREATED
    - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found!
- 5xx: Server Error 
- 500: Internal Server Error

### 5 NECESSIDADES para ser uma API RESTful

- Uniform Interface: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

- Client-server: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- Stateless: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- Cacheable: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

- Layered System: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- Code on demand (optional): Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.



