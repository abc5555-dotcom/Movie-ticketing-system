<script>
	function goBooking(){
		window.location.href = "./booking.html";
	}
	let selectedMovie = "";  
	let selectedDate = ""; 
	let selectedTime = ""; 
			
	function selectMovie(movieName){
		selectedMovie = movieName;
		if(movieName !== ""){
			document.querySelector(".date-select").style.display = "block";
			document.querySelector(".time-select").style.display = "none";
		}
		updateSummary();
		selectedDate = "";
		selectedTime = "";
	}
	function selectDate(date){
		selectedDate = date;
		document.querySelector(".time-select").style.display = "block";
		updateSummary();
	}
	function selectTime(time){
		selectedTime = time;
		updateSummary();
	}
	function updateSummary(){
		document.getElementById("summaryText").innerHTML =
			"電影：" + selectedMovie + "<br>" +
			"日期：" + selectedDate + "<br>" +
			"時間：" + selectedTime;
	}
	function confirmBooking(){
		if(selectedMovie && selectedDate && selectedTime){
			alert("訂票成功！");
		}else{
			alert("請選擇完整資訊！");
		}
	}
</script>
