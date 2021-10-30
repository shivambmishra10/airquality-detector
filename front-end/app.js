console.log('javascript is loaded')
const airform=document.querySelector('form')
const search1=document.querySelector('#name1')
const search2=document.querySelector('#name2')
const messageone=document.querySelector('#message-1')
const table=document.querySelector('#table')
const table1=document.querySelector('#table1')
const table2=document.querySelector('#table2')
const table3=document.querySelector('#table3')
console.log(messageone)
console.log(search1)
airform.addEventListener('submit',(e)=>
{
    console.log('submit')
    e.preventDefault()
    const state=search1.value
    const city=search2.value

    table1.textContent="Loading...."
    table2.textContent="Loading...."
    table3.textContent="Loading...."
//    fetch('http://api.airvisual.com/v2/city?city=vapi&state=gujarat&country=india&key=df5668b2-ab34-47f6-8441-5e23ff2527b0').then(res=>res.json).then(data=>console.log(data))

    fetch('http://api.airvisual.com/v2/city?city='+city+'&state='+state+'&country=india&key=df5668b2-ab34-47f6-8441-5e23ff2527b0').then((response)=>
{
    response.json().then((data)=>{
        if(data.error)
        return messageone.textContent=data.error
        
        table1.textContent=data.data.current.pollution.aqius
        table2.textContent=data.data.current.pollution.aqicn
        table3.textContent=data.data.current.pollution.mainus
    })
})  
})