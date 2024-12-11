'use client';

import { theme } from "./styles/theme";

export default function Loading() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div style={{
          width: '100px',
          height: '100px',
          border: `5px solid ${theme.colors.white}`,
          borderTop: `5px solid ${theme.colors.secondary}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
}
  