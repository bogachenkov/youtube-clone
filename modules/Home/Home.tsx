import React from 'react';

import HomePageVideos from "@modules/Home/VideoCollection";
import Container from "@ui/Container";
import Spacer from "@ui/Spacer";
import Tabs from "@ui/Tabs";

import { useTabs } from "@lib/hooks/useTabs";
import { CategoryTabs } from '@const/categories';

interface IHomeProps {
  children?: React.ReactNode;
}

const Home:React.FC<IHomeProps> = (props) => {
  const categoriesTabs = useTabs({ tabs: CategoryTabs, initialTabId: "All" });

  return (
    <>
      <Tabs {...categoriesTabs.tabProps} />
      <Spacer vertical={25} />
      <Container>
        <HomePageVideos />
      </Container>
    </>
  );
}

export default Home;
