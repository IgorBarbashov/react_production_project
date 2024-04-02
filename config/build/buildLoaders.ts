import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule [] {

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const assetsLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource'
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // Если используем стандартное наименование файлов css модулей '*.modules.scss'
                        auto: true,
                        // Если используем кастомное наименование файлов css модулей
                        // auto: (customPath: string) => customPath.endsWith('.custom-modules-name.scss'),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // Если не используем ts, а нативный js, нам нужен babel-loader для поддержки jsx
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            }
        }],
        exclude: /node_modules/,
    };

    return [
        babelLoader,
        typescriptLoader,
        assetsLoader,
        svgLoader,
        cssLoader,
    ];
};