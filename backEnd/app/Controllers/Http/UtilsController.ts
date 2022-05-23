// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class UtilsController {
    public async numberDecomposition({ params }) {
        const { number } = params

        if (number == 0) {
            return {numero: number, numeroPrimos: [], divisores: []}
        }

        let primeDivisors = [1]
        let divisors = [1];

        if (number > 1) {
            let decompositionEnd = false;
            
            let numberToDecomposition = number;
            let decompositorInit = 2;

            // Pega os divisores primo do numero
            do {    
       
                if (numberToDecomposition == decompositorInit) {
                    primeDivisors.push(decompositorInit)

                    decompositionEnd = true;
                } else if ((numberToDecomposition % decompositorInit) == 0) {
                    numberToDecomposition = numberToDecomposition / decompositorInit
                    
                    primeDivisors.push(decompositorInit)

                    decompositorInit = 2
                } else {

                    decompositorInit += 1
                }
            } while(!decompositionEnd)

            
            // Pega os divisores do numero
            primeDivisors.forEach(primeNumber => {
                if (primeNumber != 1) {
                    divisors.forEach(divisorNumber => {
                        divisors.push(primeNumber * divisorNumber)
                    });
                }
            });
        }

        // Filtra os valores repetidos
        primeDivisors = [...new Set(primeDivisors)];
        divisors = [...new Set(divisors)];

        return {numero: number, numeroPrimos: primeDivisors, divisores: divisors}
    }
}
