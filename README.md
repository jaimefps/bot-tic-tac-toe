# Demo chatgpt app

Small repo to play with the ChatGPT API. The bot can play tic-tac-toe, but never wins.

<img width="206" alt="Screenshot 2023-03-28 at 5 28 28 PM" src="https://user-images.githubusercontent.com/19941627/228400857-0a20b869-62b6-4e21-8a74-150283a8d845.png">

## Start local development

**IMPORTANT**: Get your own chatgpt API key and create a secrets directory with an index file innside the server:

```
// @ server/secrets/index.ts

export const secrets = {
  openai: {
    org: "org-id-here",
    key: "gpt-api-key-here",
  },
}
```

From the root of the project, this command starts all dev servers in parallel:

```
$ yarn dev
```

Development setup is fully functional when the terminal displays:

```
🟢 Server: http://localhost:4000/
```

The web client can be opened at:

```
➜  Local:   http://127.0.0.1:5173/
```
