// viser et vindue, som indeholder et DOM-dokument //
// et DOM-dokument repreasentere alt det som et HTML dokument indeholder //
window.addEventListener("load", sidenVises);

function sidenVises() {
  // vises til brugeren //
  console.log("sidenVises");

  // document: referer til noget inde i HTMl //
  // querySelector: søger/leder efter noget inde i en class (i dette, link1 (link til website)) //
  // .link1: en class inde i HTMl dokumentet (link til website opgaven) //
  // addEventListener: lytter efter noget. I dette tilfælde lytter det efter et click //
  // clickLinkHandler1: referer til funktionen clickLinkHandler1
  document.querySelector(".link1").addEventListener("click", clickLinkhandler1);

  // document: referer til noget inde i HTMl //
  // querySelector: søger/leder efter noget inde i en class (i dette, link1 (link til emnesite)) //
  // .link2: en class inde i HTMl dokumentet (link til emnesite opgaven) //
  // addEventListener: lytter efter noget. I dette tilfælde lytter det efter et click //
  // clickLinkHandler2: referer til funktionen clickLinkHandler2
  document.querySelector(".link2").addEventListener("click", clickLinkhandler2);
}

// Link til siden tema 2 //
function clickLinkhandler1() {
  // vises til brugeren- det er det som brugeren kan se at der står Link clicked Website i consolen//
  console.log("Link clicked Website");

  // classList: DOM egenskab referer til CSS. En class inde i CSS //
  // add: tilføjer clas hop (som er inde i CSS dokumentet) //
  document.querySelector(".link1").classList.add("hop");

  // add: fjerner clas hop (som er inde i CSS dokumentet) //
  document.querySelector(".link1").classList.remove("hop");

  // offsetLeft: returnerer den venstre position (i pixels) i forhold til den overordnede //
  // bruger offsetLeft for at kunne genstarte hop animationen //
  document.querySelector(".link1").offsetLeft;

  // tilføjer class hop på igen //
  document.querySelector(".link1").classList.add("hop");
}

function clickLinkhandler2() {
  // vises til brugeren- det er det som brugeren kan se at der står Link clicked Emnesite i consolen//
  console.log("Link clicked Emnesite");

  // classList: DOM egenskab referer til CSS. En class inde i CSS //
  // add: tilføjer clas hop (som er inde i CSS dokumentet) //
  document.querySelector(".link2").classList.add("hop");

  // add: fjerner clas hop (som er inde i CSS dokumentet) //
  document.querySelector(".link2").classList.remove("hop");

  // offsetLeft: returnerer den venstre position (i pixels) i forhold til den overordnede //
  // bruger offsetLeft for at kunne genstarte hop animationen //
  document.querySelector(".link2").offsetLeft;

  // tilføjer class hop på igen //
  document.querySelector(".link2").classList.add("hop");
}
