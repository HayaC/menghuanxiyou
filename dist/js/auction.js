app.controller("auctionControl",["$scope","$http",function(o,r){o.arr=[],o.arr2=[],o.num1=0,o.num2=0,o.num3=0,o.orderByNormal=function(){o.num1=0,o.num2=0,o.num3=0,r({url:"http://127.0.0.1:6587/first1",method:"get"}).success(function(r){o.arr=r.equip_list}),o.aucChangeIcon0={color:"rgb(250,0,10)"},o.aucChangeIcon1={color:"rgb(70,70,70)"},o.aucChangeIcon2={color:"rgb(70,70,70)"},o.aucChangeIcon3={color:"rgb(70,70,70)"}},o.orderByNormal(),o.orderByTime=function(){o.num1++,o.num2=0,o.num3=0,r({url:"http://127.0.0.1:6587/first1",method:"get"}).success(function(r){o.arr=r.equip_list,1==o.num1?(console.log(1),o.aucChangeIcon0={color:"rgb(70,70,70)"},o.aucChangeIcon1={color:"rgb(250,0,10)"},o.aucChangeIcon2={color:"rgb(70,70,70)"},o.aucChangeIcon3={color:"rgb(70,70,70)"},o.arr.sort(function(o,r){return o.time_list-r.time_list})):(console.log(2),o.num1%2==1?(o.aucChangeIcon1={color:"rgb(250,0,10)"},o.arr.sort(function(o,r){return o.time_list-r.time_list})):(o.aucChangeIcon1={color:"rgb(250,0,10)"},o.arr.sort(function(o,r){return r.time_list-o.time_list})))})},o.aucTab=!1,o.aucing=function(){o.aucTab=!1,o.chooseLeft={color:"rgb(250,0,10)","border-bottom":"2px solid rgb(250,0,10)"},o.chooseRight={color:"rgb(70,70,70)","border-bottom":"none"}},o.auced=function(){o.aucTab=!0,o.chooseRight={color:"rgb(250,0,10)","border-bottom":"2px solid rgb(250,0,10)"},o.chooseLeft={color:"rgb(70,70,70)","border-bottom":"none"}},r({url:"http://127.0.0.1:6587/first1",method:"get"}).success(function(r){o.arr=r.equip_list})}]);