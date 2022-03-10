type CoursePart = {
  name: string;
  exerciseCount: number;
};

interface ContentProps {
  courses: CoursePart[];
}

const Content = ({ courses }: ContentProps) => {
  return (
    <div>
      {courses.map((course, index) => (
        <p key={index}>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
