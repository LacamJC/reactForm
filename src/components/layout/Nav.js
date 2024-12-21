import { Link } from "react-router-dom"
import Logoff from "../events/Logoff"
import styles from '../../scss/components/Nav.module.css'
function Nav(){

    const user = JSON.parse(localStorage.getItem('Data'))


    return(
        <>
      <header>
        
        {user ? (<h1>Logado</h1>) : (<h1><Link to="/login">Logar</Link>: | Cadastre-se</h1>)}
        <Logoff/>
       
      </header>
      <nav className={styles.nav_menu}>
          <input type="checkbox" className={styles.check}></input>
          <ul className={styles.nav_menu__list}>
                <li className={styles.nav_menu__item}>
                  <Link to="/" className={styles.nav_menu__link} aria-current="page">Home</Link>
                </li>
                <li className={styles.nav_menu__item}>
                <Link to="/CadastrarUsuario" className={styles.nav_menu__link} >Cadastrar usuarios</Link>
                </li>
                <li className={styles.nav_menu__item}>
                  <Link className={styles.nav_menu__link} to="/ListaUsuario">Lista de usuarios</Link>
                </li>
                <li className={styles.nav_menu__item}>
                  <Link className={styles.nav_menu__link} to="/Login">Login</Link>
                </li>
          </ul>
        </nav>
        </>
    )
}

export default Nav