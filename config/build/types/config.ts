import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode'];

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildDev {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    isDev: boolean;
    paths: BuildPaths;
    port: number;
}
