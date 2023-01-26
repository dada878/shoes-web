export default () => {
    setTimeout(() => {
        for (const element of document.querySelectorAll(".animate__animated")) {
            const className = element.attributes.getNamedItem("anime")?.value;
            if (!className) continue;
            element.classList.remove(className as string, "animate__animated");
        }

        const intersectionObserver : IntersectionObserver = new IntersectionObserver(
            (entries) => {
                for (const element of entries) {
                    if (element.isIntersecting) {
                        const className = element.target.attributes.getNamedItem("anime")?.value;
                        element.target.classList.add(className as string, "animate__animated");
                    }
                }
            }
        );
    
        const hiddenAwakeKeyword : string[] = [
            "backIn",
            "lightSpeedIn",
            "fadeIn"
        ];
    
        for (const element of document.querySelectorAll(".anime-scroll")) {
            intersectionObserver.observe(element);
            for (const keyword of hiddenAwakeKeyword) {
                if (element.attributes.getNamedItem("anime")?.value.includes(keyword)) {
                    (element as HTMLElement).style.opacity = "0";
                }
            }
        }
    
        for (const element of document.querySelectorAll(".anime-hover")) {
            element.addEventListener("mouseenter", () => {
                const className : string | undefined = element.attributes.getNamedItem("anime")?.value;
                element.classList.add(className as string, "animate__animated");
            });
            element.addEventListener("mouseleave", () => {
                const className : string = element.attributes.getNamedItem("anime")?.value as string;
                element.classList.remove(className as string, "animate__animated");
            });
        }
    
        for (const element of document.querySelectorAll(".anime-click")) {
            element.addEventListener("click", () => {
                const className = element.attributes.getNamedItem("anime")?.value;
                element.classList.add(className as string, "animate__animated");
            });
            // element.addEventListener("mouseleave", () => {
            //     const className = element.attributes.getNamedItem("anime").value;
            //     element.classList.remove(className, "animate__animated");
            // });
        }
    }, 1);
};