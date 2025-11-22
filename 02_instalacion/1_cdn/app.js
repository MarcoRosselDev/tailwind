const btn = document.getElementById("button-test")

btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("you'r clicked this button, now you'r going to payme a dollar!");
})