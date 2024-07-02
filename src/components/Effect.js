const homeFunc = () => {
    // Function to get a random element from an array
    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    // Function to check if mouse has moved at least 80 pixels
    const moved80px = (x1, y1, x2, y2) => {
        const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return dist >= 80;
    }

    // Throttle function to limit the execution of a function to a specified delay
    function throttle(func, delay) {
        let lastTime = 0;
        return function (...args) {
            const now = new Date().getTime();
            if (now - lastTime >= delay) {
                func(...args);
                lastTime = now;
            }
        };
    }

    let last = { X: 0, Y: 0 };
    const animationArray = ['fall1', 'fall2', 'fall3'];
    const colors = ['black','black', 'grey', 'white'];

    // Throttled mouse move event handler
    const throttledMouseMove = throttle((e) => {
        const scrolledX = window.scrollX || window.pageXOffset;
        const scrolledY = window.scrollY || window.pageYOffset;

        if (moved80px(last.X, last.Y, e.clientX + scrolledX, e.clientY + scrolledY)) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            const randAnimation = getRandomElement(animationArray);
            dot.classList.add(randAnimation);
            const mainContainer = document.querySelector('.main-container');

            const fillColor = getRandomElement(colors);
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="18.3px" width="20px" fill="${fillColor}" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;

            dot.innerHTML = svg;
            mainContainer.appendChild(dot);
            last.X = e.clientX + scrolledX;
            last.Y = e.clientY + scrolledY;
            dot.style.left = `${last.X}px`;
            dot.style.top = `${last.Y}px`;

            setTimeout(() => {
                mainContainer.removeChild(dot);
            }, 1000);
        }
    }, 10); // Adjust the delay as needed

    // Add throttled mousemove event listener
    let doc = document.querySelector(".main-container");
    if (doc) {
        doc.addEventListener("mousemove", throttledMouseMove);
    } else {
        console.error("Main container not found!");
    }

    // Specify the target element
    const targetElement = document.querySelector('.home2'); // Replace with the actual selector of your target element

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Target element is now in the viewport, trigger your animation
                console.log("Animation triggered!");

                // You can disconnect the observer if you only want the animation to run once
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    // Start observing the target element
    if (targetElement) {
        observer.observe(targetElement);
    } else {
        console.error("Target element not found!");
    }
}

export default homeFunc;
