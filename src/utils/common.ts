export function getRandomNumber(from: number, to: number) {
    return from + Math.floor(Math.random() * (to - from));
}
export function getRandomEnumValue<T extends string, TEnumValue extends string>(enumVariable: {
    [key in T]: TEnumValue;
}) {
    const enumValues = Object.values(enumVariable);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as TEnumValue;
}
