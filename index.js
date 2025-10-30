// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '7945231022:AAGrXt1RlU0X2gmRCUEk3pOJTNrE7p0oaYE'; // Замените на ваш токен бота
const TELEGRAM_CHAT_ID = '913725325'; // Замените на ваш chat ID

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Language data with complete translations
const translations = {
    ru: {
        // Header
        "home": "Главная",
        "services": "Услуги",
        "about": "О нас",
        "cars": "Автомобили",
        "testimonials": "Отзывы",
        "contact": "Контакты",
        "current-lang": "Русский",
        
        // Hero
        "hero-title": "Профессиональный <span>автосервис</span> и продажа автомобилей",
        "hero-text": "Torop Auto предлагает полный спектр услуг по обслуживанию, ремонту и продаже автомобилей. Мы гарантируем качество, надежность и индивидуальный подход к каждому клиенту.",
        "services-btn": "Наши услуги",
        "cars-btn": "Автомобили в наличии",
        
        // Stats
        "stat1": "Автомобилей продано",
        "stat2": "Довольных клиентов",
        "stat3": "Выполненных ремонтов",
        "stat4": "Лет опыта",
        
        // Services
        "services-title": "Наши услуги",
        "services-subtitle": "Мы предлагаем широкий спектр услуг для вашего автомобиля, используя современное оборудование и передовые технологии",
        "service1-title": "Техническое обслуживание",
        "service1-text": "Регулярное техническое обслуживание для поддержания вашего автомобиля в идеальном состоянии. Замена масла, фильтров, диагностика систем.",
        "service2-title": "Ремонт двигателя",
        "service2-text": "Диагностика и ремонт двигателей любой сложности с использованием современного оборудования. Капитальный ремонт, замена компонентов.",
        "service3-title": "Кузовной ремонт",
        "service3-text": "Качественный кузовной ремонт и покраска с гарантией долговечности и сохранения внешнего вида. Рихтовка, шпаклевка, антикоррозийная обработка.",
        "service4-title": "Электрика и электроника",
        "service4-text": "Диагностика и ремонт электрических систем, бортовых компьютеров и электронных компонентов. Установка дополнительного оборудования.",
        "service5-title": "Ремонт трансмиссии",
        "service5-text": "Профессиональный ремонт автоматических и механических коробок передач. Замена сцепления, ремонт дифференциалов, обслуживание КПП.",
        "service6-title": "Диагностика и ТО",
        "service6-text": "Комплексная компьютерная диагностика всех систем автомобиля. Регулярное техническое обслуживание по регламенту производителя.",
        "service-link": "Подробнее",
        
        // About
        "about-title": "О компании Torop Auto",
        "about-text1": "Torop Auto — компания по продаже автомобилей в Германии. Несмотря на то, что мы работаем на немецком рынке всего 2 года, наш опыт в автомобильной сфере насчитывает более 10 лет и берёт начало в Украине.",
        "about-text2": "За это время мы успешно помогли сотням клиентов приобрести надёжные автомобили, полностью соответствующие их ожиданиям. Мы знаем, насколько важен честный подход, поэтому тщательно проверяем каждую машину перед продажей и сопровождаем клиента на всех этапах сделки.",
        "feature1": "Гарантия качества на все услуги",
        "feature2": "Современное диагностическое оборудование",
        "feature3": "Опытные и сертифицированные специалисты",
        "feature4": "Доступные цены и гибкая система скидок",
        "feature5": "Широкий выбор оригинальных запчастей",
        "feature6": "Удобное расположение и парковка",
        
        // Cars
        "cars-title": "Автомобили в наличии",
        "cars-subtitle": "Мы предлагаем широкий выбор качественных автомобилей с гарантией и полной проверкой",
        "car-badge1": "Новинка",
        "car-badge2": "Хит продаж",
        "car-badge3": "Скидка 10%",
        "car1-text": "Hyundai i30 Facelift с надежным 1.6-литровым дизельным двигателем и автоматической коробкой передач. Идеальное состояние, новый TÜV до апреля 2026 года. Комплект 'без забот' с топовой комплектацией.",
        "car2-text": "BMW 330i Limousine (G20) 2019 года выпуска с мощным 2.0-литровым бензиновым двигателем 258 л.с. Спортивный бизнес-седан с автоматической коробкой передач, в отличном техническом состоянии. Соответствует стандарту EURO 6.",
        "car3-text": "Ford B-Max 1.0 EcoBoost 2013 года с пробегом 108 700 км. Экономичный бензиновый двигатель (около 5л/100км), новый TÜV до июля 2027. Ухоженный автомобиль без аварий, некурящий владелец, почти новые шины.",
        "fuel-type": "Топливо",
        "transmission": "Коробка",
        "seats": "Места",
        "car-btn": "Узнать больше",
        
        // Platforms
        "platforms-title": "Больше автомобилей на популярных площадках",
        "platforms-subtitle": "Ищете больше вариантов? Посмотрите наши предложения на ведущих автомобильных площадках",
        "platform-kleinanzeigen": "Kleinanzeigen",
        "platform-mobile": "mobile.de",
        
        // Modal
        "modal-title": "Скоро будет доступно",
        "modal-text": "В настоящее время страница на mobile.de находится в разработке. Скоро здесь появятся наши автомобили!",
        "modal-close": "Закрыть",
        
        // Testimonials
        "testimonials-title": "Отзывы клиентов",
        "testimonials-subtitle": "Что говорят наши клиенты о качестве наших услуг",
        "testimonial1-text": "Хочу выразить огромную благодарность за помощь в покупке автомобиля! Мне всё подробно объяснили, помогли с выбором и проверкой машины, оформили все документы и поддерживали на каждом этапе. Благодаря вам процесс прошёл легко и без лишнего стресса.",
        "testimonial2-text": "Прекрасное обслуживание, быстро, качественно 👍👍👍👍",
        "testimonial3-text": "Супер 👍🏻 очень мило, отличный сервис",
        "view-on-maps": "Смотреть на Картах",
        "month-ago": "месяц назад",
        
        // Contact
        "contact-title": "Свяжитесь с нами",
        "contact-subtitle": "Мы готовы ответить на все ваши вопросы и помочь с выбором",
        "contact-info-title": "Наши контакты",
        "contact-info-text": "Свяжитесь с нами любым удобным способом. Мы всегда рады помочь вам с выбором автомобиля или ремонтом вашего транспортного средства.",
        "address-title": "Адрес",
        "address-text": "Hohlstraße 43, 55743 Idar-Oberstein",
        "phone-title": "Телефон",
        "email-title": "Email",
        "hours-title": "Часы работы",
        "hours-text": "Пн-Пт: 9:00 - 17:00<br>Сб: 9:00 - 15:00<br>Вс: выходной",
        
        // Form
        "form-name": "Ваше имя",
        "form-email": "Email адрес",
        "form-phone": "Телефон",
        "form-subject": "Тема сообщения",
        "form-subject-default": "Выберите тему",
        "form-subject1": "Запись на сервис",
        "form-subject2": "Информация об автомобиле",
        "form-subject3": "Запчасти",
        "form-subject4": "Другое",
        "form-message": "Сообщение",
        "form-submit": "Отправить сообщение",
        "form-success": "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
        "form-error": "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
        
        // Footer
        "footer-about": "Профессиональный автосервис и продажа автомобилей. Мы гарантируем качество, надежность и индивидуальный подход к каждому клиенту. Более 13 лет на рынке автомобильных услуг.",
        "footer-services-title": "Наши услуги",
        "footer-service1": "Техническое обслуживание",
        "footer-service2": "Ремонт двигателя",
        "footer-service3": "Кузовной ремонт",
        "footer-service4": "Электрика и электроника",
        "footer-service5": "Продажа автомобилей",
        "footer-contact-title": "Контакты",
        "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Пн-Пт: 9:00 - 19:00",
        "footer-rights": "Все права защищены.",
        
        // Loading
        "loading-text": "Загрузка...",

        // Header новые
        "faq": "Вопросы",
        
        // Hero новые
        "hero-feature1": "Гарантия качества",
        "hero-feature2": "Быстрое обслуживание", 
        "hero-feature3": "Доступные цены",
        "hero-badge-text": "Лучший автосервис 2024",
        "contact-btn": "Бесплатная консультация",
        
        // Process
        "process-title": "Как мы работаем",
        "process-subtitle": "Прозрачный процесс работы от заявки до результата",
        "process-step1-title": "Консультация",
        "process-step1-text": "Вы оставляете заявку, мы связываемся с вами и уточняем детали",
        "process-step2-title": "Диагностика", 
        "process-step2-text": "Проводим полную диагностику и составляем смету",
        "process-step3-title": "Ремонт",
        "process-step3-text": "Выполняем работы с использованием качественных запчастей",
        "process-step4-title": "Результат",
        "process-step4-text": "Вы получаете готовый результат с гарантией качества",
        
        // About
        "experience-text": "лет успешной работы",
        
        // FAQ
        "faq-title": "Часто задаваемые вопросы",
        "faq-subtitle": "Ответы на самые популярные вопросы о наших услугах",
        "faq1-question": "Как быстро вы можете отремонтировать мой автомобиль?",
        "faq1-answer": "Сроки ремонта зависят от сложности работ. Обычно диагностика занимает 1-2 часа, мелкий ремонт - 1-2 дня, капитальный ремонт - 3-7 дней. Мы всегда стараемся минимизировать время простоя вашего автомобиля.",
        "faq2-question": "Даете ли вы гарантию на ремонт?",
        "faq2-answer": "Да, мы предоставляем гарантию на все виды работ и установленные запчасти. Гарантийный срок зависит от типа ремонта и составляет от 6 месяцев до 2 лет.",
        "faq3-question": "Можете ли вы помочь с покупкой автомобиля в Германии?",
        "faq3-answer": "Конечно! Мы предлагаем полное сопровождение при покупке автомобиля: подбор вариантов, проверка истории, техническая диагностика, оформление документов и помощь с регистрацией.",
        "faq4-question": "Работаете ли вы с конкретными марками автомобилей?",
        "faq4-answer": "Мы работаем со всеми марками автомобилей: от Volkswagen, BMW, Mercedes до Audi, Opel, Ford и других. Наши специалисты имеют опыт работы с различными брендами.",
        
        // CTA
        "cta-title": "Готовы начать сотрудничество?",
        "cta-text": "Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему автомобилю",
        "cta-btn-primary": "Получить консультацию",
        "cta-btn-phone": "Позвонить сейчас",
        
        // Contact
        "social-title": "Мы в соцсетях",
        "contact-modal-title": "Свяжитесь с нами"
    },
    de: {
        // Header
        "home": "Startseite",
        "services": "Dienstleistungen",
        "about": "Über uns",
        "cars": "Autos",
        "testimonials": "Bewertungen",
        "contact": "Kontakt",
        "current-lang": "Deutsch",
        
        // Hero
        "hero-title": "Professionelle <span>Autowerkstatt</span> und Autoverkauf",
        "hero-text": "Torop Auto bietet ein komplettes Spektrum an Dienstleistungen für Wartung, Reparatur und Verkauf von Autos. Wir garantieren Qualität, Zuverlässigkeit und individuelle Betreuung für jeden Kunden.",
        "services-btn": "Unsere Dienstleistungen",
        "cars-btn": "Verfügbare Autos",
        
        // Stats
        "stat1": "Autos verkauft",
        "stat2": "Zufriedene Kunden",
        "stat3": "Durchgeführte Reparaturen",
        "stat4": "Jahre Erfahrung",
        
        // Services
        "services-title": "Unsere Dienstleistungen",
        "services-subtitle": "Wir bieten ein breites Spektrum an Dienstleistungen für Ihr Auto mit modernster Ausrüstung und fortschrittlichen Technologien",
        "service1-title": "Wartung",
        "service1-text": "Regelmäßige Wartung, um Ihr Auto in perfektem Zustand zu halten. Ölwechsel, Filterwechsel, Systemdiagnose.",
        "service2-title": "Motorreparatur",
        "service2-text": "Diagnose und Reparatur von Motoren jeder Komplexität mit modernster Ausrüstung. Generalüberholung, Austausch von Komponenten.",
        "service3-title": "Karosseriereparatur",
        "service3-text": "Hochwertige Karosseriereparatur und Lackierung mit Garantie für Langlebigkeit und Erhaltung des Aussehens. Ausbeulen, Spachteln, Rostschutz.",
        "service4-title": "Elektrik und Elektronik",
        "service4-text": "Diagnose und Reparatur elektrischer Systeme, Bordcomputer und elektronischer Komponenten. Installation von Zubehör.",
        "service5-title": "Getriebereparatur",
        "service5-text": "Professionelle Reparatur von Automatik- und Schaltgetrieben. Kupplungswechsel, Differentialreparatur, Wartung des Getriebes.",
        "service6-title": "Diagnose und Wartung",
        "service6-text": "Umfassende Computerdiagnose aller Fahrzeugsysteme. Regelmäßige Wartung nach Herstellervorschrift.",
        "service-link": "Mehr erfahren",
        
        // About
        "about-title": "Über Torop Auto",
        "about-text1": "Torop Auto ist ein Unternehmen für Autoverkauf in Deutschland. Obwohl wir erst seit 2 Jahren auf dem deutschen Markt tätig sind, reicht unsere Erfahrung in der Automobilbranche über 10 Jahre zurück und hat ihren Ursprung in der Ukraine.",
        "about-text2": "In dieser Zeit haben wir Hunderten von Kunden erfolgreich dabei geholfen, zuverlässige Autos zu erwerben, die vollständig ihren Erwartungen entsprechen. Wir wissen, wie wichtig ein ehrlicher Ansatz ist, daher überprüfen wir jedes Fahrzeug vor dem Verkauf gründlich und begleiten den Kunden in allen Phasen des Geschäfts.",
        "feature1": "Qualitätsgarantie für alle Dienstleistungen",
        "feature2": "Moderne Diagnosegeräte",
        "feature3": "Erfahrene und zertifizierte Fachkräfte",
        "feature4": "Erschwingliche Preise und flexibles Rabattsystem",
        "feature5": "Große Auswahl an Originalteilen",
        "feature6": "Günstige Lage und Parkplätze",
        
        // Cars
        "cars-title": "Verfügbare Autos",
        "cars-subtitle": "Wir bieten eine große Auswahl an qualitativ hochwertigen Autos mit Garantie und vollständiger Überprüfung",
        "car-badge1": "Neu",
        "car-badge2": "Bestseller",
        "car-badge3": "10% Rabatt",
        "car1-text": "Hyundai i30 Facelift mit zuverlässigem 1.6-Liter Diesel-Motor und Automatikgetriebe. Top gepflegt, neuer TÜV bis April 2026. Sorglos-Paket mit Top-Ausstattung für komfortables Fahren.",
        "car2-text": "BMW 330i Limousine (G20) Baujahr 2019 mit leistungsstarkem 2.0-Liter Benzin-Motor (258 PS). Sportliche Business-Limousine mit Automatikgetriebe, ausgezeichnetem technischen Zustand. Erfüllt EURO 6 Norm.",
        "car3-text": "Ford B-Max 1.0 EcoBoost Baujahr 2013 mit 108.700 km Laufleistung. Sparsamer Benzin-Motor (ca. 5l/100km), neuer TÜV bis Juli 2027. Unfallfrei gepflegt, Nichtraucherfahrzeug mit fast neuen Reifen.",
        "fuel-type": "Kraftstoff",
        "transmission": "Getriebe",
        "seats": "Sitze",
        "car-btn": "Mehr erfahren",
        
        // Platforms
        "platforms-title": "Weitere Autos auf beliebten Plattformen",
        "platforms-subtitle": "Suchen Sie nach mehr Optionen? Sehen Sie sich unsere Angebote auf führenden Autoplattformen an",
        "platform-kleinanzeigen": "Kleinanzeigen",
        "platform-mobile": "mobile.de",
        
        // Modal
        "modal-title": "Demnächst verfügbar",
        "modal-text": "Die mobile.de-Seite befindet sich derzeit in Entwicklung. Bald werden hier unsere Autos erscheinen!",
        "modal-close": "Schließen",
        
        // Testimonials
        "testimonials-title": "Kundenbewertungen",
        "testimonials-subtitle": "Was unsere Kunden über die Qualität unserer Dienstleistungen sagen",
        "testimonial1-text": "Ich möchte mich ganz herzlich für die Hilfe beim Autokauf bedanken! Mir wurde alles genau erklärt, bei der Auswahl und Überprüfung des Autos geholfen, alle Dokumente wurden erledigt und ich wurde in jeder Phase unterstützt. Dank Ihnen verlief der Prozess einfach und ohne unnötigen Stress.",
        "testimonial2-text": "Ausgezeichneter Service, schnell, qualitativ hochwertig 👍👍👍👍",
        "testimonial3-text": "Super 👍🏻 sehr nett, exzellenter Service",
        "view-on-maps": "Auf Maps ansehen",
        "month-ago": "vor einem Monat",
        
        // Contact
        "contact-title": "Kontaktieren Sie uns",
        "contact-subtitle": "Wir beantworten gerne alle Ihre Fragen und helfen bei der Auswahl",
        "contact-info-title": "Unsere Kontakte",
        "contact-info-text": "Kontaktieren Sie uns auf für Sie bequeme Weise. Wir helfen Ihnen gerne bei der Auswahl eines Autos oder der Reparatur Ihres Fahrzeugs.",
        "address-title": "Adresse",
        "address-text": "Hohlstraße 43, 55743 Idar-Oberstein",
        "phone-title": "Telefon",
        "email-title": "E-Mail",
        "hours-title": "Öffnungszeiten",
        "hours-text": "Mo-Fr: 9:00 - 19:00<br>Sa: 9:00 - 15:00<br>So: geschlossen",
        
        // Form
        "form-name": "Ihr Name",
        "form-email": "E-Mail-Adresse",
        "form-phone": "Telefon",
        "form-subject": "Betreff",
        "form-subject-default": "Thema auswählen",
        "form-subject1": "Terminvereinbarung",
        "form-subject2": "Informationen zum Auto",
        "form-subject3": "Ersatzteile",
        "form-subject4": "Anderes",
        "form-message": "Nachricht",
        "form-submit": "Nachricht senden",
        "form-success": "Nachricht gesendet! Wir werden uns in Kürze bei Ihnen melden.",
        "form-error": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        
        // Footer
        "footer-about": "Professionelle Autowerkstatt und Autoverkauf. Wir garantieren Qualität, Zuverlässigkeit und individuelle Betreuung für jeden Kunden. Über 13 Jahre Erfahrung im Automobilservice.",
        "footer-services-title": "Unsere Dienstleistungen",
        "footer-service1": "Wartung",
        "footer-service2": "Motorreparatur",
        "footer-service3": "Karosseriereparatur",
        "footer-service4": "Elektrik und Elektronik",
        "footer-service5": "Autoverkauf",
        "footer-contact-title": "Kontakte",
        "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Mo-Fr: 9:00 - 17:00, Samstag: 9:00-15:00 Uhr",
        "footer-rights": "Alle Rechte vorbehalten.",
        
        // Loading
        "loading-text": "Laden...",

        "faq": "FAQ",
        
        // Hero новые
        "hero-feature1": "Qualitätsgarantie",
        "hero-feature2": "Schneller Service", 
        "hero-feature3": "Erschwingliche Preise",
        "hero-badge-text": "Beste Autowerkstatt 2024",
        "contact-btn": "Kostenlose Beratung",
        
        // Process
        "process-title": "So arbeiten wir",
        "process-subtitle": "Transparenter Arbeitsprozess von der Anfrage bis zum Ergebnis",
        "process-step1-title": "Beratung",
        "process-step1-text": "Sie stellen eine Anfrage, wir kontaktieren Sie und klären die Details",
        "process-step2-title": "Diagnose", 
        "process-step2-text": "Wir führen eine vollständige Diagnose durch und erstellen einen Kostenvoranschlag",
        "process-step3-title": "Reparatur",
        "process-step3-text": "Wir führen Arbeiten mit hochwertigen Ersatzteilen durch",
        "process-step4-title": "Ergebnis",
        "process-step4-text": "Sie erhalten ein fertiges Ergebnis mit Qualitätsgarantie",
        
        // About
        "experience-text": "Jahre erfolgreiche Arbeit",
        
        // FAQ
        "faq-title": "Häufig gestellte Fragen",
        "faq-subtitle": "Antworten auf die häufigsten Fragen zu unseren Dienstleistungen",
        "faq1-question": "Wie schnell können Sie mein Auto reparieren?",
        "faq1-answer": "Die Reparaturzeiten hängen von der Komplexität der Arbeiten ab. Normalerweise dauert die Diagnose 1-2 Stunden, kleine Reparaturen 1-2 Tage, Generalüberholungen 3-7 Tage. Wir versuchen immer, die Standzeit Ihres Fahrzeugs zu minimieren.",
        "faq2-question": "Geben Sie Garantie auf die Reparatur?",
        "faq2-answer": "Ja, wir gewähren Garantie auf alle Arten von Arbeiten und eingebaute Ersatzteile. Die Garantiedauer hängt von der Art der Reparatur ab und beträgt 6 Monate bis 2 Jahre.",
        "faq3-question": "Können Sie beim Autokauf in Deutschland helfen?",
        "faq3-answer": "Natürlich! Wir bieten vollständige Begleitung beim Autokauf: Auswahl von Optionen, Überprüfung der Historie, technische Diagnose, Bearbeitung von Dokumenten und Hilfe bei der Zulassung.",
        "faq4-question": "Arbeiten Sie mit bestimmten Automarken?",
        "faq4-answer": "Wir arbeiten mit allen Automarken: von Volkswagen, BMW, Mercedes bis Audi, Opel, Ford und anderen. Unsere Spezialisten haben Erfahrung mit verschiedenen Marken.",
        
        // CTA
        "cta-title": "Bereit für die Zusammenarbeit?",
        "cta-text": "Kontaktieren Sie uns noch heute und erhalten Sie eine kostenlose Beratung für Ihr Auto",
        "cta-btn-primary": "Beratung erhalten",
        "cta-btn-phone": "Jetzt anrufen",
        
        // Contact
        "social-title": "Wir in sozialen Medien",
        "contact-modal-title": "Kontaktieren Sie uns"
    },
    uk: {
        // Header
        "home": "Головна",
        "services": "Послуги",
        "about": "Про нас",
        "cars": "Автомобілі",
        "testimonials": "Відгуки",
        "contact": "Контакти",
        "current-lang": "Українська",
        
        // Hero
        "hero-title": "Професійний <span>автосервіс</span> та продаж автомобілів",
        "hero-text": "Torop Auto пропонує повний спектр послуг з обслуговування, ремонту та продажу автомобілів. Ми гарантуємо якість, надійність та індивідуальний підхід до кожного клієнта.",
        "services-btn": "Наші послуги",
        "cars-btn": "Автомобілі в наявності",
        
        // Stats
        "stat1": "Автомобілів продано",
        "stat2": "Задоволених клієнтів",
        "stat3": "Виконаних ремонтів",
        "stat4": "Років досвіду",
        
        // Services
        "services-title": "Наші послуги",
        "services-subtitle": "Ми пропонуємо широкий спектр послуг для вашого автомобіля, використовуючи сучасне обладнання та передові технології",
        "service1-title": "Технічне обслуговування",
        "service1-text": "Регулярне технічне обслуговування для підтримки вашого автомобіля в ідеальному стані.",
        "service2-title": "Ремонт двигуна",
        "service2-text": "Діагностика та ремонт двигунів будь-якої складності з використанням сучасного обладнання. Капітальний ремонт, заміна компонентів.",
        "service3-title": "Кузовний ремонт",
        "service3-text": "Якісний кузовний ремонт та фарбування з гарантією довговічності та збереження зовнішнього вигляду. Рихтування, шпаклівка, антикорозійна обробка.",
        "service4-title": "Електрика та електроніка",
        "service4-text": "Діагностика та ремонт електричних систем, бортових комп'ютерів та електронних компонентів. Встановлення додаткового обладнання.",
        "service5-title": "Ремонт трансмісії",
        "service5-text": "Професійний ремонт автоматичних та механічних коробок передач. Заміна зчеплення, ремонт диференціалів, обслуговування КПП.",
        "service6-title": "Діагностика та ТО",
        "service6-text": "Комплексна комп'ютерна діагностика всіх систем автомобіля. Регулярне технічне обслуговування за регламентом виробника.",
        "service-link": "Детальніше",
        
        // About
        "about-title": "Про компанію Torop Auto",
        "about-text1": "Torop Auto — компанія з продажу автомобілів у Німеччині. Незважаючи на те, що ми працюємо на німецькому ринку всього 2 роки, наш досвід в автомобільній сфері налічує понад 10 років і бере початок в Україні.",
        "about-text2": "За цей час ми успішно допомогли сотням клієнтів придбати надійні автомобілі, повністю відповідні їхнім очікуванням. Ми знаємо, наскільки важливий чесний підхід, тому ретельно перевіряємо кожну машину перед продажем і супроводжуємо клієнта на всіх етапах угоди.",
        "feature1": "Гарантія якості на всі послуги",
        "feature2": "Сучасне діагностичне обладнання",
        "feature3": "Досвідчені та сертифіковані фахівці",
        "feature4": "Доступні ціни та гнучка система знижок",
        "feature5": "Широкий вибір оригінальних запчастин",
        "feature6": "Зручне розташування та парковка",
        
        // Cars
        "cars-title": "Автомобілі в наявності",
        "cars-subtitle": "Ми пропонуємо широкий вибір якісних автомобілів з гарантією та повною перевіркою",
        "car-badge1": "Новинка",
        "car-badge2": "Хіт продажів",
        "car-badge3": "Знижка 10%",
        "car1-text": "Hyundai i30 Facelift з надійним 1.6-літровим дизельним двигуном та автоматичною коробкою передач. Ідеальний стан, новий TÜV до квітня 2026 року. Комплект 'без турбот' з топовою комплектацією для комфортної їзди.",
        "car2-text": "BMW 330i Limousine (G20) 2019 року випуску з потужним 2.0-літровим бензиновим двигуном 258 к.с. Спортивний бізнес-седан з автоматичною коробкою передач, у відмінному технічному стані. Відповідає стандарту EURO 6.",
        "car3-text": "Ford B-Max 1.0 EcoBoost 2013 року з пробігом 108 700 км. Економний бензиновий двигун (близько 5л/100км), новий TÜV до липня 2027. Доглянутий автомобіль без аварій, непалений салон, майже нові шини.",
        "fuel-type": "Паливо",
        "transmission": "Коробка",
        "seats": "Місця",
        "car-btn": "Дізнатися більше",
        
        // Platforms
        "platforms-title": "Більше автомобілів на популярних майданчиках",
        "platforms-subtitle": "Шукаєте більше варіантів? Перегляньте наші пропозиції на провідних автомобільних майданчиках",
        "platform-kleinanzeigen": "Kleinanzeigen",
        "platform-mobile": "mobile.de",
        
        // Modal
        "modal-title": "Скоро буде доступно",
        "modal-text": "Наразі сторінка на mobile.de знаходиться в розробці. Незабаром тут з'являться наші автомобілі!",
        "modal-close": "Закрити",
        
        // Testimonials
        "testimonials-title": "Відгуки клієнтів",
        "testimonials-subtitle": "Що кажуть наші клієнти про якість наших послуг",
        "testimonial1-text": "Хочу висловити величезну вдячність за допомогу в покупці автомобіля! Мені все докладно пояснили, допомогли з вибором і перевіркою машини, оформили всі документи і підтримували на кожному етапі. Завдяки вам процес пройшов легко і без зайвого стресу.",
        "testimonial2-text": "Чудове обслуговування, швидко, якісно 👍👍👍👍",
        "testimonial3-text": "Супер 👍🏻 дуже мило, відмінний сервіс",
        "view-on-maps": "Дивитися на Картах",
        "month-ago": "місяць тому",
        
        // Contact
        "contact-title": "Зв'яжіться з нами",
        "contact-subtitle": "Ми готові відповісти на всі ваші запитання та допомогти з вибором",
        "contact-info-title": "Наші контакти",
        "contact-info-text": "Зв'яжіться з нами будь-яким зручним способом. Ми завжди раді допомогти вам з вибором автомобіля або ремонтом вашого транспортного засобу.",
        "address-title": "Адреса",
        "address-text": "Hohlstraße 43, 55743 Idar-Oberstein",
        "phone-title": "Телефон",
        "email-title": "Email",
        "hours-title": "Години роботи",
        "hours-text": "Пн-Пт: 9:00 - 17:00<br>Сб: 9:00 - 15:00<br>Нд: вихідний",
        
        // Form
        "form-name": "Ваше ім'я",
        "form-email": "Email адреса",
        "form-phone": "Телефон",
        "form-subject": "Тема повідомлення",
        "form-subject-default": "Виберіть тему",
        "form-subject1": "Запис на сервіс",
        "form-subject2": "Інформація про автомобіль",
        "form-subject3": "Запчастини",
        "form-subject4": "Інше",
        "form-message": "Повідомлення",
        "form-submit": "Надіслати повідомлення",
        "form-success": "Повідомлення відправлено! Ми зв'яжемося з вами найближчим часом.",
        "form-error": "Сталася помилка. Будь ласка, спробуйте ще раз.",
        
        // Footer
        "footer-about": "Професійний автосервіс та продаж автомобілів. Ми гарантуємо якість, надійність та індивідуальний підхід до кожного клієнта. Понад 13 років на ринку автомобільних послуг.",
        "footer-services-title": "Наші послуги",
        "footer-service1": "Технічне обслуговування",
        "footer-service2": "Ремонт двигуна",
        "footer-service3": "Кузовний ремонт",
        "footer-service4": "Електрика та електроніка",
        "footer-service5": "Продаж автомобілів",
        "footer-contact-title": "Контакти",
        "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Пн-Пт: 9:00 - 19:00",
        "footer-rights": "Всі права захищені.",
        
        // Loading
        "loading-text": "Завантаження...",

         "faq": "Питання",
        
        // Hero новые
        "hero-feature1": "Гарантія якості",
        "hero-feature2": "Швидке обслуговування", 
        "hero-feature3": "Доступні ціни",
        "hero-badge-text": "Найкращий автосервіс 2024",
        "contact-btn": "Безкоштовна консультація",
        
        // Process
        "process-title": "Як ми працюємо",
        "process-subtitle": "Прозорий процес роботи від заявки до результату",
        "process-step1-title": "Консультація",
        "process-step1-text": "Ви залишаєте заявку, ми зв'язуємося з вами та уточнюємо деталі",
        "process-step2-title": "Діагностика", 
        "process-step2-text": "Проводимо повну діагностику та складаємо кошторис",
        "process-step3-title": "Ремонт",
        "process-step3-text": "Виконуємо роботи з використанням якісних запчастин",
        "process-step4-title": "Результат",
        "process-step4-text": "Ви отримуєте готовий результат з гарантією якості",
        
        // About
        "experience-text": "років успішної роботи",
        
        // FAQ
        "faq-title": "Часті запитання",
        "faq-subtitle": "Відповіді на найпопулярніші питання про наші послуги",
        "faq1-question": "Як швидко ви можете відремонтувати мій автомобіль?",
        "faq1-answer": "Терміни ремонту залежать від складності робіт. Зазвичай діагностика займає 1-2 години, дрібний ремонт - 1-2 дні, капітальний ремонт - 3-7 днів. Ми завжди намагаємося мінімізувати час простою вашого автомобіля.",
        "faq2-question": "Чи даєте ви гарантію на ремонт?",
        "faq2-answer": "Так, ми надаємо гарантію на всі види робіт та встановлені запчастини. Гарантійний термін залежить від типу ремонту та становить від 6 місяців до 2 років.",
        "faq3-question": "Чи можете ви допомогти з покупкою автомобіля в Німеччині?",
        "faq3-answer": "Звичайно! Ми пропонуємо повний супровід при покупці автомобіля: підбір варіантів, перевірка історії, технічна діагностика, оформлення документів та допомога з реєстрацією.",
        "faq4-question": "Чи працюєте ви з конкретними марками автомобілів?",
        "faq4-answer": "Ми працюємо з усіма марками автомобілів: від Volkswagen, BMW, Mercedes до Audi, Opel, Ford та інших. Наші фахівці мають досвід роботи з різними брендами.",
        
        // CTA
        "cta-title": "Готові почати співпрацю?",
        "cta-text": "Зв'яжіться з нами сьогодні та отримайте безкоштовну консультацію щодо вашого автомобіля",
        "cta-btn-primary": "Отримати консультацію",
        "cta-btn-phone": "Зателефонувати зараз",
        
        // Contact
        "social-title": "Ми в соцмережах",
        "contact-modal-title": "Зв'яжіться з нами"
    }
};

// Current language
let currentLang = 'de';

// Application data
const appData = {
    services: [
        {
            icon: 'bx bxs-wrench',
            titleKey: 'service1-title',
            textKey: 'service1-text'
        },
        {
            icon: 'bx bxs-car-mechanic',
            titleKey: 'service2-title',
            textKey: 'service2-text'
        },
        {
            icon: 'bx bxs-paint',
            titleKey: 'service3-title',
            textKey: 'service3-text'
        },
        {
            icon: 'bx bxs-car-battery',
            titleKey: 'service4-title',
            textKey: 'service4-text'
        },
        {
            icon: 'bx bxs-cog',
            titleKey: 'service5-title',
            textKey: 'service5-text'
        },
        {
            icon: 'bx bxs-tachometer',
            titleKey: 'service6-title',
            textKey: 'service6-text'
        }
    ],
    features: [
        'feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'
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
        {
            icon: 'bx bx-map',
            titleKey: 'address-title',
            textKey: 'address-text'
        },
        {
            icon: 'bx bx-phone',
            titleKey: 'phone-title',
            text: '+49 151 46327 317'
        },
        {
            icon: 'bx bx-envelope',
            titleKey: 'email-title',
            text: 'info@toropauto.de'
        },
        {
            icon: 'bx bx-time',
            titleKey: 'hours-title',
            textKey: 'hours-text'
        }
    ],
    footerLinks: [
        {
            titleKey: 'footer-services-title',
            links: [
                { textKey: 'footer-service1' },
                { textKey: 'footer-service2' },
                { textKey: 'footer-service3' },
                { textKey: 'footer-service4' },
                { textKey: 'footer-service5' }
            ]
        },
        {
            titleKey: 'footer-contact-title',
            links: [
                { icon: 'bx bx-map', textKey: 'footer-address' },
                { icon: 'bx bx-phone', text: '+49 151 46327 317' },
                { icon: 'bx bx-envelope', text: '-' },
                { icon: 'bx bx-time', textKey: 'footer-hours' }
            ]
        }
    ]
};

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-lang attribute
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
    
    // Update current language display
    const currentLangElement = document.querySelector('[data-lang="current-lang"]');
    if (currentLangElement) {
        currentLangElement.textContent = translations[lang]['current-lang'];
    }
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    // Close language dropdown
    document.querySelector('.language-dropdown').classList.remove('active');
    
    // Re-render dynamic content
    renderDynamicContent();
}

// Function to render dynamic content
function renderDynamicContent() {
    // Render services
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = appData.services.map((service, index) => `
            <div class="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${(index + 1) * 100}">
                <div class="service-icon">
                    <i class='${service.icon}'></i>
                </div>
                <h3 data-lang="${service.titleKey}">${translations[currentLang][service.titleKey]}</h3>
                <p data-lang="${service.textKey}">${translations[currentLang][service.textKey]}</p>
                <a href="#contact" class="service-link" data-lang="service-link">${translations[currentLang]['service-link']} <i class='bx bx-right-arrow-alt'></i></a>
            </div>
        `).join('');
    }

    // Render features
    const featuresContainer = document.querySelector('.features');
    if (featuresContainer) {
        featuresContainer.innerHTML = appData.features.map(featureKey => `
            <div class="feature">
                <i class='bx bx-check'></i>
                <span data-lang="${featureKey}">${translations[currentLang][featureKey]}</span>
            </div>
        `).join('');
    }

    // Render cars
    const carsGrid = document.querySelector('.cars-grid');
    if (carsGrid) {
        carsGrid.innerHTML = appData.cars.map((car, index) => `
            <div class="car-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${(index + 1) * 100}">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.title}" loading="lazy">
                    <div class="car-badge" data-lang="${car.badgeKey}">${translations[currentLang][car.badgeKey]}</div>
                </div>
                <div class="car-info">
                    <h3>${car.title}</h3>
                    <p data-lang="${car.textKey}">${translations[currentLang][car.textKey]}</p>
                    <div class="car-features">
                        <div class="car-feature">
                            <i class='bx bxs-gas-pump'></i>
                            <span data-lang="fuel-type">${translations[currentLang]['fuel-type']}: ${car.fuel}</span>
                        </div>
                        <div class="car-feature">
                            <i class='bx bxs-car'></i>
                            <span data-lang="transmission">${translations[currentLang]['transmission']}: ${car.transmission}</span>
                        </div>
                        <div class="car-feature">
                            <i class='bx bx-user'></i>
                            <span data-lang="seats">${translations[currentLang]['seats']}: ${car.seats}</span>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary" data-lang="car-btn">${translations[currentLang]['car-btn']}</a>
                </div>
            </div>
        `).join('');
    }

    // Render testimonials
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = appData.testimonials.map((testimonial, index) => `
            <div class="testimonial-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${(index + 1) * 100}">
                <div class="testimonial-rating">
                    ${'<i class="bx bxs-star"></i>'.repeat(testimonial.rating)}
                </div>
                <div class="testimonial-text" data-lang="${testimonial.textKey}">
                    ${translations[currentLang][testimonial.textKey]}
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
                        ${translations[currentLang]['view-on-maps']} <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Render contact details
    const contactDetails = document.querySelector('.contact-details');
    if (contactDetails) {
        contactDetails.innerHTML = appData.contactDetails.map(detail => `
            <div class="contact-detail">
                <i class='${detail.icon}'></i>
                <div>
                    <h4 data-lang="${detail.titleKey}">${translations[currentLang][detail.titleKey]}</h4>
                    <p ${detail.textKey ? `data-lang="${detail.textKey}"` : ''}>${detail.textKey ? translations[currentLang][detail.textKey] : detail.text}</p>
                </div>
            </div>
        `).join('');
    }

    // Render contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.innerHTML = `
            <div class="form-group">
                <label for="name" data-lang="form-name">${translations[currentLang]['form-name']}</label>
                <input type="text" id="name" class="form-control" placeholder="${translations[currentLang]['form-name']}" required>
            </div>
            <div class="form-group">
                <label for="email" data-lang="form-email">${translations[currentLang]['form-email']}</label>
                <input type="email" id="email" class="form-control" placeholder="${translations[currentLang]['form-email']}" required>
            </div>
            <div class="form-group">
                <label for="phone" data-lang="form-phone">${translations[currentLang]['form-phone']}</label>
                <input type="tel" id="phone" class="form-control" placeholder="${translations[currentLang]['form-phone']}">
            </div>
            <div class="form-group">
                <label for="subject" data-lang="form-subject">${translations[currentLang]['form-subject']}</label>
                <select id="subject" class="form-control" required>
                    <option value="" data-lang="form-subject-default">${translations[currentLang]['form-subject-default']}</option>
                    <option value="service" data-lang="form-subject1">${translations[currentLang]['form-subject1']}</option>
                    <option value="car" data-lang="form-subject2">${translations[currentLang]['form-subject2']}</option>
                    <option value="parts" data-lang="form-subject3">${translations[currentLang]['form-subject3']}</option>
                    <option value="other" data-lang="form-subject4">${translations[currentLang]['form-subject4']}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message" data-lang="form-message">${translations[currentLang]['form-message']}</label>
                <textarea id="message" class="form-control" placeholder="${translations[currentLang]['form-message']}" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" data-lang="form-submit">${translations[currentLang]['form-submit']}</button>
        `;
    }

    // Render footer
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        footerContent.innerHTML = `
            <div class="footer-column">
                <h3>Torop Auto</h3>
                <p data-lang="footer-about">${translations[currentLang]['footer-about']}</p>
                <div class="social-links">
                    <a href="https://www.tiktok.com/@torop.auto?_t=ZM-90zed9YJTZY&_r=1" target="_blank"><i class='bx bxl-tiktok'></i></a>
                    <a href="https://www.instagram.com/toropauto?igsh=MThwcjdoeW5kbnNj" target="_blank"><i class='bx bxl-instagram'></i></a>
                
                </div>
            </div>
            ${appData.footerLinks.map(column => `
                <div class="footer-column">
                    <h3 data-lang="${column.titleKey}">${translations[currentLang][column.titleKey]}</h3>
                    <ul class="footer-links">
                        ${column.links.map(link => `
                            <li>
                                <a href="#">
                                    ${link.icon ? `<i class='${link.icon}'></i>` : '<i class="bx bx-chevron-right"></i>'}
                                    <span ${link.textKey ? `data-lang="${link.textKey}"` : ''}>${link.textKey ? translations[currentLang][link.textKey] : link.text}</span>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        `;
    }
}

// Function to send message to Telegram
async function sendToTelegram(formData) {
    const message = `
📨 Новое сообщение с сайта Torop Auto

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📞 Телефон: ${formData.phone}
🎯 Тема: ${formData.subject}
💬 Сообщение:
${formData.message}

🌐 Язык: ${currentLang}
🕒 Время: ${new Date().toLocaleString()}
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
}

// Function to handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
        showFormMessage('error', translations[currentLang]['form-error']);
        return;
    }
    
    // Show loading state
    submitBtn.innerHTML = '<i class="bx bx-loader bx-spin"></i> Отправка...';
    submitBtn.disabled = true;
    form.classList.add('form-loading');
    
    try {
        // Send to Telegram
        const telegramSuccess = await sendToTelegram(formData);
        
        if (telegramSuccess) {
            showFormMessage('success', translations[currentLang]['form-success']);
            form.reset();
        } else {
            showFormMessage('error', translations[currentLang]['form-error']);
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage('error', translations[currentLang]['form-error']);
    } finally {
        // Reset loading state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.classList.remove('form-loading');
    }
}

// Function to show form messages
function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.innerHTML = `
        <i class='bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'}'></i>
        ${message}
    `;
    
    // Insert before form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('mobileModal');
    const mobileBtn = document.getElementById('mobileBtn');
    const closeBtn = document.getElementById('mobileModalClose');
    const closeBtn2 = document.getElementById('modalCloseBtn');
    
    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    mobileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
    
    closeBtn.addEventListener('click', closeModal);
    closeBtn2.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Scroll to top button
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollTop > 300) {
        scrollButton.classList.add('active');
    } else {
        scrollButton.classList.remove('active');
    }
});

// Mobile menu functionality
function initMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            menuIcon.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav') && !e.target.closest('.menu-icon')) {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
}

// Language switcher functionality
function initLanguageSwitcher() {
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                
                // Save language preference
                localStorage.setItem('preferred-language', lang);
            });
        });
        
        // Close language dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-switcher')) {
                languageDropdown.classList.remove('active');
            }
        });
    }
}

// Scroll to top functionality
function initScrollToTop() {
    document.querySelector('.scroll-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animated counter for stats
function initCounterAnimation() {
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

    // Start counter animation when stats section is in view
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
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Prevent horizontal scroll
function preventHorizontalScroll() {
    document.body.style.overflowX = 'hidden';
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Set initial language
    changeLanguage(currentLang);
    
    // Initialize all modules
    initMobileMenu();
    initLanguageSwitcher();
    initScrollToTop();
    initCounterAnimation();
    initSmoothScroll();
    initModal();
    
    // Form submission
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'contactForm') {
            handleFormSubmit(e);
        }
    });
    
    // Prevent horizontal scroll
    preventHorizontalScroll();
    window.addEventListener('resize', preventHorizontalScroll);
    
    // Header hide/show on scroll
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const header = document.querySelector('header');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            if (currentScrollY > lastScrollY) {
                header.style.transform = 'translateY(-100%)';
                header.style.opacity = '0';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }
        } else {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
    window.addEventListener('load', updateHeader);
});

// Добавьте эти функции в JavaScript
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

function initContactModal() {
    const modal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactHeaderBtn');
    const closeBtn = document.getElementById('contactModalClose');
    
    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Обновите функцию DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    
    // Добавьте новые инициализации
    initFAQ();
    initContactModal();
    
    // Обновите статистику
    appData.stats = [
        { count: 150, textKey: 'stat1' },
        { count: 500, textKey: 'stat2' }, 
        { count: 1200, textKey: 'stat3' },
        { count: 13, textKey: 'stat4' }
    ];
});