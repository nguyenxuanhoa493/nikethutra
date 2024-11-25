const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const shareBtn = document.getElementById("shareBtn");
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const viewPassBtn = document.getElementById("viewPassBtn");
const secondaryModal = document.getElementById("secondaryModal");
const closeSecondaryModalBtn = document.getElementById(
    "closeSecondaryModalBtn"
);
const secondaryModalContent = document.querySelector(
    ".secondary-modal-content"
);

openModalBtn.onclick = function () {
    modal.style.display = "block";
};

closeModalBtn.onclick = function () {
    modalContent.style.animation = "slideDown 0.5s forwards";
    modal.style.animation = "fadeOutDown 0.5s forwards";
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.style.animation = "slideUp 0.5s forwards"; // Reset animation for next opening
        modal.style.animation = "fadeInUp 0.5s forwards"; // Reset animation for next opening
    }, 500);
};

window.onclick = function (event) {
    if (event.target == modal) {
        modalContent.style.animation = "slideDown 0.5s forwards";
        modal.style.animation = "fadeOutDown 0.5s forwards";
        setTimeout(() => {
            modal.style.display = "none";
            modalContent.style.animation = "slideUp 0.5s forwards"; // Reset animation for next opening
            modal.style.animation = "fadeInUp 0.5s forwards"; // Reset animation for next opening
        }, 500);
    }
};

viewPassBtn.onclick = function () {
    secondaryModal.style.display = "block";
};

closeSecondaryModalBtn.onclick = function () {
    secondaryModalContent.style.animation = "slideDown 0.5s forwards";
    secondaryModal.style.animation = "fadeOutDown 0.5s forwards";
    setTimeout(() => {
        secondaryModal.style.display = "none";
        secondaryModalContent.style.animation = "slideUp 0.5s forwards"; // Reset animation for next opening
        secondaryModal.style.animation = "fadeInUp 0.5s forwards"; // Reset animation for next opening
    }, 500);
};

window.onclick = function (event) {
    if (event.target == secondaryModal) {
        secondaryModalContent.style.animation = "slideDown 0.5s forwards";
        secondaryModal.style.animation = "fadeOutDown 0.5s forwards";
        setTimeout(() => {
            secondaryModal.style.display = "none";
            secondaryModalContent.style.animation = "slideUp 0.5s forwards"; // Reset animation for next opening
            secondaryModal.style.animation = "fadeInUp 0.5s forwards"; // Reset animation for next opening
        }, 500);
    }
};

shareBtn.onclick = function () {
    alert("Share functionality is not implemented.");
};
document.getElementById("menu").addEventListener("click", function () {
    var content = document.getElementById("content");
    if (content.getAttribute("label") === "1") {
        content.setAttribute("label", "2");
        content.innerHTML = "<img src='./static/info.png' alt='' />";
        document.getElementById("menu").src = "./static/main/main_05.jpg";
    } else {
        content.setAttribute("label", "1");
        content.innerHTML =
            "<img src='./static/main/main_01.jpg' alt='' /><img src='./static/main/main_02.png' alt='' id='openModalBtn' /><img src='./static/main/main_03.jpg' alt='' />";
        document.getElementById("menu").src = "./static/main/main_04.jpg";
    }
});
