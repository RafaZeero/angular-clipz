# [Clipz](https://best-playz-clipz.vercel.app/)

Este projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

Confira o projeto aqui [Clipz](https://best-playz-clipz.vercel.app/)

## Índice

- [Descrição do Projeto](#descrição)
  - [Features](#features)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Aprendizado](#aprendizado)
- [Desafios](#desafios)
- [Construção](#construção)
  - [Screenshots](#screenshots)
- [Tecnologias](#tecnologias)
- [Autor](#autor)

## 📝Descrição

No clipz você poderá fazer upload de vídeos e compartilhá-los na web. Também poderá ter acesso a vídeos que outros usuários enviaram.
Clipz é um app para compartilhar jogadas incríveis, seus melhores momentos serão registrados aqui. Faça o upload também daquele momento que você teve mais sorte do que nunca, ou dos melhores 'fails' seus e dos seus amigos!

### ⚙Features

- [x] Login/Registro
- [x] Upload de clips
- [x] Assistir clips da plataforma
- [x] Editar nome do clip enviado
- [x] Compartilhar clips
- [ ] Tradução pt-br
- [ ] Clips chaaatos

## 📂Estrutura de Pastas

<details>
<summary style="font-size:14px">Ver estrutura</summary>


```markdown
📦src
┣ 📂app
┃ ┣ 📂about
┃ ┃ ┣ 📜about.component.html
┃ ┃ ┣ 📜about.component.scss
┃ ┃ ┣ 📜about.component.spec.ts
┃ ┃ ┗ 📜about.component.ts
┃ ┣ 📂clip
┃ ┃ ┣ 📜clip.component.html
┃ ┃ ┣ 📜clip.component.scss
┃ ┃ ┣ 📜clip.component.spec.ts
┃ ┃ ┗ 📜clip.component.ts
┃ ┣ 📂clips-list
┃ ┃ ┣ 📜clips-list.component.html
┃ ┃ ┣ 📜clips-list.component.scss
┃ ┃ ┣ 📜clips-list.component.spec.ts
┃ ┃ ┗ 📜clips-list.component.ts
┃ ┣ 📂home
┃ ┃ ┣ 📜home.component.html
┃ ┃ ┣ 📜home.component.scss
┃ ┃ ┣ 📜home.component.spec.ts
┃ ┃ ┗ 📜home.component.ts
┃ ┣ 📂models
┃ ┃ ┣ 📜clip.model.ts
┃ ┃ ┗ 📜user.model.ts
┃ ┣ 📂nav
┃ ┃ ┣ 📜nav.component.html
┃ ┃ ┣ 📜nav.component.scss
┃ ┃ ┣ 📜nav.component.spec.ts
┃ ┃ ┗ 📜nav.component.ts
┃ ┣ 📂not-found
┃ ┃ ┣ 📜not-found.component.html
┃ ┃ ┣ 📜not-found.component.scss
┃ ┃ ┣ 📜not-found.component.spec.ts
┃ ┃ ┗ 📜not-found.component.ts
┃ ┣ 📂pipes
┃ ┃ ┣ 📜fb-timestamp.pipe.spec.ts
┃ ┃ ┗ 📜fb-timestamp.pipe.ts
┃ ┣ 📂services
┃ ┃ ┣ 📜auth.service.spec.ts
┃ ┃ ┣ 📜auth.service.ts
┃ ┃ ┣ 📜clip.service.spec.ts
┃ ┃ ┣ 📜clip.service.ts
┃ ┃ ┣ 📜ffmpeg.service.spec.ts
┃ ┃ ┣ 📜ffmpeg.service.ts
┃ ┃ ┣ 📜modal.service.spec.ts
┃ ┃ ┗ 📜modal.service.ts
┃ ┣ 📂shared
┃ ┃ ┣ 📂alert
┃ ┃ ┃ ┣ 📜alert.component.html
┃ ┃ ┃ ┣ 📜alert.component.scss
┃ ┃ ┃ ┣ 📜alert.component.spec.ts
┃ ┃ ┃ ┗ 📜alert.component.ts
┃ ┃ ┣ 📂directives
┃ ┃ ┃ ┣ 📜event-blocker.directive.spec.ts
┃ ┃ ┃ ┗ 📜event-blocker.directive.ts
┃ ┃ ┣ 📂input
┃ ┃ ┃ ┣ 📜input.component.html
┃ ┃ ┃ ┣ 📜input.component.scss
┃ ┃ ┃ ┣ 📜input.component.spec.ts
┃ ┃ ┃ ┗ 📜input.component.ts
┃ ┃ ┣ 📂modal
┃ ┃ ┃ ┣ 📜modal.component.html
┃ ┃ ┃ ┣ 📜modal.component.scss
┃ ┃ ┃ ┣ 📜modal.component.spec.ts
┃ ┃ ┃ ┗ 📜modal.component.ts
┃ ┃ ┣ 📂tab
┃ ┃ ┃ ┣ 📜tab.component.html
┃ ┃ ┃ ┣ 📜tab.component.scss
┃ ┃ ┃ ┣ 📜tab.component.spec.ts
┃ ┃ ┃ ┗ 📜tab.component.ts
┃ ┃ ┣ 📂tabs-container
┃ ┃ ┃ ┣ 📜tabs-container.component.html
┃ ┃ ┃ ┣ 📜tabs-container.component.scss
┃ ┃ ┃ ┣ 📜tabs-container.component.spec.ts
┃ ┃ ┃ ┗ 📜tabs-container.component.ts
┃ ┃ ┗ 📜shared.module.ts
┃ ┣ 📂user
┃ ┃ ┣ 📂auth-modal
┃ ┃ ┃ ┣ 📜auth-modal.component.html
┃ ┃ ┃ ┣ 📜auth-modal.component.scss
┃ ┃ ┃ ┣ 📜auth-modal.component.spec.ts
┃ ┃ ┃ ┗ 📜auth-modal.component.ts
┃ ┃ ┣ 📂login
┃ ┃ ┃ ┣ 📜login.component.html
┃ ┃ ┃ ┣ 📜login.component.scss
┃ ┃ ┃ ┣ 📜login.component.spec.ts
┃ ┃ ┃ ┗ 📜login.component.ts
┃ ┃ ┣ 📂register
┃ ┃ ┃ ┣ 📜register.component.html
┃ ┃ ┃ ┣ 📜register.component.scss
┃ ┃ ┃ ┣ 📜register.component.spec.ts
┃ ┃ ┃ ┗ 📜register.component.ts
┃ ┃ ┣ 📂validators
┃ ┃ ┃ ┣ 📜email-taken.spec.ts
┃ ┃ ┃ ┣ 📜email-taken.ts
┃ ┃ ┃ ┣ 📜register-validators.spec.ts
┃ ┃ ┃ ┗ 📜register-validators.ts
┃ ┃ ┗ 📜user.module.ts
┃ ┣ 📂video
┃ ┃ ┣ 📂edit
┃ ┃ ┃ ┣ 📜edit.component.html
┃ ┃ ┃ ┣ 📜edit.component.scss
┃ ┃ ┃ ┣ 📜edit.component.spec.ts
┃ ┃ ┃ ┗ 📜edit.component.ts
┃ ┃ ┣ 📂manage
┃ ┃ ┃ ┣ 📜manage.component.html
┃ ┃ ┃ ┣ 📜manage.component.scss
┃ ┃ ┃ ┣ 📜manage.component.spec.ts
┃ ┃ ┃ ┗ 📜manage.component.ts
┃ ┃ ┣ 📂pipes
┃ ┃ ┃ ┣ 📜safe-url.pipe.spec.ts
┃ ┃ ┃ ┗ 📜safe-url.pipe.ts
┃ ┃ ┣ 📂upload
┃ ┃ ┃ ┣ 📜upload.component.html
┃ ┃ ┃ ┣ 📜upload.component.scss
┃ ┃ ┃ ┣ 📜upload.component.spec.ts
┃ ┃ ┃ ┗ 📜upload.component.ts
┃ ┃ ┣ 📜video-routing.module.ts
┃ ┃ ┗ 📜video.module.ts
┃ ┣ 📜app-routing.module.ts
┃ ┣ 📜app.component.html
┃ ┣ 📜app.component.scss
┃ ┣ 📜app.component.spec.ts
┃ ┣ 📜app.component.ts
┃ ┗ 📜app.module.ts
┣ 📂assets
┃ ┣ 📂img
┃ ┃ ┗ 📜author_img.jpg
┃ ┣ 📂video
┃ ┃ ┗ 📜hero.webm
┃ ┗ 📜.gitkeep
┣ 📂environments
┃ ┣ 📜environment.prod.ts
┃ ┗ 📜environment.ts
┣ 📜favicon.ico
┣ 📜index.html
┣ 📜main.ts
┣ 📜polyfills.ts
┣ 📜styles.scss
┗ 📜test.ts
```

</details>

## 📚Aprendizado

Durante a criação do projeto, tive um aprendizado sensacional de todo o framework Angular como: Routing, Directives, Pipes, Services, Ahead of time Compilation, Design Patterns, Performance e Memory Leaks. Também criei uma base sólida de conhecimento acerca de Rxjs, WebAssembly e Rust (usei o Rust para testar edição de arquivos de imagens com WebAssembly, confira o [projeto em Rust](https://github.com/RafaZeero/ztm-rust-image-effects)).

## 🚀Desafios

1. Utilizar o framework Angular
2. Entender a componentização do Angular
3. Aprender a usar Routing
4. Importar e exportar módulos
5. Utilizar serviços nativos e customizados
6. Aprender e utilizar de forma otimizada os life cycle hooks e evitar Memory Leaks
7. Entender o que é Rxjs e como utilizar com o Angular
8. Design Patterns do Angular

## 🚧Construção

A construção do projeto durou cerca de 1 mês.

O projeto começou com a página inicial, depois o modal de registro e login. Então as validações. Logo após foi criado a página de upload de vídeos, as tratativas para pegar uma screenshot do vídeo e também o nome do vídeo a ser postado. Parte do projeto foi feito também pelo Firebase, onde defini as regras de acesso ao banco de dados e registro de usuários. Por último foi feito a parte de editar vídeos próprios e a página sobre.

### Screenshots

![image01](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem01.PNG)
![imagem02](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem02.PNG)
![imagem03](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem03.PNG)
![imagem04](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem04.PNG)
![Imagem05](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem05.PNG)
![imagem06](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem06.PNG)
![imagem07](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem07.PNG)
![imagem08](https://github.com/RafaZeero/readme_template/blob/18e52a9ef43a9cdd554c8ec0fd40e3fbd38010a4/imgs/clipz_project/imagem08.PNG)

## ⚡Tecnologias

- [x] Angular 14
- [x] Tailwind CSS
- [x] WebAssembly
- [x] Firebase
- [x] Typescript
- [x] Vercel (Host)

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 😄Autor

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/rafael99ldm/">
        <img src="https://github.com/RafaZeero.png" width="100px;" alt="Foto de Rafael Lima do GitHub"/><br>
        <sub>
          <b>Rafael Lima</b>
        </sub>
      </a>
    </td>  
  </tr>
</table>

---

## Agradecimentos

<table>
  <tr>
    <td align="center">
      <a href="https://zerotomastery.io/">
        <img src="https://github.com/zero-to-mastery.png" width="100px;" alt="Logo de Zero To Mastery Academy"/><br>
        <sub>
          <b>Zero To Mastery Academy</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
