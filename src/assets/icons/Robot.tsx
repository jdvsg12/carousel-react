import React from "react"

const Robot = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            stroke="currentColor"
            strokeWidth={1.5}
            d="M14.706 4.313H9.294a4.982 4.982 0 0 0-4.982 4.981v5.412a4.982 4.982 0 0 0 4.982 4.982h5.412a4.982 4.982 0 0 0 4.982-4.982V9.294a4.982 4.982 0 0 0-4.982-4.982Z"
        />
        <path
            stroke="currentColor"
            strokeWidth={1.5}
            d="M19.605 15.588h1.62a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62M4.394 15.588H2.776a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.765 8.412v-4.1M21.225 8.412l-.01-4.1M9.95 15.237a2.91 2.91 0 0 0 4.1 0M7.88 10.975 8.903 9.95l1.025 1.025M14.03 10.975l1.025-1.025 1.024 1.025"
        />
    </svg>
)
export default Robot
