import { useToggle } from '@lib/hooks/useToggle';
import React from 'react';
import CommentActions from '../CommentActions';
import CommentFormAccordion from '../CommentFormAccordion';

interface ICommentInteractiveProps {
  children?: React.ReactNode;
  id: string;
  likeCount: number;
  canRate: boolean;
  canReply: boolean;
  parentId?: string;
}

const CommentInteractive:React.FC<ICommentInteractiveProps> = ({
  id,
  likeCount,
  canRate,
  canReply,
  parentId
}) => {
  const [showForm, toggleShowForm] = useToggle();

  return (
    <>
      <CommentActions
        id={id}
        likeCount={likeCount}
        canRate={canRate}
        canReply={canReply}
        showForm={showForm}
        toggleShowForm={toggleShowForm}
      />

      <CommentFormAccordion
        isOpen={showForm}
        id={parentId || id}
        onSubmit={toggleShowForm}
      />
    </>
  );
}

export default CommentInteractive;
