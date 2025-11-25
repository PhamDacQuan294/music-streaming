// Form create topic
const formCreateTopic = document.querySelector("#form-create-topic");

if(formCreateTopic) {
  formCreateTopic.addEventListener("submit", (e) => {
    e.preventDefault();

    const redirectUrl = window.location.pathname + window.location.search;
    formCreateTopic.action += `?redirect=${encodeURIComponent(redirectUrl)}`;

    formCreateTopic.submit();
  })
}
// End form create topic