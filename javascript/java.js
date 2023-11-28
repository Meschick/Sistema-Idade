function gerar(){
  var data = new Date() // data atual
  var ano = data.getFullYear() // ano atual

  // Manipulando os elementos 
  var input_nasc = document.getElementById("input-nasc")
  var result = document.getElementById("resultado")

  //  Estruturas de Decisão Composta e Aninhadas.
  if (input_nasc.value.length == 0 || input_nasc.value > ano){
    window.alert("[Error] verifique os dados e tente novamente!")
  }else{
    var sexo = document.getElementsByName("radsex")
    var idade = ano - Number(input_nasc.value)

    var genero = ''

    // Criamos uma variável que vai guardar um novo elemento chamado img.
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    //Foi atribuido um id com o nome foto


    if(sexo[0].checked){
      genero = "Homem"
      if (idade>=0 && idade<10){
        // criança
        img.setAttribute("src", "./assets/bebe.png")
        img.style.margin = "10px"
        img.style.width = "200px"
        
      }else if(idade>=10 &&  idade<18){
        // adolescente
        img.setAttribute("src", "./assets/homenAdoslecente.png")
        img.style.margin = "10px"
        img.style.width = "200px"
      }else if(idade>=18 && idade<60){
        //adulto
        img.setAttribute("src", "./assets/HomemAdulto.png")
        img.style.margin ="10px"
        img.style.width = "200px"
      }else{
        img.setAttribute("src", "./assets/idoso.png")
        img.style.width = "200px"
      }
    }else if(sexo[1].checked){
      genero = "mulher"
      if(idade>=0 && idade<10){
        // criança
        img.setAttribute("src", "./assets/bebe.png")
        img.style.margin = "10px"
        img.style.width = "200px"
      }else if(idade>=10 && idade<18){
        // adolescente
        img.setAttribute("src", "./assets/adolescenteMulher.png")
        img.style.margin = "10px"
        img.style.width = "200px"
      }else if(idade>=18 && idade<60){
        // adulto
        img.setAttribute("src", "./assets/mulherAdulta.png")
        img.style.margin = "10px"
        img.style.width = "200px"

      }else{
        img.setAttribute("src", "./assets/idosa.png")
        img.style.width = "200px"
      }
    }
    // Placeholder para concatenar as variáveis
    result.innerHTML = `Validamos ${genero} com uma idade de ${idade} anos`

    // Irá add um Elemento em Result, que nesse caso é (img)
    result.appendChild(img)
  }
}