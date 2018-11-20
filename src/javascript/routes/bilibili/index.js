const Route = require('../../include/route');

const Router = require('../../include/router');
const router = new Router();

router.push(new Route(/video\/av\d+/, require('./video')));
router.push(new Route(/space\.bilibili\.com\/(\d+)/, require('./space')));

module.exports = async (args) => {
    router.load(args);
    GM_addStyle(require('./style.css').toString());
    console.debug('[RSSHelper]', require('./style.css').toString());
};
