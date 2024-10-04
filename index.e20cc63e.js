document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id);var r=e.name.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}).trim();t.textContent=r,e.placeholder=r,e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.e20cc63e.js.map
