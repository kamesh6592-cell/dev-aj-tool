(function() {
  'use strict';
  
  // Check if badge already exists
  if (document.getElementById('deepsite-badge-wrapper')) {
    return;
  }

  // Don't show badge on huggingface.co/deepsite
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  if (hostname === 'huggingface.co' && pathname.startsWith('/deepsite')) {
    return;
  }

  // Inject keyframes for gradient rotation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes deepsite-spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    
    #deepsite-badge-wrapper i {
      pointer-events: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      padding: 1.5px;
      transition-property: all;
      transition-timing-function: cubic-bezier(.4, 0, .2, 1);
      transition-duration: .2s;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      border-radius: inherit;
    }
    
    #deepsite-badge-wrapper i::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      border-radius: 9999px;
      opacity: 0;
      background: conic-gradient(from 0deg at 50% 50%, #ec4899, #fbbf24, #3b82f6, #ec4899);
      width: calc(100% * 2);
      padding-bottom: calc(100% * 2);
      transform: translate(-50%, -50%);
      z-index: -1;
      will-change: transform;
    }
    
    #deepsite-badge-wrapper:hover i::before {
      opacity: 1;
      animation: deepsite-spin 3s linear infinite;
    }
  `;
  document.head.appendChild(style);

  // Create badge wrapper (like the button element)
  const badgeWrapper = document.createElement('div');
  badgeWrapper.id = 'deepsite-badge-wrapper';
  
  // Create inner badge (like the span element)
  const badgeInner = document.createElement('span');
  badgeInner.id = 'deepsite-badge-inner';
  
  // Create mask element (the i element)
  const borderMask = document.createElement('i');
  
  // Create link
  const link = document.createElement('a');
  link.href = 'https://huggingface.co/deepsite';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  // Create icon placeholder
  const icon = document.createElement('img');
  icon.src = 'https://huggingface.co/deepsite/logo.svg';
  icon.alt = 'DeepSite';
  icon.style.marginRight = '6px';
  icon.style.width = '16px';
  icon.style.height = '16px';
  icon.style.filter = 'brightness(0) invert(1)';
  
  // Create text
  const text = document.createTextNode('Made with DeepSite');
  
  // Apply styles to wrapper (like button element)
  Object.assign(badgeWrapper.style, {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: '999999',
    color: '#ffffff',
    borderRadius: '9999px',
    background: 'rgba(0, 0, 0, 0.4)',
    fontSize: '12px',
    fontWeight: '500',
    display: 'inline-block',
    cursor: 'pointer',
    padding: '1.5px',
    overflow: 'hidden',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  });
  
  // Apply styles to inner badge (like span element)
  Object.assign(badgeInner.style, {
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '9999px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  });
  
  // Apply styles to link
  Object.assign(link.style, {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  });
  
  // Add hover effect
  badgeWrapper.addEventListener('mouseenter', function() {
    badgeInner.style.background = 'rgba(0, 0, 0, 0.75)';
    badgeInner.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.7)';
  });
  
  badgeWrapper.addEventListener('mouseleave', function() {
    badgeInner.style.background = 'rgba(0, 0, 0, 0.6)';
    badgeInner.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5)';
  });
  
  // Append elements
  link.appendChild(icon);
  link.appendChild(text);
  badgeInner.appendChild(link);
  badgeWrapper.appendChild(badgeInner);
  badgeWrapper.appendChild(borderMask);
  
  // Wait for DOM to be ready
  function init() {
    if (document.body) {
      document.body.appendChild(badgeWrapper);
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(badgeWrapper);
      });
    }
  }
  
  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

