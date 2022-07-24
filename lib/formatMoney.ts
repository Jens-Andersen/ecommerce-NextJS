export function formatMoney(amount = 0) {
	return new Intl.NumberFormat('da', {
		style: 'currency',
		currency: 'DKK',
		maximumFractionDigits: amount % 100 === 0 ? 0 : 2, // remove digits after decimal point if amount is a whole number
	}).format(amount / 100); // divide with 100 to get the price in kroner
}
