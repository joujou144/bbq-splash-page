let emailCollectorForm = document.getElementById("Email-Collector")

emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()


  let ourFormData = new FormData(event.target)

  let userFirstName = ourFormData.get("firstName")
  let userEmailAddress = ourFormData.get("emailAddress")

  let updatedHTMLContent = `
    <h2>Congrats, ${userFirstName}! </h2>

    <p>You're on your way to becoming a BBQ Master!</p>
    <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
  `
  let ourMainContent = document.getElementById("Main-Content")
  ourMainContent.innerHTML = updatedHTMLContent
})