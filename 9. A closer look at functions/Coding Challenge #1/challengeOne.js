const poll = {
    question: "What is your favourite programming language?",
    options: [
        "0: JavaScript",
        "1: Python",
        "2: Rust",
        "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question} ${this.options.join("\n")}`));
        typeof answer === "number" && answer <= answer.length ? this.answers[answer]++ : console.log("No such option!");
        this.displayResults();
        this.displayResults("string");
    },
    displayResults(type = "array") {
        type === "string" ?
            console.log(`The poll results are ${this.answers.join(",")}`)
            : console.log(this.answers);
    }
};

const pollBtn = document.querySelector(".poll");
pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 6] });
poll.displayResults.call({ answers: [5, 2, 6] }, "string");


