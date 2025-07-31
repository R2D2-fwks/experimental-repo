import { Chain1 } from "./chain1"
import { Chain2 } from "./chain2";
import { Chain3 } from "./chain3";

const executeChain = async ()=>{
    const chain1 = new Chain1();
    const chain2 = new Chain2();
    const chain3 = new Chain3();
    chain1
        .setNext(chain2)
        .setNext(chain3)
    return await chain1.handle({})
}

(async()=>{
    await executeChain()
})()
