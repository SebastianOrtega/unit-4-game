$(document).ready(function() {

    let characteres = ["luke", "obi", "sidious", "maul"];
    let charObj = { name: "", attckPoints: 0, defensePoints: 0 }
    let userChar = "";


    $(".border").click(function(k) {

        userChar = k.currentTarget.id;
        console.log("Selected Charcater: " + userChar);
        //console.log($(k).attr(innerHTML));

        $.each((characteres),
            function(i) {
                charObj.name = characteres[i];
                charObj.attckPoints = 10 + Math.floor((Math.random() * 20) + 1);
                charObj.defensePoints = 50 + Math.floor((Math.random() * 150) + 1);
                $("#" + charObj.name + "-points").text(charObj.defensePoints);
                console.log("Name: " + charObj.name + "  Attack: " + charObj.attckPoints + "  Defense: " + charObj.defensePoints + "\n");
            });






    });
    console.log("Fuera de on click" + charObj.name);



































});