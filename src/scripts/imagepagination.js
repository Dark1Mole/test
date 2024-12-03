document.addEventListener('DOMContentLoaded', () => {
    // Subject modal elements
    const subjectModal = document.getElementById("subjectModal");
    const subjectImage = document.getElementById("subjectImage");
    const prevImageBtn = document.getElementById("prevImageBtn");
    const nextImageBtn = document.getElementById("nextImageBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const viewSubjectLink = document.getElementById("viewSubjectLink");

    // Subject Images Array
    const subjectImages = [
        "../assets/1t.png",
        "../assets/2t.png",
        "../assets/aureliaclosca.png", // Replace these with actual image paths
       
    ];

    let currentImageIndex = 0;

    // Check if elements exist before adding event listeners
    if (viewSubjectLink && subjectModal && subjectImage && prevImageBtn && nextImageBtn && closeModalBtn) {
        // Open the subject modal when clicking on the "View Subject" link
        viewSubjectLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the link from reloading the page
            currentImageIndex = 0;
            showImage(currentImageIndex);
            subjectModal.classList.remove('hidden');
        });

        // Close the subject modal
        closeModalBtn.addEventListener('click', () => {
            subjectModal.classList.add('hidden');
        });

        // Show previous image
        prevImageBtn.addEventListener('click', () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                showImage(currentImageIndex);
            }
        });

        // Show next image
        nextImageBtn.addEventListener('click', () => {
            if (currentImageIndex < subjectImages.length - 1) {
                currentImageIndex++;
                showImage(currentImageIndex);
            }
        });

        // Function to display an image based on the current index
        const showImage = (index) => {
            subjectImage.src = subjectImages[index];
            prevImageBtn.disabled = index === 0;
            nextImageBtn.disabled = index === subjectImages.length - 1;
        };
    } else {
        console.error("One or more modal elements are missing from the DOM.");
    }
});
