export const { format: formatCurrency } = new Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : 'USD'
});

export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-Us").format(date);