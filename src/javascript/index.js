require('./include/jquery.feed');
const logger = require('./include/logger');
const Route = require('./include/route');

const Router = require('./include/router');
const router = new Router();

router.push(new Route(/yande\.re\/.*/, require('./routes/yandere/index')));
router.push(new Route(/\/?.*\.?bilibili\.com\/.*/, require('./routes/bilibili')));
router.push(new Route(/\/?.*\.?weibo\.com\/.*/, require('./routes/weibo')));
router.push(new Route(/\/?.*\.?pixiv\.net\/.*/, require('./routes/pixiv')));

router.push(new Route(/.+/, require('./routes/default')));

router.load(location.href);

new ClipboardJS('#rss-helper');
