
	$(document).ready(function() {
	//if submit button is clicked
	$('#enviar').click(function ()  {	
		//Get the data from all the fields
		var identificacion = $('input[name=identificacion]');
                var nombre = $('input[name=nombre]');
                var apellido1 = $('input[name=apellido1]');
                var apellido2 = $('input[name=apellido2]');
                var correo = $('input[name=correo]');
                var tel = $('input[name=tel]');
                var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
		var direccion = $('textarea[name=direccion]');
		var returnError = false;
		
		//Simple validation to make sure user entered something
		//Add your own error checking here with JS, but also do some error checking with PHP.
		//If error found, add hightlight class to the text field
		
		
		var data = 'identificacion=' + identificacion.val() + '&nombre=' + nombre.val() + '&apellido1=' + apellido1.val() + '&apellido2=' + apellido2.val() + '&correo=' + correo.val() + '&tel=' + tel.val() + '&direccion='  + encodeURIComponent(direccion.val());
                
		$.ajax({
                    
			//this is the php file that processes the data and sends email
			url: "./sus.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if contact.php returned 1/true (send mail success)
				if (html==1) {
				
					//show the success message
					$('.done').fadeIn('slow');
					
					$(".form").find('input[type=text], textarea').val("");
					
				//if contact.php returned 0/false (send mail failed)
				} 
                                else
                                { alert('Lo sentimos, ocurrio un error inesperado, intente de nuevo.');	}
                               
			}		
		});
//		alert('Gracias por suscribirse a SmartCourierCR, estamos procesando su información, muy pronto le estaremos llamando para confirmar confirmar su afiliación.');
		//cancel the submit button default behaviours
		return false;
	});
        
});        
        






