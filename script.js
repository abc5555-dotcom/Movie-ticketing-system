function goBooking() {
  window.location.href = "./booking.html";
}

function goHome() {
  window.location.href = "index.html";
}

/* ===== 狀態 ===== */
let selectedMovie = "";
let selectedDate = "";
let selectedTime = "";
let selectedLocation = "";

/* ===== 通用 active（安全版） ===== */
function setActive(button, selector) {
  if (!button) return;

  document.querySelectorAll(selector).forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

/* ===== 選電影 ===== */
function selectMovie(movieName, event) {
  selectedMovie = movieName;

  const dateBox = document.querySelector(".date-select");
  const timeBox = document.querySelector(".time-select");
  const locBox = document.querySelector(".location-select");

  if (dateBox) dateBox.style.display = movieName ? "block" : "none";
  if (timeBox) timeBox.style.display = "none";
  if (locBox) locBox.style.display = "none";

  selectedDate = "";
  selectedTime = "";
  selectedLocation = "";

  if (event?.target) {
    setActive(event.target, ".date-select .option-btn");
  }

  updateSummary();
}

/* ===== 選日期 ===== */
function selectDate(date, event) {
  selectedDate = date;

  const timeBox = document.querySelector(".time-select");
  const locBox = document.querySelector(".location-select");

  if (timeBox) timeBox.style.display = "block";
  if (locBox) locBox.style.display = "none";

  selectedTime = "";
  selectedLocation = "";

  if (event?.target) {
    setActive(event.target, ".date-select .option-btn");
  }

  updateSummary();
}

/* ===== 選時間 ===== */
function selectTime(time, event) {
  selectedTime = time;

  const locBox = document.querySelector(".location-select");

  if (locBox) locBox.style.display = "block";

  selectedLocation = "";

  if (event?.target) {
    setActive(event.target, ".time-select .option-btn");
  }

  updateSummary();
}

/* ===== 選影廳 ===== */
function selectLocation(location, event) {
  selectedLocation = location;

  if (event?.target) {
    setActive(event.target, ".location-select .option-btn");
  }

  updateSummary();
}

/* ===== 訂票摘要更新（乾淨版）===== */
function updateSummary() {
  const el = document.getElementById("summaryText");
  if (!el) return;

  el.innerHTML = `
    <div style="
      text-align:center;
      line-height:1.8;
      font-size:16px;
      color:#333;
    ">
      <div>🎬 電影：${selectedMovie || "-"}</div>
      <div>📅 日期：${selectedDate || "-"}</div>
      <div>⏰ 時間：${selectedTime || "-"}</div>
      <div>🏢 影廳：${selectedLocation || "-"}</div>
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
