const num = () => { 
    return Math.floor(Math.random() * 18);
};

const advice = () => {
    switch(num()) {
        case 1:
        return 'Da de ce si nu';
        break;
        case 2:
        return 'Kanesh';
        break;
        case 3: 
        return 'Incearca si miine';
        break;
        case 4:
        return 'Ho Katinka oprestete';
        break;
        case 5:
        return 'Da tzia iti trebu';
        break;
        case 6:
        return 'Alearga pina o sa te inchedishi de raspuns';
        case 7: 
        return 'Apridileshtete';
        break;
        case 8:
        return 'Tu cum crezi';
        break;
        case 9:
        return 'Fii sincer';
        break;
        case 10:
        return 'Miroase bine';
        break;
        case 11:
        return 'Ghiceshte';
        break;
        case 12:
        return 'Off blea';
        break;
        case 13:
        return 'Datzi o palma';
        break;
        case 14:
        return 'La momentu potrivit';
        break;
        case 15:
        return 'Potoleshteti instinctele';
        break;
        case 16:
        return 'Incercarea vina nare';
        break;
        case 17:
        return 'Mult teai gindit';
        break;
        default:
        return 'nu te gruzi';
        break
    }
};






const myFunction = () => {
    const question = document.getElementById('info').value;
    if(question) {
        return document.getElementById('raspuns').innerHTML = advice();
    } else {
        return document.getElementById('raspuns').innerHTML = 'Scrie in primu rind intrebarea';
    }
   
};




