let rektonText = document.getElementById("wrapper-rekton") as HTMLDivElement;
let dgText = document.getElementById("wrapper-dg") as HTMLDivElement;
let focusText = document.getElementById("wrapper-focus") as HTMLDivElement;
let rektonCard = document.getElementById("rekton") as HTMLLabelElement;
let focusCard = document.getElementById("focus") as HTMLLabelElement;
let dgCard = document.getElementById("dg") as HTMLLabelElement;

export function showDg(){
    dgCard.addEventListener("click", () => {
        rektonText.style.display = "none";
        focusText.style.display = "none";
        dgText.style.display = "block";
    });
}

export function showFocus(){
    focusCard.addEventListener("click", () => {
        rektonText.style.display = "none";
        dgText.style.display = "none";
        focusText.style.display = "block";
    });
}

export function showRekton(){
    rektonCard.addEventListener("click", () => {
        dgText.style.display = "none";
        focusText.style.display = "none";
        rektonText.style.display = "block";
    });
}