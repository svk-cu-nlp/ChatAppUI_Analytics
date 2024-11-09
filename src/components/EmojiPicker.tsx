import React from 'react';

const EMOJI_LIST = [
  '😊', '😂', '🥰', '😍', '😎', '😇', '🤔', '😅', '😄', '👍',
  '❤️', '🎉', '✨', '🔥', '👋', '🙌', '👏', '🤝', '💪', '🌟'
];

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
  isOpen: boolean;
}

export default function EmojiPicker({ onEmojiSelect, isOpen }: EmojiPickerProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-2 border border-gray-200 grid grid-cols-5 gap-2 w-64">
      {EMOJI_LIST.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onEmojiSelect(emoji)}
          className="text-2xl hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}