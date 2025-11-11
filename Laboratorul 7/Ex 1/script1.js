const buton = document.getElementById("buton");
const nume= document.getElementById("nume");
const descriere= document.getElementById("descriere");
const educatie= document.getElementById("educatie");
const pasiuni= document.getElementById("pasiuni");
const pagina= document.getElementById("pagina");
buton.addEventListener("click", function(){
	nume.textContent="Inginer Maia Magurean";
	descriere.textContent="Devops Engineer";
	educatie.innerHTML ="<h2>Realizari</h2><p>Absolvent ETTI</p>";
	pasiuni.innerHTML ="<h2>Experiente</h2><p>Diplome concursuri</p>";
	
	poza.src="poza12.jpg";
	poza.alt= "poza alta viata";
	poza.style.opacity ="1";
	poza.style.border ="5px solid black";
	
	
	pagina.style.backgroundColor= "#f2f2f2";
	pagina.style.fontFamily = "Arial, Helvetica, sans-serif";
	
});
const anNastere= document.getElementById("anNastere");
const anCurent= new Date().getFullYear();
const varsta= parseInt(anCurent-anNastere.textContent);
anNastere.onmouseover = function(){
	
	anNastere.textContent = varsta + " ani";
	
}
anNastere.onmouseout = function (){
	anNastere.textContent = anCurent - varsta;
}
const submit = documn.getElementById("submit");
submit.addEventListener("click",function (event){
	const email = document.getElementById("email").value;
	if(email.includes("0")){
		console.log("adresa valida");
	}elseconsole.log("adresa invalida");
}))