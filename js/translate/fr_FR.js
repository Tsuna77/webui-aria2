// This text is a template of translation list.

// pre: ll_CC, locale name, examples: en_US, zh_CN
// 1. Copy and rename to ll_CC.js, translate these words.
// 2. in js/init.js:
//    Add '.translations('ll_CC', translations.ll_CC)' before '.determinePreferredLanguage();'
// 3. in index.html
//    Add '<script src="js/translate/ll_CC.js"></script>' after '<script src="js/libs/angular-translate.js"></script>'
// 4. To add Language to changeLanguage button, see "{{ 'Language' | translate }}" in index.html.
//    flag-icon usage:
//    https://github.com/lipis/flag-icon-css
// 5. Browser determining preferred language automatically.
//    http://angular-translate.github.io/docs/en/#/guide/07_multi-language

if(typeof translations == 'undefined'){
    translations = {};
}

translations.fr_FR = {  // replace en_US to ll_CC, examples: zh_CN, de_AT.
// header
    'Search': 'Rechercher',
    // Nav menu
    'Add': 'Ajouter',
    'By URIs': 'Par URL',
    'By Torrents': 'Par Torrents',
    'By Metalinks': 'Par Meta-liens',
    'Manage': 'Gestion',
    'Pause All': 'Pause gobal',
    'Resume Paused': 'Reprendre tout',
    'Purge Completed': 'Suppression terminer',
    'Settings': 'Parametres',
    'Connection Settings': 'Parametres de connexion',
    'Global Settings': 'Parametres globaux',
    'Server info': 'Info Serveur',
    'About and contribute': 'A propos',
    'Toggle navigation': '',
// body
// nav side bar
    'Miscellaneous': '',
    'Global Statistics': 'Statistiques',
    'About': 'A propos',
    'Displaying': 'Affichage',
    'of': 'de',
    'downloads': 'téléchargement',
    'Language': 'Langue',
// download filters
    'Download Filters': 'Filtre',
    'Running': 'En cours',
    'Active': 'Actif',
    'Waiting': 'En Attente',
    'Complete': 'Terminée',
    'Error': 'En Erreur',
    'Paused': 'En Pause',
    'Removed': 'Supprimé',
    'Hide linked meta-data': 'Caché les meta-données liée',
    'Displaying': 'Affichage',
    'of': 'de',
    'downloads': 'Téléchargement',
    'Toggle': 'Selection inverse',
    'Reset filters': 'Par Défaut',
// starred properties
    'Quick Access Settings': 'Paramètrage rapide',
    'Save settings': 'Sauvegarder',
    'Currently no download in line to display, use the': 'Il n\'y a actuellement aucun téléchargement en cours, utilisé le bouton ',
    'download button to start downloading files!': ' pour ajouter un téléchargement',
    'Peers': 'Source',
    'More Info': 'Détail',
    'Remove': 'Supprimer',
    '# of': '# de',
    'Length': 'Taille',
// modals
    'Add Downloads By URIs': 'Ajouter des téléchargements par URL',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- Vous pouvez ajouter plusieurs téléchargements (fichiers) en même temps en indiquant une URL par ligne',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- Vous pouvez ajouter plusieurs URL (mirroir) pour un *même* fichier. Pour cela vous devez séparer les URL par un espace',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- Une URL peut être HTTP(S)/FTP/BitTorrent-Magnet.',
    'E.g. to add 2 files (downloads) f1.jpg and f2.mp4 with 2 URIs (mirrors) each, add URIs as follows':
        'Ex : Pour ajouter 2 fichiers (téléchargement) f1.jpg et f2.mp4 avec 2 URLs (mirroir) chacun, ajouter les URLs suivantes',
    'Download settings': 'Paramètres de téléchargement',
    'Advanced settings': 'Paramètrage avancée',
    'Cancel': 'Annulé',
    'Start': 'Démarrer',
    'Choose': 'Choisisez',
    'Quick Access (shown on the main page)': 'Accès rapide',
// add torrent modal
    'Add Downloads By Torrents': 'Ajouter un Torrent',
    '- Select the torrent from the local filesystem to start the download.': '- Selectionner le torrent sur votre ordinateur pour démarrer le téléchargement',
    '- You can select multiple torrents to start multiple downloads.': '',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- Vous pouvez ajouter une URL BitTorrent-Magnet, utilisez le bouton Ajouter par URL pour cela',
    'Select Torrents': 'Selectionner les Torrents',
    'Select a Torrent': 'Selectionner un torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Ajouter par Meta-liens',
    'Select Metalinks': 'Selectionner les meta-liens',
    '- Select the Metalink from the local filesystem to start the download.': '- Selectionner le metaliens depuis votre ordinateur pour démarrer les téléchargmeent',
    '- You can select multiple Metalinks to start multiple downloads.': '',
    'Select a Metalink': '',
// select file modal
    'Choose files to start download for': '',
    'Select to download': '',
// settings modal
    'Aria2 RPC host and port': '',
    'Enter the host': '',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        '',
    'Enter the port': '',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        '',
    'Enter the RPC path': '',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': '',
    'SSL/TLS encryption': '',
    'Enable SSL/TLS encryption': '',
    'Enter the secret token (optional)': '',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        '',
    'Enter the username (optional)': '',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        '',
    'Enter the password (optional)': '',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': '',
    'Enter base URL (optional)': '',
    'Direct Download': '',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        '',
    '(Requires appropriate webserver to be configured.)': '',
    'Save Connection configuration': '',
// server info modal
    'Aria2 server info': '',
    'Aria2 Version': '',
    'Features Enabled': '',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        '',
    'Or you can open the latest version in the browser through': '',
    'Close': '',
// lables
    'Download status':'',
    'Download Speed':'',
    'Upload Speed':'',
    'Estimated time':'',
    'Download Size':'',
    'Downloaded':'Téléchargé',
    'Progress':'',
    'Download Path':'',
    'Uploaded':'',
    'Download GID':'',
    'Number of Pieces':'',
    'Piece Length':''
};
