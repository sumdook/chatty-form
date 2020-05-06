/** @jsx jsx */
import { jsx, Flex, Button, useColorMode } from 'theme-ui';
import themeList from '../theme-list';

export default function ThemeChanger() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Flex sx={{ alignItems: 'center', display: ['none', 'none', 'flex'] }}>
      {Object.keys(themeList).map((themeName) => (
        <Button
          aria-label={`Theme change to ${themeName}`}
          key={themeName}
          variant={themeName === colorMode ? 'theme-selected' : 'theme'}
          sx={{ bg: themeList[themeName] }}
          onClick={() => {
            setColorMode(themeName);
          }}
        />
      ))}
    </Flex>
  );
}
