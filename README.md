<p align="center">

  <!-- <img height="200px" alt="templogo" src="https://user-images.githubusercontent.com/1863771/76433547-c0e94e80-63b4-11ea-9cca-c859226e5021.png"> -->

<br><br>
<b>A highly theme-able and customisable form in the shape of a chat based interface for React.</b>

</p>

## Getting Started

Install chatty-form in your project from npm or yarn

```sh
npm install chatty-form

# or

yarn add chatty-form
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

#### You can find detailed documentation on the website.
