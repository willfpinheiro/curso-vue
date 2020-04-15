new Vue({
	el: "#desafio",
	data: {
		valor: "......",
		valor2: "......",
	},
	methods: {
		exibirAlerta() {
			alert("Alerta exibido");
		},
		atualizarValor() {
			this.valor = event.target.value;
		},
	},
});
