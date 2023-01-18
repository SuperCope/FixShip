# FixShip
Principe : jeu de réflexion coopératif

## Technologies
AngularJS, Express

## Synopsis
Les joueurs incarnent des astronautes qui viennent de terminer leurs missions. Ils repartent en direction de la Terre dans leur vaisseau, toutefois celui-ci heurte un astéroide. Le choc dérègle une grande partie des appareils de communication et de localisation se trouvant dans le vaisseau. Les joueurs doivent remettre en état les dispositifs pour rétablir la connexion avec la Terre et réussier leur atterissage.

## Description
Les joueurs se connectent à une partie, ils sont alors placés dans une cabine du vaisseau. Arrivent ensuite:
1. Une cinématique
   * Les joueurs ne peuvent plus interagir avec l'interface, des bandes noires apparaissent en haut et en bas de l'écran. 
   * Le vaisseau se met à accélèrer de plus en vite
   * Un choc très important se fait entendre (gros buit + tremblement du site), des voyants peuvent également clignoter (et des alarmes aussi)
   * Les bandes noires se retirent progressivement et le joueur peut à nouveau interagir avec l'interface
2. Gameplay
3. Ecran de victoire / défaite puis retour à la page d'accueil


## Interface
 * A gauche et à droite de l'écran vitres donnant sur l'extérieur (l'espace)
 * En haut et en bas le plafond et le sol. Le sol possède une trappe menant à la `Réserve`
 * Au centre (partie dans laquelle le joueur peur interagir) le tableau de bord

## Gameplay
# 1 Arrivée dans le vaisseau
