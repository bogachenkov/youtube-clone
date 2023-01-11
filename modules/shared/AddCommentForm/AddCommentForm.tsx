import { useSignIn } from '@lib/hooks/useSignInPush';
import { useVideoId } from '@lib/hooks/useVideoId';
import { useAuthStore, useCommentsStore } from '@lib/store';
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
  const { push } = useSignIn();
  const [text, setText] = useState('');
  const { addCommentThread, addComment } = useCommentsStore(({ addComment, addCommentThread }) => ({
    addComment,
    addCommentThread
  }));
  const user = useAuthStore(store => store.user);

  const defaultValue = useRef(text);
  const inputRef = useRef<HTMLSpanElement>(null);

  const videoId = useVideoId();

  const handleInput:React.FormEventHandler<HTMLSpanElement> = (e) => {
    setText(e.currentTarget.innerHTML);
  }

  const handlePaste:React.ClipboardEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    const range = document.getSelection()!.getRangeAt(0)!;
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);

    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
    setText(e.currentTarget.innerHTML);
  }

  const handleFocus:React.FocusEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    if (!user) {
      push();
    }
  };

  const handleFormSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const hasText = !!text.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '');
    if (!hasText) return;

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

  const isSignedIn = !!user;

  return (
    <StyledCommentForm
      onSubmit={handleFormSubmit}
    >
      {
       isSignedIn && <Avatar src={user.authorProfileImageUrl} size={34} />
      }
      <StyledCommentInput
        ref={inputRef}
        role="textbox"
        contentEditable
        data-placeholder={isSignedIn ? `Commenting publicly as ${user.authorDisplayName}` : 'Add a comment'}
        onInput={handleInput}
        onPaste={handlePaste}
        onFocus={handleFocus}
        dangerouslySetInnerHTML={{ __html: defaultValue.current }}  
      />
      <Button type='submit' fontSize={12} theme='secondary'>
        COMMENT
      </Button>
    </StyledCommentForm>
  );
}

export default AddCommentForm;
