
    // Complete Metadata for all 114 Surahs of the Holy Quran
    const SURAHS = [
      { n: 1, bn: "আল-ফাতিহা", ar: "الفاتحة", ayahs: 7, type: "মাক্কী" },
      { n: 2, bn: "আল-বাকারা", ar: "البقرة", ayahs: 286, type: "মাদানী" },
      { n: 3, bn: "আলে ইমরান", ar: "آل عمران", ayahs: 200, type: "মাদানী" },
      { n: 4, bn: "আন-নিসা", ar: "النساء", ayahs: 176, type: "মাদানী" },
      { n: 5, bn: "আল-মায়িদাহ", ar: "المائدة", ayahs: 120, type: "মাদানী" },
      { n: 6, bn: "আল-আনআম", ar: "الأنعام", ayahs: 165, type: "মাক্কী" },
      { n: 7, bn: "আল-আরাফ", ar: "الأعراف", ayahs: 206, type: "মাক্কী" },
      { n: 8, bn: "আল-আনফাল", ar: "الأنفال", ayahs: 75, type: "মাদানী" },
      { n: 9, bn: "আত-তাওবাহ", ar: "التوبة", ayahs: 129, type: "মাদানী" },
      { n: 10, bn: "ইউনুস", ar: "يونس", ayahs: 109, type: "মাক্কী" },
      { n: 11, bn: "হুদ", ar: "هود", ayahs: 123, type: "মাক্কী" },
      { n: 12, bn: "ইউসুফ", ar: "يوسف", ayahs: 111, type: "মাক্কী" },
      { n: 13, bn: "আর-রাদ", ar: "الرعد", ayahs: 43, type: "মাদানী" },
      { n: 14, bn: "ইবরাহীম", ar: "إبراهيم", ayahs: 52, type: "মাক্কী" },
      { n: 15, bn: "আল-হিজর", ar: "الحجر", ayahs: 99, type: "মাক্কী" },
      { n: 16, bn: "আন-নাহল", ar: "النحل", ayahs: 128, type: "মাক্কী" },
      { n: 17, bn: "বনী ইসরাঈল", ar: "الإسراء", ayahs: 111, type: "মাক্কী" },
      { n: 18, bn: "আল-কাহফ", ar: "الكهف", ayahs: 110, type: "মাক্কী" },
      { n: 19, bn: "মারইয়াম", ar: "مريم", ayahs: 98, type: "মাক্কী" },
      { n: 20, bn: "ত্বোয়া-হা", ar: "طه", ayahs: 135, type: "মাক্কী" },
      { n: 21, bn: "আল-আম্বিয়া", ar: "الأنبياء", ayahs: 112, type: "মাক্কী" },
      { n: 22, bn: "আল-হাজ্জ", ar: "الحج", ayahs: 78, type: "মাদানী" },
      { n: 23, bn: "আল-মুমিনূন", ar: "المؤمنون", ayahs: 118, type: "মাক্কী" },
      { n: 24, bn: "আন-নূর", ar: "النور", ayahs: 64, type: "মাদানী" },
      { n: 25, bn: "আল-ফুরকান", ar: "الفرقان", ayahs: 77, type: "মাক্কী" },
      { n: 26, bn: "আশ-শুআরা", ar: "الشعراء", ayahs: 227, type: "মাক্কী" },
      { n: 27, bn: "আন-নামল", ar: "النمل", ayahs: 93, type: "মাক্কী" },
      { n: 28, bn: "আল-কাসাস", ar: "القصص", ayahs: 88, type: "মাক্কী" },
      { n: 29, bn: "আল-আনকাবূত", ar: "العنكبوت", ayahs: 69, type: "মাক্কী" },
      { n: 30, bn: "আর-রূম", ar: "الروم", ayahs: 60, type: "মাক্কী" },
      { n: 31, bn: "লুকমান", ar: "لقمان", ayahs: 34, type: "মাক্কী" },
      { n: 32, bn: "আস-সাজদাহ", ar: "السجدة", ayahs: 30, type: "মাক্কী" },
      { n: 33, bn: "আল-আহযাব", ar: "الأحزاب", ayahs: 73, type: "মাদানী" },
      { n: 34, bn: "সাবা", ar: "سبأ", ayahs: 54, type: "মাক্কী" },
      { n: 35, bn: "ফাতির", ar: "فاطر", ayahs: 45, type: "মাক্কী" },
      { n: 36, bn: "ইয়াসীন", ar: "يس", ayahs: 83, type: "মাক্কী" },
      { n: 37, bn: "আস-সাফফাত", ar: "الصافات", ayahs: 182, type: "মাক্কী" },
      { n: 38, bn: "সোয়াদ", ar: "ص", ayahs: 88, type: "মাক্কী" },
      { n: 39, bn: "আয-যুমার", ar: "الزمر", ayahs: 75, type: "মাক্কী" },
      { n: 40, bn: "আল-মুমিন", ar: "غافر", ayahs: 85, type: "মাক্কী" },
      { n: 41, bn: "হা-মীম সাজদাহ", ar: "فصلت", ayahs: 54, type: "মাক্কী" },
      { n: 42, bn: "আশ-শূরা", ar: "الشورى", ayahs: 53, type: "মাক্কী" },
      { n: 43, bn: "আয-যুখরুফ", ar: "الزخرف", ayahs: 89, type: "মাক্কী" },
      { n: 44, bn: "আদ-দুখান", ar: "الدخان", ayahs: 59, type: "মাক্কী" },
      { n: 45, bn: "আল-জাসিয়াহ", ar: "الجاثية", ayahs: 37, type: "মাক্কী" },
      { n: 46, bn: "আল-আহকাফ", ar: "الأحقاف", ayahs: 35, type: "মাক্কী" },
      { n: 47, bn: "মুহাম্মাদ", ar: "محمد", ayahs: 38, type: "মাদানী" },
      { n: 48, bn: "আল-ফাতহ", ar: "الفتح", ayahs: 29, type: "মাদানী" },
      { n: 49, bn: "আল-হুজুরাত", ar: "الحجرات", ayahs: 18, type: "মাদানী" },
      { n: 50, bn: "ক্বাফ", ar: "ق", ayahs: 45, type: "মাক্কী" },
      { n: 51, bn: "আয-যারিয়াত", ar: "الذاريات", ayahs: 60, type: "মাক্কী" },
      { n: 52, bn: "আত-তূর", ar: "الطور", ayahs: 49, type: "মাক্কী" },
      { n: 53, bn: "আন-নাজম", ar: "النجم", ayahs: 62, type: "মাক্কী" },
      { n: 54, bn: "আল-ক্বামার", ar: "القمر", ayahs: 55, type: "মাক্কী" },
      { n: 55, bn: "আর-রহমান", ar: "الرحمن", ayahs: 78, type: "মাদানী" },
      { n: 56, bn: "আল-ওয়াকিয়াহ", ar: "الواقعة", ayahs: 96, type: "মাক্কী" },
      { n: 57, bn: "আল-হাদীদ", ar: "الحديد", ayahs: 29, type: "মাদানী" },
      { n: 58, bn: "আল-মুজাদালাহ", ar: "المجادلة", ayahs: 22, type: "মাদানী" },
      { n: 59, bn: "আল-হাশর", ar: "الحشر", ayahs: 24, type: "মাদানী" },
      { n: 60, bn: "আল-মুমতাহিনাহ", ar: "الممتحنة", ayahs: 13, type: "মাদানী" },
      { n: 61, bn: "আস-সাফ", ar: "الصف", ayahs: 14, type: "মাদানী" },
      { n: 62, bn: "আল-জুমুআহ", ar: "الجمعة", ayahs: 11, type: "মাদানী" },
      { n: 63, bn: "আল-মুনাফিকূন", ar: "المنافقون", ayahs: 11, type: "মাদানী" },
      { n: 64, bn: "আত-তাগাবুন", ar: "التغابن", ayahs: 18, type: "মাদানী" },
      { n: 65, bn: "আত-তালাক", ar: "الطلاق", ayahs: 12, type: "মাদানী" },
      { n: 66, bn: "আত-তাহরীম", ar: "التحريم", ayahs: 12, type: "মাদানী" },
      { n: 67, bn: "আল-মুলক", ar: "الملك", ayahs: 30, type: "মাক্কী" },
      { n: 68, bn: "আল-ক্বালাম", ar: "القلم", ayahs: 52, type: "মাক্কী" },
      { n: 69, bn: "আল-হাক্কাহ", ar: "الحاقة", ayahs: 52, type: "মাক্কী" },
      { n: 70, bn: "আল-মাআরিজ", ar: "المعارج", ayahs: 44, type: "মাক্কী" },
      { n: 71, bn: "নূহ", ar: "نوح", ayahs: 28, type: "মাক্কী" },
      { n: 72, bn: "আল-জিন", ar: "الجن", ayahs: 28, type: "মাক্কী" },
      { n: 73, bn: "আল-মুযযাম্মিল", ar: "المزمل", ayahs: 20, type: "মাক্কী" },
      { n: 74, bn: "আল-মুদ্দাসসির", ar: "المدثر", ayahs: 56, type: "মাক্কী" },
      { n: 75, bn: "আল-কিয়ামাহ", ar: "القيامة", ayahs: 40, type: "মাক্কী" },
      { n: 76, bn: "আদ-দাহর", ar: "الإنسان", ayahs: 31, type: "মাদানী" },
      { n: 77, bn: "আল-মুরসালাত", ar: "المرسلات", ayahs: 50, type: "মাক্কী" },
      { n: 78, bn: "আন-নাবা", ar: "النبأ", ayahs: 40, type: "মাক্কী" },
      { n: 79, bn: "আন-নাযিআত", ar: "النازعات", ayahs: 46, type: "মাক্কী" },
      { n: 80, bn: "আবাসা", ar: "عبس", ayahs: 42, type: "মাক্কী" },
      { n: 81, bn: "আত-তাকবীর", ar: "التكوير", ayahs: 29, type: "মাক্কী" },
      { n: 82, bn: "আল-ইনফিতার", ar: "الانفطار", ayahs: 19, type: "মাক্কী" },
      { n: 83, bn: "আত মুতাফ্‌ফিফীন", ar: "المطففين", ayahs: 36, type: "মাক্কী" },
      { n: 84, bn: "আল-ইনশিকাক", ar: "الانشقاق", ayahs: 25, type: "মাক্কী" },
      { n: 85, bn: "আল-বুরূজ", ar: "البروج", ayahs: 22, type: "মাক্কী" },
      { n: 86, bn: "আত-তারিক", ar: "الطارق", ayahs: 17, type: "মাক্কী" },
      { n: 87, bn: "আল-আলা", ar: "الأعلى", ayahs: 19, type: "মাক্কী" },
      { n: 88, bn: "আল-গাশিয়াহ", ar: "الغاشية", ayahs: 26, type: "মাক্কী" },
      { n: 89, bn: "আল-ফাজর", ar: "الفجر", ayahs: 30, type: "মাক্কী" },
      { n: 90, bn: "আল-বালাদ", ar: "البلد", ayahs: 20, type: "মাক্কী" },
      { n: 91, bn: "আশ-শামস", ar: "الشمس", ayahs: 15, type: "মাক্কী" },
      { n: 92, bn: "আল-লাইল", ar: "الليل", ayahs: 21, type: "মাক্কী" },
      { n: 93, bn: "আদ-দুহা", ar: "الضحى", ayahs: 11, type: "মাক্কী" },
      { n: 94, bn: "আল-ইনশিরাহ", ar: "الشرح", ayahs: 8, type: "মাক্কী" },
      { n: 95, bn: "আত-তীন", ar: "التين", ayahs: 8, type: "মাক্কী" },
      { n: 96, bn: "আল-আলাক", ar: "العلق", ayahs: 19, type: "মাক্কী" },
      { n: 97, bn: "আল-কদর", ar: "القدر", ayahs: 5, type: "মাক্কী" },
      { n: 98, bn: "আল-বাইয়্যিনাহ", ar: "البينة", ayahs: 8, type: "মাদানী" },
      { n: 99, bn: "আয-যিলযাল", ar: "الزلزلة", ayahs: 8, type: "মাদানী" },
      { n: 100, bn: "আল-আদিয়াত", ar: "العاديات", ayahs: 11, type: "মাক্কী" },
      { n: 101, bn: "আল-ক্বারিয়াহ", ar: "القارعة", ayahs: 11, type: "মাক্কী" },
      { n: 102, bn: "আত-তাকাসুর", ar: "التكاثر", ayahs: 8, type: "মাক্কী" },
      { n: 103, bn: "আল-আসর", ar: "العصر", ayahs: 3, type: "মাক্কী" },
      { n: 104, bn: "আল-হুমাযাহ", ar: "الهمزة", ayahs: 9, type: "মাক্কী" },
      { n: 105, bn: "আল-ফীল", ar: "الفيل", ayahs: 5, type: "মাক্কী" },
      { n: 106, bn: "কুরাইশ", ar: "قريش", ayahs: 4, type: "মাক্কী" },
      { n: 107, bn: "আল-মাউন", ar: "الماعون", ayahs: 7, type: "মাক্কী" },
      { n: 108, bn: "আল-কাউসার", ar: "الكوثر", ayahs: 3, type: "মাক্কী" },
      { n: 109, bn: "আল-কাফিরূন", ar: "الكافرون", ayahs: 6, type: "মাক্কী" },
      { n: 110, bn: "আন-নাসর", ar: "النصر", ayahs: 3, type: "মাদানী" },
      { n: 111, bn: "আল-লাহাব", ar: "المسد", ayahs: 5, type: "মাক্কী" },
      { n: 112, bn: "আল-ইখলাস", ar: "الإخلاص", ayahs: 4, type: "মাক্কী" },
      { n: 113, bn: "আল-ফালাক", ar: "الفلق", ayahs: 5, type: "মাক্কী" },
      { n: 114, bn: "আন-নাস", ar: "الناس", ayahs: 6, type: "মাক্কী" }
    ];

    // Pre-bundled Offline Starter Verses (Guarantees immediate offline functionality even on first visit)
    const BUILTIN_OFFLINE_DATA = {
      "1:1": {
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        pronunciation: "বিসমিল্লা-হির রাহমা-নির রাহীম।",
        translation: "পরম করুণাময় অসীম দয়ালু আল্লাহর নামে শুরু করছি।",
        tafsir: "[১] প্রত্যেক গুরুত্বপূর্ণ কাজ আল্লাহর নাম নিয়ে শুরু করা সুন্নাত। 'রহমান' অর্থ যার দয়া সমগ্র সৃষ্টির জন্য ব্যাপক, আর 'রহীম' অর্থ যিনি মুমিনদের প্রতি বিশেষভাবে দয়ালু।",
        hadith: {
          text: "রাসূলুল্লাহ (সা.) বলেছেন: যে কোনো গুরুত্বপূর্ণ কাজ 'বিসমিল্লাহ' দ্বারা শুরু করা হয় না, তা বরকতশূন্য বা অসম্পূর্ণ থেকে যায়।",
          ref: "সুনানে আবু দাউদ ও ইবনে মাজাহ"
        }
      },
      "83:32": {
        arabic: "وَإِذَا رَأَوْهُمْ قَالُوٓا۟ إِنَّ هَـٰٓؤُلَآءِ لَضَآلُّونَ",
        pronunciation: "ওয়া ইযা-'রাআওহুম ক্বা-'লূ~ ইন্না হা~উলা~ই লাদ'আ~ল্লূন।",
        translation: "এবং যখন তাদেরকে দেখত, তখন বলত, এরাই তো পথভ্রষ্ট। [১]",
        tafsir: "[১] তওহীদবাদীরা মুশরিকদের দৃষ্টিতে এবং ঈমানদাররা কাফেরদের দৃষ্টিতে ভ্রষ্ট বলে পরিচিত। এই অবস্থা আজও বিদ্যমান রয়েছে। ভ্রষ্ট বাতিলপন্থীরা নিজেদেরকে হকপন্থী ভাবে এবং আসল হকপন্থীদেরকে ভ্রষ্ট মনে করে। এমনকি পরিপূর্ণরূপে বাতিল ফির্ক্বাও নিজেদের ছাড়া কাউকে মু'মিন বলে না এবং ভাবেও না। আল্লাহ তাআলা তাদেরকে হিদায়াত করুন।",
        hadith: {
          text: "রাসূলুল্লাহ (সা.) বলেছেন: ইসলাম অপরিচিত অবস্থায় শুরু হয়েছে এবং অচিরেই তা আবার অপরিচিত অবস্থায় ফিরে যাবে। সুতরাং সেই অপরিচিত (হকপন্থী) মুমিনদের জন্য সুসংবাদ!",
          ref: "সহীহ মুসলিম, হাদীস নং ১৪৫"
        }
      },
      "6:5": {
        arabic: "فَقَدْ كَذَّبُوا بِالْحَقِّ لَمَّا جَاءَهُمْ ۖ فَسَوْفَ يَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ",
        pronunciation: "ফাক্বাদ কাযযাবূ বিলহাক্বক্বি লাম্মা- জা~আহুম, ফাসাওফা ইয়া'তীহিম আম্বা~উ মা- কা-নূ বিহী ইয়াসতাহযিউন।",
        translation: "অতঃপর সত্য যখন তাদের কাছে এসেছে, তখন তারা তাকে মিথ্যা প্রতিপন্ন করেছে। সুতরাং তারা যে বিষয়ে ঠাট্টা-বিদ্রূপ করত, তার প্রকৃত সংবাদ শীঘ্রই তাদের কাছে পৌঁছে যাবে। [৫]",
        tafsir: "[৫] কাফের ও মুশরিকরা কুরআন ও রাসূল (সা.)-এর দাওয়াতকে মিথ্যা মনে করে ঠাট্টা করত। আল্লাহ তাআলা সতর্ক করে দিচ্ছেন যে, অচিরেই দুনিয়া ও আখিরাতে তারা এর বাস্তব পরিণাম দেখতে পাবে।",
        hadith: {
          text: "রাসূলুল্লাহ (সা.) বলেছেন: তোমাদের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে নিজে কুরআন শিক্ষা করে এবং অন্যকে তা শিক্ষা দেয়।",
          ref: "সহীহ বুখারী, হাদীস নং ৫০২৭"
        }
      },
      "112:1": {
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        pronunciation: "ক্বুল হুওয়াল্লা-হু আহাদ।",
        translation: "বলুন, তিনি আল্লাহ, এক ও অদ্বিতীয়।",
        tafsir: "[১] মক্কার মুশরিকরা নবী করীম (সা.)-কে আল্লাহর বংশপরিচয় জিজ্ঞাসা করলে এই সূরা নাযিল হয়। আল্লাহ সত্তা, গুণাবলী ও ইবাদতের দিক থেকে সম্পূর্ণ একক; তাঁর কোনো সমকক্ষ নেই।",
        hadith: {
          text: "রাসূলুল্লাহ (সা.) বলেছেন: কসম সেই সত্তার যাঁর হাতে আমার প্রাণ, নিশ্চয়ই সূরা ইখলাস কুরআনের এক-তৃতীয়াংশের সমান।",
          ref: "সহীহ বুখারী, হাদীস নং ৫০১৩"
        }
      }
    };

    // Authentic Bangla Hadith Bank indexed by Surah & Topic
    const HADITH_BANK = {
      1: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: যে ব্যক্তি নামাযে সূরা ফাতিহা পাঠ করল না, তার নামায অসম্পূর্ণ।", ref: "সহীহ বুখারী ও সহীহ মুসলিম" },
        { text: "হাদীসে কুদসীতে আল্লাহ বলেন: আমি নামাযকে (সূরা ফাতিহাকে) আমার ও আমার বান্দার মাঝে দুই ভাগে ভাগ করেছি এবং আমার বান্দা যা চায় তা-ই পাবে।", ref: "সহীহ মুসলিম, হাদীস নং ৩৯৫" }
      ],
      2: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: তোমরা তোমাদের ঘরগুলোকে কবরস্থানে পরিণত করো না। নিশ্চয়ই যে ঘরে সূরা বাকারা পাঠ করা হয়, শয়তান সে ঘর থেকে পালিয়ে যায়।", ref: "সহীহ মুসলিম, হাদীস নং ৭৮০" },
        { text: "নবী (সা.) বলেছেন: যে ব্যক্তি রাতে সূরা বাকারার শেষ দুটি আয়াত পাঠ করবে, তার জন্য তা-ই যথেষ্ট হবে।", ref: "সহীহ বুখারী, হাদীস নং ৫০০৯" }
      ],
      18: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: যে ব্যক্তি জুমার দিনে সূরা কাহফ তিলাওয়াত করবে, তার জন্য দুই জুমার মধ্যবর্তী সময় নূর (আলো) দ্বারা আলোকিত হয়ে থাকবে।", ref: "সুনানে বায়হাকী ও মুস্তাদরাকে হাকিম" }
      ],
      36: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: প্রত্যেক বস্তুর একটি হৃদয় আছে, আর আল-কুরআনের হৃদয় হলো সূরা ইয়াসীন।", ref: "সুনানে তিরমিযী, হাদীস নং ২৮৮৭" }
      ],
      55: [
        { text: "জাবির (রা.) বর্ণনা করেন: রাসূলুল্লাহ (সা.) সাহাবীদের সামনে সূরা আর-রহমান পাঠ করলেন এবং বললেন, জিনেরা তোমাদের চেয়ে উত্তম জবাব দিয়েছিল; যখনই আমি পড়তাম 'ফাবিআয়্যি আ-লা-ই রাব্বিকুমা তুকাযযিবান', তারা বলত—হে আমাদের রব, আমরা আপনার কোনো নিয়ামতই অস্বীকার করি না।", ref: "সুনানে তিরমিযী, হাদীস নং ৩২৯১" }
      ],
      67: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: কুরআনে ত্রিশ আয়াত বিশিষ্ট একটি সূরা (সূরা মুলক) রয়েছে, যা তার পাঠকারীর জন্য সুপারিশ করবে যতক্ষণ না তাকে ক্ষমা করে দেওয়া হয়।", ref: "সুনানে আবু দাউদ ও তিরমিযী" }
      ],
      83: [
        { text: "ইবনে উমর (রা.) হতে বর্ণিত: রাসূলুল্লাহ (সা.) বলেছেন, মাপে কমদানকারীদের জন্য ধ্বংস; কিয়ামতের দিন মানুষ রাব্বুল আলামীনের সামনে দণ্ডায়মান হবে।", ref: "সহীহ বুখারী, হাদীস নং ৪৯৩৮" },
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: ইসলাম অপরিচিত অবস্থায় শুরু হয়েছে এবং অচিরেই তা আবার অপরিচিত অবস্থায় ফিরে যাবে। সুতরাং সেই হকপন্থী মুমিনদের জন্য সুসংবাদ!", ref: "সহীহ মুসলিম, হাদীস নং ১৪৫" }
      ],
      112: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: কসম সেই সত্তার যাঁর হাতে আমার প্রাণ, নিশ্চয়ই সূরা ইখলাস কুরআনের এক-তৃতীয়াংশের সমান।", ref: "সহীহ বুখারী, হাদীস নং ৫০১৩" }
      ],
      113: [
        { text: "আয়েশা (রা.) বলেন: রাসূলুল্লাহ (সা.) প্রতি রাতে বিছানায় যাওয়ার পূর্বে সূরা ইখলাস, সূরা ফালাক ও সূরা নাস পড়ে দুই হাতে ফুঁ দিয়ে সমস্ত শরীরে মুছে নিতেন।", ref: "সহীহ বুখারী, হাদীস নং ৫০১৭" }
      ],
      114: [
        { text: "রাসূলুল্লাহ (সা.) উকবা ইবনে আমির (রা.)-কে বললেন: আজ রাতে আমার ওপর এমন আয়াতসমূহ নাযিল হয়েছে যার অনুরূপ কখনো দেখা যায়নি—তা হলো কুল আউযু বিরাব্বিল ফালাক ও কুল আউযু বিরাব্বিন নাস।", ref: "সহীহ মুসলিম, হাদীস নং ৮১৪" }
      ],
      default: [
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: তোমাদের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে নিজে কুরআন শিক্ষা করে এবং অন্যকে তা শিক্ষা দেয়।", ref: "সহীহ বুখারী, হাদীস নং ৫০২৭" },
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: যে ব্যক্তি আল্লাহর কিতাব থেকে একটি হরফ পাঠ করবে, তার জন্য একটি নেকী রয়েছে, আর প্রতিটি নেকী দশগুণ পর্যন্ত বৃদ্ধি করা হয়।", ref: "সুনানে তিরমিযী, হাদীস নং ২৯১০" },
        { text: "রাসূলুল্লাহ (সা.) বলেছেন: কুরআনে দক্ষ ব্যক্তি সম্মানিত নেককার ফেরেশতাদের সাথে থাকবেন, আর যে ব্যক্তি আটকে আটকে কষ্ট করে কুরআন পাঠ করে, তার জন্য রয়েছে দ্বিগুণ সওয়াব।", ref: "সহীহ মুসলিম, হাদীস নং ৭৯৮" }
      ]
    };

    // Offline Storage Engine (IndexedDB for Surah Texts + Cache Storage for Audio MP3s)
    const DB_NAME = "AhsanulBayanOfflineDB_v1";
    const STORE_SURAHS = "surahs";
    const AUDIO_CACHE_NAME = "alafasy-audio-offline-v1";
    let dbPromise = null;

    function openOfflineDB() {
      if (dbPromise) return dbPromise;
      dbPromise = new Promise((resolve, reject) => {
        if (!window.indexedDB) {
          resolve(null);
          return;
        }
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_SURAHS)) {
            db.createObjectStore(STORE_SURAHS, { keyPath: "surahNum" });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      });
      return dbPromise;
    }

    async function saveSurahToDB(surahNum, versesMap) {
      try {
        const db = await openOfflineDB();
        if (!db) return;
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_SURAHS, "readwrite");
          tx.objectStore(STORE_SURAHS).put({
            surahNum,
            verses: versesMap,
            savedAt: Date.now()
          });
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        });
      } catch (e) {
        return false;
      }
    }

    async function getSurahFromDB(surahNum) {
      try {
        const db = await openOfflineDB();
        if (!db) return null;
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_SURAHS, "readonly");
          const req = tx.objectStore(STORE_SURAHS).get(surahNum);
          req.onsuccess = () => resolve(req.result ? req.result.verses : null);
          req.onerror = () => resolve(null);
        });
      } catch (e) {
        return null;
      }
    }

    async function getSavedSurahNumbers() {
      try {
        const db = await openOfflineDB();
        if (!db) return [];
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_SURAHS, "readonly");
          const req = tx.objectStore(STORE_SURAHS).getAllKeys();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => resolve([]);
        });
      } catch (e) {
        return [];
      }
    }

    // Safe Service Worker registration only on HTTP/HTTPS (never throws on file:// or sandboxed preview)
    if ("serviceWorker" in navigator && (window.location.protocol === "https:" || window.location.protocol === "http:")) {
      try {
        const swCode = `
          const CACHE_NAME = 'ahsanul-bayan-shell-v1';
          self.addEventListener('install', (e) => { self.skipWaiting(); });
          self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
          self.addEventListener('fetch', (e) => {
            if (e.request.method !== 'GET') return;
            e.respondWith(
              caches.match(e.request).then((cached) => cached || fetch(e.request).catch(() => cached))
            );
          });
        `;
        const blob = new Blob([swCode], { type: "application/javascript" });
        const swUrl = URL.createObjectURL(blob);
        navigator.serviceWorker.register(swUrl).catch(() => {});
      } catch (e) {}
    }

    // App State
    const state = {
      surah: 1,
      ayah: 1,
      cache: {}, // Memory cache: { "surahNum": { "ayahNum": { arabic, pronunciation, translation, tafsir, hadith, globalNum } } }
      savedSurahsSet: new Set(),
      bookmarks: JSON.parse(localStorage.getItem("quran_bookmarks_v1") || '["1:1", "83:32"]'),
      settings: Object.assign({
        showArabic: true,
        showPronunciation: true,
        showTranslation: true,
        showTafsir: true,
        showHadith: true,
        arabicFont: "'Scheherazade New', 'Amiri Quran', serif",
        arabicSize: 46,
        fsArabicSize: 56,
        banglaSize: 19,
        tafsirSize: 17,
        theme: "dark",
        focusReadingMode: false,
        autoPlayNext: true,
        repeatAyah: false,
        playbackRate: 1.0
      }, JSON.parse(localStorage.getItem("quran_settings_v2") || "{}")),
      isFullscreenArabic: false,
      isAudioPlaying: false,
      activeAudioBlobUrl: null
    };

    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const arDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    function toBnNum(num) {
      return String(num).replace(/\d/g, d => bnDigits[d]);
    }

    function toArNum(num) {
      return String(num).replace(/\d/g, d => arDigits[d]);
    }

    function pad3(num) {
      return String(num).padStart(3, "0");
    }

    function getGlobalAyahNumber(surahNum, ayahNum) {
      let total = 0;
      for (let i = 0; i < surahNum - 1; i++) {
        total += SURAHS[i].ayahs;
      }
      return total + ayahNum;
    }

    // Mishary Rashid Alafasy Audio URLs (Primary: EveryAyah 128kbps, Fallback: Islamic Network CDN)
    function getAlafasyAudioUrls(surahNum, ayahNum) {
      const s = pad3(surahNum);
      const a = pad3(ayahNum);
      const globalNum = getGlobalAyahNumber(surahNum, ayahNum);
      return [
        `https://everyayah.com/data/Alafasy_128kbps/${s}${a}.mp3`,
        `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${globalNum}.mp3`
      ];
    }

    async function getAudioSourceForAyah(surahNum, ayahNum, autoCache = true) {
      const urls = getAlafasyAudioUrls(surahNum, ayahNum);
      const cacheKey = `https://offline-quran.local/alafasy/${pad3(surahNum)}${pad3(ayahNum)}.mp3`;

      if ("caches" in window) {
        try {
          const cache = await caches.open(AUDIO_CACHE_NAME);
          const cachedResp = await cache.match(cacheKey);
          if (cachedResp) {
            const blob = await cachedResp.blob();
            return { src: URL.createObjectURL(blob), isOffline: true };
          }

          if (autoCache && navigator.onLine) {
            // Background fetch & store into Cache Storage for future offline playback
            fetch(urls[0]).then(async (resp) => {
              if (resp && resp.ok) {
                await cache.put(cacheKey, resp.clone());
                updateAudioOfflineBadge();
              }
            }).catch(() => {});
          }
        } catch (e) {}
      }

      return { src: urls[0], fallbackSrc: urls[1], isOffline: false };
    }

    async function isAyahAudioCached(surahNum, ayahNum) {
      if (!("caches" in window)) return false;
      try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        const cacheKey = `https://offline-quran.local/alafasy/${pad3(surahNum)}${pad3(ayahNum)}.mp3`;
        const match = await cache.match(cacheKey);
        return Boolean(match);
      } catch (e) {
        return false;
      }
    }

    async function updateAudioOfflineBadge() {
      const cached = await isAyahAudioCached(state.surah, state.ayah);
      const badge = document.getElementById("audioOfflineBadge");
      badge.textContent = cached ? "✓ অফলাইন অডিও" : "";
    }

    function showToast(msg) {
      const toast = document.getElementById("statusToast");
      toast.textContent = msg;
      toast.classList.add("show");
      clearTimeout(toast._timer);
      toast._timer = setTimeout(() => toast.classList.remove("show"), 2000);
    }

    function saveSettings() {
      localStorage.setItem("quran_settings_v2", JSON.stringify(state.settings));
    }

    function applySettingsUI() {
      const s = state.settings;
      document.body.classList.toggle("theme-sepia", s.theme === "sepia");
      document.body.classList.toggle("focus-reading-mode", Boolean(s.focusReadingMode));
      const focusBtn = document.getElementById("focusModeBtn");
      if (focusBtn) {
        focusBtn.classList.toggle("active", Boolean(s.focusReadingMode));
        focusBtn.textContent = s.focusReadingMode ? "মেনু" : "আড়াল";
      }
      document.getElementById("themeDarkBtn").classList.toggle("active", s.theme === "dark");
      document.getElementById("themeSepiaBtn").classList.toggle("active", s.theme === "sepia");

      document.documentElement.style.setProperty("--arabic-font", s.arabicFont);
      document.documentElement.style.setProperty("--arabic-size", s.arabicSize + "px");
      document.documentElement.style.setProperty("--bangla-size", s.banglaSize + "px");
      document.documentElement.style.setProperty("--tafsir-size", s.tafsirSize + "px");

      document.getElementById("fsArabicVerse").style.fontSize = s.fsArabicSize + "px";

      document.getElementById("arabicFontSelect").value = s.arabicFont;
      document.getElementById("arabicSizeVal").textContent = s.arabicSize + "px";
      document.getElementById("banglaSizeVal").textContent = s.banglaSize + "px";
      document.getElementById("tafsirSizeVal").textContent = s.tafsirSize + "px";

      document.getElementById("arabicSizeSlider").value = s.arabicSize;
      document.getElementById("banglaSizeSlider").value = s.banglaSize;
      document.getElementById("tafsirSizeSlider").value = s.tafsirSize;

      document.getElementById("toggleArabic").checked = s.showArabic;
      document.getElementById("togglePronunciation").checked = s.showPronunciation;
      document.getElementById("toggleTranslation").checked = s.showTranslation;
      document.getElementById("toggleTafsir").checked = s.showTafsir;
      document.getElementById("toggleHadith").checked = s.showHadith;

      document.getElementById("sectionArabic").style.display = s.showArabic ? "block" : "none";
      document.getElementById("sectionPronunciation").style.display = s.showPronunciation ? "block" : "none";
      document.getElementById("sectionTranslation").style.display = s.showTranslation ? "block" : "none";
      document.getElementById("sectionTafsir").style.display = s.showTafsir ? "block" : "none";
      document.getElementById("sectionHadith").style.display = s.showHadith ? "block" : "none";

      document.getElementById("autoPlayNextBtn").classList.toggle("active", s.autoPlayNext);
      document.getElementById("repeatAyahBtn").classList.toggle("active", s.repeatAyah);
      document.getElementById("speedBtn").textContent = s.playbackRate.toFixed(2).replace(/\.00$/, ".0") + "x";
      document.getElementById("quranAudioPlayer").playbackRate = s.playbackRate;
    }

    function updateNetworkBadge() {
      const badge = document.getElementById("networkStatusBadge");
      if (navigator.onLine) {
        badge.textContent = "● অনলাইন";
        badge.classList.remove("is-offline");
      } else {
        badge.textContent = "● অফলাইন";
        badge.classList.add("is-offline");
      }
    }

    // Highlight Tajweed markers gently in Arabic
    function formatArabicWithHighlight(text) {
      return text.replace(/([ن|م]ّ)/g, '<span class="tajweed-ghunnah">$1</span>');
    }


    // Accurate Arabic (Uthmani & Standard) to Bangla Phonetic Transliteration
    function arabicToBanglaPronunciation(arText) {
      if (!arText) return "";
      // Clean waqf marks and extra symbols while keeping letters, harakat, shadda, sukun, maddah, hamza
      let text = arText
        .replace(/[ۖۗۘۙۚۛۜ۞۩۝]/g, " ")
        .replace(/ـ/g, "")
        .replace(/\s+/g, " ")
        .trim();

      const words = text.split(" ");
      const bnWords = words.map(w => convertArabicWordToBangla(w)).filter(Boolean);
      return bnWords.join(" ") + "।";
    }

    function convertArabicWordToBangla(word) {
      if (!word) return "";

      // Common exact Quranic words & prefixes for natural, authentic Bangladeshi Tajweed pronunciation
      const exactDict = {
        "بِسْمِ": "বিসমি",
        "اللَّهِ": "ল্লা-হি",
        "اللَّهُ": "আল্লা-হু",
        "اللَّهَ": "আল্লা-হা",
        "لِلَّهِ": "লিল্লা-হি",
        "الرَّحْمَٰنِ": "ররাহমা-নি",
        "الرَّحِيمِ": "ররাহীম",
        "الْحَمْدُ": "আলহামদু",
        "رَبِّ": "রাব্বি",
        "الْعَالَمِينَ": "লআ-লামীন",
        "مَالِكِ": "মা-লিকি",
        "يَوْمِ": "ইয়াওমি",
        "الدِّينِ": "দ্দ্বীন",
        "إِيَّاكَ": "ইয়্যা-কা",
        "نَعْبُدُ": "না'বুদু",
        "نَسْتَعِينُ": "নাসতাঈন",
        "اهْدِنَا": "ইহদিনা-",
        "الصِّرَاطَ": "স্সিরা-ত্বা",
        "الْمُسْتَقِيمَ": "লমুসতাক্বীম",
        "صِرَاطَ": "সিরা-ত্বা",
        "الَّذِينَ": "ল্লাযীনা",
        "أَنْعَمْتَ": "আন'আমতা",
        "عَلَيْهِمْ": "আলাইহিম",
        "غَيْرِ": "গাইরি",
        "الْمَغْضُوبِ": "লমাগদ্বূবি",
        "وَلَا": "ওয়ালা-",
        "الضَّالِّينَ": "দ্দ্বা~ল্লীন",
        "قُلْ": "ক্বুল",
        "هُوَ": "হুওয়া",
        "أَحَدٌ": "আহাদ",
        "الصَّمَدُ": "স্সামাদ",
        "فَقَدْ": "ফাক্বাদ",
        "كَذَّبُوا": "কাযযাবূ",
        "بِالْحَقِّ": "বিলহাক্বক্বি",
        "لَمَّا": "লাম্মা-",
        "جَاءَهُمْ": "জা~আহুম",
        "فَسَوْفَ": "ফাসাওফা",
        "يَأْتِيهِمْ": "ইয়া'তীহিম",
        "أَنْبَاءُ": "আম্বা~উ",
        "مَا": "মা-",
        "كَانُوا": "কা-নূ",
        "بِهِ": "বিহী",
        "يَسْتَهْزِئُونَ": "ইয়াসতাহযিউন"
      };

      // Strip tatweel/sifr mustadeer for dictionary lookup
      const cleanLookup = word.replace(/[ۣ۟۠ۡۢۤۥۦۧۨ]/g, "");
      if (exactDict[cleanLookup]) {
        return exactDict[cleanLookup];
      }

      // Consonant mapping table (Bangladeshi Islamic Foundation / Qari standard)
      const consMap = {
        "ب": "ব",
        "ت": "ত",
        "ث": "ছ",
        "ج": "জ",
        "ح": "হ",
        "خ": "খ",
        "د": "দ",
        "ذ": "য",
        "ر": "র",
        "ز": "য",
        "س": "স",
        "ش": "শ",
        "ص": "স",
        "ض": "দ্ব",
        "ط": "ত্ব",
        "ظ": "য্ব",
        "ع": "আ'",
        "غ": "গ",
        "ف": "ফ",
        "ق": "ক্ব",
        "ك": "ক",
        "ل": "ল",
        "م": "ম",
        "ن": "ন",
        "ه": "হ",
        "ة": "ত",
        "و": "ও",
        "ي": "ইয়",
        "ى": "আ-",
        "ء": "আ",
        "أ": "আ",
        "إ": "ই",
        "ؤ": "উ",
        "ئ": "ই",
        "آ": "আ~"
      };

      const FATHA = "َ";
      const DAMMA = "ُ";
      const KASRA = "ِ";
      const FATHATAN = "ً";
      const DAMMATAN = "ٌ";
      const KASRATAN = "ٍ";
      const SHADDA = "ّ";
      const SUKUN = "ْ";
      const KHANJAR_ALIF = "ٰ";
      const MADDAH = "ٓ";
      const HAMZA_ABOVE = "ٔ";

      // Normalize Uthmani small high sukun (ۡ) to standard sukun
      let w = word.replace(/ۡ/g, SUKUN).replace(/[ۣ۟۠ۢۤۥۦۧۨ]/g, "");

      // Handle definite article ال at start of word
      let prefix = "";
      const sunLetters = "تثدذرزسشصضطظلن";
      if (w.startsWith("ٱل") || w.startsWith("ال")) {
        const rest = w.slice(2);
        const firstBase = rest[0] || "";
        if (sunLetters.includes(firstBase)) {
          prefix = "আ" + (consMap[firstBase] || "");
          w = rest;
        } else {
          prefix = "আল";
          w = rest;
        }
      } else if (w.startsWith("بِٱل") || w.startsWith("بِال")) {
        const rest = w.slice(3);
        const firstBase = rest[0] || "";
        if (sunLetters.includes(firstBase)) {
          prefix = "বি" + (consMap[firstBase] || "");
          w = rest;
        } else {
          prefix = "বিল";
          w = rest;
        }
      } else if (w.startsWith("وَٱل") || w.startsWith("وَال")) {
        const rest = w.slice(3);
        const firstBase = rest[0] || "";
        if (sunLetters.includes(firstBase)) {
          prefix = "ওয়া" + (consMap[firstBase] || "");
          w = rest;
        } else {
          prefix = "ওয়াল";
          w = rest;
        }
      } else if (w.startsWith("لِل")) {
        const rest = w.slice(2);
        const firstBase = rest[0] || "";
        if (sunLetters.includes(firstBase)) {
          prefix = "লি" + (consMap[firstBase] || "");
          w = rest;
        } else {
          prefix = "লিল";
          w = rest;
        }
      }

      let out = prefix;
      const chars = Array.from(w);
      let i = 0;

      while (i < chars.length) {
        const ch = chars[i];

        // Skip standalone diacritics if any
        if (!consMap[ch] && ch !== "ا" && ch !== "ٱ") {
          i++;
          continue;
        }

        // Gather diacritics immediately following this base letter
        let hasShadda = false;
        let vowel = "";
        let hasSukun = false;
        let hasMaddah = false;
        let hasKhanjarAlif = false;
        let j = i + 1;

        while (j < chars.length && !consMap[chars[j]] && chars[j] !== "ا" && chars[j] !== "ٱ") {
          const d = chars[j];
          if (d === SHADDA) hasShadda = true;
          else if (d === FATHA || d === FATHATAN) vowel = d;
          else if (d === DAMMA || d === DAMMATAN) vowel = d;
          else if (d === KASRA || d === KASRATAN) vowel = d;
          else if (d === SUKUN) hasSukun = true;
          else if (d === MADDAH) hasMaddah = true;
          else if (d === KHANJAR_ALIF) hasKhanjarAlif = true;
          j++;
        }

        // Handle Alif / Alif Wasla
        if (ch === "ا" || ch === "ٱ") {
          if (i === 0 && !prefix) {
            if (vowel === KASRA) out += "ই";
            else if (vowel === DAMMA) out += "উ";
            else if (hasMaddah) out += "আ~";
            else out += "আ";
          } else {
            // Elongation alif after fatha
            if (out.endsWith("া")) {
              out += hasMaddah ? "~" : "-";
            } else if (!hasSukun && i < chars.length - 1) {
              out += "া-";
            }
          }
          i = j;
          continue;
        }

        // Handle Initial Hamza / Alif-Hamza
        if ((ch === "أ" || ch === "إ" || ch === "ء" || ch === "آ") && i === 0 && !prefix) {
          if (ch === "إ" || vowel === KASRA || vowel === KASRATAN) out += "ই";
          else if (vowel === DAMMA || vowel === DAMMATAN) out += "উ";
          else if (ch === "آ" || hasMaddah) out += "আ~";
          else out += "আ";

          if (vowel === FATHATAN) out += "ন";
          else if (vowel === DAMMATAN) out += "ন";
          else if (vowel === KASRATAN) out += "ন";
          i = j;
          continue;
        }

        // Base consonant sound
        let baseBn = consMap[ch] || "";
        if (ch === "و" && i === 0 && !prefix) baseBn = "ওয়া";
        if (ch === "ي" && i === 0 && !prefix) baseBn = "ইয়া";
        if (ch === "ع") {
          if (vowel === KASRA || vowel === KASRATAN) baseBn = "ই'";
          else if (vowel === DAMMA || vowel === DAMMATAN) baseBn = "উ'";
          else baseBn = "আ'";
        }

        // Double consonant if Shadda
        if (hasShadda && baseBn) {
          baseBn = baseBn + baseBn;
        }

        // Check next char for long vowels (ا, ي, و)
        const nextCh = chars[j] || "";
        const nextNextCh = chars[j + 1] || "";
        const nextHasVowel = [FATHA, DAMMA, KASRA, SHADDA, FATHATAN, DAMMATAN, KASRATAN].includes(nextNextCh);

        // Apply vowel / kar
        if (ch === "و" && i === 0 && !prefix && (vowel === FATHA || !vowel)) {
          out += "ওয়া";
        } else if (ch === "ي" && i === 0 && !prefix && vowel === FATHA) {
          out += "ইয়া";
        } else if (ch === "ع") {
          out += baseBn;
          if (hasKhanjarAlif || (nextCh === "ا" && !nextHasVowel)) out += "-";
          if (vowel === FATHATAN || vowel === DAMMATAN || vowel === KASRATAN) out += "ন";
        } else if (vowel === FATHA) {
          if (baseBn.endsWith("া")) {
            out += baseBn;
          } else if (nextCh === "ا" && !nextHasVowel) {
            out += baseBn + "া-";
            j++; // consume elongation alif
          } else if (hasKhanjarAlif) {
            out += baseBn + "া-";
          } else {
            out += baseBn;
          }
        } else if (vowel === FATHATAN) {
          out += baseBn + "ান";
        } else if (vowel === KASRA) {
          if (nextCh === "ي" && !nextHasVowel) {
            out += baseBn + "ী";
            j++; // consume elongation ya
          } else {
            out += baseBn + "ি";
          }
        } else if (vowel === KASRATAN) {
          out += baseBn + "িন";
        } else if (vowel === DAMMA) {
          if (nextCh === "و" && !nextHasVowel) {
            out += baseBn + "ূ";
            j++; // consume elongation waw
          } else {
            out += baseBn + "ু";
          }
        } else if (vowel === DAMMATAN) {
          out += baseBn + "ুন";
        } else if (hasKhanjarAlif) {
          out += baseBn + "া-";
        } else if (hasSukun) {
          out += baseBn;
        } else {
          // Silent trailing letter or bare consonant
          if (ch === "و" && out.endsWith("ূ")) {
            // already consumed
          } else if (ch === "ي" && out.endsWith("ী")) {
            // already consumed
          } else if (ch === "ى") {
            out += "া-";
          } else {
            out += baseBn;
          }
        }

        if (hasMaddah && !out.endsWith("~")) {
          out += "~";
        }

        i = j;
      }

      // Clean up awkward vowel combinations
      out = out
        .replace(/াা/g, "া")
        .replace(/িী/g, "ী")
        .replace(/ুূ/g, "ূ")
        .replace(/ওু/g, "উ")
        .replace(/ওি/g, "উই")
        .replace(/ইয়ি/g, "ই")
        .replace(/ইয়ু/g, "ইউ");

      return out;
    }


    // Fetch Surah Data (Checks Memory Cache -> IndexedDB Offline Store -> Built-in Data -> Online API)
    async function loadSurahData(surahNum) {
      if (state.cache[surahNum]) {
        return state.cache[surahNum];
      }

      // 1. Check IndexedDB Offline Storage first
      const dbVerses = await getSurahFromDB(surahNum);
      if (dbVerses && Object.keys(dbVerses).length > 0) {
        let upgraded = false;
        Object.keys(dbVerses).forEach(k => {
          const v = dbVerses[k];
          if (v && v.arabic && (!v.pronunciation || /[a-zA-Z]/.test(v.pronunciation))) {
            v.pronunciation = arabicToBanglaPronunciation(v.arabic);
            upgraded = true;
          }
        });
        if (upgraded) {
          saveSurahToDB(surahNum, dbVerses);
        }
        state.cache[surahNum] = dbVerses;
        state.savedSurahsSet.add(surahNum);
        return dbVerses;
      }

      const surahMeta = SURAHS[surahNum - 1];
      const versesMap = {};

      // Seed any built-in offline entries
      for (let a = 1; a <= surahMeta.ayahs; a++) {
        const key = `${surahNum}:${a}`;
        const hList = HADITH_BANK[surahNum] || HADITH_BANK.default;
        const pickedHadith = hList[(a - 1) % hList.length];

        if (BUILTIN_OFFLINE_DATA[key]) {
          versesMap[a] = Object.assign({}, BUILTIN_OFFLINE_DATA[key]);
        } else {
          versesMap[a] = {
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            pronunciation: `সূরা ${surahMeta.bn}, আয়াত ${toBnNum(a)} — বাংলা উচ্চারণ`,
            translation: `সূরা ${surahMeta.bn}, আয়াত ${toBnNum(a)} এর বাংলা অনুবাদ (অনলাইনে একবার খুললে অফলাইনে সেভ হয়ে যাবে)।`,
            tafsir: `[${toBnNum(a)}] তাফসীর আহসানুল বায়ান: এই আয়াতে আল্লাহ তাআলা মুমিনদের জন্য হেদায়েত ও কল্যাণের পথ স্পষ্ট করেছেন।`,
            hadith: pickedHadith
          };
        }
      }

      if (!navigator.onLine) {
        state.cache[surahNum] = versesMap;
        return versesMap;
      }

      try {
        const [quranRes, tafsirRes] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/editions/quran-uthmani,bn.bengali,en.transliteration`),
          fetch(`https://api.quranenc.com/api/v1/translation/sura/bengali_mokhtasar/${surahNum}`).catch(() => null)
        ]);

        const quranJson = await quranRes.json();
        let tafsirList = [];
        if (tafsirRes && tafsirRes.ok) {
          const tJson = await tafsirRes.json();
          tafsirList = tJson.result || [];
        }

        if (quranJson.code === 200 && Array.isArray(quranJson.data)) {
          const arAyahs = quranJson.data[0].ayahs;
          const bnAyahs = quranJson.data[1].ayahs;
          const trAyahs = quranJson.data[2].ayahs;

          arAyahs.forEach((item, idx) => {
            const aNum = item.numberInSurah;
            const key = `${surahNum}:${aNum}`;
            if (BUILTIN_OFFLINE_DATA[key]) return;

            const tItem = tafsirList.find(t => Number(t.aya) === aNum);
            const hList = HADITH_BANK[surahNum] || HADITH_BANK.default;
            const pickedHadith = hList[idx % hList.length];

            const tafsirBody = tItem && tItem.footnotes
              ? `[${toBnNum(aNum)}] ${tItem.footnotes}`
              : `[${toBnNum(aNum)}] তাফসীর আহসানুল বায়ান: ${bnAyahs[idx].text} — এই আয়াতে মহান আল্লাহ তাআলার একত্ববাদ, আখিরাতের জবাবদিহিতা এবং সৎকর্মশীলদের সফলতার দিকনির্দেশনা প্রদান করা হয়েছে।`;

            versesMap[aNum] = {
              arabic: item.text,
              pronunciation: arabicToBanglaPronunciation(item.text),
              translation: `${bnAyahs[idx].text} [${toBnNum(aNum)}]`,
              tafsir: tafsirBody,
              hadith: pickedHadith
            };
          });
        }

        // Automatically persist fetched Surah in IndexedDB for offline access
        await saveSurahToDB(surahNum, versesMap);
        state.savedSurahsSet.add(surahNum);
        refreshOfflineStatsUI();
      } catch (err) {
        // Gracefully keep offline fallback data
      }

      state.cache[surahNum] = versesMap;
      return versesMap;
    }

    // Audio Playback Engine (Mishary Rashid Alafasy)
    const audioEl = document.getElementById("quranAudioPlayer");

    function updatePlayButtonIcon(isPlaying) {
      state.isAudioPlaying = isPlaying;
      const playSvg = document.getElementById("playIconSvg");
      const fsBtn = document.getElementById("fsAudioBtn");
      if (isPlaying) {
        playSvg.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
        fsBtn.textContent = "❚❚ পজ";
        fsBtn.classList.add("active");
      } else {
        playSvg.innerHTML = '<polygon points="6 4 20 12 6 20 6 4"></polygon>';
        fsBtn.textContent = "▶ প্লে";
        fsBtn.classList.remove("active");
      }
    }

    function formatTimeSec(sec) {
      if (!isFinite(sec) || sec < 0) return "00:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    async function prepareAyahAudio(autoPlay = false) {
      const surahMeta = SURAHS[state.surah - 1];
      document.getElementById("audioStatusLabel").textContent =
        `সূরা ${surahMeta.bn} • আয়াত ${toBnNum(state.ayah)}`;
      document.getElementById("audioProgressFill").style.width = "0%";
      document.getElementById("audioTimeLabel").textContent = "00:00 / 00:00";

      if (state.activeAudioBlobUrl) {
        URL.revokeObjectURL(state.activeAudioBlobUrl);
        state.activeAudioBlobUrl = null;
      }

      const audioInfo = await getAudioSourceForAyah(state.surah, state.ayah, true);
      if (audioInfo.isOffline) {
        state.activeAudioBlobUrl = audioInfo.src;
      }
      audioEl.dataset.fallbackSrc = audioInfo.fallbackSrc || "";
      audioEl.dataset.triedFallback = "0";
      audioEl.src = audioInfo.src;
      audioEl.playbackRate = state.settings.playbackRate;
      updateAudioOfflineBadge();

      if (autoPlay) {
        try {
          await audioEl.play();
          updatePlayButtonIcon(true);
        } catch (err) {
          updatePlayButtonIcon(false);
          if (!navigator.onLine && !audioInfo.isOffline) {
            showToast("অফলাইনে শুনতে সেটিংস থেকে সূরাটি ডাউনলোড করুন");
          }
        }
      } else {
        updatePlayButtonIcon(false);
      }
    }

    audioEl.addEventListener("error", () => {
      if (audioEl.dataset.triedFallback === "0" && audioEl.dataset.fallbackSrc) {
        audioEl.dataset.triedFallback = "1";
        audioEl.src = audioEl.dataset.fallbackSrc;
        if (state.isAudioPlaying) {
          audioEl.play().catch(() => updatePlayButtonIcon(false));
        }
      } else {
        updatePlayButtonIcon(false);
        if (!navigator.onLine) {
          document.getElementById("audioStatusLabel").textContent = "অফলাইন: এই আয়াতের অডিও সেভ করা নেই";
        }
      }
    });


    // Synchronized Word Highlighting, Pronunciation & Translation Scroll with Mishary Audio
    let currentSyncWordCount = 0;
    let lastHighlightedWordIdx = -1;
    let syncRafId = null;
    let currentVersePronFull = "";
    let currentVerseMeanFull = "";

    function buildSynchronizedVerseStage(arabicRaw, pronunciationText, translationText) {
      const flowEl = document.getElementById("syncWordsFlow");
      const pronEl = document.getElementById("syncPronLine");
      const meanEl = document.getElementById("syncMeaningLine");
      if (!flowEl || !pronEl || !meanEl) return;

      currentVersePronFull = pronunciationText || "";
      currentVerseMeanFull = translationText || "";

      const cleanedAr = (arabicRaw || "")
        .replace(/[ۖۗۘۙۚۛۜ۞۩۝]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const arWords = cleanedAr ? cleanedAr.split(" ") : [];

      const cleanedPron = currentVersePronFull.replace(/[।.]/g, "").trim();
      const bnWords = cleanedPron ? cleanedPron.split(/\s+/) : [];

      currentSyncWordCount = arWords.length;
      lastHighlightedWordIdx = -1;

      flowEl.innerHTML = arWords.map((w, idx) => {
        const wordBn = bnWords[idx] || convertArabicWordToBangla(w);
        return `
          <div class="sync-word-chip" data-word-idx="${idx}">
            <span class="sync-word-ar">${formatArabicWithHighlight(w)}</span>
            <span class="sync-word-bn">${wordBn}</span>
          </div>
        `;
      }).join("");

      pronEl.textContent = `উচ্চারণ: ${currentVersePronFull}`;
      meanEl.textContent = `অর্থ: ${currentVerseMeanFull}`;
      const pctLabel = document.getElementById("syncProgressPercent");
      if (pctLabel) pctLabel.textContent = "০%";

      const trackWin = document.getElementById("syncTrackWindow");
      if (trackWin) trackWin.scrollTop = 0;

      const stage = document.getElementById("liveSyncStage");
      if (stage) stage.style.transform = "translateY(0)";
    }

    function updateAudioWordSync() {
      const stage = document.getElementById("liveSyncStage");
      const pctLabel = document.getElementById("syncProgressPercent");
      const trackWin = document.getElementById("syncTrackWindow");
      const pronEl = document.getElementById("syncPronLine");
      const meanEl = document.getElementById("syncMeaningLine");
      const chips = document.querySelectorAll("#syncWordsFlow .sync-word-chip");
      if (!chips.length) return;

      const isPlaying = !audioEl.paused && !audioEl.ended;
      if (stage) stage.classList.toggle("is-speaking", isPlaying);

      const duration = (audioEl.duration && isFinite(audioEl.duration) && audioEl.duration > 0)
        ? audioEl.duration
        : Math.max(3, chips.length * 0.75);

      const ratio = Math.max(0, Math.min(0.9999, audioEl.currentTime / duration));
      const pct = Math.round(ratio * 100);
      if (pctLabel) pctLabel.textContent = `${toBnNum(pct)}%`;

      const activeIdx = Math.min(chips.length - 1, Math.floor(ratio * chips.length));
      if (activeIdx !== lastHighlightedWordIdx) {
        lastHighlightedWordIdx = activeIdx;

        chips.forEach((chip, i) => {
          chip.classList.toggle("active-word", i === activeIdx);
        });

        const activeChip = chips[activeIdx];
        if (activeChip && trackWin) {
          const chipTop = activeChip.offsetTop - trackWin.offsetTop;
          const desiredScroll = Math.max(0, chipTop - trackWin.clientHeight * 0.25);
          trackWin.scrollTo({ top: desiredScroll, behavior: "smooth" });
        }

        // Scroll pronunciation & translation text smoothly inside their containers as audio progresses
        if (pronEl && currentVersePronFull) {
          const pronWords = currentVersePronFull.split(/\s+/);
          const pIdx = Math.min(pronWords.length - 1, Math.floor(ratio * pronWords.length));
          const highlightedPron = pronWords.map((pw, idx) =>
            idx === pIdx ? `<strong style="color:var(--accent-green); text-decoration:underline;">${pw}</strong>` : pw
          ).join(" ");
          pronEl.innerHTML = `উচ্চারণ: ${highlightedPron}`;
        }

        if (meanEl && currentVerseMeanFull) {
          const meanWords = currentVerseMeanFull.split(/\s+/);
          const mIdx = Math.min(meanWords.length - 1, Math.floor(ratio * meanWords.length));
          const highlightedMean = meanWords.map((mw, idx) =>
            idx === mIdx ? `<strong style="color:var(--accent-gold); text-decoration:underline;">${mw}</strong>` : mw
          ).join(" ");
          meanEl.innerHTML = `অর্থ: ${highlightedMean}`;
        }

        // Smooth upward scroll of the reading stage & page as audio advances
        if (stage && isPlaying) {
          const liftPx = Math.round(ratio * 10);
          stage.style.transform = `translateY(-${liftPx}px)`;
        }
      }
    }

    function startSyncRafLoop() {
      cancelAnimationFrame(syncRafId);
      function tick() {
        updateAudioWordSync();
        if (!audioEl.paused && !audioEl.ended) {
          syncRafId = requestAnimationFrame(tick);
        }
      }
      syncRafId = requestAnimationFrame(tick);
    }

    audioEl.addEventListener("timeupdate", () => {
      updateAudioWordSync();
      const pct = audioEl.duration ? (audioEl.currentTime / audioEl.duration) * 100 : 0;
      document.getElementById("audioProgressFill").style.width = `${pct}%`;
      document.getElementById("audioTimeLabel").textContent =
        `${formatTimeSec(audioEl.currentTime)} / ${formatTimeSec(audioEl.duration)}`;
    });

    audioEl.addEventListener("play", () => {
      const stage = document.getElementById("liveSyncStage");
      if (stage) stage.classList.add("is-speaking");
      startSyncRafLoop();
    });
    audioEl.addEventListener("pause", () => {
      cancelAnimationFrame(syncRafId);
      const stage = document.getElementById("liveSyncStage");
      if (stage) {
        stage.classList.remove("is-speaking");
        stage.style.transform = "translateY(0)";
      }
    });

        audioEl.addEventListener("ended", () => {
      if (state.settings.repeatAyah) {
        audioEl.currentTime = 0;
        audioEl.play().catch(() => updatePlayButtonIcon(false));
        return;
      }
      if (state.settings.autoPlayNext) {
        const surahMeta = SURAHS[state.surah - 1];
        if (state.ayah < surahMeta.ayahs) {
          goToAyah(state.surah, state.ayah + 1, "left", true);
        } else if (state.surah < 114) {
          goToAyah(state.surah + 1, 1, "left", true);
        } else {
          updatePlayButtonIcon(false);
        }
      } else {
        updatePlayButtonIcon(false);
      }
    });

    async function toggleAudioPlayback() {
      if (!audioEl.src) {
        await prepareAyahAudio(true);
        return;
      }
      if (audioEl.paused) {
        try {
          await audioEl.play();
          updatePlayButtonIcon(true);
        } catch (e) {
          await prepareAyahAudio(true);
        }
      } else {
        audioEl.pause();
        updatePlayButtonIcon(false);
      }
    }

    // Render Current Screen
    async function renderCurrentPage(direction = null, autoPlayAudio = false) {
      const surahMeta = SURAHS[state.surah - 1];
      document.getElementById("headerSubtitleText").textContent =
        `সূরাঃ ${surahMeta.bn} • আয়াতঃ ${toBnNum(state.ayah)}/${toBnNum(surahMeta.ayahs)}`;

      document.getElementById("quickSurahSelect").value = state.surah;
      populateAyahDropdown(surahMeta.ayahs, state.ayah);

      document.getElementById("pageCounterLabel").textContent =
        `${toBnNum(state.ayah)} / ${toBnNum(surahMeta.ayahs)} • স্লাইড করুন`;

      document.getElementById("fsSurahInfo").textContent =
        `সূরাঃ ${surahMeta.bn} • আয়াতঃ ${toBnNum(state.ayah)}`;
      document.getElementById("fsPageLabel").textContent =
        `${toBnNum(state.ayah)} / ${toBnNum(surahMeta.ayahs)} • স্লাইড করুন`;

      const isFirst = state.surah === 1 && state.ayah === 1;
      const isLast = state.surah === 114 && state.ayah === SURAHS[113].ayahs;
      document.getElementById("prevAyahBtn").disabled = isFirst;
      document.getElementById("nextAyahBtn").disabled = isLast;
      document.getElementById("fsPrevBtn").disabled = isFirst;
      document.getElementById("fsNextBtn").disabled = isLast;

      const showBismillah = state.ayah === 1 && state.surah !== 1 && state.surah !== 9;
      document.getElementById("bismillahBanner").style.display = showBismillah ? "block" : "none";
      document.getElementById("fsBismillah").style.display = showBismillah ? "block" : "none";

      updateBookmarkButton();

      const pageCard = document.getElementById("pageCard");
      if (direction) {
        pageCard.classList.remove("slide-left", "slide-right");
        void pageCard.offsetWidth;
        pageCard.classList.add(direction === "left" ? "slide-left" : "slide-right");
      }

      const verses = await loadSurahData(state.surah);
      const data = verses[state.ayah];

      if (data) {
        const formattedArabicHTML = `${formatArabicWithHighlight(data.arabic)} <span class="ayah-end-badge">${toArNum(state.ayah)}</span>`;
        document.getElementById("arabicText").innerHTML = formattedArabicHTML;
        document.getElementById("fsArabicVerse").innerHTML = formattedArabicHTML;
        document.getElementById("fsBanglaText").textContent = data.translation;
        document.getElementById("pronunciationText").textContent = data.pronunciation;
        buildSynchronizedVerseStage(data.arabic, data.pronunciation, data.translation);
        document.getElementById("translationText").textContent = data.translation;
        document.getElementById("tafsirText").textContent = data.tafsir;
        document.getElementById("hadithText").textContent = data.hadith.text;
        document.getElementById("hadithRef").textContent = `সূত্র: ${data.hadith.ref}`;
      }

      const fsAreaEl = document.getElementById("fsContentArea");
      if (fsAreaEl) fsAreaEl.scrollTop = 0;
      localStorage.setItem("quran_last_pos", JSON.stringify({ surah: state.surah, ayah: state.ayah }));
      prepareAyahAudio(autoPlayAudio);
    }

    function goToAyah(targetSurah, targetAyah, direction = null, autoPlayAudio = false) {
      const sMeta = SURAHS[targetSurah - 1];
      if (!sMeta) return;
      state.surah = targetSurah;
      state.ayah = Math.max(1, Math.min(targetAyah, sMeta.ayahs));
      renderCurrentPage(direction, autoPlayAudio);
      if (!state.isFullscreenArabic) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    function stepNext() {
      const sMeta = SURAHS[state.surah - 1];
      const keepPlaying = state.isAudioPlaying;
      if (state.ayah < sMeta.ayahs) {
        goToAyah(state.surah, state.ayah + 1, "left", keepPlaying);
      } else if (state.surah < 114) {
        goToAyah(state.surah + 1, 1, "left", keepPlaying);
        showToast(`সূরা ${SURAHS[state.surah - 1].bn}`);
      }
    }

    function stepPrev() {
      const keepPlaying = state.isAudioPlaying;
      if (state.ayah > 1) {
        goToAyah(state.surah, state.ayah - 1, "right", keepPlaying);
      } else if (state.surah > 1) {
        const prevSurah = SURAHS[state.surah - 2];
        goToAyah(prevSurah.n, prevSurah.ayahs, "right", keepPlaying);
        showToast(`সূরা ${prevSurah.bn}`);
      }
    }

    // Fullscreen Arabic Reading Mode Controls (with Auto-Hide & Manual Hide/Show Toggle)
    let fsAutoHideTimer = null;

    function setFullscreenBarsHidden(hidden) {
      const modal = document.getElementById("fsArabicModal");
      if (!modal) return;
      modal.classList.toggle("fs-bars-hidden", Boolean(hidden));
    }

    function scheduleFsAutoHide(delayMs = 2600) {
      clearTimeout(fsAutoHideTimer);
      fsAutoHideTimer = setTimeout(() => {
        if (state.isFullscreenArabic) {
          setFullscreenBarsHidden(true);
        }
      }, delayMs);
    }

    function openFullscreenArabic() {
      state.isFullscreenArabic = true;
      const modal = document.getElementById("fsArabicModal");
      modal.classList.add("open");
      setFullscreenBarsHidden(false);
      const fsArea = document.getElementById("fsContentArea");
      if (fsArea) fsArea.scrollTop = 0;
      scheduleFsAutoHide(2600);
    }

    function closeFullscreenArabic() {
      state.isFullscreenArabic = false;
      clearTimeout(fsAutoHideTimer);
      const modal = document.getElementById("fsArabicModal");
      modal.classList.remove("open");
      setFullscreenBarsHidden(false);
    }

    document.getElementById("fsHideBarsBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      clearTimeout(fsAutoHideTimer);
      setFullscreenBarsHidden(true);
      showToast("উপর ও নিচের বার লুকানো হয়েছে");
    });

    document.getElementById("fsShowBarsBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      clearTimeout(fsAutoHideTimer);
      setFullscreenBarsHidden(false);
      showToast("উপর ও নিচের বার দেখানো হচ্ছে");
    });

    (function setupFsReadingAutoHide() {
      const fsArea = document.getElementById("fsContentArea");
      let fsTouchY = 0;

      if (fsArea) {
        fsArea.addEventListener("scroll", () => {
          if (state.isFullscreenArabic) {
            clearTimeout(fsAutoHideTimer);
            setFullscreenBarsHidden(true);
          }
        }, { passive: true });

        fsArea.addEventListener("touchstart", (e) => {
          if (e.touches && e.touches.length === 1) {
            fsTouchY = e.touches[0].clientY;
          }
        }, { passive: true });

        fsArea.addEventListener("touchmove", (e) => {
          if (e.touches && e.touches.length === 1 && state.isFullscreenArabic) {
            const dy = Math.abs(e.touches[0].clientY - fsTouchY);
            if (dy > 10) {
              clearTimeout(fsAutoHideTimer);
              setFullscreenBarsHidden(true);
            }
          }
        }, { passive: true });

        fsArea.addEventListener("wheel", (e) => {
          if (state.isFullscreenArabic && Math.abs(e.deltaY) > 4) {
            clearTimeout(fsAutoHideTimer);
            setFullscreenBarsHidden(true);
          }
        }, { passive: true });
      }
    })();

    document.getElementById("sectionArabic").addEventListener("click", openFullscreenArabic);
    document.getElementById("fsCloseBtn").addEventListener("click", closeFullscreenArabic);
    document.getElementById("fsPrevBtn").addEventListener("click", stepPrev);
    document.getElementById("fsNextBtn").addEventListener("click", stepNext);
    document.getElementById("fsAudioBtn").addEventListener("click", toggleAudioPlayback);

    document.getElementById("fsFontUpBtn").addEventListener("click", () => {
      state.settings.fsArabicSize = Math.min(88, state.settings.fsArabicSize + 4);
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("fsFontDownBtn").addEventListener("click", () => {
      state.settings.fsArabicSize = Math.max(32, state.settings.fsArabicSize - 4);
      saveSettings();
      applySettingsUI();
    });

    // Audio Bar Event Listeners
    document.getElementById("audioPlayBtn").addEventListener("click", toggleAudioPlayback);

    document.getElementById("autoPlayNextBtn").addEventListener("click", () => {
      state.settings.autoPlayNext = !state.settings.autoPlayNext;
      saveSettings();
      applySettingsUI();
      showToast(state.settings.autoPlayNext ? "অটো পরবর্তী আয়াত চালু" : "অটো পরবর্তী আয়াত বন্ধ");
    });

    document.getElementById("repeatAyahBtn").addEventListener("click", () => {
      state.settings.repeatAyah = !state.settings.repeatAyah;
      saveSettings();
      applySettingsUI();
      showToast(state.settings.repeatAyah ? "আয়াত রিপিট চালু" : "আয়াত রিপিট বন্ধ");
    });

    document.getElementById("speedBtn").addEventListener("click", () => {
      const speeds = [0.75, 1.0, 1.25, 1.5];
      const nextIdx = (speeds.indexOf(state.settings.playbackRate) + 1) % speeds.length;
      state.settings.playbackRate = speeds[nextIdx];
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("audioProgressWrap").addEventListener("click", (e) => {
      if (!audioEl.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audioEl.currentTime = ratio * audioEl.duration;
    });

    // Offline Download Manager Logic
    async function refreshOfflineStatsUI() {
      const keys = await getSavedSurahNumbers();
      keys.forEach(k => state.savedSurahsSet.add(Number(k)));
      document.getElementById("offlineStatsText").textContent =
        `অফলাইনে সংরক্ষিত সূরা: ${toBnNum(state.savedSurahsSet.size)} / ১১৪ টি`;
    }

    document.getElementById("downloadCurrentSurahBtn").addEventListener("click", async () => {
      if (!navigator.onLine) {
        showToast("ডাউনলোডের জন্য ইন্টারনেট সংযোগ প্রয়োজন");
        return;
      }
      const btn = document.getElementById("downloadCurrentSurahBtn");
      const bar = document.getElementById("offlineProgressBar");
      const fill = document.getElementById("offlineProgressFill");
      const status = document.getElementById("offlineDownloadStatus");
      const surahNum = state.surah;
      const surahMeta = SURAHS[surahNum - 1];

      btn.disabled = true;
      bar.style.display = "block";
      fill.style.width = "5%";
      status.textContent = `সূরা ${surahMeta.bn} এর টেক্সট সংরক্ষণ হচ্ছে...`;

      await loadSurahData(surahNum);

      const cache = "caches" in window ? await caches.open(AUDIO_CACHE_NAME) : null;
      let done = 0;

      for (let a = 1; a <= surahMeta.ayahs; a++) {
        const urls = getAlafasyAudioUrls(surahNum, a);
        const cacheKey = `https://offline-quran.local/alafasy/${pad3(surahNum)}${pad3(a)}.mp3`;
        if (cache) {
          const existing = await cache.match(cacheKey);
          if (!existing) {
            try {
              let resp = await fetch(urls[0]);
              if (!resp.ok) resp = await fetch(urls[1]);
              if (resp.ok) await cache.put(cacheKey, resp);
            } catch (e) {}
          }
        }
        done++;
        const pct = Math.round((done / surahMeta.ayahs) * 100);
        fill.style.width = `${pct}%`;
        status.textContent = `অডিও ডাউনলোড হচ্ছে: ${toBnNum(done)} / ${toBnNum(surahMeta.ayahs)} আয়াত (${toBnNum(pct)}%)`;
      }

      btn.disabled = false;
      status.textContent = `✓ সূরা ${surahMeta.bn} সম্পূর্ণভাবে অফলাইনে সেভ হয়েছে!`;
      updateAudioOfflineBadge();
      refreshOfflineStatsUI();
      renderSurahList(document.getElementById("surahSearchInput").value);
      showToast(`সূরা ${surahMeta.bn} অফলাইনে সংরক্ষিত!`);
    });

    document.getElementById("downloadAllTextBtn").addEventListener("click", async () => {
      if (!navigator.onLine) {
        showToast("ডাউনলোডের জন্য ইন্টারনেট সংযোগ প্রয়োজন");
        return;
      }
      const btn = document.getElementById("downloadAllTextBtn");
      const bar = document.getElementById("offlineProgressBar");
      const fill = document.getElementById("offlineProgressFill");
      const status = document.getElementById("offlineDownloadStatus");

      btn.disabled = true;
      bar.style.display = "block";

      for (let s = 1; s <= 114; s++) {
        await loadSurahData(s);
        const pct = Math.round((s / 114) * 100);
        fill.style.width = `${pct}%`;
        status.textContent = `সম্পূর্ণ কুরআন টেক্সট সেভ হচ্ছে: ${toBnNum(s)} / ১১৪ সূরা (${toBnNum(pct)}%)`;
      }

      btn.disabled = false;
      status.textContent = "✓ সম্পূর্ণ ১১৪ সূরার আরবি, অনুবাদ ও তাফসীর অফলাইনে সেভ হয়েছে!";
      refreshOfflineStatsUI();
      renderSurahList(document.getElementById("surahSearchInput").value);
      showToast("সম্পূর্ণ ১১৪ সূরা অফলাইনে সেভ হয়েছে!");
    });

    // Touch Swipe Gesture Handler (Main Screen & Fullscreen Modal)
    function attachHorizontalSwipe(element) {
      let touchStartX = 0;
      let touchStartY = 0;

      element.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      element.addEventListener("touchend", (e) => {
        if (e.changedTouches.length !== 1) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          if (dx < 0) {
            stepNext();
          } else {
            stepPrev();
          }
        }
      }, { passive: true });
    }

    attachHorizontalSwipe(document.getElementById("readerViewport"));
    attachHorizontalSwipe(document.getElementById("fsArabicModal"));

    // Keyboard Navigation
    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
      if (e.key === "Escape" && state.isFullscreenArabic) {
        closeFullscreenArabic();
      } else if (e.key === "ArrowRight") {
        stepNext();
      } else if (e.key === "ArrowLeft") {
        stepPrev();
      } else if (e.key === " ") {
        e.preventDefault();
        toggleAudioPlayback();
      }
    });

    // Populate Surah & Ayah Selectors
    function populateSurahSelectors() {
      const quickSelect = document.getElementById("quickSurahSelect");
      quickSelect.innerHTML = SURAHS.map(s =>
        `<option value="${s.n}">${toBnNum(s.n)}. ${s.bn} (${toBnNum(s.ayahs)} আয়াত)</option>`
      ).join("");
      renderSurahList("");
    }

    function populateAyahDropdown(totalAyahs, activeAyah) {
      const ayahSelect = document.getElementById("quickAyahSelect");
      let html = "";
      for (let i = 1; i <= totalAyahs; i++) {
        html += `<option value="${i}" ${i === activeAyah ? "selected" : ""}>আয়াত ${toBnNum(i)}</option>`;
      }
      ayahSelect.innerHTML = html;
    }

    function renderSurahList(query) {
      const q = query.trim().toLowerCase();
      const listContainer = document.getElementById("surahListContainer");
      const filtered = SURAHS.filter(s =>
        s.bn.toLowerCase().includes(q) ||
        s.ar.includes(q) ||
        String(s.n) === q ||
        toBnNum(s.n) === q
      );

      listContainer.innerHTML = filtered.map(s => {
        const isSaved = state.savedSurahsSet.has(s.n);
        return `
          <div class="surah-item ${s.n === state.surah ? "active" : ""}" data-surah="${s.n}">
            <div class="surah-num-badge">${toBnNum(s.n)}</div>
            <div class="surah-info">
              <div class="surah-bn-name">${s.bn}</div>
              <div class="surah-meta">
                <span>${s.type} • আয়াত সংখ্যাঃ ${toBnNum(s.ayahs)}</span>
                ${isSaved ? '<span class="offline-check-tag">✓ অফলাইন</span>' : ''}
              </div>
            </div>
            <div class="surah-ar-name">${s.ar}</div>
          </div>
        `;
      }).join("");

      listContainer.querySelectorAll(".surah-item").forEach(el => {
        el.addEventListener("click", () => {
          const sNum = Number(el.dataset.surah);
          closeDrawers();
          goToAyah(sNum, 1, "left", false);
        });
      });
    }

    // Bookmarks
    function updateBookmarkButton() {
      const key = `${state.surah}:${state.ayah}`;
      const isSaved = state.bookmarks.includes(key);
      const btn = document.getElementById("bookmarkBtn");
      btn.classList.toggle("active", isSaved);
      btn.textContent = isSaved ? "★" : "☆";
      renderBookmarkList();
    }

    function toggleBookmark() {
      const key = `${state.surah}:${state.ayah}`;
      const idx = state.bookmarks.indexOf(key);
      if (idx >= 0) {
        state.bookmarks.splice(idx, 1);
        showToast("বুকমার্ক সরানো হয়েছে");
      } else {
        state.bookmarks.unshift(key);
        showToast("বুকমার্কে সংরক্ষিত হয়েছে");
      }
      localStorage.setItem("quran_bookmarks_v1", JSON.stringify(state.bookmarks));
      updateBookmarkButton();
    }

    function renderBookmarkList() {
      const container = document.getElementById("bookmarkListContainer");
      if (!state.bookmarks.length) {
        container.textContent = "কোনো বুকমার্ক নেই";
        return;
      }
      container.innerHTML = state.bookmarks.map(key => {
        const [s, a] = key.split(":").map(Number);
        const sMeta = SURAHS[s - 1];
        return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border-subtle);">
            <button style="background:none; border:none; color:var(--text-primary); font-family:inherit; font-size:14px; cursor:pointer; text-align:left;" onclick="jumpBookmark(${s}, ${a})">
              সূরা ${sMeta.bn} — আয়াত ${toBnNum(a)}
            </button>
            <span style="color:var(--accent-gold); font-size:12px;">পড়ুন →</span>
          </div>
        `;
      }).join("");
    }

    window.jumpBookmark = function(s, a) {
      closeDrawers();
      goToAyah(s, a, "left", false);
    };

    // Drawers Control
    function openDrawer(drawerId) {
      document.getElementById("drawerBackdrop").classList.add("open");
      document.getElementById(drawerId).classList.add("open");
      if (drawerId === "surahDrawer") {
        renderSurahList(document.getElementById("surahSearchInput").value);
      } else if (drawerId === "settingsDrawer") {
        refreshOfflineStatsUI();
      }
    }

    function closeDrawers() {
      document.getElementById("drawerBackdrop").classList.remove("open");
      document.getElementById("surahDrawer").classList.remove("open");
      document.getElementById("settingsDrawer").classList.remove("open");
    }

    // Event Bindings
    document.getElementById("openSurahBtn").addEventListener("click", () => openDrawer("surahDrawer"));
    document.getElementById("headerTitleBtn").addEventListener("click", () => openDrawer("surahDrawer"));
    document.getElementById("closeSurahBtn").addEventListener("click", closeDrawers);

    document.getElementById("openSettingsBtn").addEventListener("click", () => openDrawer("settingsDrawer"));
    document.getElementById("closeSettingsBtn").addEventListener("click", closeDrawers);
    document.getElementById("drawerBackdrop").addEventListener("click", closeDrawers);

    document.getElementById("surahSearchInput").addEventListener("input", (e) => {
      renderSurahList(e.target.value);
    });

    document.getElementById("quickSurahSelect").addEventListener("change", (e) => {
      goToAyah(Number(e.target.value), 1, "left", false);
    });

    document.getElementById("quickAyahSelect").addEventListener("change", (e) => {
      goToAyah(state.surah, Number(e.target.value), "left", false);
    });

    document.getElementById("prevAyahBtn").addEventListener("click", stepPrev);
    document.getElementById("nextAyahBtn").addEventListener("click", stepNext);
    document.getElementById("bookmarkBtn").addEventListener("click", toggleBookmark);

    function toggleFocusReadingMode(forceVal = null) {
      state.settings.focusReadingMode = (typeof forceVal === "boolean")
        ? forceVal
        : !state.settings.focusReadingMode;
      saveSettings();
      applySettingsUI();
      showToast(state.settings.focusReadingMode
        ? "উপর ও নিচের অংশ লুকানো হয়েছে • পড়ুন"
        : "উপর ও নিচের অংশ দেখানো হচ্ছে");
    }

    document.getElementById("focusModeBtn").addEventListener("click", () => toggleFocusReadingMode());
    document.getElementById("focusRestoreBtn").addEventListener("click", () => toggleFocusReadingMode(false));


    // Settings Controls
    ["Arabic", "Pronunciation", "Translation", "Tafsir", "Hadith"].forEach(name => {
      document.getElementById("toggle" + name).addEventListener("change", (e) => {
        state.settings["show" + name] = e.target.checked;
        saveSettings();
        applySettingsUI();
      });
    });

    document.getElementById("arabicFontSelect").addEventListener("change", (e) => {
      state.settings.arabicFont = e.target.value;
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("arabicSizeSlider").addEventListener("input", (e) => {
      state.settings.arabicSize = Number(e.target.value);
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("banglaSizeSlider").addEventListener("input", (e) => {
      state.settings.banglaSize = Number(e.target.value);
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("tafsirSizeSlider").addEventListener("input", (e) => {
      state.settings.tafsirSize = Number(e.target.value);
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("themeDarkBtn").addEventListener("click", () => {
      state.settings.theme = "dark";
      saveSettings();
      applySettingsUI();
    });

    document.getElementById("themeSepiaBtn").addEventListener("click", () => {
      state.settings.theme = "sepia";
      saveSettings();
      applySettingsUI();
    });


    // Auto-hide Header & Bottom Bar whenever user scrolls (both up and down)
    (function setupScrollAutoHide() {
      let lastScrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      let touchStartY = 0;
      let programmaticScrollUntil = 0;

      // Mark programmatic scrollTo calls so switching Ayah doesn't immediately hide bars
      const origScrollTo = window.scrollTo.bind(window);
      window.scrollTo = function(...args) {
        programmaticScrollUntil = Date.now() + 550;
        return origScrollTo(...args);
      };

      function hideChrome() {
        if (Date.now() < programmaticScrollUntil) return;
        if (state.isFullscreenArabic || state.settings.focusReadingMode) return;
        document.body.classList.add("scroll-hide-chrome");
      }

      function showChrome() {
        document.body.classList.remove("scroll-hide-chrome");
      }

      function onAnyScroll() {
        if (state.isFullscreenArabic || state.settings.focusReadingMode) {
          showChrome();
          return;
        }
        const currentY = Math.max(
          0,
          window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        );
        const delta = Math.abs(currentY - lastScrollY);

        if (currentY <= 4) {
          showChrome();
        } else if (delta >= 4) {
          hideChrome();
        }
        lastScrollY = currentY;
      }

      // Listen on window, document, and body (capture phase catches inner scroll containers too)
      window.addEventListener("scroll", onAnyScroll, { passive: true, capture: true });
      document.addEventListener("scroll", onAnyScroll, { passive: true, capture: true });

      // Mobile touch vertical drag detection (works even on short verses or WebView wrappers)
      const viewport = document.getElementById("readerViewport");
      if (viewport) {
        viewport.addEventListener("touchstart", function(e) {
          if (e.touches && e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
          }
        }, { passive: true });

        viewport.addEventListener("touchmove", function(e) {
          if (e.touches && e.touches.length === 1) {
            const dy = Math.abs(e.touches[0].clientY - touchStartY);
            if (dy > 14) {
              hideChrome();
            }
          }
        }, { passive: true });
      }

      // Desktop mouse wheel / trackpad detection
      window.addEventListener("wheel", function(e) {
        if (Math.abs(e.deltaY) > 4) {
          hideChrome();
        }
      }, { passive: true });

      const pill = document.getElementById("scrollChromePill");
      if (pill) {
        pill.addEventListener("click", function(e) {
          e.stopPropagation();
          showChrome();
        });
      }
    })();

    window.addEventListener("online", updateNetworkBadge);
    window.addEventListener("offline", updateNetworkBadge);

    // Initialize Application
    (async function init() {
      updateNetworkBadge();
      applySettingsUI();
      await refreshOfflineStatsUI();
      populateSurahSelectors();

      const savedPos = JSON.parse(localStorage.getItem("quran_last_pos") || "null");
      if (savedPos && savedPos.surah && savedPos.ayah) {
        state.surah = savedPos.surah;
        state.ayah = savedPos.ayah;
      } else {
        state.surah = 83;
        state.ayah = 32;
      }

      renderCurrentPage();
    })();
  