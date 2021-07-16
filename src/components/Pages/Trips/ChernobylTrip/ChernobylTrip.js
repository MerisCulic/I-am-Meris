import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ChernobylTrip.css';

import ZKS from "./Images/ZKS.jpg";
import IMG_1_1 from "./Images/Gallery1/IMG_1_ (1).jpg";
import IMG_1_2 from "./Images/Gallery1/IMG_1_ (2).jpg";
import IMG_1_3 from "./Images/Gallery1/IMG_1_ (3).jpg";
import IMG_1_4 from "./Images/Gallery1/IMG_1_ (4).jpg";
import IMG_1_5 from "./Images/Gallery1/IMG_1_ (5).jpg";
import IMG_1_6 from "./Images/Gallery1/IMG_1_ (6).jpg";
import IMG_1_7 from "./Images/Gallery1/IMG_1_ (7).jpg";
import IMG_1_8 from "./Images/Gallery1/IMG_1_ (8).jpg";
import IMG_1_9 from "./Images/Gallery1/IMG_1_ (9).jpg";

import IMG_2_1 from "./Images/Gallery2/IMG_2_ (1).jpg";
import IMG_2_2 from "./Images/Gallery2/IMG_2_ (2).jpg";
import IMG_2_3 from "./Images/Gallery2/IMG_2_ (3).jpg";
import IMG_2_4 from "./Images/Gallery2/IMG_2_ (4).jpg";
import IMG_2_5 from "./Images/Gallery2/IMG_2_ (5).jpg";
import IMG_2_6 from "./Images/Gallery2/IMG_2_ (6).jpg";
import IMG_2_7 from "./Images/Gallery2/IMG_2_ (7).jpg";
import IMG_2_8 from "./Images/Gallery2/IMG_2_ (8).jpg";
import IMG_2_9 from "./Images/Gallery2/IMG_2_ (9).jpg";
import IMG_2_10 from "./Images/Gallery2/IMG_2_ (10).jpg";
import IMG_2_11 from "./Images/Gallery2/IMG_2_ (11).jpg";
import IMG_2_12 from "./Images/Gallery2/IMG_2_ (12).jpg";
import IMG_2_13 from "./Images/Gallery2/IMG_2_ (13).jpg";
import IMG_2_14 from "./Images/Gallery2/IMG_2_ (14).jpg";
import IMG_2_15 from "./Images/Gallery2/IMG_2_ (15).jpg";
import IMG_2_16 from "./Images/Gallery2/IMG_2_ (16).jpg";
import IMG_2_17 from "./Images/Gallery2/IMG_2_ (17).jpg";
import IMG_2_18 from "./Images/Gallery2/IMG_2_ (18).jpg";
import IMG_2_19 from "./Images/Gallery2/IMG_2_ (19).jpg";
import IMG_2_20 from "./Images/Gallery2/IMG_2_ (20).jpg";
import IMG_2_21 from "./Images/Gallery2/IMG_2_ (21).jpg";
import IMG_2_22 from "./Images/Gallery2/IMG_2_ (22).jpg";
import IMG_2_23 from "./Images/Gallery2/IMG_2_ (23).jpg";
import IMG_2_24 from "./Images/Gallery2/IMG_2_ (24).jpg";
import IMG_2_25 from "./Images/Gallery2/IMG_2_ (25).jpg";
import IMG_2_26 from "./Images/Gallery2/IMG_2_ (26).jpg";

import IMG_3_1 from "./Images/Gallery3/IMG_3_ (1).jpg";
import IMG_3_2 from "./Images/Gallery3/IMG_3_ (2).jpg";
import IMG_3_3 from "./Images/Gallery3/IMG_3_ (3).jpg";
import IMG_3_4 from "./Images/Gallery3/IMG_3_ (4).jpg";
import IMG_3_5 from "./Images/Gallery3/IMG_3_ (5).jpg";
import IMG_3_6 from "./Images/Gallery3/IMG_3_ (6).jpg";
import IMG_3_7 from "./Images/Gallery3/IMG_3_ (7).jpg";
import IMG_3_8 from "./Images/Gallery3/IMG_3_ (8).jpg";
import IMG_3_9 from "./Images/Gallery3/IMG_3_ (9).jpg";
import IMG_3_10 from "./Images/Gallery3/IMG_3_ (10).jpg";
import IMG_3_11 from "./Images/Gallery3/IMG_3_ (11).jpg";
import IMG_3_12 from "./Images/Gallery3/IMG_3_ (12).jpg";
import IMG_3_13 from "./Images/Gallery3/IMG_3_ (13).jpg";
import IMG_3_14 from "./Images/Gallery3/IMG_3_ (14).jpg";
import IMG_3_15 from "./Images/Gallery3/IMG_3_ (15).jpg";
import IMG_3_16 from "./Images/Gallery3/IMG_3_ (16).jpg";
import IMG_3_17 from "./Images/Gallery3/IMG_3_ (17).jpg";
import IMG_3_18 from "./Images/Gallery3/IMG_3_ (18).jpg";
import IMG_3_19 from "./Images/Gallery3/IMG_3_ (19).jpg";
import IMG_3_20 from "./Images/Gallery3/IMG_3_ (20).jpg";

import IMG_4_1 from "./Images/Gallery4/IMG_4_ (1).jpg";
import IMG_4_2 from "./Images/Gallery4/IMG_4_ (2).jpg";
import IMG_4_3 from "./Images/Gallery4/IMG_4_ (3).jpg";
import IMG_4_4 from "./Images/Gallery4/IMG_4_ (4).jpg";
import IMG_4_5 from "./Images/Gallery4/IMG_4_ (5).jpg";
import IMG_4_6 from "./Images/Gallery4/IMG_4_ (6).jpg";
import IMG_4_7 from "./Images/Gallery4/IMG_4_ (7).jpg";
import IMG_4_8 from "./Images/Gallery4/IMG_4_ (8).jpg";
import IMG_4_9 from "./Images/Gallery4/IMG_4_ (9).jpg";
import IMG_4_10 from "./Images/Gallery4/IMG_4_ (10).jpg";
import IMG_4_11 from "./Images/Gallery4/IMG_4_ (11).jpg";
import IMG_4_12 from "./Images/Gallery4/IMG_4_ (12).jpg";
import IMG_4_13 from "./Images/Gallery4/IMG_4_ (13).jpg";
import IMG_4_14 from "./Images/Gallery4/IMG_4_ (14).jpg";
import IMG_4_15 from "./Images/Gallery4/IMG_4_ (15).jpg";
import IMG_4_16 from "./Images/Gallery4/IMG_4_ (16).jpg";
import IMG_4_17 from "./Images/Gallery4/IMG_4_ (17).jpg";
import IMG_4_18 from "./Images/Gallery4/IMG_4_ (18).jpg";
import IMG_4_19 from "./Images/Gallery4/IMG_4_ (19).jpg";
import IMG_4_20 from "./Images/Gallery4/IMG_4_ (20).jpg";
import IMG_4_21 from "./Images/Gallery4/IMG_4_ (21).jpg";

const gallery1 = [
    {
        original: IMG_1_1,    },
    {
        original: IMG_1_2,    },
    {
        original: IMG_1_3,    },
    {
        original: IMG_1_4,    },
    {
        original: IMG_1_5,    },
    {
        original: IMG_1_6,    },
    {
        original: IMG_1_7,    },
    {
        original: IMG_1_8,    },
    {
        original: IMG_1_9,    }
];

const gallery2 = [
    {
        original: IMG_2_1,    },
    {
        original: IMG_2_2,    },
    {
        original: IMG_2_3,    },
    {
        original: IMG_2_4,    },
    {
        original: IMG_2_5,    },
    {
        original: IMG_2_6,    },
    {
        original: IMG_2_7,    },
    {
        original: IMG_2_8,    },
    {
        original: IMG_2_9,    },
    {
        original: IMG_2_10,
    },
    {
        original: IMG_2_11,
    },
    {
        original: IMG_2_12,
    },
    {
        original: IMG_2_13,
    },
    {
        original: IMG_2_14,
    },
    {
        original: IMG_2_15,
    },
    {
        original: IMG_2_16,
    },
    {
        original: IMG_2_17,
    },
    {
        original: IMG_2_18,
    },
    {
        original: IMG_2_19,
    },
    {
        original: IMG_2_20,
    },
    {
        original: IMG_2_21,
    },
    {
        original: IMG_2_22,
    },
    {
        original: IMG_2_23,
    },
    {
        original: IMG_2_24,
    },
    {
        original: IMG_2_25,
    },
    {
        original: IMG_2_26,
    }
];

const gallery3 = [
    {
        original: IMG_3_1,    },
    {
        original: IMG_3_2,    },
    {
        original: IMG_3_3,    },
    {
        original: IMG_3_4,    },
    {
        original: IMG_3_5,    },
    {
        original: IMG_3_6,    },
    {
        original: IMG_3_7,    },
    {
        original: IMG_3_8,    },
    {
        original: IMG_3_9,    },
    {
        original: IMG_3_10,
    },
    {
        original: IMG_3_11,
    },
    {
        original: IMG_3_12,
    },
    {
        original: IMG_3_13,
    },
    {
        original: IMG_3_14,
    },
    {
        original: IMG_3_15,
    },
    {
        original: IMG_3_16,
    },
    {
        original: IMG_3_17,
    },
    {
        original: IMG_3_18,
    },
    {
        original: IMG_3_19,
    },
    {
        original: IMG_3_20,
    }
];

const gallery4 = [
    {
        original: IMG_4_1,    },
    {
        original: IMG_4_2,    },
    {
        original: IMG_4_3,    },
    {
        original: IMG_4_4,    },
    {
        original: IMG_4_5,    },
    {
        original: IMG_4_6,    },
    {
        original: IMG_4_7,    },
    {
        original: IMG_4_8,    },
    {
        original: IMG_4_9,    },
    {
        original: IMG_4_10,
    },
    {
        original: IMG_4_11,
    },
    {
        original: IMG_4_12,
    },
    {
        original: IMG_4_13,
    },
    {
        original: IMG_4_14,
    },
    {
        original: IMG_4_15,
    },
    {
        original: IMG_4_16,
    },
    {
        original: IMG_4_17,
    },
    {
        original: IMG_4_18,
    },
    {
        original: IMG_4_19,
    },
    {
        original: IMG_4_20,
    },
    {
        original: IMG_4_21,
    }
];

const ChernobylTrip = () => {
    return (
        <div className="ChernobylTrip">
            <div className="gallery bg-light-green pa2 br4 fl w-100 shadow-3">
                <h1 className="dib pa2 v-top">The (un)peacefull atom</h1>
                <h3 className="pl3">A road trip into the Chernobyl exclusion zone</h3>
                <div className="bg-washed-green pa2 br4">
                    <img id="" src={ZKS} alt="" className="fl pa2 br4 mw4 mw6-ns"/>
                    <p>
                        Imagine, you go through life as most people do – you wake up in the morning and go to work, 
                        return home 8 or 12 hours later, do your chores and then spend the rest of the day with your 
                        family and friends. You try to get the most out of a sunny weekend and stay warm and dry on 
                        rainy ones. You get an average salary and regular benefits. You go on vacation once or twice 
                        a year and forget about your little problems. You live in a modern city which offers everything 
                        you need and is stuffed with things you don’t. Life is great. But one day, in a blink of an eye, 
                        everything you have or even everyone you know – gone. At first you don’t even realize it. Soldiers 
                        with special protective clothing and gas masks flood the streets and start spraying some kind of 
                        cleaning substance everywhere. Two days later an announcement starts spreading that a temporary 
                        evacuation of the city is planned due to an incident at the local power station. Apart from a 
                        few essentials, you leave everything behind. You prepare some food for your pet, leave a note on 
                        the door and head towards the bus where you sit quietly as you are not quite sure what is going on 
                        and what the future will bring. 
                    </p>
                    <p>
                        Events that took place after the initial explosion in reactor number 4 of the Chernobyl nuclear 
                        power plant in the early hours on 26th April, 1986, were the start of a deadly war against an 
                        invisible enemy. It is a story that is widely known as it is the worst nuclear disaster in history, 
                        images of which are replicated in the gruesomest of horror films. These two facts immediately sprung 
                        to my mind when one evening at our club meeting a friend proposed a road trip into the exclusion zone. 
                        Alarms went up in my head warning me of the obvious hazards and how this trip would probably be my last. 
                        No conclusions were drawn that evening, except that our friend is a bit crazy, but the idea had stuck 
                        along. Some time has passed and a lot of research has been done. Curiosity killed the cat but got me hooked! 
                        By then, the conclusion was that we simply must go. It is deemed safe to visit the zone. The fact that our 
                        body receives a higher radiation dose from cosmic rays during a longer plane flight than in a day in Chernobyl, 
                        as long as we are cautious and smart, convinced me to go. Preparations started and there was a lot to be done. 
                        Our choice of transport? Three Zastavas 101 Mediteran built in the former republic of Yugoslavia between 1979 
                        and 1981. Cars that have already proven themselves as reliable and comfortable vehicles for daily use and for 
                        longer travels as well. 33 years and a day after the disaster started, under a picturesque sunrise, the three 
                        Zastavas lined up in Ljubljana and aimed towards a hotel some 850 kilometers away.
                    </p>
                    <p>
                        Slovenia was quick to cross. Entered Hungary and a long stretch of highway appeared in front of us. I admit, I felt 
                        a little anxious as this trip was basically a test drive for my newly installed gearbox, which is a gear richer than 
                        the old one, but as time showed, anxiety was superfluous. Everything was going well. The Ukrainian border was quite a 
                        different experience from the previous one. It has been a while since I've seen an AK-47 rifle outside of a museum. Multiple 
                        checkpoints are at the border and armed soldiers are abundant. It didn´t take long for us to find out how to bring out 
                        a smile from those grim faces. Electrical problems! Half way through the checkpoints a small puff of smoke appeared from 
                        underneath my dashboard and escaped through the window opening. A fuse had just blown, multiple times, so I ended up 
                        pushing my car into Ukraine. All very amusing for the border control. Soon we discovered the culprit - a loose metal 
                        switch that was touching the 12-volt socket. A quick fix. We reached the city of Uzhgorod and found our hotel for the 
                        night. The city´s architecture and all the Ladas were a reminder that this land was once part of a powerful union of 
                        countries. The entire next day was spent in the cars as well, overcoming one kilometer after another in mostly heavy rain conditions. 
                        During the day we found ourselves in a small village with very few road signs and with poor roads. We got lost! But it 
                        ended up being a pleasant experience as a local filling station worker greeted us with very delicious homemade desserts. 
                        Such a small act of kindness can really brighten up your day. Found the main road and proceeded to our hotel which we 
                        reached in the late evening hours. A day for recuperation followed that was spent in getting familiar with the city 
                        of Kiev and trying out some tasty local dishes. But what we were eagerly waiting for was our 150-kilometer-long trip northbound 
                        from the Ukrainian capital. 
                    </p>
                    <div className="bg-washed-green center mw5 mw8-ns">
                        <ImageGallery items={gallery1} showThumbnails={false} showBullets={true}/>
                    </div>
                    <p>
                        The weather that day was as predicted – gray and drizzly, but we didn’t mind, whatever the weather we were going. 
                        You cannot enter the exclusion zone unattended, so we met with our tour guide from the Go2Chernobyl tour agency 
                        in the morning in front of our hotel. After a short brief we started our cars and escaped the city with visible 
                        exhaust fumes tailgating us part of the way. The further away we got from the city and closer to our destination, 
                        lesser was the traffic and higher our anticipations. After two hours of driving the view we were envisioning for 
                        quite a while finally appeared in front of us - the checkpoint into the exclusion zone. First out of three. We 
                        were now about 30 km from the reactor. Here, some paperwork had awaited us, a quick car check-up followed, 
                        each of us received a dosimeter which we added to our arsenal of radiation measuring devices and the gates opened 
                        up. Our initial drive on grounds that witnessed the worst nuclear disaster in history was a short one. Soon we 
                        stopped our cars on the side of the road and walked along a footpath into what was once a village. A few houses 
                        were hiding in the forest. Once full of life but now empty, dark and quiet. At the time of the disaster radioactive 
                        fallout covered the area. Contaminated forests were completely cut down, the soil was dug up and buried, concrete 
                        buildings could be decontaminated but wooden ones, where the radioactive dust filled the cracks in the wood, had 
                        to be demolished. Complete villages were leveled with the ground. In Chernobyl town, there is a row of signs of 
                        all the settlements that were evacuated and of those that were erased. A sight that made the tragedy of it all 
                        really sink in. Because of high levels of radiation, it is estimated that around 115 000 people were evacuated 
                        from the zone and nearby area and another 220 000 were relocated from affected areas in Belarus, the Russian 
                        federation and Ukraine. Caused by sources with unstable atoms, ionizing radiation is a silent killer that knows 
                        no borders. It cannot be heard, seen, smelt or felt. A hazard that was not familiar to the first responding 
                        firefighters. We parked our cars at the local fire department from which the 28 men were sent into battle. In 
                        front of it a monument stands with an inscription: “To those who saved the world,” dedicated to the first victims 
                        of the Chernobyl disaster. Soon we found ourselves entering a kindergarten and its eerily silent playground. Usually 
                        places that are filled with joy and laughter.
                    </p>
                    <div className="bg-washed-green center mw5 mw8-ns">
                        <ImageGallery items={gallery2} showThumbnails={false} showBullets={true}/>
                    </div>
                    <p>
                        As we continued, we changed the main asphalt road for a narrow side road made of concrete blocks, taking us deep into 
                        the forest. A sharp eye of the driver was required here as sights of steel rods sticking out of the concrete were quite 
                        often. The forest we were driving through was concealing a legacy from the Cold War, a soviet installation with a reputation 
                        covered with mystery. The Duga radar, also known as Chernobyl-2 or the Russian woodpecker, was an over-the-horizon radar 
                        system used to detect incoming missiles from thousands of kilometers away. Speculated to be a mind and weather control device, 
                        it was once one of the most powerful military facilities in the Soviet Union. The sheer scale of it is striking. It still 
                        stands a towering 150 meters high and stretches almost 700 meters in length. While driving on the straight road towards the 
                        power plant, another massive object could be seen from afar. It was the recently built stainless steel shelter called the 
                        New Safe Confinement. Built 200 meters from reactor 4, it was slid in position in 2016, covering the old decaying concrete 
                        sarcophagus to contain the radiation caused by about 200 tons of radioactive materials for the next 100 years. At a height 
                        of 109m and a length of 257m, the shield is the world’s largest movable metal structure. We were now standing some 50 meters from the reactor. The question was: what radiation levels were our devices measuring? The screen display shows a reading 
                        of 0.001 mSv/h (millisieverts per hour). For comparison, in a full body CT scan we receive a dose of about 12 mSv and shortly 
                        after the explosion a dose rate of 300 000 mSv/h was measured in the vicinity of the reactor core. We were standing silently, 
                        absorbing the words and pictures of the cleanup our guide was feeding us with. The disaster had to be contained, as much as it 
                        was possible. After a failed attempt of cleaning the plant´s roof with remote-controlled robots, officials started sending people 
                        up there armed with little more than their bare hands. Firemen, soldiers, miners, policemen; they were carrying shovels and the 
                        lucky ones real gas masks. Called Liquidators, seven hundred thousand men were conscripted into the Chernobyl area to “liquidate” 
                        the released radiation. Hailed as heroes in 1986, they are now discarded and forgotten.
                    </p>
                    <div className="bg-washed-green center mw5 mw8-ns">
                        <ImageGallery items={gallery3} showThumbnails={false} showBullets={true}/>
                    </div>
                    <p>
                        Our time in the exclusion zone was limited so we continued towards our last point of interest. We approached a checkpoint where a guard 
                        greeted us with a big smile and soon opened the gates. Doing so, he granted us permission to enter a ghost town. Situated just three kilometers 
                        from the power plant, Pripyat was founded in 1970 as an atomic city, built to house the plant workers and their families. Before the 
                        fleet of buses arrived, it was thriving with over 49,000 inhabitants to whom everything needed for comfortable living was offered by 
                        the city's infrastructure. Stores were better stocked than elsewhere in the Soviet Union, numerous events filled the calendar, rows 
                        of roses and fruit trees decorated the streets, and the nearby river offered numerous spots for fishing and sunbathing. Life was great. 
                        The slogan "peaceful atom" was popular during those times as nuclear power was presented to be harnessed for peaceful projects. 
                        Nowadays, free of people and full of wildlife, nature is slowly claiming back what is rightfully hers. We explored the abandoned 
                        supermarkets, schools, fire department, hospital, swimming pool and ended up in the iconic amusement park which never witnessed its 
                        grand opening. Once we turned our ignition keys, we hurried to the outer most checkpoint to get out of the exclusion zone in time. 
                        After a checkup, both us and our cars for any unstable elements, we headed back towards our hotel. The next few days we spent in Kiev, 
                        exploring the city and its museums. The most memorable were the Ukrainian National Chernobyl museum and the Oleg Antonov State aviation 
                        museum. The size of some of those soviet birds was mindboggling. 
                    </p>
                    <div className="bg-washed-green center mw5 mw8-ns">
                        <ImageGallery items={gallery4} showThumbnails={false} showBullets={true}/>
                    </div>
                    <p>
                        The two-day return journey was a smooth ride, the only hick-up being the border crossing into Hungary which lasted about 5 hours. 
                        In the end, our odometers measured a total distance of about 4000km. While driving home along the highway´s broken road lines, 
                        my mind would often wander back into the exclusion zone. On this trip I realized that, without the actions of brave men who stepped 
                        in to clean-up the mess, our lives would be unfolding quite differently. We found out that a much bigger disaster was prevented from 
                        happening. After the explosion, around 20 million liters of radioactive water accumulated under the reactor. The corium was melting 
                        through the concrete layer underneath it and if it was to reach the water it would have triggered steam explosions that would destroy 
                        the entire power station, including the other three nuclear reactors, firing radiation high and wide into the sky. It is said that, 
                        if this was to happen, half of Europe would become unhabitable and hundreds of thousands or even millions of lives may have been lost. 
                        Three men - Alexei Ananenko, Valeri Bezpalov and Boris Baranov, despite the obvious risks, volunteered to dive into the radioactive 
                        water to open a pressure valve releasing water out of the basement. Chernobyl’s tragic story is a reminder that, in a blink of an eye, 
                        we can lose everything or even everyone at any given moment. It underscores our responsibility to deal more kindly with one another and 
                        not to forget the perils of the (un)peaceful atom.  
                    </p>
                </div>
            </div>
        </div>
   

    )
}

export default ChernobylTrip;