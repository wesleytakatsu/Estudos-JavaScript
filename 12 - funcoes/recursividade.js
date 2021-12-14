/*
 RODA A FUNÇÃO DENTRO DELA MESMA

5! = 5 X 4 X 3 X 2 X 1 = 120

5! = 5 X 4!

n! = n * (n - 1)!

1! = 1
*/

function fatorial (x){
    if (x == 1){
        return 1
    }else{
        return x = x * fatorial(x-1)
    }
}

console.log(fatorial(5))
