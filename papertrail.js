var eventList;
var onAddMark = function(event) {

	var markNode = document.createElement('li');
	markNode.style = 'border-top: 1px dashed #03498F; margin: 3ex 0';
	eventList.appendChild(markNode);

	event.preventDefault();
};

document.addEventListener('DOMContentLoaded', function() {
	eventList = document.getElementById('event_list');
	if (eventList === null) {
		return;
	}

	var markImage = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0ibWl1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9IkFydGJvYXJkLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzUuMDAwMDAwLCAtMjYzLjAwMDAwMCkiPjxnIGlkPSJzbGljZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE1LjAwMDAwMCwgMTE5LjAwMDAwMCkiLz48cGF0aCBkPSJNNTgxLDI2NS45MTMwNDMgTDU4MSwyODYgTDU4NywyODAuMjYwODcgTDU5MywyODYgTDU5MywyNjUuOTEzMDQzIEM1OTMsMjY0IDU5MSwyNjQgNTkxLDI2NCBMNTgzLDI2NCBDNTgzLDI2NCA1ODEsMjY0IDU4MSwyNjUuOTEzMDQzIFogTTU4MiwyODMuNyBMNTg3LDI3OS4wMjUgTDU5MiwyODMuNyBMNTkyLDI2Ni4wMDUzOTMgQzU5MiwyNjUuNDUwMTMgNTkxLjU0NDMzNiwyNjUgNTkxLjAwNDYwMiwyNjUgTDU4Mi45OTUzOTgsMjY1IEM1ODIuNDQ1NjU1LDI2NSA1ODIsMjY1LjQ0MzgwNiA1ODIsMjY2LjAwNTM5MyBMNTgyLDI4My43IFoiIGZpbGw9IiMwMDAwMDAiIGlkPSJjb21tb24tYm9va21hcmstb3V0bGluZS1zdHJva2UiLz48L2c+PC9nPjwvc3ZnPg==';

	var buttonContainer = document.querySelector('.standard-button-links');

	var markButton = document.createElement('a');
	markButton.href = "#";
	markButton.className = "inactive";
	markButton['data-tooltip'] = 'Add mark at current time';
	markButton.style = "padding: 5px;";
	markButton.innerHTML = '<img src="' + markImage + '" style="width: 22px; height: 24px; vertical-align: -6px;">';
	markButton.addEventListener('click', onAddMark);

	buttonContainer.appendChild(markButton);
});
