//Second task is about palindromo
export class TaskTwo {
    constructor(){}

    static Palindrome(input: string): boolean {  
    
        let i: number;
        let j: number;
        
        let Palindromo: boolean = true;
        let palindrome: String = input;
        
        palindrome = palindrome.replace(/ /t,"");
        palindrome = palindrome.toLowerCase();
        
        i =0;
        j= palindrome.length -1;
        
        while ((i<j) && Palindromo){
        if (palindrome.charAt(i) !== palindrome.charAt(j)){
            Palindromo=false;
        
            }
            i++; 
            j--;
        
        }
        
        if(palindrome){
           
            console.log(`Palindromo es = ${palindrome}`);
        }else{
        
            
            console.log(`Palindromo es = ${palindrome}`);
        }
        return Palindromo;
    }
    

}