/**
*
* SubHeader
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Title = styled.div`
  font-size: 1.5em;
  margin-top: 0.9em;
  margin-bottom: 0.9em;
`

const SubHeader = ({title}) => (
  <Title>
    <FormattedMessage {...messages[title]} />
  </Title>
);


SubHeader.propTypes = {

};

export default SubHeader;
