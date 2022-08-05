import Caret from "./Caret";
import cn from 'classnames'

type PropType = {
  userInput: string;
  className?: string;
  words: string;
};

const UserTyping = ({ userInput, className, words }: PropType) => {
  const typedCharacters = userInput.split("");
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <Caret />
    </div>
  );
};



const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {

    const isCorrect = actual === expected;
    const isWhitespace = expected === " "
  return <span className={cn({
    "text-red-500" : !isCorrect && !isWhitespace,
    "text-primary-400" : isCorrect && !isWhitespace,
    "bg-red-500/50":!isCorrect && isWhitespace
  })}>{expected}</span>;
};

export default UserTyping;
