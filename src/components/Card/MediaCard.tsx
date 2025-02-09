import { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardActions, CardMedia, Typography } from '@mui/material';
import { WithChildren } from '../../types';

interface MediaCardProps extends WithChildren {
  image: string;
  imageTitle?: string;
  title?: string;
  actions?: ReactNode;
}

const MediaCard = ({ children, image, imageTitle, title, actions }: MediaCardProps) => {
  return (
    <MuiCard>
      <CardMedia image={image} title={imageTitle} />
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
        )}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {children}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
};

export default MediaCard;
