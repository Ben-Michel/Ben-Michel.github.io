(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const adultBkg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20data-name='Calque%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20391%20400'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20url(%23Dégradé_sans_nom_3);%20}%20.cls-1,%20.cls-2,%20.cls-3,%20.cls-4,%20.cls-5%20{%20fill:%20none;%20stroke-miterlimit:%2010;%20stroke-width:%204px;%20}%20.cls-2%20{%20stroke:%20url(%23Dégradé_sans_nom_3-2);%20}%20.cls-3%20{%20stroke:%20url(%23Dégradé_sans_nom_3-3);%20}%20.cls-4%20{%20stroke:%20url(%23Dégradé_sans_nom_3-4);%20}%20.cls-6%20{%20fill:%20%23f7f2f9;%20stroke-width:%200px;%20}%20.cls-5%20{%20stroke:%20url(%23Dégradé_sans_nom_3-5);%20}%20%3c/style%3e%3clinearGradient%20id='Dégradé_sans_nom_3'%20data-name='Dégradé%20sans%20nom%203'%20x1='35.19'%20y1='254.97'%20x2='143.31'%20y2='145.03'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23ffb995'/%3e%3cstop%20offset='.26'%20stop-color='%23fbffa8'/%3e%3cstop%20offset='.49'%20stop-color='%23a2efff'/%3e%3cstop%20offset='.77'%20stop-color='%23ffaafd'/%3e%3cstop%20offset='1'%20stop-color='%23ffa0a7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='Dégradé_sans_nom_3-2'%20data-name='Dégradé%20sans%20nom%203'%20x1='165.98'%20y1='141.42'%20x2='257.53'%20y2='48.33'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3clinearGradient%20id='Dégradé_sans_nom_3-3'%20data-name='Dégradé%20sans%20nom%203'%20x1='175.15'%20y1='241.37'%20x2='248.91'%20y2='166.37'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3clinearGradient%20id='Dégradé_sans_nom_3-4'%20data-name='Dégradé%20sans%20nom%203'%20x1='276.15'%20y1='241.37'%20x2='349.91'%20y2='166.37'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3clinearGradient%20id='Dégradé_sans_nom_3-5'%20data-name='Dégradé%20sans%20nom%203'%20x1='224.15'%20y1='339.37'%20x2='297.91'%20y2='264.37'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3c/defs%3e%3cg%3e%3cpath%20class='cls-6'%20d='M22.5,201.63c0-54.81,11.94-66.75,66.75-66.75,54.81,0,66.75,11.94,66.75,66.75v-3.26c0,54.81-11.94,66.75-66.75,66.75-54.81,0-66.75-11.94-66.75-66.75'/%3e%3cpath%20class='cls-1'%20d='M22.5,201.63c0-54.81,11.94-66.75,66.75-66.75,54.81,0,66.75,11.94,66.75,66.75v-3.26c0,54.81-11.94,66.75-66.75,66.75-54.81,0-66.75-11.94-66.75-66.75'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='M155.51,96.24c0-46.18,10.06-56.24,56.24-56.24,46.18,0,56.24,10.06,56.24,56.24v-2.74c0,46.18-10.06,56.24-56.24,56.24-46.18,0-56.24-10.06-56.24-56.24'/%3e%3cpath%20class='cls-2'%20d='M155.51,96.24c0-46.18,10.06-56.24,56.24-56.24,46.18,0,56.24,10.06,56.24,56.24v-2.74c0,46.18-10.06,56.24-56.24,56.24-46.18,0-56.24-10.06-56.24-56.24'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='M167.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3cpath%20class='cls-3'%20d='M167.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='M268.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3cpath%20class='cls-4'%20d='M268.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-6'%20d='M216.06,302.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3cpath%20class='cls-5'%20d='M216.06,302.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3c/g%3e%3c/svg%3e";
const teenBkg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20data-name='Calque%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20391%20400'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20url(%23Dégradé_sans_nom_3);%20}%20.cls-1,%20.cls-2,%20.cls-3,%20.cls-4%20{%20fill:%20none;%20stroke-miterlimit:%2010;%20stroke-width:%204px;%20}%20.cls-2%20{%20stroke:%20url(%23Dégradé_sans_nom_3-2);%20}%20.cls-3%20{%20stroke:%20url(%23Dégradé_sans_nom_3-3);%20}%20.cls-4%20{%20stroke:%20url(%23Dégradé_sans_nom_3-4);%20}%20.cls-5%20{%20fill:%20%23f7f2f9;%20stroke-width:%200px;%20}%20%3c/style%3e%3clinearGradient%20id='Dégradé_sans_nom_3'%20data-name='Dégradé%20sans%20nom%203'%20x1='35.19'%20y1='254.97'%20x2='143.31'%20y2='145.03'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23ffb995'/%3e%3cstop%20offset='.26'%20stop-color='%23fbffa8'/%3e%3cstop%20offset='.49'%20stop-color='%23a2efff'/%3e%3cstop%20offset='.77'%20stop-color='%23ffaafd'/%3e%3cstop%20offset='1'%20stop-color='%23ffa0a7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='Dégradé_sans_nom_3-2'%20data-name='Dégradé%20sans%20nom%203'%20x1='165.98'%20y1='141.42'%20x2='257.53'%20y2='48.33'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3clinearGradient%20id='Dégradé_sans_nom_3-3'%20data-name='Dégradé%20sans%20nom%203'%20x1='175.15'%20y1='241.37'%20x2='248.91'%20y2='166.37'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3clinearGradient%20id='Dégradé_sans_nom_3-4'%20data-name='Dégradé%20sans%20nom%203'%20x1='276.15'%20y1='241.37'%20x2='349.91'%20y2='166.37'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3c/defs%3e%3cg%3e%3cpath%20class='cls-5'%20d='M22.5,201.63c0-54.81,11.94-66.75,66.75-66.75,54.81,0,66.75,11.94,66.75,66.75v-3.26c0,54.81-11.94,66.75-66.75,66.75-54.81,0-66.75-11.94-66.75-66.75'/%3e%3cpath%20class='cls-1'%20d='M22.5,201.63c0-54.81,11.94-66.75,66.75-66.75,54.81,0,66.75,11.94,66.75,66.75v-3.26c0,54.81-11.94,66.75-66.75,66.75-54.81,0-66.75-11.94-66.75-66.75'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-5'%20d='M155.51,96.24c0-46.18,10.06-56.24,56.24-56.24,46.18,0,56.24,10.06,56.24,56.24v-2.74c0,46.18-10.06,56.24-56.24,56.24-46.18,0-56.24-10.06-56.24-56.24'/%3e%3cpath%20class='cls-2'%20d='M155.51,96.24c0-46.18,10.06-56.24,56.24-56.24,46.18,0,56.24,10.06,56.24,56.24v-2.74c0,46.18-10.06,56.24-56.24,56.24-46.18,0-56.24-10.06-56.24-56.24'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-5'%20d='M167.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3cpath%20class='cls-3'%20d='M167.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-5'%20d='M268.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3cpath%20class='cls-4'%20d='M268.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3c/g%3e%3c/svg%3e";
const childBkg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20data-name='Calque%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20391%20400'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20url(%23Dégradé_sans_nom_3);%20}%20.cls-1,%20.cls-2%20{%20fill:%20none;%20stroke-miterlimit:%2010;%20stroke-width:%204px;%20}%20.cls-2%20{%20stroke:%20url(%23Dégradé_sans_nom_3-2);%20}%20.cls-3%20{%20fill:%20%23f7f2f9;%20stroke-width:%200px;%20}%20%3c/style%3e%3clinearGradient%20id='Dégradé_sans_nom_3'%20data-name='Dégradé%20sans%20nom%203'%20x1='35.19'%20y1='254.97'%20x2='143.31'%20y2='145.03'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23ffb995'/%3e%3cstop%20offset='.26'%20stop-color='%23fbffa8'/%3e%3cstop%20offset='.49'%20stop-color='%23a2efff'/%3e%3cstop%20offset='.77'%20stop-color='%23ffaafd'/%3e%3cstop%20offset='1'%20stop-color='%23ffa0a7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='Dégradé_sans_nom_3-2'%20data-name='Dégradé%20sans%20nom%203'%20x1='175.15'%20y1='241.37'%20x2='248.91'%20y2='166.37'%20xlink:href='%23Dégradé_sans_nom_3'/%3e%3c/defs%3e%3cg%3e%3cpath%20class='cls-3'%20d='M22.5,201.63c0-54.81,11.94-66.75,66.75-66.75,54.81,0,66.75,11.94,66.75,66.75v-3.26c0,54.81-11.94,66.75-66.75,66.75-54.81,0-66.75-11.94-66.75-66.75'/%3e%3cpath%20class='cls-1'%20d='M22.5,201.63c0-54.81,11.94-66.75,66.75-66.75,54.81,0,66.75,11.94,66.75,66.75v-3.26c0,54.81-11.94,66.75-66.75,66.75-54.81,0-66.75-11.94-66.75-66.75'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-3'%20d='M167.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3cpath%20class='cls-2'%20d='M167.06,204.97c0-36.92,8.05-44.97,44.97-44.97,36.92,0,44.97,8.05,44.97,44.97v-2.19c0,36.92-8.05,44.97-44.97,44.97-36.92,0-44.97-8.05-44.97-44.97'/%3e%3c/g%3e%3c/svg%3e";
const ASPIRATIONS = [{ "weight": "50", "category_name": "Créativité", "aspiration_name": "Prodige artistique", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "10", "category_name": "Facultés mentales", "aspiration_name": "Petit génie", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "50", "category_name": "Facultés motrices", "aspiration_name": "Enfant turbulent", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "10", "category_name": "Facultés sociales", "aspiration_name": "Enfant très sociable", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "50", "category_name": "Polyvalence", "aspiration_name": "Capitaine de la récré", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "50", "category_name": "Polyvalence", "aspiration_name": "Génie créatif", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "50", "category_name": "Polyvalence", "aspiration_name": "Pro des soirées pyjamas", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "50", "category_name": "Polyvalence", "aspiration_name": "Corps et esprit", "aspiration_trait": "0", "age": "Enfant", "pack_name": "Base" }, { "weight": "50", "category_name": "Ado", "aspiration_name": "Vivre à fond", "aspiration_trait": "Sims à qui on peut s'identifier", "age": "Ado", "pack_name": "Base" }, { "weight": "10", "category_name": "Ado", "aspiration_name": "Icône admirée", "aspiration_trait": "Sims à qui on peut s'identifier", "age": "Ado", "pack_name": "Base" }, { "weight": "50", "category_name": "Ado", "aspiration_name": "Ado qui en fait des tonnes", "aspiration_trait": "Sims à qui on peut s'identifier", "age": "Ado", "pack_name": "Base" }, { "weight": "50", "category_name": "Ado", "aspiration_name": "Déterminé", "aspiration_trait": "Sims à qui on peut s'identifier", "age": "Ado", "pack_name": "Base" }, { "weight": "10", "category_name": "Amour", "aspiration_name": "Romantique en série", "aspiration_trait": "Séduisant", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Amour", "aspiration_name": "Ame sœur", "aspiration_trait": "Séduisant", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Animal", "aspiration_name": "Ami des animaux", "aspiration_trait": "Affection animale", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Bien-être", "aspiration_name": "Spécialiste des soins pour soi", "aspiration_trait": "Abonnement au spa", "age": "Ado,Adulte", "pack_name": "Détente au spa" }, { "weight": "50", "category_name": "Bien-être", "aspiration_name": "Paix intérieure", "aspiration_trait": "Abonnement au spa", "age": "Ado,Adulte", "pack_name": "Détente au spa" }, { "weight": "50", "category_name": "Bien-être", "aspiration_name": "Gourou zen", "aspiration_trait": "Abonnement au spa", "age": "Ado,Adulte", "pack_name": "Détente au spa" }, { "weight": "50", "category_name": "Connaissance", "aspiration_name": "Etudes universitaires", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "A la fac" }, { "weight": "50", "category_name": "Connaissance", "aspiration_name": "Génie de l'informatique", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Connaissance", "aspiration_name": "Cerveau exceptionnel", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Connaissance", "aspiration_name": "Sorts et sorcellerie", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "Monde magique" }, { "weight": "50", "category_name": "Connaissance", "aspiration_name": "Maître vampire", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "Vampires" }, { "weight": "10", "category_name": "Connaissance", "aspiration_name": "Sim aux multiples talents", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Connaissance", "aspiration_name": "Erudit en archéologie", "aspiration_trait": "Apprend vite", "age": "Ado,Adulte", "pack_name": "Dans la jungle" }, { "weight": "50", "category_name": "Créativité", "aspiration_name": "Génie de la musique", "aspiration_trait": "Muse", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Créativité", "aspiration_name": "Créateur magistal", "aspiration_trait": "Muse", "age": "Ado,Adulte", "pack_name": "Ecologie" }, { "weight": "50", "category_name": "Créativité", "aspiration_name": "Grand acteur", "aspiration_trait": "Muse", "age": "Ado,Adulte", "pack_name": "Heure de gloire" }, { "weight": "50", "category_name": "Créativité", "aspiration_name": "Peintre extraordinaire", "aspiration_trait": "Muse", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Créativité", "aspiration_name": "Auteur de best-sellers", "aspiration_trait": "Muse", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Déviance", "aspiration_name": "Chercheur de secrets", "aspiration_trait": "Ignoble", "age": "Ado,Adulte", "pack_name": "A louer" }, { "weight": "50", "category_name": "Déviance", "aspiration_name": "Vilain Valentin", "aspiration_trait": "Ignoble", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Déviance", "aspiration_name": "Enemi public", "aspiration_trait": "Ignoble", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Déviance", "aspiration_name": "Roi des bêtises", "aspiration_trait": "Ignoble", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Famille", "aspiration_name": "Grande famille heureuse", "aspiration_trait": "Très famille", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Famille", "aspiration_name": "Famille de vampires", "aspiration_trait": "Très famille", "age": "Ado,Adulte", "pack_name": "Vampires" }, { "weight": "10", "category_name": "Famille", "aspiration_name": "Superparent", "aspiration_trait": "Très famille", "age": "Ado,Adulte", "pack_name": "Etre parents" }, { "weight": "10", "category_name": "Famille", "aspiration_name": "Descendance qui réussit", "aspiration_trait": "Très famille", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Fortune", "aspiration_name": "Propriétaire cinq étoiles", "aspiration_trait": "Doué en affaires", "age": "Ado,Adulte", "pack_name": "A louer" }, { "weight": "50", "category_name": "Fortune", "aspiration_name": "Incroyablement riche", "aspiration_trait": "Doué en affaires", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Fortune", "aspiration_name": "Baron de l'immobilier", "aspiration_trait": "Doué en affaires", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Lieu", "aspiration_name": "Vie à la plage", "aspiration_trait": "Attaché à son quartier", "age": "Ado,Adulte", "pack_name": "Iles paradisiaques" }, { "weight": "50", "category_name": "Lieu", "aspiration_name": "Spécialiste de Tomarang", "aspiration_trait": "Attaché à son quartier", "age": "Ado,Adulte", "pack_name": "A louer" }, { "weight": "50", "category_name": "Lieu", "aspiration_name": "Le mystère de Strangerville", "aspiration_trait": "Attaché à son quartier", "age": "Ado,Adulte", "pack_name": "Strangerville" }, { "weight": "50", "category_name": "Lieu", "aspiration_name": "Visiteur de Mont Komorebi", "aspiration_trait": "Attaché à son quartier", "age": "Ado,Adulte", "pack_name": "Escapade enneigée" }, { "weight": "50", "category_name": "Lieu", "aspiration_name": "Sim originaire de la ville", "aspiration_trait": "Attaché à son quartier", "age": "Ado,Adulte", "pack_name": "Vie citadine" }, { "weight": "50", "category_name": "Lycanthropie", "aspiration_name": "Initié à la lycanthropie", "aspiration_trait": "Confident lunaire", "age": "Ado,Adulte", "pack_name": "Loups-garous" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Explorateur de la jungle", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Dans la jungle" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Eco-innovateur", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Ecologie" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Botaniste indépendant", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Pro de la pêche", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Conservateur", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Gardien de la campagne", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Vie à la campagne" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Amateur de plein air", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Destination nature" }, { "weight": "50", "category_name": "Nature", "aspiration_name": "Préparateur de potions", "aspiration_trait": "Collectionneur", "age": "Ado,Adulte", "pack_name": "Monde magique" }, { "weight": "50", "category_name": "Nourriture", "aspiration_name": "Grand chef", "aspiration_trait": "Essence de saveur", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Nourriture", "aspiration_name": "Grand mixologue", "aspiration_trait": "Essence de saveur", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Popularité", "aspiration_name": "Fêtard", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Popularité", "aspiration_name": "Bon vampire", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Vampires" }, { "weight": "10", "category_name": "Popularité", "aspiration_name": "Chef de la bande", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Vivre ensemble" }, { "weight": "50", "category_name": "Popularité", "aspiration_name": "As des blagues", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Popularité", "aspiration_name": "Ami de tous", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Popularité", "aspiration_name": "Habitant averti", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "A louer" }, { "weight": "50", "category_name": "Popularité", "aspiration_name": "Confident du quartier", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Popularité", "aspiration_name": "Célébrité de renommée mondiale", "aspiration_trait": "Sociable", "age": "Ado,Adulte", "pack_name": "Heure de gloire" }, { "weight": "50", "category_name": "Sport", "aspiration_name": "Passionné de sports extrêmes", "aspiration_trait": "Bon métabolisme", "age": "Ado,Adulte", "pack_name": "Escapade enneigée" }, { "weight": "50", "category_name": "Sport", "aspiration_name": "Culturiste", "aspiration_trait": "Bon métabolisme", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Star Wars", "aspiration_name": "Espoir ou Ordre", "aspiration_trait": "Voyageur préparé", "age": "Ado,Adulte", "pack_name": "Star Wars" }, { "weight": "50", "category_name": "Star Wars", "aspiration_name": "Corsaire galactique", "aspiration_trait": "Voyageur préparé", "age": "Ado,Adulte", "pack_name": "Star Wars" }, { "weight": "50", "category_name": "Nourriture", "aspiration_name": "Expert en fabrication de nectar", "aspiration_trait": "Essence de saveur", "age": "Ado,Adulte", "pack_name": "Au ranch" }, { "weight": "50", "category_name": "Sport", "aspiration_name": "Cavalier de championnat", "aspiration_trait": "Bon métabolisme", "age": "Ado,Adulte", "pack_name": "Au ranch" }];
const TRAITS = [{ "weight": "50", "category_name": "Emotionnel", "trait_name": "Créatif", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Délicat", "incompatibility": "Adore la nature,Crasseux,Freegan,Glouton", "age": "Enfant,Ado,Adulte", "pack_name": "Destination nature" }, { "weight": "10", "category_name": "Emotionnel", "trait_name": "Génie", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Imprévisible", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Joyeux", "incompatibility": "Morose,Sang chaud", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Morose", "incompatibility": "Joyeux,Sang chaud", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Pitre", "incompatibility": "Snob", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Sang chaud", "incompatibility": "Joyeux,Morose", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Sûr de lui", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Adore la nature", "incompatibility": "Délicat", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Aime la musique", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Amateur d'art", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Disciple du recyclage", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Ecologie" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Geek", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Rat de bibliothèque", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Actif", "incompatibility": "Paresseux", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Aventureux", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Escapade enneigée" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Crasseux", "incompatibility": "Soigné,Bien élevé,Délicat", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Enfant de l'océan", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Iles paradisiaques" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Enfant des îles", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Iles paradisiaques" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Enfant du village", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "A louer" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Glouton", "incompatibility": "Gourmand,Délicat", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Hyper-écolo", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Ecologie" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Intolérant au lactose", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Vie à la campagne" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Kleptomane", "incompatibility": "Bienveillant", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Paresseux", "incompatibility": "Actif,Ambitieux,Aventureux,Fabricant,Soigné", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Perfectionniste", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Style de vie", "trait_name": "Soigné", "incompatibility": "Crasseux,Paresseux", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Végétarien", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Vie citadine" }, { "weight": "50", "category_name": "Social", "trait_name": "Adore les animaux", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Vie à la campagne" }, { "weight": "50", "category_name": "Social", "trait_name": "Amoureux des chats", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Chiens et chats" }, { "weight": "50", "category_name": "Social", "trait_name": "Amoureux des chiens", "incompatibility": "", "age": "Enfant,Ado,Adulte", "pack_name": "Chiens et chats" }, { "weight": "50", "category_name": "Social", "trait_name": "Bien élevé", "incompatibility": "Crasseux,Méchant", "age": "Enfant,Ado,Adulte", "pack_name": "Escapade enneigée" }, { "weight": "50", "category_name": "Social", "trait_name": "Bienveillant", "incompatibility": "Malveillant,Kleptomane,Méchant", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Social", "trait_name": "Extraverti", "incompatibility": "Solitaire,Paranoïaque", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Initié", "incompatibility": "Solitaire", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Malveillant", "incompatibility": "Immature,Bienveillant", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Méchant", "incompatibility": "Bienveillant,Bien élevé", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Solitaire", "incompatibility": "Extraverti,Initié", "age": "Enfant,Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Exigeant", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Détente au spa" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Froid", "incompatibility": "Romantique", "age": "Ado,Adulte", "pack_name": "Vie citadine" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Immature", "incompatibility": "Snob,Déteste les enfants,Malveillant", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Maladroit", "incompatibility": "Fabricant", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Paranoïaque", "incompatibility": "Extraverti", "age": "Ado,Adulte", "pack_name": "Strangerville" }, { "weight": "10", "category_name": "Emotionnel", "trait_name": "Romantique", "incompatibility": "Froid", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Fabricant", "incompatibility": "Maladroit,Paresseux", "age": "Ado,Adulte", "pack_name": "Ecologie" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Gourmand", "incompatibility": "Freegan,Glouton", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Loisir", "trait_name": "Machine à danser", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Vivre ensemble" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Elève brillant", "incompatibility": "Paresseux", "age": "Ado,Adulte", "pack_name": "Année lycée" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Freegan", "incompatibility": "Ambitieux,Délicat,Gourmand,Matérialiste,Snob", "age": "Ado,Adulte", "pack_name": "Ecologie" }, { "weight": "50", "category_name": "Style de vie", "trait_name": "Matérialiste", "incompatibility": "Freegan", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Déteste les enfants", "incompatibility": "Immature,Proche de sa famille", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Egocentrique", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Heure de gloire" }, { "weight": "50", "category_name": "Social", "trait_name": "Fidèle", "incompatibility": "Réticent à s'engager", "age": "Ado,Adulte", "pack_name": "Chiens et chats" }, { "weight": "50", "category_name": "Social", "trait_name": "Fêtard", "incompatibility": "Mal à l'aise en société,Morose,Solitaire", "age": "Ado,Adulte", "pack_name": "Année lycée" }, { "weight": "10", "category_name": "Social", "trait_name": "Généreux", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Gênant", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Indiscret", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "A louer" }, { "weight": "50", "category_name": "Social", "trait_name": "Jaloux", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Mal à l'aise en société", "incompatibility": "Extraverti,Fêtard", "age": "Ado,Adulte", "pack_name": "Année lycée" }, { "weight": "50", "category_name": "Social", "trait_name": "Membre d'un groupe de potes", "incompatibility": "", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Snob", "incompatibility": "Pitre,Freegan,Immature", "age": "Ado,Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Emotionnel", "trait_name": "Ambitieux", "incompatibility": "Paresseux,Freegan", "age": "Adulte", "pack_name": "Base" }, { "weight": "10", "category_name": "Social", "trait_name": "Proche de sa famille", "incompatibility": "Déteste les enfants,Réticent à s'engager", "age": "Adulte", "pack_name": "Base" }, { "weight": "50", "category_name": "Social", "trait_name": "Réticent à s'engager", "incompatibility": "Proche de sa famille,Fidèle", "age": "Adulte", "pack_name": "Base" }];
const POSITIONS = {
  "aspiration": { "X": 196, "Y": 202, "size": 80 },
  "aspiration_trait": { "X": 316, "Y": 96, "size": 80 },
  "trait_1": { "X": 316, "Y": 204, "size": 66 },
  "trait_2": { "X": 366, "Y": 302, "size": 66 },
  "trait_3": { "X": 416, "Y": 204, "size": 66 }
};
const LAYOUT_IMG = {
  Adulte: adultBkg,
  Ado: teenBkg,
  Enfant: childBkg
};
const packlist = [];
function buildPackList(ASPIRATIONS2, TRAITS2) {
  for (const aspiration of ASPIRATIONS2) {
    if (!packlist.includes(aspiration.pack_name)) {
      packlist.push(aspiration.pack_name);
    }
  }
  for (const trait of TRAITS2) {
    if (!packlist.includes(trait.pack_name)) {
      packlist.push(trait.pack_name);
    }
  }
  const packs2 = [];
  for (const pack2 of packlist) {
    packs2.push({ name: pack2, actif: true });
  }
  return packs2;
}
function generateAspiration(packs2, aspirations2, age2) {
  const aspWlist = buildAspWList(packs2, aspirations2, age2);
  const drawValue = draw(aspWlist.slice(-1)[0].weight);
  for (const asp of aspWlist) {
    if (asp.weight > drawValue) {
      return asp;
    }
  }
}
function generateTrait(packs2, traits2, age2) {
  const traitWlist = buildTraitWList(packs2, traits2, age2);
  const drawValue = draw(traitWlist.slice(-1)[0].weight);
  for (const trait of traitWlist) {
    if (trait.weight > drawValue) {
      return trait;
    }
  }
}
function buildAspWList(packs2, aspirations2, age2) {
  let weightIndex = 0;
  const aspirationsWeightedList = [];
  for (const aspiration of aspirations2) {
    if (aspiration.age.includes(age2) && packs2.includes(aspiration.pack_name)) {
      weightIndex += parseInt(aspiration.weight);
      const value = {
        name: aspiration.aspiration_name,
        weight: weightIndex,
        trait: aspiration.aspiration_trait
      };
      aspirationsWeightedList.push(value);
    }
  }
  return aspirationsWeightedList;
}
function draw(maxWeight) {
  return Math.floor(Math.random() * maxWeight);
}
function buildTraitWList(packs2, traits2, age2) {
  let weightindex = 0;
  const traitWeightedList = [];
  for (const trait of traits2) {
    if (trait.age.includes(age2) && packs2.includes(trait.pack_name)) {
      weightindex += parseInt(trait.weight);
      const value = {
        name: trait.trait_name,
        weight: weightindex,
        incompatibility: trait.incompatibility
      };
      traitWeightedList.push(value);
    }
  }
  return traitWeightedList;
}
const packs = buildPackList(ASPIRATIONS, TRAITS);
const BKG_IMG = document.getElementById("DisplayContainerBackground");
const PACK_LIST = document.getElementById("packsAreaList");
const GENERATE_BUTTON = document.getElementById("generate");
let age = "Adulte";
for (const pack of packs) {
  const packElmt = `<input type="checkbox" id="${pack.name}_Checkbox" class="radioNone packCheckbox" checked><label class="packCheckboxLabel" for="${pack.name}_Checkbox">${pack.name}</label>`;
  const packComponent = document.createElement("div");
  packComponent.setAttribute("class", "packComponent");
  packComponent.innerHTML = packElmt;
  packComponent.addEventListener("click", (e) => {
    const elmt = e.target;
    if (elmt.tagName == "INPUT") {
      return;
    }
    pack.actif = !pack.actif;
    console.log(packs);
  });
  PACK_LIST.appendChild(packComponent);
}
const ageSelectors = document.querySelectorAll("input[name=ageSelector]");
for (const ageSelector of ageSelectors) {
  ageSelector.addEventListener("click", (e) => {
    if (e.target) {
      const input = e.target;
      updateAge(input.id);
    }
  });
}
function actifPacks(packs2) {
  const actifs = [];
  for (const pack of packs2) {
    if (pack.actif) {
      actifs.push(pack.name);
    }
  }
  return actifs;
}
GENERATE_BUTTON.addEventListener("click", () => {
  const asp = generateAspiration(actifPacks(packs), ASPIRATIONS, age);
  const traits = [];
  if (age == "Adulte") {
    while (traits.length < 3) {
      const newTrait = generateTrait(actifPacks(packs), TRAITS, age);
      let add = checkIncompatibility(traits, newTrait);
      if (newTrait && add) {
        traits.push(newTrait);
      }
    }
  }
  if (age == "Ado") {
    while (traits.length < 2) {
      const newTrait = generateTrait(actifPacks(packs), TRAITS, age);
      let add = checkIncompatibility(traits, newTrait);
      if (newTrait && add) {
        traits.push(newTrait);
      }
    }
  }
  if (age == "Enfant") {
    while (traits.length < 1) {
      const newTrait = generateTrait(actifPacks(packs), TRAITS, age);
      let add = checkIncompatibility(traits, newTrait);
      if (newTrait && add) {
        traits.push(newTrait);
      }
    }
  }
  showDraw(asp.name, asp.trait, traits);
});
setBackground(LAYOUT_IMG.Adulte, BKG_IMG);
function checkIncompatibility(traits, newTrait) {
  let add = true;
  for (const trait2 of traits) {
    if (newTrait) {
      if (trait2.name == newTrait.name) {
        add = false;
        console.log(`Duplicate :`);
        console.log(newTrait);
      }
      if (trait2.incompatibility.includes(newTrait.name)) {
        add = false;
        console.log(`incompatible :`);
        console.log(newTrait);
      }
    }
  }
  return add;
}
function updateAge(id) {
  removeImages();
  switch (id) {
    case "adultSelector":
      if (BKG_IMG != null) {
        setBackground(LAYOUT_IMG.Adulte, BKG_IMG);
        age = "Adulte";
      }
      break;
    case "teenSelector":
      if (BKG_IMG != null) {
        setBackground(LAYOUT_IMG.Ado, BKG_IMG);
        age = "Ado";
      }
      break;
    case "childSelector":
      if (BKG_IMG != null) {
        setBackground(LAYOUT_IMG.Enfant, BKG_IMG);
        age = "Enfant";
      }
      break;
  }
}
function setBackground(imgPath, bkg) {
  bkg.setAttribute("src", imgPath);
}
function showDraw(asp, aspTrait, traits) {
  removeImages();
  if (age == "Adulte") {
    displayImage(asp, POSITIONS.aspiration, "asp");
    displayImage(aspTrait, POSITIONS.aspiration_trait, "asp");
    displayImage(traits[0].name, POSITIONS.trait_1, "trait");
    displayImage(traits[1].name, POSITIONS.trait_2, "trait");
    displayImage(traits[2].name, POSITIONS.trait_3, "trait");
  }
  if (age == "Ado") {
    displayImage(asp, POSITIONS.aspiration, "asp");
    displayImage(aspTrait, POSITIONS.aspiration_trait, "asp");
    displayImage(traits[0].name, POSITIONS.trait_1, "trait");
    displayImage(traits[1].name, POSITIONS.trait_3, "trait");
  }
  if (age == "Enfant") {
    displayImage(asp, POSITIONS.aspiration, "asp");
    displayImage(traits[0].name, POSITIONS.trait_1, "trait");
  }
}
function displayImage(name, position, type) {
  var _a;
  const img = document.createElement("img");
  if (type == "asp") {
    img.setAttribute("src", `/images/Aspirations/${name}.png`);
  } else if (type == "trait") {
    img.setAttribute("src", `/images/Traits/${name}.png`);
  }
  img.setAttribute("title", name);
  img.classList.add("imageGen");
  img.style.display = "block";
  img.style.position = "absolute";
  img.style.top = `${position.Y - position.size / 2}px`;
  img.style.left = `${position.X - position.size / 2}px`;
  img.style.width = `${position.size}px`;
  (_a = document.getElementById("DisplayContainer")) == null ? void 0 : _a.appendChild(img);
}
function removeImages() {
  const images = document.getElementsByClassName("imageGen");
  console.log(images);
  while (images.length > 0) {
    images[0].remove();
  }
}
