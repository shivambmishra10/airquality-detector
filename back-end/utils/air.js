const request=require('request')
const airquality=(city,state,callback)=>
{
 const url='http://api.airvisual.com/v2/city?city='+encodeURIComponent(city)+'&state='+encodeURIComponent(state)+'&country=india&key=df5668b2-ab34-47f6-8441-5e23ff2527b0'

request({url:url,json:true},(error,{body})=>
{
   if(error)
   callback("Some problem in weather services!",undefined)
   else if(body.error)
   console.log("data not able to find!",undefined)
   else{
   const aqius=body.data.current.pollution.aqius
   const aqicn=body.data.current.pollution.aqicn
   callback(undefined,{aqius:aqius,aqicn:aqicn})
}

}

)
}
module.exports=airquality