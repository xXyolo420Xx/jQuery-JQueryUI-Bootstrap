function navbar(){
	document.write(
		"<header>"+
			"<nav class='navbar navbar-default'>"+
				"<div class='container-fluid'>"+
					"<div class='navbar-header'>"+
						"<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar1'>"+
							"<span class='sr-only'>Menu</span>"+
							"<span class='icon-bar'></span>"+
							"<span class='icon-bar'></span>"+
							"<span class='icon-bar'></span>"+
						"</button>"+
						"<a class='navbar-brand' href='#'>Simeon Shopov</a>"+
					"</div>"+
					"<div class='collapse navbar-collapse' id='navbar1'>"+
						"<ul class='nav navbar-nav'>"+
							"<li id='home'><a href='index.html'>Inicio</a></li>"+
							"<li id='video'><a href='video.html'>Video</a></li>"+
							"<li id='show'><a href='show.html'>show() y hide()</a></li>"+
							"<li id='fade'><a href='fade.html'>Fading</a></li>"+
							"<li id='slide'><a href='slide.html'>Sliding</a></li>"+
							"<li id='animate'><a href='animate.html'>Animate y Delay</a></li>"+
							"<li id='form'><a href='form.html'>Formularios</a></li>"+
						"</ul>"+
					"</div>"+
				"</div>"+
			"</nav>"+
		"</header>");
}