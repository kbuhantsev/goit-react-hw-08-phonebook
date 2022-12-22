import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useUser } from 'hooks';
import { useEffect } from 'react';
import { verify } from 'redux/user/operations';
import Box from 'components/Box';

export default function Verify() {
  const { isVerified } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { token } = useParams();

  useEffect(() => {
    dispatch(verify({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (isVerified) {
      navigate('/phones', { replace: true });
    }
  }, [isVerified, navigate]);

  return isVerified === null ? (
    <Box>
      <CircularProgress />
    </Box>
  ) : (
    <>Можно сделать повторую отправку</>
  );
}
