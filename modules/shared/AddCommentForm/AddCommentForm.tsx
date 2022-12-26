import { useCommentsStore } from '@lib/store';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import Row from '../Row';
import { StyledCommentForm, StyledCommentInput } from './styled';

interface IAddCommentFormProps {
  children?: React.ReactNode;
  commentType?: 'thread' | 'comment';
}

const AddCommentForm:React.FC<IAddCommentFormProps> = ({
  commentType = 'thread'
}) => {
  const [text, setText] = useState('');
  const { addCommentThread } = useCommentsStore();
  const defaultValue = useRef(text);
  const inputRef = useRef<HTMLSpanElement>(null);
  const { query } = useRouter();
  const videoId = query.video_id as string;

  const handleInput:React.FormEventHandler<HTMLSpanElement> = (e) => {
    setText(e.currentTarget.innerHTML);
  }

  const handleFormSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const commentText = text.replace(/<div>/gi,'<br>').replace(/<\/div>/gi,'');
    addCommentThread({
      videoId,
      commentText
    });
    setText('');
    defaultValue.current = '';
    if (inputRef.current) inputRef.current.innerHTML = '';
  }
  return (
    <StyledCommentForm
      onSubmit={handleFormSubmit}
    >
      <Avatar size={34} />
      <StyledCommentInput
        ref={inputRef}
        role="textbox"
        contentEditable
        data-placeholder={`Commenting publicly as John Doe`}
        onInput={handleInput} 
        dangerouslySetInnerHTML={{ __html: defaultValue.current }}  
      />
      <Button type='submit' fontSize={12} theme='secondary'>
        COMMENT
      </Button>
    </StyledCommentForm>
  );
}

export default AddCommentForm;
