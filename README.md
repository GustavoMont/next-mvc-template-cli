# next-mvc-template-cli

This is a command line application that helps to create MVC structure for NextJS projects.

> The MVC template generate by this app is based on [`Tabnews`](https://github.com/filipedeschamps/tabnews.com.br) project structure.

## Getting Start

### Installation

Install globally:

```bash
npm i -g THIS_WAS_NOT_PUBLISHED_YET :(
```

Or, as a dev dependency:

```bash
npm i -D THIS_WAS_NOT_PUBLISHED_YET :(
```

### Usage

Just run:

```bash
next-mvc-cli project_path
```

And the MVC template will be created.

Example:

```
root/
├── infra/
|   └─ controller.js
├── models/
│   └── hello.js
└── pages/
    ├── api/v1/hello
    |    └── index.js
    └── index.js
```

---

## Templates Examples

<details>
    <summary><code>pages/api/v1/hello/index.js</code></summary>
<br>

```javascript
import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import hello from "models/hello.js";

const router = createRouter();

router.get(getHandler);

export default router.handler(controller.erroHandlers);

async function getHandler(req, res) {
  const hello = await hello.getRandomHello();

  return res.status(200).json(hello);
}
```

</details>

<details>
    <summary><code>models/hello.js</code></summary>
<br>

```javascript
import { setTimeout } from "node:timers/promises";

const hello = {
  getRandomHello,
};

async function getRandomHello() {
  const hellos = ["Hello, World!", "Hey, World", "Hi, World"];
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const hello = hellos[randomNumber];
  await setTimeout(1_000);
  return { hello };
}
```

</details>

<details>
    <summary><code>infra/controller.js</code></summary>
<br>

```javascript
function onErrorHandler(error, req, res) {
  console.error(error);
  res.status(500).json({ error: "Something went wrong :(" });
}

function onNoMatchHandler(req, res) {
  res.status(405).json({ error: "You just hit it wrong" });
}

const controller = {
  erroHandlers: {
    onError: onErrorHandler,
    onNoMatch: onNoMatchHandler,
  },
  setSessionIdCookie: setSessionCookie,
  clearSessionCookie,
};

export default controller;
```

</details>
