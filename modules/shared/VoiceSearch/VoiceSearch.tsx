import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { forwardRef } from 'react';
import Input from '@shared/Input';
import { StyledVoiceButton, StyledVoiceSearch } from './styled';
import IconWrapper from '../IconWrapper';

interface IVoiceSearchProps {
  children?: React.ReactNode;
}

// trunk-ignore(eslint/react/display-name)
const VoiceSearch:React.FC = forwardRef<HTMLInputElement, IVoiceSearchProps>((props, ref) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const hanldeButtonClick = () => {
    return listening ?
            SpeechRecognition.stopListening()
            :
            SpeechRecognition.startListening();
  }

  return (
    <StyledVoiceSearch>
      <Input type="search" placeholder='Search' iconLeft={'SearchOutlined'} ref={ref} />
      {
        browserSupportsSpeechRecognition && (
          <StyledVoiceButton onClick={hanldeButtonClick}>
            <IconWrapper icon='KeyboardVoiceOutlined' />
          </StyledVoiceButton>
        )
      }
    </StyledVoiceSearch>
  );
}
)
export default VoiceSearch;
