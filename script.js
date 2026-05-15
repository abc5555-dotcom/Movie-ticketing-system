// ======================
// 基本頁面跳轉
// ======================
function goHome() {
  window.location.href = "index.html";
}

function goBooking() {
  window.location.href = "booking.html";
}

// ======================
// 訂票資料暫存（核心狀態）
// ======================
let bookingData = {
  movie: "",
  date: "",
  time: "",
  location: ""
};

// ======================
// 選擇電影
// ======================
function selectMovie(movie) {
  bookingData.movie = movie;
  updateSummary();
}

// ======================
// 選擇日期
// ======================
function selectDate(date, event) {
  bookingData.date = date;
  setActiveButton(event);
  updateSummary();
}

// ======================
// 選擇時間
// ======================
function selectTime(time, event) {
  bookingData.time = time;
  setActiveButton(event);
  updateSummary();
}

// ======================
// 選擇影廳
// ======================
function selectLocation(location, event) {
  bookingData.location = location;
  setActiveButton(event);
  updateSummary();
}

// ======================
// 按鈕選取效果（UI互動）
// ======================
function setActiveButton(event) {
  const parent = event.target.parentElement;
  const buttons = parent.querySelectorAll("button");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// ======================
// 更新訂票資訊
// ======================
function updateSummary() {
  const summary = document.getElementById("summaryText");

  if (!summary) return;

  summary.innerHTML = `
    🎬 電影：${bookingData.movie || "尚未選擇"} <br>
    📅 日期：${bookingData.date || "尚未選擇"} <br>
    ⏰ 時間：${bookingData.time || "尚未選擇"} <br>
    🏢 影廳：${bookingData.location || "尚未選擇"}
  `;
}

// ======================
// 確認訂票
// ======================
function confirmBooking() {
  if (
    !bookingData.movie ||
    !bookingData.date ||
    !bookingData.time ||
    !bookingData.location
  ) {
    alert("⚠️ 請完成所有選項再確認訂票！");
    return;
  }

  const ticket = {
    ...bookingData,
    orderTime: new Date().toLocaleString()
  };

  // 存到 localStorage（模擬訂票系統）
  localStorage.setItem("movieTicket", JSON.stringify(ticket));

  alert(
    `🎉 訂票成功！\n\n電影：${ticket.movie}\n日期：${ticket.date}\n時間：${ticket.time}\n影廳：${ticket.location}`
  );

  // 可選：跳回首頁
  window.location.href = "index.html";
}

// ======================
// 頁面載入時初始化
// ======================
window.onload = function () {
  updateSummary();

  // 如果是首頁，不做事
  const summary = document.getElementById("summaryText");
  if (!summary) return;

  // 如果已有訂票紀錄（可擴充用）
  const saved = localStorage.getItem("movieTicket");
  if (saved) {
    console.log("已存在訂票紀錄：", JSON.parse(saved));
  }
};
