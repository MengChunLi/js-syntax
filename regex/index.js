const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, (match) => `<span>${match}</span>`)
}

function example() {
  const str = "Is this This?";
  const regex = /is/gi;
  output(str, regex, document.querySelector('pre'));
}

function example2() {
  const str = `http://egghead.io
not a web address
http://
https://egghead.io more`;

  const regex = /https?:\/\/.*/g;
  output(str, regex, document.querySelector('pre'));
}

function example3() {
  const str = `cat mat bat Hat ?at 0at`;
  const regex = /[a-zA-Z0-9?]at/g;
  output(str, regex, document.querySelector('pre'));
}

function example4() {
  const str = `foobar foobaz foo fooboo`;
  const regex = /foo(bar|boo)/g;
  output(str, regex, document.querySelector('pre'));
}

function example5() {
  const str = `800-456-7890
(555) 456-7890
(555) 456 7890
4564567890`;
  const regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
  console.log(str.replace(regex, 'area code: $1'));
  output(str, regex, document.querySelector('pre'));
}

function example6() {
  const str = `foobar 
  foobaz 
  foo 
  fooboo`;
  // const regex = /foo(?=bar|boo)/g;
  const regex = /foo(?!bar|boo)/g;
  output(str, regex, document.querySelector('pre'));
}

function example7() {
  const str = `This island is his, it is`;
  const regex = /\bis\b/g;
  output(str, regex, document.querySelector('pre'));
}

function example8() {
  const str = `This island is the thee thing thing`;
  const regex = /\b(\w+)\s?(?=\1)/g;
  console.log(str.replace(regex, ''));
  output(str, regex, document.querySelector('pre'));
}

function example9() {
  const str = `<i>Italic</i><b>Bold</b>   <a>URL</a>  
  <b>abc</b>`;
  const regex = /<(\w+)>(.*)<\/\1>/g;
  const arr = [];
  let match;
  do {
    match = regex.exec(str)
    console.log(match)
    if (match !== null) {
      arr.push(match[2])
    }
  } while (match)

  console.log(arr)
    // console.log(str.replace(regex, '$2\n'));
  output(str, regex, document.querySelector('pre'));
}

function example10() {
  const str = `&lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;&lt;a class="aaa" href="http://facebook.com" target="_blank"&gt;Facebook&lt;/a&gt;`;
  const regex = /&lt;a\s.*?href="(.*?)".*?&gt;(.*?)&lt;\/a&gt;/g;
  console.log(str.replace(regex, '$1\n'));
  console.log(regex.exec(str));
  console.log(regex.exec(str));
  output(str, regex, document.querySelector('pre'));
}

example10();