```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="container">
        <div class="drop-targets">
            <div class="box">
                <div class="item" id="item" draggable="true"></div>
            </div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>
</html>
```

```js
/// <reference types="cypress" />

describe('drag and drop features', () => {
  it('drags and drops a box', () => {
    cy.visit('/');

    cy.get('#item')
      .trigger('dragstart');

    cy.get('.box')
      .last()
      .trigger('drop');
  });
});
```

If we run this we get:

```
(uncaught exception)TypeError: Cannot read properties of undefined (reading 'setData')
```

We need to add `DataTransfer` property:

* Update `./cypress/e2e/drag-drop.cy.js`

```diff
/// <reference types="cypress" />

describe('drag and drop features', () => {
  it('drags and drops a box', () => {
    cy.visit('/');

+   const dataTransfer = new DataTransfer();

    cy.get('#item')
-     .trigger('dragstart');
+     .trigger('dragstart', { dataTransfer });

    cy.get('.box')
      .last()
-     .trigger('drop');
+     .trigger('drop', {  dataTransfer});
  });
});
```