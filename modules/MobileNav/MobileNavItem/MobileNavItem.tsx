import { SectionLinkType } from '@const/navigation';
import Button from '@modules/shared/Button';
import IconWrapper from '@modules/shared/IconWrapper';
import Row from '@modules/shared/Row';
import Text from '@modules/shared/Text';
import { noop } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { StyledMobileNavItem } from './styled';

interface IMobileNavItemProps extends SectionLinkType {
  children?: React.ReactNode;
}

const MobileNavItem:React.FC<IMobileNavItemProps> = ({
  icon,
  label,
  href
}) => {
  const { pathname, push } = useRouter();

  return (
    <StyledMobileNavItem>
      <Button
        theme='text'
        onClick={!!href ? () => push(href) : noop}
      >
        <Row direction='column' gap={2}>
          <IconWrapper
            size={!label ? 42 : 30}
            icon={icon}
            color={href === pathname ? 'var(--color-red)' : 'inherit'}
          />
          <Text color='inherit' size={8} weight='regular'>
            {label}
          </Text>
        </Row>
      </Button>
    </StyledMobileNavItem>
  );
}

export default MobileNavItem;
