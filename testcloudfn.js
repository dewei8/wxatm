const axios = require('axios')
const access_token = 'xxxx'
const env = 'xxxx'
const name = 'sum'
axios({
    method: 'post',
    url: `https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${access_token}&env=${env}`,
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log('~~~ err ~~~');
});