# Instagram Like Feature Using JavaScript



This project demonstrates a simple like button animation using HTML, CSS, and JavaScript. When the user clicks the like button, an animated effect is triggered on an icon (heart) inside the button, making it turn red, grow, and then disappear with a smooth transition.

## Features

- **Like Button**: A clickable element that triggers the animation.
- **Heart Animation**: When clicked, the heart icon changes color to red, grows in size, and fades out.
- **Smooth Transition**: The heart icon scales down and fades out after 3 seconds, creating a smooth animation effect.

## Technologies Used

- **HTML**: Markup for the structure of the button and icon.
- **CSS**: Styling for the button and animation effects.
- **JavaScript**: Interactivity and animation handling.

## How It Works

1. When the user clicks the like button (`#cardborder`), a `click` event is triggered.
2. The heart icon (`<i>`) changes its color to red, indicating that the "like" has been given.
3. The heart icon grows and becomes visible with full opacity.
4. After 3 seconds, the heart icon shrinks back to its original size and fades out using a smooth transition.
5. The effect is achieved by manipulating CSS properties such as `color`, `opacity`, `transform`, and `transition`.

## HTML Structure

Here’s an example of the basic HTML structure:

```html
<div id="cardborder">
    <i class="heart-icon">❤️</i>
</div>
<p id="like">You liked this!</p>
```


## Demo
 - you can find the demo[here]()

