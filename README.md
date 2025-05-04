# Execução de uma Aplicação Node.js em um Docker

## Aplicação

Foi utilizado uma Aplicação do Canal **[Código Fonte TV](https://www.youtube.com/channel/UCFuIUoyHB12qpYa8Jpxoxow)** disponível nesse **[Repositório](https://github.com/gabrielfroes/api-nodejs-docker?tab=readme-ov-file)** com Autoria das seguintes Pessoas:

- **Gabriel Froes** - _Initial work_ - [Twitter](https://www.twitter.com/gabrielfroes)
- **Vanessa Weber** - _Initial work_ - [Twitter](https://www.twitter.com/nessaweberfroes)

## Passo a Passo

Através do README disponível no Repositório, primeiramente foi necessário instalar o **[Docker](https://www.docker.com/)**
Os passos descritos no README são para a instalação do Docker no CentOS, como estamos utilizando Windows, não precisamos seguir-los.

Com o **[Git](https://git-scm.com/downloads/win)** Instalado no Computador e devidamente aberto, devemos Clonar o Repositório, utilizando:
```shell
git clone https://github.com/gabrielfroes/api-nodejs-docker.git
```

Posteriormente seguimos para a pasta utilizando:
```shell
cd api-nodejs-docker
```
Com o Docker aberto, utilizamos:
```shell
docker-compose up
```
O Comando constrói uma Imagem no Docker além de subir o Container com o Node.js já rodando a API

Agora só acessar o localhost no navegador com a porta informada no docker-compose.yml, utilizando:
```shell
http://localhost:3000
```

## Pequenas Alterações

Com o auxílio de IA, foi feito pequenas alterações na API para que seja possível a Adição de Músicas via **[Postman](https://www.postman.com/downloads/)**, Aplicativo esse já utilizado anteriormente nas aulas com o Prof.**[João Beji](https://github.com/joaobeji)**

Foram feitas alterações no arquivo app.js, além da adição do musicRoutes.js e musicController.js

Então é necessário reiniciar o servidor Docker utilizando:
```shell
docker-compose down
```

Depois:

```shell
docker-compose up --build
```

Após isso, abrindo o Postman é adicionada uma requisição do tipo Post no link 
```shell
http://localhost:3000/musicas
```

no Body da Página, selecionando a opção raw, e mantendo o formato como JSON, você pode adicionar uma música seguindo a estrutura:
```shell
{
  "nome": "nome da musica",
  "artista": "artista",
  "genero": "genero",
  "tempo": "2:30"
}
```
<p align="center">
  <img width="62px" alt="Luiz" title="Luiz" src="https://avatars.githubusercontent.com/u/192318661?v=4" style="display: inline-block; margin-right: 20px;">
  <span>Luiz</span>
  <img width="62px" alt="Cecília" title="Cecília" src="https://avatars.githubusercontent.com/u/183560885?v=4" style="display: inline-block;">
  <span>Cecília</span>
</p>
