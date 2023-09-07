var productList=[];
function addProductList()
{  
    var pid=document.getElementById('txtpid').value;
    var pname=document.getElementById("txtpname").value;
    var ptype=document.getElementById("ddltype").value;
    var price=document.getElementById("numprice").value;  
     var pushingElement={
        "Product ID":pid,
        "Product Name":pname,
        "Product Type":ptype,
        "Product Price":price
     };
     productList.push(pushingElement)

}
setInterval(function(){
    var time=new Date();
    var element=document.getElementById("today-time");
    element.innerHTML=time.getUTCHours()+":"+time.getUTCMinutes()+":"+time.getUTCSeconds()+":"+time.getUTCMilliseconds();
},1)
setTimeout(function(){
    var date=new Date();
    var elem=document.getElementById("today-date");
    elem.innerHTML=date.getUTCDate()+'/'+date.getUTCMonth()+'/'+date.getUTCFullYear();
},1000)
function displayProducts()
{   
     var tableHeader="<h1>PRODUCT DETAILS</h1><table style='border:1px solid black;'><thead><tr><th>PRODUCT ID</th><th>PRODUCT NAME</th><th>PRODUCT TYPE</th><th>PRODUCT PRICE</th></tr></thead>";
     var tableBody="";
     for(let i=0;i<productList.length;i++)
     {
         tableBody=tableBody+"<tr><td>"+productList[i]["Product ID"]+"</td><td>"+productList[i]["Product Name"]+"</td><td>"
         +"</td><td>"+productList[i]["Product Type"]+"</td><td>"+productList[i]["Product Price"]+"</tr>"
     }
     var tableFooter="</table>"
     document.getElementById('show-products').innerHTML=tableHeader+tableBody+tableFooter;
}
function addProduct()
{
   let status=validate();
   addProductList();
   if(status==true)
   {
       document.getElementById('msg').innerText="Product Added";
   }
   else
   {
        document.getElementById('msg').innerText="Not added";
   }
    
}
function validate()
{   let flag=false;
    var pid=document.getElementById('txtpid').value;
    var pname=document.getElementById("txtpname").value;
    var ptype=document.getElementById("ddltype").value;
    var price=document.getElementById("numprice").value;  
    if(pid!='' && pname!='' && ptype!='Select'&&price!='')
   {
        flag=true;
   }
   else
   {
        flag=false;
   }
   return flag;
}