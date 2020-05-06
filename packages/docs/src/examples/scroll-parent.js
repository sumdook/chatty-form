/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ChattyForm, Input, Select, MultiSelect } from 'chatty-form';

export default function ScrollParentExample() {
  const myref = React.useRef();
  return (
    <div
      ref={myref}
      sx={{
        height: 300,
        overflowY: 'scroll',
        border: '1px solid rgba(0,0,0,0.2)',
        px: 2,
      }}
    >
      <ChattyForm scrollParent={myref}>
        <Input
          name="name"
          question="Howdy! What's your name?"
          placeholder="Type your answer"
        />
        <Select
          name="pet"
          question="Do you like dogs more or cats?"
          options={[
            { label: 'Dogs', value: 'dogs' },
            { label: 'Cats', value: 'cats' },
          ]}
        />

        <MultiSelect
          name="multi"
          question="Which of these are fruits?"
          options={[
            { label: 'Pumpkins', value: 'Pumpkins' },
            { label: 'Peppers', value: 'Peppers' },
            { label: 'Cucumber', value: 'Cucumber' },
            { label: 'Tomato  ', value: 'Tomato' },
            { label: 'Peas  ', value: 'Peas' },
          ]}
        />
      </ChattyForm>
    </div>
  );
}
