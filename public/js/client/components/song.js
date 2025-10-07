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
        const span = buttonLike.querySelector("span");
        span.innerHTML = `${data.like} thich`;

        buttonLike.classList.toggle("active");
      });
  });
}
// End Button Like