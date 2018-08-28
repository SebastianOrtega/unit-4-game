$(document).ready(function() {

    function Rnd(character) {
        character.attckPoints = 10 + Math.floor((Math.random() * 20) + 1);
        character.defensePoints = 50 + Math.floor((Math.random() * 150) + 1);
    }

    function name(char) {
        return char.name;
    }

    function defense(char) {
        return char.defensePoints;
    }

    function attack(char) {
        return char.attckPoints;
    }

    let luke = {
        name: "Luke SkyWalker",
        attckPoints: 0,
        defensePoints: 0
    };
    let obi = {
        name: "Obi Wan",
        attckPoints: 0,
        defensePoints: 0
    };
    let sidious = {
        name: "Darth Sidious",
        attckPoints: 0,
        defensePoints: 0
    };
    let maul = {
        name: "Darth Maul",
        attckPoints: 0,
        defensePoints: 0
    };

    let userChar = "";


    Rnd(luke);
    console.log("Name: " + luke.name + "  Attack: " + luke.attckPoints + "  Defense: " + luke.defensePoints + "\n");
    Rnd(obi);
    console.log("Name: " + obi.name + "  Attack: " + obi.attckPoints + "  Defense: " + obi.defensePoints + "\n");
    Rnd(sidious);
    console.log("Name: " + sidious.name + "  Attack: " + sidious.attckPoints + "  Defense: " + sidious.defensePoints + "\n");
    Rnd(maul);
    console.log("Name: " + maul.name + "  Attack: " + maul.attckPoints + "  Defense: " + maul.defensePoints + "\n");


    $(".border").click(function(k) {

        userChar = k.currentTarget.id;
        $("#luke-points").text(luke.defensePoints);
        $("#obi-points").text(obi.defensePoints);
        $("#sidious-points").text(sidious.defensePoints);
        $("#maul-points").text(maul.defensePoints);
        //$(".border").remove("#" + userChar);
        $(".characteres").empty();
        console.log("Selected Charcater: " + userChar);
        $("#userCharacter").show();
        $("#imageSelected").attr("src", "assets/images/" + userChar + ".jpg");
        $("#selectedName").text(name(luke));
        $(".selectedPoints").text(defense(luke));
        createChar("#enemies", luke, "luke");





    });

    function createChar(where, char, charname) {

        console.log("where: " + where + "  Char:  " + char);

        let block = $("<div>");
        let nametext = $("<p>");
        let defensePoints = $("<p>");
        let img = $("<img>");
        $(block).addClass("border");
        $(nametext).text(name(char));
        $(defensePoints).text(defense(char));
        $(img).attr("src", "assets/images/" + charname + ".jpg");
        $(block).append(nametext);
        $(block).append(img);
        $(block).append(defensePoints);
        $(where).append(block);


    }





});