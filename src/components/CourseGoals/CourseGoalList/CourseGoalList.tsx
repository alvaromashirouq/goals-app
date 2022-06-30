import React, { FC } from 'react';

import CourseGoalItem, { GoalItem } from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

export interface GoalList {
  items: Omit<GoalItem, 'onDelete'>[];
  onDeleteItem: (id: string) => void;
}

const CourseGoalList: FC<GoalList> = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
