document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-button");
    const slidingBox = document.getElementById("slidingBox");

    let isAnimating = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (isAnimating) return;
            isAnimating = true;

            const buttonColor = window.getComputedStyle(button).backgroundColor;

            slidingBox.style.transition = "top 1s ease-in-out, opacity 0.5s ease-in-out";
            slidingBox.style.top = "-100px";
            slidingBox.style.opacity = "0";

            setTimeout(() => {
                slidingBox.style.transition = "none";
                slidingBox.style.backgroundColor = "transparent";
                slidingBox.style.borderColor = "transparent";
                
                setTimeout(() => {
                    slidingBox.style.transition = "top 1s ease-in-out, opacity 0.5s ease-in-out, border-color 1s ease-in-out, background-color 1s ease-in-out";
                    slidingBox.style.top = "50%";
                    slidingBox.style.opacity = "1";
                    slidingBox.style.borderColor = buttonColor;
                }, 100);

                setTimeout(() => {
                    slidingBox.style.backgroundColor = buttonColor;
                }, 800);

                setTimeout(() => {
                    slidingBox.style.backgroundColor = "transparent";
                    isAnimating = false;
                }, 2000);
            }, 1000); 
        });
    });
});
