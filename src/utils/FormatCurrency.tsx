export const FormatCurrencyUS = (value : string) => {
    const formatValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(Number(value));

    return formatValue;
}