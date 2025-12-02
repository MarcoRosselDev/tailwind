import "./style.css";

//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

/* document.querySelector('#app').innerHTML = `
  <div class="text-blue-500">
    <p>Hola mundo!</p>
  </div>
` */

//setupCounter(document.querySelector('#counter'))

/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */

const t_1 = document.querySelector(".t-1");
const t_2 = document.querySelector(".t-2");
const t_3 = document.querySelector(".t-3");
const count_span = document.querySelector(".count");
const texto = count_span.textContent;
let count = Number(texto);
const btn_mark_all_as_read = document.querySelector(".mark-all-as-read");

btn_mark_all_as_read.addEventListener("click", (event) => {
  event.preventDefault();
  count = 0;
  count_span.textContent = `${count}`;
  cleanDiv(event, t_1);
  cleanDiv(event, t_2);
  cleanDiv(event, t_3);
});

function set_count() {
  if (count <= 0) {
    count = 0;
    count_span.textContent = `${count}`;
    return;
  }
  count = count - 1;
  count_span.textContent = `${count}`;
}

function cleanDiv(event, el) {
  event.preventDefault();
  el.classList.remove("bg-neutral-Navy-50");
  const red_circle = t_1.querySelector(".red-circle");
  //t_1.removeChild(t_1.childre[wait a minute]);
  const p_el = el.querySelector("p");
  const ultimo_span = p_el.children[p_el.children.length - 1];
  if (
    ultimo_span.tagName === "SPAN" &&
    ultimo_span.classList.contains("circle")
  ) {
    ultimo_span.remove();
  }
  set_count();
}

t_1.addEventListener("click", (event) => cleanDiv(event, t_1));
t_2.addEventListener("click", (event) => cleanDiv(event, t_2));
t_3.addEventListener("click", (event) => cleanDiv(event, t_3));
