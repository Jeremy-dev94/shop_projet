function Calcul(CalculTTC, Cas) {
            // Récupérer la valeur de l'image sélectionnée
            var imageSelect = document.getElementById("imageSelect");
            var imageValue = imageSelect.value;

            // Récupérer la donnée entrée par l'utilisateur
            var donnee = document.getElementById("donnee").value;

            // Calcul de la variable TTC en utilisant le 1er paramètre passé dans la fonction
            var TTC = CalculTTC * 1.2;

            if (Cas == 1) {
                // test du paramètre Cas
                document.getElementById('idTTC').value = TTC;
            } else if (Cas == 2) {
                // test du paramètre Cas
                document.getElementById('idTTC1').value = TTC;
            } else {

            }

            // Afficher la valeur de l'image sélectionnée et la donnée entrée
            console.log("Image sélectionnée: " + imageValue);
            console.log("Donnée entrée: " + donnee);
        }