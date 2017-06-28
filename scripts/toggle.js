var heart = document.getElementById("heart");
var hands = document.getElementById("hands");
var we = document.getElementById("we");

heart.addEventListener("click", imgLink);
hands.addEventListener("click", imgLink);
we.addEventListener("click", imgLink);

function imgLink() {
	var allImg = document.querySelectorAll("img");

	for(var i = 0; i < allImg.length; i++){
		allImg[i].className = "hide";
	}

	var imgId = this.attributes["data-img"].value;
	var img = document.getElementById(imgId);
	if(img.className === "hide"){
		img.className = "";
	} else{
		img.className = "hide";
	}
}
