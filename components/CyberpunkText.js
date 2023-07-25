import { useRef, useEffect } from "react";
import classNames from "classnames";
import { spring, value, chain, delay } from "popmotion";
import { Box } from "@chakra-ui/react";

// prettier-ignore
const glyphs = [
  'ア', 'ワ', 'ツ', 'ニ', 'ヨ',
  'א', 'ת', 'ק', 'ר', 'ע',
  'А', 'Ж', 'З', 'Ю', 'Я',
  'マ', 'ユ', 'ラ', 'ヒ', 'ホ',
  'ס', 'נ', 'ט', 'כ', 'ח',
  'Α', 'Ψ', 'Ω', 'Γ', 'Φ',
  'Б', 'Ш', 'Щ', 'Ф', 'Ц',
  'リ', 'ヱ', 'ム', 'ヘ', 'モ',
  'ך', 'ם', 'ן', 'ף', 'ץ',
  'Ъ', 'Э', 'Ё', 'Ї', 'І'
];

const CharType = {
  Glyph: "glyph",
  Value: "value",
};

const ANIMATION_STIFFNESS = 4.2;
const ANIMATION_DAMPING = 4.2;
const GLYPH_SHOW_RATIO = 0.42;

function glyphShuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < GLYPH_SHOW_RATIO) {
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
      output.current = glyphShuffle(content, output.current, position);
      renderOutput();
    });

    if (start && !animation) {
      animation = chain(
        delay(startDelay),
        spring({
          from: 0,
          to: content.length,
          stiffness: ANIMATION_STIFFNESS,
          damping: ANIMATION_DAMPING,
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
      <Box fontWeight="bold" w={["80vw", "100%"]} fontSize={42} letterSpacing="wider">
        <span aria-hidden className="decoder-text__content" ref={container} />
      </Box>
    </span>
  );
};

export default CyberpunkText;
