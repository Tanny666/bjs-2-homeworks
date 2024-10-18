"use strict";

function solveEquation(a, b, c) {
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseInt(countMonths);

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	let monthlyInterestRate = (percent / 100) / 12;
	let loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}


	let monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (Math.pow((1 + monthlyInterestRate), countMonths) - 1)));
	let totalPayment = monthlyPayment * countMonths;

	return Math.round(totalPayment * 100) / 100;
}