import styles from "./AddMovieForm.module.css";

function AddMoviesForm() {
    return (
        <div className={styles.container}>
           <section className={styles.AddMoviesForm}>
            <div className={styles.AddMoviesForm__left}>
                <img className={styles.AddMoviesForm__image} src="https:///picsum.photos/600/400" alt="placeholder" />
            </div>
            <div className={styles.AddMoviesForm__right}>
                <h2 className={styles.title1}>Add Movie</h2>
            <form >
                <div className={styles.title}>
                    <label htmlFor="title" className={styles.labeltitle}>Title</label> <br />
                    <input type="text" id="title" name="title" className={styles.inputtitle}/>
                </div>
                <div>
                     <label htmlFor="year" className={styles.labelyear1}>Year</label> <br />
                     <input type="text" id="year" name="year" className={styles.inputyear}/>
                </div>
                <br />
                <button className={styles.button}>Submit</button>
            </form>

            </div>
           </section>
        </div>
    );
}

export default AddMoviesForm;