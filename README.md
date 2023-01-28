# TheCatCuriosity

Essa é uma aplicação relacionada a um site de curiosidades, onde qualquer usuário pode fazer uma publicação sobre uma curiosidade, assim como, visualizar todos as curiosidades postadas... Também é possível que o usuário delete uma publicação ou edite a mesma.

O usuário também é capaz de listar todas as classificações possíveis para uma curiosidades e incerir uma nova classificação.

---

1 - A princípio, para listar todas as classificações existente é necessário fazer uma requisição **`GET`** para a rota `/classifications`. Assim, você recebera os dados no formato a seguir:

```
    [
        {
            id: 1,
            name: "Contidiano"
        },
        {
            id: 2,
            name: "Ciência"
        },
        {
            id: 3,
            name: "Universo"
        },
    ]
```

2 - Para você conseguir incerir uma nova classificação você irá fazer uma requisição **`POST`** para a rota `/classifications`. Você deverá mandar os dados no seguinte formato:

```
    {
        name: "Cultura"
    }
```

---

1 - Para listar todas as curiosidades existente é necessário fazer uma requisição **`GET`** para a rota `/curiosities`. Assim, você recebera os dados no formato a seguir:

```
[
    {
        id: 1,
        author: "Nicolas",
        title: "Qual o tamanho do universo?",
        description: "oito deitado...",
        classificationId: 3,
        createdAt: "2023-01-20T00:00:00"
    },
    {
        id: 2,
        author: "Deivyd",
        title: "Do que o cérebro é formado?",
        description: "Ele é formado por aproximadamente, 75% de água...",
        classificationId: 2,
        createdAt: "2023-01-20T00:00:00"
    },
    {
        id: 3,
        author: "Nicolas",
        title: "Porquê o ceu é azul?",
        description: "Por causa da atmosfera e do sol...",
        classificationId: 2,
        createdAt: "2023-01-20T00:00:00"
    }
]
```

2 - Para filtrar e listar as curiosidades por uma classificação existente é necessário fazer uma requisição **`GET`** para a rota `/curiosities/:classificationId`. Assim, você recebera os dados no formato a seguir:

```
[
    {
        id: 2,
        author: "Deivyd",
        title: "Do que o cérebro é formado?",
        description: "Ele é formado por aproximadamente, 75% de água...",
        classificationId: 2,
        createdAt: "2023-01-20T00:00:00"
    },
    {
        id: 3,
        author: "Nicolas",
        title: "Porquê o ceu é azul?",
        description: "Por causa da atmosfera e do sol...",
        classificationId: 2,
        createdAt: "2023-01-20T00:00:00"
    }
]
```

3 - Para você conseguir incerir uma nova curiosidade você irá fazer uma requisição **`POST`** para a rota `/curiosities`. Você deverá mandar os dados no seguinte formato:

```
    {
        author: "Deivyd",
        title: "Do que o cérebro é formado?",
        description: "Ele é formado por aproximadamente, 75% de água...",
        classificationId: 2,
    }
```

4 - Para editar uma curiosidade você irá fazer uma requisição **`PATCH`** para a rota `/curiosities/:id`. Você deverá mandar os dados no seguinte formato:

```
    {
        title: "Do que o cérebro é formado?",
        description: "Ele é formado por aproximadamente, 75% de água...",
    }
```

5 - Para deletar alguma curiosidade específica você precisa fazer uma requisição **`DELETE`** para a rota `/curiosities/:id`.