import { useDispatch, useSelector } from 'react-redux';
import { openSidebar, closeSidebar, toggleSidebar, setSidebarOpen } from '../contexts/sidebar/sidebarSlice';
import { RootState } from '@/contexts/store';

export const useSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const open = () => dispatch(openSidebar());
  const close = () => dispatch(closeSidebar());
  const toggle = () => dispatch(toggleSidebar());
  const setOpen = (open: boolean) => dispatch(setSidebarOpen(open));

  return {
    isOpen,
    open,
    close,
    toggle,
    setOpen,
  };
}; 