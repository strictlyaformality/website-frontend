const withCss = require('@zeit/next-css');
module.exports = withCss({
    redirects: async () => [
        {
            source: '/',
            destination: '/skills',
            permanent: true
        }
    ],
    webpack: config => {
        config.module.rules.push({
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    esModule: false,
                    outputPath: 'static/webfonts/',
                    publicPath: '../webfonts/'
                }
            }]
        });

        return config;
    }
})