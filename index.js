var textColorWhite = true; 
document.addEventListener("DOMContentLoaded", function(event) { 
	var turtle = document.querySelector('#turtle');
	turtle.style.left='0px';
});

function makeTurtleMove() {
	turtle.style.display = 'block';
	var turtleRightPos = turtle.style.left;
	var turtleRightPosNum = parseInt(turtleRightPos.substring(0, turtleRightPos.length - 2), 10);
	if (turtleRightPosNum > 1500) {
		turtle.style.left = '0px';
		turtle.style.display = 'none';
		clearTimeout(turtleTimer);
		return;
	} else {
		(turtle.style.left = turtleRightPosNum + 5 + 'px');
	}
	var turtleTimer = setTimeout(function () { 
		makeTurtleMove();
	}, 40);
}

function turnBlack() {	
	textColorWhite = !textColorWhite;
	if (textColorWhite) {
		document.querySelector('#turn-black-target').style.color='black';
		document.querySelector('#opposite-color').innerHTML='white';
	} else {
		document.querySelector('#turn-black-target').style.color='whitesmoke';
		document.querySelector('#opposite-color').innerHTML='black';
	}
}
