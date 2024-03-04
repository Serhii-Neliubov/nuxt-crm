export const convertCurrency = (amount: string | number) => {
	return new Intl.NumberFormat('ua-UA', {
		style: 'currency',
		currency: 'USD',
	}).format(+amount)
}
