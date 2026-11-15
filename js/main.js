(function(){
  /* ------------------------------------------------------------------
     CONTACTO — a dónde llegan los pedidos personalizados.
     whatsapp:     número con código de país, solo dígitos (ej. "13055551234")
     email:        correo de Betsa
     web3formsKey: (opcional) clave gratuita de web3forms.com. Con ella el
                   pedido llega directo al correo sin que el cliente abra
                   su app de correo.
     ------------------------------------------------------------------ */
  var CONTACT = { whatsapp: "18633351937", email: "betsabe.camacho.silva@gmail.com", web3formsKey: "" };

  var dict = {
    "nav.home":["Inicio","Home"],
    "nav.collection":["Colección","Collection"],
    "nav.faith":["Nuestra fe","Our Faith"],
    "nav.motion":["Video","Video"],
    "nav.order":["Cómo pedir","How to Order"],
    "nav.contact":["Contacto","Contact"],
    "nav.custom":["Personaliza","Customize"],
    "order.custom.cta":["Personaliza tu rosario","Customize your rosary"],
    "custom.kicker":["HECHO A TU MEDIDA","MADE FOR YOU"],
    "custom.title":["Personaliza tu rosario","Design your own rosary"],
    "custom.sub":["Cuéntale a Betsa, detalle por detalle, cómo lo quieres. Ella recibe tu pedido y te responde con el precio y el tiempo de entrega.","Tell Betsa, detail by detail, how you want it. She receives your request and replies with the price and delivery time."],
    "custom.type.legend":["¿Qué quieres crear?","What would you like to create?"],
    "custom.type.mano":["Rosario de mano","Hand rosary"],
    "custom.type.mano.note":["Pulsera — una decena para llevar en la muñeca","Bracelet — one decade to wear on your wrist"],
    "custom.type.collar":["Rosario de collar","Necklace rosary"],
    "custom.type.collar.note":["Rosario completo de cinco misterios","Full five-decade rosary"],
    "custom.ave.label":["Cuentas del Ave María","Hail Mary beads"],
    "custom.ave.ph":["Color, material y tamaño. Ej.: madera clara, cristal rosa…","Color, material and size. E.g. light wood, pink crystal…"],
    "custom.padre.label":["Cuentas del Padre Nuestro","Our Father beads"],
    "custom.padre.ph":["¿Iguales o diferentes a las demás? Color y material.","Same as the others or different? Color and material."],
    "custom.cordon.label":["Cordón o hilo","Cord or thread"],
    "custom.cordon.ph":["Ej.: café, negro, vino…","E.g. brown, black, wine…"],
    "custom.cruz.label":["Crucifijo o cruz","Crucifix or cross"],
    "custom.cruz.ph":["Estilo, tamaño y color. Ej.: cruz plateada pequeña.","Style, size and color. E.g. small silver cross."],
    "custom.medalla.label":["Medalla, centro o dije","Medal, center or charm"],
    "custom.medalla.ph":["Santo de tu devoción, la Virgen, corazón, flor…","Your patron saint, Our Lady, a heart, a flower…"],
    "custom.medida.label.mano":["Medida de tu muñeca","Your wrist size"],
    "custom.medida.label.collar":["Largo del rosario","Rosary length"],
    "custom.medida.ph.mano":["Pulgadas, cm, “adulto”, “niña”…","Inches, cm, “adult”, “child”…"],
    "custom.medida.ph.collar":["Tradicional, más corto, más largo…","Traditional, shorter, longer…"],
    "custom.otros.label":["Otros detalles","Other details"],
    "custom.otros.ph":["Nombre o iniciales, la ocasión, si es un regalo, para qué fecha lo necesitas… todo lo que ayude a que quede como lo imaginas.","A name or initials, the occasion, whether it's a gift, the date you need it by… anything that helps it turn out the way you imagine."],
    "custom.nombre.label":["Tu nombre","Your name"],
    "custom.contacto.label":["¿Cómo te contactamos?","How can we reach you?"],
    "custom.contacto.ph":["Teléfono, correo o tu Instagram","Phone, email or your Instagram"],
    "custom.send.wa":["Enviar por WhatsApp","Send via WhatsApp"],
    "custom.send.email":["Enviar por correo","Send by email"],
    "custom.note":["Los pedidos personalizados no tienen precio fijo: Betsa te confirma el precio antes de empezar.","Custom orders have no fixed price: Betsa confirms the price with you before she starts."],
    "custom.err.required":["Escribe tu nombre y cómo contactarte.","Please add your name and how to reach you."],
    "custom.err.empty":["Cuéntanos al menos un detalle de tu rosario.","Tell us at least one detail about your rosary."],
    "custom.err.send":["No se pudo enviar. Inténtalo de nuevo o escríbenos por Instagram.","It couldn't be sent. Please try again or message us on Instagram."],
    "custom.sending":["Enviando…","Sending…"],
    "custom.ok.wa":["Se abrió WhatsApp con tu pedido — solo presiona enviar.","WhatsApp opened with your request — just press send."],
    "custom.ok.mail":["Se abrió tu correo con el pedido — solo presiona enviar.","Your email app opened with the request — just press send."],
    "custom.ok.sent":["¡Pedido enviado! Betsa te escribirá pronto.","Request sent! Betsa will be in touch soon."],
    "hero.kicker":["PROVERBIOS 16:3","PROVERBS 16:3"],
    "hero.headline":["Cada cuenta, una oración.","Every bead, a prayer."],
    "hero.sub":["Rosarios, pulseras y collares hechos a mano — pieza por pieza, con madera, cristal y mucha fe.","Rosaries, bracelets, and necklaces handmade — one bead at a time, in wood, crystal, and faith."],
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
    "footer.tag":["Hecho a mano, con fe.","Handmade, with faith."],
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
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
      var key = el.getAttribute("data-i18n-ph");
      if(dict[key]) el.setAttribute("placeholder", dict[key][idx]);
    });
    document.getElementById("btnEs").setAttribute("aria-pressed", String(lang==="es"));
    document.getElementById("btnEn").setAttribute("aria-pressed", String(lang==="en"));
    try { document.documentElement.setAttribute("lang", lang); } catch(e){}
    try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
  }
  document.getElementById("btnEs").addEventListener("click", function(){ setLang("es"); });
  document.getElementById("btnEn").addEventListener("click", function(){ setLang("en"); });
  setLang(getLang());

  /* ---------- Pedido personalizado ---------- */
  var form = document.getElementById("customForm");
  if(form){
    var statusEl = document.getElementById("formStatus");
    var btnWa = document.getElementById("sendWhatsapp");
    var btnMail = document.getElementById("sendEmail");
    var medidaLabel = document.getElementById("medidaLabel");
    var medidaInput = document.getElementById("cf-medida");
    function t(key){ return dict[key][getLang()==="en" ? 1 : 0]; }
    function val(name){ return (form.elements[name].value || "").trim(); }
    function tipo(){ return form.elements["tipo"].value; }

    if(!CONTACT.whatsapp) btnWa.hidden = true;
    if(!CONTACT.email && !CONTACT.web3formsKey) btnMail.hidden = true;

    function syncTipo(){
      medidaLabel.setAttribute("data-i18n", "custom.medida.label." + tipo());
      medidaInput.setAttribute("data-i18n-ph", "custom.medida.ph." + tipo());
      medidaLabel.textContent = t("custom.medida.label." + tipo());
      medidaInput.setAttribute("placeholder", t("custom.medida.ph." + tipo()));
    }
    form.querySelectorAll('input[name="tipo"]').forEach(function(r){ r.addEventListener("change", syncTipo); });
    syncTipo();

    function setStatus(msg, isError){
      statusEl.textContent = msg;
      statusEl.classList.toggle("error", !!isError);
    }

    // The request is always written in Spanish, for Betsa.
    var DETAILS = [
      ["ave","Cuentas del Ave María"],["padre","Cuentas del Padre Nuestro"],["cordon","Cordón o hilo"],
      ["cruz","Crucifijo o cruz"],["medalla","Medalla, centro o dije"],["medida",null],["otros","Otros detalles"]
    ];
    function tipoNombre(){ return tipo()==="collar" ? "Rosario de collar" : "Rosario de mano (pulsera)"; }
    function collect(){
      var rows = [];
      DETAILS.forEach(function(d){
        var v = val(d[0]);
        if(v) rows.push([d[1] || (tipo()==="collar" ? "Largo del rosario" : "Medida de la muñeca"), v]);
      });
      return rows;
    }
    function validate(){
      var ok = true;
      ["nombre","contacto"].forEach(function(n){
        var el = form.elements[n], bad = !val(n);
        el.classList.toggle("invalid", bad);
        if(bad && ok){ el.focus(); ok = false; }
      });
      if(!ok){ setStatus(t("custom.err.required"), true); return null; }
      var rows = collect();
      if(!rows.length){ setStatus(t("custom.err.empty"), true); form.elements["ave"].focus(); return null; }
      return rows;
    }
    function message(rows){
      var lines = ["PEDIDO PERSONALIZADO — Jewels by Betsa", "", "Tipo: " + tipoNombre(), ""];
      rows.forEach(function(r){ lines.push(r[0] + ": " + r[1]); });
      lines.push("", "Nombre: " + val("nombre"), "Contacto: " + val("contacto"));
      return lines.join("\n");
    }

    btnWa.addEventListener("click", function(){
      var rows = validate(); if(!rows) return;
      window.open("https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(message(rows)), "_blank", "noopener");
      setStatus(t("custom.ok.wa"));
    });

    btnMail.addEventListener("click", function(){
      var rows = validate(); if(!rows) return;
      var subject = "Pedido personalizado: " + tipoNombre() + " — " + val("nombre");
      if(!CONTACT.web3formsKey){
        window.location.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message(rows));
        setStatus(t("custom.ok.mail"));
        return;
      }
      if(form.elements["botcheck"].checked) return;
      var data = { access_key: CONTACT.web3formsKey, subject: subject, from_name: "jewelsbybetsa.com", Tipo: tipoNombre() };
      rows.forEach(function(r){ data[r[0]] = r[1]; });
      data["Nombre"] = val("nombre");
      data["Contacto"] = val("contacto");
      btnMail.disabled = true;
      setStatus(t("custom.sending"));
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).then(function(r){ return r.json(); }).then(function(res){
        if(!res.success) throw new Error("send failed");
        form.reset(); syncTipo();
        setStatus(t("custom.ok.sent"));
      }).catch(function(){
        setStatus(t("custom.err.send"), true);
      }).then(function(){ btnMail.disabled = false; });
    });
  }

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
