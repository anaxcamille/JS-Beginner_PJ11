let submit = document.getElementById('submit');
let tip;
submit.addEventListener('click', function(){
	let bill = document.getElementById('bill').value;
	let people = document.getElementById('people_bill').value;
	var x = document.getElementById("service").selectedIndex;
	let option =document.getElementsByTagName("option")[x].value;
 	if((people ==="")&&(bill ==="")){
 		alert("Please set bill&people");
 	}else if(bill === ""){
 		alert("Please set bill");
 	}else if(people ===""){
 		alert("Please set people");
 	}
 	else if(option === "Great-20%"){
 		tip = 0.20;
 		compute();
 	}else if(option ==="Good-10%"){
 		tip = 0.10;
 		compute();
 	}else if(option ==="Bad-2%"){
 		tip = 0.02;
 		compute();
 	}
});

function compute(){
		let bill = document.getElementById('bill').value;
	    let people = document.getElementById('people_bill').value;
	    let container = document.getElementById('container');
	    var totaltip = bill * tip;
	    var amountwtip= Number(totaltip) + Number(bill);
	    let total = Number(amountwtip) / Number(people);
	    var p = document.createElement('p');
 		var totalEach = document.createElement('p');
 		var totalAmount = document.createElement('p');
 		p.appendChild(document.createTextNode("Total tip: $" + totaltip+".00"));
 		totalAmount.appendChild(document.createTextNode("Total Amount: $" + amountwtip+".00"));
 		totalEach.appendChild(document.createTextNode("Each Person Owes: $" + total+".oo"))
 		container.appendChild(p);
 		container.appendChild(totalAmount);
 		container.appendChild(totalEach);
}