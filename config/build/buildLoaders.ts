import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule [] {

    // Если не используем ts, а нативный js, нам нужен babel-loader для поддержки jsx
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
    ];
};