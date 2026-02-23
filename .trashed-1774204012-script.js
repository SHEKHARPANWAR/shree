// ================= PASSWORD =================
const correctPassword = "0307";

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const heartHint = document.getElementById("heartHint");
    if(input === correctPassword){
        showSection('touch1');
    } else{
        heartHint.style.display = "block";
        heartHint.innerHTML = "💖 Hint: Shree ka special date 💖";
        setTimeout(()=>{heartHint.style.display="none";},3000);
    }
}

// ================= SECTION HANDLER =================
function showSection(id){
    document.querySelectorAll('.section').forEach(sec=>sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ================= TOUCH IF HEART POPUP =================
function showHeartPopup(message){
    const popup = document.getElementById("heartPopup");
    popup.innerHTML = "💖<br>" + message;
    popup.style.display = "block";
    setTimeout(()=>{popup.style.display = "none";},2500);
}

// ================= TOUCH IF SCREENS =================
const touchMessages = [
    "So you really love Shree huh? 😏💖",
    "Future wife spotted 😌💍",
    "You miss her every single day 😌",
    "Bas karo… itna pyaar healthy nahi hota 😭💖",
    "Haste huye bhot pyaare lgte ho aap.. chalo thodi si smile or badi karwati hu 😌💖"
];

function nextTouch(current, next){
    showHeartPopup(touchMessages[current-1]);
    // Wait until user taps continue to go next
    showSection(next);
}

// ================= PHOTOS SLIDESHOW =================
let captions=[
"Hnji.. aise kya dekh rhe ho 💖",
"I love you so much meri jaan😌",
"Aap ho to sukoon hai ✨",
"Aap ho to har gam dur hai 🤍",
"Dekh rhe ho na mere face ki smile 💫",
"Ye sab aapki he den hai 💕",
"Aap bas mere se shadi kr lo 💍",
"Babu aapki hasi se pyaara kuch nhi hai 🎶",
"I'm falling for you.. daily 🌸",
"Aapka hath pakad ke bacchi ban jati hu mai 🤝",
"My safe place is your arms 🌍",
"With you, everything feels easy ☁️",
"You make ordinary days magical ✨",
"My heart always chose you 🫶",
"You are the comfort I never knew but I needed 💞",
"Aapke aage khuli kitaab si hu mai 📖",
"I love you ♾️",
"Forever looks beautiful with you 💗",
"Chahe kuch bhi ho mai hmesha aapke sath hu 💑",
"Your hug is my therapy 🤍",
"In your arms, I found peace 🕊️",
"I'm smiling just because of you 😊",
"You are my only kohinoor 💎",
"Aap na bas ab kissi de do💕",
"I'm your chotu babu na.. chaand sa 🌙",
"I always get butterflies in my stomach when I think about you 🦋",
"You are my gulaab ka phool🌷",
"You are my forever  💘",
"I just want you to know 💓",
"This is just the beginning of forever 💍✨"
];

let currentPhoto = 0;
const totalPhotos = 30;

function startSlideshow(){
    showSection('photoSection');
    const slideshow = document.getElementById("slideshow");
    const bgMusic = document.getElementById("bgMusic");
    const heartbeat = document.getElementById("heartbeat");

    bgMusic.play();

    for(let i=1;i<=totalPhotos;i++){
        let img = document.createElement("img");
        img.src = "photo"+i+".jpg";
        img.className="asymFrame";
        slideshow.appendChild(img);
    }

    const images = document.querySelectorAll("#slideshow img");
    const captionBox = document.getElementById("caption");
    images[0].style.opacity=1;
    captionBox.innerText = captions[0];
    captionBox.style.opacity=1;

    let interval = setInterval(()=>{
        images[currentPhoto].style.opacity=0;
        currentPhoto++;
        if(currentPhoto<totalPhotos){
            images[currentPhoto].style.opacity=1;
            captionBox.style.opacity=0;
            setTimeout(()=>{captionBox.innerText = captions[currentPhoto]; captionBox.style.opacity=1;},700);
        } else{
            clearInterval(interval);
            // Show heart-shaped collage
            showHeartCollage();
            heartbeat.play();
        }
    },5000);
}

// ================= HEART COLLAGE =================
function showHeartCollage(){
    const slideshow = document.getElementById("slideshow");
    const captionBox = document.getElementById("caption");
    captionBox.style.display="none";
    slideshow.innerHTML=""; // clear photos
    for(let i=1;i<=totalPhotos;i++){
        let img = document.createElement("img");
        img.src="photo"+i+".jpg";
        img.style.width="80px";
        img.style.height="80px";
        img.style.position="absolute";
        // Random heart-shaped placement (simplified)
        let angle = (i/totalPhotos)*2*Math.PI;
        let radius = 150;
        img.style.left = 50 + radius*Math.cos(angle)+"%";
        img.style.top = 50 + radius*Math.sin(angle)+"%";
        img.style.transform="translate(-50%,-50%)";
        slideshow.appendChild(img);
    }
    document.getElementById("heartCollageText").style.display="block";
    setTimeout(()=>{showSection('proposalScreen');},5000);
}

// ================= PROPOSAL =================
function showFinal(){
    showSection('proposalScreen');
    const finalLine = document.getElementById("finalLine");

    // Confetti
    for(let i=0;i<120;i++){
        let confetti=document.createElement("div");
        confetti.className="confetti";
        confetti.style.left=Math.random()*100+"vw";
        const colors=["#ff4da6","#ffffff","#ffc0cb"];
        confetti.style.backgroundColor=colors[Math.floor(Math.random()*3)];
        confetti.style.width=Math.random()*8+4+"px";
        confetti.style.height=Math.random()*12+6+"px";
        document.body.appendChild(confetti);
        setTimeout(()=>{confetti.remove();},4000);
    }

    // Heart burst
    let heart = document.createElement("div");
    heart.className="heartBurst";
    heart.innerHTML="💖";
    document.body.appendChild(heart);

    // Final forever line
    finalLine.innerHTML="From 3rd July 2024 till Infinity ♾️ 💕";
}