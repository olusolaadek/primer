export function sumValues(values) {
    return values.reduce((total, val) => total + val, 0);
}// eslint-disable-next-line import/no-anonymous-default-export


export default function sumOdd(values) {
    return sumValues(values.filter((val, index) => index % 2 === 0));

}
