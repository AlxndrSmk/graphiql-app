import React, { useState } from 'react';
import { CMCType, PrettierArgs, TEditor, TEditorHOC } from '@/types/types';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { CLEAN_IMAGE, PLAY_IMAGE } from '@/constants/buttonsImages';
import Tabs from '@/components/Tabs/Tabs';
import { prettify } from '@/utils/prettify';
import createGQLArgs from '@/utils/createGQLArgs';
import { useSelector } from 'react-redux';
import StoreType from '@/redux/store/store-type';
import { useLazyGetGQLResponseQuery } from '@/redux/rtk-query/fetchApI';
import styles from '@/components/Editor/Editor.module.scss';

const Editor = (
  EditorComponent: React.FC<CMCType>,
  props: TEditor
): React.FC<TEditorHOC> => {
  const { type } = props;
  const QueryEditor: React.FC<TEditorHOC> = ({
    setStateData,
    setShow,
    isShow,
    isTablet,
  }) => {
    const [stateInput, setStateInput] = useState(
      'query getCharacters {\n' +
        '  characters(page: 1, filter: {\n' +
        '    name: "Rick"\n' +
        '  }) {\n' +
        '    results {\n' +
        '      id\n' +
        '      name\n' +
        '      image\n' +
        '    }\n' +
        '  }\n' +
        '}'
    );
    const [variables, setVariables] = useState<string>('');
    const [headers, setHeaders] = useState<string>('');

    const urlFromStore = useSelector((state: StoreType) => state.url);
    const [fetchGQL] = useLazyGetGQLResponseQuery();

    const handleEditorChange = (value: string): void => {
      setStateInput(value);
    };

    const handlePrettifyClick = (): void => {
      setStateInput(prettify(stateInput));
    };
    const handleExecute = (): void => {
      const args: PrettierArgs = createGQLArgs(
        stateInput,
        variables,
        headers,
        urlFromStore
      );

      if (args.errors) {
        setStateData(`errors:\n ${args.errors!.join('\n')}`);
      } else {
        fetchGQL(args.args, true).then(({ data, error, isSuccess }) => {
          const result: string = isSuccess
            ? prettify(JSON.stringify(data))
            : prettify(JSON.stringify(error));
          setStateData(result);
        });
      }
    };

    const openNext = (): void => {
      setShow((prev) => !prev);
    };

    return (
      <div className={`${styles.editor} ${isShow && styles.open}`}>
        <div className={styles.editor__text}>
          <EditorComponent
            valueView={stateInput}
            readOnly={false}
            eventOnChange={handleEditorChange}
          />
        </div>
        {isTablet && (
          <button className={styles.show_next} onClick={openNext}>
            <Image
              src="/openNext.svg"
              alt="open JSON Viewer"
              width="30"
              height="30"
            />
          </button>
        )}
        <div className={styles.editor__btns}>
          <Button
            img={CLEAN_IMAGE}
            isTooltip={true}
            onHoverText="Prettify"
            onClick={handlePrettifyClick}
          />
          <Button
            img={PLAY_IMAGE}
            isTooltip={true}
            onHoverText="Execute query"
            onClick={handleExecute}
            className="execute_btn"
          />
        </div>
        <Tabs
          headers={headers}
          setHeaders={setHeaders}
          variables={variables}
          setVariables={setVariables}
        />
      </div>
    );
  };

  const JsonEditor: React.FC<TEditorHOC> = ({
    stateData,
    setShow,
    isShow,
    isTablet,
  }) => {
    const openNext = (): void => {
      setShow((prev) => !prev);
    };
    return (
      <div className={`${styles.editor} ${isShow && styles.open}`}>
        <div className={styles.editor__text}>
          <EditorComponent valueView={stateData} readOnly={true} />
        </div>
        {isTablet && (
          <button className={styles.show_next} onClick={openNext}>
            <Image
              src="/openNext.svg"
              alt="open JSON Viewer"
              width="30"
              height="30"
            />
          </button>
        )}
      </div>
    );
  };

  if (type === 'query') return QueryEditor;

  return JsonEditor;
};

export default Editor;
