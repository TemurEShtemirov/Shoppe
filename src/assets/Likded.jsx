import React from 'react';

export default function Liked() {
    return (
        <div style={{
            width: '25px',
            height: '25px',
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd" // Changed fillrule to fillRule
                strokeLinejoin="round" // Changed strokelinejoin to strokeLinejoin
                strokeMiterlimit="2" // Removed curly braces and added a valid number
                clipRule="evenodd"
                viewBox="0 0 500 500"
                id="like"
            >
                <path
                    fill="#ff3e3e"
                    d="M250,115C297.368,25 392.105,25 439.474,70C486.844,115 486.844,205 439.474,295C406.316,362.5 321.053,430 250,475C178.947,430 93.684,362.5 60.526,295C13.158,205 13.158,115 60.526,70C107.895,25 202.632,25 250,115Z"
                    transform="translate(-9.464 -17.476) scale(1.03785)"
                />
            </svg>
        </div>
    );
}
