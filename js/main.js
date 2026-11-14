(function(){
  var dict = {
    "nav.home":["Inicio","Home"],
    "nav.collection":["Colección","Collection"],
    "nav.faith":["Nuestra fe","Our Faith"],
    "nav.motion":["Video","Video"],
    "nav.order":["Cómo pedir","How to Order"],
    "nav.contact":["Contacto","Contact"],
    "hero.kicker":["PROVERBIOS 16:3","PROVERBS 16:3"],
    "hero.headline":["Cada cuenta, una oración.","Every bead, a prayer."],
    "hero.sub":["Rosarios, pulseras y collares hechos a mano en Miami — pieza por pieza, con madera, cristal y mucha fe.","Rosaries, bracelets, and necklaces handmade in Miami — one bead at a time, in wood, crystal, and faith."],
    "hero.cta1":["Ver la colección","View the collection"],
    "hero.cta2":["Hacer un pedido","Place an order"],
    "hero.photocaption":["Piezas reales, hechas por Betsa.","Real pieces, handmade by Betsa."],
    "verse.quote":["«Encomienda al Señor tus obras, y tus pensamientos serán afirmados.»","“Commit to the LORD whatever you do, and He will establish your plans.”"],
    "verse.cite":["Proverbios 16:3","Proverbs 16:3"],
    "section.collection.kicker":["LA COLECCIÓN","THE COLLECTION"],
    "section.collection.title":["Cuatro formas de llevar tu fe","Four ways to wear your faith"],
    "section.collection.sub":["Cada pieza se arma a mano, cuenta por cuenta, y ninguna sale exactamente igual a otra.","Every piece is assembled by hand, bead by bead — no two come out exactly alike."],
    "rosarios.title":["Rosarios","Rosaries"],
    "rosarios.desc":["Rosarios tradicionales de madera y cristal, armados a mano para rezar cada misterio.","Traditional wood and crystal rosaries, hand-strung for praying every mystery."],
    "pulseras.title":["Pulseras","Bracelets"],
    "pulseras.desc":["Pulseras de madera con dijes de cruz y flor — para el día a día o para regalar.","Wood bracelets with cross and flower charms — everyday wear or the perfect gift."],
    "denarios.title":["Denarios","Charm Medals"],
    "denarios.desc":["Pulseras con medallas de tus santos favoritos, en madera natural.","Bracelets set with medals of your favorite saints, in natural wood."],
    "cristal.title":["Cristal & Color","Crystal & Color"],
    "cristal.desc":["Pulseras de cristal en tonos rosa y coral, con dijes de corazón y cruz.","Crystal bracelets in blush and coral tones, with heart and cross charms."],
    "collection.cta":["Escríbenos por Instagram para ver disponibilidad.","Message us on Instagram to check availability."],
    "faith.kicker":["NUESTRA FE","OUR FAITH"],
    "faith.title":["Hecho a mano, hecho con fe","Handmade, held in faith"],
    "faith.body1":["Jewels by Betsa nació de una costumbre sencilla: llevar la fe en el bolsillo, en la muñeca, en el cuello. Cada rosario y cada pulsera se arma cuenta por cuenta, a mano, inspirado en Proverbios 16:3.","Jewels by Betsa started with a simple habit: carrying your faith in your pocket, on your wrist, around your neck. Every rosary and bracelet is strung bead by bead, by hand, inspired by Proverbs 16:3."],
    "faith.body2":["No hay dos piezas iguales — y eso está bien. Están hechas para acompañarte, no para ser perfectas.","No two pieces are exactly the same — and that's the point. They're made to accompany you, not to be flawless."],
    "faith.imgcaption":["Un rosario, siempre en el bolsillo derecho.","A rosary, always in the right pocket."],
    "craft.kicker":["EL PROCESO","THE PROCESS"],
    "craft.title":["Cuenta por cuenta","Bead by bead"],
    "craft.body":["Madera natural, cristal facetado, cordón encerado y dijes en acero inoxidable — materiales sencillos, elegidos para durar y para acompañar tu día.","Natural wood, faceted crystal, waxed cord, and stainless steel charms — simple materials, chosen to last and go through the day with you."],
    "material.wood":["Madera","Wood"],
    "material.crystal":["Cristal","Crystal"],
    "material.cord":["Cordón","Cord"],
    "material.silver":["Plata","Silver"],
    "motion.kicker":["EN MOVIMIENTO","IN MOTION"],
    "motion.title":["Míralo en video","See it in motion"],
    "motion.sub":["Clips reales de nuestro Instagram — así se ven las piezas en la vida real.","Real clips from our Instagram — see how the pieces look in real life."],
    "video1.caption":["Terminando los detalles","Finishing touches"],
    "video2.caption":["Cuenta por cuenta","Bead by bead"],
    "video3.caption":["Lista para regalar","Ready to gift"],
    "motion.cta":["Ver más en Instagram","See more on Instagram"],
    "order.kicker":["CÓMO PEDIR","HOW TO ORDER"],
    "order.title":["De tu mensaje a tu muñeca","From your message to your wrist"],
    "step1.title":["Elige tu estilo","Choose your style"],
    "step1.body":["Explora la colección y cuéntanos qué pieza te gustó.","Browse the collection and tell us which piece caught your eye."],
    "step2.title":["Personalízalo","Make it yours"],
    "step2.body":["Elige colores, dije o el santo de tu devoción.","Pick your colors, charm, or patron saint."],
    "step3.title":["Recíbelo con una bendición","Receive it, blessed"],
    "step3.body":["Confirmamos los detalles y tu pieza se hace a mano, solo para ti.","We confirm the details and your piece is handmade, just for you."],
    "order.dm.cta":["Pedir por Instagram DM","Order via Instagram DM"],
    "pay.kicker":["FORMAS DE PAGO","PAYMENT OPTIONS"],
    "pay.title":["Pronto, pagar aquí mismo","Soon, pay right here"],
    "pay.body":["Por ahora, cada pedido se confirma por Instagram. Estamos preparando pagos directos con estas opciones:","For now, every order is confirmed over Instagram. We're getting these direct payment options ready:"],
    "pay.soon":["Próximamente","Coming soon"],
    "pay.card":["Tarjeta","Card"],
    "footer.tag":["Hecho a mano en Miami, con fe.","Handmade in Miami, with faith."],
    "footer.follow":["SÍGUENOS","FOLLOW US"],
    "footer.rights":["Todos los derechos reservados.","All rights reserved."]
  };

  var LANG_KEY = "jbb_lang";
  function getLang(){
    try { return localStorage.getItem(LANG_KEY) || "es"; } catch(e){ return "es"; }
  }
  function setLang(lang){
    var idx = lang === "en" ? 1 : 0;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(dict[key]) el.textContent = dict[key][idx];
    });
    document.getElementById("btnEs").setAttribute("aria-pressed", String(lang==="es"));
    document.getElementById("btnEn").setAttribute("aria-pressed", String(lang==="en"));
    try { document.documentElement.setAttribute("lang", lang); } catch(e){}
    try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
  }
  document.getElementById("btnEs").addEventListener("click", function(){ setLang("es"); });
  document.getElementById("btnEn").addEventListener("click", function(){ setLang("en"); });
  setLang(getLang());

  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", function(){
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){ navLinks.classList.remove("open"); });
  });

  if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    document.querySelectorAll(".video-card video").forEach(function(v){
      v.removeAttribute("autoplay"); v.pause(); v.setAttribute("controls","");
    });
  }

  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, {threshold:.2});
    document.querySelectorAll("[data-reveal]").forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function(el){ el.classList.add("in"); });
  }
})();
