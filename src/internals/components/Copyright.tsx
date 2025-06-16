import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface CopyrightProps {
  sx?: object | object[];
  [key: string]: unknown;
}

export default function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: 'text.secondary',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {'Copyright \u00a9 '}
      <Link color="inherit" href="https://mui.com/" data-testid="copyright-link">
        Sitemark
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
