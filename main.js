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

/**
 * Fejléc létrehozása
 * végigmegy a header objektumon és annak a tratalmával feltölti a kreált cellákat
 */
function createHeader(){//Fejléc készítős függvény
const thead_tr = document.createElement("tr");//tr elem létrehozása
thead.appendChild(thead_tr);//Hozzárendeljük a theadhez

for(const fej of Object.values(header)){//Végigmegyünk a header objektumon
    const th = document.createElement("th");//th elem létrehozása
    th.innerHTML = fej;//A cella tartalma az aktuális érték
    thead_tr.appendChild(th);//Hozzárendeljük a thead_tr-hez
    }
}
createHeader();
const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody);//Hozzárendeljük a table-hüz
/**
 * Táblagenerálás
 * Elkészíti a cellákat és van egy elágazás arra az esetre ha nem lenne második szerző és mű
 * @param {array} array //típus megadása
 */
function createTable(array){//táblagenerálós függvény paraméterrel
    for(const currentElement of array){//Végigmegyünk a tömbbön
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
/**
 * Az egyszerű validálás logikája
 * Ha nincs az adott helyre semmisem írva és van error-classal ellátott elem akkor oda írja a hibaüzenetet
 * @param {HTMLElement} HTMLElementInput //típus megadása
 * @param {string} ErrorMessage //típus megadása
 * @returns {boolean}//Visszatérési érték típusának megadása
 */
function simpleValidation(HTMLElementInput, ErrorMessage){//Új validációs függvény bemeneti értékekkel
    let valid = true;//A valid értéke true
    if(HTMLElementInput.value.trim() === ""){//Ha nincs az aktuális mezőbe semmi írva
        const parentElement = HTMLElementInput.parentElement;//Bekérjük a parentElementjét a műnek
        const errorPlace = parentElement.querySelector(".error");//megkeressük az error class-al ellátott elemet
        if(errorPlace != undefined){//Ha az errorPlace létezik, azaz van error classa-al ellátott elem(esetünkben div)
            errorPlace.innerHTML = ErrorMessage//Akkor adjon neki hibaüzenetet
        }
        valid = false;//És legyen a valid értéke false
    }
    return valid;//Térjen vissza a validdal
}
/**
 * Egyszerű validáció melyben megnézzük, hogy az adott helyre van e valami írva, ha nincs akkor hibaüzenetet ad
 * @param {HTMLElement} country //típus megadása
 * @param {HTMLElement} author1 //típus megadása
 * @param {HTMLElement} work1 //típus megadása
 * @returns {boolean}//Visszatérési érték típusának megadása
 */
function simpleValidationInPractice(country,author1,work1){//Az egyszerű validációt kiszervezzük egy függvénybe paraméterekkel
    let valid = true;//A valid értéke true
    if(!simpleValidation(country, "Az nemzetiség megadása kötelező")){//Ha a simpleValidation = false, akkor írjon ki a megfelelő helyre egy hibaüzenetet
        valid = false;//és legyen a valid false
    }
    if(!simpleValidation(author1,"A szerző megadása kötelező")){//Ha a simpleValidation = false, akkor írjon ki a megfelelő helyre egy hibaüzenetet
        valid = false;//és legyen a valid false
    }
    if(!simpleValidation(work1,"A mű megadása kötelező")){//Ha a simpleValidation = false, akkor írjon ki a megfelelő helyre egy hibaüzenetet
        valid = false;//és legyen a valid false
    }
    return valid;//Térjen vissza a validdal
}
/**
 * Ebben az összetett validációban nem csak azt nézzük, hogy van e bele írva valami, hanem azt is figyeljük, hogy ha az egyikbe van valami írva akkor a másikban is kell lennie valaminek
 * @param {HTMLElement} author2 //típus megadása
 * @param {HTMLElement} work2 //típus megadása
 * @returns {boolean}//Visszatérési érték típusának megadása
 */
function complexValidation(author2,work2){//Az összetett validációt kiszervezzük egy függvénybe paraméterekkel
    let valid = true;//A valid értéke true
    if((author2.value === "" && work2.value !== "")||(author2.value !== "" && work2.value === "")){//Hogyha az egyik mezőbe van valami írva, de amásikba nem vagy a fordítottja
        if(!author2.value){//Ha az aithor2-höz nincs semmi írva
            simpleValidation(author2,"Minden műhöz tartozik szerző");//Akkor írja ki hozzá a hibaüzenetet
            
        }
        if(!work2.value){//Ha a work2-höz nincs semmi írva
            simpleValidation(work2,"Minden szerzőhöz  tartozik mű");//Akkor ahhoz írja ki a hibaüzenetet
           
        }
        valid = false;//Ha bármelyik feltétel érvényesül automatikusan hamis lesz a valid
    }
    return valid;//térjen vissza validdal
}
/**
 * készítünk egy divet amibe belepakolunk fontos dolgokat(label, input field, error class-al ellátott div)
 * 
 * @param {HTMLElement} parent //típus megadása
 * @param {String} innerHTML //típus megadása
 * @param {String} nameID //típus megadása
 * @returns {HTMLElement}//Visszatérési érték típusának megadása
 */
function createInputField(parent,innerHTML,nameID){//Új függvény a bemeneti mezőkhöz
    const div = document.createElement("div");//div készítése
    div.className = "field"//Adunk neki egy class-t

    const label = document.createElement("label");//Készítünk egy label elemet
    label.htmlFor = nameID;//A forja ugyan az lesz mint az id
    label.innerHTML = innerHTML;//Megadjuk, hogy mi legyen a label-nél odaírva(a bemeneti mező mellé)

    const input = document.createElement("input");//input elem készytése
    input.type = "text";//A típus megadása
    input.name = nameID;//A name megadása
    input.id = nameID;//Az id megadása

    const errorDiv = document.createElement("div");//div készítése
    errorDiv.classList.add("error");//Adunk neki egy class-t

    parent.appendChild(div);//Hozzárendeljük a div-et a parenthez
    div.appendChild(label);//hozzárakjuk a divhez a labelt
    div.appendChild(document.createElement("br"));//hozzárakjuk a divhez a br elemet
    div.appendChild(input);//hozzárakjuk a divhez az inputot
    div.appendChild(document.createElement("br"));//hozzárakjuk a divhez a br elemet
    div.appendChild(document.createElement("br"));//hozzárakjuk a divhez a br elemet
    div.appendChild(errorDiv);//hozzárakjuk a divhez az errorDiv-et
    return div;//Visszatérünk a div-vel
}


/**
 * Form kreálás függvény
 * készítünk egy form elemet és adunk neki id-t
 * Hozzárendeljük a függvényhívásokkal a szükséges részeket(label, bemeneti mező stb.)
 * végül készítünk egy bemeneti gombot aminek adunk egy típust és egy értéket és hozzárendeljük a form-hoz
 */
function createForm(){//Függvény amivel formot készítünk
    const form = document.createElement("form");//Készítünk egy form elemet
    form.id = "form";//adunk neki egy id-t
    document.body.appendChild(form);//Hozzárendeljük a body-hoz

    form.appendChild(//A formhoz hozzárendeljük 
        createInputField(form, "2. szerző műve","szerzo2mu"),//függvényhívással megadjuk a bemeneti mezőt
        createInputField(form,"Származás: ", "szarmazas"),//függvényhívással megadjuk a bemeneti mezőt
        createInputField(form,"1. szerző: ", "szerzo1"),//függvényhívással megadjuk a bemeneti mezőt
        createInputField(form,"1.szerző műve:", "szerzo1mu"),//függvényhívással megadjuk a bemeneti mezőt
        createInputField(form,"2. szerző: ", "szerzo2"),//függvényhívással megadjuk a bemeneti mezőt
    )

    const button = document.createElement("button");//Készítünk egy gombot
    button.type = "submit";//Adunk neki egy típust
    button.innerHTML = "Hozzáadás";//Megadjuk, hogy mi legyen a gombba írva
    form.appendChild(button);//Hozzárendeljük a form-hoz
}