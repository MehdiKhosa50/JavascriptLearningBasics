let count = 0;
function findVowel(word){
    for(let char of word){
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    return count;
}
let result = findVowel("MyDream");
console.log(result);