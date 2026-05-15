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

/* ===== 工具：切換 active ===== */
function setActive(button) {
  const group = button.parentElement.querySelectorAll("button");
  group.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

/* ===== 選電影 ===== */
function selectMovie(movieName, event) {
  selectedMovie = movieName;

  if (movieName !== "") {
    document.querySelector(".date-select").style.display = "block";
    document.querySelector(".time-select").style.display = "none";
    document.querySelector(".location-select").style.display = "none";
  }

  selectedDate = "";
  selectedTime = "";
  selectedLocation = "";

  if (event) setActive(event.target);

  updateSummary();
}

/* ===== 選日期 ===== */
function selectDate(date, event) {
  selectedDate = date;

  document.querySelector(".time-select").style.display = "block";
  document.querySelector(".location-select").style.display = "none";

  selectedTime = "";
  selectedLocation = "";

  if (event) setActive(event.target);

  updateSummary();
}

/* ===== 選時間 ===== */
function selectTime(time, event) {
  selectedTime = time;

  document.querySelector(".location-select").style.display = "block";

  selectedLocation = "";

  if (event) setActive(event.target);

  updateSummary();
}

/* ===== 選影廳 ===== */
function selectLocation(location, event) {
  selectedLocation = location;

  if (event) setActive(event.target);

  updateSummary();
}

/* ===== 訂票摘要更新 ===== */
function updateSummary() {
  document.getElementById("summaryText").innerHTML = `
    <div style="text-align:center; line-height:1.8;">
      <div>電影：${selectedMovie || "未選擇"}</div>
      <div>日期：${selectedDate || "未選擇"}</div>
      <div>時間：${selectedTime || "未選擇"}</div>
      <div>影廳：${selectedLocation || "未選擇"}</div>
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
