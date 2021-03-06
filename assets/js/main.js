const btnBackProject = document.querySelector("#backProject");
const pledgeModal = document.querySelector(".pledge-modal-inner");

function showPledgeModal() {
  const pledgeModalWrapper = document.querySelector(".pledge-modal-wrapper");
  pledgeModalWrapper.classList.add("show");
}

btnBackProject.addEventListener("click", () => {
  showPledgeModal();
});

/*
  The selectPledge function below goes through the pledge components 
  on the modal window, and checks for the selected one (radio button)
  or based on the selected pledge, it changes the corlor of the 
  border of the component, and also display the footer 
  of the component where user can enter how much they want to pledge
*/
function selectPledge(selectedPledgeId = null) {
  const pledgeComponents = pledgeModal.querySelectorAll(".pledge");

  if (selectedPledgeId) {
    for (const pledgeComponent of pledgeComponents) {
      if (pledgeComponent.dataset.pledgeId === selectedPledgeId) {
        pledgeComponent.querySelector(".form-check-input").checked = true;
        pledgeComponent.classList.add("componentSelected");
        pledgeComponent.querySelector("footer").classList.add("show");
        break;
      }
    }
  } else {
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

  if (event.target.classList.contains("btn-continue")) {
    event.preventDefault();
    const successModalWrapper = document.querySelector(
      ".success-modal-wrapper"
    );
    successModalWrapper.classList.add("show");
    document.querySelector(".pledge-modal-wrapper").classList.remove("show");
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

const aboutComponent = document.querySelector(".about");

aboutComponent.addEventListener("click", (event) => {
  if (event.target.classList.contains("select-reward")) {
    const pledgeId = event.target.dataset.pledgeId;
    selectPledge(pledgeId);
    showPledgeModal();
  }
});

const xxx = document.querySelector(".pledge-left").lastChild;
