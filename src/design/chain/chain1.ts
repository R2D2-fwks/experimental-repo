import { BaseHandler } from "./baseHandler";

export class Chain1 extends BaseHandler{
    async handle(request: any): Promise<any> {
        try {
            console.log("Chain 1")
            return super.handle(request)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}