import { DEV, createContext, createEffect, useContext } from 'solid-js';
import type { Component, JSX } from 'solid-js';

type AlertContextDefaultValue = {};

const AlertContext = createContext<AlertContextDefaultValue>({});

type AlertProviderComponent = Component<{
  children?: JSX.Element;
  activateMobileWhen?: boolean;
}>;

export const AlertProvider: AlertProviderComponent = (props) => {
  const activateMobileWhen = (
    (matchMedia: typeof window.matchMedia) => () =>
      props.activateMobileWhen || matchMedia('(any-pointer:coarse)').matches
  )(window.matchMedia);

  // TODO: remove latter (for debugging prepense)
  if (DEV != null) {
    createEffect(() => {
      console.log('activateMobileWhen:', activateMobileWhen());
    });
  }

  return (
    <AlertContext.Provider value={{}}>{props?.children}</AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);

/*
  ...
  const alert = useAlert();
  ...

  ...
  <button
    type="button"
    onClick={() => alert.show()}
  >
    Show Alert
  </button>
  ...

  ...
  <button
    type="button"
    onClick={() => alert.hide()}
  >
    Hide Alert
  </button>
  ...

  ...
  <div>
    <Show
      when={alert.isVisible}
      children="Alert is visible! :)"
      fallback="Alert is not visible! :("
    />
  </div>
  ...

  ...
    alert.onShow(() => {
      console.log('Alert is shown!');
    });
  ...

  ...
    alert.onHide(() => {
      console.log('Alert is hidden!');
    });
  ...
*/
