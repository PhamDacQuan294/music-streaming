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

// Change status
const buttonsChangeStatus = document.querySelectorAll("[button-change-status]");
if(buttonsChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");

  buttonsChangeStatus.forEach(button => {
    button.addEventListener("click", () => {
      const statusCurrent = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");

      let statusChange = statusCurrent == "active" ? "inactive" : "active";

      const action = path + `/${statusChange}/${id}`;
      formChangeStatus.action = action;

      const redirectUrl = window.location.pathname + window.location.search;
      formChangeStatus.action += `?_method=PATCH&redirect=${encodeURIComponent(redirectUrl)}`;
      
      formChangeStatus.submit();
    });
  });
}
// End Change status