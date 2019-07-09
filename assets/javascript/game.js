$("#cat-truck-pic").click(function () {
    $("#cat-truck-bio").toggle();

});
$("#cat-stevens-pic").click(function () {
    $("#cat-stevens-bio").toggle();

});

$("#grumpy-pic").click(function () {
    $("#grumpy-bio").toggle();

});
$("#kat-o-pic").click(function () {
    $("#kat-o-bio").toggle();

});
$("#frenchie-pic").click(function () {
    $("#frenchie-bio").toggle();

});

$(".other-btn").click(function () {
    $(this).parent().toggle();

});


class Character {
    constructor (name, health, baseAttack, counter, id) {
        this.name = name;
        this.health = health;
        this.baseAttack = baseAttack;
        this.counter = counter;
        this.attackMultiplier = 1;
        this.id = id;
    }
    attack (enemy) {
        const enemyDamage = this.baseAttack * this.attackMultiplier;
        enemy.health -= enemyDamage;
        this.attackMultiplier++;
        this.health -= enemy.counter;
        $("#game-update").html(`
            <p>You attacked ${enemy.name} for ${enemyDamage} hp. </p>
            <p>${enemy.name} fought back and delivered ${enemy.counter} damage </p>
        `);
        $("#game-info").addClass("hidden");
    }
isDed () {
    if (this.health <=0) {
        return true;
    }
}
    static createCharacter(charVar) {
        switch (charVar) {
            case "catTruck": 
                return new Character ("Cat Truck", 150, 5, 20, "catTruck");    
            case "catStevens":
                return new Character ("Cat Stevens", 120, 2, 50, "catStevens");
            case "grumpyCat":
                return new Character ("Grumpy Cat", 70, 10, 15, "grumpyCat");
            case "katO":
                return new Character ("Katherine", 300, 2, 5, "katO");
            case "frenchie":
                return new Character ("Frenchie", 100, 7, 10, "frenchie");
        }
    }
}
let enemy, player;
function pickChar (charVar) {
    $("#character-bank").toggle();
    $("#character-bank-small").toggle();
    player = Character.createCharacter(charVar);
    $("#game-info").text("Choose your first opponent!");
    
}

function pickEnemy (charVar) {
    enemy = Character.createCharacter(charVar)
    $(".char-pic-con-small").css("pointer-events", "none");
    $("#game-info").text("Ready, Fight!");

}
function updateHP () {
    $("#player1-health").html(player.name + " has "+ player.health + " hp");
    $("#npc-health").html(enemy.name + " has " + enemy.health + " hp");
}

$(".choose-char-btn").click(function () {
    char = $(this).attr("char");
    charImg = $($(this).attr("pic"));
    $("#player1").prepend(charImg);
    $(charImg).removeClass();
    $(charImg).addClass("fighter-pic");
    $("#cbs-"+char).toggle();
    pickChar(char);
});

$(".char-pic-con-small").click(function () {
    char = $(this).attr("char");
    charImg = $($(this).attr("pic"));
    $("#npc").prepend(charImg);
    $(charImg).removeClass();
    $(charImg).addClass("fighter-pic");
    $("#cbs-"+char).addClass("active-fighter");
    $("#attack-btn").toggle();
    pickEnemy(char);
    updateHP()
});

$("#attack-btn").click(function () {
    player.attack(enemy);
    if (player.isDed()) {
        $("#game-info").removeClass("hidden");
        $("#attack-btn").toggle();
        $("#game-info").text("You lost.  You're a terrible cat fighter");
        var startOver = $("<button>");
        $("#game-info").append(startOver);
        startOver.html("Try Again?");
        startOver.click( function () {
            location.reload();
        })
    }
    if (enemy.isDed()) {
        $("#game-info").text(`Congratulations, you have defeated ${enemy.name}! Choose your next oponent.`)
        $("#game-info").removeClass("hidden");
        $("#game-update").addClass("hidden");
        $("#npc").html("");
        $("#attack-btn").toggle();
        $("#cbs-"+ enemy.id).addClass("dead-fighter");
        $(".char-pic-con-small").css("pointer-events", "auto");
    }
    updateHP();

});


