# Debugging e Error Handling com JavaScript
## Tipos de Erro

### Objetivo
1. Apresentar o objetivo Error do <strong>ECMAScript</strong>
2. Apresentar a <strong>DOMException</strong>


## ECMAScript Error<br>Tratamento de erros
<p>Erros que ocorrem em tempo de execução.</p>
<p><strong>Composto por: </strong></p>

* Mensagem
* Nome
* Linha
* Call Stack

## DOMException<br>Tratamento de erros
<p>Erros relacionados ao document Object Model (DOM)</p>

## Tratando Erros<br> tratamento de erros

### Objetivo
1.  Explicar a diferença entre "trhow" e "return"
2. Apresentar a implementação da declaração try/catch

## Throw
<p>Lança uma exceção explicitamente <br>
throw new TipoDeExcecao("mensagem de erro");</p>
<table>
  <tr>
    <td><img src="img/throw1.png" width="400" /></td>
    <td><img src="img/throw3.png" width="400" /></td>
  </tr>
  <tr>
    <td><img src="img/throw2.png" width="400" /></td>
    <td><img src="img/throw4.png" width="400" /></td>
  </tr>
</table>

## Try...Catch
<p>Tenta executar o código no bloco try e captura exceções no bloco catch
</p>

<table>
  <tr>
    <td><img src="img/trycatch1.png" width="400" /></td>
    <td><img src="img/trycatch2.png" width="450" /></td>
  </tr>
  <tr>
    <td><img src="img/trycatch3.png" width="450" /></td>
    <td><img src="img/trycatch4.png" width="450" /></td>

  </tr>
</table>

## Finally
<p>O bloco finally em Java é uma parte opcional de uma estrutura de tratamento de exceções que pode ser usada junto com try e catch. Ele é utilizado para executar um conjunto de instruções que devem ser executadas independentemente de uma exceção ser lançada ou não.</p>







