# L'ASCII Art Astucieux d'Annaïs

Annaïs est une brillante étudiante en école informatique de jour et une hacker de nuit. Ses activités nocturnes nécessitent de laisser une signature qui laissera pantois toute personne victime de ses méfaits. Pour impressionner le public, elle décide d'écrire un algorithme qui permet d'appliquer une décoration sans égale à toutes ses chaines de caractères.

Ce décorateur de texte peut être appliqué à n'importe quelle chaine alphanumérique plus quelques symboles (`'` apostrophe, `,` virgule, `.` point, `!` point d'exclamation, `?` point d'interrogation) composée d'un nombre aléatoire de mots. Les mots sont définis comme étant une chaine de caractères et sont séparés par des espaces. Une phrase peut contenir des apostrophes, des virgules (systématiquement suivi par un espace) et se terminer par un point, un point d'interrogation ou un point d'exclamation (à chaque ponctuation de fin de phrase, un espace après, pas d'espace avant).

Le décorateur prend en entrée une chaine de caractères contenant exactement une phrase et devra placer le texte dans un cadre de `*`, ainsi que suivre les règles suivantes :
- La phrase devra être découpée en plusieurs lignes dont aucune ne sera plus longue que le plus long mot contenu dans la phrase auquel on ajoute les `*` de décoration et les marges (espaces).
- Un mot, ici, est une chaine continue de caractères. La continuité est brisée *uniquement* par les espaces. La ponctuation doit être considérée comme faisant partie du mot, ainsi que les apostrophes.
- La première et la dernière ligne sont composées uniquement de `* ` (une étoile et un espace) et se répètent autant de fois que nécessaire. Attention, deux étoiles ou deux espaces ne doivent pas se suivre sur la première ou la dernière ligne.
- Chaque ligne entre la ligne de début et la ligne de fin doit commencer et finir par une étoile (`*`). L'étoile de début de ligne doit être séparé du premier mot de la ligne par exactement un espace, et l'étoile de fin de ligne doit être séparée du dernier mot de la ligne par un ou plusieurs espaces.
- Chaque ligne doit contenir autant de mots que possible.
- La décoration finale doit être un texte encadré dans un rectangle de `*`.

Lors de l'élaboration de son super décorateur, Annaïs a écrit deux exemples. L'input de sa fonction de décorateur prends 3 paramètres : 
1. `nbCarac`, le nombre total de caractères dans la châine. Compris entre 2 et 1000 inclus.
2. `nbWords`, le nombre de mot de la phrase qui doit être décorée. Compris entre 1 et 1000 inclus.
3. `sentence`, la phrase à décorer.

### Exemple 1 :
##### Input:
(`63`,`11`,`"La peur est la petite mort qui conduit à l'oblitération totale."`)
##### Result:
```
* * * * * * * * * *
* La peur est la  *
* petite mort qui *
* conduit à       *
* l'oblitération  *
* totale.         *
* * * * * * * * * *
```

### Exemple 2 :
##### Input:
(`44`,`9`,`"I'm sorry, Dave. I'm afraid I can't do that."`)
##### Result:
```
* * * * * *
* I'm     *
* sorry,  *
* Dave.   *
* I'm     * 
* afraid  *
* I can't *
* do      *
* that.   *
* * * * * *
```

Il faudrait écrire, dans n'importe quel langage de programmation (relativement standard, pas de [brainfuck](https://fr.wikipedia.org/wiki/Brainfuck) ou de [whitespace](https://fr.wikipedia.org/wiki/Whitespace) par exemple ;) ), un algorithme capable de reproduire les décorations d'Anais pour une phrase données.