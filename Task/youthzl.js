const axios = require('axios');


 //随机si
    function randomString() {
      let len = 32;
      let $chars = "abcdefhijkmnprstwxyz123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
    
    
    //获取分享时间字符串
    var q=Date.parse(new Date())/1000;
    
//get 函数
    var aa=function(){
      
        var j = randomString();
 var p = new Date().getTime();
    const url = 'https://script.baertt.com/count2/callback?si='+j+'&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DyjOAEqLWPoZQngMaDMpvxLTeGRpOs0exMPQ1K5N3rYk6pmxVGl%2526uid%253D52759849%2526phone_code%253Df366260adcd3a6e11e53babb137a325c%2526scid%253D38137298%2526time%253D'+q+'%2526app_version%253D1.8.0%2526sign%253De904b35a8937728907cef46abbe21c86&_='+p+'&jsonpcallback=jsonp5';
