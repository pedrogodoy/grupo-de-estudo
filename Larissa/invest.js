class InvestimentoRendaFixaCDI{
	 constructor(){
  	this.saldo = 0;
    this.saldo = 0;
  }
  investir(valor){
    this.saldo += valor;
  }
  rentabilidadeInvestimento(indice){
    this.saldo += this.saldo * indice/100 * this.cdi/100;
  }
  imprimirSaldo(mes){
    console.log('Saldo RF 120 % CDI Mês ' + mes + ' R$ ' + this.saldo);
  }
  
}

class InvestimentoRendaFixaCDI120 extends InvestimentoRendaFixaCDI{
	constructor(){
  		super()
    	this.saldo = 0;
    	this.cdi = 120;
    }
}

class InvestimentoRendaFixaCDI180 extends InvestimentoRendaFixaCDI{
	constructor(){
  	super()
		this.saldo = 0;
		this.cdi = 180;
	}
}

var invest120 = new InvestimentoRendaFixaCDI120();
invest120.investir(1000);
invest120.imprimirSaldo('Set/2020');
invest120.rentabilidadeInvestimento(0.16);
invest120.imprimirSaldo('Out/2020');

var invest180 = new InvestimentoRendaFixaCDI180();
invest180.investir(1000);
invest180.imprimirSaldo('Set/2020');
invest180.rentabilidadeInvestimento(0.16);
invest180.imprimirSaldo('Out/2020');