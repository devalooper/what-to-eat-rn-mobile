import { strings } from '@/localization'

const foods = [
  {
    "id": 1,
    "title": "İmam Bayıldı",
    "foodTitle": "vegatable",
    "cookTime": "50 dk",
    "calories": "191kcal",
    "ingredientNames": [
      "egg",
      "salt",
      "yogurt",
      "garlic",
      "butter",
      "red pepper",
      "minced meat",
      "tomato",
      "pepper",
      "onion",
      "garlic",
      "olive oil",
      "salt",
      "pepper"
    ],
    "ingredients": [
      "2 adet patlıcan",
      "2 adet kuru soğan",
      "2 adet domates",
      "2 diş sarımsak",
      "2 yemek kaşığı zeytinyağı",
      "Tuz",
      "Karabiber"
    ],
    "instructions": [
      "Patlıcanları közleyin ve kabuklarını soyun.",
      "Soğanları küp küp doğrayın ve zeytinyağıyla soteleyin.",
      "Domatesleri de küp küp doğrayın ve soğanların yanına ekleyin.",
      "Sarımsakları ezin ve tuz ve karabiberle birlikte domateslere ekleyin.",
      "Patlıcanları da ortadan kesip, içlerini çıkartın ve domatesli harçla doldurun.",
      "Hazırladığınız patlıcanları fırında 20-25 dakika pişirin ve servis yapın."
    ],
    "image": "https://img.internethaber.com/rcman/Cw1280h720q95gc/storage/files/images/2022/09/22/imambayildikpk-ko4P_cover.jpg"
  },
  {
    "id": 2,
    "title": "Mantı",
    "foodTitle": "other",
    "calories": "509 kcal",
    "cookTime": "1 saat 30 dk",
    "ingredientNames": [
      "flour",
      "egg",
      "salt",
      "yogurt",
      "garlic",
      "butter",
      "red pepper",
      "minced meat",
      "tomato",
      "pepper",
      "onion",
      "garlic",
      "olive oil",
      "salt",
      "pepper"
    ],
    "ingredients": [
      "Hamuru için:",
      "2 su bardağı un",
      "1 adet yumurta",
      "Tuz",
      "Üzeri için:",
      "1 su bardağı yoğurt",
      "2 diş sarımsak",
      "Tereyağı",
      "Kırmızı pul biber"
    ],
    "instructions": [
      "Hamur malzemelerini yoğurun ve yarım saat dinlendirin.",
      "Hamuru açın ve küçük kareler kesin.",
      "Karelerin içine kıymalı karışımdan koyun ve kenarlarını birleştirerek kapatın.",
      "Mantıları tuzlu suda haşlayın ve servis tabağına alın.",
      "Üzerine yoğurt, tereyağı ve kırmızı pul biber gezdirerek servis yapın."
    ],
    "image": "https://w7.pngwing.com/pngs/543/85/png-transparent-turkish-cuisine-breakfast-manti-recipe-italian-cuisine-breakfast-soup-food-cafe.png"
  },
  {
    "id": 3,
    "title": "İskender Kebap",
    "calories": "755 kcal",

    "foodTitle": "other",
    "cookTime": "1 saat",
    "ingredientNames": [
      "beef",
      "tomato",
      "pepper",
      "butter",
      "tomato soup",
      "pepper soup",
      "olive",
      "salt",
      "oregaron"
    ],
    "ingredients": [
      "500 gr. dana eti",
      "4 adet domates",
      "4 adet yeşil biber",
      "4 adet sivri biber",
      "3 yemek kaşığı tereyağı",
      "2 yemek kaşığı domates salçası",
      "2 yemek kaşığı biber salçası",
      "1/2 çay bardağı zeytinyağı",
      "Tuz",
      "Kekik"
    ],
    "instructions": [
      "Dana etini ince ince doğrayın ve marine edin.",
      "Tereyağını bir tavada eritin ve etleri kızartın.",
      "Kızaran etleri fırın tepsisine alın.",
      "Domates, biber ve sivri biberleri tavada kavurun.",
      "Salçaları ekleyip kavurmaya devam edin.",
      "Hazırladığınız sosu etlerin üzerine dökün.",
      "Sıcak servis yapın."
    ],
    "image": "https://w7.pngwing.com/pngs/432/275/png-transparent-%C4%B0skender-kebap-doner-kebab-pilaf-recipe-steak-meat-food-beef-recipe.png"
  },
  {
    "id": 4,
    "title": "Lahmacun",
    "calories": "220 kcal",

    "foodTitle": "other",
    "cookTime": "40 dk",
    "ingredientNames": [
      "flour",
      "egg",
      "salt",
      "yogurt",
      "garlic",
      "butter",
      "pepper",
      "meat",
      "tomato",
      "pepper",
      "onion",
      "oil",
    ],
    "ingredients": [
      "500 gr. kıyma",
      "2 adet soğan",
      "2 adet yeşil biber",
      "2 adet domates",
      "1 demet maydanoz",
      "2 yemek kaşığı domates salçası",
      "2 yemek kaşığı biber salçası",
      "1 yemek kaşığı pul biber",
      "1 yemek kaşığı kimyon",
      "1 yemek kaşığı tuz",
      "Hamuru için:",
      "1 kg. un",
      "1,5 su bardağı ılık su",
      "1 tatlı kaşığı tuz",
      "1 tatlı kaşığı şeker",
      "1 paket instant maya",
      "Üzeri için:",
      "Limon",
      "Marul",
      "Roka",
      "Soğan",
      "Domates",
      "Sarımsaklı yoğurt"
    ],
    "instructions": [
      "Kıyma, ince doğranmış soğan, maydanoz, biber, domates ve salçaları bir kapta karıştırın.",
      "Baharatları ve tuzu da ekleyip yoğurun.",
      "Hamur için tüm malzemeleri karıştırın ve yoğurun.",
      "Hamuru 20 bezeye ayırın ve açın.",
      "Açtığınız hamurlara hazırladığınız kıymalı harcı yayın.",
      "Önceden ısıtılmış fırında 10-12 dakika pişirin.",
      "Limon, marul, roka, soğan ve domatesle servis yapın.",
      "Üzerine sarımsaklı yoğurt gezdirerek servis yapabilirsiniz"
    ],
    "image":"https://w7.pngwing.com/pngs/254/30/png-transparent-lahmajoun-turkish-cuisine-pide-pizza-pita-lahmacun-food-recipe-bread-thumbnail.png"
  },
  {
    "id": 5,
    "title": "Kısır",
    "foodTitle": "vegan",
    "cookTime": "20dk",
    "calories": "200 kcal",

    "ingredientNames": [
      "bulgur wheat",
      "onion",
      "tomato",
      "cucumber",
      "pepper",
      "parsley",
      "mint",
      "pomegranate sauce",
      "olive oil",
      "lemon",
      "salt",
      "black pepper",
      "chili pepper"
    ],
    "ingredients": [
      "1 su bardağı ince bulgur",
      "1 adet kuru soğan",
      "3 adet domates",
      "1 adet salatalık",
      "1 adet yeşil biber",
      "1/2 demet maydanoz",
      "1/2 demet taze nane",
      "3 yemek kaşığı nar ekşisi",
      "3 yemek kaşığı zeytinyağı",
      "1 limonun suyu",
      "Tuz, karabiber, pul biber"
    ],
    "instructions": [
      "Bulguru bir kaseye alın, üzerini kaplayacak kadar kaynar su ilave edin ve kabın üzerini kapatarak bulguru 15-20 dakika kadar demleyin.",
      "Soğanı ince ince doğrayın ve bulgura ekleyin.",
      "Domatesleri küçük küçük doğrayın ve bulgura ekleyin.",
      "Salatalık, yeşil biber, maydanoz ve nane yapraklarını da ince ince doğrayarak bulgura ekleyin.",
      "Nar ekşisi, zeytinyağı, limon suyu, tuz, karabiber ve pul biberi de ekleyerek malzemeleri iyice karıştırın.",
      "Kısırı servis yapmadan önce buzdolabında bir süre bekletmeniz daha lezzetli olmasını sağlayacaktır."
    ],
     "image":"http://www.baharatcifatihsude.com.tr/resimler/tarifler/kisir_tarifi_1.jpg"
  },
  {
    "id": 6,
    "title": "Tabbouleh Salatası",
    "foodTitle": "vegatable",
    "cookTime": "30dk",
    "calories": "329 kcal",

    "ingredientNames": [
      "bulgur wheat",
      "oninon",
      "tomato",
      "cucumber",
      "pepper",
      "parsley",
      "mint",
      "pomegranate sauce",
      "olive oil",
      "lemon",
      "salt",
      "black pepper",
      "chili pepper"
    ],
    "ingredients": [
      "1 demet maydanoz",
      "1 demet nane",
      "3 adet domates",
      "1 adet orta boy soğan",
      "1/2 su bardağı ince bulgur",
      "1/4 su bardağı limon suyu",
      "1/4 su bardağı zeytinyağı",
      "1 çay kaşığı tuz",
      "1/2 çay kaşığı karabiber"
    ],
    "instructions": [
      "Bulguru yıkayıp süzgeçte süzün ve bir kaseye alın. Üzerini kaplayacak kadar sıcak su ilave edip kapağı kapalı şekilde 10-15 dakika bekletin.",
      "Domatesleri küçük küçük doğrayın. Soğanı soyup ince ince kıyın.",
      "Maydanoz ve naneyi yıkayıp suyunu süzün ve incecik kıyın.",
      "Bulguru sudan süzüp fazla suyunu sıkın. İçine doğradığınız domates, soğan, maydanoz ve nane karıştırın.",
      "Ayrı bir kasede limon suyu, zeytinyağı, tuz ve karabiberi karıştırın. Karışımı salatanın üzerine gezdirip iyice karıştırın.",
      "Tabbouleh salatasını en az 1 saat buzdolabında dinlendirip servis yapın."
    ],
    "image": "https://w7.pngwing.com/pngs/556/40/png-transparent-tabbouleh-caesar-salad-leaf-vegetable-greek-salad-straus-md-salad-leaf-vegetable-recipe-grass-thumbnail.png"
  },
   {
     "id": 7,
     "title": "Kuru Fasulye",
     "calories": "320 kcal",

     "foodTitle": "vegatable",
     "cookTime": "2 saat",
     "ingredientNames": [
      "haricot beans",
      "onion",
      "olive oil",
      "chili pepper",
      "oregaron",
      "cumin",
      "salt"
     ],
     "ingredients": [
       "2 su bardağı kuru fasulye",
       "1 adet soğan",
       "2 yemek kaşığı salça",
       "2 yemek kaşığı zeytinyağı",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı pul biber",
       "1 çay kaşığı kekik",
       "1 çay kaşığı kimyon",
       "1 çay kaşığı tuz"
     ],
     "instructions": [
       "Kuru fasulyeleri yıkayın ve bir tencereye alın.",
       "Üzerini iki parmak geçecek kadar su ekleyin ve kaynatın.",
       "Kaynayan fasulyenin suyunu süzün.",
       "Soğanı küçük küpler halinde doğrayın.",
       "Zeytinyağını tencereye alın ve soğanları pembeleşene kadar kavurun.",
       "Salçayı ilave edin ve kokusu çıkana kadar kavurun.",
       "Fasulyeleri tencereye ekleyin.",
       "Karabiber, pul biber, kekik, kimyon ve tuzu da ekleyin.",
       "Üzerini örtecek kadar su ekleyin ve kısık ateşte yaklaşık 2 saat pişirin.",
       "Pişen kuru fasulyeleri servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/190/562/png-transparent-kuru-fasulye-baked-beans-pilaf-vegetarian-cuisine-common-bean-others-food-baking-recipe.png"
   },
   {
     "id": 8,
     "title": "Nohut Yemeği",
     "calories": "364 kcal",

     "foodTitle": "vegatable",
     "cookTime": "60dk",
     "ingredientNames": [
      "chickpeas",
      "onion",
      "tomato sauce",
      "garlic",
      "oil",
      "salt",
      "black pepper",
      "chili pepper",
     ],
     "ingredients": [
       "2 su bardağı haşlanmış nohut",
       "1 adet büyük soğan",
       "1 adet büyük domates",
       "2 yemek kaşığı salça",
       "2 diş sarımsak",
       "2 yemek kaşığı sıvı yağ",
       "1 tatlı kaşığı tuz",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı pul biber",
       "2 su bardağı su",
       "Maydanoz"
     ],
     "instructions": [
       "Soğanı yemeklik doğrayın, domatesi küçük küpler halinde kesin.",
       "Sarımsağı ezin.",
       "Tencereye sıvı yağı koyun ve soğanları pembeleştirin.",
       "Ardından sarımsağı ekleyip biraz daha kavurun.",
       "Domatesi ilave edin ve 2-3 dakika daha kavurun.",
       "Salçayı ekleyin ve 2-3 dakika daha kavurun.",
       "Haşlanmış nohutları ekleyin ve karıştırın.",
       "Tuz, karabiber ve pul biberi ekleyin.",
       "2 su bardağı suyu ekleyin ve karıştırın.",
       "Kaynamaya başladıktan sonra kısık ateşte yaklaşık 30-40 dakika pişirin.",
       "Pişirme işlemi tamamlandıktan sonra üzerine maydanoz serperek servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/508/526/png-transparent-chickpea-baked-beans-rice-and-beans-cooking-cooking.png"
   },
   {
     "id": 9,
     "title": "İçli Köfte",
     "calories": "200 kcal",

     "foodTitle": "other",
     "cookTime": "1 saat 30 dk",
     "ingredientNames": [
      "bulgur wheat",
      "beef",
      "onion",
      "cumin",
      "chili pepper",
      "salt",
      "oil",
      "mint",
      "parsley",
      "lemon",
     ],
     "ingredients": [
       "500 gr. köftelik bulgur",
       "250 gr. dana kıyma",
       "2 adet soğan",
       "2 yemek kaşığı biber salçası",
       "1 yemek kaşığı domates salçası",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı kimyon",
       "1 çay kaşığı pul biber",
       "1 çay kaşığı tuz",
       "2 litre su",
       "Sıvı yağ",
       "1 demet maydanoz",
       "1 demet nane",
       "2 adet limon",
       "Limon dilimleri"
     ],
     "instructions": [
       "Bulguru ıslatın ve suyunu süzün.",
       "Bulguru yoğurma kabına alın ve üzerine su ekleyin.",
       "Yoğurarak suyunu çekmesini sağlayın.",
       "Dana kıymayı ayrı bir kapta karıştırın.",
       "Soğanı rendeleyin ve kıymaya ekleyin.",
       "Biber salçası, domates salçası, karabiber, kimyon, pul biber ve tuzu da ekleyip iyice yoğurun.",
       "İç harcı hazır olduktan sonra cevizden biraz büyük parçalar koparın.",
       "Parçaları elinizde yuvarlayarak ortasını açın ve içine hazırladığınız harcı yerleştirin.",
       "Yuvarlayarak şekil verin ve kızartın.",
       "Maydanoz, nane ve limon dilimleri ile servis yapın."
     ],
     "image": "https://itikat.de/wp-content/uploads/2021/04/itikat-ic%CC%A7li-ko%CC%88fte-header-1.png"
   },
   {
     "id": 10,
     "title": "Gavurdağı Salatası",
     "calories": "115 kcal",

     "foodTitle": "vegetable",
     "cookTime": "20 dk",
     "ingredientNames": [
      "tomato",
      "onion",
      "cucumber",
      "pepper",
      "parsley",
      "mint",
      "olive oil",
      "salt",
      "lemon",
      "chili pepper"
     ],
     "ingredients": [
       "2 adet domates",
       "1 adet kuru soğan",
       "1 adet salatalık",
       "1 adet yeşil biber",
       "1/2 demet maydanoz",
       "1/2 demet taze nane",
       "1/2 limon suyu",
       "3 yemek kaşığı zeytinyağı",
       "1/2 çay kaşığı tuz",
       "1/2 çay kaşığı pul biber"
     ],
     "instructions": [
       "Domatesleri soyup küp şeklinde doğrayın.",
       "Kuru soğanı ince ince doğrayın.",
       "Salatalığı küp şeklinde doğrayın.",
       "Yeşil biberi küçük küp şeklinde doğrayın.",
       "Maydanoz ve taze naneyi ince ince kıyın.",
       "Tüm malzemeleri karıştırma kabına alın.",
       "Üzerine zeytinyağı, limon suyu, tuz ve pul biber ekleyip karıştırın.",
       "Salatayı servis tabağına alın ve servis yapın."
     ],
     "image": "https://balcankebabi.com/wp-content/uploads/2015/05/gavurdagi.jpg"
   },
   {
     "id": 11,
     "title": "Çoban Salata",
     "calories": "120 kcal",

     "foodTitle": "vegetable",
     "cookTime": "10dk",
     "ingredientNames": [
      "tomato",
      "cucumber",
      "pepper",
      "red onion",
      "pepper",
      "olive oil",
      "pomegranate sauce",
      "black pepper",
     ],
     "ingredients": [
       "3 adet domates",
       "1 adet salatalık",
       "1 adet kırmızı soğan",
       "1 adet yeşil biber",
       "1/2 demet maydanoz",
       "1/2 demet dereotu",
       "2 yemek kaşığı zeytinyağı",
       "1 yemek kaşığı nar ekşisi",
       "Tuz",
       "Karabiber"
     ],
     "instructions": [
       "Domates, salatalık, kırmızı soğan ve yeşil biberi küçük küpler halinde doğrayın ve karıştırma kabına alın.",
       "Maydanoz ve dereotunu ince kıyın ve diğer sebzelerin üzerine ekleyin.",
       "Zeytinyağı, nar ekşisi, tuz ve karabiberi de ekleyip karıştırın.",
       "Salatanız hazır, servis yapabilirsiniz."
     ],
     "image": "https://w7.pngwing.com/pngs/96/972/png-transparent-greek-salad-buffet-coban-salatas%C4%B1-dish-salad-thumbnail.png"
   },
   {
     "id": 12,
     "title": "Mercimek Çorbası",
     "calories": "60 kcal",

     "foodTitle": "vegatable",
     "cookTime": "40dk",
     "ingredientNames": [
      "green lentil",
      "onion",
      "garlic",
      "chili pepper",
      "tomato sauce",
      "flour",
      "mint",
      "black pepper",

     ],
     "ingredients": [
       "1 su bardağı yeşil mercimek",
       "1 adet kuru soğan",
       "2 diş sarımsak",
       "1 yemek kaşığı domates salçası",
       "1 yemek kaşığı un",
       "2 yemek kaşığı sıvı yağ",
       "1 tatlı kaşığı pul biber",
       "1 tatlı kaşığı nane",
       "6 su bardağı su",
       "Tuz",
       "Karabiber"
     ],
     "instructions": [
       "Yeşil mercimekleri yıkayın ve suyunu süzün.",
       "Tencereye sıvı yağı alın ve ısınması için ocakta tutun.",
       "Soğanları küçük küçük doğrayın ve sıvı yağda kavurun.",
       "Sarımsakları ezin ve soğanlara ekleyin, kavurmaya devam edin.",
       "Domates salçasını ekleyin ve birkaç dakika daha karıştırın.",
       "Unu ekleyin ve 1-2 dakika daha karıştırarak kavurmaya devam edin.",
       "Yeşil mercimekleri de tencereye ekleyin.",
       "Üzerine 6 su bardağı su ekleyin ve karıştırın.",
       "Çorba kaynayana kadar orta ateşte pişirmeye devam edin.",
       "Kaynadıktan sonra altını kısın ve tencerenin kapağını kapatın.",
       "Mercimekler tamamen yumuşayana kadar yaklaşık 30 dakika pişirin.",
       "Pişirme işlemi tamamlandıktan sonra tuz ve karabiber ekleyin, karıştırın.",
       "Ayrı bir tavada pul biberi kavurun.",
       "Naneyi ekleyin ve karıştırın.",
       "Kavrulmuş baharatlı karışımı çorbanın üzerinde gezdirerek servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/230/940/png-transparent-lentil-soup-ezogelin-soup-turkish-cuisine-chicken-soup-bouillon-meat-soup-food-recipe.png"
   },
   {
     "id": 13,
     "title": "Patlıcan Musakka",
     "calories": "173 kcal",

     "foodTitle": "other",
     "cookTime": "1 saat",
     "ingredientNames": [
      "eggplant",
      "beef",
      "tomato",
      "pepper",
      "onion",
      "garlic",
      "tomato sauce",
      "black pepper",
      "garlic",
      "milk",
      "butter",
      "flour",
      "oil",
      "chili pepper"
     ],
     "ingredients": [
       "2 adet patlıcan",
       "500 gram kıyma",
       "3 adet domates",
       "2 adet yeşil biber",
       "1 adet kuru soğan",
       "2 diş sarımsak",
       "1 yemek kaşığı domates salçası",
       "1 yemek kaşığı biber salçası",
       "1 yemek kaşığı sıvı yağ",
       "Tuz",
       "Karabiber",
       "Pul biber",
       "1 su bardağı su",
       "Beşamel sos için:",
       "3 yemek kaşığı tereyağı",
       "3 yemek kaşığı un",
       "3 su bardağı süt",
       "1 çay kaşığı tuz",
       "1 çay kaşığı karabiber"
     ],
     "instructions": [
       "Patlıcanları alacalı soyup, halka halka kesin ve tuzlu suda bekletin.",
       "Kıymayı bir tavada kavurun.",
       "Soğanı ve sarımsağı ince ince doğrayıp kavrulan kıymaya ekleyin ve karıştırın.",
       "Biberleri ve domatesleri küçük küçük doğrayın ve tencereye alın.",
       "Salçaları da ilave edin ve biraz daha kavurun.",
       "Tuz, karabiber ve pul biberi de ekleyip biraz daha karıştırın.",
       "Suyu da ilave edin ve 10 dakika kadar pişirin.",
       "Patlıcanları sudan çıkarıp kurulayın.",
       "Patlıcanları yağda kızartın.",
       "Beşamel sos için, tereyağını tavada eritin.",
       "Üzerine unu ekleyin ve karıştırarak kavurun.",
       "Sütü azar azar ekleyin ve karıştırarak pişirin.",
       "Tuz ve karabiberi ekleyin ve koyulaşana kadar pişirin.",
       "Patlıcanları fırın kabına alın.",
       "Üzerine hazırladığınız kıymalı harcı dökün.",
       "Son olarak beşamel sosu da dökün.",
       "Önceden ısıtılmış 180 derece fırında, 40 dakika kadar pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/500/202/png-transparent-moussaka-vegetarian-cuisine-pastitsio-european-cuisine-cuisine-of-the-united-states-lasagna-food-recipe-american-food.png"
   },
   {
     "id": 14,
     "title": "Karışık Pide",
     "calories": "800 kcal",

     "foodTitle": "other",
     "cookTime": "40dk",
     "ingredientNames": [
      "flour",
      "beef",
      "onion",
      "mushroom",
      "black pepper",
      "cheddar cheese",
      "chili pepper"
     ],
     "ingredients": [
       "2 adet pide hamuru",
       "200 gram kıyma",
       "1 adet domates",
       "1 adet biber",
       "1 adet soğan",
       "100 gram mantar",
       "100 gram kaşar peyniri",
       "1 çay kaşığı tuz",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı kırmızı toz biber"
     ],
     "instructions": [
       "Pide hamurlarını açın ve bir tepsiye yerleştirin.",
       "Kıymayı bir tavada kavurun.",
       "Soğanı, biberi ve domatesi küçük küçük doğrayın ve kavrulan kıymaya ekleyin.",
       "Mantarları da ekleyip birkaç dakika daha kavurun.",
       "Hazırlanan harcı pidelere paylaştırın.",
       "Üzerlerine rendelenmiş kaşar peyniri serpin.",
       "Önceden ısıtılmış 200 derece fırında 20-25 dakika pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/336/734/png-transparent-pizza-pide-sujuk-turkish-cuisine-kebab-pizza-food-recipe-eating.png"
   },
   {
     "id": 15,
     "title": "Hamsi Tava",
     "calories": "720 kcal",

     "ingredientNames": [
      "anchovy",
      "corn flour",
      "flour",
      "black pepper",
      "chili pepper",
      "oil"
     ],
     "ingredients": [
       "500 gr hamsi",
       "1 çay bardağı mısır unu",
       "1 çay bardağı un",
       "1 çay kaşığı tuz",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı pul biber",
       "Sıvı yağ"
     ],
     "instructions": [
       "Hamsileri yıkayın ve kılçıklarını çıkartın.",
       "Mısır unu, un, tuz, karabiber ve pul biberi bir kaba koyun ve karıştırın.",
       "Hazırladığınız karışımı bir tabağa dökün.",
       "Hamsileri karışıma bulayın.",
       "Tavada sıvı yağı kızdırın.",
       "Hamsileri tavaya dizin ve arkalı önlü kızartın.",
       "Kağıt havlu serili bir tabağa aldığınız hamsi tavalarını servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/78/819/png-transparent-sardine-fish-products-oily-fish-dish-network-fish-food-animals-seafood-thumbnail.png"
   },
   {
     "id": 16,
     "title": "Tavuk Şiş",
     "calories": "1700 kcal",

     "foodTitle": "other",
     "cookTime": "60dk",
     "ingredientNames": [
      "chicken breast",
      "black pepper",
      "chili pepper",
      "oil",
      "tomato sauce",
      "pepper",
      "yoghurt",
     ],
     "ingredients": [
       "1 kilogram tavuk göğsü",
       "1 adet kırmızı biber",
       "1 adet yeşil biber",
       "1 adet sarı biber",
       "1 adet büyük soğan",
       "1 su bardağı yoğurt",
       "3 yemek kaşığı sıvı yağ",
       "1 yemek kaşığı domates salçası",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı pul biber",
       "1 çay kaşığı tuz"
     ],
     "instructions": [
       "Tavuk göğsünü küp şeklinde kesin.",
       "Biberleri, soğanı da küp şeklinde doğrayın.",
       "Tüm malzemeleri bir kaba alın ve tavuk etleri malzemelerin içerisinde en az 2 saat marine edin.",
       "Marine edilmiş tavuk etlerini şişlere geçirin.",
       "Izgara veya mangalda pişirin.",
       "Sıcak olarak servis edin."
     ],
     "image": "https://w7.pngwing.com/pngs/284/247/png-transparent-doner-kebab-barbecue-chicken-shish-kebab-chicken-curry-food-animals-recipe.png"
   },
   {
     "id": 17,
     "title": "Beyti Kebabı",
     "calories": "920 kcal",

     "foodTitle": "other",
     "cookTime": "40dk",
     "ingredientNames": [
      "meat",
      "onion",
      "bread",
      "salt",
      "cumin",
      "blackpepper",
      "butter",
      "tomatopaste",
      "pepperpaste",
      "yoghurt"
     ],
     "ingredients": [
       "500 gram dana kıyma",
       "1 adet soğan",
       "2 dilim bayat ekmek",
       "1 yemek kaşığı tuz",
       "1 tatlı kaşığı karabiber",
       "1 tatlı kaşığı kimyon",
       "2 diş sarımsak",
       "8 adet lavaş ekmeği",
       "100 gram tereyağı",
       "1 yemek kaşığı domates salçası",
       "2 yemek kaşığı biber salçası",
       "1 su bardağı yoğurt"
     ],
     "instructions": [
       "Kıyma, rendelenmiş soğan, bayat ekmek, tuz, karabiber, kimyon ve sarımsağı iyice yoğurun.",
       "Hazırladığınız kıymayı şişlere sıkıştırın ve ızgarada pişirin.",
       "Domates ve biber salçasını eritilmiş tereyağına ekleyip karıştırın.",
       "Pişen kebapları lavaşın içine yerleştirip sarın.",
       "Üzerine hazırladığınız sosu dökün ve yoğurtla servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/472/8/png-transparent-beyti-kebab-doner-kebab-hors-d-oeuvre-doner-sepeti-food-salad-beyti-kebab-doner-kebab-hors-d-oeuvre.png"
   },
   {
     "id": 18,
     "title": "Anne Köftesi",
     "calories": "400 kcal",

     "foodTitle": "other",
     "cookTime": "40 dk",
     "ingredientNames": [
      "meat",
      "onion",
      "egg",
      "flour",
      "tomatopaste",
      "pepperpaste",
      "garlic",
      "blackpepper",
      "cumin",
      "chilipepper",
      "salt",
      "oil"

     ],
     "ingredients": [
       "500 gr kıyma",
       "1 adet soğan",
       "1 adet yumurta",
       "1 su bardağı galeta unu",
       "1 yemek kaşığı biber salçası",
       "1 yemek kaşığı domates salçası",
       "2 diş sarımsak",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı kimyon",
       "1 çay kaşığı kırmızı pul biber",
       "Tuz",
       "Sıvı yağ"
     ],
     "instructions": [
       "Kıymayı bir kaba alın.",
       "Soğanı rendeleyin ve kıymaya ekleyin.",
       "Biber salçası, domates salçası, sarımsak, yumurta, galeta unu, karabiber, kimyon, kırmızı pul biber ve tuzu da ekleyip iyice yoğurun.",
       "Hazırladığınız köfte harcından parçalar kopartıp yuvarlayın.",
       "Sıvı yağda kızgın yağda köfteleri kızartın.",
       "Pişen köfteleri kağıt havlu üzerine alın ve fazla yağını emmesi için bekletin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/383/941/png-transparent-meatball-frikadeller-kofta-recipe-cutlet-meat-food-recipe-cuisine-thumbnail.png"
   },
   {
     "id": 19,
     "title": "Tandır Kebabı",
     "calories": "100gr eşittir 250 kcal",

     "foodTitle": "other",
     "cookTime": "3 saat",
     "ingredientNames": [
      "tomatopaste",
      "pepperpaste",
      "yoghurt",
      "blackpepper",
      "butter",
      "garlic",
      "salt",
      "lemon",
      "chilipepper"
     ],
     "ingredients": [
       "1,5 kg kuzu but (kemiksiz)",
       "1 su bardağı yoğurt",
       "2 yemek kaşığı tereyağı",
       "1 yemek kaşığı domates salçası",
       "1 yemek kaşığı biber salçası",
       "1 yemek kaşığı pul biber",
       "1 yemek kaşığı karabiber",
       "1 yemek kaşığı kekik",
       "1 tatlı kaşığı tuz",
       "1 baş sarımsak",
       "1 adet limon",
       "Sıcak su"
     ],
     "instructions": [
       "Kuzu butu yıkayıp kurulayın ve derin bir kaba alın.",
       "Üzerine yoğurdu, tereyağını, salçaları, baharatları ve tuzu ekleyip iyice karıştırın.",
       "Sarımsakları soyup bütün olarak etin üzerine yerleştirin.",
       "Limonun suyunu sıkıp etin üzerine dökün ve bir gece buzdolabında bekletin.",
       "Bir fırın tepsisine yağlı kağıt serin ve eti kağıdın üzerine yerleştirin.",
       "Eti fırına vermeden önce üzerine bol miktarda sıcak su ekleyin ve önceden ısıtılmış 170 derece fırında yaklaşık 3 saat pişirin.",
       "Pişen tandır kebabını servis tabağına alın ve sıcak olarak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/462/11/png-transparent-tandoori-chicken-chicken-tikka-kebab-pakora-chicken-tikka-food-recipe-chicken-meat.png"
   },
   {
     "id": 20,
     "title": "Su Böreği",
     "calories": "750 kcal",

     "foodTitle": "other",
     "cookTime": "60dk",
     "ingredientNames": [
      "dough",
      "milk",
      "oil",
      "egg",
      "salt",
      "cheese",
      "parsley"
     ],
     "ingredients": [
       "12 adet yufka",
       "1 litre süt",
       "1 su bardağı sıvı yağ",
       "3 adet yumurta",
       "1 çay kaşığı tuz",
       "250 gram beyaz peynir",
       "Maydanoz"
     ],
     "instructions": [
       "Sütü, sıvı yağı, yumurtaları ve tuzu bir kapta çırpın.",
       "Beyaz peyniri ezin ve maydanozu ince ince doğrayın.",
       "Yufkanın birini tezgaha serin ve süt karışımından fırça yardımıyla sürün.",
       "Diğer yufkaları da aynı şekilde sırayla üzerine serin ve aralarına süt karışımından sürün.",
       "Son yufkayı sürmeden önce üzerine peynir ve maydanoz karışımını serpiştirin.",
       "Yufkanın kenarlarını içe doğru kıvırarak rulo şeklinde sarın.",
       "Dilimleyerek servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/859/433/png-transparent-borek-turkish-cuisine-baklava-pl%C4%83cint%C4%83-su-bore%C4%9Fi-cheese-borek-turkish-cuisine-baklava.png"
   },
   {
     "id": 21,
     "title": "Yoğurt Kebabı",
     "calories": "100gr eşittir 240 kcal",

     "foodTitle": "meat",
     "cookTime": "60 dk",
     "ingredientNames": [],
     "ingredients": [
       "1 kg kuzu eti",
       "1 kg yoğurt",
       "3 yemek kaşığı un",
       "2 adet soğan",
       "1/2 su bardağı sıvı yağ",
       "2 yemek kaşığı tereyağı",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı tuz",
       "1 demet maydanoz"
     ],
     "instructions": [
       "Kuzu etini küçük parçalar halinde doğrayın.",
       "Soğanları ince ince doğrayın ve kıyma ile karıştırın.",
       "Etli karışımı bir tavaya alın ve sıvı yağı ekleyin.",
       "Kısık ateşte etler pişene kadar kavurun.",
       "Diğer taraftan yoğurdu çırpın, içine unu ekleyip karıştırın.",
       "Kavrulan etleri yoğurtlu karışıma ekleyin ve tuz, karabiber ilave edin.",
       "Kebap harcını yağlanmış fırın tepsisine dökün.",
       "Üzerine tereyağı parçalarını koyun.",
       "Önceden ısıtılmış 180 derece fırında 30-40 dakika pişirin.",
       "Pişen yoğurt kebabını maydanozla süsleyerek servis yapın."
     ],
     "image": "https://hacialihaydarusta.com/wp-content/uploads/2021/05/Yogurtlu-Kebap-1024x695.jpg"
   },
   {
     "id": 22,
     "title": "Ispanaklı Börek",
     "foodTitle": "vegetable",
     "calories": "295 kcal",

     "cookTime": "60 dk",
     "ingredientNames": [
      "dough",
      "spinach",
      "butter",
      "oil",
      "curd cheese",
      "cheese",
      "black pepper",
      "salt",
      "egg",
     ],
     "ingredients": [
       "6 adet yufka",
       "1 kg ıspanak",
       "1 adet kuru soğan",
       "2 yemek kaşığı tereyağı",
       "2 yemek kaşığı sıvı yağ",
       "1 su bardağı lor peyniri",
       "1 su bardağı rendelenmiş kaşar peyniri",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı tuz",
       "1 adet yumurta sarısı"
     ],
     "instructions": [
       "Ispanakları yıkayıp doğrayın.",
       "Kuru soğanı ince ince doğrayın.",
       "Tencereye tereyağı ve sıvı yağı alıp kızdırın.",
       "Doğranmış soğanları ekleyip kavurun.",
       "Ispanakları ekleyin ve kavurmaya devam edin.",
       "Tuz ve karabiberi ekleyip karıştırın ve ocaktan alın.",
       "Lor peynirini ekleyip karıştırın.",
       "Yufkaları açın ve üzerine hazırladığınız ıspanaklı karışımdan koyun.",
       "Kaşar peyniri serpip rulo şeklinde sarın.",
       "Yağlanmış fırın tepsisine dizin.",
       "Üzerine yumurta sarısı sürün.",
       "Önceden ısıtılmış 180 derece fırında kızarana kadar pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://asrinborekizmit.com/file/urungal/ispanakli3.png"
   },
   {
     "id": 23,
     "title": "Kıymalı Pide",
     "foodTitle": "meat",
     "calories": "600 kcal",
     "cookTime": "40 dk",
     "ingredientNames": [
      "dry yeast",
      "sugar",
      "salt",
      "oil",
      "onion",
      "tomato",
      "pepperpaste",
      "blackpepper",
      "cheese"
     ],
     "ingredients": [
       "3 su bardağı un",
       "1 yemek kaşığı kuru maya",
       "1 yemek kaşığı toz şeker",
       "1 tatlı kaşığı tuz",
       "1/2 su bardağı sıvı yağ",
       "1 su bardağı ılık su",
       "300 gram kıyma",
       "1 adet kuru soğan",
       "2 adet domates",
       "1 yemek kaşığı biber salçası",
       "Tuz, karabiber, pul biber",
       "1 su bardağı rendelenmiş kaşar peyniri"
     ],
     "instructions": [
       "Un, maya, şeker, tuz, sıvı yağ ve ılık suyu yoğurma kabına alın.",
       "Hamuru yoğurun ve 1 saat kadar mayalandırın.",
       "Kıymayı bir tavada kavurun.",
       "Soğanı küçük küpler halinde doğrayıp kıymaya ekleyin.",
       "Domatesleri de küçük küpler halinde doğrayıp tavaya ilave edin.",
       "Biber salçası, tuz, karabiber ve pul biberi ekleyip karıştırın ve ocaktan alın.",
       "Hamuru 6 eşit parçaya ayırın ve yuvarlayarak açın.",
       "Açtığınız hamurları yağlanmış fırın tepsisine yerleştirin.",
       "Kıymalı harcı hamurların üzerine yayın.",
       "Üzerlerine rendelenmiş kaşar peyniri serpin.",
       "Önceden ısıtılmış 200 derece fırında 20-25 dakika pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://www.ustapideci.com.tr/cmsfiles/products/kiymali-pide.png?v=31"
   },
   {
     "id": 24,
     "title": "Şiş Kebabı",
     "calories": "220 kcal",
     "foodTitle": "meat",
     "cookTime": "40 dk",
     "ingredientNames": [
      "meat",
      "pepper",
      "onion",
      "garlic",
      "chilipepper",
      "blackpepper",

     ],
     "ingredients": [
       "500 gr dana eti (kuşbaşı)",
       "1 adet kırmızı biber",
       "1 adet yeşil biber",
       "1 adet soğan",
       "2 diş sarımsak",
       "2 yemek kaşığı zeytinyağı",
       "1 tatlı kaşığı tuz",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı pul biber",
       "6 adet şiş"
     ],
     "instructions": [
       "Etleri şişe dizin.",
       "Biberleri ve soğanı küp şeklinde doğrayın.",
       "Sarımsakları ezin.",
       "Tuz, karabiber, pul biber ve zeytinyağı ile birlikte etlere yedirin.",
       "Sebzeleri de şişe dizin.",
       "Önceden ısıtılmış ızgarada etleri pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/828/255/png-transparent-skewer-pincho-kebab-vegetable-fruit-vegetable-food-fruit-cuisine.png"
   },
   {
     "id": 25,
     "title": "Karnıyarık",
     "calories": "170 kcal",
     "foodTitle": "vegetable",
     "cookTime": "60 dk",
     "ingredientNames": [
      "eggplant",
      "tomato",
      "pepper",
      "onion",
      "garlic",
      "pepperpaste",
      "oil",
      "blackpepper"
     ],
     "ingredients": [
       "4 adet patlıcan",
       "300 gr. kıyma",
       "2 adet domates",
       "2 adet yeşil biber",
       "1 adet soğan",
       "3 diş sarımsak",
       "1 yemek kaşığı biber salçası",
       "2 yemek kaşığı sıvı yağ",
       "Tuz",
       "Karabiber"
     ],
     "instructions": [
       "Patlıcanların sap kısımlarını kesip alın ve ortalarına çizik atın.",
       "Tuzlu suda bekletin.",
       "Kıymayı kavurma tenceresinde kavurun.",
       "Yemeklik doğranmış soğanları ilave edin.",
       "Rendelenmiş domatesleri, ince kıyılmış yeşil biberleri, sarımsakları, salçayı ekleyin.",
       "Tuz, karabiber ilave edip karıştırın.",
       "Sosu kısık ateşte 15-20 dakika pişirin.",
       "Patlıcanları suda bekletmekten çıkarıp suyunu sıkın.",
       "Tavaya sıvı yağı koyun, patlıcanları kızartın.",
       "Piyazlık doğranmış soğanı da ekleyin, bir iki dakika soteleyin.",
       "Fırın tepsisine patlıcanları alın.",
       "Patlıcanların içlerine hazırlanan harçtan ekleyin.",
       "Üzerine rendelenmiş kaşar peyniri serpiştirin.",
       "Önceden ısıtılmış 180 derece fırında 20-25 dakika pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/1016/546/png-transparent-asian-cuisine-turkish-cuisine-karn%C4%B1yar%C4%B1k-mediterranean-cuisine-pilaf-eggplant-food-recipe-vegetables-thumbnail.png"
   },
   {
     "id": 26,
     "title": "Saksuka",
     "calories": "75 kcal",
     "foodTitle": "vegetable",
     "cookTime": "30 dk",
     "ingredientNames": [
      "eggplant",
      "courgette",
      "tomato",
      "oliveoil",
      "chilipepper"
     ],
     "ingredients": [
       "2 adet patlıcan",
       "2 adet kabak",
       "2 adet yeşil biber",
       "2 adet domates",
       "3 diş sarımsak",
       "3 yemek kaşığı zeytinyağı",
       "1 çay kaşığı kırmızı pul biber",
       "Tuz"
     ],
     "instructions": [
       "Patlıcan ve kabakları yıkayıp küp şeklinde doğrayın.",
       "Yeşil biberleri de küçük parçalar halinde doğrayın.",
       "Domatesleri soyup küp şeklinde doğrayın.",
       "Sarımsakları ince ince kıyın.",
       "Zeytinyağını tencereye alıp kızdırın.",
       "Sarımsakları ekleyip kavurun.",
       "Yeşil biberleri de ekleyip birkaç dakika daha kavurun.",
       "Patlıcanları tencereye ekleyin ve kapağı kapalı şekilde yaklaşık 10 dakika kadar pişirin.",
       "Kabakları da ekleyip birkaç dakika daha pişirin.",
       "Son olarak domatesleri ekleyip karıştırın.",
       "Tuz ve kırmızı pul biber ekleyin.",
       "Kapağı kapalı şekilde 5-10 dakika daha pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/642/851/png-transparent-meze-%C5%9Eak%C5%9Fuka-shakshouka-haydari-arde%C5%9Fen-belediyesi-yoresel-yemekler-sofras%C4%B1-others-food-cheese-platter.png"
   },
   {
     "id": 27,
     "title": "Közlenmiş Patlıcan Salatası",
     "calories": "79 kcal",
     "foodTitle": "salad",
     "cookTime": "40 dk",
     "ingredientNames": [
      "eggplant",
      "tomato",
      "redonion",
      "garlic",
      "oliveoil",
      "pomegranate sauce",
      "parsley",
      "blackpepper"
     ],
     "ingredients": [
       "2 adet orta boy patlıcan",
       "1 adet orta boy domates",
       "1 adet orta boy kırmızı soğan",
       "1 diş sarımsak",
       "1 yemek kaşığı zeytinyağı",
       "1 yemek kaşığı nar ekşisi",
       "1/4 demet maydanoz",
       "Tuz",
       "Karabiber"
     ],
     "instructions": [
       "Patlıcanları közleyin ve kabuklarını soyun.",
       "Domates ve kırmızı soğanı küp şeklinde doğrayın.",
       "Maydanozu ince kıyın.",
       "Bir kase içerisinde nar ekşisi, zeytinyağı, sarımsak, tuz ve karabiberi karıştırın.",
       "Közlenmiş patlıcanları küp şeklinde doğrayın ve sosun içerisine ekleyin.",
       "Domates, kırmızı soğan ve maydanozu da ekleyip karıştırın.",
       "Servis tabağına alın ve üzerini maydanoz ile süsleyerek servis yapın."
     ],
     "image": "https://durumcubaba.com.tr/productImages/1286283927.png"
   },

   {
     "id": 28,
     "title": "Domates Çorbası",
     "calories": "70 kcal",
     "foodTitle": "soup",
     "cookTime": "30 dk",
     "ingredientNames": [
      "tomato",
      "onion",
      "butter",
      "salt",
      "blackpepper",
      "cream",
      "parsley",

     ],
     "ingredients": [
       "5 adet orta boy domates",
       "1 adet orta boy soğan",
       "2 yemek kaşığı tereyağı",
       "2 yemek kaşığı un",
       "4 su bardağı tavuk suyu veya su",
       "1 çay kaşığı şeker",
       "1 çay kaşığı tuz",
       "1 çay kaşığı karabiber",
       "2 yemek kaşığı krema",
       "2 yemek kaşığı ince kıyılmış maydanoz"
     ],
     "instructions": [
       "Domatesleri soyup doğrayın.",
       "Soğanı doğrayın.",
       "Tereyağını bir tencerede eritin.",
       "Soğanı ekleyip kavurun.",
       "Domatesleri ekleyin ve karıştırarak pişirin.",
       "Unu ekleyip 1-2 dakika daha kavurun.",
       "Tavuk suyunu veya suyu ekleyin ve kaynatın.",
       "Şeker, tuz ve karabiberi ekleyin.",
       "Blendır ile karışımı pürüzsüz hale getirin.",
       "Tencereyi ocağa alıp krema ekleyin.",
       "Kısık ateşte 5 dakika daha pişirin.",
       "Servis yaparken üzerine ince kıyılmış maydanoz serpin."
     ],
     "image": "https://w7.pngwing.com/pngs/684/835/png-transparent-tomato-soup-gazpacho-plate-bisque-vegetarian-cuisine-plate-soup-food-recipe.png"
   },
   {
     "id": 29,
     "title": "Cevizli Biber Dolması",
     "calories": "300 kcal",

     "foodTitle": "vegetable",
     "cookTime": "60 dk",
     "ingredientNames": [
      "pepper",
      "rice",
      "onion",
      "tomato",
      "pepperpaste",
      "walnut",
      "blackpepper",
      "chilipepper",
      "oliveoil",

     ],
     "ingredients": [
       "10 adet dolmalık yeşil biber",
       "1 su bardağı pirinç",
       "1 adet orta boy kuru soğan",
       "1 adet domates",
       "1 yemek kaşığı biber salçası",
       "1/2 su bardağı ceviz içi",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı pul biber",
       "1 çay kaşığı tuz",
       "2 yemek kaşığı zeytinyağı",
       "2 su bardağı su"
     ],
     "instructions": [
       "Biberlerin saplarını kesin, içlerini çıkarın ve yıkayın.",
       "Pirinçleri yıkayın ve süzün.",
       "Kuru soğanı yemeklik doğrayın.",
       " Domatesi küp küp doğrayın.",
       "Bir tencereye zeytinyağı alıp kızdırın.",
       "Soğanları ekleyip pembeleştirin.",
       "Salçayı ekleyip kavurun.",
       "Domatesleri, pirinci ve cevizleri ekleyip karıştırın.",
       "Tuz, karabiber ve pul biber ekleyip karıştırın.",
       "Biberlerin içini hazırladığınız harç ile doldurun.",
       "Dolmaları tencereye dizin ve suyu ekleyin.",
       "Kısık ateşte dolmalar pişene kadar yaklaşık 30-40 dakika pişirin.",
       "Servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/139/168/png-transparent-bell-pepper-stuffed-peppers-vegetarian-cuisine-paprika-pimiento-stuffed-food-natural-foods-food-recipe.png"
   },
   {
     "id": 30,
     "title": "Şekerpare",
     "calories": "283 kcal",
      
     "foodTitle": "dessert",
     "cookTime": "40 dk",
     "ingredientNames": [
      "butter",
      "powdered sugar",
      "flour",
      "oil",
      "baking powder",
      "sugar"
     ],
     "ingredients": [
       "250 gram tereyağı",
       "1 su bardağı pudra şekeri",
       "3 su bardağı un",
       "1 paket vanilya",
       "2 adet yumurta sarısı",
       "1 çay kaşığı kabartma tozu",
       "1 çay bardağı sıvı yağ",
       "1 su bardağı şeker",
       "2 su bardağı su"
     ],
     "instructions": [
       "Tereyağını oda sıcaklığında bekletin.",
       "Tereyağı ve pudra şekerini yoğurma kabına alıp karıştırın.",
       "Un, vanilya, yumurta sarıları ve kabartma tozunu ekleyip yoğurun.",
       "Hamurdan ceviz büyüklüğünde parçalar koparıp yuvarlayın ve yağlanmış fırın tepsisine dizin.",
       "Önceden ısıtılmış 180 derece fırında hafif pembeleşene kadar pişirin.",
       "Şeker ve suyu tencereye alıp karıştırarak kaynatın.",
       "Kaynayan şerbeti ocaktan alıp soğuması için bekletin.",
       "Fırından çıkan şekerparelerin üzerine soğuk şerbeti dökün.",
       "Bir süre dinlendikten sonra servis yapın."
     ],
     "image": "https://www.dedeoglu.com.tr/wp-content/uploads/2021/11/S%CC%A7ekerpare-600x600.png"
   },
   {
     "id": 31,
     "title": "Et Kavurma",
     "calories": "345 kcal",

     "foodTitle": "main",
     "cookTime": "60 dk",
     "ingredientNames": [
      "beef",
      "onion",
      "oil",
      "salt",
      "blackpepper",
     ],
     "ingredients": [
       "1 kg dana eti",
       "2 adet kuru soğan",
       "3 yemek kaşığı sıvı yağ",
       "Tuz",
       "Karabiber"
     ],
     "instructions": [
       "Eti yıkayıp küçük parçalara kesin.",
       "Tencereye sıvı yağı alın ve kızdırın.",
       "Kuru soğanları ince ince doğrayın ve yağda kavurun.",
       "Etleri ekleyin ve karıştırarak kavurun.",
       "Tuz ve karabiberi ekleyin.",
       "Orta ateşte, ara sıra karıştırarak etler suyunu salıp çekene kadar kavurun.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/645/120/png-transparent-roast-beef-roasting-dish-cuisine-meat-roaster-food-seafood-beef.png"
   },
   {
     "id": 32,
     "title": "Etli Güveç",
     "calories": "345 kcal",

     "foodTitle": "main course",
     "cookTime": "120 dk",
     "ingredientNames": [
      "meat",
      "courgette",
      "tomato",
      "onion",
      "tomatopaste",
      "pepperpaste",
      "olive oil",
      "salt",
      "chili pepper",
      "garlic"
     ],
     "ingredients": [
       "500 gram kuşbaşı et",
       "2 adet patlıcan",
       "2 adet kabak",
       "2 adet domates",
       "1 adet kuru soğan",
       "4 diş sarımsak",
       "2 yemek kaşığı biber salçası",
       "2 yemek kaşığı domates salçası",
       "2 yemek kaşığı zeytinyağı",
       "Tuz",
       "Karabiber",
       "Pul biber",
       "1 su bardağı su"
     ],
     "instructions": [
       "Patlıcanları soyup küp şeklinde doğrayın ve tuzlu suda bekletin.",
       "Kabakları yıkayıp küp şeklinde doğrayın.",
       "Soğanı ve sarımsakları ince ince doğrayın.",
       "Domatesleri küp şeklinde doğrayın.",
       "Geniş bir tencereye zeytinyağını alıp kızdırın.",
       "Soğan ve sarımsakları ekleyip kavurun.",
       "Kuşbaşı etleri ekleyip suyunu çekene kadar kavurun.",
       "Salçaları ekleyip karıştırın.",
       "Doğranmış patlıcanları ve kabakları ekleyin ve karıştırın.",
       "Tuz, karabiber ve pul biber ekleyin.",
       "Domatesleri ekleyip karıştırın.",
       "1 su bardağı su ekleyin ve karıştırın.",
       "Kısık ateşte pişirin.",
       "Güveç kaplarına paylaştırın ve önceden ısıtılmış 180 derece fırında üzeri kızarana kadar pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/199/973/png-transparent-irish-stew-curry-chinese-cuisine-vegetarian-cuisine-spicy-beef-stew-bamboo-shoots-soup-food-beef-thumbnail.png"
   },
   {
     "id": 33,
     "title": "Bulgur Pilavı",
     "calories": "114 kcal",

     "foodTitle": "main dish",
     "cookTime": "30 dk",
     "ingredientNames": [
      "bulgur wheat",
      "butter",
      "onion"
     ],
     "ingredients": [
       "2 su bardağı ince bulgur",
       "2 yemek kaşığı tereyağı",
       "2 yemek kaşığı sıvı yağ",
       "1 adet orta boy soğan",
       "2 su bardağı sıcak su",
       "Tuz"
     ],
     "instructions": [
       "Bir tencereye tereyağı ve sıvı yağı alın ve eritin.",
       "Soğanı küçük küçük doğrayın ve yağın içine ekleyin. Kısık ateşte soğanlar pembeleşinceye kadar kavurun.",
       "Bulguru ekleyin ve 2-3 dakika daha kavurun.",
       "Sıcak suyu tencereye ilave edin ve tuzunu ekleyin. Bir defa karıştırın ve tencerenin kapağını kapatın.",
       "Ocağın altını kısın ve bulgur suyunu çekene kadar pişirin. (Yaklaşık 15-20 dakika)",
       "Pilavın demlenmesi için 10 dakika kadar bekletin ve servis yapın."
     ],
     "image": "https://img2.pngindir.com/20180809/ovf/kisspng-arroz-con-pollo-longan-pilaf-hng-yn-ch-amp-quot-amp-quot-5b6c00a5ba22a5.5291577115338047097624.jpg"
   },
   {
     "id": 34,
     "title": "Kabak Dolması",
     "calories": "144 kcal",

     "foodTitle": "main dish",
     "cookTime": "60 dk",
     "ingredientNames": [
      "courgette",
      "onion",
      "pepperpaste",
      "tomatopaste",
      "blac pepper",
      "oil",
      "butter",
      "mint",
      "rice"
     ],
     "ingredients": [
       "6 adet kabak",
       "1 su bardağı pirinç",
       "2 adet kuru soğan",
       "1 yemek kaşığı biber salçası",
       "1 yemek kaşığı domates salçası",
       "1 yemek kaşığı tereyağı",
       "1 yemek kaşığı sıvı yağ",
       "1 yemek kaşığı nane",
       "Tuz, karabiber, pul biber",
       "2 su bardağı sıcak su"
     ],
     "instructions": [
       "Kabakların üzerini kapatacak kadar kapak kısmını kesin ve içini oyup çıkartın.",
       "Pirinçleri yıkayın ve süzgece alın.",
       "Bir tencereye sıvı yağı, tereyağını ve yemeklik doğranmış kuru soğanları alarak kavurun.",
       "Ardından salçaları ekleyin ve birkaç dakika daha kavurun.",
       "Pirinçleri ilave edip, tuz ve baharatları da ekleyerek karıştırın.",
       "Bir süre daha kavurduktan sonra ocaktan alın ve soğumaya bırakın.",
       "Soğuyan harçtan kabakların içini doldurun ve kabakların ağzını kapatın.",
       "Bir tencereye kabakları yerleştirin ve üzerine sıcak su ilave edin.",
       "Tencerenin kapağını kapatıp orta ateşte yaklaşık 40 dakika pişirin.",
       "Pişen kabakları servis tabağına alın ve üzerine nane serperek servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/771/317/png-transparent-zucchini-stuffing-vegetable-oven-recipe-acorn-squash-food-baking-recipe-thumbnail.png"
   },
   {
     "id": 35,
     "title": "Taze Fasulye",
     "calories": "40 kcal",

     "foodTitle": "main",
     "cookTime": "40 dk",
     "ingredientNames": [
      "beans",
      "tomato",
      "salt",
      "oil",
      "blackpepper"
     ],
     "ingredients": [
       "500 gram taze fasulye",
       "1 adet kuru soğan",
       "2 adet domates",
       "3 yemek kaşığı sıvı yağ",
       "1 tatlı kaşığı tuz",
       "1 çay kaşığı karabiber"
     ],
     "instructions": [
       "Taze fasulyelerin uç kısımlarını kesip yıkayın.",
       "Kuru soğanı yemeklik doğrayın.",
       "Domatesleri rendeleyin.",
       "Bir tencereye sıvı yağ ekleyin.",
       "Soğanları tencereye alın ve kavurun.",
       "Rendelenmiş domatesleri de ekleyin ve 5 dakika kadar pişirin.",
       "Daha sonra taze fasulyeleri de tencereye ekleyin ve karıştırın.",
       "Tuz ve karabiberi de ilave edin.",
       "Tencereye 1,5 su bardağı su ekleyin ve kapağını kapatın.",
       "Kısık ateşte 30 dakika kadar pişirin.",
       "Taze fasulye yemeği servise hazır."
     ],
     "image": "https://oz-elkofte.com/img/yemek/taze-fasulye.jpg"
   },
   {
     "id": 36,
     "title": "Tarhana Çorbası",
     "calories": "182 kcal",

     "foodTitle": "soup",
     "cookTime": "1 saat",
     "ingredientNames": [
      "tarhana",
      "meat water",
      "chili pepper",
      "butter",
     ],
     "ingredients": [
       "1 su bardağı tarhana",
       "6 su bardağı su",
       "2 su bardağı et suyu veya tavuk suyu",
       "1 yemek kaşığı tereyağı",
       "1 çay kaşığı kırmızı pul biber",
       "Tuz"
     ],
     "instructions": [
       "Bir tencereye tarhana ve suyu alıp karıştırın. Karışımı 5-10 dakika boyunca karıştırarak pişirin.",
       "Et suyunu veya tavuk suyunu ekleyin, karıştırın ve kaynatın.",
       "Bir tavada tereyağını eritin ve kırmızı pul biberi ilave edin.",
       "Tereyağı karışımını çorbaya ekleyin ve tuzunu ayarlayın.",
       "Birkaç dakika daha kaynatın ve sıcak servis yapın."
     ],
     "image": "https://img1.pngindir.com/20180601/qt/kisspng-lentil-soup-ezogelin-soup-tripe-soups-turkish-cuis-lentil-soup-5b10f5b394b0a7.390658371527838131609.jpg"
   },
   {
     "id": 37,
     "title": "Muhallebi Tatlısı",
     "calories": "122 kcal",

     "foodTitle": "dessert",
     "cookTime": "30 dk",
     "ingredientNames": [
      "milk",
      "sugar",
      "vanillla",
      "butter",
      "starch",
      "flour",
     ],
     "ingredients": [
       "1 litre süt",
       "1 su bardağı şeker",
       "1 su bardağı un",
       "1 paket vanilya",
       "1 yemek kaşığı tereyağı",
       "1 yemek kaşığı nişasta"
     ],
     "instructions": [
       "Tencereye sütü, şekeri, unu ve vanilyayı ekleyin. Orta ateşte sürekli karıştırarak pişirin.",
       "Muhallebi kıvamına gelince tereyağı ve nişastayı ekleyin ve birkaç dakika daha karıştırarak pişirin.",
       "Muhallebiyi kaselere boşaltın ve oda sıcaklığında soğumaya bırakın.",
       "Soğuduktan sonra buzdolabında 2-3 saat bekletin.",
       "Servis yaparken üzerini istediğiniz şekilde süsleyebilirsiniz."
     ],
     "image": "https://w7.pngwing.com/pngs/505/266/png-transparent-dairy-products-flavor-dish-network-custard-tart-food-custard-tart-dairy.png"
   },
   {
     "id": 38,
     "title": "Baklava",
     "calories": "270 kcal",

     "foodTitle": "dessert",
     "cookTime": "1 saat",
     "ingredientNames": [
      "dough",
      "oil",
      "walnut",
      "cinnamon",
      "lemon",
      "sugar",
     ],
     "ingredients": [
       "1 paket baklavalık yufka",
       "1 su bardağı sıvı yağ",
       "2 su bardağı dövülmüş ceviz",
       "1 su bardağı toz şeker",
       "1 tatlı kaşığı tarçın",
       "2 su bardağı su",
       "1 su bardağı toz şeker",
       "1 dilim limon"
     ],
     "instructions": [
       "Ceviz, toz şeker ve tarçını karıştırın.",
       "Baklavalık yufkaları tezgaha serin ve her katın arasına fırça yardımıyla sıvı yağ sürün.",
       "6-7 katın arasına cevizli harçtan koyun.",
       "En üst kata da yine yağ sürün.",
       "Baklavayı önceden ısınmış 180 derece fırında yaklaşık 35-40 dakika pişirin.",
       "Bir tencereye su, toz şeker ve limon dilimini koyun, şeker eriyinceye kadar karıştırın.",
       "Kaynamaya başlayınca 5 dakika daha kaynatın ve ocaktan alın.",
       "Fırından çıkardığınız sıcak baklavayı soğuk şerbetin üzerine dökün.",
       "Baklavayı birkaç saat dinlendirin ve servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/631/689/png-transparent-vegetarian-cuisine-baklava-turkish-coffee-lokma-food-coffee-food-recipe-coffee.png"
   },
   {
     "id": 39,
     "title": "Mantar Yemeği",
     "calories": "154 kcal",

     "foodTitle": "vegetable",
     "cookTime": "30 dk",
     "ingredientNames": [
      "mushroom",
      "onion",
      "butter",
      "oil",
      "milk",
      "blackpepper",
      "salt",
      "flour"
     ],
     "ingredients": [
       "500 gr mantar",
       "1 adet soğan",
       "2 diş sarzımsak",
       "1 yemek kaşığı tereyağı",
       "1 yemek kaşığı sıvı yağ",
       "1 yemek kaşığı un",
       "1 su bardağı süt",
       "1 su bardağı su",
       "1 çay kaşığı karabiber",
       "1 çay kaşığı tuz"
     ],
     "instructions": [
       "Mantarları temizleyin ve ince dilimleyin.",
       "Soğanı ince ince doğrayın.",
       "Sarımsakları ezin.",
       "Bir tencereye tereyağı ve sıvı yağı koyun.",
       "Soğanları ekleyip kavurun.",
       "Sarımsakları ekleyin ve kavurmaya devam edin.",
       "Mantarları ekleyin ve karıştırın.",
       "Unu ekleyip karıştırın.",
       "Sütü ve suyu ekleyin ve karıştırın.",
       "Tuz ve karabiberi ekleyin.",
       "Mantarlar yumuşayana kadar pişirin.",
       "Sıcak servis yapın."
     ],
     "image": "https://w7.pngwing.com/pngs/965/53/png-transparent-hot-pot-chinese-cuisine-platter-mushroom-mushroom-hot-pot-platter-game-food-recipe.png"
   }
]

export default foods;