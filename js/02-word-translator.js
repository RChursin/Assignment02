// The Word Translator
var languageCode = prompt("Enter a language code (es, de, en, fr):");
switch (languageCode) {
    case "es":
        console.log("Hello World translated in Spanish is: Hola Mundo");
        break;
    case "de":
        console.log("Hello World translated in German is: Hallo Welt");
        break;
    case "fr":
        console.log("Hello World translated in French is: Bonjour le monde");
        break;
    case "en":
        console.log("Hello World translated in English is: Hello World");
        break;
    default:
        console.log("Hello World translated in English is: Hello World");
}