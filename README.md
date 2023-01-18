# FixShip
Principe : jeu de réflexion coopératif

# Technologies
AngularJS, Express

# Synopsis
Les joueurs incarnent des astronautes qui viennent de terminer leurs missions. Ils repartent en direction de la Terre dans leur vaisseau, toutefois celui-ci heurte un astéroide. Le choc dérègle une grande partie des appareils de communication et de localisation se trouvant dans le vaisseau. Les joueurs doivent remettre en état les dispositifs pour rétablir la connexion avec la Terre et réussier leur atterissage.

# Description
Les joueurs se connectent à une partie, ils sont alors placés dans une cabine du vaisseau. Arrivent ensuite:
1. Une cinématique
   * Les joueurs ne peuvent plus interagir avec l'interface, des bandes noires apparaissent en haut et en bas de l'écran. 
   * Le vaisseau se met à accélèrer de plus en vite
   * Un choc très important se fait entendre (gros buit + tremblement du site), des voyants peuvent également clignoter (et des alarmes aussi)
   * Les bandes noires se retirent progressivement et le joueur peut à nouveau interagir avec l'interface
2. Gameplay
3. Ecran de victoire / défaite puis retour à la page d'accueil


# Interface
 * A gauche et à droite de l'écran vitres donnant sur l'extérieur (l'espace)
 * En haut et en bas le plafond et le sol. Le sol possède une trappe menant à la `Réserve`
 * Au centre (partie dans laquelle le joueur peur interagir) le tableau de bord.
 Le tableau de bord se compose des éléments suivants :
   * Un `Moniteur` indiquant au `JOUEUR 1` les messages et autres informations concernant
   le vaisseau
   * Le `Tableau de commandes` qui est l'endroit ou les énigmes apparaîtront
   * La `Barre d'état` qui indique au joueur les différentes parties du vaisseau et si
   elles sont fonctionnelles ou non.(en gris si éteint, en rouge si HS et vert sinon)
   * Le `Bac commun` qui permet aux joueurs de s'échanger des objets
 * Le  ***JOUEUR 1*** aura accès à tous les messages du moniteur et  ***JOUEUR 2*** à la `Réserve`. 
C'est à eux de partager leurs informations et le matériel pour réparer leurs vaisseaux.



# Gameplay
## Phase 0 : Arrivée dans le vaisseau
Lorsque la cinématique est terminé les joueurs doivent commencer par rétablir le courant.
Pour ce faire ils doivent débrancher la batterie principale qui a été endommagée et
brancher la batterie auxiliaire

`Moniteur` du ***JOUEUR 1*** indique une erreur d'alimentation et recommande aux joueurs de passer en alimentation
auxiliaire.

### Précisions
***JOUEUR 1*** dispose des éléments suivants:
* Un `Moniteur` en état de marche lui signalant une erreur d'alimenation
* Le `Tableau de commandes` avec un levier et un bouton
* La `Barre d'état` qui indique que tous les équiements sont éteints ou hors services sauf
le moniteur (qui est au vert)

***JOUEUR 2*** dispose des éléments suivants:
* Un `Moniteur` non alimenté
* Le `Tableau de commandes` avec un bouton pour accèder à la batterie principale endommagée
* La `Barre d'état` qui indique que tous les équiements sont éteints ou hors services

Dans la `Réserve` on retrouve:
* Une batterie auxiliaire
* Une note


### Etape 1 : Rétablir le courant
1) La batterie auxiliaire se trouve dans la `Réserve`.  ***JOUEUR 2*** doit donc aller la chercher
et la mettre à la place de la batterie principale depuis `Tableau de bord`. Pour ce faire
il a besoin d'une `lampe torche` que ***JOUEUR 1*** lui aura fournit par le `Bac commmun`
2) ***JOUEUR 2*** doit ensuite activer le levier de son `Tableau de bord` pour redémarrer le
système. La batterie principale endomagée pourra être déposée dans la `Réserve`
3) Le `Moniteur` de  ***JOUEUR 1*** s'allume et lui propose de confirmer de basculer sur la batterie
auxiliaire.

### Etape 2 : Redémarrer le système
A cause du choc le système a planté. Il faut donc le redémarrer. ***JOUEUR 1*** et
***JOUEUR 2*** doivent donc appuyer sur le bouton de démarrage sur
le `Tableau de bord` en même temps pour avoir le droit de redémarrer le système.

### Etape 3 : Connexion
Une fois le système démarré, le ***JOUEUR 1*** doit se connecter pour avoir accès aux
équipements de celui-ci. Pour ce faire :
1) ***JOUEUR 2*** doit lui rapporter une note se trouvant dans la réserve sur laquelle
est notée le mot de passe du système. Il doit ensuite la lui transmettre par le
`Bac commun`
2) ***JOUEUR 1*** doit saisir les identifants de connexion fournits par ***JOUEUR 2***
sur le `Moniteur` et réactiver :
   * L'éclairage
   * Le moniteur du ***JOUEUR 2***

Après cela les voyant `Eclairage du vaisseau` et  `Moniteur` du ***JOUEUR 2***  
de la `Barre d'etat` passent au vert