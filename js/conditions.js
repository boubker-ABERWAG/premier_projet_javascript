let noteAvecSwitch = 10;
switch (noteAvecSwitch) {
    case 10:
        console.log("Vous avez eu 10");
        break;
    case 15:
        console.log("15");
        break;
    case 14:
        console.log("14");
        break;
    case 12:
        console.log("12");
        break;
    default:
        console.log("Aucune des valeurs");
        break;


/*
 * switch (variable) {
 *   case [valeur1]:
 *      traitement;
 *       break;
 *  case [valeur2]:
 *      traitement;
 *       break;
 *  default:
 *      traitement par defaut
 *      break;
 */

        /*
         * && ET
         * || OU
         */


let note = 21;
if(note > 0 && note <= 5){
    console.log("A l'année prochaine")
}else if(note > 5 && note <= 10){
    console.log("Presque");
}else if(note > 10 && note <= 15){
    console.log("Bien");
}else if(note > 15 && note <= 20){
    console.log("TBien");
}else{
    console.log("Impossible");
}