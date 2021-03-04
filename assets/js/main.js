const btnBackProject = document.querySelector("#backProject");

btnBackProject.addEventListener("click", () => {
  const pledgeModalWrapper = document.querySelector(".pledge-modal-wrapper");
  pledgeModalWrapper.classList.add("show");
});
