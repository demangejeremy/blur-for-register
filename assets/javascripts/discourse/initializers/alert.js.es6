export default {
    name: 'alert',
    initialize() {
      // On floute l'element
      console.log("Plugin en marche.");
      $(function() {
        // La fonction
        function onLanceLeCode() {
        // S'il n'est pas connecté
        if ($("button").is(".login-button")) {
        // Ajout du bouton d'inscription
        $('.map-collapsed').replaceWith(`
        <b>Vous devez être connecté pour lire la suite...</b>
        `);
        // Effet de flou
        $('.topic-body').not('.topic-body:first').css('color', 'transparent').css('text-shadow', '0 0 15px rgba(0,0,0,0.5)');
        }
        }
		onLanceLeCode();
		$("body").bind("DOMSubtreeModified", function() {
    		onLanceLeCode();
		});
      });
    }
  };
