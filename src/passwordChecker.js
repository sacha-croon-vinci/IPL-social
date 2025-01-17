function passwordChecker(password){

    //mdp vide
    if(!password){
        return false;
    }

    //taille inférieur à 8
    if(password.length <8){
        return false;
    }

    //Vérifie la présence d'un caractère spécial
    const caractereSpecial = /[!@#$%^&*(),.?":{}|<>]/;
    if (!caractereSpecial.test(motDePasse)) {
        return false;
    }

    // Vérifie la présence d'un chiffre
    const chiffre = /[0-9]/;
    if (!chiffre.test(motDePasse)) {
        return false;
    }

    // Vérifie l'absence de la chaîne "IPL" (insensible à la casse)
    const regexIPL = /ipl/i;
    if (regexIPL.test(motDePasse)) {
        return false;
    }


    return true;

}

module.exports = { passwordChecker};