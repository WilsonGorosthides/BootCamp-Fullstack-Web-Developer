function validateArrayAndNumber(arr, num) {
    try {
        if (arr === undefined || num === undefined) {
            throw new ReferenceError('Configurações não enviadas');
        }
        
        if (typeof arr !== 'object') {
            throw new TypeError('O array deve ser do tipo objeto');
        }
        
        if (typeof num !== 'number') {
            throw new TypeError('O número deve ser do tipo number');
        }
        
        if (arr.length !== num) {
            throw new RangeError('O tamanho do array é diferente do número enviado como parâmetro');
        }
        
        return arr;
        
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.error('ReferenceError: ' + error.message);
        } else if (error instanceof TypeError) {
            console.error('TypeError: ' + error.message);
        } else if (error instanceof RangeError) {
            console.error('RangeError: ' + error.message);
        } else {
            console.error('Erro inesperado: ' + error.message);
        }
    }
}

// Exemplos de uso:
console.log(validateArrayAndNumber([1, 2, 3], 3)); // Validação bem-sucedida!
console.log(validateArrayAndNumber([1, 2, 3], 2)); // RangeError: O tamanho do array é diferente do número enviado como parâmetro
console.log(validateArrayAndNumber([1, 2, 3], '3')); // TypeError: O número deve ser do tipo number
console.log(validateArrayAndNumber('não é um array', 3)); // TypeError: O array deve ser do tipo objeto
console.log(validateArrayAndNumber(undefined, 3)); // ReferenceError: Configurações não enviadas
console.log(validateArrayAndNumber([1, 2, 3])); // ReferenceError: Configurações não enviadas
