import React, { useState } from 'react';

interface Props {
  className: string;
  hoverClass: string;
  text: string;
  onClickHandler: () => void;
  children: React.ReactNode;
}

function InputCTA(props: Props) {
  const { className, hoverClass, text, onClickHandler, children } = props;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const classes = hovered ? `${hoverClass} ${className}` : `${className}`;

  return (
    <button
      type='button'
      className={classes}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClickHandler}
    >
      {children}
      {text}
    </button>
  );
}

export default InputCTA;
