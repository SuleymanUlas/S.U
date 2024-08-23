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
export function File_EXP(message) {
    function deleteOldFiles(folderPath, thresholdDays) {
        const files = fs.readdirSync(folderPath);
        files.forEach((file) => {
            const filePath = path.join(folderPath, file); const stats = fs.statSync(filePath);
            const fileAgeInMs = Date.now() - stats.mtime.getTime();
            const fileAgeInDays = fileAgeInMs / (1000 * 60 * 60 * 24);
            if (fileAgeInDays > thresholdDays) {
                fs.unlinkSync(filePath);
                console.log(`Deleted ${file} (${fileAgeInDays.toFixed(2)} days old).`);
            }
        });
    }
    const folderPath = './Locked'; const thresholdDays = 3; deleteOldFiles(folderPath, thresholdDays);
    const fileprogres = /\(Email:([^?]+)\?Ext:([^?]+)\?Message:(.+)\)$/g;
    const file_url = `./file/${message.id}/${message.emailtxts}/${message.filesext}`;
    const UserUrl = `./file/${message.id}/${message.emailtxts}`;
    if (message.get) {
        switch (message.get) {
            case "AndroidApp":
                SUOpen(0, UserUrl);
                break;
            case "HtmlDesign":
                SUOpen(1, UserUrl);
                break;
            case "WindowsProgram":
                SUOpen(2, UserUrl);
                break;
            case "Server":
                SUOpen(3, UserUrl);
                break;
            case "SQL":
                SUOpen(4, UserUrl);
                break;
            case "AI":
                SUOpen(5, UserUrl);
                break;
            case "LinuxProgram":
                SUOpen(6, UserUrl);
                break;
            default:
                break;
        }
    }
    fs.writeFile(`./file/${message.id}/${message.emailtxts}/${message.filesext}`, Buffer.from(message.file, 'base64'), (err) => {
        if (err) { console.log(err) }
    });
    /**
     *? AI Tool used file or folder
     */
    message.filesext.replace(/.([^.]+)$/g, (match, one) => {
        /**
         *? Usable fileext
         */
        switch (one) {
            case "pdf":
                SUAI(0, file_url);
                break;
            case ".jpg":
            case ".png":
            case ".gif":
            case ".bmp":
            case ".ico":
            case ".svg":
                SUAI(1, file_url);
                break;
            case ".docx":
            case ".pptx":
            case ".xlsx":
            case ".accdb":
            case ".dotx":
            case ".potx":
                SUAI(2, file_url);
                break;
            case ".js":
            case ".mjs":
            case ".py":
            case ".java":
            case ".cpp":
            case ".cs":
            case ".swift":
            case ".go":
            case ".php":
            case ".rb":
            case ".ts":
                SUAI(3, file_url);
                break;
            case ".html":
                SUAI(4, file_url);
                break;
            default:
                break;
        }
    });
    /**
     *? AI Window added file
     */
    if (fileprogres.test(message)) {
        message.replace(fileprogres, (match, email, ext, messageV) => {
            ext.replace(/.([^.]+)$/g, (match, one) => {
                SUAI(ext, one, message);
            });
        });
    }
}