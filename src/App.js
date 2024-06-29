import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
	const [width, setWidth] = React.useState(window.innerWidth);

	function handleWindowSizeChange() {
			setWidth(window.innerWidth);
	}
	React.useEffect(() => {
			window.addEventListener('resize', handleWindowSizeChange);
			return () => {
					window.removeEventListener('resize', handleWindowSizeChange);
			}
	}, []);

	const isMobile = width <= 768;

  return (
    <>
      <CharacterEditor isMobile={isMobile} />
      <Footer />
    </>
  );
}

export default App;
