import { useVideoId } from '@lib/hooks/useVideoId';
import { useCommentsStore } from '@lib/store';
import React, { useRef, useState } from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import { StyledCommentForm, StyledCommentInput } from './styled';

interface IAddCommentFormProps {
  children?: React.ReactNode;
  parentId?: string;
  onSubmit?: VoidFunction;
}

const AddCommentForm:React.FC<IAddCommentFormProps> = ({
  parentId,
  onSubmit
}) => {
  const [text, setText] = useState('');
  const { addCommentThread, addComment } = useCommentsStore(({ addComment, addCommentThread }) => ({
    addComment,
    addCommentThread
  }));
  const defaultValue = useRef(text);
  const inputRef = useRef<HTMLSpanElement>(null);
  const videoId = useVideoId();

  const handleInput:React.FormEventHandler<HTMLSpanElement> = (e) => {
    setText(e.currentTarget.innerHTML);
  }

  const handleFormSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const commentText = text.replace(/<div>/gi,'<br>').replace(/<\/div>/gi,'');
    if (parentId) {
      addComment(
        commentText,
        videoId,
        parentId
      );
    } else {
      addCommentThread(
        commentText,
        videoId,
      );
    }
    setText('');
    defaultValue.current = '';
    if (inputRef.current) inputRef.current.innerHTML = '';
    if (onSubmit) onSubmit();
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
