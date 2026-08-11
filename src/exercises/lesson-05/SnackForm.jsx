import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  const isEditing = Boolean(editingSnack);
  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(String(editingSnack.rating));
    } else {
      setName('');
      setRating('');
    }

    setTouched({
      name: false,
      rating: false,
    });
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateName() || !validateRating()) {
      setTouched({
        name: true,
        rating: true,
      });

      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({
        name: false,
        rating: false,
      });
      //e.target.reset();
    }
  }
  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }
  function getNameError() {
    return touched.name && !validateName() ? 'Snack name is required!' : '';
  }

  function getRatingError() {
    return touched.rating && !validateRating() ? 'Please select a rating' : '';
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          // defaultValue={isEditing ? editingSnack.name : ''}

          className={styles['field-input']}
          placeholder="Enter snack name"
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          //  defaultValue={isEditing ? editingSnack.rating : ''}

          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          disabled={!(validateName() && validateRating())}
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
