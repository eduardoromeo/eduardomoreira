//Firs task arrays
export class TaskArray {
    constructor(){}

    static returnTaskArray(input: string ): Array<String>{  
    
        let chain: string=input;
        chain = chain.replace(/ /t,"");
        let array:string []=[];
        
        for (let i:number = 0; i < chain.length; i++) {
            array= chain.split("");
        }
        console.log(array);
        return array;
        
    }
}