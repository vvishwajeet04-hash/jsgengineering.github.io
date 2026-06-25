/* ============================================================
   JSG Engineering & Interiors — site interactivity
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. MOBILE MENU ---------- */
  var hamburger = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
    });
  }

  /* ---------- 2. LANGUAGE TOGGLE (EN / HI) ---------- */
  var HI = {
    logoSub: "इंजीनियरिंग एंड इंटीरियर्स",
    navFab: "फैब्रिकेशन", navInt: "इंटीरियर्स", navProcess: "प्रोसेस",
    navProjects: "प्रोजेक्ट्स", navFaq: "सामान्य प्रश्न", navBlog: "जानकारी", navQuote: "फ्री कोटेशन लें",
    heroTagFab: "— इंजीनियरिंग एंड फैब्रिकेशन",
    heroTitleFab: "मजबूती पर बना ढांचा।",
    heroLeadFab: "इंडस्ट्रियल शेड, स्ट्रक्चरल स्टील, सीढ़ियाँ और कस्टम मेटलवर्क — साइट पर डिज़ाइन, इन-हाउस फैब्रिकेशन, समय पर डिलीवरी।",
    heroBtnFab: "फैब्रिकेशन देखें",
    heroTagInt: "इंटीरियर्स —",
    heroTitleInt: "रहने लायक खूबसूरत जगहें।",
    heroLeadInt: "घर, ऑफिस और रिटेल स्पेस — उसी सटीकता के साथ फिनिश किए जाते हैं जो हमारे स्टील के काम में होती है।",
    heroBtnInt: "इंटीरियर्स देखें",
    heroBottomTag: "JSG · जय श्री गणेश — <strong>एक टीम, दो हुनर</strong>",
    statYears: "वर्षों का अनुभव", statProjects: "पूरे हुए प्रोजेक्ट्स",
    statSqft: "वर्ग फुट जगह तैयार", statCities: "अपना शहर",
    aboutEyebrow: "JSG के बारे में",
    aboutTitle: "एक कंपनी, दो हुनर — फैब्रिकेशन और इंटीरियर्स, एक ही छत के नीचे।",
    aboutBody: "JSG इंजीनियरिंग एंड इंटीरियर्स की शुरुआत एक स्ट्रक्चरल फैब्रिकेशन वर्कशॉप से हुई और आज यह एक पूर्ण टर्नकी पार्टनर बन चुकी है — हम ढांचा भी खड़ा करते हैं और जगह को फिनिश भी, ताकि क्लाइंट को कई कॉन्ट्रैक्टर नहीं, एक भरोसेमंद टीम मिले।",
    badge1: "15 साल, 500+ प्रोजेक्ट्स", badge2: "इन-हाउस डिज़ाइन + फैब्रिकेशन टीम",
    badge3: "24 घंटे में साइट विज़िट", badge4: "वर्कमैनशिप वारंटी",
    aboutCard1Title: "फैब्रिकेशन विंग",
    aboutCard1Body: "स्ट्रक्चरल स्टील, शेड, सीढ़ियाँ, गेट और कस्टम मशीनरी — लोड और IS-कोड स्पेसिफिकेशन के अनुसार तैयार।",
    aboutCard2Title: "इंटीरियर्स विंग",
    aboutCard2Body: "रेजिडेंशियल, कमर्शियल और टर्नकी इंटीरियर एक्सीक्यूशन — डिज़ाइन, मटीरियल और इंस्टॉलेशन एक ही वर्कफ्लो में।",
    fabEyebrow: "फैब्रिकेशन एंड इंजीनियरिंग",
    fabTitle: "स्टील जो सिर्फ दिखने के लिए नहीं, लोड सहने के लिए बना है।",
    fabSub: "हर काम वेल्डिंग शुरू होने से पहले कैलकुलेट, ड्रॉ और अप्रूव किया जाता है।",
    fabS1Title: "इंडस्ट्रियल शेड एंड वेयरहाउस",
    fabS1Body: "PEB और परंपरागत स्टील शेड — फैक्ट्री, वेयरहाउस, गोदाम — आपके स्पैन और लोड के हिसाब से डिज़ाइन।",
    fabS2Title: "स्ट्रक्चरल स्टील फ्रेमिंग",
    fabS2Body: "कॉलम, ट्रस और मेज़ानाइन फ्रेमिंग — IS-कोड स्ट्रक्चरल मानकों के अनुसार फैब्रिकेटेड और खड़ी की गई।",
    fabS3Title: "सीढ़ियाँ एंड रेलिंग",
    fabS3Body: "स्पाइरल, स्ट्रेट-रन और कैंटीलीवर सीढ़ियाँ — MS, SS या ग्लास रेलिंग फिनिश के साथ।",
    fabS4Title: "गेट, ग्रिल एंड फेंसिंग",
    fabS4Body: "ऑटोमेटेड और मैनुअल गेट, सिक्योरिटी ग्रिल और बाउंड्री फेंसिंग — MS, SS और रॉट आयरन में।",
    fabS5Title: "कस्टम मशीनरी एंड इक्विपमेंट",
    fabS5Body: "आपकी ड्रॉइंग या हमारे डिज़ाइन के अनुसार जिग, रैकिंग, प्लेटफॉर्म और प्रोसेस इक्विपमेंट।",
    fabS6Title: "मेंटेनेंस एंड रिपेयर",
    fabS6Body: "मौजूदा स्टीलवर्क के लिए स्ट्रक्चरल इंस्पेक्शन, रीपेंटिंग, रीइन्फोर्समेंट और इमरजेंसी रिपेयर।",
    intEyebrow: "इंटीरियर्स",
    intTitle: "फिनिश जो रोज़मर्रा की ज़िंदगी में टिके, सिर्फ फोटो में नहीं।",
    intSub: "रेजिडेंशियल, कमर्शियल और रिटेल स्पेस — एक ही टीम द्वारा डिज़ाइन, सोर्स और इंस्टॉल।",
    intS1Title: "रेजिडेंशियल इंटीरियर्स",
    intS1Body: "पूरे घर या एक कमरे के इंटीरियर्स — लिविंग रूम, बेडरूम, वॉर्डरोब और स्टोरेज।",
    intS2Title: "कमर्शियल एंड ऑफिस इंटीरियर्स",
    intS2Body: "वर्कस्टेशन, केबिन, रिसेप्शन और रिटेल फिट-आउट — रोज़ की आवाजाही और टिकाऊपन को ध्यान में रखकर डिज़ाइन।",
    intS3Title: "मॉड्यूलर किचन",
    intS3Body: "L-शेप, U-शेप और आइलैंड लेआउट — मरीन प्लाईवुड में लैमिनेट, एक्रिलिक या PU फिनिश के साथ।",
    intS4Title: "फॉल्स सीलिंग एंड लाइटिंग",
    intS4Body: "कोव, प्रोफाइल और एक्सेंट लाइटिंग लेआउट के साथ POP और जिप्सम सीलिंग डिज़ाइन।",
    intS5Title: "फर्नीचर एंड वुडवर्क",
    intS5Body: "कस्टम कारपेंट्री — सोफा, बेड, स्टडी यूनिट और TV यूनिट — इन-हाउस बनाए और फिनिश किए जाते हैं।",
    intS6Title: "टर्नकी प्रोजेक्ट्स",
    intS6Body: "एक कोटेशन, एक टाइमलाइन, एक टीम — सिविल और स्ट्रक्चर से लेकर फाइनल स्टाइलिंग तक।",
    processEyebrow: "हम कैसे काम करते हैं",
    processTitle: "पहली कॉल से हैंडओवर तक छह स्टेप — हर प्रोजेक्ट में वही क्रम।",
    tl1Title: "साइट विज़िट", tl1Body: "इंक्वायरी के 24 घंटे के अंदर इंजीनियर साइट पर जाकर माप लेता है और ज़रूरत समझता है।",
    tl2Title: "डिज़ाइन एंड एस्टिमेट", tl2Body: "ड्रॉइंग, स्ट्रक्चरल कैलकुलेशन या डिज़ाइन लेआउट — साथ में पारदर्शी लाइन-आइटम कोटेशन।",
    tl3Title: "मटीरियल सिलेक्शन", tl3Body: "स्टील ग्रेड, प्लाईवुड, लैमिनेट और फिटिंग्स — ऑर्डर से पहले फाइनल और दिखाए जाते हैं।",
    tl4Title: "फैब्रिकेशन", tl4Body: "कटिंग, वेल्डिंग और कारपेंट्री — हमारी वर्कशॉप में क्वालिटी चेक के साथ।",
    tl5Title: "इंस्टॉलेशन", tl5Body: "साइट पर इरेक्शन या फिट-आउट — हमारी अपनी टीम द्वारा, थर्ड-पार्टी लेबर से नहीं।",
    tl6Title: "हैंडओवर एंड वारंटी", tl6Body: "फाइनल वॉकथ्रू, डॉक्यूमेंटेशन और लिखित वर्कमैनशिप वारंटी।",
    galEyebrow: "साइट से स्टाइल्ड स्पेस तक",
    galTitle: "वही कमरा। वही नाप। लाइन को खींचें।",
    galLead: "यह वह हिस्सा है जो फाइनल फोटो में नहीं दिखता — हर इंटीरियर के नीचे छिपा स्ट्रक्चरल काम।",
    galAfter: "फिनिश्ड इंटीरियर", galBefore: "कच्चा ढांचा",
    galCaption: "रेजिडेंशियल लिविंग रूम, HSR लेआउट — वही शेल, फिट-आउट से पहले और हैंडओवर के बाद।",
    galDrag: "← खींचें →",
    caseEyebrow: "हम जैसा काम करते हैं", caseTitle: "तीन उदाहरण — हर प्रोजेक्ट में वही प्रोसेस।",
    case1Type: "इंडस्ट्रियल फैब्रिकेशन", case1Title: "वेयरहाउस शेड फैब्रिकेशन, होसकोटे",
    caseProblem: "समस्या", case1Problem: "पुराना टिन-शेड ढांचा मानसून के लोड में टूट रहा था, ट्रस में जंग साफ दिख रही थी।",
    caseApproach: "तरीका", case1Approach: "छत को PEB ट्रस से दोबारा इंजीनियर किया और स्लोप व ड्रेनेज ठीक किया।",
    caseResult: "नतीजा", case1Result: "क्लाइंट का वेयरहाउस ऑपरेशन रोके बिना ढांचा दोबारा बनाया गया।",
    case1Stat: "↳ इस तरह के रिपेयर-एंड-रीबिल्ड काम हम नियमित रूप से करते हैं",
    case2Type: "कमर्शियल इंटीरियर", case2Title: "ऑफिस फिट-आउट, इलेक्ट्रॉनिक सिटी",
    case2Problem: "बेयर शेल ऑफिस को लीज़ शुरू होने से पहले पूरा वर्कस्टेशन और केबिन लेआउट चाहिए था।",
    case2Approach: "सिविल, इलेक्ट्रिकल और मॉड्यूलर फर्नीचर का काम क्रम में नहीं, बल्कि साथ-साथ चलाया।",
    case2Result: "80 वर्कस्टेशन और 6 केबिन — मूव-इन के लिए तैयार डिलीवर किए गए।",
    case2Stat: "↳ हमारे कमर्शियल फिट-आउट प्रोजेक्ट्स का एक सामान्य स्कोप",
    case3Type: "रेजिडेंशियल इंटीरियर", case3Title: "फुल-होम इंटीरियर, व्हाइटफील्ड",
    case3Problem: "परिवार को तय बजट में मॉड्यूलर किचन सहित पूरे घर का इंटीरियर चाहिए था।",
    case3Approach: "मटीरियल चुनाव को वैल्यू-इंजीनियर किया और कारपेंट्री व सिविल काम साथ चलाया।",
    case3Result: "किचन या वॉर्डरोब की फिनिश में कोई समझौता किए बिना पूरा हैंडओवर।",
    case3Stat: "↳ हमारे फुल-होम इंटीरियर प्रोजेक्ट्स का एक सामान्य स्कोप",
    whyEyebrow: "JSG क्यों", whyTitle: "वो वजहें जिनकी वजह से क्लाइंट अलग-अलग कॉन्ट्रैक्टर ढूंढना बंद कर देते हैं।",
    why1Title: "एक भरोसेमंद टीम", why1Body: "ढांचे और फिनिश दोनों के लिए एक कॉन्ट्रैक्ट, एक प्रोजेक्ट मैनेजर — कॉन्ट्रैक्टरों के बीच इल्ज़ाम लगाने का झंझट नहीं।",
    why2Title: "24 घंटे में साइट विज़िट", why2Body: "इंक्वायरी के एक दिन के अंदर इंजीनियर या डिज़ाइनर साइट पर पहुंचता है — हफ्तों इंतज़ार नहीं करना पड़ता।",
    why3Title: "पारदर्शी, लाइन-आइटम कोटेशन", why3Body: "हर कोटेशन में मटीरियल और लेबर लिखित रूप में अलग-अलग दिया जाता है — प्रोजेक्ट के बीच में कोई छुपा खर्च नहीं।",
    why4Title: "लिखित वर्कमैनशिप वारंटी", why4Body: "फैब्रिकेशन और इंस्टॉलेशन के काम पर लिखित वारंटी, साथ ही कॉल पर आफ्टर-सेल्स सपोर्ट।",
    testiEyebrow: "क्लाइंट रिव्यू", testiTitle: "हम अपनी रिव्यू हिस्ट्री बना रहे हैं — चाहें तो हम आपको सीधे हाल के क्लाइंट्स से जोड़ सकते हैं।",
    rev1Title: "15 साल का प्रैक्टिकल अनुभव", rev1Body: "फाउंडर विश्वजीत की अगुवाई में, बैंगलोर भर में सैकड़ों फैब्रिकेशन और इंटीरियर प्रोजेक्ट्स पूरे किए गए हैं।",
    rev2Title: "रेफरेंस के लिए पूछें", rev2Body: "हम खुशी से आपको हाल के क्लाइंट्स से सीधे जोड़ सकते हैं ताकि आप उनका अनुभव खुद पूछ सकें।",
    rev3Title: "रिव्यू जल्द आ रहे हैं", rev3Body: "हम हाल के प्रोजेक्ट्स से Google रिव्यू इकट्ठा कर रहे हैं — यहां जल्द देखें, या Google पर सीधे हमें खोजें।",
    caseNote: "हमारे सामान्य काम के प्रतिनिधि उदाहरण — हाल के क्लाइंट्स के रेफरेंस के लिए हमसे पूछें।",
    testi1: "\"उन्होंने हमारे शेड का स्ट्रक्चर और ऑफिस का इंटीरियर — दोनों एक ही टाइमलाइन में संभाला। एक्सपैंशन के तनाव भरे समय में एक वेंडर कम संभालना पड़ा।\"",
    testi1Name: "राकेश पाटिल", testi1Role: "फैक्ट्री मालिक, भिवंडी",
    testi2: "\"जो कोटेशन दिया गया था, बिलिंग बिल्कुल वैसी ही थी, आखिरी फिटिंग तक। इसी वजह से हमने अपनी सोसाइटी में सबको इन्हें सुझाया।\"",
    testi2Name: "स्नेहा कुलकर्णी", testi2Role: "होमओनर, ठाणे",
    testi3: "\"हमारा ऑफिस फिट-आउट लीज़ शुरू होने से एक हफ्ता पहले तैयार था, जिससे हमें इक्विपमेंट शिफ्ट करने के लिए पूरा हफ्ता आराम से मिला।\"",
    testi3Name: "अरविंद शेट्टी", testi3Role: "ऑपरेशंस हेड, अंधेरी",
    testi4: "\"उन्होंने जो सीढ़ी की रेलिंग बनाई, वो हमारे इंटीरियर फिनिश से इतनी अच्छी तरह मैच करती है कि मेहमान सोचते हैं यह इम्पोर्टेड है।\"",
    testi4Name: "मीरा जोशी", testi4Role: "होमओनर, नवी मुंबई",
    cert1: "15 साल का अनुभव", cert2: "इन-हाउस फैब्रिकेशन एंड इंटीरियर टीम",
    cert3: "इंजीनियर-लेड स्ट्रक्चरल डिज़ाइन", cert4: "बैंगलोर-बेस्ड, ऑन-कॉल सपोर्ट",
    faqEyebrow: "सामान्य प्रश्न", faqTitle: "हाँ कहने से पहले हर क्लाइंट जो पूछता है।",
    faqLead: "आपका सवाल यहाँ नहीं है? WhatsApp पर भेजें — हम वर्किंग आवर्स में जवाब देते हैं।",
    faqQ1: "फैब्रिकेशन या इंटीरियर वर्क की कीमत कितनी होती है?",
    faqA1: "कीमत एरिया, मटीरियल ग्रेड और फिनिश लेवल पर निर्भर करती है। साइट विज़िट के बाद हम लिखित, लाइन-आइटम कोटेशन देते हैं — कभी मौखिक अंदाज़ा नहीं — ताकि बाद में कोई सरप्राइज़ न हो।",
    faqQ2: "एक सामान्य प्रोजेक्ट में कितना समय लगता है?",
    faqA2: "एक स्टैंडर्ड इंडस्ट्रियल शेड में 30–45 दिन लगते हैं; पूरे घर के इंटीरियर में स्कोप के हिसाब से 60–90 दिन। सही टाइमलाइन काम शुरू होने से पहले लिखित रूप में तय की जाती है।",
    faqQ3: "क्या मैं अपनी पसंद का मटीरियल और ब्रांड चुन सकता हूँ?",
    faqA3: "हाँ। हम भरोसेमंद मटीरियल पार्टनर्स के साथ काम करते हैं, लेकिन आप खास स्टील ग्रेड, प्लाईवुड या लैमिनेट ब्रांड भी रिक्वेस्ट कर सकते हैं — हम उसी हिसाब से कोटेशन देंगे।",
    faqQ4: "क्या काम पर वारंटी मिलती है?",
    faqA4: "हर प्रोजेक्ट के साथ लिखित वर्कमैनशिप वारंटी दी जाती है, और हैंडओवर के बाद भी हमारी टीम आफ्टर-सेल्स सर्विस और छोटी-मोटी रिपेयर के लिए उपलब्ध रहती है।",
    faqQ5: "क्या फाइनेंसिंग या EMI ऑप्शन मिलता है?",
    faqA5: "बड़े इंटीरियर प्रोजेक्ट्स के लिए हम आपको पार्टनर फाइनेंसिंग से EMI पेमेंट का ऑप्शन दिला सकते हैं — कोटेशन स्टेज पर अपने प्रोजेक्ट मैनेजर से पूछें।",
    faqQ6: "फिलहाल आप किन इलाकों में सेवा देते हैं?",
    faqA6: "हम पूरे बैंगलोर में सेवा देते हैं — व्हाइटफील्ड, इलेक्ट्रॉनिक सिटी, HSR लेआउट, कोरमंगला, मराठाहल्ली, होसकोटे, केंगेरी, येलहंका और हेब्बल सहित — और स्कोप के हिसाब से इससे आगे भी कुछ चुनिंदा प्रोजेक्ट लेते हैं।",
    blogEyebrow: "जानकारी", blogTitle: "शुरू करने से पहले पढ़ने लायक कुछ बातें।",
    blog1Tag: "फैब्रिकेशन", blog1Title: "2026 में इंडस्ट्रियल शेड फैब्रिकेशन की लागत असल में किस चीज़ से तय होती है",
    blog1Body: "स्पैन, स्टील ग्रेड, रूफिंग शीट की मोटाई और साइट एक्सेस — कीमत पर ज्यादातर कोटेशन से कहीं ज्यादा असर डालते हैं।",
    readMore: "और पढ़ें →",
    blog2Tag: "इंटीरियर्स", blog2Title: "2026 में निवेश के लायक मॉड्यूलर किचन लेआउट",
    blog2Body: "कौन-सी फिनिश रोज़ के खाना बनाने में टिकती है, और कौन-सी सिर्फ शोरूम सैंपल में अच्छी लगती है।",
    blog3Tag: "फैब्रिकेशन", blog3Title: "सही स्ट्रक्चरल स्टील ग्रेड कैसे चुनें",
    blog3Body: "Fe415 बनाम Fe500 पर एक संक्षिप्त गाइड — कब कौन-सा सही है, और कब ज़रूरत से ज्यादा है।",
    quoteEyebrow: "कोटेशन लें", quoteTitle: "अपने प्रोजेक्ट के बारे में बताएं — हम 24 घंटे में कॉल करेंगे।",
    quoteLead: "कोई बंधन नहीं। कोई छुपा खर्च नहीं। सिर्फ साफ कोटेशन और सही टाइमलाइन।",
    qp1: "इंक्वायरी के 24 घंटे के अंदर मुफ्त साइट विज़िट",
    qp2: "लिखित, लाइन-आइटम कोटेशन — मौखिक अंदाज़ा नहीं",
    qp3: "बड़े इंटीरियर प्रोजेक्ट्स पर EMI ऑप्शन उपलब्ध",
    fName: "पूरा नाम", fPhone: "फोन नंबर", fEmail: "ईमेल (वैकल्पिक)", fCity: "शहर",
    fType: "प्रोजेक्ट टाइप", ptResidential: "रेजिडेंशियल", ptCommercial: "कमर्शियल", ptIndustrial: "इंडस्ट्रियल",
    fService: "चाहिए सेवा", svFab: "फैब्रिकेशन", svInt: "इंटीरियर्स", svBoth: "दोनों",
    fMsg: "प्रोजेक्ट के बारे में थोड़ा बताएं", fSubmit: "WhatsApp पर भेजें",
    fNote: "सबमिट करने पर WhatsApp खुलेगा, आपकी जानकारी पहले से भरी होगी — सीधे हमारी टीम को भेजने के लिए तैयार।",
    areasEyebrow: "सेवा क्षेत्र",
    footAbout: "जय श्री गणेश इंजीनियरिंग एंड इंटीरियर्स — 2011 से एक भरोसेमंद टीम द्वारा स्ट्रक्चरल फैब्रिकेशन और इंटीरियर एक्सीक्यूशन।",
    footLinks: "क्विक लिंक्स", footHours: "काम के घंटे",
    hours1: "सोम – शनि: सुबह 9:30 – शाम 7:00", hours2: "रविवार: सिर्फ साइट विज़िट",
    hours3: "कोटेशन रिस्पॉन्स: 24 घंटे के अंदर", hours4: "इमरजेंसी रिपेयर: कॉल पर उपलब्ध",
    footContact: "संपर्क", footAddr: "प्लॉट 14, MIDC इंडस्ट्रियल एरिया, भिवंडी, महाराष्ट्र",
    footCopy: "© 2026 JSG इंजीनियरिंग एंड इंटीरियर्स। सर्वाधिकार सुरक्षित।",
    footTag: "जय श्री गणेश — 2011 से भरोसे पर खरे।",
    teamEyebrow: "काम के पीछे की टीम",
    teamTitle: "एक छोटी, भरोसेमंद लीडरशिप टीम — कोई कॉल-सेंटर नहीं।",
    team1Name: "विश्वजीत", team1Role: "फाउंडर एंड डायरेक्टर",
    team2Name: "अजीत कुमार", team2Role: "हेड ऑफ फैब्रिकेशन",
    team3Name: "नव नाथ विश्वकर्मा", team3Role: "हेड ऑफ इंटीरियर्स",
    msbCall: "कॉल करें", msbWhatsapp: "WhatsApp", msbQuote: "कोटेशन लें",
    catalogueBtn: "कंपनी कैटलॉग डाउनलोड करें (PDF)",
    navTools: "कैलकुलेटर", navDesign: "डिज़ाइन स्टूडियो", navCareers: "करियर",
    toolsEyebrow: "स्मार्ट प्रोजेक्ट टूल्स — आम फैब्रिकेटर से अलग",
    toolsTitle: "अपने प्रोजेक्ट की कीमत का अंदाज़ा लगाएं और इंस्टेंट कोटेशन पाएं।",
    toolsLead: "दो टूल जो ज़्यादातर लोकल फैब्रिकेटर और कारपेंटर के पास नहीं होते — पारदर्शी कॉस्ट कैलकुलेटर, और इंस्टेंट डाउनलोडेबल PDF कोटेशन।",
    calcTag: "कॉस्ट कैलकुलेटर", calcTitle: "फैब्रिकेशन एंड इंटीरियर एस्टिमेटर",
    calcTabFab: "फैब्रिकेशन", calcTabInt: "इंटीरियर",
    calcMaterial: "मटीरियल टाइप", calcLength: "लंबाई (फुट)", calcHeight: "ऊंचाई / चौड़ाई (फुट)",
    calcThickness: "मोटाई / सेक्शन वज़न (किग्रा प्रति वर्ग फुट)",
    calcWeight: "अनुमानित वज़न", calcMaterialCost: "मटीरियल कॉस्ट", calcLabourCost: "लेबर एंड वेल्डिंग कॉस्ट",
    calcTotal: "अनुमानित कुल राशि",
    calcNoteFab: "सिर्फ बजट का अंदाज़ा। फाइनल कीमत फ्री साइट विज़िट और माप के बाद कन्फर्म होती है।",
    calcRoomSize: "कमरे का साइज़ (वर्ग फुट)", calcWardrobeSize: "वॉर्डरोब साइज़ (शटर एरिया वर्ग फुट)",
    calcMaterialSelect: "मटीरियल चुनें",
    calcWardrobeCost: "वॉर्डरोब / फर्नीचर कॉस्ट", calcCivilFinish: "फ्लोरिंग, सीलिंग एंड अन्य फिनिश",
    calcNoteInt: "सिर्फ बजट का अंदाज़ा। फाइनल कीमत फ्री साइट विज़िट और माप के बाद कन्फर्म होती है।",
    quotegenTag: "इंस्टेंट कोटेशन", quotegenTitle: "AI कोटेशन जनरेटर",
    quotegenLead: "कुछ डिटेल भरें और सेकंड्स में डाउनलोडेबल PDF कोटेशन पाएं — कॉलबैक का इंतज़ार नहीं।",
    qgName: "पूरा नाम", qgMobile: "मोबाइल नंबर", qgType: "प्रोजेक्ट टाइप", qgSize: "अनुमानित साइज़ (वर्ग फुट या रनिंग फुट)",
    qgGenerateBtn: "इंस्टेंट कोटेशन जनरेट करें (PDF)",
    qgNote: "आपके ब्राउज़र में तुरंत एक इटमाइज़्ड PDF कोटेशन बनती है — कोई साइनअप नहीं चाहिए।",
    designEyebrow: "सबसे ताकतवर फीचर", designTitle: "अपना प्रोजेक्ट डिज़ाइन करें, स्टील या लकड़ी काटने से पहले देखें।",
    designLead: "प्रोडक्ट चुनें, साइज़ और फिनिश तय करें, लाइव प्रीव्यू देखें — फिर सीधे WhatsApp पर अपनी स्पेक भेजें।",
    desTabGate: "गेट डिज़ाइन", desTabRailing: "रेलिंग डिज़ाइन", desTabWardrobe: "वॉर्डरोब डिज़ाइन", desTabFurniture: "फर्नीचर डिज़ाइन",
    desStyle: "स्टाइल / पैटर्न", desWidthLabel: "चौड़ाई", desHeightLabel: "ऊंचाई", desColor: "फिनिश कलर",
    desSendBtn: "यह स्पेक WhatsApp पर भेजें",
    desSpecProduct: "प्रोडक्ट", desSpecSize: "साइज़", desSpecStyle: "स्टाइल",
    designNote: "यह एक लाइव इलस्ट्रेटिव प्रीव्यू है, इंजीनियरिंग ड्रॉइंग नहीं — फाइनल डिज़ाइन साइट पर कन्फर्म होता है।",
    careersEyebrow: "JSG में करियर", careersTitle: "हम हायरिंग कर रहे हैं — वो टीम जॉइन करें जो दोनों बनाती है।",
    careersLead: "हमारी फैब्रिकेशन वर्कशॉप और इंटीरियर एक्सीक्यूशन टीम में मौजूदा खाली पद। टूल्स और ID प्रूफ के साथ वॉक-इन वेलकम है।",
    job1Tag: "फैब्रिकेशन", job1Title: "वेल्डर / फैब्रिकेटर (MS एंड SS)",
    job1Body: "आर्क/MIG वेल्डिंग, गेट, रेलिंग और स्ट्रक्चरल स्टील में 2+ साल का अनुभव। साइट और वर्कशॉप दोनों।",
    job1Exp: "2–5 साल अनुभव", job1Loc: "बैंगलोर",
    job2Tag: "इंटीरियर्स", job2Title: "कारपेंटर — मॉड्यूलर एंड साइट फर्नीचर",
    job2Body: "मॉड्यूलर किचन, वॉर्डरोब और फर्नीचर कारपेंट्री में कुशल — फैक्ट्री-मेड और साइट-फिक्स्ड दोनों काम।",
    job2Exp: "3+ साल अनुभव", job2Loc: "बैंगलोर",
    job3Tag: "डिज़ाइन एंड साइट", job3Title: "साइट सुपरवाइज़र / प्रोजेक्ट कोऑर्डिनेटर",
    job3Body: "फैब्रिकेशन और इंटीरियर साइट टीमों को कोऑर्डिनेट करें, टाइमलाइन, मटीरियल और क्लाइंट अपडेट मैनेज करें।",
    job3Exp: "1–3 साल अनुभव", job3Loc: "बैंगलोर",
    jfName: "पूरा नाम", jfPhone: "फोन नंबर", jfRole: "आवेदन के लिए रोल",
    jfRoleOther: "अन्य / सामान्य पूछताछ", jfSubmit: "WhatsApp पर अप्लाई करें"
  };

  var i18nEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var originalHTML = new Map();
  i18nEls.forEach(function (el) { originalHTML.set(el, el.innerHTML); });

  function setLang(lang) {
    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'hi' && HI.hasOwnProperty(key)) {
        el.innerHTML = HI[key];
      } else {
        el.innerHTML = originalHTML.get(el);
      }
    });
    document.documentElement.lang = lang;
    var btnEn = document.getElementById('lang-en');
    var btnHi = document.getElementById('lang-hi');
    if (btnEn && btnHi) {
      btnEn.classList.toggle('active', lang === 'en');
      btnHi.classList.toggle('active', lang === 'hi');
    }
  }
  var btnEn = document.getElementById('lang-en');
  var btnHi = document.getElementById('lang-hi');
  if (btnEn) btnEn.addEventListener('click', function () { setLang('en'); });
  if (btnHi) btnHi.addEventListener('click', function () { setLang('hi'); });

  /* ---------- 3. BEFORE / AFTER COMPARE SLIDER ---------- */
  var range = document.getElementById('compareRange');
  var afterWrap = document.getElementById('afterWrap');
  var divider = document.getElementById('compareDivider');
  var compareBox = document.getElementById('compareBox');
  if (range && afterWrap && divider) {
    function updateCompare(val) {
      afterWrap.style.width = val + '%';
      divider.style.left = val + '%';
      // Keep inner SVG at full container width so it doesn't shrink when clipped
      if (compareBox) {
        var boxW = compareBox.offsetWidth;
        var svg = afterWrap.querySelector('svg');
        if (svg && boxW > 0) svg.style.minWidth = boxW + 'px';
      }
    }
    range.addEventListener('input', function () { updateCompare(range.value); });
    updateCompare(range.value);
    // Also update on resize
    window.addEventListener('resize', function() { updateCompare(range.value); });
  }

  /* ---------- 4. FAQ ACCORDION ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    function sync() {
      if (item.classList.contains('open')) {
        a.style.maxHeight = a.scrollHeight + 'px';
      } else {
        a.style.maxHeight = '0px';
      }
    }
    sync();
    q.addEventListener('click', function () {
      document.querySelectorAll('.faq-item').forEach(function (other) {
        if (other !== item) { other.classList.remove('open'); other.querySelector('.faq-a').style.maxHeight = '0px'; }
      });
      item.classList.toggle('open');
      sync();
    });
    window.addEventListener('resize', function () { if (item.classList.contains('open')) sync(); });
  });

  /* ---------- 5. TESTIMONIAL CAROUSEL ---------- */
  var testiRow = document.getElementById('testiRow');
  var prevBtn = document.getElementById('testiPrev');
  var nextBtn = document.getElementById('testiNext');
  if (testiRow && prevBtn && nextBtn) {
    function scrollAmount() {
      var card = testiRow.querySelector('.testi-card');
      return card ? card.offsetWidth + 20 : 360;
    }
    prevBtn.addEventListener('click', function () { testiRow.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }); });
    nextBtn.addEventListener('click', function () { testiRow.scrollBy({ left: scrollAmount(), behavior: 'smooth' }); });
  }

  /* ---------- 6. QUOTE FORM -> WHATSAPP ---------- */
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('fName').value.trim();
      var phone = document.getElementById('fPhone').value.trim();
      var email = document.getElementById('fEmail').value.trim();
      var city = document.getElementById('fCity').value.trim();
      var ptype = (quoteForm.querySelector('input[name="ptype"]:checked') || {}).value || '';
      var service = document.getElementById('fService').value;
      var msg = document.getElementById('fMsg').value.trim();

      var lines = [
        'Hi JSG, I would like a quote for my project.',
        'Name: ' + name,
        'Phone: ' + phone,
        email ? ('Email: ' + email) : null,
        'City: ' + city,
        'Project type: ' + ptype,
        'Service needed: ' + service,
        msg ? ('Details: ' + msg) : null
      ].filter(Boolean);

      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/919008423323?text=' + text, '_blank', 'noopener');
    });
  }

  /* ---------- 7. COST CALCULATOR (FABRICATION + INTERIOR) ---------- */
  var calcTabs = document.querySelectorAll('.calc-tab');
  calcTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var which = tab.getAttribute('data-calc-tab');
      document.querySelectorAll('.calc-tab').forEach(function (t) { t.classList.toggle('active', t === tab); });
      document.querySelectorAll('.calc-panel').forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-calc-panel') === which);
      });
    });
  });

  function fmtINR(n) {
    n = Math.round(n);
    return '₹' + n.toLocaleString('en-IN');
  }

  function computeFab() {
    var rate = parseFloat(document.getElementById('fabMaterial').value) || 0;
    var length = parseFloat(document.getElementById('fabLength').value) || 0;
    var width = parseFloat(document.getElementById('fabWidth').value) || 0;
    var kgPerSqft = parseFloat(document.getElementById('fabThickness').value) || 0;
    var area = length * width;
    var weight = area * kgPerSqft;
    var materialCost = weight * rate;
    var labourCost = area * 180; // approx labour+welding per sq.ft
    var total = materialCost + labourCost;
    document.getElementById('fabWeightOut').textContent = Math.round(weight) + ' kg';
    document.getElementById('fabMaterialOut').textContent = fmtINR(materialCost);
    document.getElementById('fabLabourOut').textContent = fmtINR(labourCost);
    document.getElementById('fabTotalOut').textContent = fmtINR(total);
    return total;
  }

  function computeInt() {
    var roomArea = parseFloat(document.getElementById('intRoom').value) || 0;
    var wardrobeArea = parseFloat(document.getElementById('intWardrobe').value) || 0;
    var rate = parseFloat(document.getElementById('intMaterial').value) || 0;
    var wardrobeCost = wardrobeArea * rate;
    var roomFinishCost = roomArea * 220; // approx flooring/ceiling/misc per sq.ft
    var total = wardrobeCost + roomFinishCost;
    document.getElementById('intWardrobeOut').textContent = fmtINR(wardrobeCost);
    document.getElementById('intRoomOut').textContent = fmtINR(roomFinishCost);
    document.getElementById('intTotalOut').textContent = fmtINR(total);
    return total;
  }

  ['fabMaterial', 'fabLength', 'fabWidth', 'fabThickness'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', computeFab);
  });
  ['intRoom', 'intWardrobe', 'intMaterial'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', computeInt);
  });
  if (document.getElementById('fabWeightOut')) computeFab();
  if (document.getElementById('intWardrobeOut')) computeInt();

  /* ---------- 8. AI QUOTATION GENERATOR -> PDF (Claude API powered) ---------- */
  var qgBtn = document.getElementById('qgGenerateBtn');
  if (qgBtn) {
    qgBtn.addEventListener('click', async function () {
      var name = (document.getElementById('qgName').value || '').trim();
      var mobile = (document.getElementById('qgMobile').value || '').trim();
      var type = document.getElementById('qgType').value;
      var width = parseFloat(document.getElementById('qgWidth').value) || 0;
      var height = parseFloat(document.getElementById('qgHeight').value) || 0;
      var material = document.getElementById('qgMaterial').value;
      var notes = (document.getElementById('qgNotes').value || '').trim();
      var note = document.getElementById('qgNote');
      var statusEl = document.getElementById('qgAiStatus');
      var btnText = document.getElementById('qgBtnText');

      if (!name || !mobile) {
        note.textContent = 'Name aur mobile number dono required hain.';
        note.style.color = '#B86244';
        return;
      }

      // UI: loading state
      qgBtn.disabled = true;
      btnText.textContent = '⏳ AI calculating... please wait';
      statusEl.style.display = 'block';
      statusEl.textContent = '🤖 AI material, labour aur GST calculate kar raha hai...';

      // Build prompt for Claude
      var typeLabels = {
        gate: 'MS/SS Gate', railing: 'Railing / Staircase', grill: 'Window Grill',
        shed: 'Industrial Shed / Structure', kitchen: 'Modular Kitchen',
        wardrobe: 'Wardrobe / Furniture', fullhome: 'Full Home Interiors'
      };
      var matLabels = {
        ms: 'MS (Mild Steel) at ₹62/kg', ss304: 'SS 304 at ₹95/kg',
        ss202: 'SS 202 at ₹78/kg', marine_lam: 'Marine Ply + Laminate at ₹1450/sqft',
        marine_acrylic: 'Marine Ply + Acrylic at ₹1750/sqft', marine_pu: 'Marine Ply + PU at ₹2150/sqft'
      };

      var prompt = 'You are JSG Engineering & Interiors quotation AI in Bangalore. Generate a detailed line-item quotation for:\n' +
        'Project: ' + typeLabels[type] + '\n' +
        'Size: ' + width + 'ft x ' + height + 'ft (area: ' + (width * height).toFixed(1) + ' sqft)\n' +
        'Material: ' + (matLabels[material] || material) + '\n' +
        'Special requirements: ' + (notes || 'None') + '\n\n' +
        'Respond with ONLY valid JSON, no markdown, no explanation. Format:\n' +
        '{"items":[{"description":"item name","qty":"1 unit","rate":5000,"amount":5000}],' +
        '"subtotal":10000,"labour":2000,"gst_18_percent":2160,"profit_15_percent":2124,"grand_total":16284,' +
        '"notes":"Any important notes about the project","validity":"15 days"}\n\n' +
        'Rules: Use current Bangalore market rates. Include material cost, surface treatment/primer, hardware/fittings, transportation separately. Labour is 30% of material. GST 18% on subtotal+labour. Profit 15% on subtotal+labour. All amounts in INR integers.';

      var lineItems = [];
      var totals = {};
      var aiNotes = '';

      try {
        var res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-6',
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }]
          })
        });
        var data = await res.json();
        var rawText = (data.content && data.content[0] && data.content[0].text) || '{}';
        var parsed = JSON.parse(rawText.replace(/```json|```/g, '').trim());
        lineItems = parsed.items || [];
        totals = parsed;
        aiNotes = parsed.notes || '';
      } catch (err) {
        // Fallback: calculate locally if API fails
        statusEl.textContent = '⚠️ Offline mode — local calculation use ho raha hai';
        var area = width * height;
        var baseRates = { gate: 850, railing: 720, grill: 600, shed: 480, kitchen: 1850, wardrobe: 1450, fullhome: 1650 };
        var base = (baseRates[type] || 1000) * area;
        lineItems = [
          { description: typeLabels[type] + ' — Material (' + width + 'x' + height + 'ft)', qty: '1 lot', rate: Math.round(base * 0.55), amount: Math.round(base * 0.55) },
          { description: 'Surface treatment & primer coat', qty: '1 lot', rate: Math.round(base * 0.08), amount: Math.round(base * 0.08) },
          { description: 'Hardware & fittings', qty: '1 lot', rate: Math.round(base * 0.07), amount: Math.round(base * 0.07) },
          { description: 'Transportation to site', qty: '1 trip', rate: 2500, amount: 2500 }
        ];
        var sub = lineItems.reduce(function(s,i){ return s + i.amount; }, 0);
        var labour = Math.round(sub * 0.30);
        var gst = Math.round((sub + labour) * 0.18);
        var profit = Math.round((sub + labour) * 0.15);
        totals = { subtotal: sub, labour: labour, gst_18_percent: gst, profit_15_percent: profit, grand_total: sub + labour + gst + profit, validity: '15 days' };
      }

      // Generate PDF
      if (typeof window.jspdf === 'undefined') {
        statusEl.textContent = '❌ PDF library load nahi hua. Internet check karo aur page reload karo.';
        qgBtn.disabled = false;
        btnText.textContent = '⚡ Generate AI Quotation (PDF)';
        return;
      }

      statusEl.textContent = '📄 PDF generate ho raha hai...';

      var jsPDFCtor = window.jspdf.jsPDF;
      var doc = new jsPDFCtor({ unit: 'pt', format: 'a4' });
      var pageW = doc.internal.pageSize.getWidth();
      var margin = 48;
      var y = 0;

      // Header
      doc.setFillColor(26, 24, 20);
      doc.rect(0, 0, pageW, 90, 'F');
      doc.setFillColor(199, 151, 44);
      doc.rect(0, 0, 4, 90, 'F');
      doc.setTextColor(224, 178, 61);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('JSG ENGINEERING & INTERIORS', margin, 34);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(200, 195, 185);
      doc.text('Jai Shree Ganesha — Fabrication Engineering & Interior Works, Bangalore', margin, 50);
      doc.text('+91 90084 23323  |  ajeet9008423323@gmail.com  |  Marsandra Mandur Main Road, BLR 560049', margin, 64);

      // Quote meta
      y = 110;
      var today = new Date();
      var dateStr = today.toLocaleDateString('en-IN');
      var quoteNo = 'JSG-' + today.getFullYear() + '-' + Math.floor(Math.random() * 90000 + 10000);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(126, 61, 41);
      doc.text('AI-GENERATED QUOTATION', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('No.: ' + quoteNo + '   Date: ' + dateStr + '   Valid: ' + (totals.validity || '15 days'), pageW - margin, y, { align: 'right' });

      doc.setDrawColor(199, 151, 44);
      doc.setLineWidth(0.8);
      doc.line(margin, y + 8, pageW - margin, y + 8);

      // Client details
      y += 28;
      doc.setFillColor(247, 244, 237);
      doc.rect(margin, y - 14, pageW - margin * 2, 42, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(90, 75, 56);
      doc.text('CLIENT:', margin + 10, y + 2);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(20, 20, 20);
      doc.text(name + '   |   ' + mobile + '   |   ' + (typeLabels[type] || type) + '   |   ' + width + ' × ' + height + ' ft', margin + 60, y + 2);
      if (notes) {
        doc.setFontSize(9);
        doc.setTextColor(90, 90, 90);
        doc.text('Notes: ' + notes, margin + 10, y + 18);
      }

      // Line items table
      y += 50;
      doc.setFillColor(26, 24, 20);
      doc.rect(margin, y - 14, pageW - margin * 2, 22, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(199, 151, 44);
      doc.text('#', margin + 6, y);
      doc.text('DESCRIPTION', margin + 24, y);
      doc.text('QTY', pageW - margin - 130, y, { align: 'right' });
      doc.text('RATE (₹)', pageW - margin - 66, y, { align: 'right' });
      doc.text('AMOUNT (₹)', pageW - margin, y, { align: 'right' });

      y += 10;
      lineItems.forEach(function (item, idx) {
        y += 22;
        if (y > 700) { doc.addPage(); y = 60; }
        var bg = idx % 2 === 0 ? [250, 248, 243] : [255, 255, 255];
        doc.setFillColor.apply(doc, bg);
        doc.rect(margin, y - 14, pageW - margin * 2, 20, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(40, 40, 40);
        doc.text(String(idx + 1), margin + 6, y);
        var descWords = doc.splitTextToSize(item.description, pageW - margin * 2 - 200);
        doc.text(descWords[0], margin + 24, y);
        doc.text(String(item.qty || '1 lot'), pageW - margin - 130, y, { align: 'right' });
        doc.text(Number(item.rate).toLocaleString('en-IN'), pageW - margin - 66, y, { align: 'right' });
        doc.setFont('helvetica', 'bold');
        doc.text(Number(item.amount).toLocaleString('en-IN'), pageW - margin, y, { align: 'right' });
      });

      // Totals
      y += 30;
      doc.setDrawColor(220, 215, 200);
      doc.setLineWidth(0.5);
      doc.line(margin, y - 10, pageW - margin, y - 10);

      function totalRow(label, val, bold, highlight) {
        if (bold) doc.setFont('helvetica', 'bold'); else doc.setFont('helvetica', 'normal');
        doc.setFontSize(highlight ? 13 : 10.5);
        doc.setTextColor(highlight ? 126 : 60, highlight ? 61 : 60, highlight ? 41 : 60);
        doc.text(label, pageW - margin - 130, y);
        doc.text('₹ ' + Number(val).toLocaleString('en-IN'), pageW - margin, y, { align: 'right' });
        y += highlight ? 26 : 20;
      }

      totalRow('Material & Items Subtotal', totals.subtotal, false, false);
      totalRow('Labour & Installation (30%)', totals.labour, false, false);
      doc.setDrawColor(199, 151, 44);
      doc.setLineWidth(0.5);
      doc.line(pageW - margin - 180, y - 6, pageW - margin, y - 6);
      totalRow('GST @ 18%', totals.gst_18_percent, false, false);
      totalRow('Profit Margin (15%)', totals.profit_15_percent, false, false);
      doc.setFillColor(247, 244, 237);
      doc.rect(margin, y - 14, pageW - margin * 2, 28, 'F');
      totalRow('GRAND TOTAL', totals.grand_total, true, true);

      // Notes + disclaimer
      y += 20;
      if (aiNotes) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9.5);
        doc.setTextColor(90, 80, 60);
        var noteLines = doc.splitTextToSize('AI Notes: ' + aiNotes, pageW - margin * 2);
        doc.text(noteLines, margin, y);
        y += noteLines.length * 14 + 10;
      }

      doc.setFillColor(240, 237, 228);
      doc.rect(margin, y - 8, pageW - margin * 2, 56, 'F');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 90, 70);
      var disc = [
        '• This is an AI-generated preliminary estimate for budgeting purposes only. It is NOT a final price.',
        '• Our engineer will visit your site within 24 hours for exact measurement & final written quotation.',
        '• Material rates subject to market fluctuation. GST as applicable. Quote valid for ' + (totals.validity || '15 days') + '.',
        '• Workmanship warranty provided on all completed projects. No hidden charges.'
      ];
      disc.forEach(function (d) { doc.text(d, margin + 8, y + 10); y += 12; });

      // Footer
      y += 24;
      doc.setDrawColor(199, 151, 44);
      doc.setLineWidth(0.8);
      doc.line(margin, y, pageW - margin, y);
      y += 16;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text('JSG Engineering & Interiors — Jai Shree Ganesha', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(110, 110, 110);
      doc.text('+91 90084 23323  |  ajeet9008423323@gmail.com  |  Bangalore 560049', margin, y + 14);
      doc.text('Authorised Signatory: ___________________', pageW - margin - 160, y + 14);

      doc.save('JSG-Quote-' + (name.replace(/\s+/g, '-') || 'Client') + '-' + quoteNo + '.pdf');

      statusEl.textContent = '✅ PDF download ho gaya! Hamare team se site visit confirm karein — 24 ghante mein aayenge.';
      statusEl.style.background = '#F0FFF4';
      statusEl.style.borderColor = '#5B8F5B';
      qgBtn.disabled = false;
      btnText.textContent = '⚡ Generate AI Quotation (PDF)';
    });
  }

  /* ---------- 9. DESIGN YOUR PROJECT — LIVE PREVIEW ---------- */
  var desTabsEl = document.getElementById('desTabs');
  if (desTabsEl) {
    var designLib = {
      gate: {
        label: 'Gate', defaultWidth: 8, defaultHeight: 5, minW: 4, maxW: 16, minH: 3, maxH: 7,
        styles: [
          { id: 'flat', name: 'Flat Bar' },
          { id: 'mesh', name: 'Mesh / Grill' },
          { id: 'sheet', name: 'Sheet Cladding' }
        ]
      },
      railing: {
        label: 'Railing', defaultWidth: 10, defaultHeight: 3.5, minW: 4, maxW: 20, minH: 2.5, maxH: 5,
        styles: [
          { id: 'vertical', name: 'Vertical Bars' },
          { id: 'glass', name: 'Glass Panel' },
          { id: 'rope', name: 'Cable / Rope' }
        ]
      },
      wardrobe: {
        label: 'Wardrobe', defaultWidth: 8, defaultHeight: 8, minW: 4, maxW: 14, minH: 6, maxH: 10,
        styles: [
          { id: 'sliding', name: 'Sliding Shutter' },
          { id: 'openable', name: 'Openable Shutter' },
          { id: 'loft', name: 'With Loft' }
        ]
      },
      furniture: {
        label: 'Furniture', defaultWidth: 6, defaultHeight: 3, minW: 3, maxW: 12, minH: 2, maxH: 5,
        styles: [
          { id: 'tvunit', name: 'TV Unit' },
          { id: 'studytable', name: 'Study Table' },
          { id: 'sofa', name: 'Sofa Set' }
        ]
      }
    };

    var desState = { product: 'gate', style: 'flat', width: 8, height: 5, color: '#3D454D' };

    var desTabBtns = document.querySelectorAll('#desTabs .des-tab');
    var styleWrap = document.getElementById('desStyleTabs');
    var widthSlider = document.getElementById('desWidth');
    var heightSlider = document.getElementById('desHeight');
    var widthOut = document.getElementById('desWidthOut');
    var heightOut = document.getElementById('desHeightOut');
    var swatches = document.querySelectorAll('#desSwatches .des-swatch');
    var previewBox = document.getElementById('designPreviewBox');
    var specProduct = document.getElementById('desSpecProduct');
    var specSize = document.getElementById('desSpecSize');
    var specStyle = document.getElementById('desSpecStyle');
    var waBtn = document.getElementById('desWhatsappBtn');

    function buildStyleTabs() {
      var cfg = designLib[desState.product];
      styleWrap.innerHTML = '';
      cfg.styles.forEach(function (s, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'des-tab' + (i === 0 ? ' active' : '');
        b.setAttribute('data-style', s.id);
        b.textContent = s.name;
        b.addEventListener('click', function () {
          styleWrap.querySelectorAll('.des-tab').forEach(function (t) { t.classList.toggle('active', t === b); });
          desState.style = s.id;
          renderPreview();
        });
        styleWrap.appendChild(b);
      });
      desState.style = cfg.styles[0].id;
    }

    function renderPreview() {
      var cfg = designLib[desState.product];
      var w = desState.width, h = desState.height, color = desState.color;
      var svgW = 380, svgH = 260;
      var pad = 30;
      var drawW = Math.min(svgW - pad * 2, (w / cfg.maxW) * (svgW - pad * 2) + 60);
      var drawH = Math.min(svgH - pad * 2, (h / cfg.maxH) * (svgH - pad * 2) + 40);
      var x0 = (svgW - drawW) / 2, y0 = (svgH - drawH) / 2 + 10;
      var svg = '<svg viewBox="0 0 ' + svgW + ' ' + svgH + '" xmlns="http://www.w3.org/2000/svg">';
      svg += '<line x1="20" y1="' + (y0 + drawH + 14) + '" x2="' + (svgW - 20) + '" y2="' + (y0 + drawH + 14) + '" stroke="#3D454D" stroke-width="1.5"/>';

      function postFrame() {
        return '<rect x="' + x0 + '" y="' + y0 + '" width="' + drawW + '" height="' + drawH + '" fill="none" stroke="' + color + '" stroke-width="6"/>';
      }
      var inner = '';
      if (desState.product === 'gate') {
        if (desState.style === 'flat') {
          var bars = 7, gap = drawW / (bars + 1);
          for (var i = 1; i <= bars; i++) {
            inner += '<line x1="' + (x0 + gap * i) + '" y1="' + y0 + '" x2="' + (x0 + gap * i) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="3"/>';
          }
        } else if (desState.style === 'mesh') {
          inner += '<rect x="' + x0 + '" y="' + y0 + '" width="' + drawW + '" height="' + drawH + '" fill="none" stroke="' + color + '" stroke-width="1" opacity="0.0"/>';
          for (var gx = 0; gx <= drawW; gx += 16) inner += '<line x1="' + (x0 + gx) + '" y1="' + y0 + '" x2="' + (x0 + gx) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="1.4"/>';
          for (var gy = 0; gy <= drawH; gy += 16) inner += '<line x1="' + x0 + '" y1="' + (y0 + gy) + '" x2="' + (x0 + drawW) + '" y2="' + (y0 + gy) + '" stroke="' + color + '" stroke-width="1.4"/>';
        } else {
          inner += '<rect x="' + (x0 + 4) + '" y="' + (y0 + 4) + '" width="' + (drawW - 8) + '" height="' + (drawH - 8) + '" fill="' + color + '" opacity="0.35"/>';
        }
        inner += postFrame();
      } else if (desState.product === 'railing') {
        inner += '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + (x0 + drawW) + '" y2="' + y0 + '" stroke="' + color + '" stroke-width="5"/>';
        inner += '<line x1="' + x0 + '" y1="' + (y0 + drawH) + '" x2="' + (x0 + drawW) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="5"/>';
        if (desState.style === 'glass') {
          inner += '<rect x="' + x0 + '" y="' + y0 + '" width="' + drawW + '" height="' + drawH + '" fill="#cfe7ee" opacity="0.25" stroke="' + color + '" stroke-width="2"/>';
        } else if (desState.style === 'rope') {
          for (var ry = 1; ry <= 4; ry++) {
            var yy = y0 + (drawH / 5) * ry;
            inner += '<line x1="' + x0 + '" y1="' + yy + '" x2="' + (x0 + drawW) + '" y2="' + yy + '" stroke="' + color + '" stroke-width="2"/>';
          }
        } else {
          var rbars = 9, rgap = drawW / (rbars + 1);
          for (var ri = 1; ri <= rbars; ri++) {
            inner += '<line x1="' + (x0 + rgap * ri) + '" y1="' + y0 + '" x2="' + (x0 + rgap * ri) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="3"/>';
          }
        }
      } else if (desState.product === 'wardrobe') {
        inner += postFrame();
        var doors = desState.style === 'openable' ? 3 : 2;
        for (var di = 1; di < doors; di++) {
          inner += '<line x1="' + (x0 + (drawW / doors) * di) + '" y1="' + y0 + '" x2="' + (x0 + (drawW / doors) * di) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="2"/>';
        }
        if (desState.style === 'loft') {
          inner += '<line x1="' + x0 + '" y1="' + (y0 + drawH * 0.22) + '" x2="' + (x0 + drawW) + '" y2="' + (y0 + drawH * 0.22) + '" stroke="' + color + '" stroke-width="2"/>';
        }
        for (var hd = 0; hd < doors; hd++) {
          var handleX = x0 + (drawW / doors) * (hd + 1) - 10;
          inner += '<circle cx="' + handleX + '" cy="' + (y0 + drawH / 2) + '" r="2.6" fill="' + color + '"/>';
        }
      } else {
        if (desState.style === 'tvunit') {
          inner += '<rect x="' + x0 + '" y="' + (y0 + drawH * 0.55) + '" width="' + drawW + '" height="' + (drawH * 0.45) + '" fill="none" stroke="' + color + '" stroke-width="4"/>';
          inner += '<rect x="' + (x0 + drawW * 0.18) + '" y="' + y0 + '" width="' + (drawW * 0.64) + '" height="' + (drawH * 0.4) + '" fill="' + color + '" opacity="0.18" stroke="' + color + '" stroke-width="2"/>';
        } else if (desState.style === 'studytable') {
          inner += '<rect x="' + x0 + '" y="' + (y0 + drawH * 0.45) + '" width="' + drawW + '" height="' + (drawH * 0.1) + '" fill="' + color + '"/>';
          inner += '<line x1="' + (x0 + 8) + '" y1="' + (y0 + drawH * 0.55) + '" x2="' + (x0 + 8) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="4"/>';
          inner += '<line x1="' + (x0 + drawW - 8) + '" y1="' + (y0 + drawH * 0.55) + '" x2="' + (x0 + drawW - 8) + '" y2="' + (y0 + drawH) + '" stroke="' + color + '" stroke-width="4"/>';
        } else {
          inner += '<rect x="' + x0 + '" y="' + (y0 + drawH * 0.3) + '" width="' + drawW + '" height="' + (drawH * 0.55) + '" rx="10" fill="' + color + '" opacity="0.3" stroke="' + color + '" stroke-width="3"/>';
          inner += '<rect x="' + x0 + '" y="' + (y0 + drawH * 0.78) + '" width="' + drawW + '" height="' + (drawH * 0.12) + '" fill="' + color + '"/>';
        }
      }
      svg += inner + '</svg>';
      previewBox.innerHTML = svg;
      specProduct.textContent = cfg.label;
      specSize.textContent = w + ' × ' + h + ' ft';
      var styleObj = cfg.styles.filter(function (s) { return s.id === desState.style; })[0];
      specStyle.textContent = styleObj ? styleObj.name : '—';
      widthOut.textContent = w + ' ft';
      heightOut.textContent = h + ' ft';
    }

    desTabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        desTabBtns.forEach(function (b) { b.classList.toggle('active', b === btn); });
        var product = btn.getAttribute('data-design');
        desState.product = product;
        var cfg = designLib[product];
        desState.width = cfg.defaultWidth;
        desState.height = cfg.defaultHeight;
        widthSlider.min = cfg.minW; widthSlider.max = cfg.maxW; widthSlider.value = cfg.defaultWidth;
        heightSlider.min = cfg.minH; heightSlider.max = cfg.maxH; heightSlider.value = cfg.defaultHeight;
        buildStyleTabs();
        renderPreview();
      });
    });

    widthSlider.addEventListener('input', function () { desState.width = parseFloat(widthSlider.value); renderPreview(); });
    heightSlider.addEventListener('input', function () { desState.height = parseFloat(heightSlider.value); renderPreview(); });
    swatches.forEach(function (sw) {
      sw.addEventListener('click', function () {
        swatches.forEach(function (s) { s.classList.toggle('active', s === sw); });
        desState.color = sw.getAttribute('data-color');
        renderPreview();
      });
    });
    if (waBtn) {
      waBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var cfg = designLib[desState.product];
        var styleObj = cfg.styles.filter(function (s) { return s.id === desState.style; })[0];
        var lines = [
          'Hi JSG, I designed this on your website and would like a quote:',
          'Product: ' + cfg.label,
          'Style: ' + (styleObj ? styleObj.name : ''),
          'Size: ' + desState.width + ' x ' + desState.height + ' ft',
          'Finish colour: ' + desState.color
        ];
        var text = encodeURIComponent(lines.join('\n'));
        window.open('https://wa.me/919008423323?text=' + text, '_blank', 'noopener');
      });
    }

    buildStyleTabs();
    renderPreview();
  }

  /* ---------- 10. PWA SERVICE WORKER REGISTRATION ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  /* ---------- 11. OWNER DASHBOARD ---------- */
  var DASH_PIN = '9008'; // Change this PIN — script.js line ~853
  var ownerDashBtn = document.getElementById('ownerDashBtn');
  console.log('[JSG Dashboard] ownerDashBtn found:', !!ownerDashBtn);
  var ownerDashOverlay = document.getElementById('ownerDashOverlay');
  var dashCloseBtn = document.getElementById('dashCloseBtn');
  var dashLoginBtn = document.getElementById('dashLoginBtn');
  var dashPinInput = document.getElementById('dashPin');
  var dashContent = document.getElementById('dashContent');
  var dashLoginBox = document.getElementById('dashLoginBox');
  var dashLoginErr = document.getElementById('dashLoginErr');

  function getDashProjects() {
    try { return JSON.parse(localStorage.getItem('jsg_projects') || '[]'); } catch (e) { return []; }
  }
  function saveDashProjects(p) { localStorage.setItem('jsg_projects', JSON.stringify(p)); }

  function fmtINRd(n) {
    return '₹' + Number(n).toLocaleString('en-IN');
  }

  window.renderDashboard = function renderDashboard() {
    var projects = getDashProjects();
    var kpiEl = document.getElementById('dashKPIs');
    var tbody = document.getElementById('dashTableBody');
    var noProj = document.getElementById('dashNoProjects');

    // KPIs
    var totalRevenue = 0, totalReceived = 0, running = 0, pending = 0;
    var today = new Date(); var thisMonth = today.getMonth(); var thisYear = today.getFullYear();
    var monthRevenue = 0;
    projects.forEach(function (p) {
      totalRevenue += Number(p.amount) || 0;
      totalReceived += Number(p.paid) || 0;
      if (p.status === 'running') running++;
      if (p.status === 'pending') pending++;
      var d = new Date(p.date);
      if (d.getMonth() === thisMonth && d.getFullYear() === thisYear) {
        monthRevenue += Number(p.amount) || 0;
      }
    });
    var outstanding = totalRevenue - totalReceived;

    var kpis = [
      { label: 'This Month', value: fmtINRd(monthRevenue), color: '#C7972C' },
      { label: 'Total Revenue', value: fmtINRd(totalRevenue), color: '#5B8F5B' },
      { label: 'Outstanding', value: fmtINRd(outstanding), color: outstanding > 0 ? '#E05050' : '#5B8F5B' },
      { label: 'Running Projects', value: running, color: '#4A90D9' },
      { label: 'Pending Quotes', value: pending, color: '#C7972C' },
      { label: 'Total Projects', value: projects.length, color: '#6B7480' }
    ];

    kpiEl.innerHTML = kpis.map(function (k) {
      return '<div style="background:#1B2026;border-radius:8px;padding:16px 18px;border-left:3px solid ' + k.color + ';">' +
        '<div style="font-size:11px;color:#6B7480;letter-spacing:1px;margin-bottom:6px;">' + k.label + '</div>' +
        '<div style="font-size:22px;font-weight:700;color:#F4F1E8;">' + k.value + '</div>' +
        '</div>';
    }).join('');

    // Table
    if (projects.length === 0) {
      tbody.innerHTML = '';
      noProj.style.display = 'block';
    } else {
      noProj.style.display = 'none';
      tbody.innerHTML = projects.map(function (p, i) {
        var statusColors = { running: '#4A90D9', completed: '#5B8F5B', pending: '#C7972C', cancelled: '#E05050' };
        var statusLabels = { running: '🔵 Running', completed: '✅ Done', pending: '⏳ Pending', cancelled: '❌ Cancelled' };
        return '<tr style="border-bottom:1px solid #252C35;">' +
          '<td style="padding:10px;color:#F4F1E8;">' + p.client + '</td>' +
          '<td style="padding:10px;color:#B7BCC2;">' + p.project + '</td>' +
          '<td style="padding:10px;text-align:right;color:#F4F1E8;">' + fmtINRd(p.amount) + '</td>' +
          '<td style="padding:10px;text-align:right;color:' + (p.paid >= p.amount ? '#5B8F5B' : '#E05050') + ';">' + fmtINRd(p.paid) + '</td>' +
          '<td style="padding:10px;text-align:center;"><span style="font-size:12px;padding:3px 8px;background:' + (statusColors[p.status] || '#3D454D') + '22;color:' + (statusColors[p.status] || '#6B7480') + ';border-radius:3px;">' + (statusLabels[p.status] || p.status) + '</span></td>' +
          '<td style="padding:10px;text-align:center;"><button onclick="jsgDelProject(' + i + ')" style="background:none;border:none;color:#E05050;cursor:pointer;font-size:16px;">×</button></td>' +
          '</tr>';
      }).join('');
    }

    // Chart — monthly bars
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monthData = new Array(12).fill(0);
    projects.forEach(function (p) {
      var d = new Date(p.date);
      if (d.getFullYear() === thisYear) {
        monthData[d.getMonth()] += Number(p.amount) || 0;
      }
    });
    var maxVal = Math.max.apply(null, monthData) || 1;
    var svg = document.getElementById('dashChart');
    if (svg) {
      var W = 820, H = 200, pad = 40, barW = (W - pad * 2) / 12;
      var bars = monthData.map(function (v, i) {
        var bh = Math.round((v / maxVal) * (H - 60));
        var x = pad + i * barW + barW * 0.15;
        var y = H - 30 - bh;
        var isThis = i === thisMonth;
        return '<rect x="' + x + '" y="' + y + '" width="' + (barW * 0.7) + '" height="' + bh + '" fill="' + (isThis ? '#C7972C' : '#3D454D') + '" rx="2"/>' +
          (v > 0 ? '<text x="' + (x + barW * 0.35) + '" y="' + (y - 4) + '" text-anchor="middle" fill="#B7BCC2" font-size="9">' + (v >= 1000 ? Math.round(v / 1000) + 'k' : v) + '</text>' : '') +
          '<text x="' + (x + barW * 0.35) + '" y="' + (H - 10) + '" text-anchor="middle" fill="#6B7480" font-size="9">' + months[i] + '</text>';
      }).join('');
      svg.innerHTML = bars;
    }
  }

  window.jsgDelProject = function (idx) {
    var p = getDashProjects();
    p.splice(idx, 1);
    saveDashProjects(p);
    renderDashboard();
  };

  if (ownerDashBtn) {
    ownerDashBtn.addEventListener('click', function () {
      ownerDashOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      var authed = sessionStorage.getItem('jsg_auth');
      if (authed === '1') {
        dashLoginBox.style.display = 'none';
        dashContent.style.display = 'block';
        renderDashboard();
      }
    });
  }

  if (dashCloseBtn) {
    dashCloseBtn.addEventListener('click', function () {
      ownerDashOverlay.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  if (dashLoginBtn) {
    dashLoginBtn.addEventListener('click', function () {
      if (dashPinInput.value === DASH_PIN) {
        sessionStorage.setItem('jsg_auth', '1');
        dashLoginBox.style.display = 'none';
        dashLoginErr.style.display = 'none';
        dashContent.style.display = 'block';
        renderDashboard();
      } else {
        dashLoginErr.style.display = 'block';
        dashPinInput.value = '';
      }
    });
    dashPinInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') dashLoginBtn.click();
    });
  }

  var dpAddBtn = document.getElementById('dpAddBtn');
  if (dpAddBtn) {
    dpAddBtn.addEventListener('click', function () {
      var client = document.getElementById('dpClient').value.trim();
      var project = document.getElementById('dpProject').value.trim();
      var amount = document.getElementById('dpAmount').value;
      var paid = document.getElementById('dpPaid').value || '0';
      var status = document.getElementById('dpStatus').value;
      if (!client || !project || !amount) { alert('Client, project and amount required.'); return; }
      var projects = getDashProjects();
      projects.unshift({ client: client, project: project, amount: amount, paid: paid, status: status, date: new Date().toISOString() });
      saveDashProjects(projects);
      document.getElementById('dpClient').value = '';
      document.getElementById('dpProject').value = '';
      document.getElementById('dpAmount').value = '';
      document.getElementById('dpPaid').value = '';
      renderDashboard();
    });
  }

  /* ---------- 12. CAREERS FORM -> WHATSAPP ---------- */
  var careerForm = document.getElementById('careerForm');
  if (careerForm) {
    careerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('jfName').value.trim();
      var phone = document.getElementById('jfPhone').value.trim();
      var role = document.getElementById('jfRole').value;
      var lines = [
        'Hi JSG, I would like to apply for a job opening.',
        'Name: ' + name,
        'Phone: ' + phone,
        'Role: ' + role
      ];
      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/919008423323?text=' + text, '_blank', 'noopener');
    });
  }

  /* ---------- 13. CLIENT PORTAL (Firebase Auth + Firestore) ---------- */
  window.jsgCpTab = function(tab) {
    var loginForm = document.getElementById('cpLoginForm');
    var signupForm = document.getElementById('cpSignupForm');
    var tabLogin = document.getElementById('cpTabLogin');
    var tabSignup = document.getElementById('cpTabSignup');
    if (tab === 'login') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      tabLogin.style.background = '#C7972C'; tabLogin.style.color = '#1A1306';
      tabSignup.style.background = 'transparent'; tabSignup.style.color = '#6B7480';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      tabSignup.style.background = '#C7972C'; tabSignup.style.color = '#1A1306';
      tabLogin.style.background = 'transparent'; tabLogin.style.color = '#6B7480';
    }
  };

  var cpPortalBtn = document.getElementById('clientPortalBtn');
  var cpOverlay = document.getElementById('clientPortalOverlay');
  var cpCloseBtn = document.getElementById('cpCloseBtn');

  if (cpPortalBtn) {
    cpPortalBtn.addEventListener('click', function() {
      cpOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      // If already logged in
      if (window.jsgCurrentUser) {
        jsgCpShowDashboard(window.jsgCurrentUser);
      }
    });
  }

  if (cpCloseBtn) {
    cpCloseBtn.addEventListener('click', function() {
      cpOverlay.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // Login
  var cpLoginBtn = document.getElementById('cpLoginBtn');
  if (cpLoginBtn) {
    cpLoginBtn.addEventListener('click', async function() {
      var email = document.getElementById('cpLoginEmail').value.trim();
      var pass = document.getElementById('cpLoginPassword').value;
      var errEl = document.getElementById('cpLoginErr');
      errEl.style.display = 'none';
      cpLoginBtn.textContent = 'Logging in...';
      cpLoginBtn.disabled = true;
      try {
        var cred = await window.jsgAuthFns.signInWithEmailAndPassword(window.jsgAuth, email, pass);
        window.jsgCpShowDashboard(cred.user);
      } catch(e) {
        errEl.textContent = e.code === 'auth/invalid-credential' ? 'Wrong email or password.' : e.message;
        errEl.style.display = 'block';
      }
      cpLoginBtn.textContent = 'Login →';
      cpLoginBtn.disabled = false;
    });
  }

  // Signup
  var cpSignupBtn = document.getElementById('cpSignupBtn');
  if (cpSignupBtn) {
    cpSignupBtn.addEventListener('click', async function() {
      var name = document.getElementById('cpSignupName').value.trim();
      var mobile = document.getElementById('cpSignupMobile').value.trim();
      var email = document.getElementById('cpSignupEmail').value.trim();
      var pass = document.getElementById('cpSignupPassword').value;
      var errEl = document.getElementById('cpSignupErr');
      errEl.style.display = 'none';
      if (!name || !email || !pass) { errEl.textContent = 'Sab fields required hain.'; errEl.style.display = 'block'; return; }
      cpSignupBtn.textContent = 'Creating account...';
      cpSignupBtn.disabled = true;
      try {
        var cred = await window.jsgAuthFns.createUserWithEmailAndPassword(window.jsgAuth, email, pass);
        // Save profile to Firestore
        var { doc, setDoc } = window.jsgFirestore;
        await setDoc(doc(window.jsgDb, 'clients', cred.user.uid), {
          name: name, mobile: mobile, email: email, createdAt: new Date().toISOString(), uid: cred.user.uid
        });
        jsgCpShowDashboard(cred.user, name);
      } catch(e) {
        errEl.textContent = e.code === 'auth/email-already-in-use' ? 'Email already registered. Please login.' : e.message;
        errEl.style.display = 'block';
      }
      cpSignupBtn.textContent = 'Create Account →';
      cpSignupBtn.disabled = false;
    });
  }

  // Logout
  var cpLogoutBtn = document.getElementById('cpLogoutBtn');
  if (cpLogoutBtn) {
    cpLogoutBtn.addEventListener('click', async function() {
      await window.jsgAuthFns.signOut(window.jsgAuth);
      document.getElementById('cpDashboard').style.display = 'none';
      document.getElementById('cpAuthBox').style.display = 'block';
      window.jsgCurrentUser = null;
    });
  }

  window.jsgCpShowDashboard = async function jsgCpShowDashboard(user, nameOverride) {
    document.getElementById('cpAuthBox').style.display = 'none';
    document.getElementById('cpDashboard').style.display = 'block';

    // Get name from Firestore
    var displayName = nameOverride || user.email;
    try {
      var { doc, getDoc, collection, getDocs, query, where } = window.jsgFirestore;
      var clientDoc = await getDoc(doc(window.jsgDb, 'clients', user.uid));
      if (clientDoc.exists()) displayName = clientDoc.data().name || displayName;

      document.getElementById('cpUserName').textContent = displayName;

      // Load projects for this client
      var projectsEl = document.getElementById('cpProjectsList');
      var noProj = document.getElementById('cpNoProjects');
      var q = query(collection(window.jsgDb, 'projects'), where('clientUid', '==', user.uid));
      var snap = await getDocs(q);

      if (snap.empty) {
        noProj.style.display = 'block';
        return;
      }
      noProj.style.display = 'none';

      var statusColors = { running: '#4A90D9', completed: '#5B8F5B', pending: '#C7972C', cancelled: '#E05050' };
      var statusLabels = { running: '🔵 In Progress', completed: '✅ Completed', pending: '⏳ Pending', cancelled: '❌ Cancelled' };

      var html = '';
      snap.forEach(function(d) {
        var p = d.data();
        var paid = Number(p.paid) || 0;
        var total = Number(p.amount) || 0;
        var pct = total > 0 ? Math.min(100, Math.round(paid / total * 100)) : 0;
        var progressPct = p.progress || 0;
        html += '<div style="background:#1B2026;border-radius:8px;padding:18px;border-left:3px solid ' + (statusColors[p.status] || '#3D454D') + ';">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">' +
            '<div><div style="color:#F4F1E8;font-weight:600;font-size:15px;">' + (p.project || 'Project') + '</div>' +
            '<div style="font-size:12px;color:#6B7480;margin-top:2px;">' + (p.startDate || '') + '</div></div>' +
            '<span style="font-size:11px;padding:3px 8px;background:' + (statusColors[p.status] || '#3D454D') + '22;color:' + (statusColors[p.status] || '#6B7480') + ';border-radius:3px;">' + (statusLabels[p.status] || p.status) + '</span>' +
          '</div>' +
          '<div style="margin-bottom:10px;">' +
            '<div style="display:flex;justify-content:space-between;font-size:12px;color:#6B7480;margin-bottom:4px;"><span>Work Progress</span><span>' + progressPct + '%</span></div>' +
            '<div style="background:#252C35;border-radius:3px;height:6px;"><div style="background:#C7972C;height:6px;border-radius:3px;width:' + progressPct + '%;"></div></div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;font-size:13px;">' +
            '<div><span style="color:#6B7480;">Total: </span><span style="color:#F4F1E8;font-weight:600;">₹' + total.toLocaleString('en-IN') + '</span></div>' +
            '<div><span style="color:#6B7480;">Paid: </span><span style="color:' + (pct >= 100 ? '#5B8F5B' : '#E05050') + ';font-weight:600;">₹' + paid.toLocaleString('en-IN') + ' (' + pct + '%)</span></div>' +
          '</div>' +
          (p.notes ? '<div style="margin-top:10px;font-size:12px;color:#6B7480;border-top:1px solid #252C35;padding-top:10px;">' + p.notes + '</div>' : '') +
        '</div>';
      });
      projectsEl.innerHTML = html;
    } catch(e) {
      document.getElementById('cpUserName').textContent = displayName;
      console.error('Firestore error:', e);
    }
  }

  // Auth state change — auto show dashboard if already logged in
  document.addEventListener('jsg-auth-change', function(e) {
    var cpOverlay = document.getElementById('clientPortalOverlay');
    if (e.detail.user && cpOverlay && cpOverlay.style.display === 'block') {
      window.jsgCpShowDashboard(e.detail.user);
    }
  });

})();
