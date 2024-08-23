import fs, { mkdir } from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import puppeteer from 'puppeteer';
import { createServer } from 'https';
import express from 'express';
import { WebSocket,WebSocketServer } from 'ws';
import { S_U_A } from './Acount.server.mjs';
import { File_EXP } from './Acount.file.mjs';
let stopIp = '0'; let serachip = '';
const options = {
    key: fs.readFileSync('./-package/private.key'),
    cert: fs.readFileSync('./-package/certificate.crt'),
    ca: fs.readFileSync('./-package/ca_bundle.crt')
};
 function SU_Security() {
            if (!fs.existsSync(`./file`)) { fs.mkdirSync(`./file`); console.log(`\x1b[32mFolder created successfully!\x1b[0m`); }
            if (!fs.existsSync(`./Locked`)) { fs.mkdirSync(`./Locked`); console.log(`\x1b[32mFolder created successfully!\x1b[0m`); }
            if (!fs.existsSync(`./acount`)) { fs.mkdirSync(`./acount`); console.log(`\x1b[32mFolder "acount" created successfully!\x1b[0m`); }
            if (!fs.existsSync(`./SQL`)) { fs.mkdirSync(`./SQL`); console.log(`\x1b[32mFolder "SQL" created successfully!\x1b[0m`); }
            if (!fs.existsSync(`./profil`)) { fs.mkdirSync(`./profil`); console.log(`\x1b[32mFolder "profil" created successfully!\x1b[0m`); }
            if (!fs.existsSync(`./waited_acount`)) { fs.mkdirSync(`./waited_acount`); console.log(`\x1b[32mFolder "waited_acount" created successfully!\x1b[0m`); }
    } SU_Security();
const allowedOrigin = 'server.super-user.xyz';
const app = express();
app.use(async (req, res, next) => {
    const restrictedPaths2 = ['/profil/'];
    const rejectPaths = [
        '/node.mjs', '/package.json', '/package-lock.json', '/SQL/', '/acount/',
        '/-pakage/', '/Help/', '/node_modules/', '/Locked/', '/waited_acount/', '/S.U/'
    ];
    const normalizedUrl = req.url.replace(/\/{2,}/g, '/');
    const origin = req.headers.host;
    const fileFetchRegex = /\/file\/([^/]+)\/([^/]+)\/(.+)/;
    const controlBase = req.originalUrl.replace(/\/{2,}/g, '/');
    const match = fileFetchRegex.exec(controlBase);
    if (match) {
        const [_, id, email] = match;
        const lockedFilePath = `./Locked/${email}.lock`;

        try {
            await fsp.access(lockedFilePath); 
            if (!res.headersSent) {
                return res.status(403).send('Access Denied');
            }
        } catch (err) {
            const sqlFilePath = `./SQL/${email}`;
            const Aceptable = ['gmail.com', 'hotmail.com', 'outlook.com'];
            let trueaddress = -1;

            for (let i = 0; i < Aceptable.length; i++) {
                try {
                    await fsp.readFile(`./SQL/${email}@${Aceptable[i]}.su`, 'utf8');
                    trueaddress = i;
                    break;
                } catch (err) {
                    // Continue to next iteration
                }
            }

            if (trueaddress !== -1) {
                try {
                    const data = await fsp.readFile(`${sqlFilePath}@${Aceptable[trueaddress]}.su`, 'utf8');
                    const accountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/;
                    const accountMatch = accountRegex.exec(data);

                    if (accountMatch) {
                        const [_, name, email, password, ids] = accountMatch;
                        if (ids === id) {
                            res.header('Access-Control-Allow-Origin', allowedOrigin);
                            res.header('Access-Control-Allow-Methods', 'GET');
                            res.header('Access-Control-Allow-Headers', 'Content-Type');
                            return next();
                        } else {
                            await fsp.writeFile(lockedFilePath, '');
                            if (!res.headersSent) {
                                return res.status(403).send('Access Denied');
                            }
                        }
                    } else {
                        if (!res.headersSent) {
                            return res.status(403).send('Access Denied');
                        }
                    }
                } catch (err) {
                    console.error(err);
                    if (!res.headersSent) {
                        return res.status(500).send('Server Error');
                    }
                }
            } else {
                if (!res.headersSent) {
                    return res.status(403).send('Access Denied');
                }
            }
        }
    } else {
        for (const path of restrictedPaths2) {
            if (normalizedUrl.startsWith(path)) {
                if (origin === allowedOrigin) {
                    if (!fileFetchRegex.test(normalizedUrl)) {
                        res.header('Access-Control-Allow-Origin', allowedOrigin);
                        res.header('Access-Control-Allow-Methods', 'GET');
                        res.header('Access-Control-Allow-Headers', 'Content-Type');
                        return next();
                    }
                } else {
                    if (!res.headersSent) {
                        return res.status(403).send('Access Denied');
                    }
                }
            }
        }

        for (const pathR of rejectPaths) {
            if (normalizedUrl.startsWith(pathR)) {
                return res.status(403).send('Access Denied');
            }
        }
        next();
    }
});

app.use(express.static(path.resolve('./')));
const maxRequestsPerInterval = 100; const intervalInMilliseconds = 30000; let requestCount = 0;
setInterval(() => { if (requestCount > maxRequestsPerInterval) { console.log('Possible DDoS attack detected. Taking action...'); SUSEC(true) } requestCount = 0; }, intervalInMilliseconds);
const server = createServer(options,app, (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket Server is Running');

});
const wss = new WebSocketServer({ noServer: true });
function SUSEC(power) {
    if (power) {
        wss.close();
        stopIp = serachip;
        setTimeout(() => {
            ServerOpen();
        }, 3000);
    }
}
function ServerOpen() {
    if (stopIp != serachip) {
        wss.on('connection', function connection(ws, req) {
            serachip = req.socket.remoteAddress;
            console.log(serachip); requestCount++
            console.log('\x1b[32mClient connected\x1b[0m');
            ws.send('%CONTROL%');

            ws.on('message', function incoming(message) {
                console.log('\x1b[33mSystem starting\x1b[0m');
                try {
                    message = JSON.parse(message);
                  File_EXP(message);
                }
                catch (err) {
                  S_U_A(message);
                }
            });
        });
    }
    
} ServerOpen();
export function sendMessageToClients(message) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}
server.on('upgrade', (request, socket, head) => {
    if (request.headers.upgrade === 'websocket') {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});
server.listen(443, () => {
    console.log(`\x1b[36mServer is runing...\x1b[0m`);
});
