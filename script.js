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
