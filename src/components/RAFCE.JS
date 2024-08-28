import React from 'react'

const RAFCE = () => {
  return (
    <div>RAFCE
<!-- Container div with inline styles -->
<div class="container" style="background-color: #f0f0f0; padding: 20px;">
  <!-- Heading with inline style -->
  <h1 style="color: #333;">Welcome to My Website</h1>
  <!-- Paragraph with nested elements and styled link -->
  <p>This is a paragraph with <strong>bold text</strong> and a <a href="https://example.com" style="color: blue; text-decoration: none;">link</a>.</p>
  <!-- Unordered list -->
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <!-- Image with inline style -->
  <img src="image.jpg" alt="An example image" style="max-width: 100%;">
  <!-- Form with various input types -->
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <input type="submit" value="Submit" style="background-color: green; color: white;">
  </form>
</div>



    </div>
  )
}

export default RAFCE