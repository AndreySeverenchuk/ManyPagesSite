!function(){const t=document.getElementById("burger"),e=document.body,o=document.getElementById("mask");t.addEventListener("click",(t=>{e.classList.toggle("sidebar-active"),e.classList.toggle("noScroll")})),o.addEventListener("click",(t=>{e.classList.remove("sidebar-active"),e.classList.remove("noScroll")}))}(),function(){const t=document.querySelectorAll("[data-modal]"),e=document.body;function o(t){t.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{t.classList.remove("show"),e.classList.remove("noScroll")}),200)}t.forEach((t=>{t.addEventListener("click",(t=>{$this=t.currentTarget;let o=$this.getAttribute("data-modal"),s=document.getElementById(o);s.classList.add("show"),e.classList.add("noScroll");let l=s.querySelector(".modal__content");l.addEventListener("click",(t=>{t.stopPropagation()})),setTimeout((function(){l.style.transform="none",l.style.opacity="1"}),200)}))})),document.querySelectorAll(".modal__close").forEach((t=>{t.addEventListener("click",(t=>{$this=t.currentTarget;let e=$this.closest(".modal");setTimeout((function(){modalMaskNo.style.transform="none",modalMaskNo.style.opacity="1"}),1),o(e)}))})),document.querySelectorAll(".modal").forEach((t=>{t.addEventListener("click",(t=>{$this=t.currentTarget,o($this)}))}))}(),document.querySelectorAll("[data-resize]").forEach((t=>{let e=t.offsetHeight;t.addEventListener("input",(t=>{$this=t.target,$this.style.height=e+"px",$this.scrollHeight>e&&($this.style.height=$this.scrollHeight+5+"px")}))}));