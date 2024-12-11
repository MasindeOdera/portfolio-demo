import styled from "styled-components";

const SkeletonContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;

const SkeletonLoader = () => {
  return (
    <SkeletonContainer />
  );
};

export default SkeletonLoader;
