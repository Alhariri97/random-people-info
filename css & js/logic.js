function ftechData() {
  fetch("https://api.randomuser.me/")
    .then((respon) => {
      return respon.json();
    })
    .then((data) => {
      let ip = data.results[0];

      document.getElementById(
        "name"
      ).innerHTML = `${ip.name.title}. ${ip.name.first}  ${ip.name.last}`;
      document.getElementById(
        "from"
      ).innerHTML = `Country: ${ip.location.country}</br>  state: ${ip.location.state} </br> city: ${ip.location.city}</br>  street: ${ip.location.street.name}`;
      document.getElementById("img").src = ip.picture.large;
    })
    .catch((error) => {
      console.log(error);
    });
}

document.querySelector(".reload").addEventListener("click", () => {
  ftechData();
  document.querySelector(".reload").value = "More :)";
});
