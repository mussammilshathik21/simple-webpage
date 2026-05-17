import React from 'react'
import "./guide.css"

function Guide() {
    return (
        <div className='outer'>
        <div class="guide-container">

            <h2>Instruction and Setup :</h2>

            <p>1. Download the ZIP file from GitHub.</p>

            <p>2. Extract the ZIP file to your computer.</p>

            <p>3. Open the extracted folder in Visual Studio Code.</p>

            <p>4. Open the terminal in VS Code.</p>

            <p>5. Move to the correct project folder path:</p>

            <ul>
                <li>cd project-folder-name</li>
            </ul>

            <p>6. Install all required packages:</p>

            <ul>
                <li>npm install</li>
            </ul>

            <p>7. Start the development server:</p>

            <ul>
                <li>npm run dev</li>
            </ul>

            <p>8. After running the command, you will get a local host link.</p>

            <ul>
                <li>Example: http://localhost:5173</li>
            </ul>

            <p>9. Copy the link and paste it into your browser to open the project.</p>
        </div>
        </div>
    )
}

export default Guide