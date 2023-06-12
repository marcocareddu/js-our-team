<!-- 
nome repo: js-our-team

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede ispirandovi alle immagini in allegato 

? Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
? Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
? Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
? Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
? Scott Estrada |	Developer            |	scott-estrada-developer.jpg
? Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg

-->

# OUR TEAM
## FASE 1 - Preliminare
- Collegare gli elementi della pagina.
## FASE 1b - Funzioni
- Creo una funzione `objectToString` che dato un oggetto, crea una stringa pronta da iniettare in DOM:
    - Creo una variabile d'appoggio `string` che conterrà il template contenitore.
    - Creo una variabile d'appoggio `substring` che conterrà il template con nome e lavoro.
    - **CICLO FOR IN** per ogni chiave:
        - Prelevarne il valore per crearne un template literal
        - **SE** la chiave è `photo`:
            - Il template literal deve essere di tipo img.
            - Lo aggiungo a `string`.
        - **ALTRIMENTI SE** la chiave è `job`:
            - Il template literal deve essere di tipo h5.
            - Lo aggiungo a `substring`.
        - **ALTRIMENTI** Il template literal deve essere di tipo p.
            - Lo aggiungo a `substring`.
        - Aggiungo `substring` a `string`.
    - *Ritorno* `string`.
            
### MILESTONE 0
- Creare un array `team` contenente gli oggetti `contacts`:
    - Devono contenere le chiavi:
        - `name`, `job`, `photo`.
## FASE 2 - Svolgimento
### MILESTONE 1, 2 - BONUS 1, 2
- **CICLO FOR**:
    - Creo una variabile d'appoggio `toInject`.
    - Per ogni elemento dentro `team`:
        - Genero una stringa con `objectToString` e la aggiungo a `toInject`.
- Inietto in pagina `toInject` che comprende il template literal completo per le immagini, il titolo ed il testo, il tutto dentro una card.

