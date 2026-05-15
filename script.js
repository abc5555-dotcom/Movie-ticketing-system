function goBooking() {
  window.location.href = "./booking.html";
}

function goHome() {
  window.location.href = "index.html";
}

/* ===== 訂票狀態變數 ===== */
let selectedMovie = "";
let selectedDate = "";
let selectedTime = "";
let selectedLocation = "";

/* ===== 通用：設定 active（更穩版） ===== */
function setActive(button, selector) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}

/* ===== 選電影 ===== */
function selectMovie(movieName, event) {
  selectedMovie = movieName;

  // 顯示下一步
  document.querySelector(".date-select")?.style.display = movieName ? "block" : "none";
  document.querySelector(".time-select").style.display = "none";
  document.querySelector(".location-select").style.display = "none";

  // reset
  selectedDate = "";
  selectedTime = "";
  selectedLocation = "";

  if (event) {
    setActive(event.target, ".movie-select .option-btn");
  }

  updateSummary();
}

/* ===== 選日期 ===== */
function selectDate(date, event) {
  selectedDate = date;

  document.querySelector(".time-select").style.display = "block";
  document.querySelector(".location-select").style.display = "none";

  selectedTime = "";
  selectedLocation = "";

  if (event) {
    setActive(event.target, ".date-select .option-btn");
  }

  updateSummary();
}

/* ===== 選時間 ===== */
function selectTime(time, event) {
  selectedTime = time;

  document.querySelector(".location-select").style.display = "block";

  selectedLocation = "";

  if (event) {
    setActive(event.target, ".time-select .option-btn");
  }

  updateSummary();
}

/* ===== 選影廳 ===== */
function selectLocation(location, event) {
  selectedLocation = location;

  if (event) {
    setActive(event.target, ".location-select .option-btn");
  }

  updateSummary();
}

/* ===== 訂票摘要更新 ===== */
function updateSummary() {
  document.getElementById("summaryText").innerHTML = `
    <div style="
      text-align:center;
      line-height:1.8;
      font-size:16px;
      color:#333;
    ">
      <div>🎬 電影：${selectedMovie || "未選擇"}</div>
      <div>📅 日期：${selectedDate || "未選擇"}</div>
      <div>⏰ 時間：${selectedTime || "未選擇"}</div>
      <div>🏢 影廳：${selectedLocation || "未選擇"}</div>
    </div>
  `;
}

/* ===== 確認訂票 ===== */
function confirmBooking() {
  if (!selectedMovie || !selectedDate || !selectedTime || !selectedLocation) {
    alert("請選擇完整訂票資訊！");
    return;
  }

  alert("訂票成功！");
}
