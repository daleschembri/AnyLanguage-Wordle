import { CONFIG } from './config'

export const VALIDGUESSES = [
'ħamsa',
'abort',
'naraw',
'barra',
'daqqa',
'abbuż',
'skond',
'uġigħ',
'kisba',
'aċidu',
'aċidi',
'attur',
'akuta',
'żieda',
'barra',
'miġja',
'ħażin',
'parir',
'favur',
'jibża',
'aġent',
'qablu',
'kważi',
'waħdu',
'leħen',
'għoli',
'ukoll',
'artal',
'ambra',
'anali',
'ankra',
'qedem',
'anġli',
'rabja',
'qasba',
'ikteb',
'dieqa',
'ieħor',
'nemel',
'xorta',
'aktar',
'xorta',
'waħda',
'apiċi',
'ruhna',
'dehra',
'deher',
'aptit',
'ħatra',
'perit',
'oqsma',
'forsi',
'aridi',
'armor',
'qamet',
'firxa',
'wasla',
'jaslu',
'waslu',
'tasal',
'talab',
'ażżma',
'ateni',
'atomu',
'atomi',
'ehmeż',
'awdjo',
'smigħ',
'awtur',
'toroq',
'medja',
'medji',
'għoti',
'trabi',
'baġer',
'borża',
'boroż',
'lixka',
'bambu',
'faxxa',
'meded',
'banek',
'qoxra',
'xgħir',
'linja',
'baċin',
'banju',
'għawm',
'kamra',
'bajja',
'żibeġ',
'travi',
'daqna',
'kruha',
'saret',
'jsiru',
'issir',
'sodda',
'friex',
'sodod',
'naħla',
'ċanga',
'birra',
'birer',
'naħal',
'qabel',
'tibda',
'jibda',
'amate',
'liwja',
'luttu',
'ħdejn',
'aħjar',
'akbar',
'jeħel',
'isqof',
'kelba',
'gidma',
'imrar',
'iswed',
'suwed',
'xafra',
'ħtija',
'kutra',
'kutri',
'fsada',
'barka',
'nefaħ',
'għama',
'blokk',
'korpi',
'ġisem',
'bomba',
'bombi',
'ktieb',
'kotba',
'qiegħ',
'tmiss',
'pruwa',
'pruwi',
'kaxxa',
'kaxxi',
'imħuħ',
'brejk',
'marka',
'marki',
'pawżi',
'sider',
'razza',
'razza',
'razez',
'briks',
'qosor',
'isbaħ',
'iġibu',
'jġibu',
'xifer',
'bronż',
'baġit',
'jibnu',
'tibni',
'built',
'bozza',
'basal',
'barri',
'balal',
'qatta',
'qatet',
'qawwi',
'bejta',
'irdim',
'linja',
'butir',
'billi',
'gaġġa',
'gaġeġ',
'sejħa',
'kalma',
'daħal',
'ġemel',
'jista',
'kanal',
'għatu',
'karta',
'karti',
'reqqa',
'tapit',
'qabda',
'jilqa',
'baqar',
'kawżi',
'kawta',
'waqaf',
'ġlied',
'soqfa',
'sekli',
'seklu',
'ċerti',
'sfida',
'kamra',
'bidla',
'xedaq',
'faħam',
'allas',
'mapep',
'orħos',
'irħas',
'irħis',
'ġobon',
'ċiniż',
'ċippa',
'ċipep',
'korda',
'kordi',
'sidru',
'swali',
'ċirku',
'bliet',
'miksi',
'tafal',
'nadif',
'aktar',
'nodfa',
'kleru',
'irdum',
'klima',
'titla',
'klonu',
'kloni',
'eqreb',
'drapp',
'sħaba',
'ħjiel',
'klaċċ',
'oħxon',
'kosta',
'kosti',
'tebut',
'kolon',
'kulur',
'komdu',
'kmand',
'ħbieb',
'jaħbu',
'sensi',
'fihom',
'ħatja',
'kopji',
'kobob',
'kopja',
'qroll',
'qalba',
'sufra',
'cotta',
'qoton',
'għadd',
'kupun',
'qorti',
'qrati',
'bitħa',
'tater',
'baqra',
'granċ',
'krejn',
'krema',
'reati',
'kriżi',
'kroat',
'qasmu',
'salib',
'folla',
'folol',
'kuban',
'kċina',
'qofol',
'tazza',
'tazzi',
'kurva',
'kurvi',
'soltu',
'dwana',
'qtugħ',
'ċiklu',
'ċikli',
'ċipru',
'ħalib',
'ħsara',
'danni',
'daniż',
'mejta',
'torox',
'naqas',
'fonda',
'ċriev',
'telfa',
'gradi',
'ħelwa',
'ċaħda',
'telqu',
'xewqa',
'qerda',
'qerdu',
'mezzi',
'diżil',
'dieta',
'dieti',
'numri',
'ħmieġ',
'diska',
'diski',
'marda',
'għajb',
'jaħbi',
'jsirx',
'fosos',
'tabib',
'tobba',
'klieb',
'donat',
'tarġa',
'tikek',
'dubju',
'dubji',
'isfel',
'niżla',
'xorbu',
'koroh',
'ħolma',
'ħolmu',
'issuq',
'qatra',
'niżel',
'nixfa',
'droga',
'drogi',
'sakra',
'papra',
'papri',
'dovut',
'żmien',
'matul',
'dazju',
'ajkla',
'widna',
'qligħ',
'ħeffa',
'faċli',
'eħfef',
'lvant',
'sforz',
'elett',
'ħarġu',
'parth',
'vojta',
'annog',
'aħħar',
'tmiem',
'ghadu',
'magna',
'magni',
'saqsa',
'fdata',
'għira',
'epika',
'ordni',
'żball',
'faqqa',
'esejs',
'stima',
'stimi',
'nċiżi',
'etika',
'provi',
'ħażen',
'jduru',
'eżatt',
'eżami',
'skavi',
'ħlief',
'skuża',
'skużi',
'wirja',
'eżodu',
'nefqa',
'għajn',
'fatti',
'fieri',
'foloz',
'famuż',
'farsa',
'adieu',
'bidwi',
'arblu',
'għeja',
'fawna',
'festa',
'dehru',
'għalf',
'booth',
'qasir',
'godda',
'fibra',
'fibri',
'qasam',
'ċifri',
'fajls',
'mills',
'isibu',
'multa',
'ifjen',
'multi',
'swaba',
'ditta',
'irmer',
'ditti',
'ewwel',
'blank',
'laħam',
'fjuri',
'fluss',
'nixxa',
'fjura',
'flawt',
'mitwi',
'weraq',
'passi',
'għall',
'qawwa',
'forzi',
'forza',
'qabel',
'tinsa',
'jinsa',
'forma',
'forom',
'jmiss',
'xorti',
'sabet',
'erbat',
'volpi',
'qafas',
'frodi',
'mimli',
'friża',
'spiss',
'frisk',
'moqli',
'ħabib',
'żrinġ',
'ġlata',
'frott',
'sħiħa',
'fondi',
'futur',
'żibel',
'ġnien',
'ġonna',
'ġenju',
'ġesti',
'ġgant',
'rigal',
'bniet',
'ħġieġ',
'globu',
'tleqq',
'kolla',
'deheb',
'tajba',
'wiżża',
'sabiħ',
'ħafna',
'gvern',
'nanna',
'grafu',
'grafi',
'ħaxix',
'qabar',
'oqbra',
'grass',
'kbira',
'grieg',
'aħdar',
'serra',
'ħodor',
'kiber',
'gravi',
'skura',
'ħakem',
'naqal',
'grupp',
'raden',
'gwida',
'linji',
'gwidi',
'xirka',
'gawwi',
'għatu',
'gomma',
'nofsu',
'swali',
'idejn',
'jiġri',
'iebsa',
'agħar',
'ħarxa',
'ħarex',
'uġigħ',
'irjus',
'saħħa',
'tisma',
'jisma',
'sħana',
'ġenna',
'itqal',
'għenu',
'jgħin',
'keffa',
'lilha',
'eżita',
'ogħla',
'laqtu',
'toqba',
'toqob',
'unuri',
'ormon',
'orrur',
'humer',
'kaċċa',
'raġel',
'ikoni',
'ideat',
'morda',
'sabar',
'indja',
'ġewwa',
'rħisa',
'għerf',
'jirtu',
'wiret',
'linka',
'daħla',
'ħarsa',
'ħadid',
'gżira',
'lhudi',
'vjaġġ',
'buqar',
'meraq',
'lulju',
'qabża',
'ġunju',
'żamma',
'jżomm',
'kenja',
'kitla',
'renju',
'renji',
'astun',
'lajċi',
'ħaruf',
'ħrief',
'lampa',
'lampi',
'inżul',
'fanal',
'ħoġor',
'biċċa',
'larva',
'saffi',
'dgħif',
'inqas',
'ġilda',
'riġel',
'lenti',
'tikri',
'ittra',
'ittri',
'lieva',
'lievi',
'libja',
'gideb',
'ħajja',
'istil',
'ħafif',
'ħfief',
'jħobb',
'parti',
'nisel',
'linji',
'rabta',
'iljun',
'likur',
'lista',
'listi',
'litru',
'fwied',
'ħobża',
'lokal',
'itwal',
'ħares',
'laxka',
'trakk',
'iħobb',
'sabiħ',
'baxxa',
'leali',
'lussu',
'mafja',
'kobor',
'kawba',
'xebba',
'mejns',
'iżomm',
'demel',
'mappa',
'aġġru',
'irħam',
'marzu',
'marċi',
'baħar',
'swieq',
'żwieġ',
'ġebel',
'massa',
'mases',
'ħakma',
'midja',
'medju',
'mertu',
'merti',
'malji',
'meter',
'metri',
'mikro',
'qabla',
'mirja',
'pudur',
'tnejn',
'xahar',
'moral',
'moska',
'ħażiż',
'kamla',
'mutur',
'moffa',
'films',
'mużew',
'jismu',
'vapur',
'qarib',
'pulit',
'għonq',
'neath',
'labra',
'labar',
'bżonn',
'nervi',
'anġjo',
'kliem',
'ġodda',
'sbieħ',
'laqam',
'disat',
'kważi',
'normi',
'avviż',
'illum',
'mkien',
'numru',
'ħafur',
'jobdu',
'ovvja',
'oċean',
'frieħ',
'eqdem',
'stess',
'basla',
'orali',
'uqija',
'lilna',
'harga',
'ovali',
'neħħi',
'matul',
'sahra',
'ħarsa',
'kokka',
'kokki',
'ożonu',
'paġna',
'paġni',
'paine',
'akbar',
'guest',
'sehem',
'ishma',
'firda',
'garża',
'waqfa',
'peake',
'pearl',
'pease',
'inxir',
'peril',
'pinen',
'popli',
'pesti',
'frażi',
'qabad',
'biċċa',
'torti',
'pinto',
'thole',
'nases',
'plano',
'rahan',
'għawġ',
'times',
'bwiet',
'poeta',
'punti',
'poole',
'tista',
'polza',
'aħsel',
'ifqar',
'tantx',
'rejds',
'qsari',
'tħoss',
'ferra',
'faqar',
'praga',
'tqala',
'cruor',
'trick',
'preti',
'feint',
'priża',
'prezz',
'unier',
'sonda',
'sondi',
'jimxi',
'prova',
'iġbed',
'polpa',
'pompa',
'pompi',
'piena',
'vjola',
'kwart',
'tliet',
'kwiet',
'kwizz',
'kwoti',
'fenek',
'fniek',
'radju',
'rampa',
'fidwa',
'leħja',
'rieda',
'jaqra',
'reali',
'tibni',
'aħmar',
'ħomor',
'żejda',
'qasab',
'sikka',
'sikek',
'friġġ',
'terga',
'reġim',
'tenna',
'qraba',
'billi',
'ruħha',
'fadal',
'jibqa',
'jerġa',
'imnut',
'bejgħ',
'żżomm',
'repli',
'jerġa',
'ritmu',
'ritmi',
'għana',
'iktar',
'rikba',
'ħniek',
'qasma',
'dritt',
'right',
'lemin',
'xmara',
'ħbula',
'rokit',
'virga',
'vireg',
'rwoli',
'rumen',
'saqaf',
'għerq',
'ħabel',
'rotta',
'rotot',
'rumor',
'russu',
'russi',
'sadid',
'sagru',
'sikur',
'qlugħ',
'baħri',
'bejgħ',
'teħid',
'ramel',
'kanta',
'zalza',
'sawna',
'jgħid',
'skali',
'xalpa',
'skeda',
'skedi',
'skema',
'skemi',
'boroż',
'skola',
'kamin',
'ħjata',
'ibħra',
'sedil',
'tieni',
'jaraw',
'senat',
'serbi',
'serje',
'serju',
'serva',
'sebat',
'sessi',
'folja',
'folji',
'tarka',
'tarki',
'jiddi',
'vjeġġ',
'qomos',
'ħadlu',
'rimja',
'iqsar',
'xorts',
'short',
'doċċa',
'naħat',
'vista',
'firma',
'firem',
'skiet',
'ħarir',
'iblah',
'fidda',
'nijet',
'sitta',
'falda',
'qatla',
'irqad',
'ngħas',
'kmiem',
'żgħir',
'iċken',
'daħka',
'xkiel',
'sriep',
'borra',
'sapun',
'sodju',
'sufan',
'artab',
'uniku',
'niket',
'soppa',
'qarsa',
'sorsi',
'parts',
'lanza',
'lanez',
'speċi',
'infiq',
'brimb',
'bżieq',
'molol',
'forma',
'taraġ',
'posti',
'istat',
'qalbu',
'waqfa',
'azzar',
'poppa',
'teħel',
'iebes',
'ponti',
'seraq',
'ħażna',
'daħlu',
'stufi',
'ċinga',
'ċineg',
'tiben',
'laqat',
'stili',
'sofra',
'batut',
'jbatu',
'somma',
'somom',
'jgħix',
'tibla',
'iswan',
'ċinji',
'nefħa',
'jgħum',
'xabla',
'sirja',
'tindi',
'jieħu',
'teħid',
'tejps',
'gosti',
'taxxa',
'taxxi',
'dmugħ',
'snien',
'tinda',
'tined',
'testi',
'nisġa',
'eħxen',
'ħxuna',
'koxxa',
'koxox',
'irqiq',
'ħsieb',
'irqaq',
'terzi',
'għatx',
'sewwa',
'ħasbu',
'tarmi',
'jitfg',
'traxx',
'ħamis',
'marea',
'tigri',
'tajts',
'madum',
'injam',
'landa',
'laned',
'ponta',
'tadam',
'għada',
'ilsna',
'ħadet',
'torċi',
'torju',
'total',
'ħorox',
'daret',
'torri',
'karru',
'tramm',
'nassa',
'trejs',
'teżor',
'siġra',
'siġar',
'trota',
'tumur',
'swirl',
'tutur',
'irbit',
'tajer',
'ikrah',
'fehim',
'qgħad',
'unità',
'użati',
'tilqa',
'żieda',
'utent',
'jużaw',
'ġejjn',
'vakwu',
'valur',
'valvi',
'varju',
'vażun',
'kaxxa',
'forti',
'verbi',
'versi',
'rebħa',
'vigor',
'raħal',
'vilel',
'vinji',
'vinil',
'jżuru',
'ilħna',
'volum',
'vagun',
'jimxu',
'ħitan',
'jridu',
'riedu',
'wissa',
'ħasil',
'skart',
'jarah',
'mewġa',
'insiġ',
'ħaxix',
'miżun',
'jiżnu',
'jiżen',
'marru',
'kienu',
'kaċċa',
'siġġu',
'liema',
'skond',
'liema',
'abjad',
'kollu',
'wiesà',
'armla',
'armel',
'romol',
'tieqa',
'inbid',
'xitwa',
'imsaħ',
'wajer',
'ilpup',
'rebaħ',
'kelma',
'kliem',
'libes',
'forza',
'ħidma',
'dinja',
'world',
'denja',
'kieku',
'would',
'lotta',
'kiteb',
'ħmira',
'isfar',
'renda',
'żingu',
'pront',
'proża',
'kburi',
'tmiem',
'mill-',
'malta',
'kienu',
'lill-',
'ukoll',
'gvern',
'ewwel',
'ħafna',
'aħħar',
'wkoll',
'bħala',
'kellu',
'darba',
'waħda',
'qalet',
'raġel',
'jgħid',
'żmien',
'ieħor',
'jkunu',
'malti',
'dinja',
'kollu',
'ħajja',
'kienx',
'qorti',
'numru',
'saħħa',
'kbira',
'bzonn',
'għadu',
'aħjar',
'skont',
'għat-',
'tnejn',
'parti',
'tgħid',
'illum',
'inqas',
'saret',
'tieni',
'saħaq',
'grupp',
'baħar',
'xahar',
'bdiet',
'ħames',
'għas-',
'forsi',
'ikunu',
'jieħu',
'tifel',
'stess',
'ħabta',
'għada',
'poplu',
'kwazi',
'konna',
'ġdida',
'milli',
'ħidma',
'ġodda',
'sehem',
'erba’',
'ħsieb',
'daqqa',
'iżjed',
'ħareġ',
'jiġri',
'jibda',
'kieku',
'simon',
'grech',
'isfel',
'tifla',
'tajba',
'ġewwa',
'isqof',
'wasal',
'uniti',
'qasam',
'fondi',
'għad-',
'vella',
'bosta',
'baqa’',
'istat',
'tieħu',
'għadd',
'għar-',
'minnu',
'toroq',
'ikbar',
'malli',
'ħalli',
'kelli',
'waslu',
'marzu',
'libja',
'reġa’',
'issir',
'tibda',
'dritt',
'ommna',
'droga',
'mizzi',
'ħdejn',
'seta’',
'żgħar',
'soltu',
'mario',
'kelma',
'favur',
'sodda',
'daħal',
'ktieb',
'jsiru',
'april',
'abela',
'iskor',
'ħazin',
'zjara',
'semma',
'baġit',
'isiru',
'dalli',
'bdejt',
'għand',
'mejju',
'raħal',
'marru',
'qallu',
'jaraw',
'galea',
'rabat',
'pawlu',
'renju',
'santa',
'għoli',
'talba',
'żġħir',
'seba’',
'preca',
'prezz',
'qawwi',
'festa',
'gżira',
'hemmx',
'forżi',
'jridu',
'rabta',
'drabi',
'ħbieb',
'ħadet',
'nannu',
'ijiem',
'lulju',
'ħsara',
'jiena',
'ilhom',
'chris',
'idejn',
'kawza',
'ittra',
'għal-',
'idejh',
'fihom',
'ġunju',
'wiccu',
'ħarġu',
'isbaħ',
'futur',
'mosta',
'ħanut',
'passi',
'jgħix',
'ngħid',
'eżatt',
'għax-',
'ħajtu',
'rebħa',
'qormi',
'jgħin',
'għajn',
'talab',
'sirja',
'qalbu',
'mejda',
'daħlu',
'aħbar',
'vjaġġ',
'tabib',
'tmien',
'anqas',
'ħlief',
'viċin',
'tazza',
'midja',
'gnien',
'fuqha',
'sewwa',
'valur',
'gravi',
'marsa',
'ġlied',
'jasal',
'moħħu',
'qalli',
'zewġt',
'sħiħa',
'donnu',
'kinux',
'telaq',
'setax',
'mons.',
'jmiss',
'tilef',
'ħamis',
'waħdu',
'nanna',
'tlett',
'għan-',
'punti',
'ogħla',
'tilfu',
'żwieġ',
'medja',
'vapur',
'kartà',
'talli',
'deher',
'skola',
'ħalla',
'mejta',
'jużaw',
'tgħin',
'marie',
'ħares',
'fetaħ',
'mezzi',
'tonio',
'jaslu',
'bidla',
'mutur',
'rebaħ',
'siġar',
'ċertu',
'karti',
'naraw',
'unjin',
'qisha',
'tantx',
'kotba',
'mietu',
'jkunx',
'taxxa',
'martu',
'mulej',
'marku',
'twila',
'facli',
'radju',
'anton',
'tieqa',
'unika',
'ġieli',
'abbuż',
'faqar',
'bqija',
'lista',
'agius',
'kriżi',
'tobba',
'stajt',
'siggu',
'ħabib',
'kulma',
'tgħix',
'bajja',
'żdied',
'iridu',
'waqaf',
'klabb',
'qabad',
'anglu',
'għaż-',
'lejla',
'spiss',
'iswed',
'ordni',
'metru',
'agħar',
'qalbi',
'uniku',
'kcina',
'disa’',
'sabet',
'kontx',
'mimli',
'ġanni',
'kevin',
'niżel',
'raba’',
'gwann',
'sħabu',
'kwiet',
'siġra',
'ħolma',
'patri',
'ommha',
'lvant',
'ħajti',
'miexi',
'obama',
'dehra',
'somma',
'mixja',
'ġuvni',
'nstab',
'kosta',
'taraġ',
'waqa’',
'marda',
'maria',
'sejħa',
'peter',
'jimxi',
'lesti',
'mkien',
'xewqa',
'ħamsa',
'aħmar',
'paġna',
'frott',
'lesta',
'deheb',
'nkunu',
'bihom',
'skiet',
'dmugħ',
'inkun',
'dinji',
'josef',
'rasha',
'nieħu',
'qgħad',
'bajda',
'iżomm',
'sitta',
'qasir',
'oqsma',
'telqu',
'jiġru',
'sbieħ',
'ġebel',
'ruħha',
'tasal',
'klieb',
'biża’',
'sofra',
'itfal',
'rebħu',
'wirja',
'poġġa',
'ħaseb',
'lejha',
'gejja',
'naqas',
'adami',
'laħaq',
'sorsi',
'taxxi',
'postu',
'kulur',
'qamar',
'tenna',
'ħatra',
'rigal',
'saqaf',
'fjuri',
'ċifri',
'fadal',
'naħat',
'abjad',
'qablu',
'qawwa',
'festi',
'kwart',
'elett',
'kiteb',
'telfa',
'raġun',
'tigri',
'għaċ-',
'libsa',
'sewda',
'ċerti',
'naqra',
'ismek',
'irrid',
'ħassu',
'bqajt',
'zahra',
'intom',
'qabeż',
'avviż',
'dubju',
'mcast',
'films',
'isibu',
'lkoll',
'tela’',
'immur',
'kitba',
'poter',
'riedu',
'jsibu',
'ġisem',
'sejra',
'swieq',
'tkunx',
'qraba',
'indja',
'injam',
'prova',
'qiegħ',
'bħas-',
'russu',
'riedx',
'provi',
'sfida',
'xitwa',
'ntqal',
'morda',
'ittri',
'james',
'magna',
'timxi',
'talbu',
'titlu',
'dahru',
'għala',
'ideat',
'jiswa',
'mużew',
'naqsu',
'xorti',
'ħatja',
'seraq',
'ishma',
'zball',
'iħobb',
'serqa',
'jżomm',
'banda',
'ġirja',
'ħalqu',
'dawra',
'sema’',
'kiseb',
'rajna',
'ħadem',
'ħelwa',
'korea',
'issib',
'jimxu',
'sport',
'rabja',
'ħitan',
'ċaħad',
'dehru',
'għoti',
'ħġieġ',
'inbid',
'laħam',
'fetħu',
'mindu',
'ikrah',
'sħana',
'tħobb',
'bniet',
'trabi',
'iebsa',
'sular',
'bitħa',
'moħħi',
'multa',
'lemin',
'tqila',
'ħamra',
'ħatar',
'qatel',
'ħdejh',
'jaqra',
'pront',
'rokna',
'serju',
'sptar',
'bomba',
'tħoss',
'fidda',
'gauci',
'qabdu',
'vojta',
'folla',
'erbat',
'tefa’',
'torri',
'ħfief',
'salvu',
'waħdi',
'fatti',
'smajt',
'dħalt',
'kiser',
'serji',
'borża',
'ċares',
'niżlu',
'tridx',
'jħoss',
'nibda',
'diska',
'lilek',
'birgu',
'kurja',
'minni',
'rġiel',
'qalba',
'resaq',
'spara',
'daħka',
'iskop',
'monti',
'ġilda',
'binha',
'diga’',
'fgura',
'luxol',
'trakk',
'aptit',
'banek',
'beraħ',
'ġebla',
'insib',
'agent',
'kazin',
'rotta',
'xtaqt',
'qamet',
'ħarab',
'media',
'parir',
'bħalu',
'ħafif',
'forum',
'rridu',
'ċajta',
'ċipru',
'ezami',
'minna',
'bintu',
'rieda',
'ħabat',
'gwida',
'wasla',
'flokk',
'lemaħ',
'ċerta',
'għidt',
'iħoss',
'kopja',
'lejja',
'numri',
'seklu',
'waqfu',
'mixli',
'imiss',
'ukren',
'damet',
'metri',
'iebes',
'kerha',
'sforz',
'umani',
'ħsibt',
'milan',
'oħxon',
'rotot',
'binja',
'ramel',
'nadur',
'tibki',
'fehma',
'imqar',
'xibka',
'żejda',
'nieda',
'klima',
'aħdar',
'jismu',
'serja',
'iduru',
'jridx',
'ngħix',
'dwaru',
'rridx',
'russi',
'baxxa',
'tarah',
'speċi',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
