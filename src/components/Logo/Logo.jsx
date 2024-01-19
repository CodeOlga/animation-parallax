import { Link } from 'react-router-dom';

import logo from '../../images/logo.webp';

const Logo = () => (
  <div className='logo'>
    <Link to="/">
      <img src={logo} alt="oxxxymiron" />
    </Link>
  </div>
)

export default Logo;