data = [
{
    name: 'Avanza',
    brand: 'Toyota',
    mechine: 'DOHC',
    cc: 1500
},
{
    name: 'supra',
    brand: 'Toyota',
    mechine: 'V8',
    cc: 5000
},
{ 
    name: 'Ertiga',
    brand: 'Suzuki',
    mechine: 'DOHC',
    cc: 1550
}

];

let print = (data) => {
    let temp = '';
    for (let i = 0; i < data.length; i++) {
        temp += `${i + 1}. ${data[i].brand} ${data[i].name} with ${data[i].mechine} ${data[i].cc.toLocaleString()}\n`
    }
    return temp;
}

console.log(print(data));




data = [
    {
        name: 'Avanza',
        brand: 'Toyota',
        mechine: 'DOHC',
        cc: 1500
    },
    {
        name: 'supra',
        brand: 'Toyota',
        mechine: 'V8',
        cc: 5000
    },
    { 
        name: 'Ertiga',
        brand: 'Suzuki',
        mechine: 'DOHC',
        cc: 1550
    }

];


let printData = (arr, cbfn = (obj) => true) => {
    let result = '';
    arr.forEach((obj, index) => {
        let { name, brand, mechine, cc } = obj;
        let formatCC = cc.toLocaleString('id');
        if (cbfn(obj) == true) {
            result += `${index + 1}. ${brand} ${name} with ${mechine} ${formatCC}\n`;
        }
    });
    return result;
}

function filterName(obj) {
    return obj.name == "Avanza";
}

console.log(printData(data, filterName));