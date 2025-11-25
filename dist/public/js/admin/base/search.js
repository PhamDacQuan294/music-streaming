const formSearch = document.querySelector("#form-search");
if(formSearch) {
  let url = new URL(window.location.href);

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;

    if(keyword) {
      url.searchParams.set("keyword", keyword);
      url.searchParams.set("page", 1);
    } else {
      url.searchParams.delete("keyword");
      url.searchParams.set("page", 1);
    }
    window.location.href = url.href;
  });
}