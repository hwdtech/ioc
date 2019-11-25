import IoC from "../index"

test("success", ()=> {
    const a = (i: number)=> (2+i)
    IoC`register`({key: "test", dependency: a})

    expect(IoC`test`(2)).toEqual(4)
})

test("success", ()=> {
    const a = (i: number)=> (2+i)
    IoC`register`({key: "test", dependency: a})

    const test = "test"
    expect(IoC`${test}`(2)).toEqual(4)
})