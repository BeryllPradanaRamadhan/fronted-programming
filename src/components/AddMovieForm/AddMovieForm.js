import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../ui/button/Button";

function AddMoviesForm(props) {
  // desctrucing props
  const { movies, setMovies } = props;

  // Membuat state title
  const [title, setTitle] = useState("");
  //   Membuat state data
  const [date, setDate] = useState("");

  // Membuat state  title dan data error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  // Membuat fungsi HandTitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDate(e) {
    setDate(e.target.value);
  }
  // Handle form ketika disubmit
  function handleSumbit(e) {
    e.preventDefault();

    // Jika Title kosong, maka set error title true
    if (title === "") {
      setIsTitleError(true);
    } 
    else if (date === "") {
      setIsDateError(true);
    }
    
    else {
      // Siapkan movie yang ingin di input
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      setMovies([...movies, movie]);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSumbit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                onChange={handleTitle}
                id="title"
                className={styles.form__input}
                type="text"
                value={title}
              />
              {/* 
              Jika error title true: muncul error
              Jika tidak, munculkan string kosong
              */}
              {isTitleError && <Alert>Title Wajib Isi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                onChange={handleDate}
                id="date"
                className={styles.form__input}
                type="text"
                value={date}
              />
              {isDateError && <Alert>Date Wajib Isi</Alert>}
            </div>
           <div className={styles.form__group}>
              <label htmlFor="Gambar" className={styles.form__label}>
                Link Gambar
              </label>
              <input type="text" 
              className={styles.form__input}/>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="" className={styles.form__label}>Type Movie</label>
              <select className={styles.form__input} name="" id="">
                <option value="">Action</option>
                <option value="">Horror</option>
                <option value="">Comedy</option>
                <option value="">Dll</option>
              </select>
            </div>
            <div>
              <Button variant="primmary" full>Watch</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMoviesForm;
