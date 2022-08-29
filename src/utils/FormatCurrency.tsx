export const FormatCurrencyUS = (value : number) => {
    const formatValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value);

    return formatValue;
}