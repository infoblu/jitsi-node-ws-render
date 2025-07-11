# Jitsi Control Server (WebSocket)

Questo è un semplice WebSocket server Node.js per controllare stanze Jitsi da una dashboard admin.

## Come funziona

- Gli utenti e l'amministratore si connettono via WebSocket.
- I comandi vengono inviati dall'amministratore e ricevuti dai client per abilitare/disabilitare microfono e webcam.

## Deploy su Render.com

1. Fai il push su GitHub
2. Vai su [https://render.com](https://render.com)
3. Crea un nuovo Web Service
4. Imposta:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Porta: `process.env.PORT` (Render la assegna automaticamente)

## WebSocket URL

Usa `wss://<tuo-progetto>.onrender.com` nei tuoi client HTML.
