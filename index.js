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
        "car1-text": "Комфортный и надежный седан с экономичным двигателем и современным оснащением. Идеален для города и дальних поездок.",
        "car2-text": "Просторный кроссовер с полным приводом, идеальный для семьи и путешествий. Большой багажник и экономичный расход.",
        "car3-text": "Мощный внедорожник с просторным салоном и передовыми технологиями безопасности. Отличный выбор для большой семьи.",
        "fuel-type": "Бензин",
        "transmission": "Автомат",
        "seats": "5 мест",
        "car-btn": "Узнать больше",
        
        // Platforms
        "platforms-title": "Больше автомобилей на популярных площадках",
        "platforms-subtitle": "Ищете больше вариантов? Посмотрите наши предложения на ведущих автомобильных площадках",
        "platform-kleinanzeigen": "Kleinanzeigen",
        "platform-mobile": "mobile.de",
        
        // Testimonials
        "testimonials-title": "Отзывы клиентов",
        "testimonials-subtitle": "Что говорят наши клиенты о качестве наших услуг",
        "testimonial1": "Отличный сервис! Привезла свою Toyota на ТО, сделали все быстро и качественно. Персонал вежливый, цены адекватные. Теперь только сюда!",
        "testimonial2": "Купил у них Honda CR-V, полностью доволен покупкой. Машина в отличном состоянии, всю документацию оформили быстро. Рекомендую!",
        "testimonial3": "Делал капитальный ремонт двигателя на своем Ford. Работу выполнили качественно, в срок и по разумной цене. Спасибо специалистам Torop Auto!",
        "testimonial1-owner": "Владелец Toyota Camry",
        "testimonial2-owner": "Владелец Honda CR-V",
        "testimonial3-owner": "Владелец Ford Focus",
        
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
        "hours-text": "Пн-Пт: 9:00 - 19:00<br>Сб: 10:00 - 17:00<br>Вс: выходной",
        
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
        
        // Footer
        "footer-about": "Профессиональный автосервис и продажа автомобилей. Мы гарантируем качество, надежность и индивидуальный подход к каждому клиенту. Более 15 лет на рынке автомобильных услуг.",
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
        "loading-text": "Загрузка..."
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
        "car1-text": "Komfortable und zuverlässige Limousine mit sparsamem Motor und moderner Ausstattung. Ideal für Stadt und lange Fahrten.",
        "car2-text": "Geräumiger SUV mit Allradantrieb, ideal für Familie und Reisen. Großer Kofferraum und sparsamer Verbrauch.",
        "car3-text": "Leistungsstarker Geländewagen mit geräumigem Innenraum und modernster Sicherheitstechnik. Perfekte Wahl für große Familien.",
        "fuel-type": "Benzin",
        "transmission": "Automatik",
        "seats": "5 Sitze",
        "car-btn": "Mehr erfahren",
        
        // Platforms
        "platforms-title": "Weitere Autos auf beliebten Plattformen",
        "platforms-subtitle": "Suchen Sie nach mehr Optionen? Sehen Sie sich unsere Angebote auf führenden Autoplattformen an",
        "platform-kleinanzeigen": "Kleinanzeigen",
        "platform-mobile": "mobile.de",
        
        // Testimonials
        "testimonials-title": "Kundenbewertungen",
        "testimonials-subtitle": "Was unsere Kunden über die Qualität unserer Dienstleistungen sagen",
        "testimonial1": "Ausgezeichneter Service! Habe meinen Toyota zur Wartung gebracht, alles wurde schnell und qualitativ hochwertig erledigt. Das Personal ist höflich, die Preise angemessen. Jetzt nur noch hier!",
        "testimonial2": "Habe bei ihnen einen Honda CR-V gekauft, vollkommen zufrieden mit dem Kauf. Das Auto ist in ausgezeichnetem Zustand, alle Dokumente wurden schnell bearbeitet. Empfehle es weiter!",
        "testimonial3": "Habe eine Motorüberholung an meinem Ford durchführen lassen. Die Arbeit wurde qualitativ hochwertig, termingerecht und zu einem vernünftigen Preis durchgeführt. Vielen Dank an die Spezialisten von Torop Auto!",
        "testimonial1-owner": "Besitzer Toyota Camry",
        "testimonial2-owner": "Besitzer Honda CR-V",
        "testimonial3-owner": "Besitzer Ford Focus",
        
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
        "hours-text": "Mo-Fr: 9:00 - 19:00<br>Sa: 10:00 - 17:00<br>So: geschlossen",
        
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
        
        // Footer
        "footer-about": "Professionelle Autowerkstatt und Autoverkauf. Wir garantieren Qualität, Zuverlässigkeit und individuelle Betreuung für jeden Kunden. Über 15 Jahre Erfahrung im Automobilservice.",
        "footer-services-title": "Unsere Dienstleistungen",
        "footer-service1": "Wartung",
        "footer-service2": "Motorreparatur",
        "footer-service3": "Karosseriereparatur",
        "footer-service4": "Elektrik und Elektronik",
        "footer-service5": "Autoverkauf",
        "footer-contact-title": "Kontakte",
        "footer-address": "Hohlstraße 43, 55743 Idar-Oberstein",
        "footer-hours": "Mo-Fr: 9:00 - 19:00",
        "footer-rights": "Alle Rechte vorbehalten.",
        
        // Loading
        "loading-text": "Laden..."
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
        "car1-text": "Комфортний та надійний седан з економічним двигуном та сучасним оснащенням. Ідеальний для міста та далеких поїздок.",
        "car2-text": "Просторий кросовер з повним приводом, ідеальний для сім'ї та подорожей. Великий багажник та економічна витрата.",
        "car3-text": "Потужний позашляховик з просторим салоном та передовими технологіями безпеки. Відмінний вибір для великої сім'ї.",
        "fuel-type": "Бензин",
        "transmission": "Автомат",
        "seats": "5 місць",
        "car-btn": "Дізнатися більше",
        
        // Platforms
        "platforms-title": "Більше автомобілів на популярних майданчиках",
        "platforms-subtitle": "Шукаєте більше варіантів? Перегляньте наші пропозиції на провідних автомобільних майданчиках",
        "platform-kleinanzeigen": "Kleinanzeigen",
        "platform-mobile": "mobile.de",
        
        // Testimonials
        "testimonials-title": "Відгуки клієнтів",
        "testimonials-subtitle": "Що кажуть наші клієнти про якість наших послуг",
        "testimonial1": "Відмінний сервіс! Привезла свою Toyota на ТО, зробили все швидко та якісно. Персонал ввічливий, ціни адекватні. Тепер тільки сюди!",
        "testimonial2": "Купив у них Honda CR-V, повністю задоволений покупкою. Машина в відмінному стані, всю документацію оформили швидко. Рекомендую!",
        "testimonial3": "Робив капітальний ремонт двигуна на своєму Ford. Роботу виконали якісно, в строк та за розумною ціною. Дякую фахівцям Torop Auto!",
        "testimonial1-owner": "Власник Toyota Camry",
        "testimonial2-owner": "Власник Honda CR-V",
        "testimonial3-owner": "Власник Ford Focus",
        
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
        "hours-text": "Пн-Пт: 9:00 - 19:00<br>Сб: 10:00 - 17:00<br>Нд: вихідний",
        
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
        
        // Footer
        "footer-about": "Професійний автосервіс та продаж автомобілів. Ми гарантуємо якість, надійність та індивідуальний підхід до кожного клієнта. Понад 15 років на ринку автомобільних послуг.",
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
        "loading-text": "Завантаження..."
    }
};

// Current language
let currentLang = 'ru';

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
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            badgeKey: 'car-badge1',
            title: 'Toyota Camry 2022',
            textKey: 'car1-text',
            price: '$25,000'
        },
        {
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            badgeKey: 'car-badge2',
            title: 'Honda CR-V 2021',
            textKey: 'car2-text',
            price: '$28,500'
        },
        {
            image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            badgeKey: 'car-badge3',
            title: 'Ford Explorer 2020',
            textKey: 'car3-text',
            price: '$32,000'
        }
    ],
    testimonials: [
        {
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            textKey: 'testimonial1',
            name: 'Анна Иванова',
            ownerKey: 'testimonial1-owner'
        },
        {
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            textKey: 'testimonial2',
            name: 'Дмитрий Петров',
            ownerKey: 'testimonial2-owner'
        },
        {
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            textKey: 'testimonial3',
            name: 'Сергей Козлов',
            ownerKey: 'testimonial3-owner'
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
            text: '+49 6781 1234567'
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
                { icon: 'bx bx-phone', text: '+49 6781 1234567' },
                { icon: 'bx bx-envelope', text: 'info@toropauto.de' },
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
                <a href="#" class="service-link" data-lang="service-link">${translations[currentLang]['service-link']} <i class='bx bx-right-arrow-alt'></i></a>
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
                    <img src="${car.image}" alt="${car.title}">
                    <div class="car-badge" data-lang="${car.badgeKey}">${translations[currentLang][car.badgeKey]}</div>
                </div>
                <div class="car-info">
                    <h3>${car.title}</h3>
                    <p data-lang="${car.textKey}">${translations[currentLang][car.textKey]}</p>
                    <div class="car-features">
                        <div class="car-feature">
                            <i class='bx bxs-gas-pump'></i>
                            <span data-lang="fuel-type">${translations[currentLang]['fuel-type']}</span>
                        </div>
                        <div class="car-feature">
                            <i class='bx bxs-car'></i>
                            <span data-lang="transmission">${translations[currentLang]['transmission']}</span>
                        </div>
                        <div class="car-feature">
                            <i class='bx bx-user'></i>
                            <span data-lang="seats">${translations[currentLang]['seats']}</span>
                        </div>
                    </div>
                    <div class="car-price">${car.price}</div>
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
                <div class="testimonial-text" data-lang="${testimonial.textKey}">
                    ${translations[currentLang][testimonial.textKey]}
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p data-lang="${testimonial.ownerKey}">${translations[currentLang][testimonial.ownerKey]}</p>
                    </div>
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
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-youtube'></i></a>
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

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.getElementById('navMenu');
    
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
});

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
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
            });
        });
        
        // Close language dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-switcher')) {
                languageDropdown.classList.remove('active');
            }
        });
    }
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'contactForm') {
            e.preventDefault();
            const messages = {
                ru: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
                de: 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.',
                uk: 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.'
            };
            alert(messages[currentLang]);
            e.target.reset();
        }
    });
});

// Scroll to top functionality
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animated counter for stats
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
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

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    changeLanguage(currentLang);
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
    // Smooth scrolling for anchor links
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
});