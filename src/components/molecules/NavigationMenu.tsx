import React from 'react';

import NavigationList from './NavigationList';
import TagList from './TagList';

import { navigation, categories } from '../../constants/navigation';

const Component: React.FC = () => (
  <>
    <NavigationList navigation={navigation} />
    <NavigationList title="カテゴリー" navigation={categories} />
    <TagList />
  </>
);

export default Component;
