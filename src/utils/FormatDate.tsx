export const FormatDateUS = (date : Date) => {
    return new Intl.DateTimeFormat("en-US").format(date);
}