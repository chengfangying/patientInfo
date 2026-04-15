import { useState } from 'react';
import { TooltipContent } from '../types';

interface OptionTooltipProps {
  content: TooltipContent;
  children: React.ReactNode;
}

export default function OptionTooltip({ content, children }: OptionTooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="absolute bottom-full left-0 mb-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50 pointer-events-none"
          style={{ minWidth: '220px' }}
        >
          {content.imageUrl && (
            <div className="w-full h-32 overflow-hidden bg-gray-50">
              <img
                src={content.imageUrl}
                alt="科普图片"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="p-3">
            <p className="text-xs text-gray-600 leading-relaxed">{content.text}</p>
          </div>
          <div
            className="absolute left-4 bottom-0 translate-y-full"
            style={{
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid white',
              filter: 'drop-shadow(0 1px 0 #e5e7eb)',
            }}
          />
        </div>
      )}
    </span>
  );
}
