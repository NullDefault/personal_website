import { useRef, useEffect } from "react";
import classNames from "classnames";
import { spring, value, chain, delay } from "popmotion";
import { Box } from "@chakra-ui/react";

// prettier-ignore
const glyphs = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ', 'ー',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
    'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
    'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'バ', 'ビ', 'ブ', 'ベ', 'ボ',
    'パ', 'ピ', 'プ', 'ペ', 'ポ',
];

const CharType = {
  Glyph: "glyph",
  Value: "value",
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

const CyberpunkText = ({
  text,
  start = true,
  delay: startDelay = 0,
  className,
  ...rest
}) => {
  const output = useRef([{ type: CharType.Glyph, value: "" }]);
  const container = useRef();

  useEffect(() => {
    const containerInstance = container.current;
    const content = text.split("");
    let animation;

    const renderOutput = () => {
      const characterMap = output.current.map((item) => {
        return `<span class="decoder-text__${item.type}">${item.value}</span>`;
      });
      containerInstance.innerHTML = characterMap.join("");
    };

    const springValue = value(0, (position) => {
      output.current = shuffle(content, output.current, position);
      renderOutput();
    });

    if (start && !animation) {
      animation = chain(
        delay(startDelay),
        spring({
          from: 0,
          to: content.length,
          stiffness: 5,
          damping: 3,
        })
      ).start(springValue);
    }

    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [start, startDelay, text]);

  return (
    <span className={classNames("decoder-text", className)} {...rest}>
      <Box
        fontWeight="bold"
        w={["80vw", "100%"]}
        fontSize={38}
      >
        <span aria-hidden className="decoder-text__content" ref={container} />
      </Box>
    </span>
  );
};

export default CyberpunkText;
