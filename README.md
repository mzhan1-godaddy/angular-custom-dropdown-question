# Angular Custom Dropdown
Create a reusable dropdown component, named <custom-dropdown> without using <select> or <option> tags

## Requirements
- use HTML <div> elements for all elements.
- <custom-dropdown/> should support the following input props:
    - id: string
    - items: array of `DropdownItem`s
    - change: call back function
Current Value Element
- The current value element should always render the current value of the dropdown
- The first render should start with an empty value
- Clicking on the dropdown should toggle the visibility of the dropdown items in the list
- Clicking any list item should do the following:
    - Update the current value of the dropdown
    - Hide the list items
    - Invoke the method handleInputChange(event: InputChangeEvent) of the parent
- In the onChange function, event has the shape:
```json
{
    id: string,
    value: {
        label: string,
        value: string
    }
}
```
## Dropdown States
Here's some images displaying different states of the dropdown:
### Initial Render
![Initial Render](./public/initial-render.png)
### After Current Value Element Clicked
![After Current Value Element Clicked](./public/after-current-value-element-clicked.png)
### After Item Selected
![After Item Selected](./public/after-item-selected.png)
