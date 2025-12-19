import React from 'react';
import OriginalLayout from '@theme-original/Layout'; // Use OriginalLayout, not Layout
import AIChat from '@site/src/components/AIChat';

export default function LayoutWrapper(props) {
  return (
    <>
      {/* Original theme layout wraps all pages */}
      <OriginalLayout {...props} />

      {/* AIChat appears on all pages */}
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <AIChat />
      </div>
    </>
  );
}
