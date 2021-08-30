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
                    Zima nam vsako leto zagode, predvsem prebivalcem krajev kjer se je asfalt primoran srečati s soljo, 
                    zaradi česar naša starodobna prevozna sredstva nekoliko podaljšajo mesece v »toplih garažah«. A vendar, 
                    višje  temperature vedno odženejo sneg, deževni april pa opere slane ceste. Posledično sta plus in minus 
                    kabla priključena na akumulator, obrat ključa pod volanom pa spodbudi cilindre pod pokrovom, da pričnejo 
                    svojo glasno debato po daljšem obdobju tišine. Konec meseca maja je bila sezona avtomobilskih srečanj že 
                    v polnem teku. To so dogodki na katerih se vozila podajo v koloni po določeni poti ali pa se parkirajo eden 
                    poleg drugega na določeni lokaciji. Slednje ne zveni nič kaj posebnega, vendar koledar Zveze SVS je poln 
                    takih dogodkov, saj so izvrsten izgovor za druženje. Predvsem so to odličen razlog in promocija tehnične 
                    mobilne dediščine, preko katere so nastala številna društva v katerih so se spletla mnoga prijateljstva. 
                    Tako se je leta 2017 v nekem baru sredi Ljubljane našlo sedem oldtimer entuziastov, ki so želeli v Sloveniji 
                    združiti vse ljubitelje štiri kolesnih izdelkov iz Kragujevca. Nekaj časa je minilo z urejanjem birokratskih 
                    zadev, ki pa so naposled pripeljale do Zastava kluba Slovenije. Kmalu zatem se je pojavila tudi ideja o 
                    organizaciji prvega klubskega srečanja. Datum? Po možnosti nekje okoli 25. maja. Lokacija? Po kratkem 
                    raziskovanju, parih telefonskih klicih in nekaj sestankih je odločitev padala na Park vojaške zgodovine 
                    v Pivki.
                </p>
                <p>
                    Močna volja lokalnih ljubiteljev vojaške dediščine in sodelovanje obrambnega ministrstva ter občine 
                    Pivka so privedli do tega, da je od leta 2004 ta stara italijanska kasarna zaživela kot muzejski kompleks. 
                    Danes je to največji muzej v državi in eden največjih v tem delu Evrope. Obiskovalci imajo tam možnost 
                    edinstvenega vpogleda v nacionalno in svetovno vojno zgodovino preko razstavljenih zbirk  tankov, aviacije 
                    in artilerije. Kolekcija je sestavljena iz več kot osemdeset velikih eksponatov. Eno od največjih atrakcij 
                    predstavlja nemška vojna parna lokomotiva 33-110, zgrajena leta 1943, ki je v knjigah slovenske zgodovine 
                    zapisana kot lokomotiva, katera je z vožnjo iz Ljubljane do Postojne leta 1978 končala obdobje parne vleke 
                    pri nas. Glavna atrakcija, ki je podvojila obiskanost parka,  je jugoslovanska 19 metrov dolga in 76 ton 
                    težka podmornica P-913 Zeta, diverzantskega razreda Una, katero so v Pivko pripeljali leta 2011 kot poklon 
                    republike Črne gore.
                </p>
                <div className="bg-washed-green center mw5 mw8-ns">
                    <ImageGallery items={gallery1} showThumbnails={false} showBullets={true}/>
                </div>
                <p>
                    Pravijo da, če vas zgodaj zjutraj zbudi ptičji pevski zbor potem bo to lep sončen dan. Tako je tudi bilo tisto 
                    majsko soboto. Mogoče je bilo vreme še prelepo saj se je kasneje zaradi močnega sonca videlo do kam so segli 
                    rokavi majic. Srečanje se je začelo s formiranjem parkinga pred prej omenjeno lokomotivo. Najprej z avtomobili 
                    organizatorjev in zatem z avtomobili obiskovalcev. Zastava 1300, AR 55, 128, 750, 850, 1100 T2, Yugo, 101 b, 
                    luxe, confort, mediteran,.. Eden za drugim so prihajali do dogovorjene lokacije. Nekaj čez trideset avtomobilov 
                    se je zbralo. Podporo za prvo klubsko srečanje so s prihodom s svojimi avtomobili izkazali tudi prijatelji iz 
                    Balilla kluba iz Divače. Da bi obiskovalci parka lahko čim več zvedeli o zgodovini znamke Zastava, kot tudi 
                    njenih modelov, je vsak avtomobil preko plastificiranega A4 format lista v pisni obliki predstavil svojo zgodbo. 
                    Kot pa se za vsako dobro »balkansko štorijo« spodobi, so seveda sledile tudi številne anekdote in pripovedi. 
                    ˝Spomnim se, ko se nas je šest vozilo v fičkotu, dva spredaj in štirje nekako zadaj. Če bi nas policija takrat 
                    ustavila bi to še nekako šlo skozi, danes pa bi nam verjetno pobrali vse do zadnjega evra˝, pripoveduje starejši 
                    gospod med ogledom odlične kolekcije teh malih avtomobilov. ˝Dolgo časa sem se vozil z njim ampak se je na koncu 
                    nabralo preveč težav, katerih nisem uspel odpraviti in sem ga zato moral prodati˝. Priljubljeno je bilo pri teh 
                    avtomobilih, tako kot je bila pogosto praksa stare skupne države, močna stopnja samo-improvizacije oziroma kot 
                    bi danes rekli predelovanje ali po domače rečeno friziranje. Na izgled se Zastava 128 s katero se je pripeljala 
                    družina Trupac iz okolice Karlovca, razen aluminijastih platišč in za prst manjše višine, ni bistveno razlikovala 
                    od standardnega modela, vendar kot vemo, videz lahko vara. ˝Vgrajen ima 1.6 motor iz Lancie Dedre na katerem je 
                    dvojni Weber uplinjač. Vgrajena je tudi ojačitev prednjega koša, katera pri taki modifikaciji pri tem avtu enostavno 
                    mora biti. Zaradi tega je rezervna guma prestavljena v zadnji del avta ampak to je sprememba s katero se da živeti˝, 
                    pove z nasmehom g. Ivan Trupac, lastnik 128-ke. ˝Avto je letnik 1989. Kupljen je bil pred petimi leti od prvega 
                    lastnika in se večinoma uporablja za vikend vožnje. V planu je menjava menjalnika. Trenutno je vgrajen pet 
                    stopenjski iz Korala 55 ampak je za ta motor malo prekratek in je tako vožnja po avtocesti malo glasnejša˝.
                </p>
                <div className="bg-washed-green center mw5 mw8-ns">
                    <ImageGallery items={gallery2} showThumbnails={false} showBullets={true}/>
                </div>
                <p>
                    Srečanje legend Kragujevca je potekalo v sklopu tradicionalnega tankovskega vikenda v Pivki, kjer se je na 
                    poligonu kompleksa slišalo delovanje težke vojne mehanizacije in drobljenje kamenja pod njihovimi gosenicami. 
                    Preden se je začela predstavitev tankov so se na poligonu predstavili štirje modeli Zastave. ˝Zastava je v 
                    bistvu predstavljala za Jugoslavijo to, kar je Volkswagen predstavljal za Nemčijo  - avto za narod, ker je 
                    ravno Zastava s svojo proizvodnjo izdelala vozila, ki so bila cenovno dostopnejša in tako motorizirala 
                    jugoslovanski narod˝, spominja publiko predsednik Zastava kluba Slovenije Damir Horvat. Zaradi tega razloga 
                    je tudi pomembno, da se ta vozila ohranijo  in s tem ostanejo kot del zgodovine tudi bodočim generacijam. 
                </p>
            </div>
        </div>
    )
}

export default LegendeKragujevca;