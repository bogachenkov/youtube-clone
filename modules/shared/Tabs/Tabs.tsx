import { Tab } from '@hooks/useTabs';
import React, { useEffect, useRef, useState } from 'react';
import { easings, useSpring, useTransition, a } from 'react-spring';
import { StyledNav, StyledTab, StyledUnderline } from './styled';

interface ITabsProps {
  children?: React.ReactNode;
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
}

const AnimatedUnderline = a(StyledUnderline);

const Tabs:React.FC<ITabsProps> = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}) => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  const onLeaveTabs = () => {
    setHoveredTabIndex(null);
  };

  const onEnterTab = (i: number) => {
    setHoveredTabIndex(i);
  };

  const onSelectTab = (i: number) => {
    setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
  };

  const stylesChangingOnUpdate =
    hoveredRect && navRect
      ? {
          transform: `translate3d(${hoveredRect.left - navRect.left}px,${
            hoveredRect.top - navRect.top
          }px,0px)`,
          width: hoveredRect.width,
          height: hoveredRect.height,
        }
      : {};


  const underlineStyles = useSpring({
    to:
      selectedRect && navRect
        ? {
            width: selectedRect.width * 0.8,
            transform: `translateX(calc(${
              selectedRect.left - navRect.left
            }px + 10%))`,
            opacity: 1,
          }
        : { opacity: 0 },
    config: {
      duration: 150,
      easing: easings.easeOutCubic,
    },
  });

  return (
    <StyledNav
      ref={navRef}
      // className="flex flex-shrink-0 justify-center items-center relative z-0 py-2"
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, i) => {
        return (
          <StyledTab
            key={i}
            style={{
              ['--tab-font-color' as string]: (hoveredTabIndex === i || selectedTabIndex === i) ? '#FFF' : 'var(--color-gray)',
            }}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => onEnterTab(i)}
            onFocus={() => onEnterTab(i)}
            onClick={() => onSelectTab(i)}
          >
            {item.label}
          </StyledTab>
        );
      })}

      <AnimatedUnderline
        style={underlineStyles}
      />
    </StyledNav>
  );
}

export default Tabs;
