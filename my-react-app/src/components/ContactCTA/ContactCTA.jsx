function ContactCTA({ title = 'Готовы подобрать автомобиль?', text = 'Оставьте заявку — мы уточним бюджет, задачи и предложим лучшие варианты.' }) {
  return (
    <section className="contact-cta" id="contacts">
      <div>
        <span className="eyebrow">Связаться с Torop Auto</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="contact-cta__actions">
        <a className="btn" href="tel:+4915146327317">Позвонить</a>
        <a className="btn btn--ghost" href="https://t.me/toropauto">Написать в Telegram</a>
        <a className="btn btn--light" href="mailto:info@toropauto.de?subject=Заявка%20на%20подбор%20автомобиля">Оставить заявку</a>
      </div>
    </section>
  );
}

export default ContactCTA;
