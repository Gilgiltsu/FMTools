
//Simplfication du code 
var  
minPro=document.getElementById("minPro"), midPro=document.getElementById("midPro"),maxPro=document.getElementById("maxPro"),
minPre=document.getElementById("minPre"), midPre=document.getElementById("midPre"),maxPre=document.getElementById("maxPre"),
minTemp=document.getElementById("minTemp"), midTemp=document.getElementById("midTemp"),maxTemp=document.getElementById("maxTemp"),
minAmb=document.getElementById("minAmb"), midAmb=document.getElementById("midAmb"),maxAmb=document.getElementById("maxAmb"),
minFid=document.getElementById("minFid"), midFid=document.getElementById("midFid"),maxFid=document.getElementById("maxFid"),
minFp=document.getElementById("minFp"), midFp=document.getElementById("midFp"),maxFp=document.getElementById("maxFp"),
minPol=document.getElementById("minPol"), midPol=document.getElementById("midPol"),maxPol=document.getElementById("maxPol"),
det=document.getElementById("det");

let tabs = document.querySelectorAll(".tabs li");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
  document.addEventListener('DOMContentLoaded', function() {
  adaptabilite.classList.add("active");
});
});


var sidenav = document.getElementById("burger_menu");
var openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

function RMchange() {
  Media.length=0;
  // - Equi
  "Amb"===Personnalite.value || "TreAmb"===Personnalite.value || "Vers"===Personnalite.value || "Me"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeRe"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Eva"),RM("EvaCon"),RM("EvaImp"),RM("EvaIr"),RM("EvaIrCon"),RM("EvaRes"),RM("EvaVer"),RM("EvaVerCon"),RM("Imp"),RM("Ir"),RM("IrCon"),RM("Re"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Eva, Res
  "AsAmb"===Personnalite.value ||  "AsDe"===Personnalite.value || "Eq"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Imp"),RM("Ir"),RM("IrCon"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // -Eva, Res, ApMe
  "AsLo"===Personnalite.value?
  (RM(""),RM("ApMeCon"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Imp"),RM("Ir"),RM("IrCon"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Eva, Res, Conf
  "AsFP"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeVer"),RM("Equi"),RM("Imp"),RM("Ir"),RM("Spo"),RM("SpoImp"),RM("SpoIr"),RM("SpoVer"),RM("Ver")):
  // - Eva, Res, Imp
  "Dec"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Ir"),RM("IrCon"),RM("Spo"),RM("SpoCon"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Eva, Res, Ir
  "In"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeImp"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Imp"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Eva, Res, Ir, Ver, Con
  "Jo"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeImp"),RM("Equi"),RM("Imp"),RM("Spo"),RM("SpoImp")):
  // - Eva, Imp 
  "FaCo"===Personnalite.value || "Fri"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeRe"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Ir"),RM("IrCon"),RM("Re"),RM("Spo"),RM("SpoCon"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Con, Ir, Ver
  "CiMo"===Personnalite.value || "Enj"===Personnalite.value || "Modpro"===Personnalite.value || "Pro"===Personnalite.value || "Ent"===Personnalite.value ||"SAmb"===Personnalite.value?
  (RM(""),RM("ApMeImp"),RM("ApMeRe"),RM("Equi"),RM("Eva"),RM("EvaImp"),RM("EvaRes"),RM("Imp"),RM("Re"),RM("Spo"),RM("SpoImp")):
  // - Con
  "FP"===Personnalite.value || "Ho"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeRe"),RM("ApMeVer"),RM("Equi"),RM("Eva"),RM("EvaImp"),RM("EvaIr"),RM("EvaRes"),RM("EvaVer"),RM("Imp"),RM("Ir"),RM("Re"),RM("Spo"),RM("SpoImp"),RM("SpoIr"),RM("SpoVer"),RM("Ver")):
  // - Imp 
  "Per"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeRe"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Eva"),RM("EvaCon"),RM("EvaIr"),RM("EvaIrCon"),RM("EvaRes"),RM("EvaVer"),RM("EvaVerCon"),RM("Ir"),RM("IrCon"),RM("Re"),RM("Spo"),RM("SpoCon"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Equi, ApMe
  "Fo"===Personnalite.value?
  (RM(""),RM("Con"),RM("Eva"),RM("EvaCon"),RM("EvaImp"),RM("EvaIr"),RM("EvaIrCon"),RM("EvaRes"),RM("EvaVer"),RM("EvaVerCon"),RM("Imp"),RM("Ir"),RM("IrCon"),RM("Re"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - ApMe
  "Lo"===Personnalite.value || "TreLoy"===Personnalite.value?
  (RM(""),RM("ApMeCon"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeRe"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Eva"),RM("EvaCon"),RM("EvaImp"),RM("EvaIr"),RM("EvaIrCon"),RM("EvaRes"),RM("EvaVer"),RM("EvaVerCon"),RM("Imp"),RM("Ir"),RM("IrCon"),RM("Re"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // Autres
  "AsAmb"===Personnalite.value || "AsPro"===Personnalite.value || "Del"===Personnalite.value || "Det"===Personnalite.value || "Dev"===Personnalite.value || "Ef"===Personnalite.value || "Fac"===Personnalite.value || "FaDe"===Personnalite.value || "Le"===Personnalite.value || "Lene"===Personnalite.value || "Mot"===Personnalite.value || "Ob"===Personnalite.value || "Rea"===Personnalite.value || "Res"===Personnalite.value?
  (RM(""),RM("ApMe"),RM("ApMeCon"),RM("ApMeImp"),RM("ApMeIr"),RM("ApMeIrCon"),RM("ApMeRe"),RM("ApMeVer"),RM("ApMeVerCon"),RM("Con"),RM("Equi"),RM("Eva"),RM("EvaCon"),RM("EvaImp"),RM("EvaIr"),RM("EvaIrCon"),RM("EvaRes"),RM("EvaVer"),RM("EvaVerCon"),RM("Imp"),RM("Ir"),RM("IrCon"),RM("Re"),RM("Spo"),RM("SpoCon"),RM("SpoImp"),RM("SpoIr"),RM("SpoIrCon"),RM("SpoVer"),RM("SpoVerCon"),RM("Ver"),RM("VerCon")):
  // - Con, Irn Ver, Eva
  "LeCh"===Personnalite.value&&
  (RM(""),RM("ApMe"),RM("ApMeImp"),RM("ApMeRe"),RM("Equi"),RM("Imp"),RM("Re"),RM("Spo"),RM("SpoImp"))
  }

function RM(b) {
  var a;
  ""===b&&(a=new Option("Rapports aux médias"),Media.appendChild(a));
  "ApMe"===b&&(a=new Option("Apprécié des médias","ApMe"),Media.appendChild(a));
  "ApMeCon"===b&&(a=new Option("Apprécié des médias, Conflictuel","ApMeCon"),Media.appendChild(a));
  "ApMeImp"===b&&(a=new Option("Apprécié des médias, Imperturbable","ApMeImp"),Media.appendChild(a));
  "ApMeIr"===b&&(a=new Option("Apprécié des médias, Irascible","ApMeIr"),Media.appendChild(a));
  "ApMeIrCon"===b&&(a=new Option("Apprécié des médias, Irascible, Conflictuel","ApMeIrCon"),Media.appendChild(a));
  "ApMeRe"===b&&(a=new Option("Apprécié des médias, Réservé","ApMeRe"),Media.appendChild(a));
  "ApMeVer"===b&&(a=new Option("Apprécié des médias, Versatile","ApMeVer"),Media.appendChild(a));
  "ApMeVerCon"===b&&(a=new Option("Apprécié des médias, Versatile, Conflictuel","ApMeVerCon"),Media.appendChild(a));
  "Con"===b&&(a=new Option("Conflictuel","Con"),Media.appendChild(a));
  "Equi"===b&&(a=new Option("Equilibré","Equi"),Media.appendChild(a));
  "Eva"===b&&(a=new Option("Evasif","Eva"),Media.appendChild(a));
  "EvaCon"===b&&(a=new Option("Evasif, Conflictuel","EvaCon"),Media.appendChild(a));
  "EvaImp"===b&&(a=new Option("Evasif, Imperturbable","EvaImp"),Media.appendChild(a));
  "EvaIr"===b&&(a=new Option("Evasif, Irascible","EvaIr"),Media.appendChild(a));
  "EvaIrCon"===b&&(a=new Option("Evasif, Irascible, Conflictuel","EvaIrCon"),Media.appendChild(a));
  "EvaRes"===b&&(a=new Option("Evasif, Réservé","EvaRes"),Media.appendChild(a));
  "EvaVer"===b&&(a=new Option("Evasif, Versatile","EvaVer"),Media.appendChild(a));
  "EvaVerCon"===b&&(a=new Option("Evasif, Versatile, Conflictuel","EvaVerCon"),Media.appendChild(a));
  "Imp"===b&&(a=new Option("Imperturbable","Imp"),Media.appendChild(a));
  "Ir"===b&&(a=new Option("Irascible","Ir"),Media.appendChild(a));
  "IrCon"===b&&(a=new Option("Irascible, Conflictuel","IrCon"),Media.appendChild(a));
  "Re"===b&&(a=new Option("Réservé","Re"),Media.appendChild(a));
  "Spo"===b&&(a=new Option("Spontané","Spo"),Media.appendChild(a));
  "SpoCon"===b&&(a=new Option("Spontané, Conflictuel","SpoCon"),Media.appendChild(a));
  "SpoImp"===b&&(a=new Option("Spontané, Imperturbable","SpoImp"),Media.appendChild(a));
  "SpoIr"===b&&(a=new Option("Spontané, Irascible","SpoIr"),Media.appendChild(a));
  "SpoIrCon"===b&&(a=new Option("Spontané, Irascible, Conflictuel","SpoIrCon"),Media.appendChild(a));
  "SpoVer"===b&&(a=new Option("Spontané, Versatile","SpoVer"),Media.appendChild(a));
  "SpoVerCon"===b&&(a=new Option("Spontané, Versatile, Conflictuel","SpoVerCon"),Media.appendChild(a));
  "Ver"===b&&(a=new Option("Versatile","Ver"),Media.appendChild(a));
  "VerCon"===b&&(a=new Option("Versatile, Conflictuel","VerCon"),Media.appendChild(a));
}


function note() {
rst();

//Personnalité
("Amb"===Personnalite.value?
(minAmb.innerHTML=16,maxAmb.innerHTML=19,minFid.innerHTML=7,maxFid.innerHTML=9,
deter(1),
cas(0),cas(1)
):

"AsAmb"===Personnalite.value?
(minAmb.innerHTML=15,maxPro.innerHTML=14,
deter(2),deter(3),deter(4),deter(5),
cas(0),cas(2),cas(5)
):

"AsDe"===Personnalite.value?
(maxPro.innerHTML=14,minFp.innerHTML=5,
cas(0),cas(2),cas(3),cas(4),cas(5)
):

"AsFP"===Personnalite.value?
(maxPro.innerHTML=14, minFp.innerHTML=15, maxFid.innerHTML=14,
 deter(1),deter(2),deter(3),deter(4),
 cas(0),cas(5)
):

"AsLo"===Personnalite.value?
(minAmb.innerHTML=6,maxPro.innerHTML=14,minFid.innerHTML=15,
deter(1),deter(2),deter(3),deter(4),deter(5),
cas(0),cas(4),cas(5)
):

"AsPro"===Personnalite.value?
(minPro.innerHTML=15,
deter(1),deter(3),deter(4),deter(5),
cas(1),cas(2),cas(3),cas(4),cas(5)
):

"CiMo"===Personnalite.value?
(minAmb.innerHTML=12,minPro.innerHTML=15,minFp.innerHTML=15,minFid.innerHTML=14,minPre.innerHTML=14,minTemp.innerHTML=15
):

"Dec"===Personnalite.value?
(minPro.innerHTML=2,maxPro.innerHTML=4,minTemp.innerHTML=5
):

"Del"===Personnalite.value?
(midFp.innerHTML=1,
cas(0),cas(1),cas(2),cas(3)
):

"Det"===Personnalite.value?
(minAmb.innerHTML=6,minPro.innerHTML=15, minFp.innerHTML=5, maxPre.innerHTML=16,
cas(1),cas(2),cas(3),cas(4),cas(5)
):

"Dev"===Personnalite.value || "TreLoy"===Personnalite.value?
(minAmb.innerHTML=6,maxAmb.innerHTML=7,midFid.innerHTML=20,
deter(2),deter(5),
cas(0),cas(1)
):

"Ef"===Personnalite.value?
(minFp.innerHTML=5, midPre.innerHTML=20,
deter(1),deter(3),deter(4),deter(5),
cas(0),cas(1),cas(2),cas(3),cas(4)
):

"Enj"===Personnalite.value?
(maxPro.innerHTML=17,minFp.innerHTML=15,minPre.innerHTML=15,minTemp=10,
deter(1),deter(2),deter(4),deter(6),
cas(2),cas(3),cas(4)
):

"Ent"===Personnalite.value?
(minPro.innerHTML=11,maxPro.innerHTML=17,maxFp.innerHTML=14,minPre.innerHTML=15,minTemp.innerHTML=10,
deter(1),deter(4),deter(5),deter(6),
cas(2),cas(3),cas(4)
):

"Eq"===Personnalite.value?
(maxAmb.innerHTML=14,maxPro.innerHTML=14,maxFp.innerHTML=14,maxFid.innerHTML=14,
deter(1),deter(2),deter(3),deter(5),
cas(0),cas(3),cas(5)
):

"Fac"===Personnalite.value || "FaDe"===Personnalite.value ?
(maxAmb.innerHTML=9,minPro.innerHTML=5,maxFp.innerHTML=17,
cas(0),cas(1),cas(3)
):

"FaCo"===Personnalite.value?
(minPro.innerHTML=5,maxFp.innerHTML=17, minPre.innerHTML=2, maxPre.innerHTML=3,
deter(1),
cas(1),cas(2),cas(3),cas(4),cas(0)
):

"FP"===Personnalite.value?
(minPro.innerHTML=5,minFp.innerHTML=18,maxFp.innerHTML=19,
cas(0),cas(1),cas(2),cas(3)
):

"Fo"===Personnalite.value?
(maxPro.innerHTML=10,maxTemp.innerHTML=4
):

"Fri"===Personnalite.value?
(minPro.innerHTML=5,maxFp.innerHTML=17,midPre.innerHTML=1,
deter(1),
cas(0),cas(1),cas(2),cas(3),cas(4)
):

"Ho"===Personnalite.value?
(minPro.innerHTML=5,midFp.innerHTML=20,
cas(0),cas(1),cas(2),cas(3)
):

"In"===Personnalite.value?
(minTemp.innerHTML=5,midPro.innerHTML=1
):

"Jo"===Personnalite.value?
(maxPro.innerHTML=10,maxFp.innerHTML=14,minPre.innerHTML=15,minTemp.innerHTML=10,
deter(1),deter(2),deter(4),deter(5),deter(6),
cas(2),cas(3),cas(4)
):

"Le"===Personnalite.value || "Lene"===Personnalite.value ?
(minPro.innerHTML=1):

"LeCh"===Personnalite.value?
(minFp.innerHTML=18,minTemp.innerHTML=18
):

"Lo"===Personnalite.value?
(minAmb.innerHTML=6,maxAmb.innerHTML=7,minFid.innerHTML=18,maxFid.innerHTML=19,
deter(2), deter(5),
cas(0),cas(1)
):

"Me"===Personnalite.value?
(minAmb.innerHTML=16,maxFid.innerHTML=3
):

"Modpro"===Personnalite.value?
(midPro.innerHTML=20,minTemp.innerHTML=10
):

"Mot"===Personnalite.value?
(minAmb.innerHTML=12
):

"Ob"===Personnalite.value?
(maxAmb.innerHTML=11
):

"Per"===Personnalite.value?
(minAmb.innerHTML=14,minPro.innerHTML=14,maxTemp.innerHTML=9
):

"Pro"===Personnalite.value?
(minPro.innerHTML=18,minTemp.innerHTML=10,maxPro.innerHTML=19
):

"Rea"===Personnalite.value?
(minFp.innerHTML=2,maxFp.innerHTML=4,
cas(0),cas(1),cas(2),cas(3)
):

"Res"===Personnalite.value?
(minFp.innerHTML=5,minPre.innerHTML=17,maxPre.innerHTML=19,
cas(0),cas(1),cas(2),cas(3),cas(4)
):


"SAmb"===Personnalite.value?
(maxAmb.innerHTML=5,minTemp.innerHTML=11,
deter(2),
cas(0),cas(1)
):

"TreAmb"===Personnalite.value?
(midAmb.innerHTML=20,maxFid.innerHTML=9,minFid.innerHTML=7,
deter(2),
cas(0),cas(1)
):

"TreLoy"===Personnalite.value?
(minAmb.innerHTML=6,maxAmb.innerHTML=7,midFid.innerHTML=20,
deter(2),deter(5),
cas(0),cas(1)
):

"Vers"===Personnalite.value&&
(minAmb.innerHTML=16,minFid.innerHTML=4,maxFid.innerHTML=6
));

//Média
"ApMe"===Media.value?
(minTemp.innerHTML<7&&(minTemp.innerHTML=7),maxPol.innerHTML>14&&(maxPol.innerHTML=14),
maxFid.innerHTML>10&&(maxFid.innerHTML=10),maxPre.innerHTML>14&&(maxPre.innerHTML=14),
med(1),med(2),med(3),med(4)
):

"ApMeCon"===Media.value?
(midTemp.innerHTML=7,maxPol.innerHTML>14&&(maxPol.innerHTML=14),maxFp.innerHTML>7&&(maxFp.innerHTML=7),
med(1)
):

"ApMeImp"===Media.value?
(minTemp.innerHTML<15&&(minTemp.innerHTML=15),maxPol.innerHTML>14&&(maxPol.innerHTML=14),minPre.innerHTML<15&&(minPre.innerHTML=15)
):

"ApMeIr"===Media.value?
(maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),maxPol.innerHTML>14&&(maxPol.innerHTML=14),maxFid.innerHTML>10&&(maxFid.innerHTML=10),
med(1)
):

"ApMeIrCon"===Media.value?
(maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),maxPol.innerHTML>14&&(maxPol.innerHTML=14),maxFp.innerHTML>7&&(maxFp.innerHTML=7),
med(1)
):

"ApMeRe"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),minTemp.innerHTML<7&&(minTemp.innerHTML=7),maxPol.innerHTML>5&&(maxPol.innerHTML=5),
med(2),med(3)
):

"ApMeVer"===Media.value?
(minTemp.innerHTML<3&&(minTemp.innerHTML=3),maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),maxPol.innerHTML>14&&(maxPol.innerHTML=14),
med(1)
):

"ApMeVerCon"===Media.value?
(minTemp.innerHTML<3&&(minTemp.innerHTML=3),maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),maxPol.innerHTML>14&&(maxPol.innerHTML=14),maxFp.innerHTML>7&&(maxFp.innerHTML=7),
med(1)
):

"Con"===Media.value?
(midTemp.innerHTML=7,maxFp.innerHTML>7&&(maxFp.innerHTML=7),maxPol.innerHTML>14&&(maxPol.innerHTML=14),minFid.innerHTML<11&&(minFid.innerHTML=11),
med(1)
):

"Equi"===Media.value?
(minTemp.innerHTML<7&&(minTemp.innerHTML=7),maxPol.innerHTML>14&&(maxPol.innerHTML=14),minFid.innerHTML<11&&(minFid.innerHTML=11),
med(1),med(2),med(3),med(4)
):

"Eva"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),minTemp.innerHTML<7&&(minTemp.innerHTML=7),maxTemp.innerHTML>15&&(maxTemp.innerHTML=15),
med(2),med(3)
):

"EvaCon"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),midTemp.innerHTML=7,maxFp.innerHTML>7&&(maxFp.innerHTML=7)
):

"EvaImp"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),midTemp.innerHTML=15
):

"EvaIr"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),maxTemp.innerHTML>2&&(maxTemp.innerHTML=2)
):

"EvaIrCon"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),maxFp.innerHTML>7&&(maxFp.innerHTML=7)
):

"EvaRes"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>5&&(maxPol.innerHTML=5),minPre.innerHTML<15&&(minPre.innerHTML=15),maxTemp.innerHTML>15&&(maxTemp.innerHTML=15),minTemp.innerHTML<7&&(minTemp.innerHTML=7),
med(2),med(3)
):
"EvaVer"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),minTemp.innerHTML<3&&(minTemp.innerHTML=3)
):
"EvaVerCon"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),minTemp.innerHTML<3&&(minTemp.innerHTML=3),maxFp.innerHTML>7&&(maxFp.innerHTML=7)
):

"Imp"===Media.value?
(minPre.innerHTML<15&&(minPre.innerHTML=15),minTemp.innerHTML<15&&(minTemp.innerHTML=15),minFid<11&&(minFid=11)
):

"Ir"===Media.value?
(maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),minFid<11&&(minFid=11),
med(1)
):

"IrCon"===Media.value?
(maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),maxFp.innerHTML>7&&(maxFp.innerHTML=7),minFid<11&&(minFid=11),
med(1)
):

"Re"===Media.value?
(minPro.innerHTML<15&&(minPro.innerHTML=15),minTemp.innerHTML<7(minTemp.innerHTML=7),maxPol.innerHTML>5&&(maxPol.innerHTML=5),minFid<11&&(minFid=11),
med(1),med(2)
):

"Spo"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),minTemp.innerHTML<7&&(minTemp.innerHTML=7),
med(2),med(3)
):

"SpoCon"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),maxFp.innerHTML>7&&(maxFp.innerHTML=7),midTemp.innerHTML=7,
med(2),med(3)
):

"SpoImp"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),minPre.innerHTML<15&&(minPre.innerHTML=15),minTemp.innerHTML<15&&(minTemp.innerHTML=15)
):

"SpoIr"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),minFp.innerHTML<8&&(minFp.innerHTML=8)
):

"SpoIrCon"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),maxTemp.innerHTML>2&&(maxTemp.innerHTML=2),maxFp.innerHTML>7&&(maxFp.innerHTML=7)
):

"SpoVer"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),minTemp.innerHTML<3&&(minTemp.innerHTML=3),minFp.innerHTML<8&&(minFp.innerHTML=8)
):

"SpoVerCon"===Media.value?
(minPol.innerHTML<15&&(minPol.innerHTML=15),maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),minTemp.innerHTML<3&&(minTemp.innerHTML=3),maxFp.innerHTML>7&&(maxFp.innerHTML=7)
):

"Ver"===Media.value?
(maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),minTemp.innerHTML<3&&(minTemp.innerHTML=3),minFp.innerHTML<8&&(minFp.innerHTML=8),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minFid.innerHTML<11&&(minFid.innerHTML=11),
med(1)
):

"VerCon"===Media.value&&
(maxTemp.innerHTML>6&&(maxTemp.innerHTML=6),minTemp.innerHTML<3&&(minTemp.innerHTML=3),maxFp.innerHTML>7&&(maxFp.innerHTML=7),maxPol.innerHTML>15&&(maxPol.innerHTML=15),minFid.innerHTML<11&&(minFid.innerHTML=11),
med(1)
);

uniq();
color();
}

function deter(a) {
1 === a&&(det.value<=5&&minAmb.innerHTML<10&&(minAmb.innerHTML=10));
2 === a&&(det.value<=9&&minPro.innerHTML<5&&(minPro.innerHTML=5));
3 === a&&(det.value<=9&&minPre.innerHTML<4&&(minPre.innerHTML=4));
4 === a&&(det.value<=9&&(maxFp.innerHTML=17));
5 === a&&(det.value>=11&&minFp.innerHTML<5&&(minFp.innerHTML=5));
6 === a&&(det.value>=15&&(minPre.innerHTML=15)&&(maxPre.innerHTML=16));
}

function cas(a) {
0 === a&&(maxTemp.innerHTML<5&&(minPro.innerHTML=11),
maxPro.innerHTML<11&&(minTemp.innerHTML=5));
1=== a&&(minPro.innerHTML>17&&(maxTemp.innerHTML=9),
minTemp.innerHTML>9&&(maxPro.innerHTML=17));
2 === a&&(minAmb.innerHTML>15&&(minFid.innerHTML=10),
maxFid.innerHTML<10&&(maxAmb.innerHTML=15));
3 === a&&(maxAmb.innerHTML<6&&(maxFid.innerHTML=10),
minFid.innerHTML>10&&(minAmb.innerHTML=6));
4 === a&&(maxAmb.innerHTML<8&&(maxFid.innerHTML=17),
minFid.innerHTML>17&&(minAmb.innerHTML=8));
5 === a&&(minTemp.innerHTML>9&&(maxPre.innerHTML=14),
minPre.innerHTML>14&&(maxTemp.innerHTML=9));
} 

function med(a) {
1 === a&&(minPre.innerHTML>14&&(maxPro.innerHTML=14),
minPro.innerHTML>14&&(maxPre.innerHTML=14));
2 === a&&(maxTemp.innerHTML<8&&(minFp.innerHTML=8),
maxFp.innerHTML<8&&(minTemp.innerHTML=8));
3 === a&&(minTemp.innerHTML>14&&(maxPre.innerHTML=14),
minPre.innerHTML>14&&(maxTemp.innerHTML=14));
4 === a&&(minPol.innerHTML>14&&(maxPro.innerHTML=14),maxPol.innerHTML<6&&(maxPro.innerHTML=14),
minPro.innerHTML>14&&((minPol.innerHTML=6)&&(maxPol.innerHTML=14)));
}


function rst() {
  minPro.innerHTML=1;midPro.innerHTML="-";maxPro.innerHTML=20;
  minPre.innerHTML=1;midPre.innerHTML="-";maxPre.innerHTML=20;
  minTemp.innerHTML=1;midTemp.innerHTML="-";maxTemp.innerHTML=20;
  minAmb.innerHTML=1;midAmb.innerHTML="-";maxAmb.innerHTML=20;
  minFid.innerHTML=1;midFid.innerHTML="-";maxFid.innerHTML=20;
  minFp.innerHTML=1;midFp.innerHTML="-";maxFp.innerHTML=20;
  minPol.innerHTML=1;midPol.innerHTML="-";maxPol.innerHTML=20;
  rstColor();
}
  
  
function rstColor() {
  var lstID = document.getElementsByTagName("td");
  for (i=0; i<lstID.length; i++)
  if (lstID[i].id.substring(0,2)=="mi")
  lstID[i].style.color='#ffffff'
  var lstID = document.getElementsByTagName("td");
  for (i=0; i<lstID.length; i++)
  if (lstID[i].id.substring(0,3)=="max")
  lstID[i].style.color='#ffffff'
  rstStyle();
}



function rstStyle() {
  var lstID = document.getElementsByTagName("td");  
  for (i=0; i<lstID.length; i++)
  if (lstID[i].id.substring(0,3)=="mid") {
   val= lstID[i].id.substring(3);
   var mini= "min"+val;
   var maxi= "max"+val;
   var mid= "mid"+val;
    (document.getElementById(mid).colSpan="1",document.getElementById(mini).style.display="",document.getElementById(maxi).style.display="")
   }
}
  
function adjust() {
  var lstID = document.getElementsByTagName("td");
  for (i=0; i<lstID.length ; i++) {
    if (lstID[i].id.substring(0,1)=="m"){
      val= lstID[i].id.substring(3);
      var mini= "min"+val;
      var maxi= "max"+val;
      var mid= "mid"+val;
     if (document.getElementById(mini).innerHTML == document.getElementById(maxi).innerHTML) {
      document.getElementById(mid).innerHTML = document.getElementById(mini).innerHTML;
     }
    }
  }
}

function uniq() {
adjust();
  var lstID = document.getElementsByTagName("td");  
  for (i=0; i<lstID.length; i++){
  val= lstID[i].id.substring(3);
   var mini= "min"+val;
   var maxi= "max"+val;
   var mid= "mid"+val;
  if (lstID[i].id.substring(0,3)=="mid")
   if (lstID[i].innerHTML != "-") 
      (document.getElementById(mid).colSpan="3",document.getElementById(mini).style.display="none",document.getElementById(maxi).style.display="none")
   
  } 
}


function color() {

var lstID = document.getElementsByTagName("td");
  for (i=0; i<lstID.length ; i++) {
  if (lstID[i].id.substring(0,2)=="mi"){
    if (lstID[i].innerHTML >= 10) {
      val= lstID[i].id.substring(3);
      if (val != "Pol") {
      var mini= "min"+val;
      var maxi= "max"+val;
      var mid= "mid"+val;
      (document.getElementById(mini).style.color= '#007c0c',document.getElementById(mid).style.color= '#007c0c',document.getElementById(maxi).style.color= '#007c0c')}
      if (val === "Pol") {
        var mini= "min"+val;
        var maxi= "max"+val;
        var mid= "mid"+val;
        (document.getElementById(mini).style.color= '#ab0000',document.getElementById(mid).style.color= '#ab0000',document.getElementById(maxi).style.color= '#ab0000')}
      }}
      if (lstID[i].id.substring(0,3)=="mid"){
        if (lstID[i].innerHTML <10) {
            val= lstID[i].id.substring(3);
            if (val != "Pol") {
            var mini= "min"+val;
            var maxi= "max"+val;
            var mid= "mid"+val;
            (document.getElementById(mini).style.color= '#ab0000',document.getElementById(mid).style.color= '#ab0000',document.getElementById(maxi).style.color= '#ab0000')}
            if (val === "Pol") {
              var mini= "min"+val;
              var maxi= "max"+val;
              var mid= "mid"+val;
              (document.getElementById(mini).style.color= '#007c0c',document.getElementById(mid).style.color= '#007c0c',document.getElementById(maxi).style.color= '#007c0c')}
            }}
      if (lstID[i].id.substring(0,3)=="max"){
      if (lstID[i].innerHTML < 10) {
          val= lstID[i].id.substring(3);
          if (val != "Pol") {
          var mini= "min"+val;
          var maxi= "max"+val;
          var mid= "mid"+val;
          (document.getElementById(mini).style.color= '#ab0000',document.getElementById(mid).style.color= '#ab0000',document.getElementById(maxi).style.color= '#ab0000')}
          if (val === "Pol") {
            var mini= "min"+val;
            var maxi= "max"+val;
            var mid= "mid"+val;
            (document.getElementById(mini).style.color= '#007c0c',document.getElementById(mid).style.color= '#007c0c',document.getElementById(maxi).style.color= '#007c0c')}
          }}
  }
}



function afficher(a) {
  document.getElementById("Professionnalisme").style.display="none";
  document.getElementById("Pression").style.display="none";
  document.getElementById("Tempérament").style.display="none";
  document.getElementById("Ambition").style.display="none";
  document.getElementById("Fidélité").style.display="none";
  document.getElementById("Fair-play").style.display="none";
  document.getElementById("Polémique").style.display="none";
  document.getElementById(a.innerHTML).style.display="";
}