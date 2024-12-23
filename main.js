const groteszkArray = [//Egy új tömb létrehozása
    {
        country:"Orosz",//A tömb első elemének country tulajdonságának értéke
        author1:"Gogol",//A tömb első elemének author1 tulajdonságának értéke
        work1:"A köpönyeg",//A tömb első elemének work1 tulajdonságának értéke
        author2:"Csehov",//A tömb első elemének author2 tulajdonságának értéke
        work2:"A csinovnyik halála"//A tömb első elemének work2 tulajdonságának értéke
    },
    {
        country:"Cseh",//A tömb második elemének country tulajdonságának értéke
        author1:"Franz Kafka",//A tömb második elemének author1 tulajdonságának értéke
        work1:"Az átváltozás"//A tömb első elemének work1 tulajdonságának értéke
    },
    {
        country:"Magyar",//A tömb harmadik elemének country  tulajdonságának értéke
        author1:"Örkény István",//A tömb harmadik elemének author1 tulajdonságának értéke
        work1:"Egyperces Novellák",//A tömb harmadik elemének work1 tulajdonságának értéke
        author2:"József Attila",//A tömb harmadik elemének author2 tulajdonságának értéke
        work2:"Klárisok"//A tömb harmadik elemének work2 tulajdonságának értéke
    },
    {
        country:"Svájc",//A tömb negyedik elemének country tulajdonságának értéke
        author1:"Friedrich Dürrenmatt",//A tömb negyedik elemének author1 tulajdonságának értéke
        work1:"A fizikusok"//A tömb negyedik elemének work1 tulajdonságának értéke
    }
]

const header = {//fejléc objektum
    country:"Nemzetiség",//Az objektum country tulajdonságának értéke
    author:"Szerző",//Az objektum author tulajdonságának értéke
    work:"Mű"//Az objektum work tulajdonságának értéke
}

const table = document.createElement("table");//Tábla elem létrehozása
document.body.appendChild(table);//Hozzárendeljük a body-hoz

const colgroup = document.createElement("colgroup");//colgroup elem létrehozása
table.appendChild(colgroup);//Hozzárendeljük a table-höz

const col1 = document.createElement("col");//Col elem létrehozása
col1.span ="1";//Megadjuk neki a hatáskörét
col1.style.backgroundColor = "purple";//És színt amit a hatáskörön belül használ
colgroup.appendChild(col1);//Hozzárendeljük a colgrouphoz

const col2 = document.createElement("col");//Col elem létrehozása
colgroup.appendChild(col2);//Hozzárendeljük a colgrouphoz

const col3 = document.createElement("col");//Col elem létrehozása
col3.span ="1";//Megadjuk neki a hatáskörét
col3.style.backgroundColor = "purple";//És színt amit a hatáskörön belül használ
colgroup.appendChild(col3);//Hozzárendeljük a colgrouphoz

const thead = document.createElement("thead");//thead elelm létrehozása
table.appendChild(thead);//Hozzárendeljük a table-höz

const thead_tr = document.createElement("tr");//tr elem létrehozása
thead.appendChild(thead_tr);//Hozzárendeljük a theadhez

const country_th = document.createElement("th");//th elem létrehozása
country_th.innerHTML = header.country;//Megadjuk, hogy mi legyen beleírva a cellába
thead_tr.appendChild(country_th);//Hozzárendeljük a tr elemhez

const author_th = document.createElement("th");//th elem létrehozása
author_th.innerHTML = header.author;//Megadjuk, hogy mi legyen beleírva a cellába
thead_tr.appendChild(author_th);//Hozzárendeljük a tr elemhez

const work_th = document.createElement("th");//th elem létrehozása
work_th.innerHTML = header.work;//Megadjuk, hogy mi legyen beleírva a cellába
thead_tr.appendChild(work_th);//Hozzárendeljük a tr elemhez

const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody);//Hozzárendeljük a table-hüz

function createTable(){//táblagenerálós függvény
    for(const currentElement of groteszkArray){//Végigmegyünk a tömbbön
        const tbody_tr = document.createElement("tr");//Létrehozunk egy tr elemet
        tbody.appendChild(tbody_tr);//Hozzárendeljük a tbody-hoz

        const country = document.createElement("td");//td elelemet létrehozunk
        country.innerHTML = currentElement.country;//megadjuk, hogy mi legyen a cellában
        tbody_tr.appendChild(country);//Hozzárendeljük a tr elemhez

        const author1 = document.createElement("td");//td elelemet létrehozunk
        author1.innerHTML = currentElement.author1;//megadjuk, hogy mi legyen a cellában
        tbody_tr.appendChild(author1);//Hozzárendeljük a tr elemhez

        const work1 = document.createElement("td");//td elelemet létrehozunk
        work1.innerHTML = currentElement.work1;//megadjuk, hogy mi legyen a cellában
        tbody_tr.appendChild(work1);//Hozzárendeljük a tr elemhez

        if(currentElement.author2 && currentElement.work2){//Ha mind a kettő cellába van valami írva
            const secondRow = document.createElement("tr")//Hozzon létre egy új sort
            tbody.appendChild(secondRow);//Amit rendeljen hozzá a tbody-hoz

            country.rowSpan = "2";//Vonja össze a sort ami a country alatt van

            const author2 = document.createElement("td");//td elelemet létrehozunk
            author2.innerHTML = currentElement.author2;//megadjuk, hogy mi legyen a cellában
            secondRow.appendChild(author2);//Hozzárendeljük a tr elemhez

            const work2 = document.createElement("td");//td elelemet létrehozunk
            work2.innerHTML = currentElement.work2;//megadjuk, hogy mi legyen a cellában
            secondRow.appendChild(work2);//Hozzárendeljük a tr elemhez
        }
    }
}
createTable();//meghívjuk a függvényt

const form = document.getElementById("form");//form elem bekérése id alapján
form.addEventListener("submit",function(e){//eseménykezelő létrehozása
    e.preventDefault();//Ez a rész megakadályozza, hogy az űrlap azonnal működésebe lépjen ahogy betölt az oldal

    const country = document.getElementById("szarmazas");//html elem bekérése id alapján
    const author1 = document.getElementById("szerzo1");//html elem bekérése id alapján
    const work1 = document.getElementById("szerzo1mu");//html elem bekérése id alapján
    const author2 = document.getElementById("szerzo2");//html elem bekérése id alapján
    const work2 = document.getElementById("szerzo2mu");//html elem bekérése id alapján

    const countryValue = country.value;//Ezeknek az elemeknek megnézzük az értékeit
    const author1Value = author1.value;//Ezeknek az elemeknek megnézzük az értékeit
    const work1Value = work1.value;//Ezeknek az elemeknek megnézzük az értékeit
    const author2Value = author2.value;//Ezeknek az elemeknek megnézzük az értékeit
    const work2Value = work2.value;//Ezeknek az elemeknek megnézzük az értékeit

    const Element = {//Új objektum készítése
        country: countryValue,//Az objektum tulajdonságának az értékének a megadása
        author1: author1Value,//Az objektum tulajdonságának az értékének a megadása
        work1: work1Value,//Az objektum tulajdonságának az értékének a megadása
        author2:author2Value,//Az objektum tulajdonságának az értékének a megadása
        work2:work2Value//Az objektum tulajdonságának az értékének a megadása
    }

    groteszkArray.push(Element);//Tömbhöz adás
    tbody.innerHTML = "";//Kitöröljük a tbody tartalmát
    createTable();//Meghívjuk a függvényt
})