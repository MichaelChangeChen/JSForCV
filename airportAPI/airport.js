const airComp = {
  eng: [
    "CI",
    "BR",
    "HX",
    "PR",
    "VN",
    "SQ",
    "AI",
    "JX",
    "NZ",
    "5J",
    "TR",
    "KE",
    "DL",
    "MF",
    "AE",
    "JL",
    "GA",
    "PG",
    "UA",
    "AA",
    "HA",
    "OZ",
    "CA",
    "UO",
    "CX",
    "QH",
    "TG",
    "AC",
    "NH",
    "MH",
    "TK",
    "KL",
  ],
  chi: [
    "中華航空",
    "長榮航空",
    "香港航空",
    "菲律賓航空",
    "越南航空",
    "新加坡航空",
    "印度航空",
    "星宇航空",
    "紐西蘭航空",
    "宿霧太平洋航空",
    "新加坡虎航",
    "韓國航空",
    "達美航空",
    "廈門航空",
    "華信航空",
    "日本航空",
    "印尼航空",
    "曼谷航空",
    "聯合航空",
    "美國航空",
    "夏威夷航空",
    "韓亞航空",
    "中國國際航空",
    "香港快運航空",
    "國泰航空",
    "越竹航空",
    "泰國航空",
    "加拿大航空",
    "全日空航空",
    "馬來西亞",
    "土耳其航空",
    "荷蘭航空",
  ],
};
const navbtn = document.querySelector(".navBtn");

navbtn.addEventListener("click", (e) => {
  const navUl = document.querySelector(".navUl");
  e.target.tagName === "H1" ? navUl.classList.toggle("showNav") : "";
});

window.addEventListener("scroll", () => {
  const [textHide1, textHide2, textHide3, textHide4, textHide5, textHide6] = [
    document.querySelector(".textHide1"),
    document.querySelector(".textHide2"),
    document.querySelector(".textHide3"),
    document.querySelector(".textHide4"),
    document.querySelector(".textHide5"),
    document.querySelector(".mainTitle"),
  ];
  window.scrollY >= 260
    ? textHide1.classList[1] !== "textShow1"
      ? textHide1.classList.add("textShow1")
      : ""
    : textHide1.classList.remove("textShow1");
  window.scrollY >= 490
    ? textHide2.classList[1] !== "textShow2"
      ? textHide2.classList.add("textShow2")
      : ""
    : textHide2.classList.remove("textShow2");
  window.scrollY >= 600
    ? textHide3.classList[1] !== "textShow3"
      ? textHide3.classList.add("textShow3")
      : ""
    : textHide3.classList.remove("textShow3");
  window.scrollY >= 740
    ? textHide4.classList[1] !== "textShow4"
      ? textHide4.classList.add("textShow4")
      : ""
    : textHide4.classList.remove("textShow4");
  window.scrollY >= 920
    ? textHide5.classList[1] !== "textShow5"
      ? textHide5.classList.add("textShow5")
      : ""
    : textHide5.classList.remove("textShow5");
  window.scrollY >= 1100
    ? textHide6.classList[1] !== "textShow6"
      ? textHide6.classList.add("textShow6")
      : ""
    : textHide6.classList.remove("textShow6");
});

function airRename(ele) {
  let printIt;
  airComp.eng.forEach((en) => {
    if (ele === en) {
      let num = airComp.eng.indexOf(en);
      airComp.chi.forEach((ci) => {
        num === airComp.chi.indexOf(ci) ? (printIt = ci) : "";
      });
    }
  });
  return printIt;
}
function remarkStyle(ele) {
  let addClassName;
  ele.indexOf("取消") > -1 ? (addClassName = "cancelStyle") : "";
  ele.indexOf("準時") > -1 ? (addClassName = "intimeStyle") : "";
  return addClassName;
}

const apiTest = document.getElementById("apiTest");
fetch(
  "https://ptx.transportdata.tw/MOTC/v2/Air/FIDS/Airport/Departure/TPE?%24top=100&%24format=JSON"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    myJson.map((v, i) => {
      if (v.IsCargo === true) {
        return;
        //過濾貨機航班
      }
      return (apiTest.innerHTML += `
    <div class="cards cd${i}">
        <div class="cardsTop">
          <div class="cardsLeft">
            <div class="airlines">
              <h1>
                <p>航空公司</p>
                Airlines: ${airRename(v.AirlineID)}
              </h1>
            </div>
            <div class="flight">
              <h1>
                <p>班次</p>
                Flight No.: ${v.AirlineID + " - " + v.FlightNumber}
              </h1>
            </div>
            <div class="timeCardBox">
              <div class="timeCard">
                <div class="std">
                  <h1>
                    STD.:
                    <h1>${v.ScheduleDepartureTime}</h1>
                  </h1>
                </div>
                <div class="etd">
                  <h1>
                    ETD.:
                    <h1>${v.EstimatedDepartureTime}</h1>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="cardsRight">
            <p>FROM: ${v.DepartureAirportID}</p>
            <p>TO: ${v.ArrivalAirportID}</p>
            <p>Term.: ${v.Terminal}</p>
            <p>Gate: ${v.Gate}</p>
          </div>
        </div>
        <div class="cardsBotton">
          <h1>
            Remarks:
            <h1 class='remark ${remarkStyle(v.DepartureRemark)}' >${
        v.DepartureRemark
      }</h1>
          </h1>
          <h2>Update:${v.UpdateTime}</h2>
        </div>
      </div>`);
    });
  });
