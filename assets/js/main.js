const btnBackProject = document.querySelector("#backProject");

btnBackProject.addEventListener("click", () => {
  const pledgeModalWrapper = document.querySelector(".pledge-modal-wrapper");
  pledgeModalWrapper.classList.add("show");
});

const pledgeModal = document.querySelector(".pledge-modal-inner");

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

pledgeModal.addEventListener("click", (event) => {
  const selectedComponent = event.target.parentNode.parentNode.parentNode;
  if (selectedComponent.classList.contains("pledge")) {
    selectPledge();
  }
});

window.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("pledge-modal-wrapper") ||
    event.target.classList.contains("pledge-modal-close")
  ) {
    document.querySelector(".pledge-modal-wrapper").classList.remove("show");
  }
});
