import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
border:2px solid transparent;
border-radius:4px;
padding:10px 20px;
cursor:pointer;
font-size:1rem;
transition:background-color 0.3s ease, color 0.3s ease;

${(props) => props.filled ? `
  background-color:${props.bg || "#007BFF"};
  color:${props.color || "white"};
  border:none;
  `: `
  background-color:#fff;
  color:${props.color || "#000"};
  border:2px solid ${props.bg || "#000"};
  `}
  `;
