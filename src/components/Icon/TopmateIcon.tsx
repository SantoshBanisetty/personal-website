import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const TopmateIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"
      fill="currentColor"></path>
  </Icon>
));

export default TopmateIcon;
