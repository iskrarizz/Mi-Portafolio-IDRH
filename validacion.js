//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

textarea.addEventListener("blur", (textarea) => {
  valida(textarea.target);
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  console.log(input.parentElement);
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio",
  },
  email: {
    valueMissing: "El Campo e-mail no debe estar en blanco o vacío",
    typeMismatch: "El correo no es valido",
  },
  asunto: {
    valueMissing: "El Campo Asunto no debe estar en blanco o vacío",
    patternMismatch: "El asunto debe contener maximo 50 caracteres",
  },

  mensaje: {
    valueMissing: "El Campo Mensaje no debe estar en blanco o vacío",
    patternMismatch: "El mensaje debe contener maximo 300 caracteres",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
