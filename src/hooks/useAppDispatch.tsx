import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/interfaces';


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
) => useSelector(selector);