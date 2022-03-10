import { CoursePart } from '../types';

interface PartProps {
  part: CoursePart;
}

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part }: PartProps) => {
  switch (part.type) {
    case 'normal':
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>{part.description}</p>
        </div>
      );
    case 'submission':
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>{part.description}</p>
          <a href={part.exerciseSubmissionLink}></a>
        </div>
      );
    case 'groupProject':
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>project exercises: {part.groupProjectCount}</p>
        </div>
      );
    case 'special':
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>{part.description}</p>
          <p>required skils: {part.requirements.join(', ')}</p>
        </div>
      );

    default:
      return assertNever(part);
  }
};

export default Part;
