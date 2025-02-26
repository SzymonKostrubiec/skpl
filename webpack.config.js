const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/main')
    .setPublicPath('/build/main')
    .addEntry('app-main', './assets/main/entry.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .enableVersioning()
;

const mainConfig = Encore.getWebpackConfig();

mainConfig.externals = Object.assign({}, mainConfig.externals, { window: 'window', document: 'document' });
mainConfig.name = 'main';

Encore.reset();

Encore
    .setOutputPath('public/build/admin')
    .setPublicPath('/build/admin')
    .addEntry('app-admin', './assets/admin/entry.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .enableVersioning()
;

const adminConfig = Encore.getWebpackConfig();

adminConfig.externals = Object.assign({}, adminConfig.externals, { window: 'window', document: 'document' });
adminConfig.name = 'admin';

module.exports = [mainConfig, adminConfig];