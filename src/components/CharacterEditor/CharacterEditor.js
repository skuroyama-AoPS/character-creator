import React from 'react';

import {
  defaultSkinColor,
  defaultClothesColor,
} from '../../constants';
import Character from '../Character';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ControlPane from '../ControlPane';

import {
  bodyOptions,
  headOptions,
  faceOptions,
  accessoryOptions,
  skinColorOptions,
  clothesColorOptions,
} from './CharacterEditor.helpers';
import styles from './CharacterEditor.module.css';

function App({isMobile}) {
  const [body, setBody] = React.useState(0);
  const [head, setHead] = React.useState(0);
  const [face, setFace] = React.useState(0);
  const [accessory, setAccessory] = React.useState(0);
  const [skinColor, setSkinColor] = React.useState(defaultSkinColor);
  const [clothesColor, setClothesColor] = React.useState(
    defaultClothesColor
  );

  const characterWrapper = (
    <div className={styles.characterWrapper}>
      <Character
        body={body}
        head={head}
        face={face}
        accessory={accessory}
        skinColor={skinColor}
        clothesColor={clothesColor}
      />
    </div>
  );

  const headerStuff = (
    <header className={styles.header}>
      <h1 className={styles.title}>Create your Character</h1>
      <p className={styles.description}>
        Customize your character's look and style using the
        controls below. What sort of adventure will you embark on?{' '}
      </p>
    </header>

  );
  const controlColumn = (
    <div className={styles.controlColumn}>
      <ControlPane
        title="Bodies"
        options={bodyOptions}
        currentOption={body}
        handleSelectOption={setBody}
      />
      <ControlPane
        title="Heads"
        options={headOptions}
        currentOption={head}
        handleSelectOption={setHead}
      />
      <ControlPane
        title="Faces"
        options={faceOptions}
        currentOption={face}
        handleSelectOption={setFace}
      />
      <ControlPane
        title="Accessories"
        options={accessoryOptions}
        currentOption={accessory}
        handleSelectOption={setAccessory}
      />
      <ControlPane
        title="Skin Color"
        options={skinColorOptions}
        currentOption={skinColor}
        handleSelectOption={setSkinColor}
      />
      <ControlPane
        title="Clothing Color"
        options={clothesColorOptions}
        currentOption={clothesColor}
        handleSelectOption={setClothesColor}
      />
    </div>
  );

  const maxWidthWrapperClassNames = [styles.maxWidthWrapper];
  if (isMobile) {
    maxWidthWrapperClassNames.push(styles.mobile);
  }
  return (
    <main className={styles.characterEditor}>
      <MaxWidthWrapper className={maxWidthWrapperClassNames.join(" ")}>
        {headerStuff}
        {characterWrapper}
        {controlColumn}
      </MaxWidthWrapper>
    </main>
  );
}

export default App;
