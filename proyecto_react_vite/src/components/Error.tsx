export type ErrorComponentProps = {
  errors?: string[]
}


function showErrors(errors: string[] | undefined) : JSX.Element{
  if (Array.isArray(errors)){
    return (
      <>
      {errors.map((error, index) => (<p key={index}>{error}</p>))}
      </>
    )
  }
  else{
    return <p>Hubo un error al cargar los datos.</p>
  }
}

const Error = function (props: ErrorComponentProps): JSX.Element {
  return (
    <>
      <h2 className="subheader">Ooops!</h2>
      <div id="errors-container">
        {showErrors(props.errors)}
      </div>
      
    </>
  );
}

export default Error;