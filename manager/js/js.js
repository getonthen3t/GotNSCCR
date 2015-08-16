/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cantidaddigitos = null;

function validarIdentificacion(){
    var combo = document.getElementById("vTipoIdentificacion");
    var identificacionSeleccionada = combo.options[combo.selectedIndex].value;
    var inputNuevo;
    
    
     if(identificacionSeleccionada == "Cedula_Nacional" ){
       inputNuevo = "<input type='text' name='vTipoIdentificacion' id='vTipoIdentificacion' required class='smoothborder' placeholder='No dígite espacios ni guiones para la Cedula*' minlength='9' maxlength='9'/>"
     }
  
    if(identificacionSeleccionada == "DIMEX" ){
        inputNuevo = "<input type='text' name='vTipoIdentificacion' id='vTipoIdentificacion' required class='smoothborder' placeholder='No dígite espacios ni guiones para el DIMEX*' minlength='12' maxlength='12'/>"
    }
    
    if(identificacionSeleccionada == "Pasaporte" ){
        inputNuevo = "<input type='text' name='vTipoIdentificacion' id='vTipoIdentificacion' required class='smoothborder' placeholder='No dígite espacios ni guiones para el Pasaporte*' minlength='30' maxlength='30'/>"
    }
    
   
    
    $("#divNumeroIdentificacion").html(inputNuevo);
}





function cambiaCanton(){
    var combo = document.getElementById("vProvincia");
    var provinciaSeleccionada = combo.options[combo.selectedIndex].value;


    var comboNuevo = "<select type='text' name='vCanton' id='vCanton' onChange='cambiaDistrito();' ><option value='0'>Seleccione un Cant&oacute;n</option>";
    
    var cantonesSanJose = ["San\bJose","Escazu","Desamparados","Puriscal","Tarrazú","Aserrí","Mora","Goicoechea","Santa\bAna","Alajuelita","Vásquez\bde\bCoronado","Acosta","Tibás","Moravia","Montes\bde\bOca","Turrubares","Dota","Curridabat","Pérez\bZeledón","León\bCortés"];
    var cantonesAlajuela = ["Alajuela","San\bRamón","Grecia","San\bMateo","Atenas","Naranjo","Plamares","Poás","Orotina","San\bCarlos","Zarcero","Valverde\bVega","Upala","Los\bChiles","Guatuso"];
    var cantonesCartago = ["Cartago","Praíso","La\bUnión","Jiménez","Turrialba","Alvarado","Oreamuno","El\bGuarco"];
    var cantonesHeredia = ["Heredia","Barva","Santo\bDomingo","Santa\bBárbara","San\bRafael","San\bIsidro","Belén","Flores","San\bPablo","Sarapiquí"];
    var cantonesGuanacaste = ["Liberia","Nicoya","Santa\bCruz","Bagaces","Carrillo","Cañas","Abangares","Tilarán","Nandayure","La\bCruz","Hojancha"];
    var cantonesPuntarenas = ["Puntarenas","Esparza","Buenos\bAires","Montes\bde\bOro","Osa","Quepos","Golfito","Coto\bBrus","Parrita","Corredores","Garabito"];
    var cantonesLimon = ["Limón","Pococí","Siquirres","Talamanca","Matina","Guácimo"];
 
    
    if( provinciaSeleccionada == "San_Jose"){
        for(var i=0;i<cantonesSanJose.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesSanJose[i]+'>'+cantonesSanJose[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    if( provinciaSeleccionada == "Alajuela"){
        for(var i=0;i<cantonesAlajuela.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesAlajuela[i]+'>'+cantonesAlajuela[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    if( provinciaSeleccionada == "Cartago"){
        for(var i=0;i<cantonesCartago.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesCartago[i]+'>'+cantonesCartago[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    if( provinciaSeleccionada == "Heredia"){
        for(var i=0;i<cantonesHeredia.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesHeredia[i]+'>'+cantonesHeredia[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    if( provinciaSeleccionada == "Guanacaste"){
        for(var i=0;i<cantonesGuanacaste.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesGuanacaste[i]+'>'+cantonesGuanacaste[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    if( provinciaSeleccionada == "Puntarenas"){
        for(var i=0;i<cantonesPuntarenas.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesPuntarenas[i]+'>'+cantonesPuntarenas[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    if( provinciaSeleccionada == "Limon"){
        for(var i=0;i<cantonesLimon.length;i++ ) {
        comboNuevo=comboNuevo+ '<option value='+cantonesLimon[i]+'>'+cantonesLimon[i]+'</option>';
      }   
        comboNuevo=  comboNuevo+'</select>';
    }
    
    $("#divCanton").html(comboNuevo);
    
}



function cambiaDistrito(){
    
    var combox = document.getElementById("vCanton");
    
    var cantonSeleccionado = combox.options[combox.selectedIndex].value;
    
    var comboNuevo = "<select type='text' name='vDistrito' id='vDistrito'>";
    var distritosSanJose = ["Carmen","Merced","Hospital","Catedral","Zapote","San Francisco de dos Ríos","Uruca","Mata Redonda","Pavas","Hatillo","San Sebastían"];
    var distritosEscazu = ["Escazú","San\bAntonio","San\bRafael"];
    var distritosDesamparados = ["Desamparados","San\bMiguel","San\bJuan\bde\bDios","San\bRafael\bArriba","San\bAntonio","Frailes","Patarrá","San\bCristobal","Rosario","Damas","San\bRafael"];
    var distritosSanJosePuriscal = ["Santiago","Mercedes\bSur","Barbacoas","Grifo\bAlto","San\bRafael","Candelarita","Desamparaditos","San\bAntonio","Chires"];
    var distritosSanJoseTarrazu = ["San\bMarcos","San\bLorenzo","San\bCarlos"];
    var distritosSanJoseAserri = ["Tarbaca","Aserrí","Vuelta\bde\bJorco","San\bGabriel","Legua","Monterrey","Salitrillos"];
    var distritosSanJoseMora = ["Ciudad\bColon","Guayabo","Tabarcia","Piedras\bNegras","Picagres"];
    var distritosSanJoseGoicoechea = ["Guadalupe","San\bFrancisco","Calle\bBlancos","Mata\bde\bPlatano","Ipís","Rancho\bRedondo","Purral"];
    var distritosSanJoseSantaAna = ["Santa\bAna","Salitral","Pozos","Uruca","Piedades","Brasil"];
    var distritosSanJoseAlajuelita = ["Alajuelita","San\bJosecito","San\bAntonio","Concepción","San\bFelipe"];
    var distritosSanJoseVazquez = ["San\bIsidro","San\bRafael","Dulce\bNombre\bde\bJesús","Patalillo","Cascajal"];
    var distritosSanJoseAcosta = ["San\bIgnacio","Guaitil","Palmichal","Cangrejal","Sabanillas"];
    var distritosSanJoseTibas = ["San\bJuan","Cinco\bEsquinas","Anselmo\bLlorente","Leon\bXIII","Colima"];
    var distritosSanJoseMoravia = ["San\bVicente","San\bJerónimo","Trinidad"];
    var distritosSanJoseMontesdeOca = ["San\bPedro","Sabanilla","Mercedes","San\bRafael"];
    var distritosSanJoseTurrubares = ["San\bPablo","San\bPedro","San\bJuan\bde\bMata","San\bLuis","Carara"];
    var distritosSanJoseDota = ["Santa\bMaría","Jardín","Copey"];
    var distritosSanJoseCurridabat = ["Curridabat","Granadilla","Sánchez","Tirrases"];
    var distritosSanJosePerez = ["San\bIsidro\bdel\bGeneral","El\bGeneral","Daniel\bFlores","Rivas","San\bPedro","Platanares","Pejibaye","Cajón","Barú","Rio\bNuevo","Páramo"];
    var distritosSanJoseLeon = ["San\bPablo","San\bAndrés","Llano\bBonito","San\bIsidro","Santa\bCruz","San\bAntonio"];
    
    
    
    var distritosAlajuela = ["Alajuela","San\bJosé","Carrizal","San\bAntonio","Guácima","San\bIsidro","Sabanilla","San\bRafael","Río\bSegundo","Desamparados","Turrúcares","Tambor","Garita","Sarapiquí"];
    var distritosAlajuelaSanRamon = ["San\bRamón","Santiago","San\bJuan","Piedades\bNorte","Piedades\bSur","San\bRafael","San\bIsidro","Ángeles","Alfaro","Volio","Cobcepción","Zapotal","Peñas\bBlancas"];
    var distritosAlajuelaGrecia = ["Grecia","San Isidro","San José","San Roque","Tacares","Río Cuarto","Puente\bde\bPiedra","Bolivar"];
    var distritosAlajuelaSanMateo = ["San\bMateo","Desmonte","Jeśus María"];
    var distritosAlajuelaAtenas = ["Atenas","Jesús","Mercedes","San\bIsidro","Concepción","San\bJosé","Santa\bEulalia","Escobal"];
    var distritosAlajuelaNaranjo = ["Naranjo","San\bMiguel","San\bJosé","Cirrí\bSur","San\bJéronimo","San\bJuan","El\bRosario","Palmitos"];
    var distritosAlajuelaPalmares = ["Palmares","Zaragoza","Buenos\bAires","Santiago","Candelaria","Esquipulas","La\bGranja"];
    var distritosAlajuelaPoas = ["San\bPedro","San\bJuan","San\bRafael","Carrillos","Sabana\bRedonda"];
    var distritosAlajuelaOrotina = ["Orotina","Mastate","Hacienda\bVieja","Coyolar","La\bCeiba"];
    var distritosAlajuelaSanCarlos = ["Quesada","Florencia","Buenavista","Aguas Zarcas","Venecia","Pital","La\bFortuna","La\bTigra","La\bPalmera","Venado","Cutris","Monterrey","Pocosol"];
    var distritosAlajuelaZarcero = ["Zarcero","Laguna","Tapezco","Guadalupe","Palmira","Zapote","Brisas"];
    var distritosAlajuelaValverdeVega = ["Sarchí\bNorte","Sarchí\bSur","Toro\bAmarillo","San\bPedro","Rodriguez"];
    var distritosAlajuelaUpala = ["Upala","Aguas\bClaras","San\bJosé","Bijagua","Delicias","Dos Ríos","Yolillal"];
    var distritosAlajuelaLosChiles = ["Los\bChiles","Caño\bNegro","El\bAmparo","San\bJorge"];
    var distritosAlajuelaGuatuso = ["San\bRafael","Buenavista","Cote","Katira"];
    
    
    
    var distritosCartago = ["Oriental","Occidental","Carmen","San\bNicolás","Agua\bCaliente","Guadalupe","Corralillo","Tierra\bBlanca","Dulce\bNombre","Llano\bGrande","Quebradilla"];
    var distritosCartagoParaiso = ["Paraíso","Santiago\bde\bParaíso","Orosi","Cachí","Llanos\bde\bSanta\bLucía"];
    var distritosCartagoLaUnion = ["Tres\bRíos","San\bDiego","San\bJuan","San\bRafael","Concepción","Dulce\bNombre","San\bRamón","Río\bAzul"];
    var distritosCartagoJimenez = ["Juan\bViñas","Tucurrique","Pejibaye"];
    var distritosCartagoTurrialba = ["Turrialba","La\bSuiza","Peralta","Santa\bCruz","Santa\bTeresita","Pavones","Tuis","Tayutic","Santa\bRosa","Tres\bEquis","La\bIsabel","Chirripó"];
    var distritosCartagoAlvarado = ["Pacayas","Cervantes","Capellades"];
    var distritosCartagoOreamuno = ["San\bRafael","Cot","Potrero\bCerrado","Cipreses","Santa\bRosa"];
    var distritosCartagoElGuarco = ["Tejar","San\bIsidro","Tobosi","Patio\bde\bAgua"];
    
    
    
    var distritosHeredia = ["Heredia","Mercedes","San\bFrancisco","Ulloa","Varablanca"];
    var distritosHerediaBarva = ["Barva","San\bPedro","San\bPablo","San\bRoque","Santa\bLucía","San\bJosé\bde\bla\bMontaña"];
    var distritosHerediaSantoDomingo = ["Santo\bDomingo","San\bVicente","San\bMiguel","Paracito","Santo\bTomás","Santa\bRosa","Tures","Pará"];
    var distritosHerediaSantaBarbara = ["Santa\bBárbara","San\bPedro","San\bJuan","Jesús","Santo\bDomingo","Purabá"];
    var distritosHerediaSanRafael = ["San\bRafael","San\bJocecito","Santiago","Ángeles","Concepción"];
    var distritosHerediaSanIsidro = ["San\bIsidro","San\bJosé","Concepción","San\bFrancisco"];
    var distritosHerediaBelen = ["San\bAntonio", "La\bRivera","La\bAsunción"];
    var distritosHerediaFlores = ["San\bJoaquín", "Barrantes","Llorente"];
    var distritosHerediaSanPablo = ["San\bPablo","Rincón\bde\bSabanilla"];
    var distritosHerediaSarapiqui = ["Puerto\bViejo","La\bVirgen","Las\bHorquetas","Llanuras\bdel\bGaspar","Cureña"];
    
    
    var distritosGuanacasteLiberia = ["Liberia","Cañas\bDulces","Mayorga","Nacascolo","Curubandé"];
    var distritosGuanacasteNicoya = ["Nicoya","Mansión","San\bAntonio","Quebrada\bOnda","Sámara","Nosara","Belén\bde\bNosarita"];
    var distritosGuanacasteSantaCruz = ["Santa\bCruz","Bolsón","Ventisiete\bde\bAbril","Tempate","Cartagena","Cuajiniquil","Diriá","Cabo\bVelas","Tamarindo"];
    var distritosGuanacasteBagaces = ["Bagaces","La\bFortuna","Mogote","Río\bNaranjo"];
    var distritosGuanacasteCarrillo = ["Filadelfia","Palmira","Sardinal","Belén"];
    var distritosGuanacasteCanas = ["Cañas","Palmira","San\bMiguel","Bebedero","Porozal"];
    var distritosGuanacasteAbangares = ["Las\bJuntas","Sierra","San\bJuan","Colorado"];
    var distritosGuanacasteTilaran = ["Tilarán","Quebrada\bGrande","Tronadora","Santa\bRosa","Libano","Tierras\bMorenas","Arenal"];
    var distritosGuanacasteNandayure = ["Carmona","Santa\bRita","Zapotal","San\bPablo","Porvenir"];
    var distritosGuanacasteLaCruz = ["La\bCruz","Santa\bCecilia","La\bGarita","Santa\bElena"];
    var distritosGuanacasteHojancha = ["Hojancha","Monte\bRomo","Puerto\bCrarrillo","Huacas"];
    
    
    var distritosPuntarenas = ["Puntarenas","Pitahaya","Chomes","Lepanto","Paquera","Manzanillo","Guacimal","Barranca","Monteverde","Isla\bdel\bCoco","Cóbano","Chacarita","Chira","Acapulco","El\bRoble","Arancibia"];
    var distritosPuntarenasEsparza = ["Espiritu\bSanto","San\bJuan\bGrande","Macacona","San\bRafael","San\bJerónimo"];
    var distritosPuntarenasBuenosAires = ["Buenos\bAires","Volcán","Potrero\bGrande","Boruca","Pilas","Colinas","Chánguena","Biolley","Brunka"];
    var distritosPuntarenasMontesdeOro = ["Miramar","La\bUnión","San\bIsidro"];
    var distritosPuntarenasOsa = ["Cortés","Palmar","Sierpe","Bahia\bBallena","Piedras\bBlancas"];
    var distritosPuntarenasQuepos = ["Quepos","Savegre","Naranjito"];
    var distritosPuntarenasGolfito = ["Golfito","Puerto\bJiménez","Guaycará","Pavón"];
    var distritosPuntarenasCotoBrus = ["San\bVito","Sabalito","Aguabuena","Limoncito","Pittier"];
    var distritosPuntarenasParrita = ["Parrita"];
    var distritosPuntarenasCorredores = ["Corredor","La\bCuesta","Paso\bCanoas","Laurel"];
    var distritosPuntarenasGarabito = ["Jacó","Tárcoles"];
    
    
    var distritosLimon = ["Limón","Valle\bla\bEstrella","Río\bBlanco","Matama"];
    var distritosLimonPococi = ["Guápiles","Jiménez","Rita","Roxana","Cariari","Colorado"];
    var distritosLimonSiquirres = ["Siquirres","Pacuarito","Florida","Germania","Cairo","Alegría"];
    var distritosLimonTalamanca = ["Bratsi","Sixaola","Cahuita","Telire"];
    var distritosLimonMatina = ["Matina","Batán","Carrandi"];
    var distritosLimonGuacimo = ["Guácimo","Mercedes","Pocora","Río\bJiménez","Duacarí"];
    
    if( cantonSeleccionado=="San\bJose"){
      for(var i=0;i < distritosSanJose.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJose[i]+'>'+distritosSanJose[i]+'</option>';
      }
      comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Escazu"){
      for(var i=0;i < distritosEscazu.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosEscazu[i]+'>'+distritosEscazu[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Desamparados"){
      for(var i=0;i < distritosDesamparados.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosDesamparados[i]+'>'+distritosDesamparados[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Puriscal"){
      for(var i=0;i < distritosSanJosePuriscal.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJosePuriscal[i]+'>'+distritosSanJosePuriscal[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Tarrazú"){
      for(var i=0;i < distritosSanJoseTarrazu.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseTarrazu[i]+'>'+distritosSanJoseTarrazu[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    

    if( cantonSeleccionado=="Aserrí"){
      for(var i=0;i < distritosSanJoseAserri.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseAserri[i]+'>'+distritosSanJoseAserri[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Mora"){
      for(var i=0;i < distritosSanJoseMora.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseMora[i]+'>'+distritosSanJoseMora[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Goicoechea"){
      for(var i=0;i < distritosSanJoseGoicoechea.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseGoicoechea[i]+'>'+distritosSanJoseGoicoechea[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Santa\bAna"){
      for(var i=0;i < distritosSanJoseSantaAna.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseSantaAna[i]+'>'+distritosSanJoseSantaAna[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Alajuelita"){
      for(var i=0;i < distritosSanJoseAlajuelita.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseAlajuelita[i]+'>'+distritosSanJoseAlajuelita[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Vásquez\bde\bCoronado"){
      for(var i=0;i < distritosSanJoseVazquez.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseVazquez[i]+'>'+distritosSanJoseVazquez[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Acosta"){
      for(var i=0;i < distritosSanJoseAcosta.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseAcosta[i]+'>'+distritosSanJoseAcosta[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
     if( cantonSeleccionado=="Tibás"){
      for(var i=0;i < distritosSanJoseTibas.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseTibas[i]+'>'+distritosSanJoseTibas[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
     if( cantonSeleccionado=="Moravia"){
      for(var i=0;i < distritosSanJoseMoravia.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseMoravia[i]+'>'+distritosSanJoseMoravia[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
     if( cantonSeleccionado=="Montes\bde\bOca"){
      for(var i=0;i < distritosSanJoseMontesdeOca.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseMontesdeOca[i]+'>'+distritosSanJoseMontesdeOca[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
  
    if( cantonSeleccionado=="Turrubares"){
      for(var i=0;i < distritosSanJoseTurrubares.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseTurrubares[i]+'>'+distritosSanJoseTurrubares[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
      
    if( cantonSeleccionado=="Dota"){
      for(var i=0;i < distritosSanJoseDota.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseDota[i]+'>'+distritosSanJoseDota[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Curridabat"){
      for(var i=0;i < distritosSanJoseCurridabat.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseCurridabat[i]+'>'+distritosSanJoseCurridabat[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Pérez\bZeledón"){
      for(var i=0;i < distritosSanJosePerez.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJosePerez[i]+'>'+distritosSanJosePerez[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="León\bCortés"){
      for(var i=0;i < distritosSanJoseLeon.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosSanJoseLeon[i]+'>'+distritosSanJoseLeon[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    /** --------------------------------------Cantones Alajuela-------------------------------------------------------- **/
    
    if( cantonSeleccionado=="Alajuela"){
      for(var i=0;i < distritosAlajuela.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuela[i]+'>'+distritosAlajuela[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
   
    if( cantonSeleccionado=="San\bRamón"){
      for(var i=0;i < distritosAlajuelaSanRamon.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaSanRamon[i]+'>'+distritosAlajuelaSanRamon[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
     
    if( cantonSeleccionado=="Grecia"){
      for(var i=0;i < distritosAlajuelaGrecia.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaGrecia[i]+'>'+distritosAlajuelaGrecia[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
   if( cantonSeleccionado=="San\bMateo"){
      for(var i=0;i < distritosAlajuelaSanMateo.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaSanMateo[i]+'>'+distritosAlajuelaSanMateo[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Atenas"){
      for(var i=0;i < distritosAlajuelaAtenas.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaAtenas[i]+'>'+distritosAlajuelaAtenas[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Naranjo"){
      for(var i=0;i < distritosAlajuelaNaranjo.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaNaranjo[i]+'>'+distritosAlajuelaNaranjo[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Plamares"){
      for(var i=0;i < distritosAlajuelaPalmares.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaPalmares[i]+'>'+distritosAlajuelaPalmares[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Poás"){
      for(var i=0;i < distritosAlajuelaPoas.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaPoas[i]+'>'+distritosAlajuelaPoas[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Orotina"){
      for(var i=0;i < distritosAlajuelaOrotina.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaOrotina[i]+'>'+distritosAlajuelaOrotina[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="San\bCarlos"){
      for(var i=0;i < distritosAlajuelaSanCarlos.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaSanCarlos[i]+'>'+distritosAlajuelaSanCarlos[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Zarcero"){
      for(var i=0;i < distritosAlajuelaZarcero.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaZarcero[i]+'>'+distritosAlajuelaZarcero[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Valverde\bVega"){
      for(var i=0;i < distritosAlajuelaValverdeVega.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaValverdeVega[i]+'>'+distritosAlajuelaValverdeVega[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Upala"){
      for(var i=0;i < distritosAlajuelaUpala.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaUpala[i]+'>'+distritosAlajuelaUpala[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Los\bChiles"){
      for(var i=0;i < distritosAlajuelaLosChiles.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaLosChiles[i]+'>'+distritosAlajuelaLosChiles[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Guatuso"){
      for(var i=0;i < distritosAlajuelaGuatuso.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosAlajuelaGuatuso[i]+'>'+distritosAlajuelaGuatuso[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    /**---------------------------------Cantones Cartago---------------------------------------------------------------**/
    
    
    if( cantonSeleccionado=="Cartago"){
      for(var i=0;i < distritosCartago.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartago[i]+'>'+distritosCartago[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Praíso"){
      for(var i=0;i < distritosCartagoParaiso.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoParaiso[i]+'>'+distritosCartagoParaiso[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="La\bUnión"){
      for(var i=0;i < distritosCartagoLaUnion.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoLaUnion[i]+'>'+distritosCartagoLaUnion[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Jiménez"){
      for(var i=0;i < distritosCartagoJimenez.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoJimenez[i]+'>'+distritosCartagoJimenez[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Turrialba"){
      for(var i=0;i < distritosCartagoTurrialba.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoTurrialba[i]+'>'+distritosCartagoTurrialba[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Alvarado"){
      for(var i=0;i < distritosCartagoAlvarado.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoAlvarado[i]+'>'+distritosCartagoAlvarado[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Oreamuno"){
      for(var i=0;i < distritosCartagoOreamuno.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoOreamuno[i]+'>'+distritosCartagoOreamuno[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="El\bGuarco"){
      for(var i=0;i < distritosCartagoElGuarco.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosCartagoElGuarco[i]+'>'+distritosCartagoElGuarco[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    /**------------------------------------------Cantones Heredia---------------------------------------------------------------------------**/
    
  
    if( cantonSeleccionado=="Heredia"){
      for(var i=0;i < distritosHeredia.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHeredia[i]+'>'+distritosHeredia[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Barva"){
      for(var i=0;i < distritosHerediaBarva.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaBarva[i]+'>'+distritosHerediaBarva[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Santo\bDomingo"){
      for(var i=0;i < distritosHerediaSantoDomingo.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaSantoDomingo[i]+'>'+distritosHerediaSantoDomingo[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Santa\bBárbara"){
      for(var i=0;i < distritosHerediaSantaBarbara.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaSantaBarbara[i]+'>'+distritosHerediaSantaBarbara[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="San\bRafael"){
      for(var i=0;i < distritosHerediaSanRafael.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaSanRafael[i]+'>'+distritosHerediaSanRafael[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="San\bIsidro"){
      for(var i=0;i < distritosHerediaSanIsidro.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaSanIsidro[i]+'>'+distritosHerediaSanIsidro[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
 
    if( cantonSeleccionado=="Belén"){
      for(var i=0;i < distritosHerediaBelen.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaBelen[i]+'>'+distritosHerediaBelen[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
       
    if( cantonSeleccionado=="Flores"){
      for(var i=0;i < distritosHerediaFlores.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaFlores[i]+'>'+distritosHerediaFlores[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="San\bPablo"){
      for(var i=0;i < distritosHerediaSanPablo.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaSanPablo[i]+'>'+distritosHerediaSanPablo[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Sarapiquí"){
      for(var i=0;i < distritosHerediaSarapiqui.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosHerediaSarapiqui[i]+'>'+distritosHerediaSarapiqui[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    /**-----------------------------Cantones Guanacaste---------------------------------------------**/
    
    
    
    if( cantonSeleccionado=="Liberia"){
      for(var i=0;i < distritosGuanacasteLiberia.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteLiberia[i]+'>'+distritosGuanacasteLiberia[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Nicoya"){
      for(var i=0;i < distritosGuanacasteNicoya.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteNicoya[i]+'>'+distritosGuanacasteNicoya[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Santa\bCruz"){
      for(var i=0;i < distritosGuanacasteSantaCruz.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteSantaCruz[i]+'>'+distritosGuanacasteSantaCruz[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Bagaces"){
      for(var i=0;i < distritosGuanacasteBagaces.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteBagaces[i]+'>'+distritosGuanacasteBagaces[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Carrillo"){
      for(var i=0;i < distritosGuanacasteCarrillo.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteCarrillo[i]+'>'+distritosGuanacasteCarrillo[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Cañas"){
      for(var i=0;i < distritosGuanacasteCanas.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteCanas[i]+'>'+distritosGuanacasteCanas[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Abangares"){
      for(var i=0;i < distritosGuanacasteAbangares.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteAbangares[i]+'>'+distritosGuanacasteAbangares[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Tilarán"){
      for(var i=0;i < distritosGuanacasteTilaran.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteTilaran[i]+'>'+distritosGuanacasteTilaran[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
  
    if( cantonSeleccionado=="Nandayure"){
      for(var i=0;i < distritosGuanacasteNandayure.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteNandayure[i]+'>'+distritosGuanacasteNandayure[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
      
    if( cantonSeleccionado=="La\bCruz"){
      for(var i=0;i < distritosGuanacasteLaCruz.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteLaCruz[i]+'>'+distritosGuanacasteLaCruz[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Hojancha"){
      for(var i=0;i < distritosGuanacasteHojancha.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosGuanacasteHojancha[i]+'>'+distritosGuanacasteHojancha[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    /**---------------------------Cantones Puntarenas-----------------------------------------------**/
    
    if( cantonSeleccionado=="Puntarenas"){
      for(var i=0;i < distritosPuntarenas.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenas[i]+'>'+distritosPuntarenas[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Esparza"){
      for(var i=0;i < distritosPuntarenasEsparza.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasEsparza[i]+'>'+distritosPuntarenasEsparza[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Buenos\bAires"){
      for(var i=0;i < distritosPuntarenasBuenosAires.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasBuenosAires[i]+'>'+distritosPuntarenasBuenosAires[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Montes\bde\bOro"){
      for(var i=0;i < distritosPuntarenasMontesdeOro.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasMontesdeOro[i]+'>'+distritosPuntarenasMontesdeOro[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Osa"){
      for(var i=0;i < distritosPuntarenasOsa.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasOsa[i]+'>'+distritosPuntarenasOsa[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Quepos"){
      for(var i=0;i < distritosPuntarenasQuepos.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasQuepos[i]+'>'+distritosPuntarenasQuepos[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Golfito"){
      for(var i=0;i < distritosPuntarenasGolfito.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasGolfito[i]+'>'+distritosPuntarenasGolfito[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    if( cantonSeleccionado=="Coto\bBrus"){
      for(var i=0;i < distritosPuntarenasCotoBrus.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasCotoBrus[i]+'>'+distritosPuntarenasCotoBrus[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Parrita"){
      for(var i=0;i < distritosPuntarenasParrita.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasParrita[i]+'>'+distritosPuntarenasParrita[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Corredores"){
      for(var i=0;i < distritosPuntarenasCorredores.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasCorredores[i]+'>'+distritosPuntarenasCorredores[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Garabito"){
      for(var i=0;i < distritosPuntarenasGarabito.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosPuntarenasGarabito[i]+'>'+distritosPuntarenasGarabito[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    /**----------------------------Cantones Limon---------------------------------------------------------**/
    
    if( cantonSeleccionado=="Limón"){
      for(var i=0;i < distritosLimon.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosLimon[i]+'>'+distritosLimon[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Pococí"){
      for(var i=0;i < distritosLimonPococi.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosLimonPococi[i]+'>'+distritosLimonPococi[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Siquirres"){
      for(var i=0;i < distritosLimonSiquirres.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosLimonSiquirres[i]+'>'+distritosLimonSiquirres[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
   
    if( cantonSeleccionado=="Talamanca"){
      for(var i=0;i < distritosLimonTalamanca.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosLimonTalamanca[i]+'>'+distritosLimonTalamanca[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Matina"){
      for(var i=0;i < distritosLimonMatina.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosLimonMatina[i]+'>'+distritosLimonMatina[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    if( cantonSeleccionado=="Guácimo"){
      for(var i=0;i < distritosLimonGuacimo.length;i++ ) {
       comboNuevo=comboNuevo+ '<option value='+distritosLimonGuacimo[i]+'>'+distritosLimonGuacimo[i]+'</option>';
      }   
       comboNuevo=  comboNuevo+'</select>';
    }
    
    
    
    $("#divDistrito").html(comboNuevo);
    
}

