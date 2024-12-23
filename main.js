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


createHeader();
const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody);//Hozzárendeljük a table-hüz

createTable(groteszkArray);//meghívjuk a függvényt
createForm();

form.addEventListener("submit",function(e){//eseménykezelő létrehozása
    e.preventDefault();//Ez a rész megakadályozza, hogy az űrlap azonnal működésebe lépjen ahogy betölt az oldal

    const country = document.getElementById("szarmazas");//html elem bekérése id alapján
    const author1 = document.getElementById("szerzo1");//html elem bekérése id alapján
    const work1 = document.getElementById("szerzo1mu");//html elem bekérése id alapján
    const author2 = document.getElementById("szerzo2");//html elem bekérése id alapján
    const work2 = document.getElementById("szerzo2mu");//html elem bekérése id alapján

    const Form = e.currentTarget;//Eltároljuk egy változóban azokat az elemeket amikről éppen szó van(a formon belül)
    const errorClass = Form.querySelectorAll(".error");//Megnézzük, hogy melyiknek van error class-a
    for(const error of errorClass){//Végigmegyünk ezeken az elemeken
        error.innerHTML = "";//És lenullázzuk a tartalmát
    }
    if(simpleValidationInPractice(country,author1,work1)&&complexValidation(author2,work2)){//Ha a valid = true, azaz mindehova van valami írva akkor létrehozza az objektumot
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
    Form.reset();//Az űrlapot nullázza le ha minden megfelelt
    createTable(groteszkArray);//Meghívjuk a függvényt
}
})
