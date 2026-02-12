import { motion } from 'motion/react';
import { Check, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  const bgColors = {
    success: 'bg-green-500/20 border-green-500/50',
    error: 'bg-red-500/20 border-red-500/50',
    info: 'bg-blue-500/20 border-blue-500/50',
  };

  const textColors = {
    success: 'text-green-300',
    error: 'text-red-300',
    info: 'text-blue-300',
  };

  const icons = {
    success: <Check className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 20 }}
      className={`fixed top-4 right-4 px-6 py-4 rounded-lg border ${bgColors[type]} backdrop-blur-md flex items-center gap-3 z-50 max-w-sm`}
    >
      <div className={textColors[type]}>{icons[type]}</div>
      <p className={`flex-1 ${textColors[type]}`}>{message}</p>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-300">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
