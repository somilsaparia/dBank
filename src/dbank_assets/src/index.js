import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
    await updateBalance();
});

document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = document.querySelector("#submit-btn");

    const deposit = parseFloat(document.getElementById("input-amount").value);
    const withdraw = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    if (deposit > 0 ) {
        await dbank.deposit(deposit);
    }
    
    if (withdraw > 0) {
        await dbank.withdraw(withdraw);
    }

    await dbank.compoundInterest();

    await updateBalance();

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled");
});

async function updateBalance () {
    const currentBalance = await dbank.checkBalance();
    document.getElementById("value").innerText = currentBalance.toFixed(2);
};
