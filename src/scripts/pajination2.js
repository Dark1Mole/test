document.addEventListener("DOMContentLoaded", () => {
    // Selectors
    const modalContainer = document.getElementById("modalContainer");
    const modalImage = document.getElementById("modalImage");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalPrevBtn = document.getElementById("modalPrevBtn");
    const modalNextBtn = document.getElementById("modalNextBtn");
    const viewSubjectLink = document.getElementById("viewSubjectLink");
    const viewSubjectLink2 = document.getElementById("viewSubjectLink2");

    // Carousel Images Array
    const images = [
        "./src/assets/1t.png",
        "./src/assets/2t.png",
    ];

    let currentImageIndex = 0;

    // Open Modal
    const openModal = () => {
        modalContainer.classList.remove("hidden");
        modalContainer.classList.add("flex");
        updateImage();
    };

    // Close Modal
    const closeModal = () => {
        modalContainer.classList.add("hidden");
        modalContainer.classList.remove("flex");
    };

    // Update Image
    const updateImage = () => {
        modalImage.src = images[currentImageIndex];
        modalPrevBtn.disabled = currentImageIndex === 0;
        modalNextBtn.disabled = currentImageIndex === images.length - 1;
    };

    // Open Image in New Tab
    modalImage.addEventListener("click", () => {
        window.open(modalImage.src, "_blank");
    });

    // Event Listeners
    if (viewSubjectLink || viewSubjectLink2) {
        viewSubjectLink.addEventListener("click", (e) => {
            e.preventDefault();
            currentImageIndex = 0; // Start from the first image
            openModal();
        });
        viewSubjectLink2.addEventListener("click", (e) => {
            e.preventDefault();
            currentImageIndex = 0; // Start from the first image
            openModal();
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeModal);
    }

    if (modalPrevBtn) {
        modalPrevBtn.addEventListener("click", () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateImage();
            }
        });
    }

    if (modalNextBtn) {
        modalNextBtn.addEventListener("click", () => {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
                updateImage();
            }
        });
    }

    // Optional: Close modal on background click
    modalContainer.addEventListener("click", (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });
});
