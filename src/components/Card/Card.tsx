import { ReactNode } from 'react';
import { Card as MuiCard, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import { WithChildren } from '../../types';

interface CardProps extends Partial<WithChildren> {
  title?: string;
  subheader?: string;
  headerAvatar?: ReactNode;
  headerAction?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
}

const Card = ({ children, title, subheader, headerAvatar, headerAction, content, actions }: CardProps) => {
  return (
    <MuiCard>
      {(title || subheader) && (
        <CardHeader title={title} subheader={subheader} avatar={headerAvatar} action={headerAction} />
      )}
      {content && (
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {content}
          </Typography>
        </CardContent>
      )}
      {children}
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
};

export default Card;
