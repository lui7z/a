# Execução de uma Aplicação Node.js em um Docker

## Aplicação

Foi utilizado uma Aplicação do Canal **[Código Fonte TV](https://www.youtube.com/channel/UCFuIUoyHB12qpYa8Jpxoxow)** disponível nesse **[Repositório](https://github.com/gabrielfroes/api-nodejs-docker?tab=readme-ov-file)** com Autoria das seguintes Pessoas:

- **Gabriel Froes** - _Initial work_ - [Twitter](https://www.twitter.com/gabrielfroes)
- **Vanessa Weber** - _Initial work_ - [Twitter](https://www.twitter.com/nessaweberfroes)

## Passo a Passo

Através do README disponível no Repositório, primeiramente foi necessário instalar o **[Docker](https://www.docker.com/)**
Os passos descritos no README são para a instalação do Docker no CentOS, como estamos utilizando Windows, não precisamos seguir-los.

Com o **[Git](https://git-scm.com/downloads/win)** Instalado no Computado e devidamente aberto, devemos Clonar o Repositório, utilizando:
- git clone https://github.com/gabrielfroes/api-nodejs-docker.git

Posteriormente seguimos para a pasta utilizando:

- cd api-nodejs-docker

Com o Docker aberto, utilizamos:

- docker-compose up

O Comando faz com que a Imagem do Docker seja construída além de subir o Container com o Node.js já rodando a API

Agora só acessar o localhost no navegador com a porta informada no docker-compose.yml, utilizando:
- http://localhost:3000