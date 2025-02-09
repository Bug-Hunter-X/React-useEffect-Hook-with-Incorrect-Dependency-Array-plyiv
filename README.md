# React useEffect Hook with Incorrect Dependency Array

This repository demonstrates a common issue in React applications involving the `useEffect` hook:  incorrectly specifying the dependency array, leading to unnecessary re-renders and potential memory leaks. 

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected implementation.

## Problem

The original code fetches data from an API every time the `count` state variable changes. This is inefficient and may lead to memory leaks if the component unmounts before the fetch completes.

## Solution

The solution addresses these issues by: 

1. **Correct Dependency Array**:  Only include variables that directly affect the effect's logic. 
2. **Cleanup**:  Use the return function in `useEffect` to clean up any ongoing operations, such as cancelling fetch requests when the component unmounts.
3. **Optimization**: Introduce additional logic (e.g., using `useCallback` or debouncing) to further optimize unnecessary re-renders based on the use case.

## How to Run

1. Clone the repository
2. Navigate to the repository directory using command prompt
3. Install dependencies using: `npm install`
4. Run the application using: `npm start`