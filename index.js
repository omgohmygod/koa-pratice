const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const static = require('koa-static')
const router = Router();
const path = require('path')
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());


app.use(static(__dirname + '/static'))


// Router -> /
router.get('/test1', async(ctx) => {
    ctx.body = `
    <form method="POST" action="/">
        <label>我有test1/2分頁哦</label><br/>
        <label>輸入東西</label>
        <input name="usr" /><br/>
        <button type="submit">回傳給你看</button>
      </form>
    `;
});

router.post('/test1', async(ctx) => {
    let usr = ctx.request.body.usr;
    ctx.body = `<p>Welocome,${usr}!</p>`;
});

// Router -> /about
router.get('/', async(ctx) => {
    ctx.body = 'hi';
});

router.get('/test2', async(ctx) => {
    ctx.body = 'test2';
});

app.use(router.routes());

app.listen(3000);