import database from "./database/connection.mongoose.js";
import faker from "faker";

faker.seed(123456);

async function generateData () {

    await database.collection("links").deleteMany();

    // In diesem Array speichern wir unsere neuen User, bis wir sie in die Datenbank überführen
    const links = [];

    // Die for-Schleife fügt an das users-Array eine bestimmte Zahl neuer User an
    for (let i = 0; i < 5; i++) {
        // Hier nutzen wir jetzt faker, um einen Namen und eine E-Mail-Adresse zu generieren
        links.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
        });
    }

    // Schließlich speichern wir noch die Daten in die Datenbank.
    // Mit .insertMany() können wir ein Array mit Objekten übergeben, die als Dokumente in der entsprechenden Collection landen.
    await db.collection("users").insertMany(users);


    // seed articles
    // ------------------------------------------------------
    // Wie schon bei den Usern oben, können wir natürlich auch Artikel hinzufügen.
    // Wir können dieses Skript beliebig erweitern, um unsere Datenbank mit genügend Testdaten zu füllen.
    await db.collection("articles").deleteMany();

    const articles = [];

    for (let i = 0; i < 20; i++) {
        articles.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
        });
    }

    await db.collection("articles").insertMany(articles);
}

// Da wir eine async function erstellt haben, müssen wir hier auf das Promise warten.
// Tritt kein Fehler auf, beenden wir den Prozess mit process.exit(0).
// Andernfalls lassen wir uns den Fehler ausgeben und stoppen den Prozess mit einem Fehler (process.exit(1)).
generateData()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
