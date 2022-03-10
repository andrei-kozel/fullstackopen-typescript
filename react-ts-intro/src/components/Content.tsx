import { CoursePart } from '../types';
import Part from './Part';

interface ContentProps {
  courses: CoursePart[];
}

const Content = ({ courses }: ContentProps) => {
  return (
    <div>
      {courses.map((course: CoursePart, index: number) => (
        <Part key={index} part={course} />
      ))}
    </div>
  );
};

export default Content;
