function verifica(string) {
    if (!string) return "string não definida";

    for (let n = 0; n < string.length / 2; n++) {
        if (string[n] !== string[string.length -1 -n]) {
            return false; 
        }
    }

    return true;
}

console.log(verifica("Dio"));