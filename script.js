const bdayMusic = document.getElementById('bday-music');

// 1. Exact Exploding Transition logic mapping the video reference layout
function openGiftBox() {
    const giftWrapper = document.querySelector('.video-gift-wrap');
    
    // Add exploding scale trigger class matching user video action frame
    giftWrapper.classList.add('active-explode');
    
    // Fire background music verbatim reference
    bdayMusic.play().catch(err => console.log("Audio awaiting gesture click bypass:", err));

    // Dynamic particles burst at click coordinates mimicking the clip particles
    confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.5 },
        colors: ['#00f2fe', '#ffffff', '#00ffb3']
    });

    // Fade and swap view layouts smoothly right after scale explosion
    setTimeout(() => {
        document.getElementById('gift-screen').classList.add('hidden');
        
        const mainDash = document.getElementById('dashboard-screen');
        mainDash.classList.remove('hidden');
        
        // Init scrolling elements & typewriter
        runLogTypewriter();
        buildScratchCanvas();
    }, 600); // 600ms match to perfectly sync the scaling explosion fade
}

// 2. Typewriter Logger Loop
const codeFeedbackStr = "Sir, roz aap humari calls audit karke humein behtar banate hain. Aaj aapke birthday par, pure NIFTEL Voice Process ki taraf se aapki life aur health ke liye 100% Quality Score! Aap hamesha aise hi supportive aur cool aur amazing rahiye. Have a fantastic day ahead! 🚀";
let characterPointer = 0;

function runLogTypewriter() {
    const textTarget = document.getElementById('typewriter-text');
    function appendChar() {
        if (characterPointer < codeFeedbackStr.length) {
            textTarget.innerHTML += codeFeedbackStr.charAt(characterPointer);
            characterPointer++;
            setTimeout(appendChar, 35);
        }
    }
    appendChar();
}

// 3. Scratch Canvas Overlay Generator (Mobile Touch Responsive)
function buildScratchCanvas() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    
    // Fill scratching canvas layer with a sleek metallic matte cyan gradient texture
    const colorGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    colorGrad.addColorStop(0, '#005b66');
    colorGrad.addColorStop(0.5, '#011c21');
    colorGrad.addColorStop(1, '#00b8d4');
    ctx.fillStyle = colorGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px Poppins';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH WITH FINGER', canvas.width / 2, canvas.height / 2 + 4);

    let drawingActive = false;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 26;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    function drawWipe(e) {
        if (!drawingActive) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const xCoord = clientX - rect.left;
        const yCoord = clientY - rect.top;

        ctx.lineTo(xCoord, yCoord);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(xCoord, yCoord);
    }

    canvas.addEventListener('mousedown', (e) => { drawingActive = true; ctx.beginPath(); drawWipe(e); });
    canvas.addEventListener('mousemove', drawWipe);
    canvas.addEventListener('mouseup', () => drawingActive = false);
    
    canvas.addEventListener('touchstart', (e) => { drawingActive = true; ctx.beginPath(); drawWipe(e); });
    canvas.addEventListener('touchmove', drawWipe);
    canvas.addEventListener('touchend', () => drawingActive = false);
}

// 4. Custom Premium Modal Control (Replaces basic native alerts perfectly)
function openPremiumModal() {
    const modalElement = document.getElementById('custom-modal');
    modalElement.classList.remove('hidden-modal');
    
    // Double celebratory fireworks cascade
    confetti({ particleCount: 70, spread: 60, origin: { x: 0.2, y: 0.6 }, colors: ['#00f2fe', '#ffffff'] });
    confetti({ particleCount: 70, spread: 60, origin: { x: 0.8, y: 0.6 }, colors: ['#00f2fe', '#ffffff'] });
}

function closePremiumModal() {
    document.getElementById('custom-modal').classList.add('hidden-modal');
}
