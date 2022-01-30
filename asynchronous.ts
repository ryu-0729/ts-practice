// 非同期
// サンプル
const sampleFunction = async (): Promise<number> => {
    // await 時間のかかる処理()
    return 10
}

// Promise の分岐と待ち合わせの制御 サンプル
const heatMisoSoup = async (): Promise<string> => {
    //await ガスレンジ()
    return '味噌汁'
}
const heatRice = async (): Promise<string> => {
    //await ガスレンジ()
    return 'ご飯'
}
//const [misoSoup, rice] = await Promise.all([heatMisoSoup(), heatRice()])
