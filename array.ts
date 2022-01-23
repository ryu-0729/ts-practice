// 配列

// 配列に入れる要素の型名の後ろに[]を付与する
const years: number[] = [2020, 2021, 2022]
const divs: string[] = ['tig', 'sig', 'saig', 'sccig']

console.log(years)
console.log(divs)

// 要素の追加
years.push(2023, 2024)
divs.push('html')

console.log(years)
console.log(divs)

// 要素の取り出し
console.log(years[3])

const smalls: string[] = [
    '小動物', '小型車', '小論文'
]
const otherSmalls: string[] = [
    '小市民', '小田急'
]

// 要素のまとめて取り出し
const [smallAnimal, smallCar, essay] = smalls
console.log(smallAnimal, smallCar, essay)
// 2番目以降の取り出し
const [, ...other] = smalls
console.log(other)

// 要素の存在チェック
if (smalls.includes('小動物')) console.log(smalls[0])

// 配列の加工
const newSmalls = [...smalls.slice(0, 2), '小心者', ...otherSmalls]
console.log(newSmalls)

// 配列のコピー
const copySmalls = [...smalls]
console.log(copySmalls)

// ソート
const numbers: number[] = [18, 1, 252]
numbers.sort((a, b) => a - b)
console.log(numbers)

const stations = [
    {name: "池袋", users: 558623},
    {name: "新宿", users: 775386},
    {name: "渋谷", users: 366128},
    {name: "東京", users: 462589}
];
stations.sort((a, b) => a.users - b.users)
console.log(stations)

// 複合条件でソート
const otherStations = [
    {name: "大手町", lines: 5, yomi: "おおてまち"},
    {name: "飯田橋", lines: 7, yomi: "いいだばし"},
    {name: "永田町", lines: 5, yomi: "ながたちょう"},
];

const cmpNum = (a: number, b: number) => {
    return a < b ? -1 : a === b ? 0 : 1
}
const cmpStr = (a: string, b: string) => {
    return a < b ? -1 : a === b ? 0 : 1
}
// 乗り入れ本数→読みでソート
otherStations.sort((a, b) => {
    const lineScore = cmpNum(a.lines, b.lines)
    const yomiScore = cmpStr(a.yomi, b.yomi)
    return lineScore * 10 + yomiScore
})
console.log(otherStations)

// 非破壊ソート
const sorted = [...stations].sort((a, b) => a.users - b.users)
console.log(sorted)

// ループ
let iterable: string[] = ["小金井", "小淵沢", "小矢部"]
// forEach
iterable.forEach(value => {
    console.log(value)
})
// for..of インデックス含む
for (const [i, value] of iterable.entries()) {
    console.log(`${i}: ${value}`)
}
// 要素のみ
for (const value of iterable) {
    console.log(value)
}

// 読み込み専用の配列
// 型につける場合
const readArray: readonly number[] = [1, 2, 3]
console.log(readArray[1])
// 値やリテラルにつける場合
const otherReadArray = [1, 2, 3] as const
console.log(otherReadArray[1])
