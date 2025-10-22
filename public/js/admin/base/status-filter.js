// Button Status
const buttonsStatus = document.querySelectorAll("[button-status]");
if(buttonsStatus.length > 0) {
  let url = new URL(window.location.href);

  buttonsStatus.forEach(button => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");
      
      if(status) {
        url.searchParams.set("status", status);
        url.searchParams.set("page", 1);
      } else {
        url.searchParams.delete("status");
        url.searchParams.set("page", 1);
      }

      window.location.href = url.href;
    });
  });
}
// End Button Status