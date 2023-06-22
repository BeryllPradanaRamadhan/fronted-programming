import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movieSlice";

function AddMovieForm() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const initialValues = {
    title: "",
    date: "",
    poster: "",
    type: "",
  };

  const [values, setValues] = useState(initialValues);

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    if (title === "") {
      setIsTitleError(false);
      return false;
    } else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
      return false;
    } else if (poster === "") {
      setIsDateError(false);
      isPosterError(true);
      return false;
    } else if (type === "") {
      setIsPosterError(false);
      setIsTypeError(true);
      return false;
    } else {
      return true;
    }
  };

  const submitMovie = () => {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      poster: poster,
      type: type,
    };

    dispatch(addMovie(movie));
    navigation("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && submitMovie();
  };

  const { title, date, poster, type } = values;

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
          <form onSubmit={handleSubmit}>
            <div className={styles.form__content}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className={styles.form__input}
                onChange={handleInputChange}
                value={title}
              />
              {isTitleError && <Alert>Title wajib diisi</Alert>}
            </div>
            <div className={styles.form__content}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                name="date"
                type="text"
                className={styles.form__input}
                onChange={handleInputChange}
                value={date}
              />
              {isDateError && <Alert>Date wajib diisi</Alert>}
            </div>
            <div className={styles.form__content}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                id="poster"
                name="poster"
                type="text"
                className={styles.form__input}
                onChange={handleInputChange}
                value={poster}
              />
              {isPosterError && <Alert>Poster wajib diisi</Alert>}
            </div>
            <div className={styles.form__content}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                name="type"
                className={styles.form__input}
                onChange={handleInputChange}
                value={type}
              >
                <option value="">Pilih</option>
                <option value="Action">Action</option>
                <option value="thriller">Thriller</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
                <option value="mystery">Mystery</option>
              </select>
              {isTypeError && <Alert>Type wajib diisi</Alert>}
            </div>
            <div>
              <Button variant="primary" full>
                Add Movie
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
