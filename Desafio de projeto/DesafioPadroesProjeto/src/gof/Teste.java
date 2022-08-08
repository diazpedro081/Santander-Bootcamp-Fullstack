package gof;

import gof.facade.Facade;
import gof.singleton.SingletonEager;
import gof.singleton.SingletonLazy;
import gof.singleton.SingletonLazyHolder;
import gof.strategy.Comportamento;
import gof.strategy.ComportamentoAgressivo;
import gof.strategy.ComportamentoDefensivo;
import gof.strategy.ComportamentoNormal;
import gof.strategy.Robo;

public class Teste {

	public static void main(String[] args) {
	
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		
		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		eager = SingletonEager.getInstancia();
		System.out.println(eager);
		
		SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		
				Comportamento defensivo = new ComportamentoDefensivo();
				Comportamento normal = new ComportamentoNormal();
				Comportamento agressivo = new ComportamentoAgressivo();

				Robo robo = new Robo();
				robo.setComportamento(normal);
				robo.mover();
				robo.setComportamento(agressivo);
				robo.mover();
				robo.mover();
				robo.setComportamento(defensivo);
				robo.mover();
				
				Facade facade = new Facade();
				facade.migrarCliente("Joao", "65000-000");
				
	}		
	
}