// End Aplayer

// Button Like
const buttonLike = document.querySelector("[button-like]");
if(buttonLike) {
  buttonLike.addEventListener("click", () => {
    const idSong = buttonLike.getAttribute("button-like");
    const isActive = buttonLike.classList.contains("active");

    const typeLike = isActive ? "dislike" : "like";

    const link = `/songs/like/${typeLike}/${idSong}`;

    const option = {
      method: "PATCH"
    }

    fetch(link, option)
      .then(res => res.json())
      .then(data => {
        if(data.code == 200) {
          const span = buttonLike.querySelector("span");
          span.innerHTML = `${data.like} thich`;

          buttonLike.classList.toggle("active");
        }
      });
  });
}
// End Button Like


// Button Favorite
const buttonFavorite = document.querySelector("[button-favorite]");
console.log(buttonFavorite);

if(buttonFavorite) {
  buttonFavorite.addEventListener("click", () => {
    const idSong = buttonFavorite.getAttribute("button-favorite");
    const isActive = buttonFavorite.classList.contains("active");

    const typeFavorite = isActive ? "unfavorite" : "favorite";

    const link = `/songs/favorite/${typeFavorite}/${idSong}`;

    const option = {
      method: "PATCH"
    }

    fetch(link, option)
      .then(res => res.json())
      .then(data => {
        if(data.code == 200) {
          buttonFavorite.classList.toggle("active");
        }
      });
  });
}
// End Button Favorite