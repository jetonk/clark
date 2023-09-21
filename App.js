import React, {useState} from 'react';
import {AppNavigator} from 'app/navigation';
import {AppContext} from 'app/context';

function App() {
  const [product, setProduct] = useState(null);

  return (
    <AppContext.Provider value={{product, setProduct}}>
      <AppNavigator />
    </AppContext.Provider>
  );
}

export default App;
