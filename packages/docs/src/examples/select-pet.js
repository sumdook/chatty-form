import React from 'react';
import { ChattyForm, Select } from 'chatty-form';

export default function SelectPetExample() {
  const [formState, setFormState] = React.useState({});

  return (
    <ChattyForm disableAutoScroll onChange={(values) => setFormState(values)}>
      <Select
        name="pet"
        question={`Hello ${formState.name}! I'm just trying to show off all I can do. Do you like dogs more or cats?`}
        options={[
          { label: 'Dogs', value: 'dogs' },
          { label: 'Cats', value: 'cats' },
        ]}
        finaltext={
          <img
            src={
              !formState.pet
                ? null
                : formState.pet.value === 'cats'
                ? 'https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif'
                : 'https://media.tenor.com/images/ce3496923232360bd50895dfbdf537ba/tenor.gif'
            }
            style={{ borderRadius: 20, height: 150 }}
          />
        }
      />
    </ChattyForm>
  );
}
