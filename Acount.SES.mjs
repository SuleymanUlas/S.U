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
import puppeteer from 'puppeteer';
export async function SU(msa,send_email,send_code) {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    let count = 0;
    const page = await browser.newPage();
    const url = 'https://webmail.mail.us-east-1.awsapps.com/workmail/?organization=s-u'; await page.goto(url);
    const name = 'suleyman'; const pass = 'wrtytresdfDfdQ7564?!';
    const inputId = 'wdc_username'; const inputId2 = 'wdc_password';
    await page.waitForSelector(`#${inputId}`, { visible: true });
    await page.type(`#${inputId}`, name);
    await page.waitForSelector(`#${inputId2}`, { visible: true });
    await page.type(`#${inputId2}`, pass);
    await page.waitForSelector(`#wdc_login_button`, { visible: true });
    await page.click(`#wdc_login_button`);
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    const buttonHandle = await page.evaluateHandle(() => {
        const xpath = '//*[@id="ext-gen105"]/a';
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    });
    if (buttonHandle) {
        await buttonHandle.click();
    }
    await page.evaluate((send_email, count) => {
        const xpath = '/html/body/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div/div/form/div/div[1]/div/div[1]/div/div[2]/div/div[2]/ul/li/input';
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const inputElement = result.singleNodeValue;
        if (inputElement) {
            setTimeout(() => {
                inputElement.value = send_email;
            }, 1000);
        }
        if (inputElement.value = '') {
            setTimeout(() => {
                inputElement.value = send_email;
            }, 1000);
        }
        if (inputElement.value) {
            count++
        }
    }, send_email, count);
    const frameHandle = await page.waitForSelector('iframe');
    const frame = await frameHandle.contentFrame();
    if (frame) {
        frame.evaluate((send_code, count) => {
            const pElement = document.querySelector('p');
            if (pElement) {
                setTimeout(() => {
                    pElement.innerText =
                        `Use this code to log into your account
                         Code: ${send_code}
                        If you don't want the code, ignore it.`;
                }, 1000);
            }
            if (pElement.innerText = '') {
                setTimeout(() => {
                    pElement.innerText =
                        `Use this code to log into your account
                         Code: ${send_code}
                        If you don't want the code, ignore it.`;
                }, 1000)
            }
            if (pElement.value) {
                count++
                console.log(count);
            }
        }, send_code, count);

    }
    //await browser.close();
    await page.keyboard.press('ContextMenu');
    setTimeout(() => {
        page.keyboard.press('Enter');
    }, 1000);
    setTimeout(() => {
        page.evaluate((count, msa) => {
            const xpath = '/html/body/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div/div/form/div/div[1]/div/div[1]/div/div[6]/div/input';
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            const inputElement = result.singleNodeValue;
            if (inputElement) {
                setTimeout(() => {
                    inputElement.value = msa;
                }, 1000);
            }
            if (inputElement.value == '') {
                setTimeout(() => {
                    inputElement.value = msa;
                }, 1000);
            }
            if (inputElement.value) {
                count++
            }
        }, count, msa);
    }, 2000);
    setTimeout(() => {
        page.evaluate(() => {
            return new Promise((resolve, reject) => {
                const xpath = '/html/body/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div/div/div';
                const xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                const element = xpathResult.singleNodeValue;
                if (element) {
                    const boundingBox = element.getBoundingClientRect();
                    const x = boundingBox.left + boundingBox.width / 2;
                    const y = boundingBox.top + boundingBox.height / 2;
                    resolve({ x, y });
                }
            });
        }).then(async ({ x, y }) => {
            await page.mouse.click(x, y);
            console.log(`Clicked at (${x}, ${y})`);
        }).catch(error => {
            console.error(error);
        });
        setTimeout(() => {
            page.keyboard.press('Tab');
            setTimeout(() => {
                page.keyboard.press('Enter');
                setTimeout(() => {
                    browser.close();
                }, 2000);
            }, 1000);
        }, 1000);
        console.log('Finish!');
    }, 4000);
}