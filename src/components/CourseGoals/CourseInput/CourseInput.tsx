import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

interface AddGoal {
  onAddGoal: (goal: string) => void;
}

/* interface FormControlI {
  invalid: boolean;
}

const FormControl = styled.div<FormControlI>`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
 */
const CourseInput: FC<AddGoal> = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
      return;
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${
          !isValid ? styles.invalid : ''
        } `}
      >
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{ borderColor: !isValid ? 'red' : 'black' }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
