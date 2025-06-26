import { sleep } from "./sleep"
const work1 = async()=>{
    let localError=null
    let value = 1
    try {
        await sleep(1000);
        console.log("From work 1")
    } catch (error) {
        localError=error
    }
    return{value,localError}
}
const work2 = async()=>{
    let localError=null
    let value = 2
    try {
        await sleep(1000);
        console.log("From work 2")
        throw new Error("Simulation")
    } catch (error) {
        localError=error
    }
    return{value,localError}
}

const work3 = async()=>{
    let localError=null
    let value = 3
    try {
        await sleep(1000);
        console.log("From work 3")
    } catch (error) {
        localError=error
    }
    return{value,localError}
}

const works = [work1,work2,work3];
const test=async ()=>{
    const errors =[]
    for(const work of works){
        const {localError} = await work()
        if(localError){
            errors.push(localError)
        }
    }
    console.log(errors)
    console.log("After the for loop is executed")
}
(async()=>{
    await test()
})()
