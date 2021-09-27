//Table of Contents------------------------------------------------------------------------------------
//DebugMode
//turn off cors at fetch
//current target
//keydown - e.which
//loops for/of   for/in  [array][object]
//copying objects [object]
//create object [object]
//delete object [object]
//generate timestamp [other]
//Arrow functions [other]
//JSON methods [JSON]
//create prototype [object]

//Switch [other]
//Array functions indexOf/includes/some/find [array]
//Array methods extra variable [array]
//Array - reduce/every [array]
//Array - in vs includes [array]
//various functions trim/padStart/Round/Floor/ceil/ParseInt [native methods]
//Object methods keys/values/entries [object]
//Copy arrays [array]
//Object - deep vs shallow copy [object]
//Generate chainning methods [object]
//Arrow function scope/this [other]
//Callback functions use bind/this
//Method get/set at object [object]
//Random number from range [other]
//Repeat console.log [console.log]
//String methods [string]
//Custoom sort [other]
//Async/await function [other]
//Literal object vs Map [object]








const baseObject = {
    name: "Luki",
    surname: "Kowalski",
    age: 18,
    cars: ['golf','a4','astra'],
    colors: [
        {name: 'red', number: 1},
        {name: 'blue', number: 2},
        {name: 'pink', number: 3},
        {name: 'yellow', number: 4},
        {name: 'green', number: 5}
    ],
    work: 'Frontend Developer',
    wife: true
}


console.log('JavaScript training');
//DebugMode-----------------------------------------------------------------------------------
function debugMode(){
    const DEBUG_MODE = true;
    if(DEBUG_MODE){
        debugger;
    }

    console.log('Debug mode');
}
// debugMode();

//turn off cors at fetch
function turnOffFech(){
    document.querySelector('.btn').addEventListener('click', getData);

    function getData() {
        // fetch('http://localhost:5001/projekt2-4c9a7/us-central1/helloWorld',
        //     {
        //         mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //           },
        //     })
        //     .then(function (res) {
        //         return res.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     })
        fetch("https://restcountries.eu/rest/v2/name/Poland")
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            flaga(res)
        })
    
    
        function flaga(data){
            console.log('zwrocone dane')
            console.log(data[0].flag);
            const flag = document.createElement('img');
            flag.classList.add('flaga');
            flag.src = data[0].flag;
            document.querySelector('body').append(flag);
        }
    }
}
// turnOffFech();

//current target
function currentTarget(){
    const btn1 = document.querySelector('.btn1');
    console.log('btn1', btn1);
    btn1.addEventListener('click', showInfo.bind(this));
}
function showInfo(e){
    // e.stopPropagation();
    console.log(e);
    console.log('target', e.target);
    console.log(e.target.dataset.city);
    console.log('currentTarget', e.currentTarget);
    console.log(e.currentTarget.dataset.city);
    e.target.classList.add('luki')
}
// currentTarget();

//keydown - e.which
function inputInfo(){
    const input = document.querySelector('.luki1');
    input.addEventListener('keydown', checkInfo.bind(this));
}
function checkInfo(e){
    console.log(e);
    console.log(e.which);//kod symbolu(literki)
}
// inputInfo();

//loops for/of   for/in  [array][object]
function loops(){
    const arr = [11,22,33,44,55,66];
    for(let num in arr){//in zwraca property array/object
        console.log(arr[num]);
    }
    for(let n of arr){//for zwraca wartośc//tylko array
        console.log('n',n);
    }

    const objectLuki = {
        name: "luki",
        surname: "Big",
        cars: 4,
        color: "blue"
    }

    for(let i in objectLuki){
        console.log(i, objectLuki[i]);
    }
}
// loops();

//copying objects [object]
function objectAssign(){
    const baseObject = {
        name: "luki",
        surname: "Big",
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ]
    }
    const additionalObject = {
        sport: true,
        PC: false,
        cat: false
    }
    console.log('BASE-', baseObject);
    const copyObject = Object.assign({}, baseObject);

    baseObject.wife = true;
    baseObject.work = 'frontend developer';
    baseObject.cars = ['aston','porshe','ferrari'];
    baseObject.colors = [
        {name: 'black', number: 1},
        {name: 'white', number: 2},
        {name: 'yellow', number: 3},
    ];

    console.log('Modif', baseObject);
    console.log('COPY-', copyObject);
    //powstaje nowa kopia bez referencji do basowego obiektu

    const multiCopy = Object.assign({}, baseObject, additionalObject);
    console.log('multiCopy', multiCopy);//utworzenie obiektu z kilku innych
}
// objectAssign();

//create object [object]
function createObject(){
    const additionalObject = {
        name: "luki",
        surname: "Big",
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ]
    }

    const newObject = Object.create(additionalObject, {});//shallow copy
    newObject.city = 'Warsaw';
    newObject.capital = true;
    additionalObject.wife = true;
    additionalObject.work = 'frontend developer';

    console.log('Base Version', additionalObject);
    console.log('Copy -------', newObject);
    //powstaje nowy objekt z referencja do bazowych propertisów
}
// createObject();

//delete object [object]
function deleteObject(){
    const luki = {
        name: 'luki',
        surname: 'big',
        age: 18,
        increaseAge: function(){
            this.age = this.age * 2;
        },
        func: function(){
            console.log('age x2', this.age );
        }
    }
    console.log('Base---', luki);

    luki.name = 'Adam';
    delete luki.func;

    console.log('Change-', luki);
    //zmiana name i usuniecie funkcji func
}
// deleteObject();

//generate timestamp [other]
function timestampLuki(){
    let time1 = Date.now();
    let time = new Date();
    let time2 = time.valueOf();

    console.log(time1);//ten sam czas w milisekundach
    console.log(time2);//ten sam czas w milisekundach
}
// timestampLuki();

//Arrow functions [other]
function arrowFunction1(){
    const object = {
        name: 'luki',
        surname: 'big'
    }

    const l1 = () => ({ 'name': 'luki', 'surname': 'big'});
    console.log(l1());
    const l2 = () => object;
    console.log(l2());
}
// arrowFunction1();


//JSON methods [JSON]
function trainingJSONLuki(){
    const baseObject = {
        name: 'luki',
        surname: 'big',
        age: 30,
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ],
        films:['Matrix','Vikings','Mr Robot']
    }
    const newJSON = JSON.stringify(baseObject, null, 2)
    console.log('BASE----', newJSON);//cały obiekt sparsowany do JSON
    const newJSON2 = JSON.stringify(baseObject,['name','age','films','cars'], 2)
    console.log('Selected', newJSON2);//wyciągnięte tylko prop z tablicy

    function replace(key, val){
        if(typeof val === 'string'){
            return 'luki'
        } else{
            return val;
        }
    }
    const newJSON3 = JSON.stringify(baseObject, replace, 2)
    console.log('newJSON3', newJSON3);//wartości które sa stringami zmieniają sie na 'luki'

    const newJSON4 = JSON.stringify(baseObject,null, 2)
    console.log('newJSON4', newJSON4);//ładna prezentacja danych JSON
}
// trainingJSONLuki()

//create prototype [object]
function addprototypeLuki1(){
    const numbers = [1,3,5,7,9,11, 13];
    Array.prototype.multiply = function(num){
        return this.map((ele) => ele * num)
    }
    const result = numbers.multiply(2);
    console.log('My new function "multiply" at array object \n Base--', numbers,  '\n Change', result);

    //My new function "multiply" at array object
    //Base-- (7) [1, 3, 5, 7, 9, 11, 13]
    //Change (7) [2, 6, 10, 14, 18, 22, 26]
}
// addprototypeLuki1();


//Add custom polifill [object]
function addPolifill(){
    if(!Array.prototype.upperCaseWords){
        Array.prototype.upperCaseWords = function(){
            return this.map(ele => {
                console.log('ele', typeof ele);
                if(typeof ele == 'string') {
                    return ele.toUpperCase();
                } else{
                    return ele;
                }
            })
        }
    } else{
        console.log('Browser does support upperCaseWords function');
    }

    const arr = ['luki','domki','siema', 13, true, {name: 'luki'}];
    console.log('BASE ARRAY  ', arr);//['luki', 'domki', 'siema', 13, true, {…}]
    console.log('Change ARRAY', arr.upperCaseWords());//['LUKI', 'DOMKI', 'SIEMA', 13, true, {…}]
}
// addPolifill();

//Switch [other]
function switchStatementsLuki1(){
    const arr = [
        { code: 200, text: "Everythink is ok"},
        { code: 201, text: "Everythink is ok"},
        { code: 300, text: "Not modified"},
        { code: 400, text: "No webpage"},
        { code: 403, text: "No webpage"},
        { code: 404, text: "No webpage"},
        { code: 500, text: "Serwer error"},
        { code: 600, text: "No existing code"}
    ]
    const number = Math.floor(Math.random() * arr.length);
    const result = arr[number];

    switch(result.code){
        case 200:
        case 201:
            console.log(result.code, result.text);
            break;
        case 300:
            console.log(result.code, result.text);
            break;
        case 400:
        case 403:
        case 404:
            console.log(result.code, result.text);
            break;
        case 500:
            console.log(result.code, result.text);
            break;
        default:
            console.log(result.code, result.text);
    }
}
// switchStatementsLuki1();

//Array functions indexOf/includes/some/find [array]
function arrayFunction(){
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const smallObject = {
        name: 'small object',
        cool: true,
        id: 10
    }
    const length = arr.length;
    console.log('includes: ', arr.includes(1));//true
    console.log('indexOf: ', arr.indexOf(9));//9
    let count1 = 0;
    const someResult = arr.some(function(ele){
        count1++;
        console.log('this', this);
        if(ele === 5) return true;
    }, smallObject)
    console.log('Some. Wynik: ', someResult, 'Liczba wykonań w pętli: ', count1, 'Liczba elementów: ', length);
    //Some. Wynik:  true Liczba wykonań w pętli:  6 Liczba elementów:  10

    let count2 = 0;
    const findResult = arr.find( ele => {
        count2++;
        if(ele === 5) return true;
    });
    console.log('Find. Wynik:', findResult, 'Liczba wykonań w pętli: ', count2, 'Liczba elementów: ', length);
    //Find. Wynik: 5 Liczba wykonań w pętli:  6 Liczba elementów:  10

    let count4 = 0;
    const filterResult = arr.filter((ele, index) => {
        count4++;
        if(ele === 5){
            return true;
        }
    });
    console.log('Filter. Wynik:', filterResult, 'Liczba wykonań w pętli: ', count4, 'Liczba elementów: ', length);
    //Filter. Wynik: [5] Liczba wykonań w pętli:  10 Liczba elementów:  10
}
// arrayFunction();

//Array methods extra variable [array]
function someExtraOption(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20];
    const smallObject = {
        name: 'small object',
        cool: true,
        id: 10
    }
    const result = arr.find( function(ele) {
        console.log('smallObject', this);
        if(ele === this.age){;
            return true;
        }
    }, smallObject);
    console.log("Result: ", result);
    //przekazanie dodatkowego parametru do funkcji po {}.
    //Wewnątrz funkcji można wywołac this ale metode musi być wywołana z uzyciem function a nie arrow function
}
// someExtraOption();

//Array - reduce/every [array]
function arrayMethods2(){
    const arr = [1,2,3,4,5,6,7,8,9,10,11];
    const result1 = arr.reduce((acc, ele)=>{
        return acc + ele;
    },0)
    const result2 = arr.every( ele => {
        return ele > 0;
    })
    const result3 = arr.every( ele => {
        return ele < 5;
    })
    console.log(`Array      ${arr}`);
    console.log(`Reduce:    ${result1}`);//66
    console.log(`Every > 0: ${result2}`);//true
    console.log(`Every < 5: ${result3}`);//false
}
// arrayMethods2();

//Array - in vs includes [array]
function arrayIn(){
    const arr = [1,2,3,4,5,6];
    const target = 3;

    if(target in arr){
        console.log(`${target} is in array`);
    } else{
        console.log(`${target} isn't in array`);
    }

    if(arr.includes(target)){
        console.log(`${target} is in array`);
    } else{
        console.log(`${target} isn't in array`);
    }
}
// arrayIn();

//various functions trim/padStart/Round/Floor/ceil/ParseInt [native methods]
function variousFunctions(){
    const str1 = 'Luki';
    const str2 = '       Luki         ';
    const log = console.log;
    log(str2.trim(), 'x');//Luki x
    log(str2.trimLeft(), 'x');//Luki          x
    log(str2.trimRight(), 'x');//       Luki x
    log(str1.padStart(15));//           Luki
    log(str1.padStart(15, '--------'));//-----------Luki
    log(str1.padEnd(15, '--------'));//Luki-----------

    const numberr = 3.14;

    log(Math.round(numberr));//3
    log(Math.floor(numberr));//3
    log(Math.ceil(numberr));//4
    log(numberr.toFixed(3));//3.140
    log(numberr.toFixed(1));//3.1

    const str3 = '3.14 Luki';

    log(parseInt(str3));//3
    log(parseFloat(str3));//3.14
}
// variousFunctions();

//Object methods keys/values/entries [object]
function objectFunctionLuki1(){
    const log = console.log;
    const baseObject = {
        name: "Luki",
        surname: "Kowalski",
        age: 18,
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ],
        work: 'Frontend Developer',
        wife: true
    }

    log(Object.keys(baseObject));//['name', 'surname', 'age', 'cars', 'colors', 'work', 'wife']
    log(Object.values(baseObject));//['Luki', 'Kowalski', 18, Array(3), Array(5), 'Frontend Developer', true]
    log(Object.entries(baseObject));//[['name', 'Luki'],['surname', 'Kowalski'],['age', 18],['cars', Array(3)],['colors', Array(5)],['work', 'Frontend Developer'],['wife', true]]
}
// objectFunctionLuki1();

//Copy arrays [array]
function copyArrayLuki1(){
    const arr = ['a','b','c', 1,2,3, true, {cars:['a4','golf','aston']}];
    const arr1 = Array.from(arr);
    const arr2 = [...arr];
    const arr3 = arr.slice(0);
    const arr4 = arr.concat([]);

    arr[0] = 'luki';
    arr[7] = {names: ['james', 'jesica', 'mike']}

    console.group('Shallow copy????')
        console.log('BASE1         ', arr); //['luki', 'b', 'c', 1, 2, 3, true]
        console.log('COPY1 - FROM  ', arr1);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('COPY2 - SPREAD', arr2);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('COPY3 - slice ', arr3);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('COPY4 - concat', arr4);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('BASE2         ', arr);//['a', 'b', 'c', 1, 2, 3, true]
    console.groupEnd();
}
// copyArrayLuki1();

//Object - deep vs shallow copy [object]
function copyObject2(){
    const log = console.log;
    const baseObject = {
        name: "Luki",
        surname: "Kowalski",
        age: 18,
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ],
        work: 'Frontend Developer',
        wife: true
    }

    let shallowCopy = Object.assign({}, baseObject);
    let deepCopy = JSON.parse(JSON.stringify(baseObject));
    baseObject.cars = ['VW','Audi'];
    baseObject.colors = [{name: 'black', number: 11},{name: 'white', number: 12}];
    shallowCopy.colors = [{name: 'white', number: 12}];

    log('Base         ', baseObject);
    log('Shallow copy ', shallowCopy);
    log('Deep copy    ', deepCopy);
    //assign powinien robic shallow copy z odwolaniami do baseObject
    //ckopiowanie przy użyciu json powoduje deep copy

}
// copyObject2();


//Generate chainning methods [object]
function chainingMethodLuki1(){
    let objLuki = function(item){
        this.item = item;
    }
    objLuki.prototype.upperWord = function(){
        this.item = this.item.toUpperCase();
        return this;
    }
    objLuki.prototype.addLine = function(){
        this.item = this.item.split('').map(letter => letter + "--").join('');
        return this;
    }
    objLuki.prototype.addExtraWord = function(){
        return this.item + 'Rulez';
    }
    const word = new objLuki('Lukiiii');
    const result = word.upperWord().addLine().addExtraWord();
    console.log('result', result);//result L--U--K--I--I--I--I--Rulez
}
// chainingMethodLuki1();


//Arrow function scope/this [other]
function arrowFunctionScope(){
    const obj = {
        name: 'Luki',
        age: 18,
        prop1: function(){
            console.log('obj1', obj);
            console.log('this', this);
        },
        prop2(){
            console.log('obj2', obj);
            console.log('this', this);
        },
        prop3: () => {
            console.log('obj2', obj);
            console.log('this', this);
        }
    }

    console.log('prop1');//obj1 Object this Object
    obj.prop1();
    console.log('prop2');//obj2 Object this Object
    obj.prop2();
    console.log('prop3');//obj3 Object this Window
    obj.prop3();

    console.log(Object.entries(obj));
    console.log(Object.entries(obj).length);
}
// arrowFunctionScope();

//Callback functions use bind/this [other]
function callBackFunction(){
    function luki1(num, str){
        console.log(`Number: ${num}, string: ${str}`);
        console.log(this);
    }

    const baseObject = {
        name: 'Luki',
        cars: 2,
        methodLuki: function(fn){
            fn();
        }
    }

    baseObject.methodLuki(luki1.bind(this, 13, 'Hello'));//wywołuje funkcje z parametrami, this = window
    luki1.call(this, 15, 'luki15');//wywołanie funkcji z parametrami, this = window
    luki1.call(baseObject, 16, 'luki16');//wywołanie funkcji z parametrami, this = obiekt baseObject

    luki1.apply(this, [17, 'luki17']);//wywołuje funkcje z parametrami, this = window
    luki1.apply(baseObject, [17, 'luki17']);//wywołuje funkcje z parametrami, this = window
}
// callBackFunction()

//Method get/set at object [object]
function getSetMethod(){
    const baseObject = (function(){
        let _prop1 = 1987;
        return{
            prop2: 2000,
            get prop1(){
                return _prop1;
            },
            set prop1(_val){
                _prop1 = _val;
            }
        }
    })();

    console.log('BASE  - DEFAULT', baseObject);
    console.log('PROP1 - BASE   ', baseObject.prop1);
    baseObject.prop1 = 3000;
    console.log('PROP1 - CHANGE', baseObject.prop1);
    console.log('BASE  - CHANGE', baseObject);
}
// getSetMethod();

//Random number from range [other]
function randomNumberFromRange(min, max){
    console.log(Math.floor((Math.random() * (max-min-1)) + min));
}

// randomNumberFromRange(10, 50);

//Repeat console.log [console.log]
function repeatSentence(){
    console.log('-xxx-'.repeat(100));
}
// repeatSentence();

//String methods [string]
function substringLuki1(){
    //str.substring(from, to);
    //str.substr(from, length)

    const str = 'Jakies ladne, nowe zdanie wielokrotnie zlozone';

    log = console.log;

    log('1',str.substring(16, 18)); //text od 16 do 18
    log('2',str.substring(16, 0));//text od 0 do 16
    log('3',str.substring(16));//text od 16 do konca

    log('4', str.substr(16, 18)); //text od 16 i zwraca 18 znaków
    log('5', str.substr(16, 0));//nic nie zwraca
    log('6', str.substr(16));//text od 16 do konca
    log('7', str.substr(-16, 10));//nic od 16 od konca indexu zwraca kolejne 10 znaków

}
// substringLuki1();

//Custoom sort [other]
function customSort1(){
    let log = console.log;
    let numbers = [40,16,67,345,22,23,142,63,59,283];
    const result = numbers.sort((a,b)=>{
        if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        } else{
            return 0;
        }
    })
    console.log('Luki1 sort numbres', result); //[16, 22, 23, 40, 59, 63, 67, 142, 283, 345]

    let people = [
        {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
        {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
        {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
        {"id":258, "name":"Pris", "email":"pris@replicant.io"}
    ];
    const result2 = people.sort((a,b)=>{
        if(a.id > b.id){
            return 1;
        } else if(a.id < b.id){
            return -1;
        } else{
            return 0;
        }
    })

    console.log('Luki2 sort prop at object', result2);
    //{id: 123, name: 'Rick Deckard', email: 'rick@bladerunner.org'}
    //{id: 258, name: 'Pris', email: 'pris@replicant.io'}
    //{id: 456, name: 'Roy Batty', email: 'roy@replicant.io'}
    //{id: 789, name: 'J.F. Sebastian', email: 'j.f@tyler.com'}
}
// customSort1();


//Async/await function [other]
function asyncAwiatFunction(){
    async function promiseLuki1(){
        let p = await delay(2000, true).catch((error)=>{console.log('error', error);});
        const x = p * 100;
        console.log('xxxx', x);
    }
    function delay(ms, type){
        return new Promise((resolve, reject) =>{
            if(type){
                setTimeout(resolve, 3000, 55);
            } else {
                reject(new Error('Very bad error'));
            }
        })
    }

    promiseLuki1();
}
// asyncAwiatFunction();


//Literal object vs Map [object]
function mappLuki1(){
    const cars = ['corsa','matiz'];
    let map1 = {
        name:'luki',
        age: 18,
        cars: cars
    }

    console.group('Map 1 --------')
    console.log('map1', map1);
    console.log('get1', map1['cars']);
    console.log('has1', !!map1['cars']);

    let keysArr = [];
    for(let i in map1){
        keysArr.push(i);
    }
    let valuesArr = [];
    for(let i in map1){
        valuesArr.push(map1[i]);
    }
    let entriesArr = [];
    for(let i in map1){
        const obj = {i:map1[i]};
        entriesArr.push(obj);
    }
    for(let i in map1){
        console.log('ele1', map1[i]);
    }
    console.log('keys1', keysArr);
    console.log('values1', valuesArr);
    console.log('entries1', entriesArr);
    console.log('ZMIANY');
    delete map1.age;
    map1 = {};
    console.log('map1', map1);
    console.log('size', map1.length);
    console.groupEnd();

    //ten sam obiekt z wykorzystaniem metody new Map();
    const map2 = new Map();
    map2.set('name', 'Luki');
    map2.set('age', 18);
    map2.set('cars', cars);

    console.group('Map 2 --------')
    console.log('map2', map2);
    console.log('get2', map2.get('cars'));
    console.log('has2', map2.has('cars'));
    console.log('keys2', map2.keys());
    console.log('values2', map2.values());
    console.log('entries2', map2.entries());
    map2.forEach(ele =>{
        console.log('ele2', ele);
    })
    console.log('ZMIANY');
    map2.delete('age');
    map2.clear();
    console.log('map2', map2);
    console.log('size', map2.size);
    console.groupEnd();
}
// mappLuki1();


//Separators in numbers
function separatorsNumbers(){
    const number1 = 100;
    const number2 = 100_000;
    const number3 = number1 + number2;//100100
    console.log('number1', number1);
    console.log('number2', number2);
    console.log('number3', number3);
}

// separatorsNumbers();

//Optional chaining [object]
function optionalChaining(){
    const arr = [
        {txt:'ad1'},
        {txt:'ad2'},
        {txt:'ad3'},
        {txt:'ad4'}
    ];

    const txt = arr[6]?.txt;//undefined
    const txt2 = arr[1]?.txt;//ad2

    const deepObj = {
        level1:{
            name: 'level1',
            reward: 'bronze',
            level2:{
                name: 'level2',
                reward: 'silver',
                level3:{
                    name: 'level3',
                    reward: 'gold'
                }
            }
        },
        m: () =>{
            return 'Method M';
        }
    }

    console.log('deepObj.level1?.reward', deepObj.level1?.reward);//bronze
    console.log('deepObj.level1?.level2?.reward', deepObj.level1?.level2?.reward);//silver
    console.log('deepObj.level1?.level2?.level3.reward',deepObj.level1?.level2?.level3.reward);//gold
    console.log('deepObj.level1?.level2?.level3?.level4?.reward',deepObj.level1?.level2?.level3?.level4?.reward);//undefined
    console.log('deepObj.startLevel?.level2?.reward',deepObj.startLevel?.level2?.reward);//undefined

    console.log('deepObj.m?.()', deepObj.m?.()); //Method M
    console.log('deepObj.f?.()',deepObj.f?.());//undefined
}
// optionalChaining();

//Flat array [array]
function flatArray(){
    const arr = [1,2,3,[4,5,6],[[7,8],[9,10],11],12,13];
    const flat = arr.flat(1);
    console.log('Array', flat); //Array [1, 2, 3, 4, 5, 6, Array(2), Array(2), 11, 12, 13]
    const flat2 = arr.flat(2);
    console.log('Array', flat2); //Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const flat3 = arr.flat(3);
    console.log('Array', flat3); //Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}
// flatArray();


//Add new element to object [object]
function addNewElementToObject(){
    const e = 'beer';
    const myNewObj = {
        a: 'Luki',
        b: 30,
        c: 'developer',
        [e]: 'Zywiec'
    }

    function addProp(obj, propName, propValue){
        obj[propName] = propValue;
    }

    addProp(myNewObj, 'd', 'games');
    console.log(myNewObj); //{ a: 'Luki', b: 30, c: 'developer', beer: 'Zywiec', d: 'games' }
}
addNewElementToObject();