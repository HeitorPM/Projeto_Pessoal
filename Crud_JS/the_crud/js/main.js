
function id(el) {
    return document.getElementById(el);
  }
  
  function validaCep(){
    var $cep = id('cepCad').value;
    $cep = $cep.replace(/\D/g, "");
    $cep = $cep.replace(/(\d{5})(\d)/g, "$1-$2");
    
    if($cep.length>9){
      id('cepCad').value = $cep.slice(0,9);
      return;
    }
    id('cepCad').value = $cep;
  }
  
  function validaCel(){
    var $cel = id("celularCad").value;
    $cel = $cel.replace(/\D/g, "");
    $cel = $cel.replace(/^(\d{2})(\d)/g, "($1)$2")
    $cel = $cel.replace(/.(\d{2}).(\d{5})(\d)/g, "($1)$2-$3");
    if($cel.length>14){
      id('celularCad').value = $cel.slice(0,14);
      return;
    }
    id('celularCad').value = $cel;
  }
  function validaCpf(){
    var $cpf = id('cpf').value;
  
    $cpf = $cpf.replace(/\D/g, "");
    $cpf = $cpf.replace(/^(\d{3})(\d)/g,'$1.$2');
    $cpf = $cpf.replace(/(\d{3}).(\d{3})(\d)/g,'$1.$2.$3');
    $cpf = $cpf.replace(/(\d{3}).(\d{3}).(\d{3})(\d)/g,'$1.$2.$3-$4');
    $cpf = $cpf.replace(/(\d{3}).(\d{3}).(\d{3}).(\d{2})/g,'$1.$2.$3-$4');
    if($cpf.length>14){
      return id('cpf').value= $cpf.slice(0,14);
      
    }
    id('cpf').value= $cpf;
  }
  function validaTel() {
    debugger
    var $tel = id('telefoneCad').value;
    $tel = $tel.replace(/\D/g, "");
    $tel = $tel.replace(/^(\d{2})(\d)/g, "($1)$2")
    $tel = $tel.replace(/.(\d{2}).(\d{4})(\d)/g, "($1)$2-$3");
    if($tel.length>13){
      id('telefoneCad').value = $tel.slice(0,13);
      return;
    }
    id('telefoneCad').value = $tel
  }
  
    
    
  function maiuscula(texto){
    texto.value = texto.value.toUpperCase();
  }
  
  function valida(){
  
    if(email.value == "" || password.value == ""){
        alert("Preencha todos os campos!");
      //document.container.main.login.email.focus();
      return false;
    }
    if (email.value == "admin" && password.value == "123456"){
      window.location.href = "views/home-admin.html";
    }else if(email.value == "cliente" && password.value == "123456"){
      window.location.href = "views/home-cliente.html";
    }
    else{
      alert("Usuario ou senha incorretos");
      //document.container.main.login.email.focus();
      return false;
    }
  }
  function eventoKP(objeto,funcao){
    id(objeto).addEventListener('keyup', funcao)
   }
  
    function validaCadastro(){
      let $dob =id('dob').value;
      var dataAtual = new Date();
      dataAtual.setHours(0);
      dataAtual.setMinutes(0);
      dataAtual.setSeconds(0);
      dataAtual.setMilliseconds(0);
      if(Number($dob))
  
      if($dob == "" ){
          alert("Preencha a data");
          return;
      }else if (sex-choice.value == ""){
        alert("Preencha o sexo");
        return;
      }
      id('cadastro').submit();
  
   }
  
   
  
   window.onload =function carregamento(){
    eventoKP("telefoneCad",validaTel);
    eventoKP('cepCad', validaCep);
    eventoKP('celularCad', validaCel);
    eventoKP('cpf', validaCpf);
  
    var $salvarBtn = document.getElementById('salvarBtn');
    $salvarBtn.addEventListener('click', validaCadastro)
  }