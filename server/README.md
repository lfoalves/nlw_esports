Stage 3 - Server Node
# Prisma ORM

- Instalação
npm install prisma -D

- Opeções de configuração
npx prisma init -h

- Configuração do banco de dados
npx prisma init --datasource-provider SQLite

Será criada a pasta Prisma com o Schema e um .env

- criar uma pasta database dentro de ../src/ e configurar o caminho da variável ambiente no arquivo .env, configurar o nome do db a ser criado e a extenssão.

- criar as tabelas com os Model no arquivo schema, usar a extensão do Prisma no VSCode. Usar as configs de identação do Prisma no OPENSJSON

- após criar a Model, criar a migration, que é o versionamento do DB.

- `npx prisma migrate dev` -> colocar o nome da migrate

- `npx prima studio` -> exibe o banco de dados sem precisar de beekeper ou extensão para dev no vscode.

- Cria segundo Model e fazer o relacionamento no Schema.prisma

## Configura o Prisma para acesso do server
`npm install @prisma/client`

- o prisma cria em node-modules typagem typescript para o db e os possíveis métodos.


## Lib ZOD para validação de dados antes do DB.