const modeSwitch = document.getElementById('mode-switch');
const langSwitch = document.getElementById('lang-switch');
const root = document.documentElement;

const translations = {
    en: {
        name: 'Saleh Alangari',
        'hero-subtitle': 'Computer Science Student · Web Developer · Cloud Security Learner',
        'hero-text': 'A creative beginner with a strong desire to learn front-end development, cybersecurity, and cloud risk awareness.',
        'about-title': 'About Me',
        'about-text': 'I build clean web pages, explore security topics, and practice new coding patterns every day. I am eager to grow my skills in real projects.',
        'skills-title': 'Skills',
        'skill-1': 'HTML & CSS',
        'skill-2': 'JavaScript',
        'skill-3': 'Python Basics',
        'skill-4': 'Cloud Security Foundations',
        'certificates-title': 'Certificates',
        'cert-1': 'Cloud Security',
        'cert-2': 'Vulnerability Management',
        'cert-3': 'Artificial Intelligence Fundamentals with Capstone Project',
        'cert-4': 'Artificial Intelligence Fundamentals',
        'cert-5': 'AI-Enabled Applications for Customer Service',
        'contact-title': 'Contact',
        'contact-linkedin': 'LinkedIn: ',
        'contact-email': 'Email: ',
        'lang-btn': 'العربية'
    },
    ar: {
        name: 'صالح العنقري',
        'hero-subtitle': 'طالب علوم الحاسب · مطور ويب · متعلم أمان السحابة',
        'hero-text': 'مبتدئ مبدع يرغب في تعلم تطوير الواجهة الأمامية، الأمن السيبراني، والمخاطر السحابية.',
        'about-title': 'نبذة عني',
        'about-text': 'أبني صفحات ويب نظيفة، أستكشف مواضيع الأمان، وأمارس أنماط ترميز جديدة يوميًا. أتطلع لتطوير مهاراتي في مشاريع حقيقية.',
        'skills-title': 'المهارات',
        'skill-1': 'HTML و CSS',
        'skill-2': 'JavaScript',
        'skill-3': 'أساسيات بايثون',
        'skill-4': 'أساسيات أمان السحابة',
        'certificates-title': 'الشهادات',
        'cert-1': 'أمن السحابة',
        'cert-2': 'إدارة الثغرات',
        'cert-3': 'أساسيات الذكاء الاصطناعي مع مشروع التخرج',
        'cert-4': 'أساسيات الذكاء الاصطناعي',
        'cert-5': 'التطبيقات الممكنة بالذكاء الاصطناعي لخدمة العملاء',
        'contact-title': 'التواصل',
        'contact-linkedin': 'لينكد إن: ',
        'contact-email': 'البريد الإلكتروني: ',
        'lang-btn': 'English'
    }
};

let currentLang = 'en';

const updateLanguage = () => {
    const data = translations[currentLang];
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (key === 'contact-linkedin' || key === 'contact-email') {
            const anchor = elem.querySelector('a');
            if (anchor) {
                const label = data[key];
                elem.firstChild.nodeValue = label;
            }
        } else {
            elem.innerText = data[key] || elem.innerText;
        }
    });
    langSwitch.textContent = data['lang-btn'];
};

modeSwitch.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    modeSwitch.textContent = next === 'light' ? 'Dark Mode' : 'Light Mode';
});

langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

root.setAttribute('data-theme', 'dark');
updateLanguage();
