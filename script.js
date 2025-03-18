function toggleEntre() {
    var divEntreprise = document.getElementById("ToggleEntreprise");
    if (divEntreprise.style.maxHeight != "9999px") {
        divEntreprise.style.maxHeight = "9999px"; // Ajuste selon le contenu
        
    } else {
        divEntreprise.style.maxHeight = "0px";
        divEntreprise.style.padding = "0px";
    }
}

function toggleLycee() {
    var divFormation = document.getElementById("ToggleFormation");
    if (divFormation.style.maxHeight == "0px" || divFormation.style.maxHeight == "") {
        divFormation.style.maxHeight = "9999px"; // Ajuste selon le contenu
        
    } else {
        divFormation.style.maxHeight = "0px";
        divFormation.style.padding = "0px";
    }
}

