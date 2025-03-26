var divEntreprise = document.getElementById("DivEntreprise");
var divFormation = document.getElementById("DivFormation");




function toggleEntre() {
    if (divEntreprise.classList.contains('translate-to-left')) {
        divEntreprise.classList.remove('translate-to-left');
        divEntreprise.classList.add('translate-from-left');
    }
    else {
        if (divEntreprise.classList.contains('translate-from-left')) {
            divEntreprise.classList.remove('translate-from-left');
        }
        divEntreprise.classList.add('translate-to-left');
    }
    if (divFormation.classList.contains('translate-to-right')) {
        divFormation.classList.remove('translate-to-right');
        divFormation.classList.add('translate-from-right');
    }
    else {
        if (divFormation.classList.contains('translate-from-right')) {
            divFormation.classList.remove('translate-from-right');
        }
        divFormation.classList.add('translate-to-right');
    }
 }

function toggleLycee() {
    if (divFormation.classList.contains('translate-to-right')) {
        divFormation.classList.remove('translate-to-right');
        divFormation.classList.add('translate-from-right');
    }
    else {
        if (divFormation.classList.contains('translate-from-right')) {
            divFormation.classList.remove('translate-from-right');
        }
        divFormation.classList.add('translate-to-right');
    }
}

