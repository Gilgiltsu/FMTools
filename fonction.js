
//Simplfication du code 
var
  minPro = document.getElementById("minPro"), midPro = document.getElementById("midPro"), maxPro = document.getElementById("maxPro"),
  minPre = document.getElementById("minPre"), midPre = document.getElementById("midPre"), maxPre = document.getElementById("maxPre"),
  minTemp = document.getElementById("minTemp"), midTemp = document.getElementById("midTemp"), maxTemp = document.getElementById("maxTemp"),
  minAmb = document.getElementById("minAmb"), midAmb = document.getElementById("midAmb"), maxAmb = document.getElementById("maxAmb"),
  minFid = document.getElementById("minFid"), midFid = document.getElementById("midFid"), maxFid = document.getElementById("maxFid"),
  minFp = document.getElementById("minFp"), midFp = document.getElementById("midFp"), maxFp = document.getElementById("maxFp"),
  minPol = document.getElementById("minPol"), midPol = document.getElementById("midPol"), maxPol = document.getElementById("maxPol"),
  Garret = document.getElementById("Garret"), Gprise = document.getElementById("Gprise"),
  Deftac = document.getElementById("Deftac"), Deftec = document.getElementById("Deftec"),
  Attac = document.getElementById("Attac"), Attec = document.getElementById("Attec"),
  Postac = document.getElementById("Postac"), Postec = document.getElementById("Postec"),
  Puis = document.getElementById("Puis"), Viva = document.getElementById("Viva"),
  det = document.getElementById("det"), zero = "../image/0etoile.png", demi = "../image/demi.png", un = "../image/1etoile.png", undemi = "../image/1etdemi.png", deux = "../image/2etoiles.png",
  deuxdemi = "../image/2etdemi.png", trois = "../image/3etoiles.png", troisdemi = "../image/3etdemi.png", quatre = "../image/4etoiles.png",
  quatredemi = "../image/4etdemi.png", cinq = "../image/5etoiles.png",
  CP = document.getElementById("CP"), CaM = document.getElementById("CaM"), Def = document.getElementById("Def"), Det = document.getElementById("Det"),
  Men = document.getElementById("Men"), Ndd = document.getElementById("Ndd"), Off = document.getElementById("Off"), Tac = document.getElementById("Tac"),
  Tec = document.getElementById("Tec"), AGB = document.getElementById("AGB"), PGB = document.getElementById("PGB"), RGB = document.getElementById("RGB");


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
  document.addEventListener('DOMContentLoaded', function () {
    adaptabilite.classList.add("active");
  });
});



function RMchange() {
  Media.length = 0;
  // - Equi
  "Amb" === Personnalite.value || "TreAmb" === Personnalite.value || "Vers" === Personnalite.value || "Me" === Personnalite.value ?
    (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeImp"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeRe"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Eva"), RM("EvaCon"), RM("EvaImp"), RM("EvaIr"), RM("EvaIrCon"), RM("EvaRes"), RM("EvaVer"), RM("EvaVerCon"), RM("Spo"), RM("SpoCon"), RM("SpoImp"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon")) :
    // -Eva, Con, Ir, Ver
    "CiMo" === Personnalite.value ?
      (RM(""), RM("ApMeImp"), RM("ApMeRe"), RM("Equi"), RM("EvaImp"), RM("Imp"), RM("Re"), RM("Spo"), RM("SpoImp")) :
      // - Eva, Res, ApMeImp
      "AsAmb" === Personnalite.value ?
        (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Ir"), RM("IrCon"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
        // - Eva, Res
        "AsDe" === Personnalite.value || "Eq" === Personnalite.value ?
          (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Ir"), RM("IrCon"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
          // -Eva, Res, ApMe
          "AsLo" === Personnalite.value ?
            (RM(""), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Ir"), RM("IrCon"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
            // - Eva, Res, Con
            "AsFP" === Personnalite.value ?
              (RM(""), RM("ApMe"), RM("ApMeIr"), RM("ApMeVer"), RM("Equi"), RM("Ir"), RM("Spo"), RM("SpoIr"), RM("SpoVer"), RM("Ver")) :
              // - Eva, Res, Imp
              "Dec" === Personnalite.value ?
                (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Equi"), RM("Ir"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver")) :
                // - Eva, Res, Ir
                "In" === Personnalite.value ?
                  (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeImp"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Equi"), RM("Imp"), RM("Spo"), RM("SpoCon"), RM("SpoImp"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver")) :
                  // - Eva, Res, Ir, Ver, Con
                  "Jo" === Personnalite.value ?
                    (RM(""), RM("ApMe"), RM("ApMeImp"), RM("Equi"), RM("Imp"), RM("Spo"), RM("SpoImp")) :
                    // - Eva, Imp 
                    "FaCo" === Personnalite.value || "Fri" === Personnalite.value ?
                      (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeRe"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Ir"), RM("IrCon"), RM("Re"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
                      // - Con, Ir, Ver
                      "Enj" === Personnalite.value || "Modpro" === Personnalite.value || "Pro" === Personnalite.value || "Ent" === Personnalite.value || "SAmb" === Personnalite.value ?
                        (RM(""), RM("ApMeImp"), RM("ApMeRe"), RM("Equi"), RM("Eva"), RM("EvaImp"), RM("EvaRes"), RM("Imp"), RM("Re"), RM("Spo"), RM("SpoImp")) :
                        // - Con
                        "FP" === Personnalite.value || "Ho" === Personnalite.value ?
                          (RM(""), RM("ApMe"), RM("ApMeImp"), RM("ApMeIr"), RM("ApMeRe"), RM("ApMeVer"), RM("Equi"), RM("Eva"), RM("EvaImp"), RM("EvaIr"), RM("EvaRes"), RM("EvaVer"), RM("Imp"), RM("Ir"), RM("Re"), RM("Spo"), RM("SpoImp"), RM("SpoIr"), RM("SpoVer"), RM("Ver")) :
                          // - Imp 
                          "Per" === Personnalite.value ?
                            (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeRe"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Eva"), RM("EvaCon"), RM("EvaIr"), RM("EvaIrCon"), RM("EvaRes"), RM("EvaVer"), RM("EvaVerCon"), RM("Ir"), RM("IrCon"), RM("Re"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
                            // - Equi, ApMe
                            "Fo" === Personnalite.value ?
                              (RM(""), RM("Con"), RM("Eva"), RM("EvaCon"), RM("EvaImp"), RM("EvaIr"), RM("EvaIrCon"), RM("EvaRes"), RM("EvaVer"), RM("EvaVerCon"), RM("Imp"), RM("Ir"), RM("IrCon"), RM("Re"), RM("Spo"), RM("SpoCon"), RM("SpoImp"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
                              // - ApMe
                              "Lo" === Personnalite.value || "TreLoy" === Personnalite.value ?
                                (RM(""), RM("ApMeCon"), RM("ApMeImp"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeRe"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Equi"), RM("Eva"), RM("EvaCon"), RM("EvaImp"), RM("EvaIr"), RM("EvaIrCon"), RM("EvaRes"), RM("EvaVer"), RM("EvaVerCon"), RM("Imp"), RM("Ir"), RM("IrCon"), RM("Re"), RM("Spo"), RM("SpoCon"), RM("SpoImp"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
                                // Autres
                                "AsPro" === Personnalite.value ?
                                  (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeRe"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Eva"), RM("EvaCon"), RM("EvaIr"), RM("EvaIrCon"), RM("EvaRes"), RM("EvaVer"), RM("EvaVerCon"), RM("Ir"), RM("IrCon"), RM("Re"), RM("Spo"), RM("SpoCon"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :

                                  "Del" === Personnalite.value || "Det" === Personnalite.value || "Dev" === Personnalite.value || "Ef" === Personnalite.value || "Fac" === Personnalite.value || "FaDe" === Personnalite.value || "Le" === Personnalite.value || "Lene" === Personnalite.value || "Mot" === Personnalite.value || "Ob" === Personnalite.value || "Rea" === Personnalite.value || "Res" === Personnalite.value ?
                                    (RM(""), RM("ApMe"), RM("ApMeCon"), RM("ApMeImp"), RM("ApMeIr"), RM("ApMeIrCon"), RM("ApMeRe"), RM("ApMeVer"), RM("ApMeVerCon"), RM("Con"), RM("Equi"), RM("Eva"), RM("EvaCon"), RM("EvaImp"), RM("EvaIr"), RM("EvaIrCon"), RM("EvaRes"), RM("EvaVer"), RM("EvaVerCon"), RM("Imp"), RM("Ir"), RM("IrCon"), RM("Re"), RM("Spo"), RM("SpoCon"), RM("SpoImp"), RM("SpoIr"), RM("SpoIrCon"), RM("SpoVer"), RM("SpoVerCon"), RM("Ver"), RM("VerCon")) :
                                    // - Con, Irn Ver, Eva
                                    "LeCh" === Personnalite.value &&
                                    (RM(""), RM("ApMe"), RM("ApMeImp"), RM("ApMeRe"), RM("Equi"), RM("Imp"), RM("Re"), RM("Spo"), RM("SpoImp"))
}

function RM(b) {
  var a;
  "" === b && (a = new Option("Rapports aux médias"), Media.appendChild(a));
  "ApMe" === b && (a = new Option("Apprécié des médias", "ApMe"), Media.appendChild(a));
  "ApMeCon" === b && (a = new Option("Apprécié des médias, Conflictuel", "ApMeCon"), Media.appendChild(a));
  "ApMeImp" === b && (a = new Option("Apprécié des médias, Imperturbable", "ApMeImp"), Media.appendChild(a));
  "ApMeIr" === b && (a = new Option("Apprécié des médias, Irascible", "ApMeIr"), Media.appendChild(a));
  "ApMeIrCon" === b && (a = new Option("Apprécié des médias, Irascible, Conflictuel", "ApMeIrCon"), Media.appendChild(a));
  "ApMeRe" === b && (a = new Option("Apprécié des médias, Réservé", "ApMeRe"), Media.appendChild(a));
  "ApMeVer" === b && (a = new Option("Apprécié des médias, Versatile", "ApMeVer"), Media.appendChild(a));
  "ApMeVerCon" === b && (a = new Option("Apprécié des médias, Versatile, Conflictuel", "ApMeVerCon"), Media.appendChild(a));
  "Con" === b && (a = new Option("Conflictuel", "Con"), Media.appendChild(a));
  "Equi" === b && (a = new Option("Equilibré", "Equi"), Media.appendChild(a));
  "Eva" === b && (a = new Option("Evasif", "Eva"), Media.appendChild(a));
  "EvaCon" === b && (a = new Option("Evasif, Conflictuel", "EvaCon"), Media.appendChild(a));
  "EvaImp" === b && (a = new Option("Evasif, Imperturbable", "EvaImp"), Media.appendChild(a));
  "EvaIr" === b && (a = new Option("Evasif, Irascible", "EvaIr"), Media.appendChild(a));
  "EvaIrCon" === b && (a = new Option("Evasif, Irascible, Conflictuel", "EvaIrCon"), Media.appendChild(a));
  "EvaRes" === b && (a = new Option("Evasif, Réservé", "EvaRes"), Media.appendChild(a));
  "EvaVer" === b && (a = new Option("Evasif, Versatile", "EvaVer"), Media.appendChild(a));
  "EvaVerCon" === b && (a = new Option("Evasif, Versatile, Conflictuel", "EvaVerCon"), Media.appendChild(a));
  "Imp" === b && (a = new Option("Imperturbable", "Imp"), Media.appendChild(a));
  "Ir" === b && (a = new Option("Irascible", "Ir"), Media.appendChild(a));
  "IrCon" === b && (a = new Option("Irascible, Conflictuel", "IrCon"), Media.appendChild(a));
  "Re" === b && (a = new Option("Réservé", "Re"), Media.appendChild(a));
  "Spo" === b && (a = new Option("Spontané", "Spo"), Media.appendChild(a));
  "SpoCon" === b && (a = new Option("Spontané, Conflictuel", "SpoCon"), Media.appendChild(a));
  "SpoImp" === b && (a = new Option("Spontané, Imperturbable", "SpoImp"), Media.appendChild(a));
  "SpoIr" === b && (a = new Option("Spontané, Irascible", "SpoIr"), Media.appendChild(a));
  "SpoIrCon" === b && (a = new Option("Spontané, Irascible, Conflictuel", "SpoIrCon"), Media.appendChild(a));
  "SpoVer" === b && (a = new Option("Spontané, Versatile", "SpoVer"), Media.appendChild(a));
  "SpoVerCon" === b && (a = new Option("Spontané, Versatile, Conflictuel", "SpoVerCon"), Media.appendChild(a));
  "Ver" === b && (a = new Option("Versatile", "Ver"), Media.appendChild(a));
  "VerCon" === b && (a = new Option("Versatile, Conflictuel", "VerCon"), Media.appendChild(a));
}


function note() {
  rst();

  //Personnalité
  ("Amb" === Personnalite.value ?
    (minAmb.innerHTML = 16, maxAmb.innerHTML = 19, minFid.innerHTML = 7, maxFid.innerHTML = 9, (det.max = 17) && (det.value > 17 && (det.value = 17)),
      deter(2),
      cas(0), cas(1)
    ) :

    "AsAmb" === Personnalite.value ?
      (minAmb.innerHTML = 15, maxPro.innerHTML = 14, (det.max = 14) && (det.value > 14 && (det.value = 14)),
        deter(2), deter(3), deter(4), deter(5),
        cas(0), cas(2), cas(5)
      ) :

      "AsDe" === Personnalite.value ?
        (maxPro.innerHTML = 14, minFp.innerHTML = 5, (det.max = 17) && (det.value > 17 && (det.value = 17)), (det.min = 15) && (det.value < 15 && (det.value = 15)),
          cas(0), cas(2), cas(3), cas(4), cas(5)
        ) :

        "AsFP" === Personnalite.value ?
          (maxPro.innerHTML = 14, minFp.innerHTML = 15, maxFid.innerHTML = 14, maxAmb.innerHTML = 14, (det.max = 14) && (det.value > 14 && (det.value = 14)),
            deter(1), deter(2), deter(3), deter(4),
            cas(0), cas(5)
          ) :

          "AsLo" === Personnalite.value ?
            (minAmb.innerHTML = 6, maxPro.innerHTML = 14, minFid.innerHTML = 15, (det.max = 14) && (det.value > 14 && (det.value = 14)),
              deter(1), deter(2), deter(3), deter(4), deter(5),
              cas(0), cas(4), cas(5)
            ) :

            "AsPro" === Personnalite.value ?
              (minPro.innerHTML = 15, (det.max = 14) && (det.value > 14 && (det.value = 14)),
                deter(1), deter(3), deter(4), deter(5),
                cas(1), cas(2), cas(3), cas(4), cas(5)
              ) :

              "CiMo" === Personnalite.value ?
                (minAmb.innerHTML = 12, minPro.innerHTML = 15, minFp.innerHTML = 15, minFid.innerHTML = 14, minPre.innerHTML = 14, minTemp.innerHTML = 15, (det.min = 14) && (det.value < 14 && (det.value = 14))
                ) :

                "Dec" === Personnalite.value ?
                  (minPro.innerHTML = 2, maxPro.innerHTML = 4, minTemp.innerHTML = 5, (det.max = 9) && (det.value > 9 && (det.value = 9))
                  ) :

                  "Del" === Personnalite.value ?
                    (midFp.innerHTML = 1, (det.max = 17) && (det.value > 17 && (det.value = 17)), (det.min = 11) && (det.value < 11 && (det.value = 11)),
                      cas(0), cas(1), cas(2), cas(3)
                    ) :

                    "Det" === Personnalite.value ?
                      (minAmb.innerHTML = 6, minPro.innerHTML = 15, minFp.innerHTML = 5, maxPre.innerHTML = 16, (det.max = 17) && (det.value > 17 && (det.value = 17)), (det.min = 15) && (det.value < 15 && (det.value = 15)),
                        cas(1), cas(2), cas(3), cas(4), cas(5)
                      ) :

                      "Dev" === Personnalite.value || "TreLoy" === Personnalite.value ?
                        (minAmb.innerHTML = 6, maxAmb.innerHTML = 7, midFid.innerHTML = 20, (det.max = 17) && (det.value > 17 && (det.value = 17)), (det.min = 6) && (det.value < 6 && (det.value = 6)),
                          deter(2), deter(5),
                          cas(0), cas(1)
                        ) :

                        "Ef" === Personnalite.value ?
                          (minFp.innerHTML = 5, midPre.innerHTML = 20, (det.max = 17) && (det.value > 17 && (det.value = 17)), (det.min = 15) && (det.value < 15 && (det.value = 15)),
                            deter(1), deter(3), deter(4), deter(5),
                            cas(0), cas(1), cas(2), cas(3), cas(4)
                          ) :

                          "Enj" === Personnalite.value ?
                            (maxPro.innerHTML = 17, minFp.innerHTML = 15, minPre.innerHTML = 15, minTemp = 10, (det.max = 17) && (det.value > 17 && (det.value = 17)),
                              deter(1), deter(2), deter(4), deter(6),
                              cas(2), cas(3), cas(4)
                            ) :

                            "Ent" === Personnalite.value ?
                              (minPro.innerHTML = 11, maxPro.innerHTML = 17, maxFp.innerHTML = 14, minPre.innerHTML = 15, minTemp.innerHTML = 10, (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                deter(1), deter(4), deter(5), deter(6),
                                cas(2), cas(3), cas(4)
                              ) :

                              "Eq" === Personnalite.value ?
                                (maxAmb.innerHTML = 14, maxPro.innerHTML = 14, maxFp.innerHTML = 14, maxFid.innerHTML = 14, (det.max = 14) && (det.value > 14 && (det.value = 14)),
                                  deter(1), deter(2), deter(3), deter(5),
                                  cas(0), cas(3), cas(5)
                                ) :

                                "Fac" === Personnalite.value ?
                                  (maxAmb.innerHTML = 9, minPro.innerHTML = 5, maxFp.innerHTML = 17, (det.max = 1) && (det.value > 1 && (det.value = 1)),
                                    cas(0), cas(1), cas(3)
                                  ) :

                                  "FaDe" === Personnalite.value ?
                                    (maxAmb.innerHTML = 9, minPro.innerHTML = 5, maxFp.innerHTML = 17, (det.max = 5) && (det.value > 5 && (det.value = 5)), (det.min = 2) && (det.value < 2 && (det.value = 2)),
                                      cas(0), cas(1), cas(3)
                                    ) :

                                    "FaCo" === Personnalite.value ?
                                      (minPro.innerHTML = 5, maxFp.innerHTML = 17, minPre.innerHTML = 2, maxPre.innerHTML = 3, (det.max = 9) && (det.value > 9 && (det.value = 9)),
                                        deter(1),
                                        cas(1), cas(2), cas(3), cas(4), cas(0)
                                      ) :

                                      "FP" === Personnalite.value ?
                                        (minPro.innerHTML = 5, minFp.innerHTML = 18, maxFp.innerHTML = 19, (det.max = 9) && (det.value > 9 && (det.value = 9)),
                                          cas(0), cas(1), cas(2), cas(3)
                                        ) :

                                        "Fo" === Personnalite.value ?
                                          (maxPro.innerHTML = 10, maxTemp.innerHTML = 4
                                          ) :

                                          "Fri" === Personnalite.value ?
                                            (minPro.innerHTML = 5, maxFp.innerHTML = 17, midPre.innerHTML = 1, (det.max = 9) && (det.value > 9 && (det.value = 9)),
                                              deter(1),
                                              cas(0), cas(1), cas(2), cas(3), cas(4)
                                            ) :

                                            "Ho" === Personnalite.value ?
                                              (minPro.innerHTML = 5, midFp.innerHTML = 20, (det.max = 9) && (det.value > 9 && (det.value = 9)),
                                                cas(0), cas(1), cas(2), cas(3)
                                              ) :

                                              "In" === Personnalite.value ?
                                                (minTemp.innerHTML = 5, midPro.innerHTML = 1, (det.max = 9) && (det.value > 9 && (det.value = 9))
                                                ) :

                                                "Jo" === Personnalite.value ?
                                                  (maxPro.innerHTML = 10, maxFp.innerHTML = 14, minPre.innerHTML = 15, minTemp.innerHTML = 10, (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                    deter(1), deter(2), deter(4), deter(5), deter(6),
                                                    cas(2), cas(3), cas(4)
                                                  ) :

                                                  "Le" === Personnalite.value ?
                                                    (minPro.innerHTML = 1) :

                                                    "Lene" === Personnalite.value ?
                                                      (minPro.innerHTML = 1, (det.min = 20) && (det.value < 20 && (det.value = 20))) :

                                                      "LeCh" === Personnalite.value ?
                                                        (minFp.innerHTML = 18, minTemp.innerHTML = 18
                                                        ) :

                                                        "Lo" === Personnalite.value ?
                                                          (minAmb.innerHTML = 6, maxAmb.innerHTML = 7, minFid.innerHTML = 18, maxFid.innerHTML = 19, (det.min = 6) && (det.value < 6 && (det.value = 6)), (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                            deter(2), deter(5),
                                                            cas(0), cas(1)
                                                          ) :

                                                          "Me" === Personnalite.value ?
                                                            (minAmb.innerHTML = 16, maxFid.innerHTML = 3, (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                              deter(2),
                                                              cas(0), cas(1)
                                                            ) :

                                                            "Modpro" === Personnalite.value ?
                                                              (midPro.innerHTML = 20, minTemp.innerHTML = 10
                                                              ) :

                                                              "Mot" === Personnalite.value ?
                                                                (minAmb.innerHTML = 12, (det.min = 18) && (det.value < 18 && (det.value = 18))
                                                                ) :

                                                                "Ob" === Personnalite.value ?
                                                                  (maxAmb.innerHTML = 11, (det.min = 18) && (det.value < 18 && (det.value = 18))
                                                                  ) :

                                                                  "Per" === Personnalite.value ?
                                                                    (minAmb.innerHTML = 14, minPro.innerHTML = 14, maxTemp.innerHTML = 9, (det.min = 14) && (det.value < 14 && (det.value = 14))
                                                                    ) :

                                                                    "Pro" === Personnalite.value ?
                                                                      (minPro.innerHTML = 18, minTemp.innerHTML = 10, maxPro.innerHTML = 19
                                                                      ) :

                                                                      "Rea" === Personnalite.value ?
                                                                        (minFp.innerHTML = 2, maxFp.innerHTML = 4, (det.min = 11) && (det.value < 11 && (det.value = 11)), (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                                          deter(6),
                                                                          cas(0), cas(1), cas(2), cas(3)
                                                                        ) :

                                                                        "Res" === Personnalite.value ?
                                                                          (minFp.innerHTML = 5, minPre.innerHTML = 17, maxPre.innerHTML = 19, (det.min = 15) && (det.value < 15 && (det.value = 15)), (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                                            cas(0), cas(1), cas(2), cas(3), cas(4)
                                                                          ) :


                                                                          "SAmb" === Personnalite.value ?
                                                                            (maxAmb.innerHTML = 5, minTemp.innerHTML = 11, (det.max = 17) && (det.value > 17 && (det.value = 17)), minFid.innerHTML = 11,
                                                                              deter(2),
                                                                              cas(0), cas(1)
                                                                            ) :

                                                                            "TreAmb" === Personnalite.value ?
                                                                              (midAmb.innerHTML = 20, maxFid.innerHTML = 9, minFid.innerHTML = 7, (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                                                deter(2),
                                                                                cas(0), cas(1)
                                                                              ) :

                                                                              "TreLoy" === Personnalite.value ?
                                                                                (minAmb.innerHTML = 6, maxAmb.innerHTML = 7, midFid.innerHTML = 20, (det.min = 6) && (det.value < 6 && (det.value = 6)), (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                                                  deter(2), deter(5),
                                                                                  cas(0), cas(1)
                                                                                ) :

                                                                                "Vers" === Personnalite.value &&
                                                                                (minAmb.innerHTML = 16, minFid.innerHTML = 4, maxFid.innerHTML = 6, (det.max = 17) && (det.value > 17 && (det.value = 17)),
                                                                                  deter(2),
                                                                                  cas(0), cas(1)
                                                                                ));

  //Média
  "ApMe" === Media.value ?
    (minTemp.innerHTML < 7 && (minTemp.innerHTML = 7), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14),
      med(1), med(2), med(3), med(4)
    ) :

    "ApMeCon" === Media.value ?
      (midTemp.innerHTML = 7, maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7),
        med(1)
      ) :

      "ApMeImp" === Media.value ?
        (minTemp.innerHTML < 15 && (minTemp.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15)
        ) :

        "ApMeIr" === Media.value ?
          (maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), maxFid.innerHTML > 10 && (maxFid.innerHTML = 10), minFp.innerHTML < 8 && (minFp.innerHTML = 8), minPro.innerHTML < 11 && (minPro.innerHTML = 11),
            med(1)
          ) :

          "ApMeIrCon" === Media.value ?
            (maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7), minPro.innerHTML < 11 && (minPro.innerHTML = 11),
              med(1)
            ) :

            "ApMeRe" === Media.value ?
              (minPro.innerHTML < 15 && (minPro.innerHTML = 15), minTemp.innerHTML < 7 && (minTemp.innerHTML = 7), maxPol.innerHTML > 5 && (maxPol.innerHTML = 5), maxPre.innerHTML > 14 && (maxPre.innerHTML = 14),
                med(2), med(3)
              ) :

              "ApMeVer" === Media.value ?
                (minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minFp.innerHTML < 8 && (minFp.innerHTML = 8),
                  med(1)
                ) :

                "ApMeVerCon" === Media.value ?
                  (minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7),
                    med(1)
                  ) :

                  "Con" === Media.value ?
                    (midTemp.innerHTML = 7, maxFp.innerHTML > 7 && (maxFp.innerHTML = 7), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minFid.innerHTML < 11 && (minFid.innerHTML = 11), minPro.innerHTML < 13 && (minPro.innerHTML = 13),
                      med(1)
                    ) :

                    "Equi" === Media.value ?
                      (minTemp.innerHTML < 7 && (minTemp.innerHTML = 7), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minFid.innerHTML < 11 && (minFid.innerHTML = 11),
                        med(1), med(2), med(3), med(4)
                      ) :

                      "Eva" === Media.value ?
                        (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPol.innerHTML < 6 && (minPol.innerHTML = 6), minPre.innerHTML < 15 && (minPre.innerHTML = 15), minTemp.innerHTML < 7 && (minTemp.innerHTML = 7), maxTemp.innerHTML > 15 && (maxTemp.innerHTML = 15),
                          med(2), med(3)
                        ) :

                        "EvaCon" === Media.value ?
                          (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15), midTemp.innerHTML = 7, maxFp.innerHTML > 7 && (maxFp.innerHTML = 7)
                          ) :

                          "EvaImp" === Media.value ?
                            (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15), midTemp.innerHTML = 15
                            ) :

                            "EvaIr" === Media.value ?
                              (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15), maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), minFp.innerHTML < 8 && (minFp.innerHTML = 8)
                              ) :

                              "EvaIrCon" === Media.value ?
                                (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15), maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7)
                                ) :

                                "EvaRes" === Media.value ?
                                  (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 5 && (maxPol.innerHTML = 5), minPre.innerHTML < 15 && (minPre.innerHTML = 15), maxTemp.innerHTML > 15 && (maxTemp.innerHTML = 15), minTemp.innerHTML < 7 && (minTemp.innerHTML = 7),
                                    med(2), med(3)
                                  ) :
                                  "EvaVer" === Media.value ?
                                    (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15), maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), minFp.innerHTML < 8 && (minFp.innerHTML = 8)
                                    ) :
                                    "EvaVerCon" === Media.value ?
                                      (minPro.innerHTML < 15 && (minPro.innerHTML = 15), maxPol.innerHTML > 14 && (maxPol.innerHTML = 14), minPre.innerHTML < 15 && (minPre.innerHTML = 15), maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7)
                                      ) :

                                      "Imp" === Media.value ?
                                        (minPre.innerHTML < 15 && (minPre.innerHTML = 15), minTemp.innerHTML < 15 && (minTemp.innerHTML = 15), minFid.innerHTML < 11 && (minFid.innerHTML = 11)
                                        ) :

                                        "Ir" === Media.value ?
                                          (maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), minFid.innerHTML < 11 && (minFid.innerHTML = 11), minPro.innerHTML < 11 && (minPro.innerHTML = 11),
                                            med(1)
                                          ) :

                                          "IrCon" === Media.value ?
                                            (maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7), minFid.innerHTML < 11 && (minFid.innerHTML = 11), minPro.innerHTML < 13 && (minPro.innerHTML = 13),
                                              med(1)
                                            ) :

                                            "Re" === Media.value ?
                                              (minPro.innerHTML < 15 && (minPro.innerHTML = 15), minTemp.innerHTML < 7 && (minTemp.innerHTML = 7), maxPol.innerHTML > 5 && (maxPol.innerHTML = 5), minFid.innerHTML < 11 && (minFid.innerHTML = 11),
                                                med(1), med(2)
                                              ) :

                                              "Spo" === Media.value ?
                                                (minPol.innerHTML < 15 && (minPol.innerHTML = 15), minTemp.innerHTML < 7 && (minTemp.innerHTML = 7),
                                                  med(2), med(3)
                                                ) :

                                                "SpoCon" === Media.value ?
                                                  (minPol.innerHTML < 15 && (minPol.innerHTML = 15), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7), midTemp.innerHTML = 7,
                                                    med(2), med(3)
                                                  ) :

                                                  "SpoImp" === Media.value ?
                                                    (minPol.innerHTML < 15 && (minPol.innerHTML = 15), minPre.innerHTML < 15 && (minPre.innerHTML = 15), minTemp.innerHTML < 15 && (minTemp.innerHTML = 15)
                                                    ) :

                                                    "SpoIr" === Media.value ?
                                                      (minPol.innerHTML < 15 && (minPol.innerHTML = 15), maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), minFp.innerHTML < 8 && (minFp.innerHTML = 8), minPro.innerHTML < 11 && (minPro.innerHTML = 11)
                                                      ) :

                                                      "SpoIrCon" === Media.value ?
                                                        (minPol.innerHTML < 15 && (minPol.innerHTML = 15), maxTemp.innerHTML > 2 && (maxTemp.innerHTML = 2), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7), minPro.innerHTML < 11 && (minPro.innerHTML = 11)
                                                        ) :

                                                        "SpoVer" === Media.value ?
                                                          (minPol.innerHTML < 15 && (minPol.innerHTML = 15), maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), minFp.innerHTML < 8 && (minFp.innerHTML = 8)
                                                          ) :

                                                          "SpoVerCon" === Media.value ?
                                                            (minPol.innerHTML < 15 && (minPol.innerHTML = 15), maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7)
                                                            ) :

                                                            "Ver" === Media.value ?
                                                              (maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), minFp.innerHTML < 8 && (minFp.innerHTML = 8), maxPol.innerHTML > 15 && (maxPol.innerHTML = 15), minFid.innerHTML < 11 && (minFid.innerHTML = 11),
                                                                med(1)
                                                              ) :

                                                              "VerCon" === Media.value &&
                                                              (maxTemp.innerHTML > 6 && (maxTemp.innerHTML = 6), minTemp.innerHTML < 3 && (minTemp.innerHTML = 3), maxFp.innerHTML > 7 && (maxFp.innerHTML = 7), maxPol.innerHTML > 15 && (maxPol.innerHTML = 15), minFid.innerHTML < 11 && (minFid.innerHTML = 11), minPro.innerHTML < 13 && (minPro.innerHTML = 13),
                                                                med(1)
                                                              );

}

function ajustement() {

  ("Amb" === Personnalite.value ?
    (
      cas(0), cas(1)
    ) :

    "Me" === Personnalite.value ?
      (
        cas(0), cas(1)
      ) :
      "Vers" === Personnalite.value ?
        (
          cas(0), cas(1)
        ) :

        "AsAmb" === Personnalite.value ?
          (
            cas(0), cas(2), cas(5)
          ) :

          "AsDe" === Personnalite.value ?
            (
              cas(0), cas(2), cas(3), cas(4), cas(5)
            ) :

            "AsFP" === Personnalite.value ?
              (
                cas(0), cas(5)
              ) :

              "AsLo" === Personnalite.value ?
                (
                  cas(0), cas(4), cas(5)
                ) :

                "AsPro" === Personnalite.value ?
                  (
                    cas(1), cas(2), cas(3), cas(4), cas(5)
                  ) :

                  "Del" === Personnalite.value ?
                    (
                      cas(0), cas(1), cas(2), cas(3)
                    ) :

                    "Det" === Personnalite.value ?
                      (
                        cas(1), cas(2), cas(3), cas(4), cas(5)
                      ) :

                      "Dev" === Personnalite.value || "TreLoy" === Personnalite.value ?
                        (
                          cas(0), cas(1)
                        ) :

                        "Ef" === Personnalite.value ?
                          (
                            cas(0), cas(1), cas(2), cas(3), cas(4)
                          ) :

                          "Enj" === Personnalite.value ?
                            (
                              cas(2), cas(3), cas(4)
                            ) :

                            "Ent" === Personnalite.value ?
                              (
                                cas(2), cas(3), cas(4)
                              ) :

                              "Eq" === Personnalite.value ?
                                (
                                  cas(0), cas(3), cas(5)
                                ) :

                                "Fac" === Personnalite.value ?
                                  (
                                    cas(0), cas(1), cas(3)
                                  ) :

                                  "FaDe" === Personnalite.value ?
                                    (
                                      cas(0), cas(1), cas(3)
                                    ) :

                                    "FaCo" === Personnalite.value ?
                                      (
                                        cas(1), cas(2), cas(3), cas(4), cas(0)
                                      ) :

                                      "FP" === Personnalite.value ?
                                        (
                                          cas(0), cas(1), cas(2), cas(3)
                                        ) :


                                        "Fri" === Personnalite.value ?
                                          (
                                            cas(0), cas(1), cas(2), cas(3), cas(4)
                                          ) :

                                          "Ho" === Personnalite.value ?
                                            (
                                              cas(0), cas(1), cas(2), cas(3)
                                            ) :


                                            "Jo" === Personnalite.value ?
                                              (
                                                cas(2), cas(3), cas(4)
                                              ) :

                                              "Lo" === Personnalite.value ?
                                                (
                                                  cas(0), cas(1)
                                                ) :

                                                "Rea" === Personnalite.value ?
                                                  (
                                                    cas(0), cas(1), cas(2), cas(3)
                                                  ) :

                                                  "Res" === Personnalite.value ?
                                                    (
                                                      cas(0), cas(1), cas(2), cas(3), cas(4)
                                                    ) :


                                                    "SAmb" === Personnalite.value ?
                                                      (
                                                        cas(0), cas(1)
                                                      ) :

                                                      "TreAmb" === Personnalite.value ?
                                                        (
                                                          cas(0), cas(1)
                                                        ) :

                                                        "TreLoy" === Personnalite.value ?
                                                          (
                                                            cas(0), cas(1)
                                                          ) :

                                                          "ApMe" === Media.value ?
                                                            (
                                                              med(1), med(2), med(3), med(4), med(5)
                                                            ) :

                                                            "ApMeCon" === Media.value || "ApMeIr" === Media.value || "ApMeIrCon" === Media.value || "ApMeVer" === Media.value || "ApMeVerCon" === Media.value ?
                                                              (
                                                                med(1), med(5)
                                                              ) :

                                                              "ApMeImp" === Media.value ?
                                                                (med(5)
                                                                ) :

                                                                "Con" === Media.value || "Ir" === Media.value || "IrCon" === Media.value || "Ver" === Media.value || "VerCon" === Media.value ?
                                                                  (
                                                                    med(1)
                                                                  ) :

                                                                  "ApMeRe" === Media.value ?
                                                                    (
                                                                      med(2), med(3), med(5)
                                                                    ) :



                                                                    "Equi" === Media.value ?
                                                                      (
                                                                        med(1), med(2), med(3), med(4)
                                                                      ) :

                                                                      "Eva" === Media.value ?
                                                                        (
                                                                          med(2), med(3)
                                                                        ) :


                                                                        "EvaRes" === Media.value ?
                                                                          (
                                                                            med(2), med(3)
                                                                          ) :


                                                                          "Re" === Media.value ?
                                                                            (
                                                                              med(1), med(2)
                                                                            ) :

                                                                            "Spo" === Media.value ?
                                                                              (
                                                                                med(2), med(3)
                                                                              ) :

                                                                              "SpoCon" === Media.value &&
                                                                              (
                                                                                med(2), med(3)
                                                                              ));


  ambition();
  AssezAmb();
  mercenaire();
  tresambitieux();
  versatile()
  realist();
  indololent();
  forteperso();



  uniq();
  color();
}


function ambition() {
  "Amb" === Personnalite.value &&
    ("Eva" === Media.value ?
      (det.value >= 14 &&
        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
      ) :
      "ApMeRe" === Media.value ?
        (det.value >= 14 &&
          (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
        ) :
        "ApMeIr" === Media.value ?
          (det.value >= 14 &&
            (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
          ) :
          "ApMeIrCon" === Media.value ?
            (det.value >= 14 &&
              (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
            ) :
            "SpoIr" === Media.value ?
              (det.value >= 14 &&
                (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
              ) :
              "SpoIrCon" === Media.value ?
                (det.value >= 14 &&
                  (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                ) :
                "ApMeVerCon" === Media.value || "ApMeVer" === Media.value || "ApMeCon" === Media.value || "SpoVerCon" === Media.value || "SpoVer" === Media.value || "SpoCon" === Media.value ?
                  (det.value >= 14 &&
                    (maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                  ) :

                  "EvaImp" === Media.value ?
                    (maxPro.innerHTML > 17 && (maxPro.innerHTML = 17)
                    ) :
                    "EvaRes" === Media.value ?
                      (det.value >= 14 &&
                        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
                      ) :
                      "EvaIr" === Media.value ?
                        (det.value > 13 && (det.value = 13),
                          det.max = 13
                        ) :
                        "EvaIrCon" === Media.value ?
                          (det.value > 13 && (det.value = 13),
                            det.max = 13
                          ) :
                          "EvaVer" === Media.value ?
                            (det.value > 13 && (det.value = 13),
                              det.max = 13
                            ) :
                            "EvaVerCon" === Media.value ?
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              ) :
                              "EvaCon" === Media.value &&
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              )

    );
}
function mercenaire() {
  "Me" === Personnalite.value &&
    ("Eva" === Media.value ?
      (det.value >= 14 &&
        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
      ) :
      "ApMeRe" === Media.value ?
        (det.value >= 14 &&
          (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
        ) :
        "ApMeIr" === Media.value ?
          (det.value >= 14 &&
            (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
          ) :
          "ApMeIrCon" === Media.value ?
            (det.value >= 14 &&
              (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
            ) :
            "SpoIr" === Media.value ?
              (det.value >= 14 &&
                (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
              ) :
              "SpoIrCon" === Media.value ?
                (det.value >= 14 &&
                  (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                ) :
                "ApMeVerCon" === Media.value || "ApMeVer" === Media.value || "ApMeCon" === Media.value || "SpoVerCon" === Media.value || "SpoVer" === Media.value || "SpoCon" === Media.value ?
                  (det.value >= 14 &&
                    (maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                  ) :

                  "EvaImp" === Media.value ?
                    (maxPro.innerHTML > 17 && (maxPro.innerHTML = 17)
                    ) :
                    "EvaRes" === Media.value ?
                      (det.value >= 14 &&
                        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
                      ) :
                      "EvaIr" === Media.value ?
                        (det.value > 13 && (det.value = 13),
                          det.max = 13
                        ) :
                        "EvaIrCon" === Media.value ?
                          (det.value > 13 && (det.value = 13),
                            det.max = 13
                          ) :
                          "EvaVer" === Media.value ?
                            (det.value > 13 && (det.value = 13),
                              det.max = 13
                            ) :
                            "EvaVerCon" === Media.value ?
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              ) :
                              "EvaCon" === Media.value &&
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              )
    );

}

function tresambitieux() {
  "TreAmb" === Personnalite.value &&
    ("Eva" === Media.value ?
      (det.value >= 14 &&
        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
      ) :
      "ApMeRe" === Media.value ?
        (det.value >= 14 &&
          (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
        ) :
        "ApMeIr" === Media.value ?
          (det.value >= 14 &&
            (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
          ) :
          "ApMeIrCon" === Media.value ?
            (det.value >= 14 &&
              (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
            ) :
            "SpoIr" === Media.value ?
              (det.value >= 14 &&
                (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
              ) :
              "SpoIrCon" === Media.value ?
                (det.value >= 14 &&
                  (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                ) :
                "ApMeVerCon" === Media.value || "ApMeVer" === Media.value || "ApMeCon" === Media.value || "SpoVerCon" === Media.value || "SpoVer" === Media.value || "SpoCon" === Media.value ?
                  (det.value >= 14 &&
                    (maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                  ) :

                  "EvaImp" === Media.value ?
                    (maxPro.innerHTML > 17 && (maxPro.innerHTML = 17)
                    ) :
                    "EvaRes" === Media.value ?
                      (det.value >= 14 &&
                        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
                      ) :
                      "EvaIr" === Media.value ?
                        (det.value > 13 && (det.value = 13),
                          det.max = 13
                        ) :
                        "EvaIrCon" === Media.value ?
                          (det.value > 13 && (det.value = 13),
                            det.max = 13
                          ) :
                          "EvaVer" === Media.value ?
                            (det.value > 13 && (det.value = 13),
                              det.max = 13
                            ) :
                            "EvaVerCon" === Media.value ?
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              ) :
                              "EvaCon" === Media.value &&
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              )

    );
}


function versatile() {
  "Vers" === Personnalite.value &&
    ("Eva" === Media.value ?
      (det.value >= 14 &&
        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
      ) :
      "ApMeRe" === Media.value ?
        (det.value >= 14 &&
          (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
        ) :
        "ApMeIr" === Media.value ?
          (det.value >= 14 &&
            (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
          ) :
          "ApMeIrCon" === Media.value ?
            (det.value >= 14 &&
              (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
            ) :
            "SpoIr" === Media.value ?
              (det.value >= 14 &&
                (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
              ) :
              "SpoIrCon" === Media.value ?
                (det.value >= 14 &&
                  (minPro.innerHTML < 11 && (minPro.innerHTML = 11), maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                ) :
                "ApMeVerCon" === Media.value || "ApMeVer" === Media.value || "ApMeCon" === Media.value || "SpoVerCon" === Media.value || "SpoVer" === Media.value || "SpoCon" === Media.value ?
                  (det.value >= 14 &&
                    (maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
                  ) :

                  "EvaImp" === Media.value ?
                    (maxPro.innerHTML > 17 && (maxPro.innerHTML = 17)
                    ) :
                    "EvaRes" === Media.value ?
                      (det.value >= 14 &&
                        (minTemp.innerHTML < 10 && (minTemp.innerHTML = 10), maxPro.innerHTML > 17 && (maxPro.innerHTML = 17))
                      ) :
                      "EvaIr" === Media.value ?
                        (det.value > 13 && (det.value = 13),
                          det.max = 13
                        ) :
                        "EvaIrCon" === Media.value ?
                          (det.value > 13 && (det.value = 13),
                            det.max = 13
                          ) :
                          "EvaVer" === Media.value ?
                            (det.value > 13 && (det.value = 13),
                              det.max = 13
                            ) :
                            "EvaVerCon" === Media.value ?
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              ) :
                              "EvaCon" === Media.value &&
                              (det.value > 13 && (det.value = 13),
                                det.max = 13
                              )


    );
}


function realist() {
  "Rea" === Personnalite.value &&
    ("Imp" === Media.value ?
      (minPro.innerHTML < 13 && (minPro.innerHTML = 13)) :
      "Ir" === Media.value ?
        (minPro.innerHTML < 13 && (minPro.innerHTML = 13)) :
        "Vers" === Media.value ?
          (minPro.innerHTML < 13 && (minPro.innerHTML = 13)) :
          "Eq" === Media.value &&
          (minPro.innerHTML < 13 && (minPro.innerHTML = 13))
    );
  "Del" === Personnalite.value &&
    ("Imp" === Media.value ?
      (minPro.innerHTML < 13 && (minPro.innerHTML = 13)) :
      "Ir" === Media.value ?
        (minPro.innerHTML < 13 && (minPro.innerHTML = 13)) :
        "Vers" === Media.value ?
          (minPro.innerHTML < 13 && (minPro.innerHTML = 13)) :
          "Eq" === Media.value &&
          (minPro.innerHTML < 13 && (minPro.innerHTML = 13))
    );
}


function AssezAmb() {
  "AsAmb" === Personnalite.value &&
    ("Con" === Media.value || "SpoIrCon" === Media.value || "SpoVerCon" === Media.value || "SpoCon" === Media.value || "IrCon" === Media.value || "VerCon" === Media.value ?
      (det.value >= 14 &&
        (midPro.innerHTML = 13)
      ) :
      "ApMeVer" === Media.value || "ApMeIr" === Media.value || "Ir" === Media.value || "Ver" === Media.value || "SpoIr" === Media.value || "SpoVer" === Media.value ?
        (det.value >= 14 &&
          (maxPro.innerHTML > 13 && (maxPro.innerHTML = 13))
        ) :
        "ApMeVerCon" === Media.value || "ApMeIrCon" === Media.value || "ApMeCon" === Media.value &&
        (det.value >= 14 &&
          (maxPro.innerHTML > 12 && (maxPro.innerHTML = 12))
        )
    )
}



function indololent() {
  "In" === Personnalite.value &&
    ("Imp" === Media.value ?
      (minFp.innerHTML < 12 && (minFp.innerHTML = 12)) :
      "Ir" === Media.value ?
        (minFp.innerHTML < 12 && (minFp.innerHTML = 12)) :
        "Vers" === Media.value ?
          (minFp.innerHTML < 12 && (minFp.innerHTML = 12)) :
          "Eq" === Media.value &&
          (minFp.innerHTML < 12 && (minFp.innerHTML = 12))
    );
  "Dec" === Personnalite.value &&
    ("Imp" === Media.value ?
      (minFp.innerHTML < 12 && (minFp.innerHTML = 12)) :
      "Ir" === Media.value ?
        (minFp.innerHTML < 12 && (minFp.innerHTML = 12)) :
        "Vers" === Media.value ?
          (minFp.innerHTML < 12 && (minFp.innerHTML = 12)) :
          "Eq" === Media.value &&
          (minFp.innerHTML < 12 && (minFp.innerHTML = 12))
    );
}

function forteperso() {
  "Fo" === Personnalite.value && (minPro.innerHTML = 1)
  rstColor();
}





function deter(a) {
  1 === a && (det.value <= 5 && minAmb.innerHTML < 10 && (minAmb.innerHTML = 10));
  2 === a && (det.value <= 9 && minPro.innerHTML < 5 && (minPro.innerHTML = 5));
  3 === a && (det.value <= 9 && minPre.innerHTML < 4 && (minPre.innerHTML = 4));
  4 === a && (det.value <= 9 && maxFp.innerHTML > 17 && (maxFp.innerHTML = 17));
  5 === a && (det.value >= 11 && minFp.innerHTML < 5 && (minFp.innerHTML = 5));
  6 === a && (det.value >= 15 && (minPre.innerHTML = 15) && (maxPre.innerHTML = 16));
}

function cas(a) {
  0 === a && (maxTemp.innerHTML < 5 && (minPro.innerHTML < 11 && (minPro.innerHTML = 11)),
    maxPro.innerHTML < 11 && (minTemp.innerHTML < 5 && (minTemp.innerHTML = 5)));
  1 === a && (minPro.innerHTML > 17 && (maxTemp.innerHTML > 9 && (maxTemp.innerHTML = 9)),
    minTemp.innerHTML > 9 && (maxPro.innerHTML > 17 && (maxPro.innerHTML = 17)));
  2 === a && (minAmb.innerHTML > 15 && (minFid.innerHTML < 10 && (minFid.innerHTML = 10)),
    maxFid.innerHTML < 10 && (maxAmb.innerHTML > 15 && (maxAmb.innerHTML = 15)));
  3 === a && (maxAmb.innerHTML < 6 && (maxFid.innerHTML > 10 && (maxFid.innerHTML = 10)),
    minFid.innerHTML > 10 && (minAmb.innerHTML < 6 && (minAmb.innerHTML = 6)));
  4 === a && (maxAmb.innerHTML < 8 && (maxFid.innerHTML > 17 && (maxFid.innerHTML = 17)),
    minFid.innerHTML > 17 && (minAmb.innerHTML < 8 && (minAmb.innerHTML = 8)));
  5 === a && (minTemp.innerHTML > 9 && (maxPre.innerHTML > 14 && (maxPre.innerHTML = 14)),
    minPre.innerHTML > 14 && (maxTemp.innerHTML > 9 && (maxTemp.innerHTML = 9)));
}

function med(a) {
  1 === a && (minPre.innerHTML > 14 && (maxPro.innerHTML > 14 && (maxPro.innerHTML = 14)),
    minPro.innerHTML > 14 && (maxPre.innerHTML > 14 && (maxPre.innerHTML = 14)));
  2 === a && (maxTemp.innerHTML < 8 && (minFp.innerHTML < 8 && (minFp.innerHTML = 8)),
    maxFp.innerHTML < 8 && (minTemp.innerHTML < 8 && (minTemp.innerHTML = 8)));
  3 === a && (minTemp.innerHTML > 14 && (maxPre.innerHTML > 14 && (maxPre.innerHTML = 14)),
    minPre.innerHTML > 14 && (maxTemp.innerHTML > 14 && (maxTemp.innerHTML = 14)));
  4 === a && (minPol.innerHTML > 14 && (maxPro.innerHTML > 14 && (maxPro.innerHTML = 14)), maxPol.innerHTML < 6 && (maxPro.innerHTML > 14 && (maxPro.innerHTML = 14)),
    minPro.innerHTML > 14 && ((minPol.innerHTML < 6 && (minPol.innerHTML = 6)) && (maxPol.innerHTML > 14 && (maxPol.innerHTML = 14))));
  5 === a && (minFid.innerHTML > 10 ?
    (maxFp.innerHTML > 11 && (maxFp.innerHTML = 11) && (maxPro.innerHTML > 12 && (maxPro.innerHTML = 12))) :
    (minFp.innerHTML > 11 &&
      (minPro.innerHTML > 12 &&
        (maxFid.innerHTML > 10 && (maxFid.innerHTML = 10))))
  )
}


function rst() {
  minPro.innerHTML = 1; midPro.innerHTML = "-"; maxPro.innerHTML = 20;
  minPre.innerHTML = 1; midPre.innerHTML = "-"; maxPre.innerHTML = 20;
  minTemp.innerHTML = 1; midTemp.innerHTML = "-"; maxTemp.innerHTML = 20;
  minAmb.innerHTML = 1; midAmb.innerHTML = "-"; maxAmb.innerHTML = 20;
  minFid.innerHTML = 1; midFid.innerHTML = "-"; maxFid.innerHTML = 20;
  minFp.innerHTML = 1; midFp.innerHTML = "-"; maxFp.innerHTML = 20;
  minPol.innerHTML = 1; midPol.innerHTML = "-"; maxPol.innerHTML = 20;
  rstColor();
  rstdeter();
}


function rstColor() {
  var lstID = document.getElementsByTagName("td");
  for (i = 0; i < lstID.length; i++)
    if (lstID[i].id.substring(0, 2) == "mi")
      lstID[i].style.color = '#ffffff'
  var lstID = document.getElementsByTagName("td");
  for (i = 0; i < lstID.length; i++)
    if (lstID[i].id.substring(0, 3) == "max")
      lstID[i].style.color = '#ffffff'
  rstStyle();
}



function rstStyle() {
  var lstID = document.getElementsByTagName("td");
  for (i = 0; i < lstID.length; i++)
    if (lstID[i].id.substring(0, 3) == "mid") {
      val = lstID[i].id.substring(3);
      var mini = "min" + val;
      var maxi = "max" + val;
      var mid = "mid" + val;
      (document.getElementById(mid).colSpan = "1", document.getElementById(mini).style.display = "", document.getElementById(maxi).style.display = "")
    }
}

function adjust() {
  var lstID = document.getElementsByTagName("td");
  for (i = 0; i < lstID.length; i++) {
    if (lstID[i].id.substring(0, 1) == "m") {
      val = lstID[i].id.substring(3);
      var mini = "min" + val;
      var maxi = "max" + val;
      var mid = "mid" + val;
      if (document.getElementById(mini).innerHTML != "") {
        if (document.getElementById(mini).innerHTML == document.getElementById(maxi).innerHTML) {
          document.getElementById(mid).innerHTML = document.getElementById(mini).innerHTML;
        }
      }
    }
  }
}

function uniq() {
  adjust();
  var lstID = document.getElementsByTagName("td");
  for (i = 0; i < lstID.length; i++) {
    val = lstID[i].id.substring(3);
    var mini = "min" + val;
    var maxi = "max" + val;
    var mid = "mid" + val;
    if (lstID[i].id.substring(0, 3) == "mid")
      if (lstID[i].innerHTML != "-")
        document.getElementById(mini).innerHTML = "", document.getElementById(maxi).innerHTML = ""
  }
}


function color() {

  var lstID = document.getElementsByTagName("td");
  for (i = 0; i < lstID.length; i++) {
    if (lstID[i].id.substring(0, 2) == "mi") {
      if (lstID[i].innerHTML >= 10) {
        val = lstID[i].id.substring(3);
        if (val != "Pol") {
          var mini = "min" + val;
          var maxi = "max" + val;
          var mid = "mid" + val;
          (document.getElementById(mini).style.color = '#26d274', document.getElementById(mid).style.color = '#26d274', document.getElementById(maxi).style.color = '#26d274')
        }
        if (val === "Pol") {
          var mini = "min" + val;
          var maxi = "max" + val;
          var mid = "mid" + val;
          (document.getElementById(mini).style.color = '#b62828', document.getElementById(mid).style.color = '#b62828', document.getElementById(maxi).style.color = '#b62828')
        }
      }
    }
    if (lstID[i].id.substring(0, 3) == "mid") {
      if (lstID[i].innerHTML < 10) {
        val = lstID[i].id.substring(3);
        if (val != "Pol") {
          var mini = "min" + val;
          var maxi = "max" + val;
          var mid = "mid" + val;
          (document.getElementById(mini).style.color = '#b62828', document.getElementById(mid).style.color = '#b62828', document.getElementById(maxi).style.color = '#b62828')
        }
        if (val === "Pol") {
          var mini = "min" + val;
          var maxi = "max" + val;
          var mid = "mid" + val;
          (document.getElementById(mini).style.color = '#26d274', document.getElementById(mid).style.color = '#26d274', document.getElementById(maxi).style.color = '#26d274')
        }
      }
    }

    if (lstID[i].id.substring(0, 3) == "max") {
      if (lstID[i].innerHTML < 10 && lstID[i].innerHTML != "") {
        val = lstID[i].id.substring(3);
        if (val != "Pol") {
          var mini = "min" + val;
          var maxi = "max" + val;
          var mid = "mid" + val;
          (document.getElementById(mini).style.color = '#b62828', document.getElementById(mid).style.color = '#b62828', document.getElementById(maxi).style.color = '#b62828')
        }
        if (val === "Pol") {
          var mini = "min" + val;
          var maxi = "max" + val;
          var mid = "mid" + val;
          (document.getElementById(mini).style.color = '#26d274', document.getElementById(mid).style.color = '#26d274', document.getElementById(maxi).style.color = '#26d274')
        }
      }
    }
  }
}



function afficher(a) {
  document.getElementById("Professionnalisme").style.display = "none";
  document.getElementById("Pression").style.display = "none";
  document.getElementById("Tempérament").style.display = "none";
  document.getElementById("Ambition").style.display = "none";
  document.getElementById("Fidélité").style.display = "none";
  document.getElementById("Fair-play").style.display = "none";
  document.getElementById("Polémique").style.display = "none";
  document.getElementById(a).style.display = "block";
}

function rststar() {
  Garret.src = zero;
  Gprise.src = zero;
  Deftec.src = zero;
  Deftac.src = zero;
  Attac.src = zero;
  Attec.src = zero;
  Postac.src = zero;
  Postec.src = zero;
  Puis.src = zero;
  Viva.src = zero;
}


function evalstaf() {
  rststar();
  DDM = ((new Number(CaM.value)) + (new Number(Det.value)) + (new Number(Ndd.value))) * 2;
  AL = ((new Number(AGB.value)) * 9) + DDM;
  PDB = ((new Number(PGB.value)) * 6) + ((new Number(RGB.value)) * 3) + DDM;
  DTa = ((new Number(Def.value)) * 6) + ((new Number(Tac.value)) * 3) + DDM;
  DTe = ((new Number(Def.value)) * 6) + ((new Number(Tec.value)) * 3) + DDM;
  JoTa = ((new Number(Off.value)) * 6) + ((new Number(Tac.value)) * 3) + DDM;
  JoTe = ((new Number(Off.value)) * 6) + ((new Number(Tec.value)) * 3) + DDM;
  PTa = ((new Number(Men.value)) * 6) + ((new Number(Tac.value)) * 3) + DDM;
  PTe = ((new Number(Men.value)) * 6) + ((new Number(Tec.value)) * 3) + DDM;
  Phy = ((new Number(CP.value)) * 9) + DDM;

  (AL >= 270 && (Garret.src = cinq) || AL >= 240 && (Garret.src = quatredemi) || AL >= 210 && (Garret.src = quatre) || AL >= 180 && (Garret.src = troisdemi) || AL >= 150 && (Garret.src = trois) || AL >= 120 && (Garret.src = deuxdemi) || AL >= 90 && (Garret.src = deux) || AL >= 60 && (Garret.src = undemi) || AL >= 30 && (Garret.src = un) || AL < 30 && (Garret.src = demi));
  (PDB >= 270 && (Gprise.src = cinq) || PDB >= 240 && (Gprise.src = quatredemi) || PDB >= 210 && (Gprise.src = quatre) || PDB >= 180 && (Gprise.src = troisdemi) || PDB >= 150 && (Gprise.src = trois) || PDB >= 120 && (Gprise.src = deuxdemi) || PDB >= 90 && (Gprise.src = deux) || PDB >= 60 && (Gprise.src = undemi) || PDB >= 30 && (Gprise.src = un) || PDB < 30 && (Gprise.src = demi));
  (DTa >= 270 && (Deftac.src = cinq) || DTa >= 240 && (Deftac.src = quatredemi) || DTa >= 210 && (Deftac.src = quatre) || DTa >= 180 && (Deftac.src = troisdemi) || DTa >= 150 && (Deftac.src = trois) || DTa >= 120 && (Deftac.src = deuxdemi) || DTa >= 90 && (Deftac.src = deux) || DTa >= 60 && (Deftac.src = undemi) || DTa >= 30 && (Deftac.src = un) || DTa < 30 && (Deftac.src = demi));
  (DTe >= 270 && (Deftec.src = cinq) || DTe >= 240 && (Deftec.src = quatredemi) || DTe >= 210 && (Deftec.src = quatre) || DTe >= 180 && (Deftec.src = troisdemi) || DTe >= 150 && (Deftec.src = trois) || DTe >= 120 && (Deftec.src = deuxdemi) || DTe >= 90 && (Deftec.src = deux) || DTe >= 60 && (Deftec.src = undemi) || DTe >= 30 && (Deftec.src = un) || DTe < 30 && (Deftec.src = demi));
  (JoTa >= 270 && (Attac.src = cinq) || JoTa >= 240 && (Attac.src = quatredemi) || JoTa >= 210 && (Attac.src = quatre) || JoTa >= 180 && (Attac.src = troisdemi) || JoTa >= 150 && (Attac.src = trois) || JoTa >= 120 && (Attac.src = deuxdemi) || JoTa >= 90 && (Attac.src = deux) || JoTa >= 60 && (Attac.src = undemi) || JoTa >= 30 && (Attac.src = un) || JoTa < 30 && (Attac.src = demi));
  (JoTe >= 270 && (Attec.src = cinq) || JoTe >= 240 && (Attec.src = quatredemi) || JoTe >= 210 && (Attec.src = quatre) || JoTe >= 180 && (Attec.src = troisdemi) || JoTe >= 150 && (Attec.src = trois) || JoTe >= 120 && (Attec.src = deuxdemi) || JoTe >= 90 && (Attec.src = deux) || JoTe >= 60 && (Attec.src = undemi) || JoTe >= 30 && (Attec.src = un) || JoTe < 30 && (Attec.src = demi));
  (PTa >= 270 && (Postac.src = cinq) || PTa >= 240 && (Postac.src = quatredemi) || PTa >= 210 && (Postac.src = quatre) || PTa >= 180 && (Postac.src = troisdemi) || PTa >= 150 && (Postac.src = trois) || PTa >= 120 && (Postac.src = deuxdemi) || PTa >= 90 && (Postac.src = deux) || PTa >= 60 && (Postac.src = undemi) || PTa >= 30 && (Postac.src = un) || PTa < 30 && (Postac.src = demi));
  (PTe >= 270 && (Postec.src = cinq) || PTe >= 240 && (Postec.src = quatredemi) || PTe >= 210 && (Postec.src = quatre) || PTe >= 180 && (Postec.src = troisdemi) || PTe >= 150 && (Postec.src = trois) || PTe >= 120 && (Postec.src = deuxdemi) || PTe >= 90 && (Postec.src = deux) || PTe >= 60 && (Postec.src = undemi) || PTe >= 30 && (Postec.src = un) || PTe < 30 && (Postec.src = demi));
  (Phy >= 270 && (Puis.src = cinq) || Phy >= 240 && (Puis.src = quatredemi) || Phy >= 210 && (Puis.src = quatre) || Phy >= 180 && (Puis.src = troisdemi) || Phy >= 150 && (Puis.src = trois) || Phy >= 120 && (Puis.src = deuxdemi) || Phy >= 90 && (Puis.src = deux) || Phy >= 60 && (Puis.src = undemi) || Phy >= 30 && (Puis.src = un) || Phy < 30 && (Puis.src = demi));
  (Phy >= 270 && (Viva.src = cinq) || Phy >= 240 && (Viva.src = quatredemi) || Phy >= 210 && (Viva.src = quatre) || Phy >= 180 && (Viva.src = troisdemi) || Phy >= 150 && (Viva.src = trois) || Phy >= 120 && (Viva.src = deuxdemi) || Phy >= 90 && (Viva.src = deux) || Phy >= 60 && (Viva.src = undemi) || Phy >= 30 && (Viva.src = un) || Phy < 30 && (Viva.src = demi));
}

function remisazero() {
  CaM.value = "1";
  Det.value = "1";
  Ndd.value = "1";
  AGB.value = "1";
  PGB.value = "1";
  RGB.value = "1";
  Def.value = "1";
  Off.value = "1";
  Men.value = "1";
  CP.value = "1";
  Tec.value = "1";
  Tac.value = "1";
  rststar();
}

function rstdeter() {
  det.min = 1,
    det.max = 20
}

function isMobileDevice() { 
  if( navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    document.getElementsByTagName("input").type= 'tel';
   }
 }