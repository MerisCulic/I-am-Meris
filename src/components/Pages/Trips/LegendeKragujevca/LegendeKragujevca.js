import React from 'react';
import ImageGallery from 'react-image-gallery';

import IMG1 from './Images/IMG (1).jpg';
import IMG2 from './Images/IMG (2).jpg';
import IMG3 from './Images/IMG (3).jpg';
import IMG4 from './Images/IMG (4).jpg';
import IMG5 from './Images/IMG (5).jpg';
import IMG6 from './Images/IMG (6).jpg';
import IMG7 from './Images/IMG (7).jpg';
import IMG8 from './Images/IMG (8).jpg';
import IMG9 from './Images/IMG (9).jpg';
import IMG10 from './Images/IMG (10).jpg';
import IMG11 from './Images/IMG (11).jpg';
import IMG12 from './Images/IMG (12).jpg';
import IMG13 from './Images/IMG (13).jpg';
import IMG14 from './Images/IMG (14).jpg';
import IMG15 from './Images/IMG (15).jpg';
import IMG16 from './Images/IMG (16).jpg';
import IMG17 from './Images/IMG (17).jpg';
import IMG18 from './Images/IMG (18).jpg';
import IMG19 from './Images/IMG (19).jpg';
import IMG20 from './Images/IMG (20).jpg';
import IMG21 from './Images/IMG (21).jpg';
import IMG22 from './Images/IMG (22).jpg';
import IMG23 from './Images/IMG (23).jpg';
import IMG24 from './Images/IMG (24).jpg';
import IMG25 from './Images/IMG (25).jpg';
import IMG26 from './Images/IMG (26).jpg';
import IMG27 from './Images/IMG (27).jpg';
import IMG28 from './Images/IMG (28).jpg';
import IMG29 from './Images/IMG (29).jpg';
import IMG30 from './Images/IMG (30).jpg';
import IMG31 from './Images/IMG (31).jpg';
import IMG32 from './Images/IMG (32).jpg';

const gallery1 = [
    {
        original: IMG2,    },
    {
        original: IMG3,    },
    {
        original: IMG4,    },
    {
        original: IMG5,    },
    {
        original: IMG6,    },
    {
        original: IMG7,    },
    {
        original: IMG8,    },
    {
        original: IMG9,    },
    {
        original: IMG10,    },
    {
        original: IMG11,    },
    {
        original: IMG12,    },
    {
        original: IMG13,    },
    {
        original: IMG14,    },
    {
        original: IMG15,    },
    {
        original: IMG16,    }
];

const gallery2 = [
    {
        original: IMG17,    },
    {
        original: IMG18,    },
    {
        original: IMG19,    },
    {
        original: IMG20,    },
    {
        original: IMG21,    },
    {
        original: IMG22,    },
    {
        original: IMG23,    },
    {
        original: IMG24,    },
    {
        original: IMG25,    },
    {
        original: IMG26,    },
    {
        original: IMG27,    },
    {
        original: IMG28,    },
    {
        original: IMG29,    },
    {
        original: IMG30,    },
    {
        original: IMG31,    },
    { 
        original: IMG32,    }
];

const LegendeKragujevca = ({toggleFullscreen}) => {
    return (
        <div className="bg-light-green pa2 mb5 br4 fl w-100 shadow-3">
            <h1 className="dib pa2 v-top">Legende Kragujevca (SLO)</h1>
            <div className="bg-washed-green pa2 br4">
            <img id="IMG1" src={IMG1} alt="" className="fr-ns center br4 w-50-ns pa2-ns w-100" onClick={() => toggleFullscreen("IMG1")}/>
                <p>
                    Zima nam vsako leto zagode, predvsem prebivalcem krajev kjer se je asfalt primoran sre??ati s soljo, 
                    zaradi ??esar na??a starodobna prevozna sredstva nekoliko podalj??ajo mesece v ??toplih gara??ah??. A vendar, 
                    vi??je  temperature vedno od??enejo sneg, de??evni april pa opere slane ceste. Posledi??no sta plus in minus 
                    kabla priklju??ena na akumulator, obrat klju??a pod volanom pa spodbudi cilindre pod pokrovom, da pri??nejo 
                    svojo glasno debato po dalj??em obdobju ti??ine. Konec meseca maja je bila sezona avtomobilskih sre??anj ??e 
                    v polnem teku. To so dogodki na katerih se vozila podajo v koloni po dolo??eni poti ali pa se parkirajo eden 
                    poleg drugega na dolo??eni lokaciji. Slednje ne zveni ni?? kaj posebnega, vendar koledar Zveze SVS je poln 
                    takih dogodkov, saj so izvrsten izgovor za dru??enje. Predvsem so to odli??en razlog in promocija tehni??ne 
                    mobilne dedi????ine, preko katere so nastala ??tevilna dru??tva v katerih so se spletla mnoga prijateljstva. 
                    Tako se je leta 2017 v nekem baru sredi Ljubljane na??lo sedem oldtimer entuziastov, ki so ??eleli v Sloveniji 
                    zdru??iti vse ljubitelje ??tiri kolesnih izdelkov iz Kragujevca. Nekaj ??asa je minilo z urejanjem birokratskih 
                    zadev, ki pa so naposled pripeljale do Zastava kluba Slovenije. Kmalu zatem se je pojavila tudi ideja o 
                    organizaciji prvega klubskega sre??anja. Datum? Po mo??nosti nekje okoli 25. maja. Lokacija? Po kratkem 
                    raziskovanju, parih telefonskih klicih in nekaj sestankih je odlo??itev padala na Park voja??ke zgodovine 
                    v Pivki.
                </p>
                <p>
                    Mo??na volja lokalnih ljubiteljev voja??ke dedi????ine in sodelovanje obrambnega ministrstva ter ob??ine 
                    Pivka so privedli do tega, da je od leta 2004 ta stara italijanska kasarna za??ivela kot muzejski kompleks. 
                    Danes je to najve??ji muzej v dr??avi in eden najve??jih v tem delu Evrope. Obiskovalci imajo tam mo??nost 
                    edinstvenega vpogleda v nacionalno in svetovno vojno zgodovino preko razstavljenih zbirk  tankov, aviacije 
                    in artilerije. Kolekcija je sestavljena iz ve?? kot osemdeset velikih eksponatov. Eno od najve??jih atrakcij 
                    predstavlja nem??ka vojna parna lokomotiva 33-110, zgrajena leta 1943, ki je v knjigah slovenske zgodovine 
                    zapisana kot lokomotiva, katera je z vo??njo iz Ljubljane do Postojne leta 1978 kon??ala obdobje parne vleke 
                    pri nas. Glavna atrakcija, ki je podvojila obiskanost parka,  je jugoslovanska 19 metrov dolga in 76 ton 
                    te??ka podmornica P-913 Zeta, diverzantskega razreda Una, katero so v Pivko pripeljali leta 2011 kot poklon 
                    republike ??rne gore.
                </p>
                <div className="bg-washed-green center mw5 mw8-ns">
                    <ImageGallery items={gallery1} showThumbnails={false} showBullets={true}/>
                </div>
                <p>
                    Pravijo da, ??e vas zgodaj zjutraj zbudi pti??ji pevski zbor potem bo to lep son??en dan. Tako je tudi bilo tisto 
                    majsko soboto. Mogo??e je bilo vreme ??e prelepo saj se je kasneje zaradi mo??nega sonca videlo do kam so segli 
                    rokavi majic. Sre??anje se je za??elo s formiranjem parkinga pred prej omenjeno lokomotivo. Najprej z avtomobili 
                    organizatorjev in zatem z avtomobili obiskovalcev. Zastava 1300, AR 55, 128, 750, 850, 1100 T2, Yugo, 101 b, 
                    luxe, confort, mediteran,.. Eden za drugim so prihajali do dogovorjene lokacije. Nekaj ??ez trideset avtomobilov 
                    se je zbralo. Podporo za prvo klubsko sre??anje so s prihodom s svojimi avtomobili izkazali tudi prijatelji iz 
                    Balilla kluba iz Diva??e. Da bi obiskovalci parka lahko ??im ve?? zvedeli o zgodovini znamke Zastava, kot tudi 
                    njenih modelov, je vsak avtomobil preko plastificiranega A4 format lista v pisni obliki predstavil svojo zgodbo. 
                    Kot pa se za vsako dobro ??balkansko ??torijo?? spodobi, so seveda sledile tudi ??tevilne anekdote in pripovedi. 
                    ??Spomnim se, ko se nas je ??est vozilo v fi??kotu, dva spredaj in ??tirje nekako zadaj. ??e bi nas policija takrat 
                    ustavila bi to ??e nekako ??lo skozi, danes pa bi nam verjetno pobrali vse do zadnjega evra??, pripoveduje starej??i 
                    gospod med ogledom odli??ne kolekcije teh malih avtomobilov. ??Dolgo ??asa sem se vozil z njim ampak se je na koncu 
                    nabralo preve?? te??av, katerih nisem uspel odpraviti in sem ga zato moral prodati??. Priljubljeno je bilo pri teh 
                    avtomobilih, tako kot je bila pogosto praksa stare skupne dr??ave, mo??na stopnja samo-improvizacije oziroma kot 
                    bi danes rekli predelovanje ali po doma??e re??eno friziranje. Na izgled se Zastava 128 s katero se je pripeljala 
                    dru??ina Trupac iz okolice Karlovca, razen aluminijastih plati???? in za prst manj??e vi??ine, ni bistveno razlikovala 
                    od standardnega modela, vendar kot vemo, videz lahko vara. ??Vgrajen ima 1.6 motor iz Lancie Dedre na katerem je 
                    dvojni Weber uplinja??. Vgrajena je tudi oja??itev prednjega ko??a, katera pri taki modifikaciji pri tem avtu enostavno 
                    mora biti. Zaradi tega je rezervna guma prestavljena v zadnji del avta ampak to je sprememba s katero se da ??iveti??, 
                    pove z nasmehom g. Ivan Trupac, lastnik 128-ke. ??Avto je letnik 1989. Kupljen je bil pred petimi leti od prvega 
                    lastnika in se ve??inoma uporablja za vikend vo??nje. V planu je menjava menjalnika. Trenutno je vgrajen pet 
                    stopenjski iz Korala 55 ampak je za ta motor malo prekratek in je tako vo??nja po avtocesti malo glasnej??a??.
                </p>
                <div className="bg-washed-green center mw5 mw8-ns">
                    <ImageGallery items={gallery2} showThumbnails={false} showBullets={true}/>
                </div>
                <p>
                    Sre??anje legend Kragujevca je potekalo v sklopu tradicionalnega tankovskega vikenda v Pivki, kjer se je na 
                    poligonu kompleksa sli??alo delovanje te??ke vojne mehanizacije in drobljenje kamenja pod njihovimi gosenicami. 
                    Preden se je za??ela predstavitev tankov so se na poligonu predstavili ??tirje modeli Zastave. ??Zastava je v 
                    bistvu predstavljala za Jugoslavijo to, kar je Volkswagen predstavljal za Nem??ijo  - avto za narod, ker je 
                    ravno Zastava s svojo proizvodnjo izdelala vozila, ki so bila cenovno dostopnej??a in tako motorizirala 
                    jugoslovanski narod??, spominja publiko predsednik Zastava kluba Slovenije Damir Horvat. Zaradi tega razloga 
                    je tudi pomembno, da se ta vozila ohranijo  in s tem ostanejo kot del zgodovine tudi bodo??im generacijam. 
                </p>
            </div>
        </div>
    )
}

export default LegendeKragujevca;