## Todo List Angular

Link url projeto

https://todo-list-localstorage-angular-gilberto-goncalves-de-lima.netlify.app/


# To-do List

1 - Nessa ferramenta o usuário poderá adicionar tarefas diárias, podendo marcar
que completo ou atpe mesmo deletar a tarefas selecionada.

2 - No campo adicionar tarefas, ele terá que digitar um valor específico que
será adicionado na lista de tarefas

3 - Assim que ele adicionar a tarefa será enviada para uma lista, onde o usuário
poderá fazer algumas ações, como:

- Checked: Assim que o usuário clicar no input checked sua tarefa estará pronta
  e deverá ir para o final da lista.
- Delete: Assim que o usuário clicar no ícone de lixeira sua tarefa deverá ser
  deletada.

  4 - Botão deletar todas as tarefas. Assim que clicar no botão deverá aparecer
  uma confirmação para deletar tudo.

  Pluss - Essa lista deverá ser salva no localStorage Build - Suba seu código no
  Github e GhPages

Criaremos alguns componentes: 2 Inteligentes (possuem interação)

-todo-list -todo-input-add-item

-2 Burros (que não possuí inteligência dentro dele)

-header -todo-button-delete-all

Model

Iremos criar uma interface para facilitar a troca de dados entre
funcionalidades. No caso criaremos ela para tipar nosso TS.

Pages

Vamos criar uma pasta chamada Pages, criaremos de página para nosso angular
entender onde realmente iniciaremos.

Vamos criar um projeto, em angular:

```js
ng new app-todo
```

Para start do projeto

```js
ng serve -o
```

ou

```js
ng s
```

Vamos criar agora, nosso module

```js
ng g m modules/home
```

Vamos criar agora nosso componente, components

```js
ng g c modules/home/components
```

Vamos criar agora nosso componente, header

```js
ng g c modules/home/components/header
```

Vamos criar nosso componente todoButtonDeleteAll

```js
ng g c modules/home/components/todoButtonDeleteAll
```

Vamos criar nosso componente, todoInputAddItens

```js
ng g c modules/home/components/todoInputAddItens
```

Vamos criar o componente, todoList

```js
ng g c modules/home/components/todoList
```

Vamos criar o componente, home

```js
ng g c modules/home/pages/home
```

Criando um arquivo, variables.scss

dist/scss/variables.scss

Esta variables, é para definir as cores

No google existe o google fonts

