const navbtn = document.querySelector('.navBtn')
navbtn.addEventListener('click',(e)=>{
    const navUl = document.querySelector('.navUl');
    (e.target.tagName === 'H1')? navUl.classList.toggle("showNav"):''
});

// const apiTest = document.getElementById("apiTest");
// fetch('https://ptx.transportdata.tw/MOTC/v2/Air/FIDS/Airport/Departure/TPE?%24top=30&%24format=JSON').then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     console.log('myJson',myJson);
//     myJson.map((v, i) => {
//       return (apiTest.innerHTML += `
//     <div class="cards cd${i}">
//         <div class="cardsTop">
//           <div class="cardsLeft">
//             <div class="airlines">
//               <h1>
//                 <p>航空公司</p>
//                 Airlines: 長榮航空
//               </h1>
//             </div>
//             <div class="flight">
//               <h1>
//                 <p>班次</p>
//                 Flight No.: ${v.AirlineID+' - '+v.FlightNumber}
//               </h1>
//             </div>
//             <div class="timeCardBox">
//               <div class="timeCard">
//                 <div class="std">
//                   <h1>
//                     STD.:
//                     <h1>${v.ScheduleDepartureTime}</h1>
//                   </h1>
//                 </div>
//                 <div class="etd">
//                   <h1>
//                     ETD.:
//                     <h1>${v.EstimatedDepartureTime}</h1>
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="cardsRight">
//             <p>FROM: ${v.DepartureAirportID}</p>
//             <p>TO: ${v.ArrivalAirportID}</p>
//             <p>Term.: ${v.Terminal}</p>
//             <p>Gate: ${v.Gate}</p>
//           </div>
//         </div>
//         <div class="cardsBotton">
//           <h1>
//             Remarks:
//             <h1>${v.DepartureRemark}</h1>
//           </h1>
//           <h2>Update:${v.UpdateTime}</h2>
//         </div>
//       </div>`);
//     });
//   });


//   ActualDepartureTime: "2022-06-30T00:30"
// AirlineID: "CI"
// ArrivalAirportID: "AKL"
// CheckCounter: ""
// DepartureAirportID: "TPE"
// DepartureRemark: "出發DEPARTED"
// EstimatedDepartureTime: "2022-06-30T00:30"
// FlightDate: "2022-06-30"
// FlightNumber: "59"
// Gate: " D1"
// IsCargo: false
// ScheduleDepartureTime: "2022-06-30T00:45"
// Terminal: "2"
// UpdateTime: "2022-07-01T15:20:19+08:00"

//HX 香港航空
//BR 長榮航空
//CI 中華航空
//PR 菲律賓航空
//VN 越南航空
//SQ 新加坡航空
//AI 印度航空
//JX 星宇航空
//NZ 紐西蘭航空
//SQ 新加坡航空