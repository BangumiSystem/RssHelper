let name = 'RSSHelper';
let version = '0.1.0';
let description = 'A way to add a rss feed button on webpage';

const config = {
    entry: './src/javascript/index.js'
};

const header = {
    name: name,
    version: version,
    description: description,
    author: 'SettingDust',
    include: ['http*://*'],
    license: 'MIT',
    require: [
        'https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js',
        'https://cdn.bootcss.com/clipboard.js/2.0.1/clipboard.min.js'
    ],
    grant: [
        //https://tampermonkey.net/documentation.php#GM_addStyle
        'GM_addStyle', //GM_addStyle(require('file').toString())
        'GM_setValue',
        'GM_getValue'
    ]
};

module.exports.config = config;
module.exports.header = header;
module.exports.buildedHeader = () => {
    let headerString = [];
    headerString.push('// ==UserScript==');
    for (let headerKey in header) {
        if (Array.isArray(header[headerKey])) {
            if (header[headerKey].length > 0) headerString.push('//');
            for (let p in header[headerKey]) {
                headerString.push('// @' + headerKey.padEnd(13) + header[headerKey][p]);
            }
        } else {
            headerString.push('// @' + headerKey.padEnd(13) + header[headerKey]);
        }
    }
    headerString.push('// ==/UserScript==');
    headerString.push('');
    return headerString.join('\n');
};
