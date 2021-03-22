## Alunos
| Matrícula  | Aluno                         |
| ---------- | ----------------------------- |
| 18/0063723 | Fellipe dos Santos Araujo     |
| 17/0069800 | Ithalo Luiz de Azevedo Mendes |

## Link para o repositório
https://github.com/projeto-de-algoritmos/Greed_ProblemaDoLadrao

## Questão 12
 **a)** A afirmação é falsa. Se os tempos da primeira e da segunda stream forem iguais e b1 = r+1 e b2 = r-1, a stream 2 sempre virá primeiro.  
 **b)** O primeiro a ser feito é um looping com o parâmetro r de cada vídeo, ordenando os em um array. Depois da ordenação, devemos fazer uma verificação no array. Enquanto cada elemento do array for menor que o parâmetro r definido a transmissão será válida.  

## Questão 04

>S= {S,...,Sn} <br>
>S'= {S',..., Sn'} <br>
>
>initially: i = j = 1<br>
>while (i <= n && j<=m)<br>
>{
>    if (Si = Sj)<br>
>        Kj = i<br>
>        i = i + 1<br>
>        j = j + 1<br>
>    else<br>
>        i = i + 1<br>
>}<br>
>if (j = m +1) return K, ..., Km<br>
>else return 0.
