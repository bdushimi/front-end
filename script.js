function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open")
}

let hamburgerBtn = document.getElementById("hamburgerBtn");
hamburgerBtn.onclick = toggleMenu ;