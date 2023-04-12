import { NavLink } from "react-router-dom";

export type SliderProps = {
  title: string,
  isHome?: boolean
};

function Slider(props: SliderProps): JSX.Element {
  const className = props.isHome ? "slider-big" : "slider-small";

  return (
    <div id="slider" className={className}>
      <h1>{props.title}</h1>
      {props.isHome && <NavLink to="/blog" className="btn-white">Ir al blog</NavLink>}
    
    </div>
  );
}

export default Slider;