interface Hander{
    setNext: (next: Hander) => Hander;
    handle: (request:any) => Promise<any>;
}

export class BaseHandler implements Hander {
    private nextHandler: Hander | null = null;
    private context:any=null
    setNext(next: Hander): Hander {
        this.nextHandler = next;
        return next;
    }
    async handle(request: any): Promise<any> {
        this.context = request;
        if (this.nextHandler) {
            this.context= await this.nextHandler.handle(request);
        }
        return this.context; // If no next handler, return the request as is
    }
}