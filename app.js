var result = document.getElementById('result');
var Result1 = document.getElementById('Result1');
var cal;
var value1;
var value2 ;
var oper = '+';
var operPressed;
var tot = 0;
var cal_done;
var currentStatus = 0;
var o;


function back() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}


function num(val) {
	val = val.toString(); 
	if (cal_done)
		
		cls(); 

	if (!operPressed) {
		
		if (!value1) value1 = 0;

		value1 = value1 + val;

		value1 = lengthFix(value1); 

		result.innerHTML = value1;
		Result1.innerHTML = value1;
	
	}
	if (operPressed) {
	
		if (!value2) value2 = 0;

		value2 = value2 + val;

		value2 = lengthFix(value2); 

		result.innerHTML = value2;
		Result1.innerHTML = value1 + oper + value2;
	
	}
}


function calc(val) {
	if (value1 && value2) {
	
		total();
		oper = val;
    }
    
    

	if (cal_done) {
		var x = (value1 = tot);
		cls();
		value1 = x;
		value1 = lengthFix(value1); 
		result.innerHTML = val; 
		Result1.innerHTML = +x + val;
		oper = val;
	
	}

	if (!value1 ) {
		return false;
	}

	if (value1 && !value2) {
		result.innerHTML = val; 
		var a = Result1.innerHTML.toString();
		Result1.innerHTML = a + val;
		oper = val;
		operPressed = true;
	}
}

function total() {
	if (!value1) return false;

	if (!value2 ) {
		tot = magic(value1, value1, oper);
		tot = lengthFix(tot);
	}

	if (value1 && value2) {
		tot = magic(value1, value2, oper);
		tot = lengthFix(tot);
	}

	tot = tot.toString();
	var noDec = tot.indexOf('.') == -1;
	if (!noDec) tot = parseFloat(tot).toFixed(3);

	result.innerHTML = tot;
}

function magic(a, b, oper) {
	switch (oper) {
		case '+':
			tot = +a + +b;
			cal_done = true;
			break;
		case '-':
			tot = +a - +b;
			cal_done = true;
			break;
		case '/':
			tot = +a / +b;
			cal_done = true;
			break;
		case '*':
			tot = +a * +b;
			cal_done = true;
			break;
		default:
			return false;
	}
	return tot;
}


function cls() {
	Result1.innerHTML = '';
	result.innerHTML = 0;
	value1 = "";
	value2 = "";
	oper = '+';
	tot = 0;
	cal_done = "";
	operPressed = "";
}

function lengthFix(o) {
	o = o.toString();

	if (o != 0 || o != '0') {
		if (o.charAt(0) == 0) o = o.slice(1);
	}

	if (o.toString().length > 12) o = o.substring(0, 12);

	return o;
}

document.onkeyup = function(e) {
	if (e.which == 110 || e.which == 190) num('.');
	if (e.which == 96 || e.which == 48) num('0');
	if (e.which == 97 || e.which == 49) num('1');
	if (e.which == 98 || e.which == 50) num('2');
	if (e.which == 99 || e.which == 51) num('3');
	if (e.which == 100 || e.which == 52) num('4');
	if (e.which == 101 || e.which == 53) num('5');
	if (e.which == 102 || e.which == 54) num('6');
	if (e.which == 103 || e.which == 55) num('7');
	if (e.which == 104 || e.which == 56) num('8');
	if (e.which == 105 || e.which == 57) num('9');

	if (e.which == 111) calc('/');
	if (e.which == 106) calc('*');
	if (e.which == 107) calc('+');
	if (e.which == 109) calc('-');

	if (e.which == 13) total();

	if (e.which == 8 || e.which == 46) cls();

	if (e.which == 27) cls();
};
