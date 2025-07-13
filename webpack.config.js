import { webpackBuild } from "./config/build/webpackBuild.js"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'js', 'app.js'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'src', 'index.html'),
        dashboardHtml: path.resolve(__dirname, 'src', 'dashboard.html'),
        adminLoginHtml: path.resolve(__dirname, 'src', 'adminLogin.html'),
        adminHtml: path.resolve(__dirname, 'src', 'admin.html')
    }

    return webpackBuild({
        mode: env.mode ?? 'development',
        paths
    })
}