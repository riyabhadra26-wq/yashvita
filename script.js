
function suggest(){
let f=document.getElementById("food").value.toLowerCase();
let m=document.getElementById("mood").value;
let c=document.getElementById("cuisine").value;
let h=document.getElementById("healthy").checked;
let r="";

if(f.includes("potato")&&f.includes("onion"))
r=c=="Indian"?"🥔 Aloo Pyaz Sabzi":"🥔 Potato Onion Roast";
else if(f.includes("tomato")&&f.includes("bread"))
r="🍅 Tomato Cheese Toast";
else if(f.includes("rice")&&f.includes("vegetable"))
r=c=="Indian"?"🍚 Vegetable Pulao":"🍚 Vegetable Rice Bowl";
else if(f.includes("pasta"))
r="🍝 Vegetable Pasta";
else if(f.includes("paneer"))
r="🧀 Paneer Tikka";
else r=m=="Spicy"?"🌶️ Spicy Vegetable Stir-Fry":"🥗 Mixed Vegetable Bowl";

if(h)r+="<br>💚 Healthy Mode: Less oil, more vegetables!";
r+="<br>👨‍🍳 AI Tip: Add herbs and spices for extra taste.";
document.getElementById("result").innerHTML="<h2>"+r+"</h2>";
}

function nearby(){
window.open("https://www.google.com/maps/search/restaurants+near+me");
}
