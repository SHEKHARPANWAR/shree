/* =========================
   GLOBAL VARIABLES
========================= */

let currentPageNumber = 1;
const lastTouchPage = 7;  // page1 to page7

/* =========================
   30 PHOTOS + 30 CAPTIONS
========================= */

let photoIndex = 1;
const totalPhotos = 30;

const captions = [
    "The day I started loving you more ❤️",
    "Your smile = my peace 🌸",
    "My favorite human in the world 💕",
    "This moment felt like forever 💫",
    "My safe place 🤍",
    "Your eyes say everything 😌",
    "Still obsessed with this day 🥹",
    "How are you so perfect 😭",
    "Us > Everything 💖",
    "I fall for you everyday 💘",
    "My forever person 💍",
    "That cute little smile 😍",
    "Happiest memory ever 🌷",
    "Our kind of magic ✨",
    "Still can't believe you're mine 🫶",
    "Every second with you matters ⏳",
    "You're my calm in chaos 🌊",
    "Pure happiness right here 💗",
    "This picture holds my heart 💓",
    "My home is wherever you are 🏡",
    "You + Me = Always 💞",
    "I choose you everyday 💌",
    "Still gives me butterflies 🦋",
    "My heart belongs to you ❤️",
    "This was such a special day 💐",
    "The way you look at me 😭",
    "My favorite memory forever 💝",
    "God really made you for me 🌹",
    "I found my person 💫",
    "And I will love you endlessly ♾️"
];

/* =========================
   TAP TO ENTER
========================= */

function startMusic(){
    document.getElementById("bgMusic").play();
    goToPage(2);
}

/* =========================
   PASSWORD CHECK
========================= */

function checkPassword(){

    const correctPassword = "0307";  // Change if needed ❤️
    const input = document.getElementById("passwordInput").value;

    if(input === correctPassword){
        goToPage(3);
    }else{
        document.getElementById("hintMessage").innerText =
        "Wrong password 😏 Hint: Aapki shree ka doosra bday password hai ❤️";
    }
}

/* =========================
   NEXT PAGE (TOUCH + COLLAGE)
========================= */

function nextPage(){

    if(currentPageNumber < lastTouchPage){
        goToPage(currentPageNumber + 1);
    }

    else if(currentPageNumber === lastTouchPage){
        document.getElementById("page7").classList.remove("active");
        document.getElementById("photoSection").classList.add("active");
        currentPageNumber = 8;
        showStickers();
    }

    else if(currentPageNumber === 9){
        document.getElementById("pageCollage").classList.remove("active");
        document.getElementById("pageFinal").classList.add("active");
        currentPageNumber = 10;
        showStickers();
    }
}

/* =========================
   GO TO PAGE
========================= */

function goToPage(pageNum){

    document.getElementById("page"+currentPageNumber)
        .classList.remove("active");

    document.getElementById("page"+pageNum)
        .classList.add("active");

    currentPageNumber = pageNum;
    showStickers();
}

/* =========================
   PHOTO TRANSITION WITH CAPTIONS
========================= */

function nextPhoto(){

    if(photoIndex < totalPhotos){

        photoIndex++;

        document.getElementById("photoDisplay")
            .src = "photo" + photoIndex + ".jpg";

        document.getElementById("photoCaption")
            .innerText = captions[photoIndex - 1];
    }
    else{

        document.getElementById("photoSection")
            .classList.remove("active");

        document.getElementById("pageCollage")
            .classList.add("active");

        currentPageNumber = 9;
        showStickers();
    }
}

/* =========================
   STICKERS (2 PER PAGE)
========================= */

const stickerContainer = document.getElementById("stickerContainer");

function showStickers(){

    stickerContainer.innerHTML = "";

    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    let sticker1 = document.createElement("img");
    sticker1.src = "s"+num1+".png";
    sticker1.className = "sticker";
    sticker1.style.top = "5vh";
    sticker1.style.left = "5vw";

    let sticker2 = document.createElement("img");
    sticker2.src = "s"+num2+".png";
    sticker2.className = "sticker";
    sticker2.style.bottom = "5vh";
    sticker2.style.right = "5vw";

    stickerContainer.appendChild(sticker1);
    stickerContainer.appendChild(sticker2);
}

/* Initial Stickers on load */
showStickers();
/* =========================
   TOUCH PAGE PERSONAL MESSAGE
========================= */

function showMessage(pageNumber){

    const messages = {
        3: "I love you too meri jaan 😌💖",
        4: "I am your baby na 🥹🤍",
        5: "We are one na 💍",
        6: "Hnji mere pyaare se patidev ji ❤️ ",
        7: "I love you endlessly ❤️"
    };

    const messageElement = document.getElementById("msg"+pageNumber);

    /* Agar message already visible hai → next page jao */
    if(messageElement.innerText !== ""){
        nextPage();
        return;
    }

    /* Pehli baar touch karne par message show hoga */
    messageElement.innerText = messages[pageNumber];
}