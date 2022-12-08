const counter = document.querySelector("#counter");
const bts = document.querySelectorAll(".btn");

// initialize the count variable
let count = 0;

bts.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains("increase")) {
            count++;

        } else if (styles.contains("decrease")) {
            count--;

        } else {
            count = 0;
        }

        if (count > 0) {
            counter.style.color = "GREEN";
        }

        if (count < 0) {
            counter.style.color = "RED";
        }

        if (count === 0) {
            counter.style.color = "grey";
        }

        counter.textContent = count;
    });
});
