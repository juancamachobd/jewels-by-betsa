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

  var dict = window.JBB_I18N || {};

  // Each language is its own page (/ in Spanish, /en/ in English).
  // The page's <html lang> decides which texts are used.
  function getLang(){
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
  }
  function applyTexts(){
    var idx = getLang() === "en" ? 1 : 0;
    function each(attr, fn){
      document.querySelectorAll("[" + attr + "]").forEach(function(el){
        var key = el.getAttribute(attr);
        if(dict[key]) fn(el, dict[key][idx]);
      });
    }
    each("data-i18n", function(el, v){ el.textContent = v; });
    each("data-i18n-ph", function(el, v){ el.setAttribute("placeholder", v); });
    each("data-i18n-alt", function(el, v){ el.setAttribute("alt", v); });
    each("data-i18n-aria", function(el, v){ el.setAttribute("aria-label", v); });
  }
  applyTexts();

  /* ---------- Tarjetas con dos fotos ---------- */
  document.querySelectorAll("[data-duo]").forEach(function(duo){
    var imgs = duo.querySelectorAll("img"), dots = duo.querySelectorAll(".duo-dots button");
    function show(n){
      imgs.forEach(function(im, i){ im.classList.toggle("on", i === n); });
      dots.forEach(function(d, i){ d.setAttribute("aria-pressed", String(i === n)); });
    }
    dots.forEach(function(d, i){ d.addEventListener("click", function(e){ e.stopPropagation(); show(i); }); });
    duo.addEventListener("click", function(){
      var cur = 0; imgs.forEach(function(im, i){ if(im.classList.contains("on")) cur = i; });
      show((cur + 1) % imgs.length);
    });
  });

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
