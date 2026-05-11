function xhrIntro() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/srckrish");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      {
        // const data = JSON.parse(this.response);
        const data = JSON.parse(xhr.response);
        console.log("Followers: " + data.followers);
        console.log("Avatar: " + data.avatar_url);
      }
    }
  };
  xhr.send();

  // xhr.addEventListener("load", () => {
  //   const data = JSON.parse(xhr.response);
  //   console.log(data.followers);
  // });
}

export default xhrIntro;
