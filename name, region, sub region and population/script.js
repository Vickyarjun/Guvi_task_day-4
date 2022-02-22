// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send()

// request.onload=function()
// { if (request.status==200)
//     {
//     let a=JSON.parse(request.responseText)
//     a.map((b)=>{
//          console.log(b.name.official)});
//     a.map((c)=>{
//         console.log(c.region)
//     });
//     a.map((d)=>{
//         console.log(d.subregion)
//     });
//     a.map((e)=>{
//         console.log(e.population)
//     });
// }else{
//     request.onerror=function(){
//         console.log(error)
//     }
// }
//}

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send()

request.onload=function(){
    var data = JSON.parse(request.responseText)
    for(var i = 0; i<data.length;i++){
        console.log(data[i].name, data[i].region, data[i].subregion, data[i].population)
    }
}
