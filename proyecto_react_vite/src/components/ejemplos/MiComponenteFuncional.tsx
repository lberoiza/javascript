import { useParams } from 'react-router-dom';


// Componente Funcional
// Se usa para representar componentes mas simples
// Que son componentes que no tienen estado
const MiComponenteFuncional = function (): JSX.Element {
  const { receta_title } = useParams<{ receta_title: string }>();
  const details = receta_title ? (<h5><strong>Datos del la receta: {receta_title}</strong></h5>) : null;
  return (
    <>
      <h4>Soy un Componente funcional</h4>
      {details}
    </>
  );
}

export default MiComponenteFuncional;