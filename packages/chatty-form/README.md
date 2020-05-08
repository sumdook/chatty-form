<p align="center">
 <img height="360px" alt="logo" src="https://chatty-form.netlify.app/og-image-1200x630.jpg"> <br/><br/><br/>
  <b>A highly theme-able and customisable form in the shape of a chat based interface for React.</b>
</p>

## Getting Started

Install chatty-form and it's peer dependencies in your project from npm or yarn

```sh
npm install chatty-form framer-motion

# or

yarn add chatty-form framer-motion
```

## Usage

This package contains only 4 components. A parent `ChattyForm` component and three input components `Input`, `Select` & `MultiSelect` which interact with the user.

Wrap any of the input component in **`<Chattyform/>`** to get started. Let's write the basic amount of code to get it up and running.

```jsx
<ChattyForm>
  <Input
    name="name"
    question="Howdy! What's your name?"
    placeholder="Type your answer"
  />
</ChattyForm>
```

There you go! We are now successfully using chatty-form.

---

#### You can find detailed [documentation](https://chatty-form.netlify.app/docs) on the [website](https://chatty-form.netlify.app/).
