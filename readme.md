# Essa é minha primeira API

Com base em videos tutoriais na internet, desenvolvi minha primeira API 

## Passos realizados para a criação

instalei o NodeJS com NPM

Tive problemas de permissão do windows, porem resolvi com este código = Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
em seguida instalei o Yarn. Usei o comando: yarn init -y

Instalei o Express com: yarn add Express 

1º chamei o servidor para ser criado

2º Criei o servidor na porta 3000

3º Fiz os resources com os verbos http (bloco de notas do garçom)

4º chamei os dados dos meus clientes em um arquivo JSON

5º Falei pro Express USAR os dados no formato JSON

6º fui no insomnia e usei um GET no http://localhost:3000/clients para ver se estava OK. Resultado = 200 OK

7º Fui atrás de um cliente em especifico pelo ID

8º Se eu colocar um ID que não exite, temos que retornar o aviso 204

9º Depois mandei o meu nome e email para se tornar um cliente

10º Agora eu quero mudar um dado que esta la no endpoint dos clientes (lembrar de digitar onde você quer atualizar)

11º não gostei, acho que vou deletar este dado dos clientes (mesma coisa com att, cuidado para não selecionar o dado errado.)

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



