let inputForm = document.getElementById("formForm");

inputForm.addEventListener("submit", (e) => {
	console.log(`start`)
	e.preventDefault();

	let invocation =  document.getElementById("invocation-number");
	let team_size = document.getElementById("team_size");
	let barrows_pieces = document.getElementById("barrows_pieces");

	 if (invocation.value == "" || team_size.value == "" || barrows_pieces.value == "") {
	 	alert("No values given for field");
	 } else {
	 	console.log(`running calcPoints`)
	 	var points = calcPoints(invocation, team_size, barrows_pieces)
	 	console.log(`calcPoints ran, points = ${points.value}`)
	 	showMessage(points)
	 	console.log(`Form submitted with invo: ${invocation.value} team: ${team_size.value} bp: ${barrows_pieces.value}`)
	 }
});

function calcPoints(invocation, team_size, barrows_pieces) {
	var invo_dict = {
		100:1,
		150:2,
		200:3,
		250:4,
		300:5
	};
	console.log(`${invocation.value}, ${team_size.value}., ${barrows_pieces.value}`)
	let invo_pts = invo_dict[invocation.value];
	let points = invo_pts + (team_size.value/2) + (barrows_pieces.value/2)
	console.log(`33: ${points} ${invo_pts}`)
	return points;
};

function showMessage(points){
	console.log(`showMessage ran: points = ${points}`)
	display_points.innerHTML= points;
};