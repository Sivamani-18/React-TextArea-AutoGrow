## React TextArea Auto Resize

The react-textarea-auto-resize npm package is a utility that provides an auto-resizing feature for textarea components in React. It automatically adjusts the height of a textarea based on its content, allowing it to grow or shrink dynamically as the user types or deletes text.

When using this package, you no longer need to manually handle the resizing logic or set fixed rows for the textarea. Instead, the package takes care of adjusting the height to fit the content.

### Installation

To install the package, you can use npm or yarn:

```sh
npm install react-textarea-auto-resize
```

or

```sh
yarn add react-textarea-auto-resize
```

## Usage [Demo](https://codesandbox.io/s/react-textarea-auto-resize-yzdtmr)

Here's an example of how you can use the TextArea component from the package in your React application:

```sh
import React from "react";
import TextArea from "react-textarea-auto-resize";

const App = () => {

  return (
    <div>
      <TextArea
        label="Label"
        placeholder="Placeholder"
        name="myTextArea"
        value=""
        variant="default"
        borderRadious="small"
        rows={3}
        fixedSize={true}
        AutoGrow={true}
        handleChange={(event: any) => {
          // Handle the change event
        }}
        addClass="myTextareaClass"
      />
    </div>
  );
};

export default App;
```

Note: The **__minRows__** and **__maxRows__** props are optional. If not specified, the textarea will automatically adjust its height based on the content.

## Props

The TextArea component accepts the following props:


| Prop           | Type                                                                | Description                                                                                             |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| label          | string (optional)                                                   | Represents the label for the textarea.                                                                  |
| placeholder    | string (optional)                                                   | Represents the placeholder text for the textarea.                                                       |
| id             | string (optional)                                                   | Represents the id of the textarea.                                                                      |
| name           | string (required)                                                   | Represents the name of the textarea.                                                                    |
| value          | string (optional)                                                   | Represents the initial value of the textarea.                                                           |
| disable        | boolean (optional)                                                  | Indicates whether the textarea should be disabled.                                                      |
| readonly       | boolean (optional)                                                  | Indicates whether the textarea should be read-only.                                                     |
| rows           | number (optional) or undefined                                       | Represents the number of rows to display.                                                               |
| minLength        | number (optional) or undefined                                       | Represents the minimum number of text length the textarea should have.                                          |
| maxLength        | number (optional) or undefined                                       | Represents the maximum number of text length the textarea can expand to.                                        |
| fixedSize      | boolean (optional)                                                  | Indicates whether the textarea should have a fixed size or be resizable.                                |
| AutoGrow       | boolean (optional)                                                  | Indicates whether the textarea should automatically grow based on its content.                          |
| borderRadious  | 'small' \| 'medium' \| 'large' (optional)                            | Represents the border radius of the textarea. Possible values: 'small', 'medium', or 'large'.          |
| variant        | 'default' \| 'primary' \| 'secondary' (required)                     | Represents the variant of the textarea. Possible values: 'default', 'primary', or 'secondary'.         |
| handleChange   | (event: React.ChangeEvent<HTMLTextAreaElement>) => void (required)   | Function called when the textarea value changes. Accepts a `ChangeEvent` object as an argument.        |
| addClass       | string (optional)                                                   | Represents additional CSS classes to be added to the textarea.                                          |
| minRows        | number (optional) or undefined                                       | Represents the minimum number of rows the textarea should have.                                          |
| maxRows        | number (optional) or undefined                                       | Represents the maximum number of rows the textarea can expand to.                                        |

## Configuration Options

Here's a list of configuration options for the app page where you want to use the TextArea component:

Import the **TextArea** component from the package in your app page file.

Use the **TextArea** component and provide the necessary props as mentioned in the usage example.

Customize the component's behavior by adjusting the props according to your requirements.

Make sure to follow the installation and usage instructions mentioned above to integrate the **react-textarea-auto-resize** component into your app page successfully.
