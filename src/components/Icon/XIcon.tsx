import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const XIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
<svg   fill="#FFFFFF" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 L50 50 L90 10 L70 10 L50 30 L30 10 Z M10 90 L50 50 L90 90 L70 90 L50 70 L30 90 Z"/>
</svg>

  </Icon>
));

export default XIcon;
