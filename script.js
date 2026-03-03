function goBooking(){
	window.location.href = "./booking.html";
}
function goHome(){
	window.location.href = "index.html";
}

/* ===== 訂票狀態變數 ===== */
let selectedMovie = "";  
let selectedDate = ""; 
let selectedTime = ""; 
let selectedLocation = "";

/* ===== 選電影 ===== */
function selectMovie(movieName){

	selectedMovie = movieName;

	/* 選電影後才顯示日期 */
	if(movieName !== ""){
		document.querySelector(".date-select").style.display = "block";
		document.querySelector(".time-select").style.display = "none";
	}

	/* 重置後續選項 */
	selectedDate = "";
	selectedTime = "";
	selectedLocation = "";

	updateSummary();
}

/* ===== 選日期 ===== */
function selectDate(date){

	selectedDate = date;

	document.querySelector(".time-select").style.display = "block";

	selectedTime = "";
	selectedLocation = "";

	updateSummary();
}

/* ===== 選時間 ===== */
function selectTime(time){

	selectedTime = time;

	selectedLocation = "";

	updateSummary();
}

/* ===== 選影廳 ===== */
function selectLocation(location){

	selectedLocation = location;
	updateSummary();
}

/* ===== 訂票摘要更新（核心）===== */
function updateSummary(){

	document.getElementById("summaryText").innerHTML =
	`
電影：${selectedMovie || "未選擇"}<br>
日期：${selectedDate || "未選擇"}<br>
時間：${selectedTime || "未選擇"}<br>
影廳：${selectedLocation || "未選擇"}
`;
}

/* ===== 確認訂票 ===== */
function confirmBooking(){

	if(!selectedMovie || !selectedDate || !selectedTime || !selectedLocation){
		alert("請選擇完整訂票資訊！");
		return;
	}

	alert("訂票成功！");
}
