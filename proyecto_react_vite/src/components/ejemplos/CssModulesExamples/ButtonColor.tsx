import styles from './ButtonColor.module.css';

export default function ButtonColor() {
  return (
    <div className={styles.componentContainer}>
      <span>Componente funcional usando CSSModules en react</span>
      <button className={styles.buttonColor}>Boton de prueba</button>
    </div>
  )
}