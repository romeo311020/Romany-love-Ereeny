const WHATSAPP_NUMBER="201286716976";
const TIKTOK_PROFILE="https://www.tiktok.com/@romany_garges";
const screens={welcome:document.getElementById("welcome"),letter:document.getElementById("letter"),question:document.getElementById("question"),result:document.getElementById("result")};
const openBtn=document.getElementById("openBtn"),continueBtn=document.getElementById("continueBtn"),typing=document.getElementById("typing"),whatsappBtn=document.getElementById("whatsappBtn"),tiktokBtn=document.getElementById("tiktokBtn"),backBtn=document.getElementById("backBtn");
const resultIcon=document.getElementById("resultIcon"),resultEyebrow=document.getElementById("resultEyebrow"),resultTitle=document.getElementById("resultTitle"),resultText=document.getElementById("resultText");
let selectedMessage="";
function showScreen(name){Object.values(screens).forEach(s=>s.classList.remove("active"));screens[name].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
const letter=`أريني...

مش عارف أبدأ كلامي منين،
بس في حاجة جوايا بقالها فترة ونفسي أقولها ليكي.

يمكن الكلام ده ييجي فجأة،
بس أنا مش عايز أفضل مخبيه.

أنا معجب بيكي...
وبصراحة حاسس إني بحبك ❤️

وعشان كده...
كان لازم أقولك بنفسي.`;
openBtn.addEventListener("click",()=>{showScreen("letter");typing.textContent="";continueBtn.classList.add("hidden");let i=0;const timer=setInterval(()=>{typing.textContent+=letter[i];i++;if(i>=letter.length){clearInterval(timer);continueBtn.classList.remove("hidden");}},30);});
continueBtn.addEventListener("click",()=>showScreen("question"));
document.querySelectorAll(".choice").forEach(button=>button.addEventListener("click",()=>{selectedMessage=button.dataset.message;
if(selectedMessage==="وأنا كمان بحبك ❤️"){resultIcon.textContent="🥹❤️";resultEyebrow.textContent="أجمل رد ممكن ❤️";resultTitle.textContent="بجد؟! وأنا كمان فرحت جدًا ❤️";resultText.textContent="مش عارف أقولك إيه غير إنك فرحتيني جدًا... يمكن دي أحلى كلمة كنت مستني أسمعها منك. 🤍";}
else if(selectedMessage==="محتاجة وقت أفكر 🤍"){resultIcon.textContent="🤍";resultEyebrow.textContent="خدي وقتك براحتك";resultTitle.textContent="مفيش أي استعجال 🤍";resultText.textContent="خدي وقتك براحتك، ومفيش أي ضغط عليكي. أهم حاجة تكوني مرتاحة في قرارك.";}
else{resultIcon.textContent="🌷";resultEyebrow.textContent="شكرًا على صراحتك";resultTitle.textContent="تمام، وأنا مقدّر صراحتك";resultText.textContent="شكرًا إنك كنتي صريحة معايا، وربنا يسعدك ويكتبلك الخير دايمًا.";}
showScreen("result");}));
whatsappBtn.addEventListener("click",()=>{if(!selectedMessage)return;window.location.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(selectedMessage)}`;});
tiktokBtn.addEventListener("click",()=>window.open(TIKTOK_PROFILE,"_blank","noopener,noreferrer"));
backBtn.addEventListener("click",()=>showScreen("question"));
