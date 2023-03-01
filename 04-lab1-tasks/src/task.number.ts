//Three task about number best
export class TaskNumber {
    constructor(){}

    static thenumberbest(input: number[] ): Number {  
    //array the numbers
        let arrayNumber: number[] = input ;//[1, 3, 9, 17, 69, 47];
        let numberbest:number= arrayNumber[0];
        
        for (let i = 1; i < arrayNumber.length; i++) {
            if(arrayNumber[i] >numberbest){
                numberbest = arrayNumber[i];
        
            }
        }
        
        console.log(`The number best is : ${numberbest}`);
        //view number best
        return numberbest;
    }
    

}