function convertHTML(str) {
  let html_chars = ["&", "<", ">", '"', "'"];
  let equivalents = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  let converted = "";
  for (let i = 0; i < str.length; i++) {
    if (html_chars.includes(str[i])) {
      let html_chars_index = html_chars.indexOf(str[i]);
      converted += equivalents[html_chars_index];
    } else {
      converted += str[i];
    }
  }
  return converted;
}

console.log(convertHTML("Dolce & Gabbana"));
// Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve"));
// Sixty &gt; twelve
