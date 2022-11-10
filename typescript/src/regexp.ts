const str = "Гойда братцы, гойда";
const phone = "+7(903)-123-45-67";
const sent1 = "Завтрак в 09:00 в комнате 123:456";
const sent2 = "Завтрак в 09:00. Ужин в 21-30";
const slashes = "12/\\33/\\";
const java = "Java";
const js = "JavaScript";
const peeps = "Ульви Кулиев,  Ульяна Кукиша";
const wasup = "Привет!... Как дела?.....";
const colors =
  "color:#121212 ; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
const comments = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
const html = '<> <a href="/"> </input type="radio" checked> <b>';

const matches = str.match(/гойда/gi);
const result1 = /^\+/.test(phone);
const result2 = /67$/.test(phone);
const result3 = /^$/.test("");
const result4 = sent1.match(/\b\d\d:\d\d\b/g);
const result5 = slashes.match(/\/\\/g);
const result6 = /Java[^script]/.test(java); // false
const result7 = /Java[^script]/.test(js); // true
const result8 = sent2.match(/\b\d\d[:-]\d\d\b/g);
const result9 = peeps.match(/Уль\p{L}+ Ку\p{L}{4}/gu);
const result10 = wasup.match(/[.]+/g); // || /\.+/g
const result11 = colors.match(/\#[a-f0-9]{6}\b/gi);
const result12 = comments.match(/<!--.*?-->/gs);
const result13 = html.match(/<\/?[^>]*>/g);
console.log(result13);
