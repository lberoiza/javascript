import { NavLink } from "react-router-dom";

export type SliderProps = {
  isBlog?: boolean
};

function Slider(props: SliderProps): JSX.Element {
  const className = props.isBlog ? "slider-small" : "slider-big";

  return (
    <div id="slider" className={className}>
      <h1>Bienvenido al master der ReactJS</h1>
      {!props.isBlog && <NavLink to="/blog" className="btn-white">Ir al blog</NavLink>}
    
    </div>
  );
}

export default Slider;