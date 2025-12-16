// ---- Cifrado César ----
// Recibe: texto (string), clave (entero), descifrar (booleano)
// Devuelve: texto cifrado o descifrado
function cesar(texto, clave, descifrar = false) {
  let k = parseInt(clave, 10);
  if (isNaN(k)) k = 0;
  k = ((k % 26) + 26) % 26; // normaliza clave a rango 0..25

  let out = "";
  for (let i = 0; i < texto.length; i++) {
    const c = texto.charCodeAt(i);

    if (c >= 97 && c <= 122) { // letras minúsculas
      const base = 97;
      const shift = descifrar ? -k : k;
      out += String.fromCharCode(((c - base + shift + 26) % 26) + base);
    } else if (c >= 65 && c <= 90) { // letras mayúsculas
      const base = 65;
      const shift = descifrar ? -k : k;
      out += String.fromCharCode(((c - base + shift + 26) % 26) + base);
    } else {
      out += texto[i]; // conserva espacios y símbolos
    }
  }
  return out;
}

// ---- Ejemplo de uso ----
console.log(cesar("hola mundo", 3, false)); // → "krod pxqgr"
console.log(cesar("krod pxqgr", 3, true));  // → "hola mundo"
