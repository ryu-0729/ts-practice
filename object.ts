// オブジェクト

const key: string = 'favorite drink'
const smAnimal: {animal_name: string, favorite?: string, 'home town'?: string} | null = {
    animal_name: "小動物",
    favorite: "小籠包",
    'home town': "神奈川県警のいるところ",
    //[key]: "ストロングゼロ"
}
console.log(smAnimal.animal_name)
//console.log(smAnimal[key])

const jsonData = JSON.stringify(smAnimal, null, 2)
console.log(jsonData)
const smAnimal2 = JSON.parse(jsonData)
console.log(smAnimal2)

// データの取り出し
//const {smAnimalName, favorite, age = 3} = smAnimal
//console.log(smAnimalName, favorite, age)
// 特定の要素以外の取り出し
const {animal_name, ...otherSmAnimal} = smAnimal
console.log(otherSmAnimal)

// オブジェクト要素の加工
const copySmAnimal = {...smAnimal}
console.log(copySmAnimal)

// オブジェクトのマージ
const attributes: {job?: string, nearStation?: string} | null = {
    job: 'プログラマー ',
    nearStation: '多賀城駅'
}
const mergeObject = {...smAnimal, ...attributes}
console.log(mergeObject)

// 読み込み専用のオブジェクト
type User = {
    user_name: string,
    user_age: number
}
/* const u: Readonly<User> = {user_name: 'ryudai', user_age: 24} */
const u = {user_name: 'ryudai', user_age: 24} as const
console.log(u)
