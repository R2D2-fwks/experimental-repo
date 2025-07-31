import { BaseHandler } from "./baseHandler";

export class Chain2 extends BaseHandler{
    async handle(request: any): Promise<any> {
        try {
            console.log("Chain 2")
            return super.handle(request)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}