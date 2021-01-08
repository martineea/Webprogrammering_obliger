let utBillett;
let arrayBilletter = [];

function kjopBillett() {

    let enBillett = {
        antall: document.getElementById('antall').value,
        film: document.getElementById('velgFilm').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnr: document.getElementById('telefonnr').value,
        epost: document.getElementById('epost').value
    };

    let antallBilletter = document.getElementById("antall").value;
    let antall = Number(antallBilletter);
    // splitter e-post for å sjekke om den inneholder @
    let epostGyldig = document.getElementById("epost").innerHTML = enBillett.epost.split("@");
    let feilmelding = false;

    // ANTALL
    if ((isNaN(antall) || antall <= 0) || antall === null) {
        document.getElementById("ikkeTall").innerHTML = "Feil i antall. Må være et tall på 1 eller høyere";
        feilmelding = true;
    } else {
        document.getElementById("ikkeTall").innerHTML = "";
    }

    // FILM
    if (enBillett.film === "feilFilm") {
        document.getElementById("ikkeValgtFilm").innerHTML = "Må velge en film";
        feilmelding = true;
    } else {
        document.getElementById("ikkeValgtFilm").innerHTML = "";
    }

    // FORNAVN
    if (!isNaN(enBillett.fornavn) || enBillett.fornavn === "") {
        document.getElementById("fornavnFeil").innerHTML = "Må skrive noe inn i fornavn";
        feilmelding = true;
    } else if (enBillett.fornavn.length < 2) { //(fornavnLengde.length < 2)
        document.getElementById("fornavnFeil").innerHTML = "Fornavn for kort";
        feilmelding = true;
    } else {
        document.getElementById("fornavnFeil").innerHTML = "";
    }

    //ETTERNAVN
    if (!isNaN(enBillett.etternavn) || enBillett.etternavn === "") {
        document.getElementById("etternavnFeil").innerHTML = "Må skrive noe inn i etternavn";
        feilmelding = true;
    } else if (enBillett.etternavn.length < 2) {
        document.getElementById("etternavnFeil").innerHTML = "Etternavn for kort";
        feilmelding = true;
    } else {
        document.getElementById("etternavnFeil").innerHTML = "";
    }

    // TELEFONNR
    if (isNaN(enBillett.telefonnr) || enBillett.telefonnr === "" || enBillett.telefonnr.length != 8) {
        document.getElementById("telefonnrFeil").innerHTML = "Telefonnummer må inneholde 8 tall";
        feilmelding = true;
    } else {
        document.getElementById("telefonnrFeil").innerHTML = "";
    }

    // E-POST
    if (!isNaN(enBillett.epost) || enBillett.epost === "") {
        document.getElementById("epostFeil").innerHTML = "Må skrive noe inn i e-post";
        feilmelding = true;
    } else if (enBillett.epost.length < 6 || epostGyldig.length != 2) {
        document.getElementById("epostFeil").innerHTML = "E-post er for kort eller mangler @";
        feilmelding = true;
    } else {
        document.getElementById("epostFeil").innerHTML = "";
    }

    // hvis feilmeldingen ikke er true vil all input nullstilles:
    if (feilmelding === false) {
        document.getElementById("reset").reset();
    } else {
        return;
    }

    // Hvis feltene er tomme vil den ikke skrive ut billetten, hvis det er fylt inn riktig skriver den ut en billett:
    if (arrayBilletter.antall === "" && arrayBilletter.film === "feilFilm" && arrayBilletter.etternavn === "" &&
        arrayBilletter.telefonnr === "" && arrayBilletter.epost === "") {
        return;
    } else {
        arrayBilletter.push(enBillett);
    }

    // Tabellen over billetten
    utBillett = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnummer</th>" +
        "<th>E-post</th>" +
        "</tr>";

    for (let billett of arrayBilletter) {
        utBillett += "<tr>" +
            "<td>" + billett.film + "</td>" +
            "<td>" + billett.antall + "</td>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefonnr + "</td>" +
            "<td>" + billett.epost + "</td>" +
            "</tr>";
    }
    document.getElementById("billetter").innerHTML = utBillett;
    utBillett += "<table>";
}

function slettAlleBilletter() {
    document.getElementById("billetter").innerHTML = "";

}
