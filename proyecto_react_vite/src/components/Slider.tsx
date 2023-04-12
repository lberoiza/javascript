import { NavLink } from "react-router-dom";

export type SliderProps = {
  title: string,
  isBlog?: boolean
};

function Slider(props: SliderProps): JSX.Element {
  const className = props.isBlog ? "slider-small" : "slider-big";

  return (
    <div id="slider" className={className}>
      <h1>{props.title}</h1>
      {!props.isBlog && <NavLink to="/blog" className="btn-white">Ir al blog</NavLink>}
    
    </div>
  );
}

export default Slider;