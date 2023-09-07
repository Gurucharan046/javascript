let months = ["January", "February", "March", "April", "May", "June", "July","August","September","October",
"November","December"];
let places=["Bangalore","Mumbai","Chennai","Delhi"]
// let random = Math.floor(Math.random() * months.length);
let FlightNumber=1002;
let HourOfDept="07H50";
let HourOfArrival="10H40";
let plane="A380";
let listOfFlights=[];
function generateRandomDate(from,to)
{
     return  new Date(from.getTime()+Math.random()*(to.getTime()-from.getTime()),);
}
function generateRandomListOfFlights()
{
    for(var i=0;i<100;i++)
    {   var date=generateRandomDate(new Date(1998+Math.floor(Math.random()*24),Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),new Date());
        var flightData={
            "Date":new Date(months[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear()),
            "Flight Number":1000+Math.floor(Math.random()*800),
            "From":places[Math.floor(Math.random()*places.length)],
            "To":places[Math.floor(Math.random()*places.length)],
            "Hour of Departure":HourOfDept,
            "Hour of Arrival":HourOfArrival,
            "Plane":plane
        }
        listOfFlights.push(flightData);
    }
    for(var i=0;i<listOfFlights.length;i++)
    {
       if(listOfFlights[i]["From"]===listOfFlights[i]["To"])
       {
         listOfFlights.splice(i,1);
       }
    }
}
function getMyFlightDetails()
{    generateRandomListOfFlights()
      var firstName=document.getElementById("passFname").value;
      var lastName=document.getElementById("passLname").value;
      var age=document.getElementById("passAge").value;

      var leavingFrom=document.getElementById("selection1").value;
      var goingTo=document.getElementById("selection2").value;
      var seatClass=document.getElementById("selection3").value;

      var periodFromDate=document.getElementById("pdate").value;
      var periodFromMonth=document.getElementById("pmonth").value;
      var periodFromYear=document.getElementById("pyear").value;

      var toDate=document.getElementById("tdate").value;
      var toMonth=document.getElementById("tmonth").value;
      var tyear=document.getElementById("tyear").value;
   
      var to=new Date(tyear+'-'+toMonth+'-'+toDate);
      var from=new Date(periodFromYear+'-'+periodFromMonth+'-'+periodFromDate)
      console.log(to);
      console.log(from);
      var tableHeader="<table style='border:1px solid black;background: #ffb3b3;'><thead style='border:1px solid black;'><tr style='border:1px solid black;'><th style='border:1px solid black;'>DATE</th><th style='border:1px solid black;'>FLIGHT NUMBER</th><th style='border:1px solid black;'>FROM</th><th style='border:1px solid black;'>TO</th><th style='border:1px solid black;'>HOUR OF DEPARTURE</th><th>HOUR OF ARRIVAL</th><th style='border:1px solid black;'>PLANE</th></tr></thead>";
     var tableBody="";
     for(let i=0;i<listOfFlights.length;i++)
     {
        
        if(leavingFrom===listOfFlights[i]["From"] && goingTo===listOfFlights[i]["To"] && new Date(listOfFlights[i]["Date"])>=from
        && new Date(listOfFlights[i]["Date"])<=to )
        {
         tableBody=tableBody+"<tr style='border:1px solid black;'><td style='border:1px solid black;'>"+listOfFlights[i]["Date"].getDate()+"/"+listOfFlights[i]["Date"].getMonth()+"/"+listOfFlights[i]["Date"].getFullYear()+"</td><td style='border:1px solid black;>"+listOfFlights[i]["Flight Number"]+"</td><td style='border:1px solid black;'>"
         +"</td><td style='border:1px solid black;'>"+listOfFlights[i]["From"]+"</td><td style='border:1px solid black;'>"+listOfFlights[i]["To"]+"</td><td style='border:1px solid black;'>"+listOfFlights[i]["Hour of Departure"]+"</td><td style='border:1px solid black;'>"+listOfFlights[i]["Hour of Arrival"]+"</td><td style='border:1px solid black;'>"+listOfFlights[i]["Plane"]+"</td>"+"</tr>"
     }
    }
     var tableFooter="</table>"
     document.getElementById('program-of-flights').innerHTML=tableHeader+tableBody+tableFooter;

}
