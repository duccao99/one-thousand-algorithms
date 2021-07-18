function E88() {
  var ret = [];
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    ret.push(String.fromCharCode(i));
  }
  return ret.join(' ');
}

console.log(E88());
