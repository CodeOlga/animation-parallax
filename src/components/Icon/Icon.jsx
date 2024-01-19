const Icon = ({ name, width, height }) => (
  // шлях до іконки у спрайті
  <svg className={`icon icon-${name}`} style={{ width, height }}>
    <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`}>

    </use>
  </svg>
);

export default Icon;