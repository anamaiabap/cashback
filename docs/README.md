# O aplicativo Badges

O aplicativo de Badges tem como objetivo adicionar Badges de conteúdo em seu e-commerce. Há uma aplicação no admin em que poderão ser adicionadas, editadas e removidas as badges e há também um componente para frente de loja em que poderão ser acrescentadas as badges cadastradas no tema da sua store.

## Instalando

### O ADMIN

Para instalar o aplicativo no admin e, assim, gerenciar suas badges, deve-se entrar em seu terminal, logar no workspace e digitar o comando:

```json
  vtex install vtex.badges@1.x
```

### A Store

Para disponibilizar o componente em sua loja, é necessário adicionar nas "dependencies" do manifest o seguinte código:

```json
  "vtex.badges": "1.x"
```

Em seguida, já é possível adicionar o componente de badges em sua loja.

## O funcionamento

### No ADMIN

Após instalar o aplicativo em sua loja, já estará disponível em seu ambiente ADMIN o aplicativo de Gerenciamento de Badges.
Para utilizá-lo, basta acessar a barra lateral em "OUTROS", a qual deve conter o aplicativo "Gerenciamento de Badges".
Clicando no aplicativo, deverá visualizar a seguinte página:

![Captura de Tela 2021-09-28 às 08 53 05 (2)](https://user-images.githubusercontent.com/80836180/135082491-1a9996ab-fff6-4e3e-92a8-02ae2991b080.png)

Nessa página é possível criar uma nova badge

- Adicionando o nome da badges
- Adicionando o conteúdo da badge (como imagem, texto ou html)
- Adicionando uma regra de ativação

Um exemplo de como pode-se ser preenchido o formulário está contido abaixo

![Captura de Tela 2021-09-28 às 09 03 54 (2)](https://user-images.githubusercontent.com/80836180/135083322-c8dc3177-5bc0-465f-858f-d0d14c0e6c01.png)

Nesse mesmo gerenciamento pode-se editar ou excluir uma badge em questão, basta-se mudar a aba do formulário de "Adicionar Badge" para "Editar Badges" e ser clicado no botão de "LineActions", como pode-se ser visto na imagem abaixo:

![Captura de Tela 2021-09-28 às 09 19 36 (2)](https://user-images.githubusercontent.com/80836180/135085400-a9be20a6-adb7-461a-91a2-95601c06a3b9.png)

### Na Store

Agora com as badges cadastradas, é possivel adiciona-las em sua loja. Para o correto funcionamento das mesmas é necessário que o componente das badges seja aderida dentro de uma página de produto (store.product) ou dentro de um product-summary. O exemplo abaixo demonstra como colocar uma badges na página de produto

```diff
  "store.product": {
    "children": [
+     "store-badges",
      "stack-layout",
      "breadcrumb",
      "flex-layout.row#main",
      "condition-layout.product"
    ]
  },

+  "store-badges":{
+    "props": {
+      "numberOfBadges": 1,
+      "text":{
+        "font": "t-heading-5",
+        "textColor": "blue",
+        "textAlignment": "CENTER",
+        "textPosition": "CENTER",
+        "htmlId": "teste1"
+      },
+      "image":{
+        "blockClass": "container",
+        "height": 500,
+        "width": 500,
+         "minWidth": 25,
+         "minHeight": 25,
+         "alt": "teste",
+         "title": "title",
+         "preload": true
+      }
+    }
+  }

```

### `buybox-context` props

| Nome da Prop     | Tipo     | Descrição                                                                                                                                                       |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numberOfBadges` | `number` | Define quantas badges serão renderizadas                                                                                                                        |
| `text`           | `array`  | Contém definições de valores que serão usados quando se renderiza uma badge de texto. Saiba mais sobre essas props no https://github.com/vtex-apps/rich-text    |
| `image`          | `array`  | Contém definições de valores que serão usados quando se renderiza uma badge de imagem. Saiba mais sobre essas props no https://github.com/vtex-apps/store-image |

### O resultado final

Com todas as etapas concluídas já é possível conferir o resultado final em sua store. O exemplo abaixo mostra como ficaria a uma store que foi seguido o passo a passo desse tutorial

<img width="1440" alt="Captura de Tela 2021-09-28 às 10 27 46" src="https://user-images.githubusercontent.com/80836180/135096186-96473ef8-164f-4c46-a9e9-2978708dd7e4.png">
