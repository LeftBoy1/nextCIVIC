document.getElementById("profileIcon").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("show");
});


document.addEventListener("click", function (e) {
    if (!e.target.closest(".profile-menu")) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
});
