// その他の組み込み型・関数

// 現在時刻
const now: Date = new Date()
console.log(now)
// 1時間後
const oneHourLater: Date = new Date()
oneHourLater.setHours(now.getHours() + 1)
console.log(oneHourLater)
// 1日後
const oneDayLater: Date = new Date()
oneDayLater.setDate(now.getDate() + 1)
console.log(oneDayLater)
// 1ヶ月後
const oneMonthLater: Date = new Date()
oneMonthLater.setMonth(now.getMonth() + 1)
console.log(oneMonthLater)
// 1年後
const oneYearLater: Date = new Date()
oneYearLater.setFullYear(now.getFullYear() + 1)
console.log(oneYearLater)

// 今日日付か比較
const today: Number = (new Date()).setHours(0, 0, 0, 0)
console.log(today)
// 比較関数
const diffDate = (date: Date, today: Number): Boolean => {
    const isSameDay: Number = (new Date(date)).setHours(0, 0, 0, 0)
    return (isSameDay === today) ? true : false
}
console.log(diffDate(now, today))

// 正規表現
const inputSample: string = '03-1234-5678'
if (inputSample.match(/\d{2,3}-\d{3,4}-\d{4}/)) console.log('電話番号です')

