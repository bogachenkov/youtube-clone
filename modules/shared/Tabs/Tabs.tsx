import { Tab } from '@hooks/useTabs';
import useIsOverflowing from '@lib/hooks/useIsOverflowing';
import React, { useEffect, useRef, useState } from 'react';
import { easings, useSpring, useTransition, a } from 'react-spring';
import { StyledNav, StyledNavWrapper, StyledTab, StyledUnderline, StyledUnderlineThumb } from './styled';
import TabsScroller from './TabsScroller';

interface ITabsProps {
  children?: React.ReactNode;
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
}

const AnimatedUnderlineThumb = a(StyledUnderlineThumb);

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
  const isOverflowing = useIsOverflowing(navRef)

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);

  const onLeaveTabs = () => {
    setHoveredTabIndex(null);
  };

  const onEnterTab = (i: number) => {
    setHoveredTabIndex(i);
  };

  const onSelectTab = (i: number) => {
    setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
  };

  const scrollLeft = () => {
    navRef.current!.scrollLeft -= 150;
  }

  const scrollRight = () => {
    navRef.current!.scrollLeft += 150;
  }

  const underlineStyles = useSpring({
    to:
      selectedRect && navRect
        ? {
            width: selectedRect.width * 0.8,
            transform: `translateX(calc(${
              selectedRect.left - navRect.left + (navRef.current?.scrollLeft ?? 0)
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
    <StyledNavWrapper>
      <StyledNav
        ref={navRef}
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
        <AnimatedUnderlineThumb
          style={underlineStyles}
        />
      </StyledNav>
      <StyledUnderline />
      {
        isOverflowing && (
          <TabsScroller
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
          />
        )
      }
    </StyledNavWrapper>
  );
}

export default Tabs;
