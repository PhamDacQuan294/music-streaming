// Search Suggest
const boxSearch = document.querySelector(".box-search");

if(boxSearch) {
  const input = boxSearch.querySelector("input[name='keyword']");
  const boxSuggest = boxSearch.querySelector(".inner-suggest");

  input.addEventListener("keyup", () => {
    const keyword = input.value;
    
    const link = `/search/suggest?keyword=${keyword}`;

    fetch(link)
      .then(res => res.json())
      .then(data => {
        const songs = data.songs;
        if(songs.length > 0) {
          boxSuggest.classList.add("show");
          
          const htmls = songs.map(song => {
            return `
              <a class="inner-item" href="/songs/detail/${song.slug}">
                <div class="inner-image"><img src="${song.avatar}" /></div>
                <div class="inner-info">
                  <div class="inner-title">${song.title}</div>
                  <div class="inner-singer"><i class="fa-solid fa-microphone-lines"></i> ${song.infoSinger.fullName}</div>
                </div>
              </a>
            `;
          });

          const boxList = boxSuggest.querySelector(".inner-list");
          boxList.innerHTML = htmls.join("");
        } else {
          boxSuggest.classList.remove("show");
        }
      })
  })
  
}