function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            //limpar o visor (id = 'resultado')
            document.getElementById('resultado').value = '';
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor; 
        }
        if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value) 
            
            document.getElementById('resultado').value = valor_campo;
        }
        
    }else if (tipo === 'valor') {
    //+= pega o valor já contido no campo e faz a concatenação com o valor já contido no campo com o valor recebido por parâmetro.
      document.getElementById('resultado').value += valor;
    }
}