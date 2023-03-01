//Second task is about palindromo
export class TaskTwo {
    constructor(){}

    static Palindrome(input: string): boolean {  
    
        let y: number;
        let z: number;
        
        let Palindromo: boolean = true;
        let palindrome: String = input;
        
        palindrome = palindrome.replace(/ /t,"");
        palindrome = palindrome.toLowerCase();
        
        y =0;
        z= palindrome.length -1;
        
        while ((y<z) && Palindromo){
        if (palindrome.charAt(y) !== palindrome.charAt(z)){
            Palindromo=false;
            }
            y++; 
            z--;
        }
        
        if(palindrome){
            console.log(`Palindromo es = ${palindrome}`);
        }else{
            console.log(`Palindromo es = ${palindrome}`);
        }
        return Palindromo;
    }
}