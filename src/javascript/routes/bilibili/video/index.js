const variable = require('../../../config/variable');
const { language, rsshub } = variable;
const rssPrefix = `${rsshub}/bilibili/user/video/`;

const rssElem = $('<a\>').feedInit();
rssElem.addClass('btn');
rssElem.addClass('default-btn');
rssElem.addClass('bi-btn');
rssElem.attr('title', language.feed);
rssElem.text(language.feed);

module.exports = async () => {
    let mid = $('#v_upinfo .u-face>a')
        .attr('href')
        .match(/\d+/)[0];
    rssElem.href(`${rssPrefix}${mid}`);
    let task = setInterval(() => {
        if ($('.trynew-btn').length) {
            rssElem.addClass('old');
            $('.followe.btn').append(rssElem);
            clearInterval(task);
        }
        if ($('.more-ops-list').length) {
            $('.btn-panel').append(rssElem);
            clearInterval(task);
        }
    }, 100);
    GM_addStyle(require('./style.css').toString());
};
