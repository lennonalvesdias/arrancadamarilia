document.getElementById("registrationForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);
  const feedbackMessage = document.getElementById("feedbackMessage");

  // Substitua com seu ID de serviço, ID de template e ID de usuário do EmailJS
  const serviceID = "service_43j22h9";
  const templateID = "template_0q5q1jm";
  const userID = "Cmv8UOdHK_4NEc1wo";

  // Configuração dos parâmetros do template
  const templateParams = {
    name: formData.get("name"),
    contact: formData.get("contact"),
    carModel: formData.get("carModel"),
    carYear: formData.get("carYear"),
    carEngine: formData.get("carEngine")
  };

  try {
    // Envia o email usando EmailJS
    await emailjs.send(serviceID, templateID, templateParams, userID);

    // Mensagem de sucesso e substituição do formulário
    feedbackMessage.textContent = "Inscrição realizada com sucesso! Aguardamos o comprovante de pagamento para confirmar a sua participação.";
    feedbackMessage.classList.add("success");
    document.getElementById("form-container").innerHTML = ''; // Remove o formulário exibido
  } catch (error) {
    // Mensagem de erro
    console.error("Erro ao enviar inscrição:", error);
    feedbackMessage.textContent = "Erro ao enviar inscrição. Por favor, tente novamente.";
    feedbackMessage.classList.remove("success");
  }
});

function copyPixKey() {
  const fullPixKey = "00020126480014BR.GOV.BCB.PIX0126arrancadamarilia@gmail.com520400005303986540550.005802BR5901N6001C62110507INSCACM6304D93E";
  
  navigator.clipboard.writeText(fullPixKey)
    .then(() => {
      // Altera o texto do botão para indicar que a chave foi copiada
      const button = document.querySelector(".copy-button");
      button.textContent = "Chave PIX copiada";
      button.classList.add("copied");

      // Redefine o texto do botão após 3 segundos
      setTimeout(() => {
        button.textContent = "Copiar chave PIX";
        button.classList.remove("copied");
      }, 3000);
    })
    .catch(err => {
      console.error("Erro ao copiar chave PIX:", err);
      alert("Não foi possível copiar a chave PIX. Tente novamente.");
    });
}
