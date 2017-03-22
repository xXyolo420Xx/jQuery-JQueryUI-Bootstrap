//Funcion para desactivar los links
function removelink(link){
	$('li#'+link).addClass('active');
	$('li#'+link+' a').removeAttr('href');
}

function crumb(where){			
	document.write("<ol class='breadcrumb'>"+
		"<li><a href='index.html'>Inicio</a></li>"+
		"<li>"+where+"</li>"+
	"</ol>");
}

/*Aqui utilizamos $('audio')[0] no porque sea un array 
con varios elementos <audio> sino para convertirlo de objeto 
jQuery a objeto nativo JavaScript, si le hubieramos puesto atributo <audio id='reproductor'>
y hubiésemos utilizado $('#reproductor') tampoco funcionaria sin el [0], otra opcion sería $('audio').get(0)
que hace lo mismo pero es más lenta
https://learn.jquery.com/using-jquery-core/faq/how-do-i-pull-a-native-dom-element-from-a-jquery-object/*/
function addControls(){
	$('#pause').click(function(){
		$('audio')[0].pause();
	});
	$('#play').click(function(){
		$('audio')[0].play();
	});
	$('#plus').click(function(){
		$('audio')[0].volume+=0.1;
	});
	$('#minus').click(function(){
		$('audio')[0].volume-=0.1;
	});
}


/*Aqui ponemos las funciones de show(), hide y Toggle()*/
function showPresident(president, time){
		$(president).show(time);
}
function hidePresident(president, time){
		$(president).hide(time);
}

function showPresidentBG(president, bg){
	$(president).show("slow", function(){
			$('#abraham').parent().css('background-color', bg);
		});
}
function hidePresidentBG(president, bg){
	$(president).hide("slow", function(){
			$('#abraham').parent().css('background-color', bg);
		});
}

/*Funciones de Fade*/

function fadeInPresident(president, time){
		$(president).fadeIn(time);
}
function fadeOutPresident(president, time){
		$(president).fadeOut(time);
}
function fadeInPresidentBG(president, bg){
	$(president).fadeIn("slow", function(){
			$('#abraham').parent().css('background-color', bg);
		});
}
function fadeOutPresidentBG(president, bg){
	$(president).fadeOut("slow", function(){
			$('#abraham').parent().css('background-color', bg);
		});
}

/*Funciones de Slide*/
function slideDownPresident(president, time, easing){
		$(president).slideDown(time, easing);
}
function slideUpPresident(president, time, easing){
		$(president).slideUp(time, easing);
}
function slideDownPresidentBG(president, bg){
	$(president).slideDown("slow", function(){
			$('#abraham').parent().css('background-color', bg);
		});
}
function slideUpPresidentBG(president, bg){
	$(president).slideUp("slow", function(){
			$('#abraham').parent().css('background-color', bg);
		});
}

/*Funciones de animate y delay*/

function animatePresident(president, left, right, opacity, width){
	$(president).animate(function(){
		left: left;
		right:right;
		opacity: opacity;
		width:width;
	});
}

/*Funciones validación formulario, cada vez que se salga 
del foco de cada elemento del formulario se comprobara
si es correcto o no*/
function setBlurs(){
	$('#nombre').blur(function(){
		if($('#nombre').val().length<2){
			$('#nombre').parent().addClass('has-error');
			$('#nombre').parent().parent().next().html('<p class="text-danger">Error, el nombre debe tener mas de 2 carácteres</p>');
			$('#nombre').parent().find('i').removeClass('glyphicon glyphicon-user').addClass('glyphicon glyphicon-remove');
		}else{
			$('#nombre').parent().removeClass('has-error').addClass('has-success');
			$('#nombre').parent().parent().next().html('');
			$('#nombre').parent().find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-user');

		}
	});
	$('#apellidos').blur(function(){
		if($('#apellidos').val().length<2){
			$('#apellidos').parent().addClass('has-error');
			$('#apellidos').parent().parent().next().html('<p class="text-danger">Error, los apellidos deben tener mas de 2 carácteres</p>');
			$('#apellidos').parent().find('i').removeClass('glyphicon glyphicon-user').addClass('glyphicon glyphicon-remove');
		}else{
			$('#apellidos').parent().removeClass('has-error').addClass('has-success');
			$('#apellidos').parent().parent().next().html('');
			$('#apellidos').parent().find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-user');

		}
	});
	$('#email').blur(function(){
		var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!regmail.test($('#email').val())){
			$('#email').parent().addClass('has-error');
			$('#email').parent().parent().next().html('<p class="text-danger">Error, el email es incorrecto</p>');
			$('#email').parent().find('i').removeClass('glyphicon glyphicon-paperclip').addClass('glyphicon glyphicon-remove');
		}else{
			$('#email').parent().removeClass('has-error').addClass('has-success');
			$('#email').parent().parent().next().html('');
			$('#email').parent().find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-paperclip');
		}
	});
	$('#telefono').blur(function(){
		var telreg = /^\+\d{10,13}$|^00\d{10,13}$|^6\d{8}$|^9\d{8}$/;
		if(!telreg.test($('#telefono').val())){
			$('#telefono').parent().addClass('has-error');
			$('#telefono').parent().parent().next().html('<p class="text-danger">El formato de teléfono no es válido</p>');
			$('#telefono').parent().find('i').removeClass('glyphicon glyphicon-earphone').addClass('glyphicon glyphicon-remove');
		}else{
			$('#telefono').parent().removeClass('has-error').addClass('has-success');
			$('#telefono').parent().parent().next().html('');
			$('#telefono').parent().find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-earphone');
		}
	});
	$('#username').blur(function(){
		if ($('#username').val().length<2){
			$('#username').parent().addClass('has-error');
			$('#username').parent().parent().next().html('<p class="text-danger">El nombre de usuario debe tener mínimo 2 caracteres</p>');
			$('#username').parent().find('i').removeClass('glyphicon glyphicon-user').addClass('glyphicon glyphicon-remove');
		}else{
			$('#username').parent().removeClass('has-error').addClass('has-success');
			$('#username').parent().parent().next().html('');
			$('#username').parent().find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-user');
		}
	});
	$('#password1').blur(function(){
		if($('#password1').val().length<6){
			$('#password1').parent().addClass('has-error');
			$('#password1').parent().parent().next().html('<p class="text-danger">La contraseña debe tener al menos 6 carácteres</p>');
			$('#password1').parent().find('i').removeClass('glyphicon glyphicon-eye-close').addClass('glyphicon glyphicon-remove');
		}else if($('#password1').val().length<10){
			$('#password1').parent().removeClass('has-error').addClass('has-warning');
			$('#password1').parent().parent().next().html('<p class="text-warning">La contraseña es poco segura</p>');
			$('#password1').parent().find('i').removeClass('glyphicon glyphicon-eye-close').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-warning-sign');
		}else{
			$('#password1').parent().removeClass('has-error').removeClass('has-warning').addClass('has-success');
			$('#password1').parent().parent().next().html('');
			$('#password1').parent().find('i').removeClass('glyphicon glyphicon-remove').removeClass('glyphicon glyphicon-warning-sign').addClass('glyphicon glyphicon-eye-close');
		}
	});
	$('#password2').blur(function(){
		if($('#password2').val()!==$('#password1').val()){
			$('#password2').parent().addClass('has-error');
			$('#password2').parent().parent().next().html('<p class="text-danger">Las contraseñas no coinciden</p>');
			$('#password2').parent().find('i').removeClass('glyphicon glyphicon-eye-close').addClass('glyphicon glyphicon-remove');
		}else{
			$('#password2').parent().removeClass('has-error').addClass('has-success');
			$('#password2').parent().parent().next().html('');
			$('#password2').parent().find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-eye-close');
		}
	});
}