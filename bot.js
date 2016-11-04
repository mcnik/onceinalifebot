var tracery = require('tracery-grammar');

var rawGrammar = 
{
	"origin": ["#starts# #attributes.a# #places#,\nwith #adjectives.a# #people#,\n#openquestion#",
	"#starts# #attributes.a# #places#,\nwith #objectives.a# #object#,\n#openquestion#", 
	"#starts# #attributes.a# #places#,\nwith #writing.a#,\n#text#"],

	"starts": ["And you may find yourself in", "And you may find yourself inside", "And you may find yourself trapped in", "And you may find yourself discovering", "And you may find yourself exploring", "And you may find yourself hiding in", "And you may find yourself teleported to", "And you may find yourself living in"],
	
	"attributes": ["beautiful", "hidden", "burning", "mystical", "ancient", "colorful", "tiny", "small", "magical", "overgrown", "destroyed", "lost", "dark", "wet", "cold", "forgotten", "foggy", "misty"],

	"places": ["manor", "castle", "attic", "cellar", "tower", "apartment", "room", "building", "house", "office", "cave", "mine", "temple", "cavern", "ruin", "greenhouse", "monastery", "cabin", "chapel", "library", "church", "cave system", "underground city", "lighthouse", "ship", "underground tunnel", "abbey", "cottage", "underground garden", "battleship"],

	"people":["father", "mother", "parent", "son", "daughter", "child", "husband", "wife", "spouse", "brother", "sister", "sibling", "grandfather", "grandmother", "grandson", "granddaughter", "grandchild", "uncle", "aunt", "nephew", "niece", "cousin", "2nd cousin", "accountant", "actor", "actress", "athlete", "author", "baker", "banker", "barber", "beautician", "broker", "burglar", "butcher", "carpenter", "chauffeur", "chef", "clerk", "coach", "craftsman", "criminal", "crook", "dentist", "doctor", "editor", "engineer", "farmer", "fire fighter", "fisherman", "judge", "lawyer", "magician", "mechanic", "musician", "nurse", "pharmacist", "pilot", "poet", "policeman", "politician", "printer", "professor", "rabbi", "priest", "pastor", "sailor", "salesman", "shoemaker", "soldier", "tailor", "teacher", "veterinarian", "waiter", "waitress", "watchmaker"],
	
	"objectives":["damaged", "decaying", "lost", "broken", "destroyed", "shattered", "overgrown", "mossy", "ancient", "old", "weird", "crazy", "crude", "mysterious", "odd", "strange", "eerie", "abnormal", "unnatural", "occult", "cryptic", "miraculous", "glowing", "overgrown", "ancient", "magical", "glowing", "floating", "seemingly weightless"],

	"adjectives":["able", "abnormal", "absent-minded", "above average", "adventurous", "affectionate", "agile", "agreeable", "alert", "amazing", "ambitious", "amiable", "amusing", "analytical", "angelic", "apathetic", "apprehensive", "ardent", "artificial", "artistic", "assertive", "attentive", "average", "awesome", "awful", "balanced", "beautiful", "below average", "beneficent", "blue", "blunt", "boisterous", "brave", "bright", "brilliant", "buff", "callous", "candid", "cantankerous", "capable", "careful", "careless", "caustic", "cautious", "charming", "childish", "childlike", "cheerful", "chic", "churlish", "circumspect", "civil", "clean", "clever", "clumsy", "coherent", "cold", "competent", "composed", "conceited", "condescending", "confident", "confused", "conscientious", "considerate", "content", "cool", "cool-headed", "cooperative", "cordial", "courageous", "cowardly", "crabby", "crafty", "cranky", "crass", "critical", "cruel", "curious", "cynical", "dainty", "decisive", "deep", "deferential", "deft", "delicate", "demonic", "dependent", "delightful", "demure", "depressed", "devoted", "dextrous", "diligent", "direct", "dirty", "disagreeable", "discerning", "discreet", "disruptive", "distant", "distraught", "distrustful", "dowdy", "dramatic", "dreary", "drowsy", "drugged", "drunk", "dull", "dutiful", "eager", "earnest", "easy-going", "efficient", "egotistical", "elfin", "emotional", "energetic", "enterprising", "enthusiastic", "evasive", "even-tempered", "exacting", "excellent", "excitable", "experienced", "fabulous", "fastidious", "ferocious", "fervent", "fiery", "flabby", "flaky", "flashy", "frank", "friendly", "funny", "fussy", "generous", "gentle", "gloomy", "glutinous", "good", "grave", "great", "groggy", "grouchy", "guarded", "hateful", "hearty", "helpful", "hesitant", "hot-headed", "hypercritical", "hysterical", "idiotic", "idle", "illogical", "imaginative", "immature", "immodest", "impatient", "imperturbable", "impetuous", "impractical", "impressionable", "impressive", "impulsive", "inactive", "incisive", "incompetent", "inconsiderate", "inconsistent", "independent", "indiscreet", "indolent", "indefatigable", "industrious", "inexperienced", "insensitive", "inspiring", "intelligent", "interesting", "intolerant", "inventive", "irascible", "irritable", "irritating", "jocular", "jovial", "joyous", "judgmental", "keen", "kind", "lame", "lazy", "lean", "leery", "lethargic", "level-headed", "listless", "lithe", "lively", "local", "logical", "long-winded", "lovable", "love-lorn", "lovely", "maternal", "mature", "mean", "meddlesome", "mercurial", "methodical", "meticulous", "mild", "miserable", "modest", "moronic", "morose", "motivated", "musical", "naive", "nasty", "natural", "naughty", "negative", "nervous", "noisy", "normal", "nosy", "numb", "obliging", "obnoxious", "old-fashioned", "one-sided", "orderly", "ostentatious", "outgoing", "outspoken", "passionate", "passive", "paternal", "paternalistic", "patient", "peaceful", "peevish", "pensive", "persevering", "persnickety", "petulant", "picky", "plain", "plain-speaking", "playful", "pleasant", "plucky", "polite", "popular", "positive", "powerful", "practical", "prejudiced", "pretty", "proficient", "proud", "provocative", "prudent", "punctual", "quarrelsome", "querulous", "quick", "quick-tempered", "quiet", "realistic", "reassuring", "reclusive", "reliable", "reluctant", "resentful", "reserved", "resigned", "resourceful", "respected", "respectful", "responsible", "restless", "revered", "ridiculous", "sad", "sassy", "saucy", "sedate", "self-assured", "selfish", "sensible", "sensitive", "sentimental", "serene", "serious", "sharp", "short-tempered", "shrewd", "shy", "silly", "sincere", "sleepy", "slight", "sloppy", "slothful", "slovenly", "slow", "smart", "snazzy", "sneering", "snobby", "somber", "sober", "sophisticated", "soulful", "soulless", "sour", "spirited", "spiteful", "stable", "staid", "steady", "stern", "stoic", "striking", "strong", "stupid", "sturdy", "subtle", "sullen", "sulky", "supercilious", "superficial", "surly", "suspicious", "sweet", "tactful", "tactless", "talented", "testy", "thinking", "thoughtful", "thoughtless", "timid", "tired", "tolerant", "touchy", "tranquil", "ugly", "unaffected", "unbalanced", "uncertain", "uncooperative", "undependable", "unemotional", "unfriendly", "unguarded", "unhelpful", "unimaginative", "unmotivated", "unpleasant", "unpopular", "unreliable", "unsophisticated", "unstable", "unsure", "unthinking", "unwilling", "venal", "versatile", "vigilant", "warm", "warmhearted", "wary", "watchful", "weak", "well-behaved", "well-developed", "well-meaning", "well-respected", "well-rounded", "willing", "wonderful", "volcanic", "vulnerable", "zealous"],

	"object":["doll", "crystal", "glass", "skull", "clock", "chain", "book", "toy", "instrument", "lamp", "machine", "bottle", "shoe", "painting", "statue", "paint brush", "mannequin", "cage", "coffin", "weapon", "television", "telephone", "lamp", "painting", "drawing", "note", "writing", "diagram", "schematic", "wallpaper", "mirror", "symbol", "pattern", "fresco", "mosaic", "paint", "plant", "tree", "leaf", "crystal", "clock", "fairy", "book", "firefly", "acorn", "flower", "mirror", "light", "skull",  "fish", "hat", "documents"],
	
	"writing":["note", "piece of paper", "diary entry", "tome", "book", "journal", "poster", "slate", "crystal ball"],
	"text":["that says, \"How did I get here?\""],
	
	"openquestion":["And you may ask yourself how did I get here?"]
}




var processedGrammar = tracery.createGrammar(rawGrammar);

processedGrammar.addModifiers(tracery.baseEngModifiers); 

var tweet = processedGrammar.flatten("#origin#");
//console.log(tweet);


var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  //console.log(data)
})



