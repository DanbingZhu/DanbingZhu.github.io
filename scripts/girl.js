// var heart = document.getElementById("heart");
// var hands = document.getElementById("hands");
// var we = document.getElementById("we");

// heart.addEventListener("click", imgLink);
// hands.addEventListener("click", imgLink);
// we.addEventListener("click", imgLink);

// function imgLink() {
// 	var allImg = document.querySelectorAll("img");
// 	console.log(allImg);
// 	for(var i = 0; i < allImg.length; i++){
// 		allImg[i].className = "hide";
// 	}

// 	var imgId = this.attributes["data-img"].value;
// 	var img = document.getElementById(imgId);
// 	console.log(img);
// 	//if(img.className === "hide"){
// 	//	img.className = "";
// 	//} else{
// 	//	img.className = "hide";
// 	//}
// 	$(img).fadeToggle();
// 	console.log(img);
// }


$(function() {

	$('.tab-panels .tabs li').on('click', function() {
		var panel = $(this).closest('.tab-panels');

		panel.find('.tabs li .active').removeClass('active');
		$(this).addClass('active');

		var panelToShow = $(this).attr('rel');

		panel.find('.panel.active').slideUp(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass('active');

			$('.hide').each(function(){
				$(this).hide();
			});
			$('#'+panelToShow).slideDown(300, function() {
				$(this).addClass('active');
			});
		}
	});
});

$(document).ready(function() {
    $('.btn').on('click',function() {
        var img = $(this).attr('data-img');
        $('#'+img).fadeToggle();
    });

});