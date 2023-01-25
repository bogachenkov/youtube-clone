import RadioInput from '@ui/RadioInput';
import Spacer from '@ui/Spacer';
import Title from '@ui/Title';
import React from 'react';

interface ISelectHistoryTypeProps {
  children?: React.ReactNode;
}

const SelectHistoryType:React.FC<ISelectHistoryTypeProps> = (props) => {
  return (
    <>
      <Title size={17}>
        History Type
      </Title>
      <Spacer vertical={28} />
      <RadioInput label="Watch history" name='history-type' defaultChecked />
      <Spacer vertical={22} />
      <RadioInput label="Community" name='history-type' />
    </>
  );
}

export default SelectHistoryType;
