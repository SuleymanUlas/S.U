import express from 'express';
import createIframe from 'node-iframe';
/**     '""""""""""""""""""""'       

*?        e═-a «     ─▄ww⌐  ─~        
*?
*?       ▓',  ²M      ▐''[   ]▌       
*?
*?       `*''╖µ       ▐''[   ]▌       
*?
*?           ";'┐     ▐,'[   ]▌       
*?
*?       ▌µ   ▐,  xk  └▌,╕  ,#        
*?
*?       `        `      `            
*?
        `````````````````````  
 */
/**
 *
 *@example Hello This is a S.U
 *@export
 */
export function SUOpen() {
        /**
         * TODO: Create a folder and used a iframe and ide 
         * */
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
        app.use(createIframe);
        app.get('/iframe', (req, res) => {
                res.createIframe({
                        url: req.query.url,
                        baseHref: req.query.baseHref,
                        config: {
                                cors: { script: true },
                        },
                });
                const modifiedIframeContent = ` 
                /**
                *? Html content
                */
                
                                              `;
                res.send(modifiedIframeContent);
        });
}