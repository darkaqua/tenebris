import React from 'react';
import {cn} from "shared/utils";
// @ts-ignore
import css from "./icon.module.scss";

export type IconProps = {
	strokeWidth?: number;
	fill?: boolean;
} & React.HTMLProps<{}>;

export const Icon: React.FC<IconProps> = ({
	className,
	...props
}) =>
	<div className={cn(css.icon, className)} {...props} />;
