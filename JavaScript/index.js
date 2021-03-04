/**
 * Selects a random poem which will be shown
 */
function on_next () {
    let randInt = Math.floor(Math.random() * Math.floor(gedichte.length));
    let gedicht = gedichte[randInt];

    // if the random poem is the poem which is already shown
    if (document.getElementById("titel").innerHTML.includes(gedicht.name)) {
        return on_next();
    }

    document.getElementById("foto").src = gedicht.foto;
    document.getElementById("titel").innerHTML = `<u>${gedicht.name}</u>`;

    let strophen = "";
    for (let i = 0; i < gedicht.strophen.length; i++) {
        strophen += `<span>${gedicht.strophen[i]}<br></span>`;
    }

    document.getElementById("strophen").innerHTML = strophen;
    return null;
}

function on_search () {
    return;
}

// author: @gedichtewolke aka @chr3st5an
const gedichte = [
    {
        "name" : "Sinn",
        "strophen" : [
            "Wir tuen, weil wir tuen",
            "Wir sind, weil wir sind.",
            "Wir touren der Straße des Lebens",
            "Und klettern der Leiter des Strebens.",
            "Und diese eine Person gibt uns Aufwind.",
            "Und deshalb leben wir."
        ],
        "secret" : false,
        "foto" : "img/life.jpg"
    },
    {
        "name" : "Namenlos",
        "strophen" : [
            "Wind weht Momente",
            "Meine Sinne verloren",
            "Die Nacht trennt Welten."
        ],
        "secret" : false,
        "foto" : "img/wind.jpg"
    },
    {
        "name" : "Fiasko",
        "strophen" : [
            "Wie alle sagen,",
            "Wollen ist langes Licht, So Träume.",
            "Doch unerbitterlich",
            "bringe ich Terror, trümmerliche Ewigkeit.",
            "Schöne Augen gucken",
            "einfach Stumm.",
            "Meine innerer Räuber."
        ],
        "secret" : true,
        "foto" : "img/broken_love.jpg"
    },
    {
        "name" : "Das Mädchen",
        "strophen" : [
            "Wenn ich dich aus der Ferne sehe",
            "So suche ich sofort deine Nähe,",
            "In der Hoffnung auf Fröhlichkeit",
            "Und will erleben deine Bildlichkeit<br>",
            "Wenn ich dein reines Gesicht erblicke,",
            "So endet alles in gekreuzte Liebesblicke.",
            "Und wenn wir mal dann zu Zweit",
            "So bin ich völlig befreit von Raum und Zeit."
        ],
        "secret" : false,
        "foto" : "img/lonely.jpg"
    }
];