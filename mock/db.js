var Mock  = require('mockjs');
var Random = Mock.Random;

module.exports = function() {
  var data = { 
      news: []
  };
  
  for (var i = 0; i < 10; i++) {
      
    var content = Random.cparagraph(0,10);

    data.news.push({
         id: i, 
         title: Random.cword(8,20),
         desc: content.substr(0,40),
         tag: Random.cword(2,6),
         views: Random.integer(100,5000),
    })
  }

  return data
}
