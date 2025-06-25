interface Hander{
    setNext: (next: Hander) => Hander;
    handle: <T>(request:T) => Promise<T>;
}

export class BaseHandler implements Hander {
    private nextHandler: Hander | null = null;
    private context<T>:T=null
    setNext(next: Hander): Hander {
        this.nextHandler = next;
        return next;
    }
    async handle<T>(request: T): Promise<T> {
        this.context = request;
        if (this.nextHandler) {
            this.context= await this.nextHandler.handle(request);
        }
        return this.context; // If no next handler, return the request as is
    }
}