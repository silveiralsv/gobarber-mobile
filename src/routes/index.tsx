import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}
      >
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
