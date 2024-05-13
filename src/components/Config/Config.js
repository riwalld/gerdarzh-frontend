export const host = "http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8082"
//export const host = "http://localhost:8082"
export const pageSize = 10
export const siteLanguage = 1

const bretonLanguage = ["breton", "breton", "brezhoneg"]
const cornishLanguage = ["cornish", "cornique", "kerneveureg"]
const englishLanguage = ["english", "anglais", "saozneg"]
const frenchLanguage = ["french", "français", "galleg"]
const gaulishLanguage = ["gaulish", "gaulois", "galianeg"]
const IELanguage = ["indo-european", "indo-européen", "indezeuropeg"]
const irishLanguage = ["irish", "irlandais", "iwerzhoneg"]
const oldIrishLanguage = ["old irish.", "vieil irlandais", "heniwerzhoneg."]
const scotLanguage = ["scottish", "écossais", "skoseg"]
const protoCeltLanguage = ["proto-celtic", "proto-celtique", "kent-keltiek"]
const welshLanguage = ["welsh", "gallois", "kembraeg"]

const brLanguage = ["br.", "br.", "br."]
const corLanguage = ["cor.", "cor.", "ker."]
const engLanguage = ["eng.", "ang.", "sa."]
const frLanguage = ["fr.", "fr.", "gal."]
const gauLanguage = ["gal.", "gau.", "gau."]
const indLanguage = ["pr.I.E.", "pr.I.E.", "k.I.E."]
const irLanguage = ["ir.", "irl.", "iw."]
const oldILanguage = ["old.ir.", "v.irl.", "h.iw."]
const scLanguage = ["sc.", "eco.", "sko."]
const pCeltLanguage = ["pr.c.", "pr.c.", "kt.k."]
const welLanguage = ["wel.", "gal.", "kem."]

const nameWClass = ["name", "nom", "anv"]
const verbWClass = ["verb", "verbe", "verb"]
const adjWClass = ["adjective", "adjectif", "anv-gwan"]
const advWClass = ["adverb", "adverbe", "ragverb"]
const artWClass = ["article", "article", "doareenn"]
const prnWClass = ["pronoun", "pronom.", "raganv"]
const prepWClass = ["preposition", "préposition.", "araogenn."]
const conjWClass = ["conjunction", "conjonction", "stagell"]
const affixWClass = ["affix", "affixe", "lostger"]

const nameWClassAbr = ["n.", "n.", "an."]
const verbWClassAbr = ["vrb.", "vrb.", "vrb."]
const adjWClassAbr = ["adj.", "adj.", "a.-gw."]
const advWClassAbr = ["adv.", "adv.", "rgv."]
const artWClassAbr = ["art.", "art.", "doa."]
const prnWClassAbr = ["prn.", "prn.", "rag."]
const prepWClassAbr = ["prp.", "prp.", "ara."]
const conjWClassAbr = ["cnj.", "cnj.", "stg."]
const affixWClassAbr = ["aff.", "aff.", "lst"]

const mGenderAbr = ["m.", "m.", "g."]
const fGenderAbr = ["f.", "f.", "b."]
const nGenderAbr = ["n.", "n.", "n."]
const noGenderAbr = ["", "", ""]
const uGenderAbr = ["un.", "inc.", "dia."]

const mGender = ["male", "masculin", "gourel"]
const fGender = ["feminine", "féminin", "benel"]
const nGender = ["neutral", "neutre", "neptu"]
const uGender = ["unknow", "inconnu", "dianav"]
const noGender = ["", "", ""]

export function setLanguages() {
  const lang = document.getElementsByClassName("langws");
  for (var i = 0; i < lang.length; i++) {
    lang[i].title = lang[i].title.replace("LB", bretonLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LC", cornishLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LE", englishLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LF", frenchLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LG", gaulishLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LIR", irishLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LIE", IELanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LOI", oldIrishLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LPC", protoCeltLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LS", scotLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("LW", welshLanguage[siteLanguage])
    lang[i].title = lang[i].title.replace("WADJ", adjWClass[siteLanguage])
    lang[i].title = lang[i].title.replace("WADV", advWClass[siteLanguage])
    lang[i].title = lang[i].title.replace("WAF", affixWClass[siteLanguage])
    lang[i].title = lang[i].title.replace("WN", nameWClass[siteLanguage])
    lang[i].title = lang[i].title.replace("WPREP", prepWClass[siteLanguage])
    lang[i].title = lang[i].title.replace("WV", verbWClass[siteLanguage])
    lang[i].title = lang[i].title.replace("GM", mGender[siteLanguage])
    lang[i].title = lang[i].title.replace("GF", fGender[siteLanguage])
    lang[i].title = lang[i].title.replace("GN", nGender[siteLanguage])
    lang[i].title = lang[i].title.replace("NO", noGender[siteLanguage])
    lang[i].title = lang[i].title.replace("GU", uGender[siteLanguage])

    lang[i].innerHTML = lang[i].innerHTML.replace("LB", brLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LC", corLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LE", engLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LF", frLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LG", gauLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LI", irLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LOI", oldILanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LIE", indLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LPC", pCeltLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LS", scLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("LW", welLanguage[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WADJ", adjWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WADV", advWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WAF", affixWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WN", nameWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WV", verbWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WN", verbWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("WPREP", prepWClassAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("GM", mGenderAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("GF", fGenderAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("GN", nGenderAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("NO", noGenderAbr[siteLanguage])
    lang[i].innerHTML = lang[i].innerHTML.replace("GU", uGenderAbr[siteLanguage])
  }
}