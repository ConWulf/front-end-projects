const path = require('path');

module.exports = {
    entry: './build/party_cube/cube.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
