# NumSys Converter – Program Documentation

## Technologies Used

- **HTML:** Structure of the app  
- **CSS:** Styling and futuristic digital effects  
- **JavaScript:** Conversion logic and interactivity

## Program Structure

- **index.html:** Layout and input/output elements.  
- **style.css:** Styling with purple neon glow and responsive design.  
- **script.js:** Implements conversion logic, event handling, history, and copy functionality.  
- **background.jpg (optional):** Tech-inspired background image.

## Functionality

1. User enters a number.  
2. User selects “From” and “To” systems.  
3. Conversion logic executes:
   - Base conversion for decimal, binary, octal, hex  
   - 1’s and 2’s complement logic  
   - NAF algorithm  
4. Result displayed with copy button.  
5. Conversion history logs previous entries.  
6. “Convert to All” button displays all system equivalents.

## JavaScript Functions

- `convertNumber(num, from, to)` → Handles main conversion logic  
- `toOnesComplement(decimal)` / `fromOnesComplement(num)` → 1’s complement  
- `toTwosComplement(decimal)` / `fromTwosComplement(num)` → 2’s complement  
- `nafConversion(num, from, to)` → NAF conversion  
- Event listeners for convert, convert-all, and copy buttons

## User Interface

- Responsive container layout  
- Input field, dropdowns, buttons, result panel, history panel  
- Accessibility with `aria-label` attributes  
- Neon purple glow, monospace font, dark theme

## Sample Usage

- Input: `1010`  
- From: Binary  
- To: Decimal  
- Result: `10`  
- History entry: `1010 (Binary) → 10 (Decimal)`
