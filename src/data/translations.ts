export type Language = "en" | "hi";

export interface Translations {
  mottoTop: string;
  mottoSecondary: string;
  proprietor: string;
  nav: {
    home: string;
    services: string;
    checker: string;
    realEstate: string;
    contact: string;
    callNow: string;
    whatsappUs: string;
    themeLab: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    quickCheckCta: string;
    trustPills: {
      quick: { title: string; desc: string };
      transparent: { title: string; desc: string };
      expert: { title: string; desc: string };
    };
    stats: {
      stat1: { num: string; label: string };
      stat2: { num: string; label: string };
      stat3: { num: string; label: string };
      stat4: { num: string; label: string };
    };
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    guideCta: string;
    categories: {
      identity: {
        title: string;
        desc: string;
        items: string[];
      };
      business: {
        title: string;
        desc: string;
        items: string[];
      };
      legal: {
        title: string;
        desc: string;
        items: string[];
      };
      property: {
        title: string;
        desc: string;
        items: string[];
      };
    };
  };
  docChecker: {
    badge: string;
    title: string;
    subtitle: string;
    selectPrompt: string;
    requiredDocsTitle: string;
    turnaroundTitle: string;
    consultNow: string;
    shareWhatsapp: string;
  };
  realEstate: {
    badge: string;
    headline: string;
    categories: {
      shops: string;
      flats: string;
      lands: string;
    };
    description: string;
    ctaWhatsapp: string;
    ctaCall: string;
    features: string[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      serviceDefault: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    success: {
      title: string;
      message: string;
      action: string;
    };
    info: {
      phoneTitle: string;
      emailTitle: string;
      addressTitle: string;
      address: string;
      hoursTitle: string;
      hours: string;
      sunday: string;
    };
  };
  footer: {
    about: string;
    quickLinks: string;
    contactInfo: string;
    rights: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    mottoTop: "|| एकमेकां सहाय्य करू | अवघे धरू सुपंथ ||",
    mottoSecondary: "सर्व काही एकाच ठिकाणी ! कमी वेळात, कमी खर्चात...",
    proprietor: "Proprietor: Jayanand",
    nav: {
      home: "Home",
      services: "Services",
      checker: "Doc Checklist",
      realEstate: "Real Estate",
      contact: "Contact",
      callNow: "Call Now",
      whatsappUs: "WhatsApp",
      themeLab: "Theme Lab",
    },
    hero: {
      badge: "Trusted by 10,000+ Kharghar & Navi Mumbai Families",
      headlinePart1: "Your Trusted Gateway for",
      headlineHighlight: "Government & Legal",
      headlinePart2: "Documentation in Kharghar.",
      subheadline:
        "Fast, transparent, and hassle-free Citizen Certificates, Business Licenses & Real Estate Consulting.",
      primaryCta: "Browse Services",
      secondaryCta: "WhatsApp Us",
      quickCheckCta: "Document Checklist Tool",
      trustPills: {
        quick: { title: "Fast Turnaround", desc: "No endless queues or bureaucratic delays" },
        transparent: { title: "100% Transparent", desc: "Clear government fees & direct liaison" },
        expert: { title: "CIDCO & Legal Experts", desc: "Specialized in Kharghar & Navi Mumbai" },
      },
      stats: {
        stat1: { num: "10,000+", label: "Documents Delivered" },
        stat2: { num: "15+ Yrs", label: "Kharghar Experience" },
        stat3: { num: "100%", label: "Legal Compliance" },
        stat4: { num: "4.9 ★", label: "Client Satisfaction" },
      },
    },
    services: {
      badge: "One-Stop Government Counter",
      title: "Everything You Need, Under One Roof",
      subtitle:
        "सर्व काही एकाच ठिकाणी ! कमी वेळात, कमी खर्चात... — From citizen identity proofs to commercial licensing and CIDCO clearance.",
      guideCta: "Get Expert Help On WhatsApp",
      categories: {
        identity: {
          title: "Identity & Citizen Docs",
          desc: "Personal identification, domicile & citizenship certificates",
          items: [
            "Passport",
            "Domicile (In-State)",
            "Domicile (Other State)",
            "Income Certificate",
            "Rahivashi Dakhala",
            "Ration Card (Kesari)",
            "Ration Card (White)",
            "PAN Card",
            "Name Change (Gazette)",
            "EWS Certificate",
            "Senior Citizen Card",
            "Non-Creamy Layer Certificate",
          ],
        },
        business: {
          title: "Business & Tax",
          desc: "MSME certifications, trade licenses and statutory filings",
          items: [
            "Udyam Aadhar Registration",
            "Gumasta Licence (<10 Workers)",
            "Gumasta Licence (>10 Workers)",
            "Food Licence (Turnover below 12 Lacs)",
            "Food Licence (Turnover above 12 Lacs)",
            "GST Registration",
            "Income Tax Return",
          ],
        },
        legal: {
          title: "Legal & Trusts",
          desc: "Public trusts, society setup, legal notarization and affidavits",
          items: [
            "Trust Registration",
            "Mandal Registration",
            "Sanstha Registration",
            "12A Registration",
            "80G Registration",
            "FCRA Registration",
            "All Types of Affidavits",
          ],
        },
        property: {
          title: "Property & CIDCO",
          desc: "Navi Mumbai property liaison, transfer clearance and NOCs",
          items: [
            "CIDCO Transfer NOC",
            "CIDCO Mortgage NOC",
            "Flat Registration",
            "Plot Registration",
            "RERA Registration",
            "Online Rent Agreement (Police NOC)",
            "Electricity Bill Name Change",
          ],
        },
      },
    },
    docChecker: {
      badge: "Interactive Customer Utility",
      title: "Instant Document Requirements Finder",
      subtitle:
        "Select your required service below to see exactly which proofs and papers you need to bring to our office.",
      selectPrompt: "Choose a service to inspect requirements:",
      requiredDocsTitle: "Documents Required to Bring:",
      turnaroundTitle: "Estimated Processing Time:",
      consultNow: "Consult Jayanand on WhatsApp",
      shareWhatsapp: "Share Checklist to WhatsApp",
    },
    realEstate: {
      badge: "Seva Real Estate Consultant",
      headline: "BUY | SALE | RENT",
      categories: {
        shops: "Commercial Shops & Offices",
        flats: "Residential 1/2/3 BHK Flats",
        lands: "Plots & CIDCO Clear Lands",
      },
      description:
        "Looking for dependable real estate consultation in Navi Mumbai? From prime Kharghar sector flats to high-ROI commercial retail shops and CIDCO clear plots, we ensure verified documentation and seamless legal transfers.",
      ctaWhatsapp: "Enquire for Property on WhatsApp",
      ctaCall: "Call +91 9323467370",
      features: [
        "100% Clear Title Verification",
        "Direct Owner & Developer Liaison",
        "CIDCO Transfer & NOC Assistance",
        "Home Loan & Stamp Duty Support",
      ],
    },
    contact: {
      badge: "Prompt Response Desk",
      title: "Get In Touch With Us Today",
      subtitle:
        "Skip the government counter confusion. Drop us a message or visit our Kharghar office directly.",
      formTitle: "Send a Direct Inquiry",
      formSubtitle: "We will verify your requirements and call you back within 15 minutes.",
      fields: {
        name: "Full Name",
        namePlaceholder: "e.g., Rajesh Sharma",
        phone: "Mobile Number",
        phonePlaceholder: "10-digit mobile number",
        service: "Service Required",
        serviceDefault: "Select a service...",
        message: "Your Requirement / Message",
        messagePlaceholder: "Tell us about your requirement or urgent deadlines...",
        submit: "Submit Inquiry & Connect",
        submitting: "Preparing Verification...",
      },
      success: {
        title: "Inquiry Successfully Logged!",
        message:
          "Thank you! Your inquiry has been forwarded directly to Jayanand. Opening WhatsApp now with your pre-filled inquiry for instant acknowledgement...",
        action: "Send Another Inquiry",
      },
      info: {
        phoneTitle: "Direct Phone",
        emailTitle: "Official Email",
        addressTitle: "Office Address",
        address:
          "Shop No. 03, 1st Floor, Plot No. 114, Tulip Plaza CHS, Sector-13, Kharghar, Navi Mumbai - 410210",
        hoursTitle: "Working Hours",
        hours: "Monday – Saturday: 10:00 AM – 8:00 PM",
        sunday: "Sunday: By Prior Appointment",
      },
    },
    footer: {
      about:
        "Seva Administrative Services & Seva Real Estate Consultant is Kharghar's premier liaison for government documentation, corporate registration, CIDCO NOCs, and property transactions. Managed personally by Proprietor Jayanand.",
      quickLinks: "Navigation",
      contactInfo: "Get in Touch",
      rights: "All rights reserved. Seva Administrative Services & Seva Real Estate Consultant.",
      backToTop: "Back to Top",
    },
  },
  hi: {
    mottoTop: "|| एकमेकां सहाय्य करू | अवघे धरू सुपंथ ||",
    mottoSecondary: "सर्व काही एकाच ठिकाणी ! कमी वेळात, कमी खर्चात...",
    proprietor: "संचालक: जयानंद",
    nav: {
      home: "मुख्य पृष्ठ",
      services: "सेवाएं",
      checker: "दस्तावेज़ सूची",
      realEstate: "रियल एस्टेट",
      contact: "संपर्क करें",
      callNow: "कॉल करें",
      whatsappUs: "व्हाट्सएप",
      themeLab: "थीम लैब",
    },
    hero: {
      badge: "खारघर एवं नवी मुंबई के 10,000+ परिवारों का भरोसेमंद साथी",
      headlinePart1: "खारघर में सरकारी और कानूनी",
      headlineHighlight: "दस्तावेज़ों एवं प्रमाण पत्रों",
      headlinePart2: "का सबसे विश्वसनीय केंद्र।",
      subheadline:
        "नागरिक प्रमाण पत्र, बिज़नेस लाइसेंस और रियल एस्टेट कंसल्टिंग — तेज़, पारदर्शी और बिना किसी परेशानी के।",
      primaryCta: "हमारी सेवाएं देखें",
      secondaryCta: "व्हाट्सएप पर बात करें",
      quickCheckCta: "दस्तावेज़ चेकलिस्ट टूल",
      trustPills: {
        quick: { title: "त्वरित सेवा", desc: "सरकारी दफ्तरों के अंतहीन चक्करों से मुक्ति" },
        transparent: { title: "100% पारदर्शी", desc: "उचित सरकारी शुल्क एवं स्पष्ट प्रक्रिया" },
        expert: { title: "सिडको एवं कानूनी विशेषज्ञ", desc: "खारघर एवं नवी मुंबई में वर्षों का अनुभव" },
      },
      stats: {
        stat1: { num: "10,000+", label: "सफल दस्तावेज़ प्रोसेस" },
        stat2: { num: "15+ वर्ष", label: "खारघर में अटूट विश्वास" },
        stat3: { num: "100%", label: "कानूनी प्रामाणिकता" },
        stat4: { num: "4.9 ★", label: "ग्राहक संतुष्टि रेटिंग" },
      },
    },
    services: {
      badge: "एक ही छत के नीचे संपूर्ण समाधान",
      title: "आपकी सभी ज़रूरतें, एक ही स्थान पर",
      subtitle:
        "सर्व काही एकाच ठिकाणी ! कमी वेळात, कमी खर्चात... — नागरिक प्रमाण पत्रों से लेकर व्यापार लाइसेंस और सिडको हस्तांतरण तक।",
      guideCta: "व्हाट्सएप पर विशेषज्ञ सहायता लें",
      categories: {
        identity: {
          title: "पहचान एवं नागरिक दस्तावेज़",
          desc: "व्यक्तिगत पहचान, अधिवास (Domicile) एवं नागरिकता प्रमाण पत्र",
          items: [
            "पासपोर्ट (Passport)",
            "अधिवास प्रमाण पत्र (महाराष्ट्र)",
            "अधिवास प्रमाण पत्र (अन्य राज्य)",
            "आय प्रमाण पत्र (Income Certificate)",
            "रहिवासी दाखला (Residence Proof)",
            "राशन कार्ड (केसरी)",
            "राशन कार्ड (सफेद)",
            "पैन कार्ड (PAN Card)",
            "नाम परिवर्तन (Gazette Notification)",
            "EWS प्रमाण पत्र",
            "वरिष्ठ नागरिक कार्ड (Senior Citizen)",
            "नॉन-क्रीमी लेयर प्रमाण पत्र",
          ],
        },
        business: {
          title: "व्यापार एवं कर (Business & Tax)",
          desc: "उद्यम आधार, व्यापार लाइसेंस एवं टैक्स रिटर्न फाइलिंग",
          items: [
            "उद्यम आधार रजिस्ट्रेशन",
            "गुमास्ता लाइसेंस (10 से कम कर्मचारी)",
            "गुमास्ता लाइसेंस (10 से अधिक कर्मचारी)",
            "फूड लाइसेंस (FSSAI - 12 लाख से कम)",
            "फूड लाइसेंस (FSSAI - 12 लाख से अधिक)",
            "जीएसटी रजिस्ट्रेशन (GST)",
            "इनकम टैक्स रिटर्न (ITR)",
          ],
        },
        legal: {
          title: "कानूनी एवं ट्रस्ट सेवाएं",
          desc: "ट्रस्ट/मंडल पंजीकरण, टैक्स छूट एवं सभी प्रकार के शपथ पत्र",
          items: [
            "ट्रस्ट रजिस्ट्रेशन",
            "मंडल रजिस्ट्रेशन",
            "संस्था रजिस्ट्रेशन",
            "12A रजिस्ट्रेशन",
            "80G टैक्स छूट रजिस्ट्रेशन",
            "FCRA रजिस्ट्रेशन",
            "सभी प्रकार के शपथ पत्र (Affidavits)",
          ],
        },
        property: {
          title: "प्रॉपर्टी एवं सिडको (CIDCO)",
          desc: "नवी मुंबई संपत्ति पंजीकरण, सिडको ट्रांसफर एवं अनापत्ति प्रमाण पत्र",
          items: [
            "सिडको ट्रांसफर NOC",
            "सिडको मॉर्गेज NOC",
            "फ्लैट रजिस्ट्रेशन",
            "प्लॉट रजिस्ट्रेशन",
            "रेरा (RERA) रजिस्ट्रेशन",
            "ऑनलाइन रेंट एग्रीमेंट (पुलिस NOC)",
            "बिजली बिल नाम परिवर्तन",
          ],
        },
      },
    },
    docChecker: {
      badge: "इंटरएक्टिव दस्तावेज़ गाइड",
      title: "दस्तावेज़ आवश्यकता कैलकुलेटर",
      subtitle:
        "अपनी आवश्यक सेवा चुनें और तुरंत जानें कि ऑफिस आने से पहले आपको कौन-से कागज़ात तैयार रखने होंगे।",
      selectPrompt: "सेवा चुनें और आवश्यक कागज़ात देखें:",
      requiredDocsTitle: "साथ लाने हेतु आवश्यक दस्तावेज़:",
      turnaroundTitle: "अनुमानित कार्य दिवस:",
      consultNow: "व्हाट्सएप पर जयानंद जी से बात करें",
      shareWhatsapp: "यह चेकलिस्ट व्हाट्सएप पर शेयर करें",
    },
    realEstate: {
      badge: "सेवा रियल एस्टेट कंसल्टेंट",
      headline: "खरीदें (BUY) | बेचें (SALE) | किराए पर लें (RENT)",
      categories: {
        shops: "दुकानें एवं ऑफिस स्पेस (Shops)",
        flats: "1/2/3 BHK रेजिडेंशियल फ्लैट्स (Flats)",
        lands: "प्लॉट्स एवं सिडको क्लियर जमीन (Lands)",
      },
      description:
        "नवी मुंबई और खारघर में प्रामाणिक रियल एस्टेट परामर्श। चाहे आप अपना पहला घर खरीदना चाहते हों, कोई कमर्शियल दुकान या निवेश हेतु सिडको अनुमोदित प्लॉट — हम संपूर्ण कानूनी जांच और निष्पक्ष सौदे की गारंटी देते हैं।",
      ctaWhatsapp: "प्रॉपर्टी हेतु व्हाट्सएप पर संपर्क करें",
      ctaCall: "कॉल करें: +91 9323467370",
      features: [
        "100% स्पष्ट कानूनी टाइटल सत्यापन",
        "मालिक एवं डेवलपर से सीधा संवाद",
        "सिडको ट्रांसफर एवं NOC में पूर्ण सहयोग",
        "होम लोन एवं स्टाम्प ड्यूटी सहायता",
      ],
    },
    contact: {
      badge: "त्वरित सहायता डेस्क",
      title: "आज ही हमसे संपर्क करें",
      subtitle:
        "सरकारी प्रक्रियाओं की उलझन छोड़ें। सीधे संदेश भेजें या खारघर स्थित हमारे कार्यालय आएं।",
      formTitle: "सीधी पूछताछ भेजें",
      formSubtitle: "हम आपकी आवश्यकताओं की जांच कर 15 मिनट में आपसे संपर्क करेंगे।",
      fields: {
        name: "पूरा नाम",
        namePlaceholder: "उदा. राजेश शर्मा",
        phone: "मोबाइल नंबर",
        phonePlaceholder: "10 अंकों का मोबाइल नंबर",
        service: "आवश्यक सेवा",
        serviceDefault: "सेवा का चयन करें...",
        message: "आपकी आवश्यकता / संदेश",
        messagePlaceholder: "अपनी आवश्यकता या जरूरी समय-सीमा के बारे में बताएं...",
        submit: "पूछताछ भेजें एवं जुड़ें",
        submitting: "जांच जारी है...",
      },
      success: {
        title: "पूछताछ सफलतापूर्वक दर्ज!",
        message:
          "धन्यवाद! आपकी पूछताछ सीधे जयानंद जी के पास भेज दी गई है। तत्काल पुष्टि हेतु व्हाट्सएप खोला जा रहा है...",
        action: "दूसरी पूछताछ भेजें",
      },
      info: {
        phoneTitle: "सीधा फोन नंबर",
        emailTitle: "आधिकारिक ईमेल",
        addressTitle: "कार्यालय का पता",
        address:
          "शॉप नं. 03, प्रथम तल, प्लॉट नं. 114, ट्यूलिप प्लाजा CHS, सेक्टर-13, खारघर, नवी मुंबई - 410210",
        hoursTitle: "कार्य समय",
        hours: "सोमवार – शनिवार: सुबह 10:00 से रात 8:00 तक",
        sunday: "रविवार: पूर्व नियुक्ति द्वारा",
      },
    },
    footer: {
      about:
        "सेवा एडमिनिस्ट्रेटिव सर्विसेज एवं सेवा रियल एस्टेट कंसल्टेंट खारघर में सरकारी दस्तावेज़, कॉर्पोरेट पंजीकरण, सिडको अनापत्ति प्रमाण पत्र और संपत्ति परामर्श के लिए सबसे भरोसेमंद नाम है। संचालक: जयानंद।",
      quickLinks: "नेविगेशन",
      contactInfo: "संपर्क सूत्र",
      rights: "सर्वाधिकार सुरक्षित। सेवा एडमिनिस्ट्रेटिव सर्विसेज एवं सेवा रियल एस्टेट कंसल्टेंट।",
      backToTop: "शीर्ष पर जाएं",
    },
  },
};
