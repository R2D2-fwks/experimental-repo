import { BaseHandler } from "./baseHandler";

export class Chain3 extends BaseHandler{
    async handle(request: any): Promise<any> {
        try {
            const {a,b} = request
            console.log("Chain 3")
            throw new Error("Error in chain 3")
            const c = a+b          
            return super.handle({...request,c})
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}