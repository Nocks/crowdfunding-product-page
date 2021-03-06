const btnBackProject = document.querySelector("#backProject");
const pledgeModal = document.querySelector(".pledge-modal-inner");

btnBackProject.addEventListener("click", () => {
  const pledgeModalWrapper = document.querySelector(".pledge-modal-wrapper");
  pledgeModalWrapper.classList.add("show");
});

/*
  The selectPledge function below goes through the pledge components 
  on the modal window, and checks for the selected one (radio button)
  and changes the corlor of the border of the component, 
  and also display the footer of the component where user 
  can enter how much they want to pledge
*/
function selectPledge() {
  const pledgeComponents = pledgeModal.querySelectorAll(".pledge");

  for (const pledgeComponent of pledgeComponents) {
    if (pledgeComponent.querySelector(".form-check-input").checked) {
      pledgeComponent.classList.add("componentSelected");
      pledgeComponent.querySelector("footer").classList.add("show");
    } else {
      pledgeComponent.classList.remove("componentSelected");
      pledgeComponent.querySelector("footer").classList.remove("show");
    }
  }
}

// Clear any made selection on the pledge modal
function resetPledgeModal() {
  // Get the pledge components on the modal
  const pledgeComponents = pledgeModal.querySelectorAll(".pledge");

  for (const pledgeComponent of pledgeComponents) {
    if (pledgeComponent.querySelector(".form-check-input").checked) {
      // Do the following resetting actions if current pledgeComponent is checked
      pledgeComponent.querySelector(".form-check-input").checked = false;
      pledgeComponent.classList.remove("componentSelected");
      pledgeComponent.querySelector("footer").classList.remove("show");
    }
  }
}

pledgeModal.addEventListener("click", (event) => {
  /* If a pledge selection is made, its "great grand parent" should
    be the pledge component and should contain a class of "pledge"
    */
  const selectedComponent = event.target.parentNode.parentNode.parentNode;
  if (selectedComponent.classList.contains("pledge")) {
    selectPledge();
  }
});

window.addEventListener("click", (event) => {
  /* Close pledge modal if either the black area of the modal
    .pledge-modal-wrapper or the close button of the pledge modal
    is clicked 
  */
  if (
    event.target.classList.contains("pledge-modal-wrapper") ||
    event.target.classList.contains("pledge-modal-close")
  ) {
    document.querySelector(".pledge-modal-wrapper").classList.remove("show");
    resetPledgeModal();
  }
});
