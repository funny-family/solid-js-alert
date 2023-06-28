import type { Component, JSX } from 'solid-js';

export type AlertRootElement = HTMLDivElement;

type AlertAttrs = JSX.HTMLElementTags['div'];

export type AlertProps = {};

type AlertCustomAttrs = JSX.CustomAttributes<AlertRootElement>;

export type AlertAttrsAndProps = AlertAttrs & AlertProps & AlertCustomAttrs;

export type AlertComponent = Component<AlertAttrsAndProps>;
