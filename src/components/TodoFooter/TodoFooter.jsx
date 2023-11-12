import styles from "./TodoFooter.module.css";
const TodoFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="w-100 h-100 d-flex">
          <div className="w-25 h-100 d-flex justify-content-start ms-5 align-items-center">
          <span className={styles.logo}><a href="#"><img src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png" width="35px" height="35px"></img></a></span>
          <span className={styles.logo}><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="30px" height="30px" ></img></a></span>
          </div>
          <div className={styles.div}><span className={styles.span}>Made with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" width="20px" height="20px"></img> by Sateesh Goud &copy;2023</span></div>
      </div>
    </footer>
  );
};
export default TodoFooter;
