import { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import { TooltipContent } from '../types';

interface InfoTooltipProps {
  content: TooltipContent;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export default function InfoTooltip({ content, position = 'top' }: InfoTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const iconRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;

      let top = rect.top + scrollTop;
      let left = rect.left + scrollLeft;

      if (position === 'top') {
        top = rect.top + scrollTop - 8;
        left = rect.left + scrollLeft + rect.width / 2;
      } else if (position === 'right') {
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.right + scrollLeft + 8;
      }

      setCoords({ top, left });
    }
  }, [visible, position]);

  return (
    <span className="relative inline-flex items-center ml-1">
      <span
        ref={iconRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-help text-gray-400 hover:text-blue-500 transition-colors"
      >
        <HelpCircle size={14} />
      </span>
      {visible && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            top: coords.top,
            left: coords.left,
            transform: 'translate(-50%, -100%) translateY(-8px)',
            zIndex: 9999,
          }}
          className="w-64 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden pointer-events-none"
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
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full"
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
