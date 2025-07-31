import { sleep } from "../../sleep"
interface Secrets{
    name:string
    age:number
    gender:string
}
const getSecrets =async ():Promise<Secrets>=>{
    console.log("Sleeping for 1 sec")
    await sleep(1000)
    return {
        "name":"Kartikeya",
        "age":36,
        "gender":"Male"
    }
    localhost:1273
}

const getConfig =async ():Promise<Secrets>=>{
    const secrets:Secrets = await getSecrets()
    return secrets
}

class Config {
    static secrets:Secrets
    private constructor(){

    }
    static async getSecrets(){
        if(Config.secrets){
            return Config.secrets
        }
        Config.secrets = await getSecrets()
        return Config.secrets
    }

}


(async ()=>{
    const secretValue:Secrets = await Config.getSecrets()
    console.log(secretValue)
})();


