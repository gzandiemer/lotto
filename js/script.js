  
  const ANZAHL_NUMMER = 7;
  const MAX_NUMMER_MOEGLICH = 49;

  function ziehen() {

    var lottoZahlen = [];

    for(var i = 0; i < ANZAHL_NUMMER; i++) {
      var ausgewaehltNummer = generieren();

      if(obBenutzbar(lottoZahlen, ausgewaehltNummer)) {
        lottoZahlen.push(ausgewaehltNummer);
      } else {
        i--;
      }
    }

    var superzahl = lottoZahlen.pop();  
    lottoZahlen.sort(function(a, b){return a-b});

    parse(lottoZahlen, superzahl);
  }



  function generieren() {
      return Math.floor(Math.random()*MAX_NUMMER_MOEGLICH)+1;
  }

  function parse(lottoZahlen, superzahl) {
      for (var i = 0; i < ANZAHL_NUMMER-1; i++) {
         document.getElementById("kiste"+i).innerHTML = lottoZahlen[i];
      }
    document.getElementById("superzahl").innerHTML = superzahl;
  }

  function obBenutzbar(lottoZahlen, ausgewaehltNummer) {
      return lottoZahlen.indexOf(ausgewaehltNummer) == -1;
  }
