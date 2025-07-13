import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ImageMinimizerWebpackPlugin from 'image-minimizer-webpack-plugin'

export function plugins(options) {
    const { mode, paths } = options
    // const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: paths.dashboardHtml,
            filename: 'dashboard.html',
        }),
        new HtmlWebpackPlugin({
            template: paths.adminLoginHtml,
            filename: 'adminLogin.html',
        }),
        new HtmlWebpackPlugin({
            template: paths.adminHtml,
            filename: 'admin.html',
        })
    ]

    // if(isDev){}

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/style.[contenthash].css',
            })
        )

        plugins.push(
            new ImageMinimizerWebpackPlugin({
                // Оптимизация картинок
                minimizer: {
                    implementation: ImageMinimizerWebpackPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['imagemin-mozjpeg', {
                                quality: 85,
                            }],
                            ['imagemin-pngquant', {
                                quality: [0.65, 0.8],
                                speed: 2,
                                strip: true,
                            }],
                            ['imagemin-svgo'],
                        ],
                    },
                },
                // Для создания avif картинки - использовать `?as=avif` при импорте картинки
                generator: [
                    {
                        preset: 'avif',
                        implementation: ImageMinimizerWebpackPlugin.imageminGenerate,
                        options: {
                            plugins: [
                                ['imagemin-avif', { quality: 50 }]
                            ]
                        },
                    },
                ],
            }),
        )
    }

    return plugins
}