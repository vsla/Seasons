
const url='https://api.quotable.io/random';


axios.get(url)
.then((response) => {
  console.log(response)
  document.getElementById("title1").innerHTML = response.data.content;
})
axios.get(url)
.then((response) => {
  document.getElementById("title2").innerHTML = response.data.content;
})
axios.get(url)
.then((response) => {
  document.getElementById("title3").innerHTML = response.data.content;
})
axios.get(url)
.then((response) => {
  document.getElementById("title4").innerHTML = response.data.content;
})