const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@freakycoder/react-native-bounceable']
        },
        resolve: {
            alias: {
                'react-native$': 'react-native-web'
            }
        },
        externals: {
            "react-native": true,
        },
    }, argv);
    // const config = await createExpoWebpackConfigAsync(env, argv);
    // config.module.rules.forEach(r => {
    //     if (r.oneOf) {
    //         r.oneOf.forEach(o => {
    //             if (o.use && o.use.loader && o.use.loader.includes('babel-loader')) {
    //                 o.include = [
    //                     path.resolve('.'),
    //                     path.resolve('node_modules/@freakycoder/react-native-bounceable'),
    //                 ]
    //             }
    //         })
    //     }
    // })
    return config;
}; 