$(document).ready(function () {

    function Rnd(character) {
        character.attckPoints = 10 + Math.floor((Math.random() * 20) + 1);
        character.defensePoints = 50 + Math.floor((Math.random() * 150) + 1);
        character.contraAttackPoints = 10 + Math.floor((Math.random() * 20) + 1);
    }

    let all = ["luke", "obi", "sidious", "maul"];

    function personaje(name, attckPoints, defensePoints, contraAttackPoints) {
        this.name = name;
        this.attckPoints = attckPoints;
        this.defensePoints = defensePoints;
        this.contraAttackPoints = contraAttackPoints;
    }

    let luke = new personaje("Luke Skywalker");
    let obi = new personaje("Obi Wan");
    let sidious = new personaje("Darth Sidious");
    let maul = new personaje("Darth Maul");

    let userChar = "";
    let userEnemy = "";
    let end = false;

    //Funcion para crear caracteres 
    function createChar(where, char, charname, showDF) {
        let block = $("<div>");
        let nametext = $("<p>");
        let defensePoints = $("<p>");
        let img = $("<img>");
        $(block).addClass("border");
        $(block).attr("id", charname)
        $(nametext).text(charname);
        if (showDF) {
            $(defensePoints).text(char.defensePoints);
        } else {
            $(defensePoints).text("defense?");
        }
        $(defensePoints).attr("id", charname + "-points");
        $(img).attr("src", "assets/images/" + charname + ".jpg");
        $(block).append(nametext, img, defensePoints);
        $(where).append(block);
    }



    // Crea los caracteres en la pantalla y asigna ataque y defensa aleatoria a cada uno
    for (let n = 0; n < all.length; n++) {
        Rnd(eval(all[n]));
        console.log("Name: " + eval(all[n]).name + "  Attack: " + eval(all[n]).attckPoints + "  Defense: " + eval(all[n]).defensePoints + "\n");
        createChar("#pickCharacter", eval(all[n]), all[n], false);
    }

    $("#end").click(function (r) {
        console.log(r);
        location.reload();
    });

    //inicia 
    $(".border").click(function (k) {

        selChar = k.currentTarget.id;


        if (userChar == "") {
            userChar = k.currentTarget.id;
            $(".characteres").empty(); //borra a todos los caracteres
            console.log("Selected Charater: " + userChar);
            //Crea al casarcter seleccionado
            createChar("#userCharacter", eval(userChar), userChar, true);
            $("#yourChar").text("Your Character");
            //Crea a los enemigos para seleccionar
            let index = $.inArray(userChar, all);
            all.splice(index, 1); //elimina del array de caracteres al seleccionado
            //Crea etiqueta de enemigos
            let nametext = $("<h2>");
            $(nametext).text("Enemies Availble for attack");
            $("#enemies").append(nametext);
            //crea a los enemigos para escoger
            for (let n = 0; n < all.length; n++) {
                createChar("#enemies", eval(all[n]), all[n], true);
            }
            $('#enemies .border').css('background', 'red');
            $('#enemies .border').css('font-size', '1.5ch');
        }
    });

    $("#enemies").click(function (t) {

        console.log(t);
        console.log("UserEnemy: " + userEnemy);

        if (userEnemy == "") {
            userEnemy = t.target.parentElement.id;
            console.log("Enemy: " + userEnemy);
            $(".button").show();
            if (all.length > 2) {
                let headingEnemy = $("<h2>");
                $(headingEnemy).text("Defender");
                $("#defender").append(headingEnemy);
            }
            //Borra enemigo 
            $("#" + userEnemy).remove();
            //borra de array a enemigo
            let index = $.inArray(userEnemy, all);
            all.splice(index, 1);
            console.log("Array: " + all);
            //Crea defensor
            createChar("#defender", eval(userEnemy), userEnemy, true);
            $('#defender .border').css('background', 'black');
            $('#defender .border').css('color', 'white');
            $('#defender .border').css('font-size', '1.5ch');

            let fightText1 = $("<h3>");
            $(fightText1).text("");
            $("#defenderText1").append(fightText1);

            let fightText2 = $("<h3>");
            $(fightText2).text("");
            $("#defenderText2").append(fightText2);

            let fightText3 = $("<h3>");
            $(fightText3).text("");
            $("#defenderText3").append(fightText3);
        }

    });

    $(".button").click(function (t) {

        if (eval(userEnemy).defensePoints > 0 && eval(userChar).defensePoints > 0) {

            $("#defenderText1").text("You attacked " + eval(userEnemy).name + " for " + eval(userChar).attckPoints + " damage");
            eval(userChar).attckPoints += Math.floor((Math.random() * 10) + 1);
            eval(userEnemy).defensePoints -= eval(userChar).attckPoints;
            if((eval(userEnemy).defensePoints>0))
                eval(userChar).defensePoints -= eval(userEnemy).attckPoints;
            $("#" + userEnemy + "-points").text(eval(userEnemy).defensePoints);
            $("#" + userChar + "-points").text(eval(userChar).defensePoints);
            $("#defenderText2").text(eval(userEnemy).name + " attacked you back for " + eval(userEnemy).attckPoints + " damage");
            $("#defenderText3").text("");
        }
        if (eval(userChar).defensePoints > 0 && eval(userEnemy).defensePoints <= 0) {
            $('#defenderText3').css('font-size', '2ch');
            $("#defenderText3").text("Won, please select next oponent");
            $("#" + userEnemy).remove();
            userEnemy = "";
            console.log("Ganado");
            if (all.length == 0)
                restart();
        }
        if (eval(userChar).defensePoints <= 0 && !end) {
            $("#defenderText3").text("You Loose");
            restart();
            console.log("Perdido");
        }

    });

    function restart() {
        let restart = $("<button>");
        $(restart).attr("id", "restartBtn");
        $(restart).text("Restart");
        $("#end").append(restart);
        end = true;

    }





});