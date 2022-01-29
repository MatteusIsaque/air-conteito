import styles from './../../styles/global/circle.module.scss'

type position = {
  left: string
  top: string
  text: string
}

export default function Circle({ left, top, text }: position) {


  return (
    <div className={styles.main} style={{ left: left, top: top }}>
      <div className={styles.div}>
        <div className={styles.button} onMouseOver={() => { alert('passou') }} id="button" />
        <div className={styles.divText}>
          {text}
        </div>
      </div>
    </div>
  )
}