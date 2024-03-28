import path from "path";
import webpack from 'webpack';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildDev, BuildPaths } from "./config/build/types/config";

export default (env: BuildDev): webpack.Configuration => {

    const mode = env.mode ?? 'development';
    const PORT = env.port ?? 3000;

    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        paths,
        port: PORT,
    });

    return config;
};