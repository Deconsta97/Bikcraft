if(window.SimpleSlide){

  new SimpleSlide({
    slide:'quote',
    auto: true,
    time: 7000,
  });
  
  new SimpleSlide({
    slide:'portfolio',
    auto: true,
    time: 5000,
    nav:true,
  });
}

if(window.SimpleAnime){  
  new SimpleAnime();
}

if(window.SimpleForm) {
	new SimpleForm({
	  form: ".form_php", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email teste_teste@gmail.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}