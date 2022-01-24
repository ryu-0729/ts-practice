// 型定義

// 型に名前をつける
type BirthDay = number | string
// 値の設定
type FoodMenu = '焼肉' | 'すし'
// 変数や関数の引数で利用
const birthday: BirthDay = '平成'
console.log(birthday)

const orderFood = (food: FoodMenu) => {
    return food
}

console.log(orderFood('焼肉'))
// console.log(orderFood('すき焼き')) エラー

// オブジェクトの定義
type Person = {
    person_name: string
    person_age: number
    shool: string
}

const person: Person = {
    person_name: 'hoge',
    person_age: 24,
    shool: 'fugaSchool'
}
console.log(person)

// オブジェクトの属性の修飾: オプション、読み込み専用
type otherPerson = {
    person_name: string
    readonly person_age: number
    shool?: string
}

const typeOtherPerson: otherPerson = {
    person_name: 'fuga',
    person_age: 24
}
console.log(typeOtherPerson)

// Partial
const wzz: Partial<Person> = {person_name: 'wzz'}
console.log(wzz)

// 属性名が可変のオブジェクトを扱う
const postalCodes: { [key: string]: string } = {
    "602-0000": "京都市上京区",
    "602-0827": "京都市上京区相生町",
    "602-0828": "京都市上京区愛染寺町",
    "602-0054": "京都市上京区飛鳥井町",
}
console.log(postalCodes)

// AかつBでなければならない
type Twitter = {
    twitterId: string
}
type Instagram = {
    instagramId: string
}
/* const shibukawa: Twitter & Instagram = {
    twitterId: '@shibu_jp',
    instagramId: 'shibukawa'
} */
type PartyPeople = Twitter & Instagram
const shibukawa: PartyPeople = {
    twitterId: '@shibu_jp',
    instagramId: 'shibukawa'
}
console.log(shibukawa)

// 柔軟な型定義
// チェックボックス用の型定義
type CheckStyle = {
    uncheckBgColor: string
    checkBgColor: string
}
type CheckColum = {
    columnType: 'check'
    caption: string
    field: string
    style: CheckStyle
}
// 数値用の型定義
type NumberStyle = {
    color: string
}
type NumberColum = {
    columnType: 'number'
    caption: string
    field: string
    style: NumberStyle
}
// チェックボックスと数値両方を取り得る合併型
type Column = CheckColum | NumberColum

const header: Column[] = [
    {field: 'number', caption: 'number', columnType: 'number',
    style: {color: 'red'}},
    {field: 'check', caption: 'check', columnType: 'check',
    style: {
        uncheckBgColor: '#FDD',
        checkBgColor: 'rgb(255, 73, 72)'
    }}
]
console.log(header)

// 型ガード
const getValue = (column: Column): string => {
    let answer = ''
    answer = column.field === 'number' ? column.field : column.field
    return answer
}
console.log(getValue(header[0]))
console.log(getValue(header[1]))
