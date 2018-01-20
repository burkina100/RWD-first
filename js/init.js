$(document).ready(function() {
	//加入問候語
(function () {
	var greet = $("#greeting");
		var nowHour = new Date().getHours();
		if(nowHour >= 18) {
			greet.html("晚安，您好");
		}else if(nowHour >= 12) {
			greet.html("午安，您好");
		}else if(nowHour >= 6) {
			greet.html("早安，您好");
		}else {
			greet.html("現在是凌晨，請早點休息");
		}
	}());
	
	//載入後，將排行榜圖片加入mouseover事件
	$(".changeBookImage").mouseover(function() {
		var bookName = $(this).attr("name");
		var imageContainerId = bookName.substr(0, bookName.length-1);
		$("#" + imageContainerId).css("background-image", "url(images/books/" +
			imageContainerId + "/" + bookName + ".png)");
	});
});