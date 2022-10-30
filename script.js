function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Mapas
var mapreg =  document.querySelector("#mapgo");

mapreg.style.display = "none";

function openMap() {
  var select = document.querySelector("#selectUf")
  var valor = document.getElementById("selectUf").value
  var acad = document.querySelector("#acadmap")

  switch (valor) {
    case "0":
      mapreg.style.display = "none";
      break;
    case "2":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.198964170082!2d-35.73251958469879!3d-9.66403430478502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701457996307ad5%3A0x1d22c2c44f26f853!2sInstituto%20Federal%20de%20Alagoas%20-%20Campus%20Macei%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1667071354054!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
      break;
    case "4":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8490525831253!2d-60.01513288474984!3d-3.134554041319998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057715e51dc1%3A0x131a0659382fadd9!2sInstituto%20Federal%20do%20Amazonas%20-%20Campus%20Manaus%20Centro!5e0!3m2!1spt-BR!2sbr!4v1667071790008!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "5":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.917325444584!2d-34.875658985680694!3d-7.135558971969074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sbr!4v1666645570606!5m2!1spt-BR!2sbr');
    break;
    case "6":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3014707036605!2d-38.53824118588377!3d-3.7443621443008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7491a5cfc50e5%3A0x35b7fad8eb59ba84!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Cear%C3%A1%20%7C%20Campus%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1667073410809!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "7":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9105974860386!2d-44.280032785891976!3d-2.536053438979913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68fb03467a7f3%3A0xd973b822f4fb6dea!2sInstituto%20Federal%20do%20Maranh%C3%A3o%20-%20Monte%20Castelo!5e0!3m2!1spt-BR!2sbr!4v1667073522297!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "8":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.981878853093!2d-56.100587285726!3d-15.59261702217697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db19096eba401%3A0xd69b7fd0801be52e!2sIFMT%20Instituto%20Federal%20de%20Mato%20Grosso%20-%20Campus%20Cuiab%C3%A1%20Cel.%20Octayde%20Jorge%20da%20Silva!5e0!3m2!1spt-BR!2sbr!4v1667073576912!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "9":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.2629014149406!2d-44.03527458563129!3d-20.039427946895152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6b94f20e9679f%3A0x77c15963eca6eab8!2sIFMG%20-%20Campus%20Ibirit%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1667073631948!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "10":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.561148763483!2d-48.4627123858981!3d-1.4383671362150678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c12e611982f%3A0x5ace4d45a86e975d!2sIFPA%20-%20Instituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Par%C3%A1%2C%20Campus%20Bel%C3%A9m!5e0!3m2!1spt-BR!2sbr!4v1667073736850!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "11":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1340264182595!2d-38.50286798577297!3d-12.963274463152896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604df54e0265b%3A0xfcb98df08aee6867!2sIFBA%20-%20Campus%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1667073906665!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "12":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.411066563015!2d-34.952790985842505!3d-8.059484482755117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1be3795f0b73%3A0xead0a588b03786f1!2sInstituto%20Federal%20De%20Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1667073970497!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "13":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0920426143066!2d-42.81341598587294!3d-5.0888165530249045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e307a360e6db5%3A0xc59ef94cb3a5df40!2sIFPI%20Campus%20Teresina%20Central%20-%20Pr%C3%A9dio%20A!5e0!3m2!1spt-BR!2sbr!4v1667074022001!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "14":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0329712620046!2d-43.42170488556317!3d-22.8012421398446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9966b16347e65d%3A0x453415eb53e9a896!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1667074105094!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "15":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3094348758245!2d-35.20671208586639!3d-5.81190235893722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ffe4d7b15191%3A0x5c55d75db98a785e!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20Grande%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1667074165825!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "16":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.633150658112!2d-37.067373485804886!3d-10.915459624856304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab30a5bcd126b%3A0xd4f4944197901389!2sInstituto%20Federal%20de%20Sergipe!5e0!3m2!1spt-BR!2sbr!4v1667074268556!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    case "17":
      mapreg.style.display = 'block';
      acad.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8490525831253!2d-60.01513288474984!3d-3.134554041319998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057715e51dc1%3A0x131a0659382fadd9!2sInstituto%20Federal%20do%20Amazonas%20-%20Campus%20Manaus%20Centro!5e0!3m2!1spt-BR!2sbr!4v1667071790008!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    break;
    default:
      break;
  }
}