import { faker } from "@faker-js/faker";
import { ResetButton, Result, UserTyping } from "./components";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercent } from "./utils/helpers";
function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();
  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTyping
          userInput={typed}
          className={"absolute inset-0"}
          words={words}
        />
      </WordsContainer>
      <ResetButton
        onReset={restart}
        className={"mx-auto mt-10 text-slate-500"}
      />
      {state === "finish" && <Result
        accuracyPercentage={calculateAccuracyPercent(errors, totalTyped)}
        errors={errors}
        total={totalTyped}
        className={`mt-10`}
      />}
      
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
