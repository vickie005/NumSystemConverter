# NumSys Converter – Process Documentation

## Project Overview

**Project Name:** NumSys Converter  
**Description:** Web app that converts numbers between Binary, Decimal, Octal, Hexadecimal, 1’s Complement, 2’s Complement, and NAF. Interactive UI with conversion history and copy functionality.

## Objectives

- Input a number in any supported system.  
- Convert it to any other supported number system.  
- Provide a “Convert to All” option.  
- Maintain conversion history.  
- Offer a tech-inspired, futuristic interface.

## Features

1. Input field for number entry.  
2. Dropdowns for “From” and “To” systems.  
3. Convert button for single conversion.  
4. Convert to All button.  
5. Result display with copy button.  
6. Conversion history panel.  
7. Accessibility with `aria-labels`.  
8. Futuristic dark theme with purple neon glow.

## Process Flow

1. User enters a number and selects source/target systems.  
2. Conversion logic executes:
   - Convert input to decimal if needed.  
   - Apply 1’s or 2’s complement logic if selected.  
   - Apply NAF algorithm if selected.  
3. Display result.  
4. Update conversion history.  
5. Copy functionality allows clipboard usage.  
6. “Convert to All” shows all system equivalents.
