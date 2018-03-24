function dragStart(e) {
	e.dataTransfer.setData("text/plain",e.target.id);
}
 
function dragEnter(e) {
	event.preventDefault();
return true;
}
 
function dragDrop(e) {
	var data = e.dataTransfer.getData("text/plain");
	e.target.appendChild(document.getElementById(data));
}
 
function dragOver(e) {
	event.preventDefault();
}