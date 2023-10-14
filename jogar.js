//VELHA MENOR 01
document.addEventListener("DOMContentLoaded", function() {
    const ElVelhaMenor1 = document.getElementById("VelhaMenor1");
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        div.className = "estiloEspaco";
        div.id = `estiloEspaco_${i}_${j}`;
  
        ElVelhaMenor1.appendChild(div);
      }
    }
  
  });


  //VELHA MENOR 02
document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor2 = document.getElementById("VelhaMenor2");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor2.appendChild(div);
    }
  }

});

  //VELHA MENOR 03
  document.addEventListener("DOMContentLoaded", function() {
    const ElVelhaMenor3 = document.getElementById("VelhaMenor3");
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        div.className = "estiloEspaco";
        div.id = `estiloEspaco_${i}_${j}`;
  
        ElVelhaMenor3.appendChild(div);
      }
    }
  
  });

 //VELHA MENOR 04
 document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor4 = document.getElementById("VelhaMenor4");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor4.appendChild(div);
    }
  }

});

 //VELHA MENOR 05
 document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor5 = document.getElementById("VelhaMenor5");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor5.appendChild(div);
    }
  }

});

 //VELHA MENOR 06
 document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor6 = document.getElementById("VelhaMenor6");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor6.appendChild(div);
    }
  }

});

 //VELHA MENOR 07
 document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor7 = document.getElementById("VelhaMenor7");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor7.appendChild(div);
    }
  }

});

 //VELHA MENOR 08
 document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor8 = document.getElementById("VelhaMenor8");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor8.appendChild(div);
    }
  }

});

 //VELHA MENOR 9
 document.addEventListener("DOMContentLoaded", function() {
  const ElVelhaMenor9 = document.getElementById("VelhaMenor9");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.className = "estiloEspaco";
      div.id = `estiloEspaco_${i}_${j}`;

      ElVelhaMenor9.appendChild(div);
    }
  }

});

  document.addEventListener("DOMContentLoaded", function() {
    let elementosEspaco = document.querySelectorAll(".estiloEspaco");
  
    let contVeZ = 0; // Variável para controlar de quem é a vez
let elementosClicados = []; // Array para rastrear elementos já clicados

elementosEspaco.forEach(elemento => {
  elemento.addEventListener("click", function() {
    // Verifica se o elemento já foi clicado
    if (!elementosClicados.includes(elemento)) {
      if (contVeZ % 2 === 0) {
        elemento.textContent = "X"; // Altera o conteúdo do elemento para "X"
      } else {
        elemento.textContent = "O"; // Altera o conteúdo do elemento para "O"
      }

      contVeZ++; // Incrementa o contador de vez
      elementosClicados.push(elemento); // Adiciona o elemento ao array de elementos clicados
    } else {
      alert("Este elemento já foi clicado."); // Mostra um alerta se o elemento já foi clicado
    }
  });
});
    console.log("Eventos de clique adicionados aos elementos estiloEspaco");
  
  });