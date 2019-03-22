export default {
    name: 'alert',
    initialize() {
      // On floute l'element
      console.log("Plugin en marche.");
      $(function() {
        // La fonction
        function onLanceLeCode() {
        // S'il n'est pas connecté
        console.log($("div").is(".login-button"));
        if ($("button").is(".login-button")) {
        // Ajout du bouton d'inscription
        /*$('.topic-body:first').after(`
        <b>Vous devez être connecté pour lire la suite...</b>
        `);*/
        // Effet de flou
        $('.cooked').not('.cooked:first').css('color', 'transparent').css('text-shadow', '0 0 15px rgba(0,0,0,0.5)');
        console.log("Plugin dans le jQuery.");
        }
        }
		onLanceLeCode();
		$("body").bind("DOMSubtreeModified", function() {
    		onLanceLeCode();
		});
      });
    }
  };
