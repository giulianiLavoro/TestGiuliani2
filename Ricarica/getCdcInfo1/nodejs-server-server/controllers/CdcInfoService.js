'use strict';

exports.getCdcInfo = function(args, res, next) {
  /**
   *
   * returns CdcInfo
   **/
  var examples = {};
  examples['application/json'] = {
  "PanPrivacyInfo" : "Puoi scegliere di memorizzare i dati della tua Carta di Credito cosi' non dovrai fornirli nuovamente negli acquisti futuri  effettuati tramite questa App, sul sito TIM e nella sua versione mobile.   E' possibile revocare tale scelta in ogni momento, ripristinando l'impostazione iniziale (che prevede il necessario inserimento dei dati della carta di credito per ogni singolo acquisto) nella sezione acquisti dell'Area Clienti 119 del sito TIM o all'interno del menu' di questa App.Telecom Italia prevede la massima sicurezza e tutela per gli utenti dei suoi siti di norma, infatti, i dati della carta di credito devono essere reinseriti per ogni singolo acquisto ma tu puoi scegliere di memorizzare i dati della tua Carta di Credito per poter effettuare piu' velocemente futuri acquisti.   I dati della tua Carta di Credito saranno memorizzati ed utilizzati esclusivamente dalla Banca/Istituto di credito che deve autorizzare a Telecom Italia il tuo pagamento per gli acquisti da te effettuati su questa App, su sito TIM e nella sua versione mobile.   I dati non verranno utilizzati per nessun altro scopo e da nessun altro soggetto.   Dal sito TIM potrai utilizzare la tua Carta di Credito semplicemente inserendo username e password definiti in fase di registrazione, mentre da questa App sarai riconosciuto tramite la tua SIM TIM navigando in 3G.   Per ulteriore sicurezza, la prima volta che ricaricherai un numero di telefono diverso dal tuo, o modificherai l'indirizzo di spedizione per la ricezione di un prodotto, ti verra' chiesto di inserire anche il Codice di Controllo (CVV) della tua Carta",
  "ListaTagli" : [ "5, 10, 15," ],
  "PanUsageInfo" : "I dati della tua Carta di Credito sono stati memorizzati e quindi non dovrai fornirli nuovamente per gli acquisti futuri effettuati tramite questa App, sul sito TIM e nella sua versione mobile. Puoi decidere in ogni momento di revocare tale scelta ripristinando l'impostazione iniziale (che prevede il necessario inserimento dei dati della carta di credito per ogni singolo acquisto) nella sezione acquisti dell'Area Clienti 119 del sito TIM o all'interno del menu' di questa App",
  "CdcList" : [ [ {
    "cdcCode" : "AMX",
    "cdcValue" : "Amex",
    "isPanEnable" : "N"
  }, {
    "cdcCode" : "MSC",
    "cdcValue" : "Mastercard",
    "isPanEnable" : "S"
  }, {
    "cdcCode" : "DNS",
    "cdcValue" : "Dinners",
    "isPanEnable" : "N"
  }, {
    "cdcCode" : "AUR",
    "cdcValue" : "Aura",
    "isPanEnable" : "N"
  }, {
    "cdcCode" : "VIS",
    "cdcValue" : "Visa",
    "isPanEnable" : "S"
  } ] ],
  "Result" : {
    "ResultMessage" : "success",
    "ResultCode" : 200
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

