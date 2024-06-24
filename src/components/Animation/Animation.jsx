import gsap from "gsap";
import { Icon } from "./Icon";
import { useLayoutEffect, useRef } from "react";
import { Section, Wrapper } from "./Animation.styled";

const Animation = ({ onComplete }) => {
  const hands = useRef(null);
  const p = useRef(null);
  const r = useRef(null);
  const a1 = useRef(null);
  const t = useRef(null);
  const s = useRef(null);
  const i = useRef(null);
  const a2 = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ onComplete });

    const duration = 0.8;

    gsap.to(a1.current, { y: 150, opacity: 1, duration, rotation: 360 });
    gsap.to(r.current, { x: 50, opacity: 1, duration });
    gsap.to(p.current, { x: 100, opacity: 1, duration });
    gsap.to(t.current, { x: -49, opacity: 1, duration });
    gsap.to(s.current, { x: -68, opacity: 1, duration });
    gsap.to(i.current, { x: -61, opacity: 1, duration });
    gsap.to(a2.current, { x: -67, opacity: 1, duration });
    tl.to(hands.current, {
      x: 120,
      y: 155,
      opacity: 1,
      duration,
      delay: 0.8,
    });
  }, [onComplete]);

  return (
    <Section>
      <Wrapper>
        <Icon
          width={148}
          height={154}
          icon="hands"
          ref={hands}
          className="icon-hands"
        />
        <Icon width={55} height={61} icon="p" ref={p} className="icon-p" />
        <Icon width={20} height={24} icon="r" ref={r} className="icon-r" />
        <Icon width={20} height={24} icon="a" ref={a1} className="icon-a1" />
        <Icon width={20} height={24} icon="t" ref={t} className="icon-t" />
        <Icon width={20} height={24} icon="s" ref={s} className="icon-s" />
        <Icon width={20} height={24} icon="i" ref={i} className="icon-i" />
        <Icon width={20} height={24} icon="a" ref={a2} className="icon-a2" />
      </Wrapper>
    </Section>
  );
};

export default Animation;
