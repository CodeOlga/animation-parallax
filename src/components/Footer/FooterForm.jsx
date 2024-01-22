import { useState } from "react";

import Icon from "../Icon/Icon";

const FooterForm = () => {
  const [state, setState] = useState('');

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState('');
  }

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <p>onlyfans oxxxymiron</p>
      <div className="footer-form__email">
        <input
          type="email"
          name="email"
          value={state}
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <button className="footer-form__button" type="submit">
        <span>Sign in</span>
        <Icon name="arrow-right" />
      </button>
    </form>
  )
}

export default FooterForm;