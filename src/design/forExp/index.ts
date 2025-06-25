import { sleep } from "./sleep"
const work1 = async()=>{
    await sleep(1000);
    console.log("From work 1")
}
const work2 = async()=>{
    await sleep(1000);
    console.log("From work 2")
}

const work3 = async()=>{
    await sleep(1000);
    console.log("From work 3")
}

const works = [work1,work2,work3];
// This does not work
// works.forEach(async (el)=>{
//     await el();
// })

// This does not work
// works.map(async (el)=>{
//     await el();
// })
(async ()=>{
    for(const work of works){
        await work()
    }
    console.log("After the for loop is executed")
})();

