import { KeyboardVoiceOutlined, SearchOutlined } from '@mui/icons-material';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { forwardRef, useEffect } from 'react';
import Input from '../Input';
import { StyledVoiceButton, StyledVoiceSearch } from './styled';

interface IVoiceSearchProps {
  children?: React.ReactNode;
}

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
      <Input type="search" placeholder='Search' IconLeft={SearchOutlined} ref={ref} />
      {
        browserSupportsSpeechRecognition && (
          <StyledVoiceButton onClick={hanldeButtonClick}>
            <KeyboardVoiceOutlined fontSize='inherit' />
          </StyledVoiceButton>
        )
      }
    </StyledVoiceSearch>
  );
}
)
export default VoiceSearch;
