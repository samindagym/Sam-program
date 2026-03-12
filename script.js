// Translation System
const translations = {
    en: {
        "nav_about": "About",
        "nav_programs": "Programs",
        "nav_journey": "Journey",
        "nav_community": "Community",
        "nav_join": "Join Now",
        "hero_eyebrow": "Online Fitness Coach & Transformation Mentor",
        "hero_title1": "Build Your Body.",
        "hero_title2": "Build Your Discipline.",
        "hero_desc": "Real talk, real effort, real results. Take control of your life.",
        "hero_btn_start": "Start Your Transformation",
        "hero_btn_join": "Join the Program",
        "about_badge_mentor": "Mentor",
        "about_badge_text": "Motivating & Disciplined",
        "about_title": "My Story. My Discipline.",
        "about_paragraph_1": "I know what it feels like to look in the mirror and not recognize potential.",
        "about_paragraph_2": "I was the skinny guy. No structure. No real understanding of nutrition. No clear system. Just effort without direction.",
        "about_paragraph_3": "And that’s the most frustrating place to be.",
        "about_paragraph_4": "In 2024, I decided to stop guessing. I studied nutrition seriously, learned how muscles actually grow, and trained with intention. In just 3 months, I gained 10kg — not by luck, but through discipline, strategy, and consistency.",
        "about_paragraph_5": "That transformation didn’t just change my body — it rewired my mindset. I stopped training like someone who hopes to grow. I trained like someone who knows exactly why he will.",
        "about_paragraph_6": "Most beginners fail not because of lack of effort, but because of lack of clarity. My coaching gives you certainty: certainty that if you follow the structure, your body will respond. Certainty that you’re not wasting time. Certainty that you’re building something real.",
        "about_paragraph_7": "I coach the version of me I used to be — the one who needed guidance and structure.",
        "about_paragraph_8": "If you’re ready to stop guessing and start progressing — I’m here to guide you.",
        "about_footer_text": "100% Real Effort. Real Structure. Real Transformation.",
        "about_stat_value": "100%",
        "about_stat_label": "Real Effort",
        "programs_eyebrow": "Coaching Plans",
        "programs_title1": "The Blueprint to ",
        "programs_title2": "Success.",
        "programs_desc": "Choose the program that fits your commitment level.",
        "program1_title": "4-Week Reset",
        "program1_price_val": "5,000",
        "program1_desc": "Daily messages, food check-ins, and a personalized program made for your body and your goal. You'll learn how far your body can go and how to take control.",
        "program1_f1": "Personalized training program",
        "program1_f2": "Daily accountability messages",
        "program1_f3": "Food & nutrition check-ins",
        "program1_f4": "Fast structure establishment",
        "program1_btn": "Join Now",
        "program2_tag": "Most Popular",
        "program2_title": "12-Week Transformation",
        "program2_price_val": "12,000",
        "program2_desc": "This is for people who are serious about changing. I check your meals, training, and progress consistently. You get full guidance and motivational talks to push your limits.",
        "program2_f1": "Full 12-week nutrition & training plan",
        "program2_f2": "Consistent, regular check-ins",
        "program2_f3": "Motivational talks & mindset building",
        "program2_f4": "Long-term habit discipline",
        "program2_btn": "Apply Now",
        "journey_eyebrow": "The Evolution",
        "journey_title1": "Transformation & ",
        "journey_title2": "Journey.",
        "journey_p1": "I started this journey fundamentally wanting to change my own reality. What began as building my physical body turned into building my mental fortitude. I learned that what happens in the gym translates to everything else in life.",
        "journey_p2": "Right now, I'm building out a broader vision. More than just 1-on-1 coaching, I am expanding my community to reach thousands through deep, educational, and motivational content.",
        "journey_p3_strong": "What's Next?",
        "journey_p3": " I'm working on bringing high-quality, long-form videos to YouTube. We'll be breaking down training science, lifestyle discipline, and exclusive behind-the-scenes coaching. Stay tuned, because this is just the beginning.",
        "community_eyebrow": "Join the Movement",
        "community_title1": "Stay Disciplined. ",
        "community_title2": "Stay Consistent.",
        "community_desc": "Join the community across all platforms. Get your daily dose of reality, motivation, and practical fitness advice.",
        "contact_title1": "Ready to ",
        "contact_title2": "Commit?",
        "contact_desc": "Your change starts with one decision. Fill out the application, be honest about your situation, and let's get to work.",
        "contact_location": "Algeria (Available Worldwide)",
        "contact_quote": "\"Discipline is choosing between what you want now, and what you want most.\"",
        "form_name": "Full Name",
        "form_name_ph": "E.g., Karim",
        "form_age": "Age",
        "form_age_ph": "E.g., 20",
        "form_phone": "Phone Number",
        "form_phone_ph": "E.g., 5... / 6... / 7...",
        "form_goal": "Your Goal / Struggles",
        "form_goal_ph": "Tell me what you struggle with and what you want to achieve...",
        "form_btn": "Start Your Transformation",
        "footer_loc": "Location: Algeria",
        "footer_copy": "Your change starts with one decision.",
        "footer_rights": "© 2026 Samy Ait Hamouda. All rights reserved."
    },
    fr: {
        "nav_about": "À propos",
        "nav_programs": "Programmes",
        "nav_journey": "Parcours",
        "nav_community": "Communauté",
        "nav_join": "Rejoindre",
        "hero_eyebrow": "Coach Fitness en Ligne & Mentor en Transformation",
        "hero_title1": "Construisez votre corps.",
        "hero_title2": "Construisez votre discipline.",
        "hero_desc": "Des paroles vraies, un effort réel, des résultats concrets. Prenez le contrôle de votre vie.",
        "hero_btn_start": "Commencez votre transformation",
        "hero_btn_join": "Rejoindre le programme",
        "about_badge_mentor": "Mentor",
        "about_badge_text": "Motivant & Discipliné",
        "about_title": "Mon histoire. Ma discipline.",
        "about_paragraph_1": "Je sais ce que ça fait de se regarder dans le miroir et de ne pas reconnaître son potentiel.",
        "about_paragraph_2": "J'étais le gars maigre. Sans structure. Aucune réelle compréhension de la nutrition. Aucun système clair. Juste des efforts sans direction.",
        "about_paragraph_3": "Et c'est l'endroit le plus frustrant où se trouver.",
        "about_paragraph_4": "En 2024, j'ai décidé d'arrêter de deviner. J'ai étudié sérieusement la nutrition, appris comment les muscles se développent réellement et je me suis entraîné avec intention. En seulement 3 mois, j'ai gagné 10 kg — pas par chance, mais grâce à la discipline, à la stratégie et à la constance.",
        "about_paragraph_5": "Cette transformation n'a pas seulement changé mon corps — elle a recâblé mon état d'esprit. J'ai arrêté de m'entraîner comme quelqu'un qui espère grandir. Je me suis entraîné comme quelqu'un qui sait exactement pourquoi il le fera.",
        "about_paragraph_6": "La plupart des débutants échouent non pas par manque d'effort, mais par manque de clarté. Mon coaching vous donne de la certitude : la certitude que si vous suivez la structure, votre corps répondra. La certitude que vous ne perdez pas votre temps. La certitude que vous construisez quelque chose de réel.",
        "about_paragraph_7": "Je coache la version de moi que j'étais autrefois — celui qui avait besoin de conseils et de structure.",
        "about_paragraph_8": "Si vous êtes prêt à arrêter de deviner et à commencer à progresser — je suis là pour vous guider.",
        "about_footer_text": "100 % d'effort réel. Structure réelle. Transformation réelle.",
        "about_stat_value": "100%",
        "about_stat_label": "Effort Réel",
        "programs_eyebrow": "Plans de Coaching",
        "programs_title1": "Le Plan Vers le ",
        "programs_title2": "Succès.",
        "programs_desc": "Choisissez le programme qui correspond à votre niveau d'engagement.",
        "program1_title": "Réinitialisation de 4 Semaines",
        "program1_price_val": "5 000",
        "program1_desc": "Messages quotidiens, suivi alimentaire et un programme personnalisé adapté à votre corps et à votre objectif. Vous apprendrez jusqu'où votre corps peut aller et comment prendre le contrôle.",
        "program1_f1": "Programme d'entraînement personnalisé",
        "program1_f2": "Messages de suivi quotidiens",
        "program1_f3": "Suivi alimentaire & nutritionnel",
        "program1_f4": "Établissement rapide d'une structure",
        "program1_btn": "Rejoindre Now",
        "program2_tag": "Plus Populaire",
        "program2_title": "Transformation de 12 Semaines",
        "program2_price_val": "12 000",
        "program2_desc": "C'est pour ceux qui sont sérieux au sujet du changement. Je vérifie vos repas, votre entraînement et vos progrès de manière cohérente. Vous bénéficiez d'un guidage complet et de discussions motivantes.",
        "program2_f1": "Plan complet de nutrition & d'entraînement de 12 semaines",
        "program2_f2": "Suivis réguliers et cohérents",
        "program2_f3": "Discussions motivantes & renforcement de l'état d'esprit",
        "program2_f4": "Discipline des habitudes à long terme",
        "program2_btn": "Postuler Now",
        "journey_eyebrow": "L'Évolution",
        "journey_title1": "Transformation & ",
        "journey_title2": "Parcours.",
        "journey_p1": "J'ai commencé ce voyage en voulant fondamentalement changer ma propre réalité. Ce qui a commencé par la construction de mon corps physique s'est transformé en construction de ma force mentale. J'ai appris que ce qui se passe à la salle se traduit dans tout le reste de la vie.",
        "journey_p2": "Actuellement, je développe une vision plus large. Plus qu'un simple coaching 1-on-1, j'élargis ma communauté pour toucher des milliers de personnes à travers un contenu profond, éducatif et motivant.",
        "journey_p3_strong": "Et ensuite ?",
        "journey_p3": " Je travaille sur la production de vidéos de haute qualité sur YouTube. Nous décortiquerons la science de l'entraînement, la discipline de vie et les coulisses du coaching. Restez à l'écoute, ce n'est que le début.",
        "community_eyebrow": "Rejoindre le Mouvement",
        "community_title1": "Restez Discipliné. ",
        "community_title2": "Restez Constant.",
        "community_desc": "Rejoignez la communauté sur toutes les plateformes. Recevez votre dose quotidienne de réalité, de motivation et de conseils fitness pratiques.",
        "contact_title1": "Prêt à vous ",
        "contact_title2": "Engager ?",
        "contact_desc": "Votre changement commence par une decision. Remplissez le formulaire, soyez honnête sur votre situation, et mettons-nous au travail.",
        "contact_location": "Algérie (Disponible dans le monde entier)",
        "contact_quote": "\"La discipline, c'est choisir entre ce que vous voulez maintenant et ce que vous voulez le plus.\"",
        "form_name": "Nom complet",
        "form_name_ph": "Ex: Karim",
        "form_age": "Âge",
        "form_age_ph": "Ex: 20",
        "form_phone": "Numéro de téléphone",
        "form_phone_ph": "Ex: 5... / 6... / 7...",
        "form_goal": "Votre objectif / Difficultés",
        "form_goal_ph": "Dites-moi ce qui vous pose problème et ce que vous voulez accomplir...",
        "form_btn": "Commencez votre transformation",
        "footer_loc": "Lieu : Algérie",
        "footer_copy": "Votre changement commence par une décision.",
        "footer_rights": "© 2026 Samy Ait Hamouda. Tous droits réservés."
    },
    ar: {
        "nav_about": "من أنا",
        "nav_programs": "البرامج",
        "nav_journey": "رحلتي",
        "nav_community": "المجتمع",
        "nav_join": "انضم الآن",
        "hero_eyebrow": "مدرب لياقة أونلاين وموجه للتحول الجسدي",
        "hero_title1": "ابنِ جسدك.",
        "hero_title2": "ابنِ انضباطك.",
        "hero_desc": "كلام واقعي، جهد حقيقي، نتائج ملموسة. تحكم في حياتك الآن.",
        "hero_btn_start": "ابدأ تحولك الآن",
        "hero_btn_join": "انضم إلى البرنامج",
        "about_badge_mentor": "موجه",
        "about_badge_text": "تحفيزي ومنضبط",
        "about_title": "قصتي. انضباطي.",
        "about_paragraph_1": "أعرف شعور أن تنظر في المرآة ولا تتعرف على إمكانياتك.",
        "about_paragraph_2": "كنت ذلك الشخص النحيف. بلا نظام. بلا فهم حقيقي للتغذية. بلا خطة واضحة. مجرد جهد عشوائي بدون اتجاه.",
        "about_paragraph_3": "وهذا هو المكان الأكثر إحباطاً الذي قد تكون فيه.",
        "about_paragraph_4": "في عام 2024، قررت التوقف عن التخمين. درست التغذية بجدية، وتعلمت كيف تنمو العضلات فعلياً، وتدربت بهدف واضح. في غضون 3 أشهر فقط، اكتسبت 10 كجم — ليس بالحظ، بل من خلال الانضباط والاستراتيجية والاستمرارية.",
        "about_paragraph_5": "هذا التحول لم يغير جسدي فحسب — بل أعاد صياغة عقليتي. توقفت عن التدريب كشخص يأمل في النمو، وبدأت أتدرب كشخص يعرف تماماً لماذا سينمو.",
        "about_paragraph_6": "يفشل معظم المبتدئين ليس بسبب نقص الجهد، بل بسبب نقص الوضوح. تدريبي يمنحك اليقين: اليقين بأنه إذا اتبعت النظام، فسيستجيب جسدك. اليقين بأنك لا تضيع وقتك. اليقين بأنك تبني شيئاً حقيقياً.",
        "about_paragraph_7": "أقوم بتدريب النسخة التي كنت عليها سابقاً — الشخص الذي كان بحاجة إلى التوجيه والنظام.",
        "about_paragraph_8": "إذا كنت مستعداً للتوقف عن التخمين والبدء في التقدم — فأنا هنا لإرشادك.",
        "about_footer_text": "100% جهد حقيقي. نظام حقيقي. تحول حقيقي.",
        "about_stat_value": "100%",
        "about_stat_label": "جهد حقيقي",
        "programs_eyebrow": "خطط التدريب",
        "programs_title1": "مخطط ",
        "programs_title2": "النجاح.",
        "programs_desc": "اختر البرنامج الذي يناسب مستوى التزامك.",
        "program1_title": "إعادة ضبط (4 أسابيع)",
        "program1_price_val": "5,000",
        "program1_desc": "رسائل يومية، متابعة الوجبات، وبرنامج مخصص لجسمك وهدفك. ستتعلم إلى أي مدى يمكن لجسمك أن يصل وكيف تتحكم فيه.",
        "program1_f1": "برنامج تدريبي مخصص",
        "program1_f2": "رسائل محاسبة يومية",
        "program1_f3": "متابعة الغذاء والتغذية",
        "program1_f4": "تأسيس نظام سريع",
        "program1_btn": "انضم الآن",
        "program2_tag": "الأكثر طلباً",
        "program2_title": "تحول 12 أسبوعاً",
        "program2_price_val": "12,000",
        "program2_desc": "هذا للجادين في التغيير. أتابع وجباتك وتدريباتك وتقدمك باستمرار. تحصل على إرشادات كاملة وجلسات تحفيزية لتجاوز حدودك.",
        "program2_f1": "خطة تغذية وتدريب كاملة لمدة 12 أسبوعاً",
        "program2_f2": "متابعات دورية ومنتظمة",
        "program2_f3": "جلسات تحفيزية وبناء العقلية",
        "program2_f4": "انضباط العادات طويلة الأمد",
        "program2_btn": "قدم الآن",
        "journey_eyebrow": "التطور",
        "journey_title1": "التحول و",
        "journey_title2": "الرحلة.",
        "journey_p1": "بدأت هذه الرحلة برغبة جوهرية في تغيير واقعي. ما بدأ كبناء لجسمي المادي تحول إلى بناء لقوتي الذهنية. تعلمت أن ما يحدث في النادي ينعكس على كل شيء آخر في الحياة.",
        "journey_p2": "حالياً، أعمل على بناء رؤية أوسع. أكثر من مجرد تدريب شخصي، أقوم بتوسيع مجتمعي للوصول إلى الآلاف من خلال محتوى عميق، تعليمي وتحفيزي.",
        "journey_p3_strong": "ماذا بعد؟",
        "journey_p3": " أعمل على تقديم فيديوهات عالية الجودة على يوتيوب. سنقوم بتفكيك علم التدريب، انضباط نمط الحياة، وكواليس التدريب الحصرية. ابقوا مترقبين، فهذه مجرد البداية.",
        "community_eyebrow": "انضم إلى الحركة",
        "community_title1": "كن منضبطاً. ",
        "community_title2": "كن مستمراً.",
        "community_desc": "انضم إلى المجتمع عبر جميع المنصات. احصل على جرعتك اليومية من الواقع، التحفيز، والنصائح العملية للياقة البدنية.",
        "contact_title1": "هل أنت مستعد ",
        "contact_title2": "للإلتزام؟",
        "contact_desc": "تغييرك يبدأ بقرار واحد. املأ الطلب، كن صادقاً بشأن وضعك، ولنبدأ العمل.",
        "contact_location": "الجزائر (متاح عالمياً)",
        "contact_quote": "\"الانضباط هو الاختيار بين ما تريده الآن، وما تريده أكثر من أي شيء آخر.\"",
        "form_name": "الاسم الكامل",
        "form_name_ph": "مثال: كريم",
        "form_age": "العمر",
        "form_age_ph": "مثال: 20",
        "form_phone": "رقم الهاتف",
        "form_phone_ph": "مثال: 5... / 6... / 7...",
        "form_goal": "هدفك / العوائق التي تواجهك",
        "form_goal_ph": "أخبرني عما تعاني منه وما تريد تحقيقه...",
        "form_btn": "ابدأ تحولك الآن",
        "footer_loc": "الموقع: الجزائر",
        "footer_copy": "تغييرك يبدأ بقرار واحد.",
        "footer_rights": "© 2026 سامي آيت حمودة. جميع الحقوق محفوظة."
    }
};

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    const elements = document.querySelectorAll("[data-translate]");
    const placeholders = document.querySelectorAll("[data-translate-ph]");

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    placeholders.forEach(el => {
        const key = el.getAttribute("data-translate-ph");
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-lang]").forEach(btn => {
        btn.classList.remove("active");
    });
    // Update both desktop and mobile buttons
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(btn => btn.classList.add("active"));

    if (window.lucide) lucide.createIcons();
}

function setLanguage(lang) {
    document.body.classList.add("language-transition");

    setTimeout(() => {
        applyTranslations(lang);
        document.body.classList.remove("language-transition");
    }, 200);
}

// Animations Trigger
function initAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-up, .fade-in").forEach(el => {
        observer.observe(el);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".close-menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => mobileNav.classList.add("open"));
    }

    if (closeBtn && mobileNav) {
        closeBtn.addEventListener("click", () => mobileNav.classList.remove("open"));
    }

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => mobileNav.classList.remove("open"));
    });
}

// Navbar Scroll Behavior
function initNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    const threshold = 50; // Minimum scroll before hiding

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        
        // Add shadow/background on scroll
        if (currentScrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Hide/Show logic
        if (Math.abs(currentScrollY - lastScrollY) < 5) return; // Small movement filter

        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
            // Scrolling down
            navbar.classList.add("navbar--hidden");
        } else {
            // Scrolling up
            navbar.classList.remove("navbar--hidden");
        }

        lastScrollY = currentScrollY;
    });
}

// Load Content on Page Start
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Animations
    initAnimations();

    // 2. Initialize Mobile Menu
    initMobileMenu();

    // 3. Initialize Navbar Scroll Behavior
    initNavbarScroll();

    // 4. Initialize Language
    const savedLang = localStorage.getItem("language") || "en";
    applyTranslations(savedLang);

    // 4. Handle Language Clicks
    document.querySelectorAll("[data-lang]").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // 5. Phone Input Validation
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener("input", (e) => {
            // Remove non-digits
            let val = e.target.value.replace(/\D/g, "");
            // Limit to 9 digits
            if (val.length > 9) {
                val = val.substring(0, 9);
            }
            e.target.value = val;
        });
    }
});
