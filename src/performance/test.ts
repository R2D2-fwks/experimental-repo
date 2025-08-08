class Test{
    addTest:Array<string>
    constructor(){
        this.addTest=[]
    }
    add(name:string){
        this.addTest.push(name)
    }
    get(){
        return this.addTest
    }
    clear(){
        this.addTest=[]
    }
}
(()=>{
    const test = new Test()
    test.add("Kartikeya")
    test.add("Uma")
    test.add("Simba")
    test.add("Agastya")
    test.add("Pratibha")
    test.add("Suresh")
    test.add("Abhyant")
    test.add("Golgol")
    test.add("Goga")
    console.log(test.get())
    test.clear()
    console.log(test.get())
})()