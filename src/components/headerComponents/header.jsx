import styles from './Header.module.scss';

const header = () => {
    return (
        <header>
            <h1>Family Kitchen</h1>
            <div className={styles.navBar}>
                <a href="/pantry">Pantry</a>
                <a href="/cookbook">Cookbook</a>
            </div>
        </header>
    )
}

export default header;