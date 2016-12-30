var jsonServer = require('json-server')
var GetLatestFaultWorkOrderList =require ('./mock/GetLatestFaultWorkOrderList.js')
var server = jsonServer.create()
var middlewares = jsonServer.defaults()

server.use(middlewares)
//server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})

server.use(jsonServer.bodyParser)
server.post('/test', function (req, res) {
   switch(req.body.service) {
   	case "ElectricityGridAegisRealTimeService":
   		return res.jsonp(GetLatestFaultWorkOrderList);
   		break;
   	default:
   		return res.jsonp(req.body)
   }
   
})
