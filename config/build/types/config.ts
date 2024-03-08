import webpack from "webpack";

export type BuildMode = webpack.Configuration['mode'];

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    isDev: boolean;
    paths: BuildPaths;
    port: number;
}