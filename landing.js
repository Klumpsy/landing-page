
//Bubble creation function 
function createBubble() { 
    const bubbleSection = document.querySelector('section'); 
    const createBubble = document.createElement('span'); 
    let bubbleSize = Math.random() * 60; 

    createBubble.style.width = 10+ bubbleSize + 'px'; 
    createBubble.style.height = 10+ bubbleSize + 'px';
    createBubble.style.left = Math.random() * (innerWidth - 100) + 'px'; 
    createBubble.style.right = Math.random() * (innerWidth - 100) + 'px';
    bubbleSection.appendChild(createBubble); 

    setTimeout(() => { 
        createBubble.remove()
    }, 10000)
}

//Call bubbles every 0.25s; 
setInterval(createBubble, 250);

//Navigation for mobile 

const navSlide = () => { 

const navButton = document.querySelector('.hamburger-button'); 
const navItems = document.querySelector('.nav');
let menuOpen = false; 

navButton.addEventListener('click', () => { 
    
        if(!menuOpen) { 
            navButton.classList.add('menu-open'); 
             menuOpen = true; 
        } else {
            navButton.classList.remove('menu-open');
            menuOpen = false;  
        };
navItems.classList.toggle('hamburger-show');
    });
};

navSlide(); 