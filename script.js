const whatsappNumber = "201286716976";
const tiktokProfile = "https://www.tiktok.com/@romany_garges";

const screens = {
  welcome: document.getElementById("welcome"),
  letter: document.getElementById("letter"),
  question: document.getElementById("question"),
  result: document.getElementById("result")
};

const openBtn = document.getElementById("openBtn");
const continueBtn = document.getElementById("continueBtn");
const typing = document.getElementById("typing");
const whatsappBtn = document.getElementById("whatsappBtn");
const tiktokBtn = document.getElementById("tiktokBtn");
const backBtn = document.getElementById("backBtn");

const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

let selectedMessage = "";

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const letter = `أريني...

مش عارف أبدأ كلامي منين،
بس في حاجة جوايا بقالها فترة ونفسي أقولها ليكي.

يمكن الكلام ده ييجي فجأة،
بس أنا مش عايز أفضل مخبيه.

أنا معجب بيكي...
وبصراحة حاسس إني بحبك ❤️

وعشان كده...
كان لازم أقولك بنفسي.`;

openBtn.addEventListener("click", () => {
  showScreen("letter");
  typing.textContent = "";
  continueBtn.classList.add("hidden");

  let i = 0;
  const timer = setInterval(() => {
    typing.textContent += letter[i];
    i++;
    if (i >= letter.length) {
      clearInterval(timer);
      continueBtn.classList.remove("hidden");
    }
  }, 32);
});

continueBtn.addEventListener("click", () => {
  showScreen("question");
});

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    selectedMessage = button.dataset.message;

    if (selectedMessage.includes("وأنا كمان")) {
      resultIcon.textContent = "🥹❤️";
      resultTitle.textContent = "بجد؟! ❤️";
      resultText.textContent = "مش عارف أقولك إيه غير إنك فرحتيني جدًا... يمكن دي أجمل كلمة كنت مستني أسمعها منك. 🤍";
    } else if (selectedMessage.includes("محتاجة")) {
      resultIcon.textContent = "🤍";
      resultTitle.textContent = "براحتك خالص 🤍";
      resultText.textContent = "خدي وقتك براحتك، ومفيش أي ضغط عليكي. أهم حاجة تكوني مرتاحة في قرارك.";
    } else {
      resultIcon.textContent = "🌷";
      resultTitle.textContent = "تمام، وأنا مقدّر صراحتك";
      resultText.textContent = "شكرًا إنك كنتي صريحة معايا، وربنا يسعدك ويكتبلك الخير دايمًا.";
    }

    showScreen("result");
  });
});

whatsappBtn.addEventListener("click", () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(selectedMessage)}`;
  window.location.href = url;
});

tiktokBtn.addEventListener("click", () => {
  window.open(tiktokProfile, "_blank", "noopener,noreferrer");
});

backBtn.addEventListener("click", () => {
  showScreen("question");
});
