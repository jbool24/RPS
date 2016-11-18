function game() {
    var options = ["scissor", "paper", "rock"];

    function shoot() {
        var x = Math.floor(Math.random() * 3)
        return options[x];
    }

    function report(hval, cval, wins) {
        let man = document.getElementById("human-choice");
        let mach = document.getElementById("comp-choice");

        man.textContent = hval;
        mach.textContent = cval;
        document.getElementById("winner").textContent = wins;
    }

    var computer = shoot();
    var human = prompt("Choose rock, paper, or scissor.")

    if (computer === human) {
        alert("Looks like a tie");
        report(human, computer, "It's a TIE");
    } else if ((computer === "rock" && human === "paper") || (computer === "paper" && human === "scissor") || (computer === "scissor" && human === "rock")) {
        return report(human, computer, "Man"); // human wins
    } else {
        if (human !== "rock" || human !== "rock" || human !== "rock") {
          return report(human, computer, "Machine wins by default");
        }
        return report(human, computer, "Machine"); //computer wins;
    }
}

game();
