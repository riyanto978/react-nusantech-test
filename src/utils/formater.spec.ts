import { formater } from "./formater"


describe("group testing formater", () => {

    // test('fungsi format money ke number', () => {

    //     var data = formater.moneyToNumber("10000")

    //     expect(data).toBe('1000')
    // })

    test('fungsi format number ke money', () => {
        expect(formater.numberToMoney('1000')).toBe('1,000')
    })
})