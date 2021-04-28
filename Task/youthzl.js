const axios = require('axios');


 
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
    
    

    var aa=function(){
      
        var j = randomString();
    
    const url = 'https://script.baertt.com/count2/callback?si='+j+'&e506acdada4372aeab0c1109181294f2&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253D8MzJgNdEKAO0xvq7nDW3z0UjrbvPu5w6MoJ1ZPYQ3lm9pbD2yn%2526uid%253D52759849%2526phone_code%253Df366260adcd3a6e11e53babb137a325c%2526scid%253D37860150%2526time%253D1619599060%2526app_version%253D1.8.0%2526sign%253D2fd0983328230d0ef489cb2180f84ae8&_=1619599168820&jsonpcallback=jsonp6';
    
    
    
     return axios.get(url, {
    
      headers: {'Referer' : 'https://focus.youth.cn/',
    'Host' : 'script.baertt.com',
    'User-Agent' : 'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000522) NetType/WIFI Language/zh_CN'} //设置header信息
    }).then((res) => { 
      //then 成功
      console.log(j);
    }).catch((err) => {
      //catch 失败
      console.log("失败")
    
    });
  }


const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
const request = async function(){
  for(let i=0;i<50;i++){
    aa();
    await sleep(2000);
  }
}
request();
