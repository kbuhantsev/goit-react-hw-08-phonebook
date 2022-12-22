import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsVerified,
  selectIsVerifying,
} from 'redux/user/selectors';

export function useUser() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isVerified = useSelector(selectIsVerified);
  const isVerifying = useSelector(selectIsVerifying);

  return { user, isLoggedIn, isRefreshing, isVerified, isVerifying };
}
