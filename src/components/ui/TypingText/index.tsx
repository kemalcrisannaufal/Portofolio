/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

type Proptypes = {
  words: string[];
  boxClassName?: string;
  textClassName?: string;
};

const TypingText = (props: Proptypes) => {
  const { words, boxClassName, textClassName } = props;
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCharIndex(charIndex - 1);
        setText(currentWord.substring(0, charIndex + 1));
      } else {
        setCharIndex(charIndex + 1);
        setText(currentWord.substring(0, charIndex + 1));
      }

      if (charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        if (wordIndex === words.length - 1) {
          setWordIndex(0);
        } else {
          setWordIndex(wordIndex + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className={`w-max flex items-center ${boxClassName}`}>
      <p className={`${textClassName}`}>{text}</p>
    </div>
  );
};

export default TypingText;
