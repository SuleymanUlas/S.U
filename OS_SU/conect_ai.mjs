import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import SpellChecker from 'spellchecker';
import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import { createServer } from 'http';
import express from 'express';
import { WebSocketServer } from 'ws';
import hljs from 'highlight.js';
import jaccard, { jaccardSimilarity } from 'jaccard-similarity-sentences';
import punycode from 'punycode.js';
const maxRequestsPerInterval = 100; const intervalInMilliseconds = 30000; let requestCount = 0; let DDoS = false;
setInterval(() => { if (requestCount > maxRequestsPerInterval) { console.log('Possible DDoS attack detected. Taking action...'); DDoS = true; } requestCount = 0; }, intervalInMilliseconds);
const server = createServer((req, res) => {
    requestCount = requestCount + 1;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket Server is Running');
});
function deleteOldFiles(folderPath, thresholdDays) {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        const fileAgeInMs = Date.now() - stats.mtime.getTime();
        const fileAgeInDays = fileAgeInMs / (1000 * 60 * 60 * 24);

        if (fileAgeInDays > thresholdDays) {
            fs.unlinkSync(filePath);
            console.log(`Deleted ${file} (${fileAgeInDays.toFixed(2)} days old).`);
        }
    });
}
const folderPath = './Locked';
const thresholdDays = 3;
deleteOldFiles(folderPath, thresholdDays);
const wss = new WebSocketServer({ server });
AnotherFile(); ProfilImage(); SU_Security();
function SU_Security() {
    function Return() {
        if (!fs.existsSync(`./User`)) { fs.mkdirSync(`./User`); console.log(`\x1b[32mFolder "User" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./uploads`)) { fs.mkdirSync(`./uploads`); console.log(`\x1b[32mFolder "uploads" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./acount`)) { fs.mkdirSync(`./acount`); console.log(`\x1b[32mFolder "acount" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./SQL`)) { fs.mkdirSync(`./SQL`); console.log(`\x1b[32mFolder "SQL" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./profil`)) { fs.mkdirSync(`./profil`); console.log(`\x1b[32mFolder "profil" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./waited_acount`)) { fs.mkdirSync(`./waited_acount`); console.log(`\x1b[32mFolder "waited_acount" created successfully!\x1b[0m`); }
        let filename = [];
        function getFiles(dir) { const files = fs.readdirSync(dir); return files.map(file => { filename.push(file) }); } getFiles('../S.U')
        let flength = filename.length;
        let secure = [
            'acount', 'conect_ai.mjs', 'node_modules', 'package-lock.json', 'package.json', 'profil', 'SQL', 'uploads', 'User', 'waited_acount'
        ]; let secures = secure.toString();
        function Delete(pathD) { try { fs.unlink(`./${pathD}`, (err) => { if (err) { } else { console.log(`\x1b[31mVirus deleted! Virus:${pathD}\x1b[0m`); } }); } catch (err) { console.log(`\x1b[31mVirus not Deleted! Virus:${pathD} ==> ${err}\x1b[0m`); } }
        for (let i = 0; i < flength; i++) { if (secures.includes(filename[i])) { } else { Delete(filename[i]) } } setTimeout(() => { filename = []; Return(); }, 3000);
    } Return();
}
function ProfilImage() {
    const app = express();
    app.use(express.static('./profil'));
    app.listen(3002, () => { console.log(`\x1b[36mProfil Image: OK!\x1b[0m`); });
}
function AnotherFile() {
    const app = express();
    app.use(express.static('./uploads'));
    app.listen(3001, () => { console.log(`\x1b[36mFile: OK!\x1b[0m`) });
}
wss.on('connection', function connection(ws) {
    console.log('\x1b[32mClient connected\x1b[0m');
    ws.on('message', function incoming(message) {
        console.log('\x1b[33mSystem starting\x1b[0m');
        if (DDoS == true) {
            SU_Security()
        }
        try {
            message = JSON.parse(message);
            /** 
             * TODO:File Providers*/
            if (message.emailtxt && message.fileContent && message.fileExtension) {
                const fileBuffer = Buffer.from(message.fileContent, 'base64'); const fileExtension = message.fileExtension; const emailadress = message.emailtxt;
                ws.send('Wait:20000');
                setTimeout(() => {
                    let leternum = 0;
                    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; leternum = Math.floor(Math.random() * 26); let oneL = letter.charAt(leternum); let one = Math.floor(Math.random() * 10) + 1;
                    let two = Math.floor(Math.random() * 10) + 1; let three = Math.floor(Math.random() * 10) + 1; let four = Math.floor(Math.random() * 10) + 1; let five = Math.floor(Math.random() * 10) + 1;
                    const filenames = `${oneL}-${one}${two}${three}${four}${five}.`;
                    const fileName = filenames + fileExtension;
                    fs.writeFile(`./uploads/${filenames}.${fileExtension}`, fileBuffer, (err) => {
                        if (err) { const query = `Info?:The file could not be processed+/+Color:red+`; ws.send(query); }
                        else {
                            if (fileExtension.includes('png') || fileExtension.includes('jpg') || fileExtension.includes('jpeg') || fileExtension.includes('gif')) {
                                /** 
                                 * ?Image enhancement tools*/
                                const url = `http://localhost:3001/${fileName}`;
                                ws.send('Image:' + url);
                                /**  
                                * ? S.U function*/
                            }
                            else if (fileExtension.includes('mp4') || fileExtension.includes('avi') || fileExtension.includes('webm')) {
                                /** 
                                * ?Video enhancement tools*/
                                const url = `http://localhost:3001/${fileName}`;
                                ws.send('Video:' + url);
                                /**  
                                * ? S.U function*/
                            }
                            else if (fileExtension.includes('pdf')) {
                                /** 
                                * ?Pdf enhancement tools*/
                                const url = `http://localhost:3001/${fileName}`;
                                ws.send('PDF:' + url);
                                /**  
                                * ? S.U function*/
                            }
                            else { const query = `Info?:Acceptable file extensions:[Image:png,jpg,jpeg,gif Video:mp4,avi,webm]+/+Color:yellow+`; ws.send(query); }
                        }
                    });
                    setTimeout(() => { fs.unlink(`${emailadress}/${fileName}`, (err) => { if (err) { console.error('Error deleting file:', err); } else { } }); }, 60000);
                }, 2000);
            }
        }
        catch (err) {
            message = message.toString();
            let sign = ''; sign = message; const signupRegex = /S\((.+)\)U/g;
            const complateRegex = /%4\?4%Code:(.+)%4\?4%Email:(.+)%4\?4%/g;
            const loginRegex = /\/Email:([^?]+)\?Password:(.+)Finit%/g;
            const idRegex = /!ID:([^!]+)!Email:([^!]+)!/g;
            const lockRegex = /!Lock{([^}]+)}/g;
            const helpRegex = /\(help-([^-]+)-help\)/g;
            const recoveryRegex = /\(Email:(.+)Password:(.+)Code:(.+)\)/g;
            /** 
             * ?Acount area*/
            if (signupRegex.test(sign)) {
                const nameRegex = /Name:([^+]+)\+Email:/g; const emailRegex = /Email:([^+]+)\+Password:/g; const passwordRegex = /Password:([^+]+)\+Profile:/g; const profileRegex = /Profile:(.+)\)Ulas/g;
                let name = ''; let email = ''; let password = ''; let profile = ''; let letter = ''; let leternum = 0;
                letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; leternum = Math.floor(Math.random() * 26); let oneL = letter.charAt(leternum); let one = Math.floor(Math.random() * 10) + 1;
                let two = Math.floor(Math.random() * 10) + 1; let three = Math.floor(Math.random() * 10) + 1; let four = Math.floor(Math.random() * 10) + 1; let five = Math.floor(Math.random() * 10) + 1;
                const code = `${oneL}-${one}${two}${three}${four}${five}`;
                sign = sign.replace(nameRegex, (match, names) => { name = names; return match; });
                sign = sign.replace(emailRegex, (match, emails) => { email = emails; return match; });
                sign = sign.replace(passwordRegex, (match, passwords) => { password = passwords; return match; });
                sign = sign.replace(profileRegex, (match, profiles) => { profile = profiles; return match; });
                let ok = email.trim();
                function random() {
                    let result = '';
                    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    result += letters.charAt(Math.floor(Math.random() * 26));
                    for (let i = 0; i < 19; i++) {
                        result += Math.floor(Math.random() * 10);
                    }
                    result += letters.charAt(Math.floor(Math.random() * 26));
                    return result;
                }
                if (ok) {
                    let text = `Name:${name}%+/Email:${email}%+/Password:${password}%+/Id:${random()}%+/`;
                    fs.writeFile(`waited_acount/${code}.txt`, text, (err) => { if (err) { console.warn(err); } });
                    const file = Buffer.from(profile, 'base64');
                    fs.writeFile(`profil/${email}.png`, file, (err) => { if (err) { console.warn('Profil picture not saved'); } });
                }
            }
            else if (complateRegex.test(sign)) {
                let code = ''; let email = '';
                const codeRegex = /%4\?4%Code:(.+)%4\?4%Email/g; const emailRegex = /%4\?4%Email:(.+)%4\?4%/g;
                sign = sign.replace(codeRegex, (match, one) => { code = one; return match; });
                sign = sign.replace(emailRegex, (match, two) => { email = two; return match; });
                let names = ''; let password = ''; let emails = ''; let Id = '';
                fs.readFile(`waited_acount/${code}.txt`, 'utf8', (err, data) => {
                    if (err) { let quick = 'Wrong code!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); }
                    else {
                        const nameRegex = /Name:(.+)\%\+\/Email/g;
                        data = data.replace(nameRegex, (match, namess) => { names = namess.trim(); return match; });
                        const emailRegex = /Email:(.+)\%\+\/Password/g;
                        data = data.replace(emailRegex, (match, one) => { emails = one.trim(); return match; });
                        const passwordRegex = /Password:(.+)\%\+\/Id/g;
                        data = data.replace(passwordRegex, (match, two) => { password = two.trim(); return match; });
                        const IdRegex = /Id:(.+)\%\+\//g;
                        data = data.replace(IdRegex, (match, two) => { Id = two.trim(); return match; });
                        if (email == emails) {
                            fs.readFile(`./Locked/${emails}.lock`, 'utf8', (err, data) => {
                                if (err) {
                                    if (names) {
                                        if (password) {
                                            if (!fs.existsSync(`./SQL/${email}.su`)) {
                                                fs.writeFile(`./SQL/${email}.su`, `Name:⁂${names}⁂Email:⁂${email}⁂Password:⁂${password}⁂Id:⁂${Id}⁂`, (err) => { if (err) { let quick = 'Please retry...'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); } });
                                                ws.send('Wait:10000'); const query = `SET(%Email:${email}/Name:${names}/Id:${Id}%)VALUES`; ws.send(query);
                                            }
                                            else {
                                                let quick = 'E-mail used!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                            }
                                            fs.unlink(`waited_acount/${code}.txt`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                                        }
                                    }
                                }
                                else { let quick = 'Account closed for 3 days!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); }
                            });
                        }
                    }
                });
            }
            else if (loginRegex.test(sign)) {
                let email = ''; let password = '';
                const emailRegex = /\/Email:([^?]+)\?Password:/g; const passwordRegex = /\?Password:(.+)Finit%/g;
                sign = sign.replace(emailRegex, (match, emails) => { email = emails; return match; });
                sign = sign.replace(passwordRegex, (match, passwords) => { password = passwords; return match; });
                ws.send(`Info?:Please wait+/+Color:green+`);
                fs.readFile(`./SQL/${email}.su`, 'utf8', (err, data) => {
                    if (err) {
                        let quick = 'Email not found!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                    }
                    else {
                        const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
                        data.replace(acountRegex, (match, Nam, Ema, Pass, Id) => {
                            fs.readFile(`./Locked/${Ema}.lock`, 'utf8', (err, data) => {
                                if (err) {
                                    if (match) {
                                        if (password == Pass) {
                                            let quick = 'Welcome'; let color = 'green'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); let log = `SET(%Email:${email}/Name:${Nam}/Id:${Id}%)VALUE`; ws.send(log);
                                        }
                                        else {
                                            let quick = 'Wrong password'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                        }
                                    }
                                    else {
                                        let quick = 'Acount is broken!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                    }
                                }
                            });
                        });
                    }
                });
            }
            else if (sign.startsWith('Save:')) {
                let email = ''; let child = '';
                const emailRegex = /Email:([^+]+)\+/g; const childRegex = /Child:(.+)Finaly/g;
                sign = sign.replace(emailRegex, (match, emails) => { email = emails; });
                sign = sign.replace(childRegex, (match, childs) => { child = childs; });
                fs.writeFile(`acount/${email}.txt`, child, (err) => { if (err) { ws.send(`Info?:Error!Please retry+/+Color:red+`) } });
            }
            else if (sign.startsWith('EmailLoader:')) {
                let email = sign.slice(12);
                fs.readFile(`acount/${email}.txt`, 'utf8', (err, data) => {
                    if (err) { }
                    else { if (data) { ws.send(`Data:${data}`); } }
                });
            }
            else if (idRegex.test(sign)) {
                sign = sign.replace(idRegex, (match, ids, email) => {
                    if (id == '') { let log = `SET(%Email:null/Name:null/Id:null%)VALUE`; ws.send(log); }
                    fs.readFile(`SQL/${email}.su`, 'utf8', (err, data) => {
                        if (err) { }
                        else {
                            const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
                            data.replace(acountRegex, (match, Nam, Ema, Pass, id) => {
                                if (match) {
                                    if (ids == id) { }
                                    else {
                                        let log = `SET(%Email:null/Name:null/Id:null%)VALUE`; ws.send(log);
                                    }
                                }
                                else {
                                    let quick = 'Acount is broken!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                }
                            });
                        }
                    });
                });
            }
            else if (lockRegex.test(sign)) {
                sign = sign.replace(lockRegex, (match, email) => {
                    fs.writeFile(`./Locked/${email}.lock`, '', (err) => {
                        if (err) { ws.send(`Info?:Error!Please retry+/+Color:red+`) }
                    });
                });
            }
            else if (helpRegex.test(sign)) {
                sign = sign.replace(helpRegex, (match, email) => {
                    fs.readFile(`./Locked/${email}.lock`, 'utf8', (err, data) => {
                        if (err) {
                            let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; let leternum = Math.floor(Math.random() * 26); let oneL = letter.charAt(leternum); let one = Math.floor(Math.random() * 10) + 1;
                            let two = Math.floor(Math.random() * 10) + 1; let three = Math.floor(Math.random() * 10) + 1; let four = Math.floor(Math.random() * 10) + 1; let five = Math.floor(Math.random() * 10) + 1;
                            const code = `${oneL}${one}${two}${three}${four}${five}`;
                            fs.readFile(`./SQL/${email}.su`, 'utf8', (err, data) => {
                                if (err) { let quick = 'Acount is broken!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query) }
                                else {
                                    fs.writeFile(`./Help/${code}.help`, data, (err) => {
                                        if (err) { ws.send(`Info?:Error!Please retry+/+Color:red+`) }
                                    });
                                }
                            });
                        }
                        else { let quick = 'Account closed for 3 days!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); }
                    });
                });
            }
            else if (recoveryRegex.test(sign)) {
                sign = sign.replace(recoveryRegex, (match, email, password, code) => {
                    fs.readFile(`./Locked/${email}.lock`, 'utf8', (err, data) => {
                        if (err) {
                            fs.readFile(`./Help/${code}.help`, 'utf8', (err, data) => {
                                if (err) { let quick = 'Wrong code'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); }
                                else {
                                    const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
                                    data.replace(acountRegex, (match, Nam, Ema, Pass, Id) => {
                                        if (email == Ema) {
                                            const newdata = `Name:⁂${Nam}⁂Email:⁂${Ema}⁂Password:⁂${password}⁂Id:⁂${Id}⁂`;
                                            fs.writeFile(`./SQL/${email}.su`, newdata, (err) => {
                                                if (err) { ws.send(`Info?:Error!Please retry+/+Color:red+`) }
                                                else {
                                                    fs.unlink(`./Help/${code}.help`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                                                    let quick = 'Password changed successfully!Now log in again'; let color = 'green'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                                    setTimeout(() => {
                                                        ws.send('%ACOUNT%');
                                                    }, 2000);
                                                }
                                            });
                                        }
                                        else {
                                            let quick = 'Wrong code'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                        }
                                    });
                                }
                            });
                        }
                        else { let quick = 'Account closed for 3 days!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); }
                    });
                });
            }
            /**  
             * ?Acount area */
            else {
                let Maxquery = 3; let DataSU = []; let returnedOrginal = '';
                const apiKey = 'AIzaSyDgIUU6T4PoqNrVy9FVtvs7W4VZDmxH1Bk'; const searchEngineId = 'f426500cb44ff4fc6';
                let autoquery = ''; message = message.slice(2); autoquery = message.replace(/\n/g, ''); let email = '';
                const emailRegex = /email\+([^+]+)\+txt/g; autoquery = autoquery.replace(emailRegex, (match, emailtxt) => { email = emailtxt; return ''; });
                setTimeout(() => { Asks(autoquery); }, 1000);
                const time = new Date; const year = time.getFullYear(); const month = time.getMonth() + 1; const day = time.getDay();
                const folderName = `./User/${email}/SuperUser`; let fileName = `./User/${email}/SuperUser/${year}_${month}_${day}/memory.sup`;
                if (!fs.existsSync(`./User/${email}`)) { fs.mkdirSync(`./User/${email}`); console.log(`\x1b[32mFolder "${email}" created successfully!\x1b[0m`); }
                if (!fs.existsSync(folderName)) { fs.mkdirSync(folderName); console.log(`\x1b[32mFolder "${folderName}" created successfully!\x1b[0m`); }
                else { console.log('\x1b[31mFolder is not createable or folder is exists.\x1b[0m'); };
                const currentDate = new Date(); const midnight = new Date(currentDate); midnight.setHours(24, 0, 0, 0);
                const nextDay = new Date(midnight.getTime() + 1000);
                function runAtMidnight() {
                    Maxquery = 3; const Folderdate = new Date; const folderSync = `./User/${email}/SuperUser/${Folderdate.getFullYear()}_${Folderdate.getMonth() + 1}_${Folderdate.getDay()}`;
                    if (!fs.existsSync(folderSync)) { fs.mkdirSync(folderSync); console.log(`\x1b[32mFolder "${folderSync}" created successfully!\x1b[0m`); }
                    fileName = `./User/${email}/SuperUser/${Folderdate.getFullYear()}_${Folderdate.getMonth() + 1}_${Folderdate.getDay()}/memory.sup`;
                } runAtMidnight();
                const timeUntilMidnight = nextDay.getTime() - currentDate.getTime(); setTimeout(runAtMidnight, timeUntilMidnight);
                const filename = [];
                function getFiles(dir) { const files = fs.readdirSync(dir); return files.map(file => { return { name: filename.push(path.parse(file).name) }; }); }
                getFiles(`./User/${email}/SuperUser`); let flength = filename.length;
                async function readData() {
                    try {
                        for (let i = 0; i < flength; i++) { const dataused = await fsp.readFile(`./User/${email}/SuperUser/${filename[i]}/memory.sup`, 'utf-8'); DataSU.push(dataused); }
                    } catch (err) { console.error(err); }
                } readData();
                function Asks(returned) {
                    returnedOrginal = returned;
                    let expressionOK = ''; let question = ''; let fix = ''; question = returned; let questionA = []; const isMisspelled = SpellChecker.isMisspelled(returned);
                    if (returned.startsWith('--notfix--')) { question = question.replace(/--notfix--/g, ''); auto(question) } else {
                        if (isMisspelled) {
                            const expression = question.split(" "); expression.forEach((expF) => { questionA.push(expF) }); const aLength = questionA.length;
                            for (let i = 0; i < aLength; i++) { if (SpellChecker.isMisspelled(questionA[i])) { fix = SpellChecker.getCorrectionsForMisspelling(questionA[i])[0]; } else { fix = questionA[i] } expressionOK = expressionOK + ' ' + fix } question = expressionOK;
                            console.log(`\x1b[32mFixed:${question}\x1b[0m`); let questionL = question.toLowerCase(); auto(questionL.slice(1).replace(/\s+/g, ' '));
                        } else { question = returned; let questionL = question.toLowerCase(); auto(questionL.replace(/\s+/g, ' ')); }
                    }
                    function auto(QueryAuto) {
                        const queryRegex = new RegExp(`Query:⁂${QueryAuto}⁂Reply:⁂([^⁂]+)⁂`, 'g');
                        fs.readFile(fileName, 'utf8', (err, dataEngineer) => {
                            if (err) { fs.writeFile(fileName, '', (error) => { if (error) { console.log('\x1b[31mMemory error!\x1b[0m'); } }) }
                            if (queryRegex.test(dataEngineer)) {
                                const matchedTexts = []; dataEngineer.replace(queryRegex, (match, replys) => { matchedTexts.push(replys); return match; });
                                const randomIndex = Math.floor(Math.random() * matchedTexts.length); const selectedText = matchedTexts[randomIndex]; Maxquery = Maxquery - 1;
                                if (Maxquery == 0) { } else { console.log(`\x1b[32m${selectedText}\x1b[0m`); ws.send(selectedText) }
                            }
                            else if (queryRegex.test(DataSU)) {
                                const matchedTexts = []; let DataS = DataSU.toString();
                                DataS.replace(queryRegex, (match, replys) => { matchedTexts.push(replys); return match; });
                                const randomIndex = Math.floor(Math.random() * matchedTexts.length); const selectedText = matchedTexts[randomIndex]; Maxquery = Maxquery - 1;
                                if (Maxquery == 0) { setTimeout(() => { }, 1800000); return ''; } else { console.log(`\x1b[32m${selectedText}\x1b[0m`); ws.send(selectedText) }
                            }
                            else if (QueryAuto) {
                                const SUlang = new SU_LANGUAGE; SUlang.SU_Dep(QueryAuto);
                            }
                        });
                    }
                }
                class USE {
                    Wikipedia(SearchW) {
                        setTimeout(() => {
                            const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${SearchW}`;
                            fetch(apiUrl)
                                .then(response => response.json())
                                .then(inf => {
                                    const shortDescription = inf.extract;
                                    const image = inf.originalimage.source;
                                    if (shortDescription) { const reply = new USE; reply.Reply(shortDescription, 'Wikipedia', image); }
                                    else { SearchW = ''; const reply = new USE; reply.Reply('', 'Wikipedia'); }
                                })
                                .catch(bug => { const reply = new USE; reply.Reply('', SearchW, 'Wikipedia'); });
                        }, 1000);
                    }
                    WikipediaALL(SearchWA) {
                        const apiUrl = `https://en.wikipedia.org/wiki/${SearchWA}`;
                        async function result() {
                            try {
                                const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage();
                                await page.goto(apiUrl, { waitUntil: 'domcontentloaded' }, { timeout: 0 });
                                const element = await page.$('#mw-content-text');
                                if (element) {
                                    const text = await element.getProperty('innerText');
                                    const textValue = await text.jsonValue(); const reply = new USE; reply.Reply(textValue, 'Wikipedia');
                                } else { const reply = new USE; reply.Reply('Not found!', SearchWA, 'Wikipedia') }
                            } catch (err) { console.log(err) }
                        } result();
                    }
                    Google(SearchG) {
                        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${SearchG}`;
                        fetch(url)
                            .then(response => response.json())
                            .then(data => {
                                var { items } = data; let text = [];
                                if (data && data.items && Array.isArray(data.items)) {
                                    let src = [];
                                    data.items.forEach(item => {
                                        if (item.pagemap && item.pagemap.cse_image && item.pagemap.cse_image.length > 0) {
                                            src.push(item.pagemap.cse_image[0].src);
                                        }
                                    });
                                    ws.send(`Image:${src[0]}`);
                                    async function Info() {
                                        try {
                                            const browser = await puppeteer.launch({ headless: 'new' });
                                            const page = await browser.newPage(); var length = 1;
                                            for (var i = 0; i < length; i++) {
                                                var link = items[i].link; await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 0 });
                                                page.setDefaultNavigationTimeout(0); const the = await page.$$eval('html', anchors => anchors.map(html => html.innerHTML));
                                                if (the) { text = await page.$$eval('html', anchors => anchors.map(html => html.innerText)); } else { Info(); }
                                                if (i + 1 == length) { const reply = new USE; reply.Reply(text.toString(), 'Google'); }
                                            } await browser.close();
                                        } catch (err) { console.log(err) }
                                    } Info();
                                }
                            });
                    }
                    File(SearchF) {
                        console.log(SearchF);
                        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${SearchF}`;
                        fetch(url)
                            .then(response => response.json())
                            .then(data => {
                                var { items } = data;
                                try {
                                    async function lettry() {
                                        const mimes = [{ ext: '3dm', desc: 'Rhino 3D Model' }, { ext: '3dmf', desc: '3D Metafile' }, { ext: 'a', desc: 'Static Library' }, { ext: 'aab', desc: 'Authorware Binary' }, { ext: 'aam', desc: 'Authorware Map' }, { ext: 'aas', desc: 'Authorware Segment File' }, { ext: 'abc', desc: 'ABC Music Notation' }, { ext: 'acgi', desc: 'AOL HTML Gateway Index' }, { ext: 'afl', desc: 'Autocad Font Library' }, { ext: 'ai', desc: 'Adobe Illustrator Artwork' }, { ext: 'aif', desc: 'Audio Interchange File Format' }, { ext: 'aifc', desc: 'Compressed Audio Interchange File' }, { ext: 'aiff', desc: 'Audio Interchange File Format' }, { ext: 'aim', desc: 'AOL Instant Messenger' }, { ext: 'ani', desc: 'Windows Animated Cursor' }, { ext: 'aos', desc: 'Add-On Software' }, { ext: 'aps', desc: 'MS Office Assistant Pack' }, { ext: 'arc', desc: 'Archive' }, { ext: 'arj', desc: 'Archive' }, { ext: 'art', desc: 'Graphics (PFS:First Publisher)' }, { ext: 'asf', desc: 'Advanced Streaming Format' }, { ext: 'asm', desc: 'Assembler Source Code' }, { ext: 'asp', desc: 'Active Server Page' }, { ext: 'asx', desc: 'Microsoft ASF Redirector' }, { ext: 'au', desc: 'Audio File' }, { ext: 'avi', desc: 'Audio Video Interleave' }, { ext: 'avs', desc: 'Animation' }, { ext: 'bat', desc: 'Batch File' }, { ext: 'bcpio', desc: 'Binary CPIO Archive' }, { ext: 'bin', desc: 'Binary File' }, { ext: 'bmp', desc: 'Bitmap Image' }, { ext: 'boo', desc: 'Bookmark' }, { ext: 'book', desc: 'Document' }, { ext: 'boz', desc: 'Bzip Compressed Archive' }, { ext: 'bsh', desc: 'Bash Shell Script' }, { ext: 'bz', desc: 'Bzip Archive' }, { ext: 'bz2', desc: 'Bzip2 Compressed Archive' }, { ext: 'c', desc: 'C Source File' }, { ext: 'c++', desc: 'C++ Source File' },
                                        { ext: 'cab', desc: 'Windows Cabinet File' }, { ext: 'cat', desc: 'Security Catalog' }, { ext: 'cc', desc: 'C++ Source File' }, { ext: 'cdf', desc: 'NetCDF File' }, { ext: 'cer', desc: 'Certificate File' }, { ext: 'chm', desc: 'Compiled HTML Help File' }, { ext: 'class', desc: 'Java Class File' }, { ext: 'cmd', desc: 'Command Script' }, { ext: 'cmx', desc: 'Corel Metafile Exchange Image' }, { ext: 'com', desc: 'MS-DOS Application' }, { ext: 'conf', desc: 'Configuration File' }, { ext: 'cpp', desc: 'C++ Source File' }, { ext: 'cpt', desc: 'Corel Photo-Paint File' }, { ext: 'crl', desc: 'Certificate Revocation List' }, { ext: 'crt', desc: 'Security Certificate' }, { ext: 'csh', desc: 'C Shell Script' }, { ext: 'css', desc: 'Cascading Style Sheet' }, { ext: 'csv', desc: 'Comma Separated Values File' }, { ext: 'cxx', desc: 'C++ Source File' }, { ext: 'dcr', desc: 'Shockwave Media File' }, { ext: 'deb', desc: 'Debian Software Package' }, { ext: 'der', desc: 'DER Certificate File' }, { ext: 'dib', desc: 'Device Independent Bitmap Image' }, { ext: 'diff', desc: 'Patch File' }, { ext: 'dir', desc: 'Dial-up Networking Export File' }, { ext: 'dl', desc: 'Download File' }, { ext: 'dll', desc: 'Dynamic Link Library' }, { ext: 'doc', desc: 'MS Word Document' }, { ext: 'dot', desc: 'MS Word Document Template' }, { ext: 'drw', desc: 'Drawing' }, { ext: 'dtd', desc: 'Document Type Definition File' }, { ext: 'dvi', desc: 'Device Independent File' }, { ext: 'dwf', desc: 'Drawing Web File' }, { ext: 'dwg', desc: 'AutoCAD Drawing Database File' }, { ext: 'dxf', desc: 'Drawing Exchange Format File' }, { ext: 'dxr', desc: 'Director Movie' }, { ext: 'el', desc: 'Emacs Lisp File' }, { ext: 'elc', desc: 'Emacs Compiled Lisp File' }, { ext: 'emf', desc: 'Enhanced Windows Metafile' }, { ext: 'eml', desc: 'Email Message' },
                                        { ext: 'ent', desc: 'SGML Entity' }, { ext: 'eps', desc: 'Encapsulated PostScript File' }, { ext: 'epsf', desc: 'Encapsulated PostScript File' }, { ext: 'epsi', desc: 'Encapsulated PostScript Interchange File' }, { ext: 'etx', desc: 'Structure Enhanced (SE) Text' }, { ext: 'exe', desc: 'Executable File' }, { ext: 'f', desc: 'Fortran Source File' }, { ext: 'f77', desc: 'Fortran 77 Source File' }, { ext: 'f90', desc: 'Fortran 90 Source File' }, { ext: 'fdf', desc: 'Adobe Acrobat Form Data Format' }, { ext: 'fif', desc: 'Fractal Image Format' }, { ext: 'fig', desc: 'Figure' }, { ext: 'fits', desc: 'Flexible Image Transport System' }, { ext: 'flac', desc: 'Free Lossless Audio Codec File' }, { ext: 'fli', desc: 'FLIC Animation' }, { ext: 'flo', desc: 'Micrografx Flowchart' }, { ext: 'flv', desc: 'Flash Video File' }, { ext: 'fmf', desc: 'Fax File' }, { ext: 'for', desc: 'Fortran Source File' }, { ext: 'frm', desc: 'Form' }, { ext: 'fpx', desc: 'FlashPix Bitmap Image' }, { ext: 'fvi', desc: 'AutoCAD Film File' }, { ext: 'g3', desc: 'Group 3 Fax Image' }, { ext: 'gif', desc: 'Graphical Interchange Format File' }, { ext: 'gl', desc: 'Animation File' }, { ext: 'gsd', desc: 'General Station Description File' }, { ext: 'gsm', desc: 'Global System for Mobile Audio File' },
                                        { ext: 'gsp', desc: 'Gaia Sky Project File' }, { ext: 'gss', desc: 'Grid Software Service File' }, { ext: 'gtar', desc: 'GNU Tar Archive' }, { ext: 'gz', desc: 'Gnu Zipped Archive' }, { ext: 'h', desc: 'C Header File' }, { ext: 'hdf', desc: 'Hierarchical Data Format File' }, { ext: 'help', desc: 'Help File' }, { ext: 'hgl', desc: 'HP Graphics Language File' }, { ext: 'hh', desc: 'C++ Header File' }, { ext: 'hlb', desc: 'Clip Gallery Download Package' }, { ext: 'hlp', desc: 'Windows Help File' }, { ext: 'hqx', desc: 'BinHex 4.0 Encoded File' }, { ext: 'hta', desc: 'HTML Application' }, { ext: 'htc', desc: 'HTML Component' }, { ext: 'htm', desc: 'Hypertext Markup Language File' }, { ext: 'html', desc: 'Hypertext Markup Language File' }, { ext: 'htmls', desc: 'HTML Source Code File' }, { ext: 'htt', desc: 'Hypertext Template File' }, { ext: 'htx', desc: 'HTML Extension' }, { ext: 'ice', desc: 'ICE File' }, { ext: 'ico', desc: 'Icon File' }, { ext: 'ics', desc: 'Calendar File' }, { ext: 'idc', desc: 'Internet Database Connector File' }, { ext: 'ief', desc: 'Image Exchange Format File' }, { ext: 'iefs', desc: 'Image Exchange File Format' }, { ext: 'iges', desc: 'Initial Graphics Exchange Specification' }, { ext: 'igs', desc: 'Indigo Renderer Scene File' }, { ext: 'ima', desc: 'Disk Image' }, { ext: 'imap', desc: 'IMAP Settings File' }, { ext: 'inf', desc: 'Setup Information File' }, { ext: 'ins', desc: 'Internet Communication Settings' }, { ext: 'ip', desc: 'IconPackager Theme File' }, { ext: 'iso', desc: 'Disc Image File' }, { ext: 'isp', desc: 'IIS Internet Service Provider Settings' }, { ext: 'ist', desc: 'IStream Script' },
                                        { ext: 'jam', desc: 'Jam STAPL File' }, { ext: 'jar', desc: 'Java Archive File' }, { ext: 'java', desc: 'Java Source File' }, { ext: 'jfif', desc: 'JPEG File Interchange Format' }, { ext: 'jpe', desc: 'JPEG File' }, { ext: 'jpeg', desc: 'JPEG Image' }, { ext: 'jpg', desc: 'JPEG Image' }, { ext: 'jps', desc: 'Stereo JPEG Image' }, { ext: 'js', desc: 'JavaScript File' }, { ext: 'json', desc: 'JavaScript Object Notation File' }, { ext: 'jtf', desc: 'JPEG Tagged Interchange Format' }, { ext: 'kar', desc: 'Karaoke MIDI File' }, { ext: 'ksh', desc: 'Korn Shell Script' }, { ext: 'latex', desc: 'LaTeX Document' }, { ext: 'lha', desc: 'LH ARC Archive' }, { ext: 'lhx', desc: 'Lighting Analysis for Revit File' }, { ext: 'log', desc: 'Log File' }, { ext: 'lsp', desc: 'LISP Program Source Code' }, { ext: 'lzh', desc: 'LHA Archive' }, { ext: 'm', desc: 'Objective-C Implementation File' }, { ext: 'm1v', desc: 'MPEG-1 Video File' }, { ext: 'm2v', desc: 'MPEG-2 Video' }, { ext: 'm3u', desc: 'Media Playlist File' }, { ext: 'm4a', desc: 'MPEG-4 Audio File' }, { ext: 'm4v', desc: 'iTunes Video File' }, { ext: 'man', desc: 'Unix Manual' }, { ext: 'mdb', desc: 'MS Access Database' }, { ext: 'mde', desc: 'MS Access Add-In' }, { ext: 'mdf', desc: 'Media Disc Image File' }, { ext: 'mdz', desc: 'Access Wizard Template' }, { ext: 'me', desc: 'Readme Text File' }, { ext: 'mid', desc: 'MIDI File' }, { ext: 'midi', desc: 'MIDI File' }, { ext: 'mif', desc: 'Maker Interchange Format' }, { ext: 'mime', desc: 'Multi-Purpose Internet Mail Extension' }, { ext: 'mjf', desc: 'AT&T MJPEG File' }, { ext: 'mjpg', desc: 'Motion JPEG File' }, { ext: 'mm', desc: 'Macro Media Flash Player File' }, { ext: 'mme', desc: 'MIDI Music' }, { ext: 'mod', desc: 'Music Module File' }, { ext: 'moov', desc: 'Apple QuickTime Movie' }, { ext: 'mov', desc: 'Apple QuickTime Movie' }, { ext: 'movie', desc: 'QuickTime Movie' }, { ext: 'mp2', desc: 'MPEG Layer II Compressed Audio File' }, { ext: 'mp3', desc: 'MP3 Audio File' }, { ext: 'mp4', desc: 'MPEG-4 Video File' }, { ext: 'mpa', desc: 'MPEG-2 Audio File' },
                                        { ext: 'mpd', desc: 'Access database of a macro' }, { ext: 'mpe', desc: 'MPEG Movie File' },
                                        { ext: 'mpeg', desc: 'MPEG Movie' }, { ext: 'mpg', desc: 'MPEG Video File' }, { ext: 'mpga', desc: 'MPEG Audio File' }, { ext: 'mpp', desc: 'Microsoft Project file' }, { ext: 'mps', desc: 'Mime Part file' }, { ext: 'mpp', desc: 'Microsoft Project File' }, { ext: 'mpt', desc: 'MPT File' }, { ext: 'mpv', desc: 'MPEG Elementary Stream Video File' }, { ext: 'mpv2', desc: 'MPEG-2 Video Stream' }, { ext: 'mpw', desc: 'Memopad Data' }, { ext: 'mpx', desc: 'Compiled FoxPro Menu' },
                                        { ext: 'msg', desc: 'Message File' }, { ext: 'msh', desc: 'Microsoft Shell File' }, { ext: 'msi', desc: 'Microsoft Installer Package' },
                                        { ext: 'msp', desc: 'Windows Installer Patch' }, { ext: 'mso', desc: 'Office Macro File' }, { ext: 'm3d', desc: 'Macro 3D Document' }, { ext: 'mso', desc: 'XML Macros' }, { ext: 'msu', desc: 'Microsoft Update Standalone Package' }, { ext: 'mvb', desc: 'Multimedia Viewer Book Source File' }, { ext: 'mv', desc: 'Movie File' }, { ext: 'mwf', desc: 'Windows Media Metafile' }, { ext: 'mws', desc: 'Maple Worksheet File' }, { ext: 'mxc', desc: 'Maus X Copy File' }, { ext: 'mxl', desc: 'Compressed MusicXML File' }, { ext: 'mxmf', desc: 'Mobile XMF Ringtone File' }, { ext: 'n3', desc: 'Nokia Phone Backup File' }, { ext: 'nb', desc: 'Mathematica Notebook File' }, { ext: 'nc', desc: 'Network Common Data Form File' }, { ext: 'ndb', desc: 'Alpha Five Database File' }, { ext: 'ndf', desc: 'SQL Server Secondary Database File' }, { ext: 'ndx', desc: 'dBASE Index File' }, { ext: 'nef', desc: 'Nikon Electronic Format RAW Image' }, { ext: 'nfo', desc: 'Text File' }, { ext: 'ng', desc: 'Chart File' }, { ext: 'ngc', desc: 'Compiled Simulation Model' }, { ext: 'nif', desc: 'Gamebryo Model File' }, { ext: 'nix', desc: 'Nix Package Manager Script' }, { ext: 'nsc', desc: 'Nero ShowTime File' }, { ext: 'nsf', desc: 'NES Sound Format File' }, { ext: 'nws', desc: 'Windows Live Mail Newsgroup Copy' }, { ext: 'o', desc: 'Object File' }, { ext: 'obj', desc: 'Wavefront 3D Object File' }, { ext: 'oda', desc: 'Office Document Architecture File' }, { ext: 'odb', desc: 'OpenDocument Database' }, { ext: 'odc', desc: 'OpenDocument Chart' }, { ext: 'odf', desc: 'Open Document Format' }, { ext: 'odg', desc: 'OpenDocument Graphic File' }, { ext: 'odi', desc: 'OpenDocument Image' }, { ext: 'odm', desc: 'OpenDocument Master Document' }, { ext: 'odp', desc: 'OpenDocument Presentation' }, { ext: 'ods', desc: 'OpenDocument Spreadsheet' }, { ext: 'odt', desc: 'OpenDocument Text Document' }, { ext: 'oga', desc: 'Ogg Vorbis Audio File' }, { ext: 'ogg', desc: 'Ogg Vorbis Audio File' }, { ext: 'ogv', desc: 'Ogg Video File' }, { ext: 'ogx', desc: 'Ogg Vorbis Multiplexed Media File' }, { ext: 'one', desc: 'OneNote Document' }, { ext: 'onepkg', desc: 'OneNote Package File' },
                                        { ext: 'onetoc2', desc: 'OneNote Table of Contents File' }, { ext: 'opf', desc: 'Open Packaging Format File' }, { ext: 'oprc', desc: 'Opera Web Browser Speed Dial' }, { ext: 'ora', desc: 'OpenRaster Image File' }, { ext: 'orf', desc: 'Olympus RAW File' }, { ext: 'otf', desc: 'OpenType Font' }, { ext: 'otg', desc: 'OpenDocument Graphic Template' }, { ext: 'oth', desc: 'OpenDocument HTML Document Template' }, { ext: 'otp', desc: 'OpenDocument Presentation Template' }, { ext: 'ots', desc: 'OpenDocument Spreadsheet Template' }, { ext: 'ott', desc: 'OpenDocument Document Template' }, { ext: 'ova', desc: 'Open Virtual Appliance' }, { ext: 'ovf', desc: 'Open Virtualization File' }, { ext: 'owl', desc: 'Web Ontology Language File' }, { ext: 'p10', desc: 'Certificate Request File' }, { ext: 'p12', desc: 'Personal Information Exchange File' }, { ext: 'p7b', desc: 'PKCS #7 Certificate File' }, { ext: 'p7c', desc: 'PKCS #7 Certificate File' }, { ext: 'p7m', desc: 'PKCS #7 Encrypted Message' }, { ext: 'p7r', desc: 'Certificate Request Response File' }, { ext: 'p7s', desc: 'PKCS #7 Digital Signature File' }, { ext: 'pac', desc: 'Proxy Auto-Configuration File' }, { ext: 'pas', desc: 'Pascal Source File' }, { ext: 'pat', desc: 'Pattern File' }, { ext: 'pbm', desc: 'Portable Bitmap Image' }, { ext: 'pcd', desc: 'Kodak Photo CD Image File' }, { ext: 'pcf', desc: 'Bitmap Font File' }, { ext: 'pcl', desc: 'Printer Command Language Document' }, { ext: 'pct', desc: 'Picture File' }, { ext: 'pcx', desc: 'Paintbrush Bitmap Image File' }, { ext: 'pdb', desc: 'Program Database' }, { ext: 'pdf', desc: 'Portable Document Format File' }, { ext: 'pfa', desc: 'PostScript Type 1 Font ASCII' }, { ext: 'pfb', desc: 'PostScript Type 1 Font Binary' }, { ext: 'pfm', desc: 'Printer Font Metrics File' }, { ext: 'pfx', desc: 'PKCS #12 Certificate File' }, { ext: 'pgm', desc: 'Portable Gray Map Image' }, { ext: 'pgp', desc: 'Pretty Good Privacy Public Key File' }, { ext: 'php', desc: 'PHP Source Code File' }, { ext: 'pict', desc: 'Picture File' }, { ext: 'pif', desc: 'Program Information File' }, { ext: 'pkg', desc: 'Mac OS X Installer Package' },
                                        { ext: 'pl', desc: 'Perl Script' }, { ext: 'plc', desc: 'PL/B Source File' }, { ext: 'plf', desc: 'AutoCAD Plotter Document File' }, { ext: 'pm', desc: 'Perl Module' }, { ext: 'pm4', desc: 'PageMaker 4 Document' }, { ext: 'pm5', desc: 'PageMaker 5.0 Document' }, { ext: 'png', desc: 'Portable Network Graphic' }, { ext: 'pnm', desc: 'Portable Any Map Image' }, { ext: 'pot', desc: 'PowerPoint Template' }, { ext: 'potx', desc: 'PowerPoint Open XML Presentation Template' }, { ext: 'ppa', desc: 'PowerPoint Add-in' }, { ext: 'ppam', desc: 'PowerPoint 2007 Add-In' }, { ext: 'ppm', desc: 'Portable Pixmap Image' }, { ext: 'pps', desc: 'PowerPoint Slide Show' }, { ext: 'ppsm', desc: 'PowerPoint 2007 Macro-Enabled Presentation' }, { ext: 'ppsx', desc: 'PowerPoint Open XML Slide Show' }, { ext: 'ppt', desc: 'PowerPoint Presentation' }, { ext: 'pptm', desc: 'PowerPoint 2007 Macro-Enabled Presentation' }, { ext: 'pptx', desc: 'PowerPoint Open XML Presentation' }, { ext: 'prc', desc: 'Mobipocket eBook File' }, { ext: 'prel', desc: 'Premiere Elements Project File' }, { ext: 'prf', desc: 'Outlook Profile File' }, { ext: 'prt', desc: 'Part File' }, { ext: 'ps', desc: 'PostScript File' }, { ext: 'psd', desc: 'Adobe Photoshop Document' }, { ext: 'psp', desc: 'PaintShop Pro Image File' }, { ext: 'pub', desc: 'Publisher Document' }, { ext: 'pvb', desc: '3D Home Architect Project Backup' }, { ext: 'pvl', desc: 'Instalit Library File' }, { ext: 'pvm', desc: 'Photo Video Manifest File' }, { ext: 'pwz', desc: 'PowerPoint Wizard File' }, { ext: 'py', desc: 'Python Script' }, { ext: 'pyc', desc: 'Python Compiled File' }, { ext: 'pyo', desc: 'Python Optimized Code' }, { ext: 'pyw', desc: 'Python GUI Script' }, { ext: 'qt', desc: 'Apple QuickTime Movie' }, { ext: 'qtm', desc: 'Apple QuickTime Movie' }, { ext: 'qtz', desc: 'Apple Quartz Composer File' }, { ext: 'qxd', desc: 'QuarkXPress Document' }, { ext: 'ra', desc: 'Real Audio File' }, { ext: 'ram', desc: 'Real Audio Metadata File' }, { ext: 'rar', desc: 'WinRAR Compressed Archive' }, { ext: 'ras', desc: 'Sun Raster Graphic' }, { ext: 'rat', desc: 'RATDVD Disk Image' }, { ext: 'rc', desc: 'Resource Script' },
                                        { ext: 'rdf', desc: 'Resource Description Framework File' }, { ext: 'rdo', desc: 'Real Draw Pro File' }, { ext: 'rec', desc: 'Data File' }, { ext: 'reg', desc: 'Registry Data File' }, { ext: 'rgb', desc: 'RGB Bitmap' }, { ext: 'rm', desc: 'Real Media File' }, { ext: 'rmi', desc: 'RMID MIDI File' }, { ext: 'rmp', desc: 'RealPlayer Plugin' }, { ext: 'rmvb', desc: 'RealMedia Variable Bit Rate File' }, { ext: 'rom', desc: 'N64 Game ROM File' }, { ext: 'rpm', desc: 'Red Hat Package Manager File' }, { ext: 'rss', desc: 'Rich Site Summary' }, { ext: 'rtf', desc: 'Rich Text Format File' }, { ext: 'rtx', desc: 'Rich Text Document' }, { ext: 'rv', desc: 'Real Video File' }, { ext: 'rvt', desc: 'Revit Project File' }, { ext: 's', desc: 'Assembly Source Code File' }, { ext: 's3m', desc: 'ScreamTracker 3 Module' }, { ext: 'sav', desc: 'Saved Game' }, { ext: 'sbf', desc: 'Swing Binary File' }, { ext: 'scm', desc: 'Scheme Source Code File' }, { ext: 'scr', desc: 'Windows Screensaver' }, { ext: 'script', desc: 'Generic Script File' }, { ext: 'sct', desc: 'Windows Scriptlet' }, { ext: 'sd2', desc: 'Sound Designer II File' }, { ext: 'sda', desc: 'StarOffice Drawing' }, { ext: 'sdc', desc: 'StarOffice Calc' }, { ext: 'sdd', desc: 'StarOffice Presentation' }, { ext: 'sdp', desc: 'Session Description Protocol File' }, { ext: 'sdr', desc: 'SmartDraw Drawing File' }, { ext: 'sds', desc: 'OpenOffice.org Chart' }, { ext: 'sdw', desc: 'StarOffice Writer Text Document' }, { ext: 'sea', desc: 'Self-Extracting Archive' }, { ext: 'set', desc: 'Settings File' }, { ext: 'sgf', desc: 'Smart Game Format File' }, { ext: 'sgl', desc: 'StarOffice Writer Master Document' }, { ext: 'sgml', desc: 'Standard Generalized Markup Language File' }, { ext: 'sh', desc: 'Bash Shell Script' }, { ext: 'sh3', desc: 'Presentation' }, { ext: 'shar', desc: 'Unix Shar Archive' }, { ext: 'shtml', desc: 'Server Side Include HTML File' }, { ext: 'sid', desc: 'SID Audio File' }, { ext: 'silo', desc: 'Mesh Data File' }, { ext: 'sit', desc: 'StuffIt Archive' }, { ext: 'skd', desc: 'SketchUp Backup Document' }, { ext: 'skp', desc: 'SketchUp Document' }, { ext: 'skt', desc: 'SketchUp Plugin' }, { ext: 'sl', desc: 'Source Library' }, { ext: 'smf', desc: 'Standard MIDI File' },
                                        { ext: 'smi', desc: 'Self-Mounting Disk Image' }, { ext: 'smil', desc: 'SMIL Presentation' }, { ext: 'snd', desc: 'Sound File' }, { ext: 'so', desc: 'Shared Library' }, { ext: 'spc', desc: 'Software Publisher Certificate File' }, { ext: 'spl', desc: 'Windows System File' }, { ext: 'sql', desc: 'Structured Query Language Data File' }, { ext: 'src', desc: 'Source Code' }, { ext: 'srt', desc: 'SubRip Subtitle File' }, { ext: 'ssf', desc: 'Structured Storage File' }, { ext: 'stc', desc: 'OpenOffice.org Presentation Template' }, { ext: 'std', desc: 'OpenOffice.org Drawing Template' }, { ext: 'sti', desc: 'StarOffice Presentation Template' }, { ext: 'stl', desc: 'Stereolithography File' }, { ext: 'stm', desc: 'Exchange Streaming Media File' }, { ext: 'stw', desc: 'StarOffice Document Template' }, { ext: 'sty', desc: 'LaTeX Style' }, { ext: 'sv4cpio', desc: 'System V Release 4 CPIO Archive' }, { ext: 'sv4crc', desc: 'System V Release 4 Checksum File' }, { ext: 'svg', desc: 'Scalable Vector Graphics File' }, { ext: 'svh', desc: 'SystemVerilog Source Code Header File' }, { ext: 'swf', desc: 'Shockwave Flash Movie' }, { ext: 'swfl', desc: 'Flash Source File' }, { ext: 'swt', desc: 'Flash Generator Template' }, { ext: 'sxc', desc: 'StarOffice Calc Spreadsheet' }, { ext: 'sxd', desc: 'StarOffice Drawing' }, { ext: 'sxg', desc: 'Apache OpenOffice Master Document' }, { ext: 'sxi', desc: 'StarOffice Impress Presentation' }, { ext: 'sxm', desc: 'StarMath Formula' }, { ext: 'sxw', desc: 'StarOffice Writer Document' }, { ext: 't', desc: 'Turing Source File' }, { ext: 'tar', desc: 'Consolidated Unix File Archive' }, { ext: 'taz', desc: 'Tar Zipped File' }, { ext: 'tbk', desc: 'ToolBook File' }, { ext: 'tcl', desc: 'Tcl Script' }, { ext: 'tex', desc: 'LaTeX Source Document' }, { ext: 'texi', desc: 'GNU Texinfo Document' }, { ext: 'texinfo', desc: 'GNU Texinfo Document' }, { ext: 'tgz', desc: 'Gzipped Tar File' }, { ext: 'thmx', desc: 'Office 2007 Theme File' }, { ext: 'tif', desc: 'Tagged Image File' }, { ext: 'tiff', desc: 'Tagged Image File Format' }, { ext: 'tk', desc: 'Toolkit Script File' }, { ext: 'tlz', desc: 'Tar LZMA Compressed File' }, { ext: 'tnef', desc: 'Transport Neutral Encapsulation Format' }, { ext: 'toc', desc: 'Table of Contents' },
                                        { ext: 'trm', desc: 'Terminal Settings' }, { ext: 'ts', desc: 'TypeScript File' }, { ext: 'tsv', desc: 'Tab Separated Values File' }, { ext: 'ttf', desc: 'TrueType Font' }, { ext: 'txt', desc: 'Plain Text File' }, { ext: 'u3d', desc: 'Universal 3D File' }, { ext: 'udeb', desc: 'Debian Package File' }, { ext: 'udf', desc: 'Universal Disk Format File' }, { ext: 'udl', desc: 'Microsoft Data Link' }, { ext: 'url', desc: 'Internet Shortcut' }, { ext: 'ustar', desc: 'Uniform Standard Tape Archive Format' }, { ext: 'vb', desc: 'VBScript File' }, { ext: 'vbe', desc: 'VBScript Encoded Script File' }, { ext: 'vbs', desc: 'VBScript File' }, { ext: 'vcd', desc: 'Virtual CD' }, { ext: 'vcf', desc: 'vCard File' }, { ext: 'vcs', desc: 'vCalendar Event File' }, { ext: 'vda', desc: 'Targa Bitmap Image File' }, { ext: 'vdi', desc: 'VirtualBox Virtual Disk Image' }, { ext: 'vdx', desc: 'Visio Drawing XML File' }, { ext: 'vob', desc: 'DVD Video Object File' }, { ext: 'voc', desc: 'Sound File' }, { ext: 'vor', desc: 'StarOffice Template' }, { ext: 'vox', desc: 'Vox Audio File' }, { ext: 'vss', desc: 'Visio Stencil' }, { ext: 'vst', desc: 'Visio Drawing Template' }, { ext: 'vsw', desc: 'Visio Workspace File' }, { ext: 'vxd', desc: 'Virtual Device Driver' }, { ext: 'wav', desc: 'WAVE Audio File' }, { ext: 'wb1', desc: 'Quattro Pro for Windows Spreadsheet' }, { ext: 'wb2', desc: 'Quattro Pro for Windows Spreadsheet' }, { ext: 'wb3', desc: 'Quattro Pro for Windows Spreadsheet' }, { ext: 'wbmp', desc: 'Wireless Bitmap Image' }, { ext: 'wcm', desc: 'Webex Saved Chat Session' }, { ext: 'wdb', desc: 'Microsoft Works Database' }, { ext: 'wdl', desc: 'Worldlabel.com Blank Label File' }, { ext: 'webarchive', desc: 'Safari Web Archive' }, { ext: 'webm', desc: 'WebM Video File' }, { ext: 'webp', desc: 'WebP Image' }, { ext: 'wgz', desc: 'WordGrid Puzzle File' }, { ext: 'wim', desc: 'Windows Imaging Format File' }, { ext: 'wk1', desc: 'Lotus Worksheet File' }, { ext: 'wk3', desc: 'Lotus 1-2-3 Spreadsheet' }, { ext: 'wk4', desc: 'Lotus 1-2-3 Spreadsheet' }, { ext: 'wks', desc: 'Works Spreadsheet' }, { ext: 'wlmp', desc: 'Windows Live Movie Maker Project File' }, { ext: 'wm', desc: 'Windows Media File' }, { ext: 'wma', desc: 'Windows Media Audio File' }, { ext: 'wmd', desc: 'Windows Media Download Package' }, { ext: 'wmf', desc: 'Windows Metafile' },
                                        { ext: 'wml', desc: 'Wireless Markup Language File' }, { ext: 'wmv', desc: 'Windows Media Video File' }, { ext: 'wmx', desc: 'Windows Media Redirector File' }, { ext: 'wmz', desc: 'Windows Media Compressed Skin File' }, { ext: 'wp', desc: 'WordPerfect Document' }, { ext: 'wp4', desc: 'WordPerfect 4 Document' }, { ext: 'wp5', desc: 'WordPerfect 5 Document' }, { ext: 'wpd', desc: 'WordPerfect Document' }, { ext: 'wpg', desc: 'WordPerfect Graphic' }, { ext: 'wpl', desc: 'Windows Media Player Playlist' }, { ext: 'wps', desc: 'Microsoft Works Word Processor Document' }, { ext: 'wri', desc: 'Microsoft Write Document' }, { ext: 'wrz', desc: 'Compressed VRML File' }, { ext: 'wsc', desc: 'Windows Script Component' }, { ext: 'wsf', desc: 'Windows Script File' }, { ext: 'wsh', desc: 'Windows Script Host Settings File' }, { ext: 'wsz', desc: 'Winamp Classic Skin' }, { ext: 'wvx', desc: 'Windows Media Video Redirector' }, { ext: 'x', desc: 'DirectX Model File' }, { ext: 'x3f', desc: 'SIGMA X3F Camera RAW File' }, { ext: 'xaf', desc: '3ds Max XML Animation File' }, { ext: 'xbm', desc: 'X11 Bitmap Graphic' }, { ext: 'xcf', desc: 'GIMP Image File' }, { ext: 'xhtml', desc: 'Extensible Hypertext Markup Language File' }, { ext: 'xla', desc: 'Excel Add-In File' }, { ext: 'xlam', desc: 'Excel Open XML Macro-Enabled Add-In' }, { ext: 'xlb', desc: 'Excel Toolbar File' }, { ext: 'xlc', desc: 'Excel Chart' }, { ext: 'xld', desc: 'Excel Database File' }, { ext: 'xlk', desc: 'Excel Backup File' }, { ext: 'xll', desc: 'Excel Add-In File' }, { ext: 'xlm', desc: 'Excel Macro File' }, { ext: 'xls', desc: 'Excel Spreadsheet' }, { ext: 'xlsb', desc: 'Excel Binary Spreadsheet' }, { ext: 'xlsm', desc: 'Excel Macro-Enabled Workbook' }, { ext: 'xlsx', desc: 'Excel Open XML Spreadsheet' }, { ext: 'xlt', desc: 'Excel Template' }, { ext: 'xltm', desc: 'Excel Open XML Macro-Enabled Spreadsheet Template' }, { ext: 'xltx', desc: 'Excel Open XML Spreadsheet Template' }, { ext: 'xlw', desc: 'Excel Workbook' }, { ext: 'xm', desc: 'FastTracker 2 Extended Module' }, { ext: 'xmind', desc: 'XMind Workbook File' }, { ext: 'xml', desc: 'XML File' }, { ext: 'xmp', desc: 'Extensible Metadata Platform File' }, { ext: 'xmt', desc: 'Compressed Xbox Game Model' }, { ext: 'xof', desc: 'Reality Lab 3D Image File' }, { ext: 'xpm', desc: 'X11 Pixmap Graphic' },
                                        { ext: 'xps', desc: 'XML Paper Specification File' }, { ext: 'xsf', desc: 'Game Data File' }, { ext: 'xsn', desc: 'InfoPath Form Template' }, { ext: 'xspf', desc: 'XSPF Playlist File' },
                                        { ext: 'xul', desc: 'XUL File' }, { ext: 'xwd', desc: 'X Windows Dump Image' }, { ext: 'xyz', desc: 'Celestia Script File' }, { ext: 'xz', desc: 'XZ Compressed Archive' }, { ext: 'y', desc: 'Yacc Source File' }, { ext: 'yaml', desc: 'YAML Document' }, { ext: 'yml', desc: 'YAML Document' }, { ext: 'yps', desc: 'Yahoo! Messenger Data File' }, { ext: 'z', desc: 'Unix Compressed File' }, { ext: 'z64', desc: 'Nintendo 64 ROM File' }, { ext: 'zap', desc: 'ZoneAlarm Pro Data File' }, { ext: 'zip', desc: 'Zipped File' }, { ext: 'zipx', desc: 'Extended Zip File' }, { ext: 'zl9', desc: 'ZoneAlarm Mailsafe Renamed Zip File' }, { ext: 'zpl', desc: 'Zune Playlist' }, { ext: 'zpl2', desc: 'Zune Playlist' }, { ext: 'zz', desc: 'Zzip Compressed Archive' }];
                                        let allLinks = [];
                                        const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage(); var length = items.length;
                                        for (var i = 0; i < length; i++) {
                                            try { var link = items[i].link; await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 10000 }); page.setDefaultNavigationTimeout(0); const hrefsOnPage = await page.$$eval('a', anchors => anchors.map(a => a.href)); allLinks.push(...hrefsOnPage); } catch { }
                                        }
                                        let strLink = '';
                                        for (var i = 0; i < allLinks.length; i++) {
                                            strLink = allLinks[i];
                                            const linkRegex = /\.([a-zA-Z0-9]+)$/g;
                                            if (strLink.match(linkRegex)) {
                                                strLink.replace(linkRegex, (match, one) => {
                                                    for (var i = 0; i < mimes.length; i++) {
                                                        if (mimes[i].ext == one) {
                                                            const reply = `Filenodefetchxqx:304++${strLink}++${mimes[i].desc}`;
                                                            const reply2 = new USE;
                                                            setTimeout(() => {
                                                                reply2.Reply(reply, 'File');
                                                            }, 500);
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                        await browser.close();
                                    } lettry();
                                } catch { }
                            });
                    }
                    CodeModifier(code) {

                    }
                    Youtube(SearchY) {

                    }
                    ImageTool(ImageData) {

                    }
                    PDFTool(PDFData) {

                    }
                    VideoTool(VideoData) {

                    }
                    Remember(alarms, note) {
                        if (note) {
                            setTimeout(() => {
                            }, alarms);
                        }
                    }
                    Weather(from, time) {
                        async function wheater() {
                            let link = `https://www.google.com/search?q=${from}weather`;
                            const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage();
                            await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 0 }); await page.waitForNavigation();
                            const element = await page.$('#wob_wc'); const text = await element.getProperty('innerText');
                            const textValue = await text.jsonValue(); const reply = new USE; reply.Reply(textValue, 'Weather');
                        } wheater();
                    }
                    Reply(value, where, add) {
                        if (value) {
                            if (add) { ws.send(`Image:${add}`); ws.send(value.replace('\n', '⌋')) }
                            else { ws.send(value) }
                        }
                        else {
                            const google = new USE; google.Google(where); google.File(where);
                        }
                    }
                    ThisName() {
                        return 'SuperUser prototype v 1.0.3';
                    }
                }
                class SU_LANGUAGE {
                    constructor(a, b, c, d) {
                        this.a = a; this.b = b; this.c = c; this.d = d;
                        if (this.a == 'lop') {
                            ws.send(this.d);
                        }
                    }
                    SU_Dep(s) {
                        let ss = ''; ss = s.toLowerCase();
                        const dataRegex = new RegExp(`Query:⁂([^⁂]+)⁂Reply:⁂([^⁂]+)⁂`, 'g');
                        let maxscore = 0; let I = 0; let DataParse = []; let DataString = DataSU.toString(); DataString.replace(dataRegex, (match, one, two) => { DataParse.push(match) });
                        function similarty(value, othervalue, index) { if (jaccard.jaccardSimilarity(value, othervalue) >= maxscore) { maxscore = jaccard.jaccardSimilarity(value, othervalue); I = index; console.log(DataParse[I]) } } const length = DataParse.length;
                        for (let i = 0; i < length; i++) {
                            setTimeout(() => {
                                similarty(ss, DataParse[i].replace(dataRegex, (match, query, reply) => { return query; }), i); if (length - 1 == i) {
                                    DataParse[I].replace(dataRegex, (match, query, reply) => {
                                        let querystring = ''; querystring = query; let replystring = ''; replystring = reply;
                                        if (replystring === '[Wiki(f)]') {
                                            const wiki = new USE(); wiki.Wikipedia(ss); wiki.File(ss);
                                            console.log(ss)
                                        }
                                        else {
                                            new SU_LANGUAGE('lop', '', '', reply);
                                        }
                                    });
                                }
                            }, 1000);
                        }
                        function Search() { }
                    }
                }
            }
        }
    });
});
server.listen(3000, () => {
    console.log(`\x1b[36mServer is runing...\x1b[0m`);
});
/* let question = 'What is';let question2 = 'How can'; if (0.8 <= similarty(ss, DataSU[i].replace(dataRegex, (match, query, reply) => { returnR = reply; return query; }))) { console.log(`\x1b[36m${returnR}\x1b[0m`); ws.send(returnR) }
 function similarty(value, othervalue) { return jaccard.jaccardSimilarity(value, othervalue); }
 if (0.4 < similarty(ss,question)) {
 let qwer = ss.split(" ");let arayS = [];qwer.forEach((call) => { arayS.push(call) }); const length = arayS.length;let control = true;let reply = '';
 function fastReply() { if (reply == 'Reply:Not found!===>Wikipedia') { setTimeout(() => { fastReply(); }, 1000) } else if (reply) { console.log(`\x1b[36m${reply}\x1b[0m`); Query(); } else { setTimeout(() => { fastReply(); }, 1000) }  } fastReply();
 for (let i = ''; i < length; i++) { const wiki = new USE; wiki.Wikipedia(arayS[i]); async function S_return() { if (a2 == 'Not found!') {setTimeout(() => { S_return(); }, 1000)} else if (a2) { reply = `Reply:${a2}===>${b2}` } else { setTimeout(() => { S_return() }, 1000) } } S_return(); }
 }*/

//     const apiKey = 'AIzaSyDgIUU6T4PoqNrVy9FVtvs7W4VZDmxH1Bk';
//     let apiKey2 = 'AIzaSyCCwxTgsStnpaN47P12msqkZi41UGsNjok';Youtube key
//     const searchEngineId = 'f426500cb44ff4fc6';
//     sql pass =  -- ulassuleyman09@gmail.com
/** 
 * TODO: MongoDB kulanarak AI geliştir.Reactve MongoDB kulan.
 * ! SQL PASSWORD:Vals_Script?KEY:up?!%3 //S_USER 
 * ! QT password: SQL-value-/-password:35647893-/
 * ! email  password === SqS://suleyman47? // SuleymanUlasx47 //mysql:Sulnull:key?2341 //Microsoft + pass => S34f-48//>!null?
 * ! Android === https://developers.google.com/identity/sign-in/android/sign-in-identity?hl=en&authuser=1
*/