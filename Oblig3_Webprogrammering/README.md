#Oblig 1 i Webprogrammering:
- Navn: Martine Holmberg
- Student e-mail: s236808@oslomet.no


#Oblig 2 i Webprogrammering:

- Laget en javafil Billetter: inneholder variabler av verdier i en billett
- Laget en javafil BillettController: inneholder server-delen og controllerne
- Implementert disse i HTML-filen, slik at klient-delen skal kunne hente informasjonen som ligger på server-delen
- Til slutt er applikasjonen stylet med bootstrap
- Testet og funket å kjøre via Spring Boot: http://localhost:8080/BestillKinobillett.html


#Oblig 3 i Webprogrammering:

- Har erstattet array på tjener/ server med en tabell i en relasjonsdatabase:
    - Har opprettet en BillettRepository og endret på BillettController
    - Har også lagt inn int id på POJO-en Billett
    - Har opprettet en fil schema.sql hvor en oppretter en tabell kalt Billett
    - Har opprettet en fil data.sql der det er lagt inn noen forhåndslagde biletter i tabellen fra før
        - Disse vises i H2 console i tillegg til i GUI-et
