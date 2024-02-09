import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";

export type SliderProps = {
  title: string,
  isHome?: boolean
};

function Slider(props: SliderProps): JSX.Element {
  const navigate = useNavigateWithTransitions();
  const className = props.isHome ? "slider-big" : "slider-small";

  return (
    <div id="slider" className={className}>
      <h1>{props.title}</h1>
      {props.isHome && <a onClick={() => navigate("/blog")} className="linkWithTransition btn-white">Ir al blog</a>}
    
    </div>
  );
}

export default Slider;