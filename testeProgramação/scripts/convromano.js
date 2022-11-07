
function convRomano()
{
    let numero = Number(document.getElementById("numero").value);
    let i = ["", "I", "II", "III", "IV", "V",
    "VI", "VII", "VIII", "IX"];
    let x = ["", "X", "XX", "XXX", "XL", "L",
    "LX", "LXX", "LXXX", "XC"];
    let c = ["", "C", "CC", "CCC", "CD", "D",
    "DC", "DCC", "DCCC", "CM"];
    let m = ["", "M", "MM", "MMM"];
    
    let mil = m[Math.floor(numero/1000)];
    let cem = c[Math.floor((numero%1000)/100)];
    let dez = x[Math.floor((numero%100)/10)];
    let um = i[numero%10];
         
    let juntando = mil + cem + dez + um;
    
    document.getElementById("Resultado").innerText =document.getElementById("Resultado").textContent + juntando;
    
}

 
  
