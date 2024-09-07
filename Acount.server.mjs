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
import fs, { mkdir } from 'fs';
import { SU } from './Acount.SES.mjs';
import { sendMessageToClients } from './SU.mjs'
let msa = 'Hello, your verification code to log in to your account';
function handleSomeEvent(data) {
    const message = `${data}`;
    sendMessageToClients(message);
}
export function S_U_A(message) {
    message = message.toString();
    let sign = ''; sign = message; const signupRegex = /S\((.+)\)U$/g; 
    const complateRegex = /%4\?4%Code:(.+)%4\?4%Email:(.+)%4\?4%$/g;
    const loginRegex = /\/Email:([^?]+)\?Password:(.+)Finit%$/g;
    const idRegex = /!ID:([^!]+)!Email:([^!]+)!$/g;
    const lockRegex = /!Lock{([^}]+)}$/g;
    const helpRegex = /\(help-([^-]+)-help\)$/g;
    const recoveryRegex = /\(Email:(.+)Password:(.+)Code:(.+)\)$/g;
    const changeImageRegex = /Email:([^?]+)\?Profile:(.+)/g;
    const deleteRegex = /DELETE:([^,]+),(.+)/g;
    /** 
     * ?Acount area*/
    if (idRegex.test(sign)) {
        const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
        sign = sign.replace(idRegex, (match, ids, email) => {
            fs.readFile(`./SQL/${email}.su`, 'utf8', (err, data) => {
                if (err) {
                    handleSomeEvent('SET(%Email:null/Name:null/Id:000%)VALUE');
                    return;
                }
                let found = false;
                const id = data.replace(acountRegex, (match, Nam, Ema, Pass, id) => { return id; });
                if (id == ids) {
                    found = true;
                }
                if (!found) {
                    let quick = 'Account is broken!';
                    let color = 'red';
                    const query = `Info?:${quick}+/+Color:${color}+`;
                    handleSomeEvent(query); handleSomeEvent('SET(%Email:null/Name:null/Id:000%)VALUE');
                }
            });
        });
    }
    else if (signupRegex.test(sign)) {
        const nameRegex = /Name:([^+]+)\+Email:/g; const emailRegex = /Email:([^+]+)\+Password:/g; const passwordRegex = /Password:([^+]+)\+Profile:/g; const profileRegex = /Profile:(.+)\)U/g;
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
            fs.writeFile(`./waited_acount/${code}.txt`, text, (err) => { if (err) { console.warn(err); } });
            SU(msa, email, code);
            const file = Buffer.from(profile, 'base64');
            fs.writeFile(`./profil/${email}.png`, file, (err) => { if (err) { console.warn('Profil picture not saved'); } });
        }
    }
    else if (complateRegex.test(sign)) {
        let code = ''; let email = '';
        const codeRegex = /%4\?4%Code:(.+)%4\?4%Email/g; const emailRegex = /%4\?4%Email:(.+)%4\?4%/g;
        sign = sign.replace(codeRegex, (match, one) => { code = one; return match; });
        sign = sign.replace(emailRegex, (match, two) => { email = two; return match; });
        let names = ''; let password = ''; let emails = ''; let Id = '';
        fs.readFile(`./waited_acount/${code}.txt`, 'utf8', (err, data) => {
            if (err) { let quick = 'Wrong code!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); fs.unlink(`./waited_acount/${code}.txt`, (err) => { if (err) { console.error('Error deleting file:', err); } }); }
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
                                        fs.writeFile(`./SQL/${email}.su`, `Name:⁂${names}⁂Email:⁂${email}⁂Password:⁂${password}⁂Id:⁂${Id}⁂`, (err) => { if (err) { let quick = 'Please retry...'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); } });
                                        const query = `SET(%Email:${email}/Name:${names}/Id:${Id}%)VALUES`; handleSomeEvent(query);
                                        fs.unlink(`./waited_acount/${code}.txt`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                                    }
                                    else {
                                        let quick = 'E-mail used!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query);
                                        fs.unlink(`./waited_acount/${code}.txt`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                                    }
                                    setTimeout(() => {
                                        const emailsu = email.replace(/([^@]+)@(.+)/g, (match, remail, empty) => { return remail });
                                        if (!fs.existsSync(`./file/${Id}`)) { fs.mkdirSync(`./file/${Id}`); }
                                        if (!fs.existsSync(`./file/${Id}/${emailsu}`)) { fs.mkdirSync(`./file/${Id}/${emailsu}`); }
                                    }, 3000);
                                }
                            }
                        }
                        else { let quick = 'Account closed for 3 days!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); }
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
        handleSomeEvent(`Info?:Please wait+/+Color:green+`);
        fs.readFile(`./SQL/${email}.su`, 'utf8', (err, data) => {
            if (err) {
                let quick = 'Email not found!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query);
            }
            else {
                const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
                data.replace(acountRegex, (match, Nam, Ema, Pass, Id) => {
                    fs.readFile(`./Locked/${Ema}.lock`, 'utf8', (err, data) => {
                        if (err) {
                            if (match) {
                                if (password == Pass) {
                                    let quick = 'Welcome'; let color = 'green'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); let log = `SET(%Email:${email}/Name:${Nam}/Id:${Id}%)VALUE`; handleSomeEvent(log);
                                }
                                else {
                                    let quick = 'Wrong password'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query);
                                }
                            }
                            else {
                                let quick = 'Acount is broken!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query);
                            }
                        }
                    });
                });
            }
        });
    }
    else if (lockRegex.test(sign)) {
        sign = sign.replace(lockRegex, (match, email) => {
            fs.writeFile(`./Locked/${email}.lock`, '', (err) => {
                if (err) { handleSomeEvent(`Info?:Error!Please retry+/+Color:red+`) }
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
                    SU(msa, email, code);
                    fs.readFile(`./SQL/${email}.su`, 'utf8', (err, data) => {
                        if (err) { let quick = 'Acount is broken!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query) }
                        else {
                            fs.writeFile(`./Help/${code}.help`, data, (err) => {
                                if (err) { handleSomeEvent(`Info?:Error!Please retry+/+Color:red+`) }
                            });
                        }
                    });
                }
                else { let quick = 'Account closed for 3 days!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); }
            });
        });
    }
    else if (recoveryRegex.test(sign)) {
        sign = sign.replace(recoveryRegex, (match, email, password, code) => {
            fs.readFile(`./Locked/${email}.lock`, 'utf8', (err, data) => {
                if (err) {
                    fs.readFile(`./Help/${code}.help`, 'utf8', (err, data) => {
                        if (err) { let quick = 'Wrong code'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); }
                        else {
                            const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
                            data.replace(acountRegex, (match, Nam, Ema, Pass, Id) => {
                                if (email == Ema) {
                                    const newdata = `Name:⁂${Nam}⁂Email:⁂${Ema}⁂Password:⁂${password}⁂Id:⁂${Id}⁂`;
                                    fs.writeFile(`./SQL/${email}.su`, newdata, (err) => {
                                        if (err) { handleSomeEvent(`Info?:Error!Please retry+/+Color:red+`) }
                                        else {
                                            fs.unlink(`./Help/${code}.help`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                                            let quick = 'Password changed successfully!Now log in again'; let color = 'green'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query);
                                            setTimeout(() => {
                                                handleSomeEvent('%ACOUNT%');
                                            }, 2000);
                                        }
                                    });
                                }
                                else {
                                    let quick = 'Wrong code'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query);
                                }
                            });
                        }
                    });
                }
                else { let quick = 'Account closed for 3 days!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; handleSomeEvent(query); }
            });
        });
    }
    else if (changeImageRegex.test(sign)) {
        sign.replace(changeImageRegex, (match, email, profile) => {
            const file = Buffer.from(profile, 'base64');
            fs.writeFile(`profil/${email}.png`, file, (err) => { if (err) { console.warn('Profil picture not saved'); } });
        });
    }
    else if (deleteRegex.test(sign)) {
        sign.replace(deleteRegex, (match, email, ids) => {
            fs.readFile(`SQL/${email}.su`, 'utf8', (err, data) => {
                if (err) {
                    handleSomeEvent('SET(%Email:null/Name:null/Id:null%)VALUE');
                }
                else {
                    const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂Id:⁂([^⁂]+)⁂/g;
                    data.replace(acountRegex, (match, Nam, Ema, Pass, id) => {
                        if (ids == id) {
                            handleSomeEvent('SET(%Email:null/Name:null/Id:null%)VALUE');
                            fs.unlink(`SQL/${Ema}.su`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                            fs.unlink(`file/${id}`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                        }
                        else {
                            fs.writeFile(`./Locked/${email}.lock`, '', (err) => {
                                if (err) { handleSomeEvent(`Info?:Error!Please retry+/+Color:red+`) }
                            });
                        }
                    });
                }
            });
        });
    }
    /**
     * ?Acount area */

}