// ジェネリクス

// 関数宣言
const multiply = <T>(multiValue: T, n: number): Array<T> => {
    const result: Array<T> = []
    result.length = n
    result.fill(multiValue)
    return result
}
console.log(multiply<number>(-1, 10))
console.log(multiply<string>('すごい', 10))

// extendsで型パラメータに制約を与える
type ExtendsPerson = {
    getBirthday(): Date
}
const isTodayBirthday = <T extends ExtendsPerson>(person: T): boolean => {
    const today = new Date()
    const birthDay = person.getBirthday()
    return today.getMonth() === birthDay.getMonth() && today.getMonth() === birthDay.getDate()
}

// 値の設定を大げさに書く
const setValue = <T, K extends keyof T, U extends T[K]>(obj: T, key: K, value: U) => {
    return obj[key] = value
}
type parkForm = {
    parkName: string,
    hasTako: boolean
}
const park: parkForm = {
    parkName: '台原森林公園',
    hasTako: true
}
console.log(setValue(park, 'parkName', '公園'))
