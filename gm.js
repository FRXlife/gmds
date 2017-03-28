const https = require('https');
//配置信息
var options = {
  hostname: 'gw.ucaiyuan.com',
  port: 80,
  path: '/m.api',
  method: 'POST'
};

var req = https.request(options, (req) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
	var html = "";
  req.on('data', (data) => {
//  console.log(data.toString())
    html += data;
  });
  req.on("end",()=>{
//		console.log(JSON.parse(html));
		var obj = JSON.parse(html);
		console.log(obj);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();