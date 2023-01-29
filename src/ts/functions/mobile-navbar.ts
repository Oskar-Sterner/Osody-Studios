let showMenuBtn = document.getElementById("mobile-links-btn") as any;
let mobileLinks = document.getElementById("mobile-container-links") as any;
let mobileNavbar = document.getElementById("mobile-nav") as any;

export function showMobileLinks(){
    showMenuBtn.addEventListener("click", () => {
        if(mobileLinks.style.display === "none"){
            mobileLinks.style.display = "grid";
            mobileLinks.style.top = "50px";
            mobileNavbar.style.position = "fixed";
            mobileNavbar.style.width = "100%";
        }
        else{
            mobileLinks.style.display = "none"
            mobileNavbar.style.position = "relative";
        }
    });
}