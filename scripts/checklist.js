var todolist = document.getElementById("todolist");

var items = todolist.querySelectorAll("li");
var inputs = todolist.querySelectorAll("input");

for (var i = 0; i < items.length; i++){
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress() {
	if (event.which === 13){
		updateItem.call(this);
	}
}