import React, { useState, useEffect, useRef } from 'react';

type Props = {
  label?: string;
  placeholder?: string;
  id?: string;
  name: string;
  value?: string;
  disable?: boolean;
  readonly?: boolean;
  rows?: number | undefined;
  minLength?: number | undefined;
  maxLength?: number | undefined;
  fixedSize?: boolean;
  AutoGrow?: boolean;
  borderRadious?: 'small' | 'medium' | 'large';
  variant: 'default' | 'primary' | 'secondary';
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addClass?: string;
};

function getRandomText(len: number) {
  return Math.random().toString(36).substr(2, len);
}

const TextArea = (props: Props) => {
  const {
    label,
    placeholder,
    id = getRandomText(10),
    name,
    value,
    disable,
    readonly,
    variant,
    borderRadious,
    rows = 3,
    minLength,
    maxLength,
    fixedSize,
    handleChange,
    AutoGrow,
    addClass,
  } = props;
  const style: any = {
    resize: fixedSize ? 'none' : 'vertical',
  };

  //  Auto Growing Textarea Start //
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [textAreaValue, setTextAreaValue] = useState<String>();

  useEffect(() => {
    if (textareaRef && textareaRef.current && AutoGrow) {
      textareaRef.current.style.height = `${23 * rows}px`;
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 10 + 'px';
    }
  }, [textAreaValue]);

  const onChange = (event: any) => {
    handleChange(event);
    if (AutoGrow) {
      setTextAreaValue(event.target.value);
    }
  };
  //  Auto Growing Textarea End //
  return (
    <>
      <div
        className={`form-group ${variant ? `background-${variant}` : ''} ${
          borderRadious ? `rounded-${borderRadious}` : ''
        } ${addClass ? addClass : ''}`}
      >
        {label && (
          <label htmlFor={id} className='control-label'>
            {label}
          </label>
        )}
        <div className='input-group'>
          <textarea
            id={id}
            name={name}
            style={style}
            className={`textarea-control`}
            disabled={disable}
            readOnly={readonly}
            placeholder={placeholder}
            rows={rows}
            onChange={onChange}
            ref={textareaRef}
            minLength={minLength}
            maxLength={maxLength}
          >
            {value}
          </textarea>
        </div>
      </div>
    </>
  );
};

export default TextArea;
