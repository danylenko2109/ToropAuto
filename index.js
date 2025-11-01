// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '7945231022:AAGrXt1RlU0X2gmRCUEk3pOJTNrE7p0oaYE';
const TELEGRAM_CHAT_ID = '913725325';

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Translations
const translations = {
    ru: {
        // Navigation
        "home": "Главная", "services": "Услуги", "about": "О нас", "cars": "Автомобили", 
        "testimonials": "Отзывы", "contact": "Контакты", "faq": "Вопросы", "current-lang": "Русский",
        
        // Hero
        "hero-title": "Профессиональный <span>автосервис</span> и продажа автомобилей",
        "hero-text": "Torop Auto предлагает полный спектр услуг по обслуживанию, ремонту и продаже автомобилей. Мы гарантируем качество, надежность и индивидуальный подход к каждому клиенту.",
        "services-btn": "Наши услуги", "cars-btn": "Автомобили в наличии", "contact-btn": "Бесплатная консультация",
        "hero-feature1": "Гарантия качества", "hero-feature2": "Быстрое обслуживание", "hero-feature3": "Доступные цены",
        "hero-badge-text": "Лучший автосервис 2024",
        
        // Stats
        "stat1": "Автомобилей продано", "stat2": "Довольных клиентов", "stat3": "Выполненных ремонтов", "stat4": "Лет опыта",
        
        // Services
        "services-title": "Наши услуги",
        "services-subtitle": "Мы предлагаем широкий спектр услуг для вашего автомобиля, используя современное оборудование и передовые технологии",
        "service1-title": "Техническое обслуживание", "service1-text": "Регулярное техническое обслуживание для поддержания вашего автомобиля в идеальном состоянии.",
        "service2-title": "Ремонт двигателя", "service2-text": "Диагностика и ремонт двигателей любой сложности с использованием современного оборудования.",
        "service3-title": "Кузовной ремонт", "service3-text": "Качественный кузовной ремонт и покраска с гарантией долговечности.",
        "service4-title": "Электрика и электроника", "service4-text": "Диагностика и ремонт электрических систем, бортовых компьютеров.",
        "service5-title": "Ремонт трансмиссии", "service5-text": "Профессиональный ремонт автоматических и механических коробок передач.",
        "service6-title": "Диагностика и ТО", "service6-text": "Комплексная компьютерная диагностика всех систем автомобиля.",
        "service-link": "Подробнее",
        
        // About
        "about-title": "О компании Torop Auto", "experience-text": "лет успешной работы",
        "about-text1": "Torop Auto — компания по продаже автомобилей в Германии...",
        "about-text2": "За это время мы успешно помогли сотням клиентов...",
        "feature1": "Гарантия качества на все услуги", "feature2": "Современное диагностическое оборудование",
        "feature3": "Опытные и сертифицированные специалисты", "feature4": "Доступные цены и гибкая система скидок",
        "feature5": "Широкий выбор оригинальных запчастей", "feature6": "Удобное расположение и парковка",
        
        // Process
        "process-title": "Как мы работаем", "process-subtitle": "Прозрачный процесс работы от заявки до результата",
        "process-step1-title": "Консультация", "process-step1-text": "Вы оставляете заявку, мы связываемся с вами и уточняем детали",
        "process-step2-title": "Диагностика", "process-step2-text": "Проводим полную диагностику и составляем смету",
        "process-step3-title": "Ремонт", "process-step3-text": "Выполняем работы с использованием качественных запчастей",
        "process-step4-title": "Результат", "process-step4-text": "Вы получаете готовый результат с гарантией качества",
        
        // Cars
        "cars-title": "Автомобили в наличии",
        "cars-subtitle": "Мы предлагаем широкий выбор качественных автомобилей с гарантией и полной проверкой",
        "car-badge1": "Новинка", "car-badge2": "Хит продаж", "car-badge3": "Скидка 10%",
        "car1-text": "Hyundai i30 Facelift с надежным 1.6-литровым дизельным двигателем...",
        "car2-text": "BMW 330i Limousine (G20) 2019 года выпуска с мощным 2.0-литровым бензиновым двигателем...",
        "car3-text": "Ford B-Max 1.0 EcoBoost 2013 года с пробегом 108 700 км...",
        "fuel-type": "Топливо", "transmission": "Коробка", "seats": "Места", "car-btn": "Узнать больше",
        
        // Platforms
        "platforms-title": "Больше автомобилей на популярных площадках",
        "platforms-subtitle": "Ищете больше вариантов? Посмотрите наши предложения на ведущих автомобильных площадках",
        "platform-kleinanzeigen": "Kleinanzeigen", "platform-mobile": "mobile.de",
        
        // Testimonials
        "testimonials-title": "Отзывы клиентов", "testimonials-subtitle": "Что говорят наши клиенты о качестве наших услуг",
        "testimonial1-text": "Хочу выразить огромную благодарность за помощь в покупке автомобиля!...",
        "testimonial2-text": "Прекрасное обслуживание, быстро, качественно 👍👍👍👍",
        "testimonial3-text": "Супер 👍🏻 очень мило, отличный сервис", "view-on-maps": "Смотреть на Картах", "month-ago": "месяц назад",
        
        // FAQ
        "faq-title": "Часто задаваемые вопросы", "faq-subtitle": "Ответы на самые популярные вопросы о наших услугах",
        "faq1-question": "Как быстро вы можете отремонтировать мой автомобиль?",
        "faq1-answer": "Сроки ремонта зависят от сложности работ...",
        "faq2-question": "Как быстро можно получить сервисный термин?",
        "faq2-answer": "Мы предоставляем термин быстро — обычно в течение недели...",
        "faq3-question": "Можете ли вы помочь с покупкой автомобиля в Германии?",
        "faq3-answer": "Конечно! Мы предлагаем полное сопровождение при покупке автомобиля...",
        "faq4-question": "Работаете ли вы с конкретными марками автомобилей?",
        "faq4-answer": "Мы работаем со всеми марками автомобилей...",
        
        // CTA
        "cta-title": "Готовы начать сотрудничество?",
        "cta-text": "Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему автомобилю",
        "cta-btn-primary": "Получить консультацию", "cta-btn-phone": "Позвонить сейчас",
        
        // Contact
        "contact-title": "Свяжитесь с нами", "contact-subtitle": "Мы готовы ответить на все ваши вопросы и помочь с выбором",
        "contact-info-title": "Наши контакты", "contact-info-text": "Свяжитесь с нами любым удобным способом...",
        "address-title": "Адрес", "address-text": "Hohlstraße 43, 55743 Idar-Oberstein",
        "phone-title": "Телефон", "email-title": "Email", "hours-title": "Часы работы",
        "hours-text": "Пн-Пт: 9:00 - 17:00<br>Сб: 9:00 - 15:00<br>Вс: выходной",
        "social-title": "Мы в соцсетях", "contact-modal-title": "Свяжитесь с нами",
        
        // Form
        "form-name": "Ваше имя", "form-email": "Email адрес", "form-phone": "Телефон",
        "form-subject": "Тема сообщения", "form-subject-default": "Выберите тему",
        "form-subject1": "Запись на сервис", "form-subject2": "Информация об автомобиле",
        "form-subject3": "Запчасти", "form-subject4": "Другое", "form-message": "Сообщение",
        "form-submit": "Отправить сообщение", "form-success": "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
        "form-error": "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
        
        // Footer
        "footer-about": "Профессиональный автосервис и продажа автомобилей...",
        "footer-services-title": "Наши услуги", "footer-service1": "Техническое обслуживание",
        "footer-service2": "Ремонт двигателя", "footer-service3": "Кузовной ремонт",
        "footer-service4": "Электрика и электроника", "footer-service5": "Продаж автомобилей",
        "footer-contact-title": "Контакты", "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Пн-Пт: 9:00 - 17:00", "footer-rights": "Все права защищены.",
        
        // Modal
        "modal-title": "Скоро будет доступно", "modal-text": "В настоящее время страница на mobile.de находится в разработке...",
        "modal-close": "Закрыть",
        
        // Loading
        "loading-text": "Загрузка..."
    },
    de: {
        // Navigation
        "home": "Startseite", "services": "Dienstleistungen", "about": "Über uns", "cars": "Autos", 
        "testimonials": "Bewertungen", "contact": "Kontakt", "faq": "FAQ", "current-lang": "Deutsch",
        
        // Hero
        "hero-title": "Professionelle <span>Autowerkstatt</span> und Autoverkauf",
        "hero-text": "Torop Auto bietet ein komplettes Spektrum an Dienstleistungen für Wartung, Reparatur und Verkauf von Autos...",
        "services-btn": "Unsere Dienstleistungen", "cars-btn": "Verfügbare Autos", "contact-btn": "Kostenlose Beratung",
        "hero-feature1": "Qualitätsgarantie", "hero-feature2": "Schneller Service", "hero-feature3": "Erschwingliche Preise",
        "hero-badge-text": "Beste Autowerkstatt 2024",
        
        // Stats
        "stat1": "Autos verkauft", "stat2": "Zufriedene Kunden", "stat3": "Durchgeführte Reparaturen", "stat4": "Jahre Erfahrung",
        
        // Services
        "services-title": "Unsere Dienstleistungen",
        "services-subtitle": "Wir bieten ein breites Spektrum an Dienstleistungen für Ihr Auto mit modernster Ausrüstung...",
        "service1-title": "Wartung", "service1-text": "Regelmäßige Wartung, um Ihr Auto in perfektem Zustand zu halten...",
        "service2-title": "Motorreparatur", "service2-text": "Diagnose und Reparatur von Motoren jeder Komplexität...",
        "service3-title": "Karosseriereparatur", "service3-text": "Hochwertige Karosseriereparatur und Lackierung...",
        "service4-title": "Elektrik und Elektronik", "service4-text": "Diagnose und Reparatur elektrischer Systeme...",
        "service5-title": "Getriebereparatur", "service5-text": "Professionelle Reparatur von Automatik- und Schaltgetrieben...",
        "service6-title": "Diagnose und Wartung", "service6-text": "Umfassende Computerdiagnose aller Fahrzeugsysteme...",
        "service-link": "Mehr erfahren",
        
        // About
        "about-title": "Über Torop Auto", "experience-text": "Jahre erfolgreiche Arbeit",
        "about-text1": "Torop Auto ist ein Unternehmen für Autoverkauf in Deutschland...",
        "about-text2": "In dieser Zeit haben wir Hunderten von Kunden erfolgreich dabei geholfen...",
        "feature1": "Qualitätsgarantie für alle Dienstleistungen", "feature2": "Moderne Diagnosegeräte",
        "feature3": "Erfahrene und zertifizierte Fachkräfte", "feature4": "Erschwingliche Preise und flexibles Rabattsystem",
        "feature5": "Große Auswahl an Originalteilen", "feature6": "Günstige Lage und Parkplätze",
        
        // Process
        "process-title": "So arbeiten wir", "process-subtitle": "Transparenter Arbeitsprozess von der Anfrage bis zum Ergebnis",
        "process-step1-title": "Beratung", "process-step1-text": "Sie stellen eine Anfrage, wir kontaktieren Sie und klären die Details",
        "process-step2-title": "Diagnose", "process-step2-text": "Wir führen eine vollständige Diagnose durch und erstellen einen Kostenvoranschlag",
        "process-step3-title": "Reparatur", "process-step3-text": "Wir führen Arbeiten mit hochwertigen Ersatzteilen durch",
        "process-step4-title": "Ergebnis", "process-step4-text": "Sie erhalten ein fertiges Ergebnis mit Qualitätsgarantie",
        
        // Cars
        "cars-title": "Verfügbare Autos",
        "cars-subtitle": "Wir bieten eine große Auswahl an qualitativ hochwertigen Autos mit Garantie und vollständiger Überprüfung",
        "car-badge1": "Neu", "car-badge2": "Bestseller", "car-badge3": "10% Rabatt",
        "car1-text": "Hyundai i30 Facelift mit zuverlässigem 1.6-Liter Diesel-Motor...",
        "car2-text": "BMW 330i Limousine (G20) Baujahr 2019 mit leistungsstarkem 2.0-Liter Benzin-Motor...",
        "car3-text": "Ford B-Max 1.0 EcoBoost Baujahr 2013 mit 108.700 km Laufleistung...",
        "fuel-type": "Kraftstoff", "transmission": "Getriebe", "seats": "Sitze", "car-btn": "Mehr erfahren",
        
        // Platforms
        "platforms-title": "Weitere Autos auf beliebten Plattformen",
        "platforms-subtitle": "Suchen Sie nach mehr Optionen? Sehen Sie sich unsere Angebote auf führenden Autoplattformen an",
        "platform-kleinanzeigen": "Kleinanzeigen", "platform-mobile": "mobile.de",
        
        // Testimonials
        "testimonials-title": "Kundenbewertungen", "testimonials-subtitle": "Was unsere Kunden über die Qualität unserer Dienstleistungen sagen",
        "testimonial1-text": "Ich möchte mich ganz herzlich für die Hilfe beim Autokauf bedanken!...",
        "testimonial2-text": "Ausgezeichneter Service, schnell, qualitativ hochwertig 👍👍👍👍",
        "testimonial3-text": "Super 👍🏻 sehr nett, exzellenter Service", "view-on-maps": "Auf Maps ansehen", "month-ago": "vor einem Monat",
        
        // FAQ
        "faq-title": "Häufig gestellte Fragen", "faq-subtitle": "Antworten auf die häufigsten Fragen zu unseren Dienstleistungen",
        "faq1-question": "Wie schnell können Sie mein Auto reparieren?",
        "faq1-answer": "Die Reparaturzeiten hängen von der Komplexität der Arbeiten ab...",
        "faq2-question": "Wie schnell kann ich einen Termin bekommen?",
        "faq2-answer": "Wir bieten Termine schnell an – in der Regel innerhalb einer Woche...",
        "faq3-question": "Können Sie beim Autokauf in Deutschland helfen?",
        "faq3-answer": "Natürlich! Wir bieten vollständige Begleitung beim Autokauf...",
        "faq4-question": "Arbeiten Sie mit bestimmten Automarken?",
        "faq4-answer": "Wir arbeiten mit allen Automarken...",
        
        // CTA
        "cta-title": "Bereit für die Zusammenarbeit?",
        "cta-text": "Kontaktieren Sie uns noch heute und erhalten Sie eine kostenlose Beratung für Ihr Auto",
        "cta-btn-primary": "Beratung erhalten", "cta-btn-phone": "Jetzt anrufen",
        
        // Contact
        "contact-title": "Kontaktieren Sie uns", "contact-subtitle": "Wir beantworten gerne alle Ihre Fragen und helfen bei der Auswahl",
        "contact-info-title": "Unsere Kontakte", "contact-info-text": "Kontaktieren Sie uns auf für Sie bequeme Weise...",
        "address-title": "Adresse", "address-text": "Hohlstraße 43, 55743 Idar-Oberstein",
        "phone-title": "Telefon", "email-title": "E-Mail", "hours-title": "Öffnungszeiten",
        "hours-text": "Mo-Fr: 9:00 - 17:00<br>Sa: 9:00 - 15:00<br>So: geschlossen",
        "social-title": "Wir in sozialen Medien", "contact-modal-title": "Kontaktieren Sie uns",
        
        // Form
        "form-name": "Ihr Name", "form-email": "E-Mail-Adresse", "form-phone": "Telefon",
        "form-subject": "Betreff", "form-subject-default": "Thema auswählen",
        "form-subject1": "Terminvereinbarung", "form-subject2": "Informationen zum Auto",
        "form-subject3": "Ersatzteile", "form-subject4": "Anderes", "form-message": "Nachricht",
        "form-submit": "Nachricht senden", "form-success": "Nachricht gesendet! Wir werden uns in Kürze bei Ihnen melden.",
        "form-error": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        
        // Footer
        "footer-about": "Professionelle Autowerkstatt und Autoverkauf...",
        "footer-services-title": "Unsere Dienstleistungen", "footer-service1": "Wartung",
        "footer-service2": "Motorreparatur", "footer-service3": "Karosseriereparatur",
        "footer-service4": "Elektrik und Elektronik", "footer-service5": "Autoverkauf",
        "footer-contact-title": "Kontakte", "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Mo-Fr: 9:00 - 17:00, Samstag: 9:00-15:00 Uhr", "footer-rights": "Alle Rechte vorbehalten.",
        
        // Modal
        "modal-title": "Demnächst verfügbar", "modal-text": "Die mobile.de-Seite befindet sich derzeit in Entwicklung...",
        "modal-close": "Schließen",
        
        // Loading
        "loading-text": "Laden..."
    },
    uk: {
        // Navigation
        "home": "Головна", "services": "Послуги", "about": "Про нас", "cars": "Автомобілі", 
        "testimonials": "Відгуки", "contact": "Контакти", "faq": "Питання", "current-lang": "Українська",
        
        // Hero
        "hero-title": "Професійний <span>автосервіс</span> та продаж автомобілів",
        "hero-text": "Torop Auto пропонує повний спектр послуг з обслуговування, ремонту та продажу автомобілів...",
        "services-btn": "Наші послуги", "cars-btn": "Автомобілі в наявності", "contact-btn": "Безкоштовна консультація",
        "hero-feature1": "Гарантія якості", "hero-feature2": "Швидке обслуговування", "hero-feature3": "Доступні ціни",
        "hero-badge-text": "Найкращий автосервіс 2024",
        
        // Stats
        "stat1": "Автомобілів продано", "stat2": "Задоволених клієнтів", "stat3": "Виконаних ремонтів", "stat4": "Років досвіду",
        
        // Services
        "services-title": "Наші послуги",
        "services-subtitle": "Ми пропонуємо широкий спектр послуг для вашого автомобіля, використовуючи сучасне обладнання...",
        "service1-title": "Технічне обслуговування", "service1-text": "Регулярне технічне обслуговування для підтримки вашого автомобіля...",
        "service2-title": "Ремонт двигуна", "service2-text": "Діагностика та ремонт двигунів будь-якої складності...",
        "service3-title": "Кузовний ремонт", "service3-text": "Якісний кузовний ремонт та фарбування...",
        "service4-title": "Електрика та електроніка", "service4-text": "Діагностика та ремонт електричних систем...",
        "service5-title": "Ремонт трансмісії", "service5-text": "Професійний ремонт автоматичних та механічних коробок передач...",
        "service6-title": "Діагностика та ТО", "service6-text": "Комплексна комп'ютерна діагностика всіх систем автомобіля...",
        "service-link": "Детальніше",
        
        // About
        "about-title": "Про компанію Torop Auto", "experience-text": "років успішної роботи",
        "about-text1": "Torop Auto — компанія з продажу автомобілів у Німеччині...",
        "about-text2": "За цей час ми успішно допомогли сотням клієнтів...",
        "feature1": "Гарантія якості на всі послуги", "feature2": "Сучасне діагностичне обладнання",
        "feature3": "Досвідчені та сертифіковані фахівці", "feature4": "Доступні ціни та гнучка система знижок",
        "feature5": "Широкий вибір оригінальних запчастин", "feature6": "Зручне розташування та парковка",
        
        // Process
        "process-title": "Як ми працюємо", "process-subtitle": "Прозорий процес роботи від заявки до результату",
        "process-step1-title": "Консультація", "process-step1-text": "Ви залишаєте заявку, ми зв'язуємося з вами та уточнюємо деталі",
        "process-step2-title": "Діагностика", "process-step2-text": "Проводимо повну діагностику та складаємо кошторис",
        "process-step3-title": "Ремонт", "process-step3-text": "Виконуємо роботи з використанням якісних запчастин",
        "process-step4-title": "Результат", "process-step4-text": "Ви отримуєте готовий результат з гарантією якості",
        
        // Cars
        "cars-title": "Автомобілі в наявності",
        "cars-subtitle": "Ми пропонуємо широкий вибір якісних автомобілів з гарантією та повною перевіркою",
        "car-badge1": "Новинка", "car-badge2": "Хіт продажів", "car-badge3": "Знижка 10%",
        "car1-text": "Hyundai i30 Facelift з надійним 1.6-літровим дизельним двигуном...",
        "car2-text": "BMW 330i Limousine (G20) 2019 року випуску з потужним 2.0-літровим бензиновим двигуном...",
        "car3-text": "Ford B-Max 1.0 EcoBoost 2013 року з пробігом 108 700 км...",
        "fuel-type": "Паливо", "transmission": "Коробка", "seats": "Місця", "car-btn": "Дізнатися більше",
        
        // Platforms
        "platforms-title": "Більше автомобілів на популярних майданчиках",
        "platforms-subtitle": "Шукаєте більше варіантів? Перегляньте наші пропозиції на провідних автомобільних майданчиках",
        "platform-kleinanzeigen": "Kleinanzeigen", "platform-mobile": "mobile.de",
        
        // Testimonials
        "testimonials-title": "Відгуки клієнтів", "testimonials-subtitle": "Що кажуть наші клієнти про якість наших послуг",
        "testimonial1-text": "Хочу висловити величезну вдячність за допомогу в покупці автомобіля!...",
        "testimonial2-text": "Чудове обслуговування, швидко, якісно 👍👍👍👍",
        "testimonial3-text": "Супер 👍🏻 дуже мило, відмінний сервіс", "view-on-maps": "Дивитися на Картах", "month-ago": "місяць тому",
        
        // FAQ
        "faq-title": "Часті запитання", "faq-subtitle": "Відповіді на найпопулярніші питання про наші послуги",
        "faq1-question": "Як швидко ви можете відремонтувати мій автомобіль?",
        "faq1-answer": "Терміни ремонту залежать від складності робіт...",
        "faq2-question": "Як швидко можна отримати сервісний термін?",
        "faq2-answer": "Ми надаємо термін швидко — зазвичай протягом тижня...",
        "faq3-question": "Чи можете ви допомогти з покупкою автомобіля в Німеччині?",
        "faq3-answer": "Звичайно! Ми пропонуємо повний супровід при покупці автомобіля...",
        "faq4-question": "Чи працюєте ви з конкретними марками автомобілів?",
        "faq4-answer": "Ми працюємо з усіма марками автомобілів...",
        
        // CTA
        "cta-title": "Готові почати співпрацю?",
        "cta-text": "Зв'яжіться з нами сьогодні та отримайте безкоштовну консультацію щодо вашого автомобіля",
        "cta-btn-primary": "Отримати консультацію", "cta-btn-phone": "Зателефонувати зараз",
        
        // Contact
        "contact-title": "Зв'яжіться з нами", "contact-subtitle": "Ми готові відповісти на всі ваші запитання та допомогти з вибором",
        "contact-info-title": "Наші контакти", "contact-info-text": "Зв'яжіться з нами будь-яким зручним способом...",
        "address-title": "Адреса", "address-text": "Hohlstraße 43, 55743 Idar-Oberstein",
        "phone-title": "Телефон", "email-title": "Email", "hours-title": "Години роботи",
        "hours-text": "Пн-Пт: 9:00 - 17:00<br>Сб: 9:00 - 15:00<br>Нд: вихідний",
        "social-title": "Ми в соцмережах", "contact-modal-title": "Зв'яжіться з нами",
        
        // Form
        "form-name": "Ваше ім'я", "form-email": "Email адреса", "form-phone": "Телефон",
        "form-subject": "Тема повідомлення", "form-subject-default": "Виберіть тему",
        "form-subject1": "Запис на сервіс", "form-subject2": "Інформація про автомобіль",
        "form-subject3": "Запчастини", "form-subject4": "Інше", "form-message": "Повідомлення",
        "form-submit": "Надіслати повідомлення", "form-success": "Повідомлення відправлено! Ми зв'яжемося з вами найближчим часом.",
        "form-error": "Сталася помилка. Будь ласка, спробуйте ще раз.",
        
        // Footer
        "footer-about": "Професійний автосервіс та продаж автомобілів...",
        "footer-services-title": "Наші послуги", "footer-service1": "Технічне обслуговування",
        "footer-service2": "Ремонт двигуна", "footer-service3": "Кузовний ремонт",
        "footer-service4": "Електрика та електроніка", "footer-service5": "Продаж автомобілів",
        "footer-contact-title": "Контакти", "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Пн-Пт: 9:00 - 17:00", "footer-rights": "Всі права захищені.",
        
        // Modal
        "modal-title": "Скоро буде доступно", "modal-text": "Наразі сторінка на mobile.de знаходиться в розробці...",
        "modal-close": "Закрити",
        
        // Loading
        "loading-text": "Завантаження..."
    }
};

// Application State
const AppState = {
    currentLang: 'de',
    isMobileMenuOpen: false,
    isImageModalOpen: false,
    currentImageIndex: 0,
    carImages: []
};

// Application Data
const AppData = {
    services: [
        { icon: 'bx bxs-wrench', titleKey: 'service1-title', textKey: 'service1-text' },
        { icon: 'bx bxs-car-mechanic', titleKey: 'service2-title', textKey: 'service2-text' },
        { icon: 'bx bxs-paint', titleKey: 'service3-title', textKey: 'service3-text' },
        { icon: 'bx bxs-car-battery', titleKey: 'service4-title', textKey: 'service4-text' },
        { icon: 'bx bxs-cog', titleKey: 'service5-title', textKey: 'service5-text' },
        { icon: 'bx bxs-tachometer', titleKey: 'service6-title', textKey: 'service6-text' }
    ],
    features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'],
    stats: [
        { count: 150, textKey: 'stat1' },
        { count: 500, textKey: 'stat2' },
        { count: 1200, textKey: 'stat3' },
        { count: 13, textKey: 'stat4' }
    ],
    cars: [
        {
            image: 'images/pic3.jpg',
            badgeKey: 'car-badge1',
            title: 'Hyundai i30 1.6 CRDi Automatik',
            textKey: 'car1-text',
            fuel: 'Diesel',
            transmission: 'Automatik',
            seats: '5 Sitze'
        },
        {
            image: 'images/pic4.jpg',
            badgeKey: 'car-badge2',
            title: 'BMW 330i Limousine (G20)',
            textKey: 'car2-text',
            fuel: 'Benzin',
            transmission: 'Automatik',
            seats: '5 Sitze'
        },
        {
            image: 'images/pic5.jpg',
            badgeKey: 'car-badge3',
            title: 'Ford B-Max 1.0 EcoBoost',
            textKey: 'car3-text',
            fuel: 'Benzin',
            transmission: 'Manuell',
            seats: '5 Sitze'
        }
    ],
    testimonials: [
        {
            avatar: 'https://avatar.iran.liara.run/public/93',
            textKey: 'testimonial1-text',
            name: 'Katya Avramenko',
            reviews: 'from Google Maps',
            rating: 5
        },
        {
            avatar: 'https://avatar.iran.liara.run/public/girl',
            textKey: 'testimonial2-text',
            name: 'Yulia German',
            reviews: 'from Google Maps',
            rating: 5
        },
        {
            avatar: 'https://avatar.iran.liara.run/public/96',
            textKey: 'testimonial3-text',
            name: 'Luise',
            reviews: 'from Google Maps',
            rating: 5
        }
    ],
    contactDetails: [
        { icon: 'bx bx-map', titleKey: 'address-title', textKey: 'address-text' },
        { icon: 'bx bx-phone', titleKey: 'phone-title', text: '+49 151 46327 317' },
        { icon: 'bx bx-envelope', titleKey: 'email-title', text: 'info@toropauto.de' },
        { icon: 'bx bx-time', titleKey: 'hours-title', textKey: 'hours-text' }
    ]
};

// Core Functions
const LanguageManager = {
    changeLanguage(lang) {
        AppState.currentLang = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update language switcher
        const currentLangElement = document.querySelector('[data-lang="current-lang"]');
        if (currentLangElement) {
            currentLangElement.textContent = translations[lang]['current-lang'];
        }
        
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.getAttribute('data-lang') === lang);
        });
        
        document.querySelector('.language-dropdown').classList.remove('active');
        
        // Re-render dynamic content
        ContentRenderer.renderAll();
        
        // Save preference
        localStorage.setItem('preferred-language', lang);
    },

    init() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            this.changeLanguage(savedLang);
        }
        
        // Language switcher event listeners
        const languageBtn = document.querySelector('.language-btn');
        const languageDropdown = document.querySelector('.language-dropdown');
        
        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('active');
            });
            
            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', () => {
                    this.changeLanguage(option.getAttribute('data-lang'));
                });
            });
            
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.language-switcher')) {
                    languageDropdown.classList.remove('active');
                }
            });
        }
    }
};

const ContentRenderer = {
    renderAll() {
        this.renderServices();
        this.renderFeatures();
        this.renderStats();
        this.renderCars();
        this.renderTestimonials();
        this.renderContactDetails();
        this.renderContactForm();
        this.renderFooter();
    },

    renderServices() {
        const grid = document.querySelector('.services-grid');
        if (!grid) return;

        grid.innerHTML = AppData.services.map((service, index) => `
            <div class="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${(index + 1) * 100}">
                <div class="service-icon"><i class='${service.icon}'></i></div>
                <h3 data-lang="${service.titleKey}">${translations[AppState.currentLang][service.titleKey]}</h3>
                <p data-lang="${service.textKey}">${translations[AppState.currentLang][service.textKey]}</p>
                <a href="#contact" class="service-link" data-lang="service-link">
                    ${translations[AppState.currentLang]['service-link']} <i class='bx bx-right-arrow-alt'></i>
                </a>
            </div>
        `).join('');
    },

    renderFeatures() {
        const container = document.querySelector('.features');
        if (!container) return;

        container.innerHTML = AppData.features.map(featureKey => `
            <div class="feature">
                <i class='bx bx-check'></i>
                <span data-lang="${featureKey}">${translations[AppState.currentLang][featureKey]}</span>
            </div>
        `).join('');
    },

    renderStats() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach((counter, index) => {
            counter.setAttribute('data-count', AppData.stats[index].count);
            counter.textContent = '0';
        });
    },

    renderCars() {
        const grid = document.querySelector('.cars-grid');
        if (!grid) return;

        grid.innerHTML = AppData.cars.map((car, index) => `
            <div class="car-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${(index + 1) * 100}">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.title}" loading="lazy" 
                         tabindex="0" role="button" class="car-image-clickable">
                    <div class="car-badge ${car.badgeKey === 'car-badge1' ? 'new' : car.badgeKey === 'car-badge2' ? 'hot' : 'discount'}">
                        <span data-lang="${car.badgeKey}">${translations[AppState.currentLang][car.badgeKey]}</span>
                    </div>
                </div>
                <div class="car-info">
                    <h3>${car.title}</h3>
                    <p data-lang="${car.textKey}">${translations[AppState.currentLang][car.textKey]}</p>
                    <div class="car-features">
                        <div class="car-feature">
                            <i class='bx bxs-gas-pump'></i>
                            <span data-lang="fuel-type">${translations[AppState.currentLang]['fuel-type']}: ${car.fuel}</span>
                        </div>
                        <div class="car-feature">
                            <i class='bx bxs-car'></i>
                            <span data-lang="transmission">${translations[AppState.currentLang]['transmission']}: ${car.transmission}</span>
                        </div>
                        <div class="car-feature">
                            <i class='bx bx-user'></i>
                            <span data-lang="seats">${translations[AppState.currentLang]['seats']}: ${car.seats}</span>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary" data-lang="car-btn">
                        ${translations[AppState.currentLang]['car-btn']}
                    </a>
                </div>
            </div>
        `).join('');

        // Re-initialize image clicks after render
        ImageModal.initCarImageClicks();
    },

    renderTestimonials() {
        const container = document.querySelector('.testimonials-container');
        if (!container) return;

        container.innerHTML = AppData.testimonials.map((testimonial, index) => `
            <div class="testimonial-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${(index + 1) * 100}">
                <div class="testimonial-rating">
                    ${'<i class="bx bxs-star"></i>'.repeat(testimonial.rating)}
                </div>
                <div class="testimonial-text" data-lang="${testimonial.textKey}">
                    ${translations[AppState.currentLang][testimonial.textKey]}
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}" loading="lazy">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.reviews}</p>
                    </div>
                </div>
                <div class="testimonial-actions">
                    <a href="https://maps.app.goo.gl/2q45KZJHKgEeghfW9" target="_blank" class="testimonial-link" data-lang="view-on-maps">
                        ${translations[AppState.currentLang]['view-on-maps']} <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
        `).join('');
    },

    renderContactDetails() {
        const container = document.querySelector('.contact-details');
        if (!container) return;

        container.innerHTML = AppData.contactDetails.map(detail => `
            <div class="contact-detail">
                <i class='${detail.icon}'></i>
                <div>
                    <h4 data-lang="${detail.titleKey}">${translations[AppState.currentLang][detail.titleKey]}</h4>
                    <p ${detail.textKey ? `data-lang="${detail.textKey}"` : ''}>
                        ${detail.textKey ? translations[AppState.currentLang][detail.textKey] : detail.text}
                    </p>
                </div>
            </div>
        `).join('');
    },

    renderContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.innerHTML = `
            <div class="form-group">
                <label for="name" data-lang="form-name">${translations[AppState.currentLang]['form-name']}</label>
                <input type="text" id="name" class="form-control" placeholder="${translations[AppState.currentLang]['form-name']}" required>
            </div>
            <div class="form-group">
                <label for="email" data-lang="form-email">${translations[AppState.currentLang]['form-email']}</label>
                <input type="email" id="email" class="form-control" placeholder="${translations[AppState.currentLang]['form-email']}" required>
            </div>
            <div class="form-group">
                <label for="phone" data-lang="form-phone">${translations[AppState.currentLang]['form-phone']}</label>
                <input type="tel" id="phone" class="form-control" placeholder="${translations[AppState.currentLang]['form-phone']}">
            </div>
            <div class="form-group">
                <label for="subject" data-lang="form-subject">${translations[AppState.currentLang]['form-subject']}</label>
                <select id="subject" class="form-control" required>
                    <option value="" data-lang="form-subject-default">${translations[AppState.currentLang]['form-subject-default']}</option>
                    <option value="service" data-lang="form-subject1">${translations[AppState.currentLang]['form-subject1']}</option>
                    <option value="car" data-lang="form-subject2">${translations[AppState.currentLang]['form-subject2']}</option>
                    <option value="parts" data-lang="form-subject3">${translations[AppState.currentLang]['form-subject3']}</option>
                    <option value="other" data-lang="form-subject4">${translations[AppState.currentLang]['form-subject4']}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message" data-lang="form-message">${translations[AppState.currentLang]['form-message']}</label>
                <textarea id="message" class="form-control" placeholder="${translations[AppState.currentLang]['form-message']}" required></textarea>
            </div>
            <div class="form-group">
                <div class="checkbox-group">
                    <input type="checkbox" id="privacyCheckbox" required>
                    <label for="privacyCheckbox">
                        Ich stimme der Verarbeitung meiner Daten gemäß der 
                        <a href="#datenschutz" id="datenschutzFormLink">Datenschutzerklärung</a> zu
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" data-lang="form-submit">
                ${translations[AppState.currentLang]['form-submit']}
            </button>
        `;
    },

    renderFooter() {
        const content = document.querySelector('.footer-content');
        if (!content) return;

        content.innerHTML = `
            <div class="footer-column">
                <h3>Torop Auto</h3>
                <p data-lang="footer-about">${translations[AppState.currentLang]['footer-about']}</p>
                <div class="social-links">
                    <a href="https://www.tiktok.com/@torop.auto?_t=ZM-90zed9YJTZY&_r=1" target="_blank"><i class='bx bxl-tiktok'></i></a>
                    <a href="https://www.instagram.com/toropauto?igsh=MThwcjdoeW5kbnNj" target="_blank"><i class='bx bxl-instagram'></i></a>
                </div>
            </div>
            <div class="footer-column">
                <h3 data-lang="footer-services-title">${translations[AppState.currentLang]['footer-services-title']}</h3>
                <ul class="footer-links">
                    <li><a href="#services"><i class="bx bx-chevron-right"></i><span data-lang="footer-service1">${translations[AppState.currentLang]['footer-service1']}</span></a></li>
                    <li><a href="#services"><i class="bx bx-chevron-right"></i><span data-lang="footer-service2">${translations[AppState.currentLang]['footer-service2']}</span></a></li>
                    <li><a href="#services"><i class="bx bx-chevron-right"></i><span data-lang="footer-service3">${translations[AppState.currentLang]['footer-service3']}</span></a></li>
                    <li><a href="#services"><i class="bx bx-chevron-right"></i><span data-lang="footer-service4">${translations[AppState.currentLang]['footer-service4']}</span></a></li>
                    <li><a href="#cars"><i class="bx bx-chevron-right"></i><span data-lang="footer-service5">${translations[AppState.currentLang]['footer-service5']}</span></a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 data-lang="footer-contact-title">${translations[AppState.currentLang]['footer-contact-title']}</h3>
                <ul class="footer-links">
                    <li><a href="#"><i class='bx bx-map'></i><span data-lang="footer-address">${translations[AppState.currentLang]['footer-address']}</span></a></li>
                    <li><a href="tel:+4915146327317"><i class='bx bx-phone'></i>+49 151 46327 317</a></li>
                    <li><a href="mailto:info@toropauto.de"><i class='bx bx-envelope'></i>info@toropauto.de</a></li>
                    <li><a href="#"><i class='bx bx-time'></i><span data-lang="footer-hours">${translations[AppState.currentLang]['footer-hours']}</span></a></li>
                </ul>
            </div>
        `;
    }
};

// Image Modal Functionality
const ImageModal = {
    init() {
        this.createModal();
        this.initCarImageClicks();
    },

    createModal() {
        const modalHTML = `
            <div id="imageModal" class="image-modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img id="modalImage" src="" alt="">
                    <div class="image-counter">
                        <span id="currentImage">1</span> / <span id="totalImages">3</span>
                    </div>
                    <button class="nav-btn prev-btn">
                        <i class='bx bx-chevron-left'></i>
                    </button>
                    <button class="nav-btn next-btn">
                        <i class='bx bx-chevron-right'></i>
                    </button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.bindEvents();
    },

    bindEvents() {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.querySelector('.close-modal');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        closeModal.addEventListener('click', () => this.close());
        prevBtn.addEventListener('click', () => this.prevImage());
        nextBtn.addEventListener('click', () => this.nextImage());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        document.addEventListener('keydown', (e) => {
            if (!AppState.isImageModalOpen) return;
            switch(e.key) {
                case 'Escape': this.close(); break;
                case 'ArrowLeft': this.prevImage(); break;
                case 'ArrowRight': this.nextImage(); break;
            }
        });

        // Touch events for mobile
        let touchStartX = 0;
        modal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        modal.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? this.nextImage() : this.prevImage();
            }
        });
    },

    initCarImageClicks() {
        const carImages = document.querySelectorAll('.car-image-clickable');
        AppState.carImages = Array.from(carImages);
        
        document.getElementById('totalImages').textContent = AppState.carImages.length;

        carImages.forEach((img, index) => {
            img.addEventListener('click', () => this.open(index));
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.open(index);
                }
            });
        });
    },

    open(index) {
        AppState.currentImageIndex = index;
        AppState.isImageModalOpen = true;
        
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        
        modalImage.src = AppState.carImages[index].src;
        modalImage.alt = AppState.carImages[index].alt;
        
        this.updateCounter();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        AppState.isImageModalOpen = false;
        const modal = document.getElementById('imageModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    },

    nextImage() {
        AppState.currentImageIndex = (AppState.currentImageIndex + 1) % AppState.carImages.length;
        this.updateImage();
    },

    prevImage() {
        AppState.currentImageIndex = (AppState.currentImageIndex - 1 + AppState.carImages.length) % AppState.carImages.length;
        this.updateImage();
    },

    updateImage() {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = AppState.carImages[AppState.currentImageIndex].src;
        modalImage.alt = AppState.carImages[AppState.currentImageIndex].alt;
        this.updateCounter();
    },

    updateCounter() {
        document.getElementById('currentImage').textContent = AppState.currentImageIndex + 1;
    }
};

// Form Handling
const FormHandler = {
    init() {
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'contactForm') {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    },

    async handleSubmit(e) {
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Validate privacy checkbox
        const privacyCheckbox = document.getElementById('privacyCheckbox');
        if (!privacyCheckbox.checked) {
            alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
            return;
        }

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text,
            message: document.getElementById('message').value
        };

        if (!formData.name || !formData.email || !formData.message) {
            this.showMessage('error', translations[AppState.currentLang]['form-error']);
            return;
        }

        // Show loading state
        submitBtn.innerHTML = '<i class="bx bx-loader bx-spin"></i> Sending...';
        submitBtn.disabled = true;
        form.classList.add('form-loading');

        try {
            const success = await this.sendToTelegram(formData);
            if (success) {
                this.showMessage('success', translations[AppState.currentLang]['form-success']);
                form.reset();
            } else {
                this.showMessage('error', translations[AppState.currentLang]['form-error']);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('error', translations[AppState.currentLang]['form-error']);
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.classList.remove('form-loading');
        }
    },

    async sendToTelegram(formData) {
        const message = `
📨 New message from Torop Auto website

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🎯 Subject: ${formData.subject}
💬 Message:
${formData.message}

🌐 Language: ${AppState.currentLang}
🕒 Time: ${new Date().toLocaleString()}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
            return response.ok;
        } catch (error) {
            console.error('Error sending to Telegram:', error);
            return false;
        }
    },

    showMessage(type, message) {
        const existingMessage = document.querySelector('.form-success, .form-error');
        if (existingMessage) existingMessage.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
        messageDiv.innerHTML = `
            <i class='bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'}'></i>
            ${message}
        `;

        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(messageDiv, form);

        setTimeout(() => messageDiv.remove(), 5000);
    }
};

// UI Interactions
const UIInteractions = {
    init() {
        this.initMobileMenu();
        this.initScrollToTop();
        this.initCounterAnimation();
        this.initSmoothScroll();
        this.initModals();
        this.initFAQ();
        this.initHeaderScroll();
        this.preventHorizontalScroll();
    },

    initMobileMenu() {
        const menuIcon = document.querySelector('.menu-icon');
        const navMenu = document.getElementById('navMenu');
        const body = document.body;

        if (menuIcon && navMenu) {
            menuIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                menuIcon.classList.toggle('active');
                body.classList.toggle('menu-open');
                AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen;
            });

            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    menuIcon.classList.remove('active');
                    body.classList.remove('menu-open');
                    AppState.isMobileMenuOpen = false;
                });
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('nav') && !e.target.closest('.menu-icon')) {
                    navMenu.classList.remove('active');
                    menuIcon.classList.remove('active');
                    body.classList.remove('menu-open');
                    AppState.isMobileMenuOpen = false;
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && AppState.isMobileMenuOpen) {
                    navMenu.classList.remove('active');
                    menuIcon.classList.remove('active');
                    body.classList.remove('menu-open');
                    AppState.isMobileMenuOpen = false;
                }
            });
        }
    },

    initScrollToTop() {
        const scrollButton = document.querySelector('.scroll-to-top');
        if (scrollButton) {
            scrollButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    },

    initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        function animateCounter() {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);
        }
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },

    initModals() {
        // Mobile modal
        const mobileModal = document.getElementById('mobileModal');
        const mobileBtn = document.getElementById('mobileBtn');
        
        if (mobileModal && mobileBtn) {
            const closeModal = () => {
                mobileModal.classList.remove('active');
                document.body.style.overflow = '';
            };

            mobileBtn.addEventListener('click', (e) => {
                e.preventDefault();
                mobileModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            document.querySelectorAll('#mobileModalClose, #modalCloseBtn').forEach(btn => {
                btn.addEventListener('click', closeModal);
            });

            mobileModal.addEventListener('click', (e) => {
                if (e.target === mobileModal) closeModal();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileModal.classList.contains('active')) {
                    closeModal();
                }
            });
        }

        // Legal modals
        this.initLegalModals();
    },

    initLegalModals() {
        const impressumModal = document.getElementById('impressumModal');
        const datenschutzModal = document.getElementById('datenschutzModal');

        const openModal = (modal) => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = (modal) => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Impressum
        const impressumLink = document.getElementById('impressumLink');
        if (impressumLink && impressumModal) {
            impressumLink.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(impressumModal);
            });

            document.getElementById('impressumClose').addEventListener('click', () => {
                closeModal(impressumModal);
            });
        }

        // Datenschutz
        const datenschutzLink = document.getElementById('datenschutzLink');
        if (datenschutzLink && datenschutzModal) {
            datenschutzLink.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(datenschutzModal);
            });

            document.getElementById('datenschutzClose').addEventListener('click', () => {
                closeModal(datenschutzModal);
            });

            // Form privacy link
            const privacyFormLink = document.getElementById('datenschutzFormLink');
            if (privacyFormLink) {
                privacyFormLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    openModal(datenschutzModal);
                });
            }
        }

        // Close modals on backdrop click and escape
        [impressumModal, datenschutzModal].forEach(modal => {
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal(modal);
                });
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                [impressumModal, datenschutzModal].forEach(modal => {
                    if (modal && modal.classList.contains('active')) {
                        closeModal(modal);
                    }
                });
            }
        });
    },

    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) otherItem.classList.remove('active');
                });
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    },

    initHeaderScroll() {
        const header = document.querySelector('header');
        const scrollButton = document.querySelector('.scroll-to-top');
        let lastScrollY = window.scrollY;

        function updateHeader() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
                if (currentScrollY > lastScrollY) {
                    header.style.transform = 'translateY(-100%)';
                    header.style.opacity = '0';
                } else {
                    header.style.transform = 'translateY(0)';
                    header.style.opacity = '1';
                }
            } else {
                header.classList.remove('scrolled');
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }

            // Scroll to top button
            if (scrollButton) {
                scrollButton.classList.toggle('active', currentScrollY > 300);
            }
            
            lastScrollY = currentScrollY;
        }

        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);
        window.addEventListener('load', updateHeader);
    },

    preventHorizontalScroll() {
        document.body.style.overflowX = 'hidden';
        window.addEventListener('resize', () => {
            document.body.style.overflowX = 'hidden';
        });
    }
};

// Preload images for better performance
function preloadImages() {
    const imageUrls = ['images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    LanguageManager.init();
    ContentRenderer.renderAll();
    ImageModal.init();
    FormHandler.init();
    UIInteractions.init();
    
    // Preload images
    preloadImages();
    
    console.log('Torop Auto website initialized successfully!');
});

// Export for potential debugging
window.ToropAuto = {
    AppState,
    AppData,
    LanguageManager,
    ContentRenderer,
    ImageModal,
    FormHandler,
    UIInteractions
};