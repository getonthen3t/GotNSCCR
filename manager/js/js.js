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
    var distritosEscazu = ["Escazú","San Antonio","San Rafael"];
    var distritosDesamparados = ["Desamparados","San Miguel","San Juan de Dios","San Rafael Arriba","San Antonio","Frailes","Patarrá","San Cristobal","Rosario","Damas","San Rafael"];
    var distritosSanJosePuriscal = ["Santiago","Mercedes Sur","Barbacoas","Grifo Alto","San Rafael","Candelarita","Desamparaditos","San Antonio","Chires"];
    var distritosSanJoseTarrazu = ["San Marcos","San Lorenzo","San Carlos"];
    var distritosSanJoseAserri = ["Tarbaca","Aserrí","Vuelta de Jorco","San Gabriel","Legua","Monterrey","Salitrillos"];
    var distritosSanJoseMora = ["Ciudad\bColon","Guayabo","Tabarcia","Piedras Negras","Picagres"];
    var distritosSanJoseGoicoechea = ["Guadalupe","San Francisco","Calle Blancos","Mata de Platano","Ipís","Rancho Redondo","Purral"];
    var distritosSanJoseSantaAna = ["Santa Ana","Salitral","Pozos","Uruca","Piedades","Brasil"];
    var distritosSanJoseAlajuelita = ["Alajuelita","San Josecito","San Antonio","Concepción","San Felipe"];
    var distritosSanJoseVazquez = ["San Isidro","San Rafael","Dulce Nombre de Jesús","Patalillo","Cascajal"];
    var distritosSanJoseAcosta = ["San Ignacio","Guaitil","Palmichal","Cangrejal","Sabanillas"];
    var distritosSanJoseTibas = ["San Juan","Cinco Esquinas","Anselmo Llorente","Leon XIII","Colima"];
    var distritosSanJoseMoravia = ["San Vicente","San Jerónimo","Trinidad"];
    var distritosSanJoseMontesdeOca = ["San Pedro","Sabanilla","Mercedes","San Rafael"];
    var distritosSanJoseTurrubares = ["San Pablo","San Pedro","San Juan de Mata","San Luis","Carara"];
    var distritosSanJoseDota = ["Santa María","Jardín","Copey"];
    var distritosSanJoseCurridabat = ["Curridabat","Granadilla","Sánchez","Tirrases"];
    var distritosSanJosePerez = ["San Isidro del General","El General","Daniel Flores","Rivas","San Pedro","Platanares","Pejibaye","Cajón","Barú","Rio Nuevo","Páramo"];
    var distritosSanJoseLeon = ["San Pablo","San Andrés","Llano Bonito","San Isidro","Santa Cruz","San Antonio"];
    
    
    
    var distritosAlajuela = ["Alajuela","San José","Carrizal","San Antonio","Guácima","San Isidro","Sabanilla","San Rafael","Río Segundo","Desamparados","Turrúcares","Tambor","Garita","Sarapiquí"];
    var distritosAlajuelaSanRamon = ["San Ramón","Santiago","San Juan","Piedades Norte","Piedades Sur","San Rafael","San Isidro","Ángeles","Alfaro","Volio","Cobcepción","Zapotal","Peñas Blancas"];
    var distritosAlajuelaGrecia = ["Grecia","San Isidro","San José","San Roque","Tacares","Río Cuarto","Puente de Piedra","Bolivar"];
    var distritosAlajuelaSanMateo = ["San Mateo","Desmonte","Jeśus María"];
    var distritosAlajuelaAtenas = ["Atenas","Jesús","Mercedes","San Isidro","Concepción","San José","Santa Eulalia","Escobal"];
    var distritosAlajuelaNaranjo = ["Naranjo","San Miguel","San José","Cirrí Sur","San Jéronimo","San Juan","El Rosario","Palmitos"];
    var distritosAlajuelaPalmares = ["Palmares","Zaragoza","Buenos Aires","Santiago","Candelaria","Esquipulas","La Granja"];
    var distritosAlajuelaPoas = ["San Pedro","San Juan","San Rafael","Carrillos","Sabana Redonda"];
    var distritosAlajuelaOrotina = ["Orotina","Mastate","Hacienda Vieja","Coyolar","La Ceiba"];
    var distritosAlajuelaSanCarlos = ["Quesada","Florencia","Buenavista","Aguas Zarcas","Venecia","Pital","La Fortuna","La Tigra","La Palmera","Venado","Cutris","Monterrey","Pocosol"];
    var distritosAlajuelaZarcero = ["Zarcero","Laguna","Tapezco","Guadalupe","Palmira","Zapote","Brisas"];
    var distritosAlajuelaValverdeVega = ["Sarchí Norte","Sarchí Sur","Toro Amarillo","San Pedro","Rodriguez"];
    var distritosAlajuelaUpala = ["Upala","Aguas Claras","San José","Bijagua","Delicias","Dos Ríos","Yolillal"];
    var distritosAlajuelaLosChiles = ["Los Chiles","Caño Negro","El Amparo","San Jorge"];
    var distritosAlajuelaGuatuso = ["San Rafael","Buenavista","Cote","Katira"];
    
    
    
    var distritosCartago = ["Oriental","Occidental","Carmen","San Nicolás","Agua Caliente","Guadalupe","Corralillo","Tierra Blanca","Dulce Nombre","Llano Grande","Quebradilla"];
    var distritosCartagoParaiso = ["Paraíso","Santiago de Paraíso","Orosi","Cachí","Llanos de Santa Lucía"];
    var distritosCartagoLaUnion = ["Tres Ríos","San Diego","San Juan","San Rafael","Concepción","Dulce Nombre","San Ramón","Río Azul"];
    var distritosCartagoJimenez = ["Juan Viñas","Tucurrique","Pejibaye"];
    var distritosCartagoTurrialba = ["Turrialba","La Suiza","Peralta","Santa Cruz","Santa Teresita","Pavones","Tuis","Tayutic","Santa Rosa","Tres Equis","La Isabel","Chirripó"];
    var distritosCartagoAlvarado = ["Pacayas","Cervantes","Capellades"];
    var distritosCartagoOreamuno = ["San Rafael","Cot","Potrero Cerrado","Cipreses","Santa Rosa"];
    var distritosCartagoElGuarco = ["Tejar","San Isidro","Tobosi","Patio de Agua"];
    
    
    
    var distritosHeredia = ["Heredia","Mercedes","San Francisco","Ulloa","Varablanca"];
    var distritosHerediaBarva = ["Barva","San Pedro","San Pablo","San Roque","Santa Lucía","San José de la Montaña"];
    var distritosHerediaSantoDomingo = ["Santo Domingo","San Vicente","San Miguel","Paracito","Santo Tomás","Santa Rosa","Tures","Pará"];
    var distritosHerediaSantaBarbara = ["Santa Bárbara","San Pedro","San Juan","Jesús","Santo Domingo","Purabá"];
    var distritosHerediaSanRafael = ["San Rafael","San Jocecito","Santiago","Ángeles","Concepción"];
    var distritosHerediaSanIsidro = ["San Isidro","San José","Concepción","San Francisco"];
    var distritosHerediaBelen = ["San Antonio", "La Rivera","La Asunción"];
    var distritosHerediaFlores = ["San Joaquín", "Barrantes","Llorente"];
    var distritosHerediaSanPablo = ["San Pablo","Rincón de Sabanilla"];
    var distritosHerediaSarapiqui = ["Puerto Viejo","La Virgen","Las Horquetas","Llanuras del Gaspar","Cureña"];
    
    
    var distritosGuanacasteLiberia = ["Liberia","Cañas Dulces","Mayorga","Nacascolo","Curubandé"];
    var distritosGuanacasteNicoya = ["Nicoya","Mansión","San Antonio","Quebrada Onda","Sámara","Nosara","Belén de Nosarita"];
    var distritosGuanacasteSantaCruz = ["Santa Cruz","Bolsón","Ventisiete de Abril","Tempate","Cartagena","Cuajiniquil","Diriá","Cabo Velas","Tamarindo"];
    var distritosGuanacasteBagaces = ["Bagaces","La Fortuna","Mogote","Río Naranjo"];
    var distritosGuanacasteCarrillo = ["Filadelfia","Palmira","Sardinal","Belén"];
    var distritosGuanacasteCanas = ["Cañas","Palmira","San Miguel","Bebedero","Porozal"];
    var distritosGuanacasteAbangares = ["Las Juntas","Sierra","San Juan","Colorado"];
    var distritosGuanacasteTilaran = ["Tilarán","Quebrada Grande","Tronadora","Santa Rosa","Libano","Tierras Morenas","Arenal"];
    var distritosGuanacasteNandayure = ["Carmona","Santa Rita","Zapotal","San Pablo","Porvenir"];
    var distritosGuanacasteLaCruz = ["La Cruz","Santa Cecilia","La Garita","Santa Elena"];
    var distritosGuanacasteHojancha = ["Hojancha","Monte Romo","Puerto Crarrillo","Huacas"];
    
    
    var distritosPuntarenas = ["Puntarenas","Pitahaya","Chomes","Lepanto","Paquera","Manzanillo","Guacimal","Barranca","Monteverde","Isla del Coco","Cóbano","Chacarita","Chira","Acapulco","El Roble","Arancibia"];
    var distritosPuntarenasEsparza = ["Espiritu Santo","San Juan  Grande","Macacona","San Rafael","San Jerónimo"];
    var distritosPuntarenasBuenosAires = ["Buenos Aires","Volcán","Potrero Grande","Boruca","Pilas","Colinas","Chánguena","Biolley","Brunka"];
    var distritosPuntarenasMontesdeOro = ["Miramar","La Unión","San Isidro"];
    var distritosPuntarenasOsa = ["Cortés","Palmar","Sierpe","Bahia Ballena","Piedras Blancas"];
    var distritosPuntarenasQuepos = ["Quepos","Savegre","Naranjito"];
    var distritosPuntarenasGolfito = ["Golfito","Puerto Jiménez","Guaycará","Pavón"];
    var distritosPuntarenasCotoBrus = ["San Vito","Sabalito","Aguabuena","Limoncito","Pittier"];
    var distritosPuntarenasParrita = ["Parrita"];
    var distritosPuntarenasCorredores = ["Corredor","La Cuesta","Paso Canoas","Laurel"];
    var distritosPuntarenasGarabito = ["Jacó","Tárcoles"];
    
    
    var distritosLimon = ["Limón","Valle la Estrella","Río Blanco","Matama"];
    var distritosLimonPococi = ["Guápiles","Jiménez","Rita","Roxana","Cariari","Colorado"];
    var distritosLimonSiquirres = ["Siquirres","Pacuarito","Florida","Germania","Cairo","Alegría"];
    var distritosLimonTalamanca = ["Bratsi","Sixaola","Cahuita","Telire"];
    var distritosLimonMatina = ["Matina","Batán","Carrandi"];
    var distritosLimonGuacimo = ["Guácimo","Mercedes","Pocora","Río Jiménez","Duacarí"];
    
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

