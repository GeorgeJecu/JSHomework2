//1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
function getDigits(a){
    let result = '';
    for (let i = 0; i < a.length; i++){
      if (isNaN(a[i])){
        
      }else{
        result += a[i];
      }
    }
    return result;
  }
  
  //2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
  function getLetters(a){
    let result = '';
    for (let i = 0; i < a.length; i++){
      if ((a[i] >= 'A' && a[i] <= 'Z' ) || (a[i] >= 'a' && a[i] <= 'z' )){
        result += a[i];
      }
    }
    return result;
  }
  
  //3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista);
  function getFirst5Letters(a){
    let result = '';
    for (let i = 0; i < a.length; i++){
      if ((a[i] >= 'A' && a[i] <= 'Z' ) || (a[i] >= 'a' && a[i] <= 'z' )){
        result += a[i];
      }
    }
    return (result.substr(0, 5));
  }
  
  //4. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
  function concatenate(a){
    let b = '';
    for (let i = 0; i < a.length; i++){
      b += a[i];
    }
    return b;
  }
  
  // sau
  
  // function concatenate(a){
  //   let result = a.join('');
  //   return result;
  // }
  
  
  //5. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

  function getAllDigits(a){
    let str = a.join('');
    let result = str.replace(/[^0-9]/g,'')
    return result;
  }

  
  
  //6. O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
  function invertAllStrings(a){
      let result = [];
      for (let i = 0; i < a.length; i++){
        let store = "";
        for (let j = a[i].length - 1; j >= 0; j--){
            store += a[i][j];
        }
        result.push(store);
      }
      return result;
  }

  //7. Calculeaza factorialul unui numar ("factorial")
  function factorial(a){
      let result = 1;
      for (let i = 1; i <= a; i++){
          result = result * i;
      }
      return result;
  }

  //8. Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
  function cmmdc(a, b) {
    let result;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            result = i;
        }
    } return result;
}

  //9. Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
  function cmmmc(a, b) {
    let result;
    for (let i = 1; i <= (a * b); i++) {
        if (i % a === 0 && i % b === 0) {
            result = i;
            return result;
        }
    }
}

  //10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
  function divizori(a){
    let result = [];
    for (let i = 2; i <= a - 1; i++){
        if (a % i === 0) {
            result.push(i)
        }
    } return result;
}

  //11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
  function palindrom(a){
      let b = a.toString();
      let store = b.split('').reverse().join('');
      let c = +store;
      if (c === a) {
          return true;
      }else{
          return false;
      }
  }
  
  //12. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
  function sort(a){
      let result = [];
      let b = 0;
      for (let i = 0; i < a.length; i++){
          b += i;
          if (a[b] % 2 === 0){
              result.push(a[b]);
          }
        }
        return result;
  }

  //13. O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
  


  //14. O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
  function binarySearch (arr, a){
    arr. sort((a, b) => a - b);
    let left = 0; 
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (a === arr[mid]) {
        return true;
      }
      if (a < arr[mid]) {
        right = mid - 1; 
      } else {
        left = mid + 1;
      }
    }
    return false;
  }

  //15. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")
  function countBinarySearch (arr, a){
    arr. sort((a, b) => a - b);
    let left = 0; 
    let right = arr.length - 1;
    let count = 0;
    while (left <= right) {
      count++;
      let mid = left + Math.floor((right - left) / 2);
      if (a === arr[mid]) {
        break;
      }
      if (a < arr[mid]) {
        right = mid - 1; 
      } else {
        left = mid + 1;
      }
    }
    return count;
  }
