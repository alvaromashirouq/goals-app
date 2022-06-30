import React, { FC, PropsWithChildren } from 'react';

import './CourseGoalItem.css';
export interface GoalItem {
  id: string;
  text?: string;
  onDelete: (id: string) => void;
}

const CourseGoalItem: FC<PropsWithChildren & GoalItem> = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
