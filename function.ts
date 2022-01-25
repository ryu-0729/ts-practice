// 関数

// 関数への型付け
const lowerCase = (input: string): string => {
    return input.toLowerCase()
}
console.log(lowerCase('HELLO'))

// 返り値がない場合
const hello = (): void => {
    console.log('hollo')
}
interface Greeter {
    //hello()
}

// 関数を扱う変数の型定義
// let check: (arg1: string, arg2: number) => boolean
// 引数が関数
let check: (arg1: string, arg2: (arg3: string) => number) => boolean

// 一度だけ変換するソート関数
const sort = (a: string[], conv: (value: string) => string) => {
    const entries = a.map((value) => [value, conv(value)])
    entries.sort((a, b) => {
        return (a[1] > b[1]) ? 1 : -1
        return 0
    })
    return entries.map(entry => entry[0])
}
const a: string[] = ['a', 'B', 'D', 'c']
console.log(sort(a, s => s.toLowerCase()))

// 何もしない無名関数
//let callback = () => {}
// 変数宣言（代入なし）
/* let callback: (name: string) => void
// ダミー関数を設定
callback = (name: string): void => {} */
// 上記を1行で
let callback = (name: string): void => {}
