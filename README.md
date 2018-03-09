# Les bruits de la ville - Paris
Dépôt pour le projet de *Gestion des contenus et curation des données* : **Les bruits de la ville - Paris**.

La première version du site, ainsi que les ressources, peut être consultée sur [https://les-bruits-de-la-ville.bitballoon.com/](https://les-bruits-de-la-ville.bitballoon.com/).

## Présentation du projet
Le projet de curation de données qui est décrit dans ce plan porte sur les bruits et sons que l’on est susceptible d’entendre au quotidien dans la ville de Paris, sans pour autant lui être exclusifs. L’équipe LSR procèdera à l’identification (en recherchant sur Internet ce qui est typique dans cette ville) et à l’enregistrement de ces multiples sons.

L’objectif est de dégager une première collection de sons permettant à l’ouïe une immersion dans la capitale. (Il est un sens généralement délaissé au profit de la vue et autres.) Si les limites viennent de la difficulté à relever des sons propres à Paris et à localiser le lieu exacte de leur enregistrement, il s’agit aussi d’un avantage puisqu’il devient possible pour l’auditeur de rattacher tout de suite un souvenir au son.

La collection est un extrait du catalogue d’une exposition ayant pour thème les sons et bruits à Paris. Il s’agit d’une exposition avant tout à destination des malvoyants.


## Types de données et stockage
La plupart des données sont des enregistrements audios, lesquels ont été réalisés par LSR au moyen de smartphone. Quant aux sources, au vu de la nature du projet, elles sont plurielles car elles regroupent des machines, des véhicules, des individus et autres objets de la vie de tous les jours.

La liste des enregistrements constituant la collection est organisée dans une archive avec un fichier HTML à la racine pour les décrire. Afin d’en permettre la réutilisation, nous la mettrons en ligne sur le site GitHub.

## Organisation, documentation et méta-données
L’arborescence du projet organise les fiches pour les ressources dans le dossier descriptions et toutes les ressources sous le dossier ressources.
À la racine, on retrouve l’ensemble des fichiers nécessaires pour lister et afficher les différentes ressources.

Le nom des fichiers des ressources est composé de l’objet de l’enregistrement (s’ils sont plusieurs ils sont séparés par des traits d’union) et du numéro de l’enregistrement précédé d’un underscore ; par exemple : cloche-oiseaux_001.mp3. Le nom des fichiers descripteurs est le même que celui des ressources, seule l’extension change ; par exemple : enfants_002.html.

Les formats utilisés sont le Dublin Core pour les métadonnées décrivant les ressources et le HTML pour les pages Internet. En outre, pour l’automatisation (à savoir, l’affichage des métadonnées sous une forme lisible) nous avons eu recours à jQuery.

## Accès aux données et propriété intellectuelle
Toutes les ressources et le site les regroupant et les présentant sont soumis à la licence publique générale GNU

En revanche, si l’accès aux ressources est entièrement libre, l’ajout de nouvelles est soumis à quelques règles rudimentaires : les fichiers doivent d’abord obéir aux règles de nommage (Cf. point ci-dessus) et prendre comme modèle l’un des fichiers descripteurs validés (déjà en ligne). L’ajout, comme les modifications, doit être par la suite commit sur la page GitHub du projet.
