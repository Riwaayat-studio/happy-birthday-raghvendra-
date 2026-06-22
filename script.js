// Audio Element Reference
const music = document.getElementById('bday-music');

// 1. Box Open Logic
function openGift() {
    const giftContainer = document.querySelector('.gift-container');
    
    // Trigger CSS 3D Box Open Animation
    giftContainer.classList.add('opened');
    
    // Play the background music provided by user
    music.play().catch(error => {
        console.log("Audio playback waiting for interaction bypass: ", error);
    });

    // Wait for unboxing animation to finish (1.2 seconds), then reveal Dashboard
    setTimeout(() => {
        document.getElementById('gift-screen').classList.add('hidden');
        
        // Remove display none first, then let it fade in
        const dash = document.getElementById('dashboard-screen');
        dash.classList.remove('hidden');
        
        // Start the Typewriter feedback effect
        startTypewriter();
    }, 1200);
}

// 2. Typewriter Effect for Audit Feedback Log
const feedbackMessage = "Sir, roz aap humari calls audit karke humein behtar banate hain. Aaj aapke birthday par, pure NIFTEL Voice Process ki taraf se aapki life aur health ke liye 100% Quality Score! Aap hamesha aise hi supportive aur cool aur amazing rahiye. Have a fantastic day ahead! 🚀";
let index = 0;

function startTypewriter() {
    const textContainer = document.getElementById('typewriter-text');
    
    function type() {
        if (index < feedbackMessage.length) {
            textContainer.innerHTML += feedbackMessage.charAt(index);
            index++;
            setTimeout(type, 40); // Controls typing speed (40ms per character)
        }
    }
    type();
}

// 3. Grand Finale Button Interaction (Confetti Blast)
function triggerGrandFinale() {
    // Confetti burst from left corner
    confetti({
        particleCount: 80,
        spread: 60,
        origin: { x: 0.1, y: 0.8 },
        colors: ['#00f2fe', '#ffffff', '#00ffaa', '#008ba3']
    });
    
    // Confetti burst from right corner
    confetti({
        particleCount: 80,
        spread: 60,
        origin: { x: 0.9, y: 0.8 },
        colors: ['#00f2fe', '#ffffff', '#00ffaa', '#008ba3']
    });

    // Optional alert popup to confirm acknowledgement
    setTimeout(() => {
        alert("Report Status: 100% Accepted! Happy Birthday Raghvendra Sir! 🎉 - From Mohammad Irshad & Team");
    }, 500);
}

