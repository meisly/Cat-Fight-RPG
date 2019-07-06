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
    constructor (name, health, baseAttack, counter) {
        this.name = name;
        this.health = health;
        this.baseAttack = baseAttack;
        this.counter = counter;
        this.attackMultiplier = 1;
    }
    attack (enemy) {
        const enemyDamage = this.baseAttack * this.attackMultiplier;
        enemy.health -= enemyDamage;
        this.attackMultiplier++;
        this.health -= enemy.counter;
        $("game-info").html(`
            <p>You attacked ${enemy.name} for ${enemyDamage} hp. </p>
            <p>${enemy.name} fought back and delivered ${enemy.counter} damage </p>
        `);
        $("player1-health").html(`You have ${this.health} hp`);
        $("npc-health").html(`${enemy.name} has ${enemy.health} hp`)
    }
}

var catTruck = {name: "Cat Truck", health: 150, baseAttack: 5, counter: 20};
var

$("#Cat-truck-btn").click(function () {
    $("#cat-truck-bio").toggle();
