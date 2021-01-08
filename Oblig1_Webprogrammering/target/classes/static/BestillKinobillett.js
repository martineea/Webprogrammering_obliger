let arrayBilletter = [];

function kjopBillett() {

    let antallBilletter = document.getElementById("antall").value;
    let antall = Number(antallBilletter);
    //let feilmelding = false;

    let enBillett = {
        antall : document.getElementById('antall').value,
        film : document.getElementById('velgFilm').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn : document.getElementById('etternavn').value,
        telefonnr : document.getElementById('telefonnr').value,
        epost : document.getElementById('epost').value
    };
    arrayBilletter.push(enBillett);

    let utBillett = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>E-post</th>" +
        "</tr>";

    for (let billett of arrayBilletter) {
        if (enBillett.film === "Velg film her") {
            document.getElementById("ikkeValgtFilm").innerHTML = "Må velge en film";
        }
        if (isNaN(antall) || antall <= 0) {
            document.getElementById("ikkeTall").innerHTML = " Må skrive noe inn i antall, må være 1 eller høyere";
        }
        if (enBillett.fornavn === "") {
            document.getElementById("fornavnTomt").innerHTML = "Må skrive noe inn i fornavn";
        }
        if (enBillett.etternavn === "") {
            document.getElementById("etternavnTomt").innerHTML = "Må skrive noe inn i etternavn";
        }
        if (enBillett.telefonnr === "") {
            document.getElementById("telefonnrTomt").innerHTML = "Må skrive noe inn i telefonnr";
        }
        if (enBillett.epost === "") {
            document.getElementById("epostTomt").innerHTML = "Må skrive noe inn i e-post";
        }

        else {
            utBillett += "<tr>";
            utBillett +=
                "<td>" +
                billett.film +
                "</td><td>" +
                billett.antall +
                "</td><td>" +
                billett.fornavn +
                "</td><td>" +
                billett.etternavn +
                "</td><td>" +
                billett.telefonnr +
                "</td><td>" +
                billett.epost +
                "</td>";
            utBillett += "</tr>"
        }    utBillett += "</table";
        document.getElementById("billetter").innerHTML = utBillett;
    }


}

function slettAlleBilletter() {
    document.getElementById("billetter").innerHTML = " ";

}
