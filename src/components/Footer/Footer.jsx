import "./Footer.css";

export const Footer = () => {
  return (
    <section className="section-footer">
      <div className="footer-subscribe-container">
        <h4 className="footer-subscribe-title">get involved</h4>
        <div>
          <input
            className="footer-subscribe-input"
            type="email"
            placeholder="email@address"
          />
          <button className="footer-button button">subscribe</button>
        </div>
      </div>
      <div className="footer-contacts-container"></div>
    </section>
  );
};
