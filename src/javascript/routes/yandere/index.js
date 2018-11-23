const Route = require('../../include/route');

const Router = require('../../include/router');
const router = new Router();

router.push(new Route(/tags=(?:(.+))?/, require('./tags')));
router.push(new Route(/post/, require('./posts')));

module.exports = async (args) => {
    router.load(args);
    GM_addStyle(require('./style.css').toString());
    console.debug('[RSSHelper]', require('./style.css').toString());
};
