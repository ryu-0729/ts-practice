// 文字列

const myName: string = 'ryudai'
console.log(myName);

const adress: string = `東京都
品川区`
console.log(adress);

// 文字列結合
console.log(`My name is ${myName}`)

// undefined と null
const testMethod = (name: string, age?: number) => {
    console.log(`name: ${name}, age: ${age || 'empty'}`)
}

console.log(testMethod(myName, 24))
console.log(testMethod(myName))
